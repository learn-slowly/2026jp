
'use client';

import { useState } from 'react';
import { Upload, Copy, Check, Link as LinkIcon, Image as ImageIcon, Loader2 } from 'lucide-react';
import Image from 'next/image';

export default function UploadPage() {
    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState('');
    const [uploading, setUploading] = useState(false);
    const [url, setUrl] = useState('');
    const [copied, setCopied] = useState(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFile(file);
            const objectUrl = URL.createObjectURL(file);
            setPreview(objectUrl);
            setUrl(''); // Reset URL on new file
        }
    };

    const handleUpload = async () => {
        if (!file) return;

        setUploading(true);
        try {
            const formData = new FormData();
            formData.append('file', file);

            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();
            if (data.url) {
                setUrl(data.url);
            } else {
                alert('업로드 실패');
            }
        } catch (error) {
            console.error(error);
            alert('업로드 중 오류가 발생했습니다.');
        } finally {
            setUploading(false);
        }
    };

    const handleCopy = () => {
        if (url) {
            navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-justice-green p-6 text-white text-center">
                    <h1 className="text-2xl font-bold flex items-center justify-center gap-2">
                        <LinkIcon className="w-6 h-6" />
                        이미지 링크 변환기
                    </h1>
                    <p className="text-white/80 mt-2 text-sm">
                        이미지를 업로드하면 구글시트에 넣을 수 있는<br />
                        링크로 만들어드립니다.
                    </p>
                </div>

                <div className="p-8 space-y-8">
                    {/* File Input Area */}
                    <div className="relative group">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                        />
                        <div className={`border-2 border-dashed rounded-xl p-8 text-center transition-all ${preview ? 'border-justice-green bg-justice-green/5' : 'border-gray-300 hover:border-justice-green hover:bg-gray-50'
                            }`}>
                            {preview ? (
                                <div className="space-y-4">
                                    <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-sm">
                                        <Image src={preview} alt="Preview" fill className="object-cover" />
                                    </div>
                                    <p className="text-sm text-justice-green font-bold">이미지 변경하기</p>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto text-gray-400 group-hover:bg-justice-green/10 group-hover:text-justice-green transition-colors">
                                        <ImageIcon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-700">이미지 선택</p>
                                        <p className="text-sm text-gray-400">또는 여기에 드래그하세요</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Action Button */}
                    <button
                        onClick={handleUpload}
                        disabled={!file || uploading || !!url}
                        className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all ${url
                                ? 'bg-gray-100 text-gray-400 cursor-default'
                                : !file
                                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                    : 'bg-justice-green hover:bg-justice-green-dark text-white shadow-lg hover:shadow-xl'
                            }`}
                    >
                        {uploading ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                변환 중...
                            </>
                        ) : url ? (
                            <>
                                <Check className="w-5 h-5" />
                                변환 완료!
                            </>
                        ) : (
                            <>
                                <Upload className="w-5 h-5" />
                                링크 만들기
                            </>
                        )}
                    </button>

                    {/* Result Area */}
                    {url && (
                        <div className="animate-fade-in-up bg-gray-50 p-4 rounded-xl border border-gray-200">
                            <p className="text-xs text-gray-500 mb-2 font-bold uppercase tracking-wider">Generated Link</p>
                            <div className="flex items-center gap-2">
                                <input
                                    type="text"
                                    readOnly
                                    value={url}
                                    className="flex-1 bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 outline-none"
                                />
                                <button
                                    onClick={handleCopy}
                                    className={`p-2 rounded-lg transition-colors ${copied ? 'bg-green-500 text-white' : 'bg-gray-900 text-white hover:bg-gray-700'
                                        }`}
                                >
                                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                </button>
                            </div>
                            <p className="text-center mt-3 text-xs text-justice-purple font-medium">
                                👉 위 링크를 복사해서 구글시트에 붙여넣으세요!
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
