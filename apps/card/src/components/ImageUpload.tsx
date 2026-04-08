'use client';

import { useState, useRef, useEffect } from 'react';
import { Upload, X, Loader2, Image as ImageIcon } from 'lucide-react';
import imageCompression from 'browser-image-compression';

interface ImageUploadProps {
    value?: string;
    onChange: (url: string) => void;
    error?: any;
}

export function ImageUpload({ value, onChange, error }: ImageUploadProps) {
    const [uploading, setUploading] = useState(false);

    // Validate initial value
    const getValidUrl = (url?: string) => {
        if (url && (url.startsWith('http') || url.startsWith('data:image'))) {
            return url;
        }
        return null;
    };

    const [preview, setPreview] = useState<string | null>(getValidUrl(value));
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Sync preview with value prop changes (e.g., form reset or manual set)
    useEffect(() => {
        // Prevent setting preview if value is placeholder text or invalid URL
        if (value && (value.startsWith('http') || value.startsWith('data:image'))) {
            setPreview(value);
        } else {
            setPreview(null);
        }
    }, [value]);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setUploading(true);
        try {
            // 이미지 압축 (최대 4MB, 1920x1920 해상도로 제한)
            const options = {
                maxSizeMB: 4,
                maxWidthOrHeight: 1920,
                useWebWorker: true,
            };
            const compressedFile = await imageCompression(file, options);

            // Preview immediately
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result as string);
            };
            reader.readAsDataURL(compressedFile);

            // 1. Get Signature
            const sigRes = await fetch('/api/upload-sig');
            if (!sigRes.ok) throw new Error('Failed to get signature');
            const sigData = await sigRes.json();

            // 2. Upload to Cloudinary
            const formData = new FormData();
            formData.append('file', compressedFile);
            formData.append('api_key', sigData.apiKey);
            formData.append('timestamp', sigData.timestamp);
            formData.append('signature', sigData.signature);
            formData.append('folder', 'justice-election-2026');

            const res = await fetch(`https://api.cloudinary.com/v1_1/${sigData.cloudName}/image/upload`, {
                method: 'POST',
                body: formData,
            });

            if (!res.ok) {
                throw new Error('Upload to Cloudinary failed');
            }

            const data = await res.json();
            onChange(data.secure_url);
        } catch (err) {
            console.error(err);
            alert('이미지 업로드에 실패했습니다.');
            setPreview(null);
            onChange('');
        } finally {
            setUploading(false);
        }
    };

    const handleClear = () => {
        setPreview(null);
        onChange('');
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    return (
        <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">프로필 사진</label>

            <div className={`relative border-2 border-dashed rounded-xl p-4 transition-all ${error ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-justice-green hover:bg-green-50'}`}>
                <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    disabled={uploading}
                />

                {preview ? (
                    <div className="relative flex items-center gap-4">
                        <div className="relative w-20 h-20 rounded-full overflow-hidden border border-gray-200 bg-white">
                            {/* Use standard img tag to avoid 'Invalid URL' errors with strict Next.js Image parsing during editing */}
                            <img
                                src={preview}
                                alt="Preview"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    // Fallback if image fails
                                    console.error('Image load failed:', preview);
                                    // e.currentTarget.style.display = 'none'; // Don't hide completely to allow debugging
                                    e.currentTarget.src = 'https://placehold.co/400x400?text=Image+Error'; // Fallback
                                }}
                            />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">이미지가 선택되었습니다</p>
                            <p className="text-xs text-gray-500">클릭하여 변경</p>
                        </div>
                        <button
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleClear();
                            }}
                            className="z-20 p-2 text-gray-400 hover:text-red-500 transition"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                ) : (
                    <div className="text-center py-6">
                        <div className="mx-auto w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3 text-gray-400">
                            {uploading ? <Loader2 className="w-6 h-6 animate-spin" /> : <Upload className="w-6 h-6" />}
                        </div>
                        <p className="text-sm font-medium text-gray-900">
                            {uploading ? '업로드 중...' : '클릭하여 이미지 업로드'}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">PNG, JPG, GIF (용량 제한 없음)</p>
                    </div>
                )}
            </div>
            {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
        </div>
    );
}
