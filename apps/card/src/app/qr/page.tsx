
'use client';

import { useState, useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { Download, QrCode as QrIcon, Check, Copy } from 'lucide-react';

const COLORS = [
    { name: '기본 (검정)', value: '#000000', class: 'bg-black' },
    { name: '녹색', value: '#00A170', class: 'bg-justice-green' },
    { name: '핑크', value: '#EC3C87', class: 'bg-justice-pink' },
    { name: '보라', value: '#6B4B9E', class: 'bg-justice-purple' },
    { name: '노랑', value: '#E6CF00', class: 'bg-justice-yellow' }, // Darker yellow for contrast
];

export default function QRPage() {
    const [slug, setSlug] = useState('');
    const [type, setType] = useState<'card' | 'page'>('card');
    const [color, setColor] = useState(COLORS[0].value);
    const [downloaded, setDownloaded] = useState(false);
    const canvasRef = useRef<HTMLDivElement>(null);

    const baseUrl = type === 'card' ? 'https://card.justice21.org' : 'https://page.justice21.org';
    const targetUrl = slug ? `${baseUrl}/${slug}` : baseUrl;

    const handleDownload = () => {
        const canvas = canvasRef.current?.querySelector('canvas');
        if (canvas) {
            const url = canvas.toDataURL('image/png');
            const a = document.createElement('a');
            a.href = url;
            a.download = `justice-qr-${slug || 'main'}.png`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            setDownloaded(true);
            setTimeout(() => setDownloaded(false), 2000);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-gray-900 p-6 text-white text-center">
                    <h1 className="text-2xl font-bold flex items-center justify-center gap-2">
                        <QrIcon className="w-6 h-6" />
                        QR코드 생성기
                    </h1>
                    <p className="text-white/80 mt-2 text-sm">
                        후보자 명함이나 홍보물에 넣을<br />
                        QR코드를 생성하세요.
                    </p>
                </div>

                <div className="p-8 space-y-8">
                    {/* Controls */}
                    <div className="space-y-6">
                        {/* Type Selection */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">1. QR 타입</label>
                            <div className="flex bg-gray-100 p-1 rounded-lg">
                                <button
                                    onClick={() => setType('card')}
                                    className={`flex-1 py-2 rounded-md text-sm font-bold transition-all ${type === 'card'
                                            ? 'bg-white text-black shadow-sm'
                                            : 'text-gray-500 hover:text-gray-700'
                                        }`}
                                >
                                    웹명함 (Card)
                                </button>
                                <button
                                    onClick={() => setType('page')}
                                    className={`flex-1 py-2 rounded-md text-sm font-bold transition-all ${type === 'page'
                                            ? 'bg-white text-black shadow-sm'
                                            : 'text-gray-500 hover:text-gray-700'
                                        }`}
                                >
                                    홈페이지 (Page)
                                </button>
                            </div>
                        </div>

                        {/* ID Input */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">2. 후보자 ID (Slug)</label>
                            <input
                                type="text"
                                placeholder="예: hkd"
                                value={slug}
                                onChange={(e) => setSlug(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-2 focus:ring-black/10 outline-none transition-all"
                            />
                        </div>

                        {/* Color Selection */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">3. QR 색상</label>
                            <div className="flex justify-between gap-2">
                                {COLORS.map((c) => (
                                    <button
                                        key={c.name}
                                        onClick={() => setColor(c.value)}
                                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform ${c.class} ${color === c.value ? 'ring-2 ring-offset-2 ring-gray-900 scale-110' : 'hover:scale-105'
                                            }`}
                                        title={c.name}
                                    >
                                        {color === c.value && <Check className="w-5 h-5 text-white/90" />}
                                    </button>
                                ))}
                            </div>
                            {color === '#E6CF00' && (
                                <p className="text-xs text-amber-600 mt-1">
                                    * 노란색은 배경이 어두울 때만 사용하세요. (흰 배경 인식 불가)
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Preview */}
                    <div className="flex justify-center">
                        <div ref={canvasRef} className="p-4 bg-white border-2 border-gray-100 rounded-xl shadow-lg relative group">
                            <QRCodeCanvas
                                value={targetUrl}
                                size={200}
                                level={"H"}
                                fgColor={color}
                                bgColor={"#FFFFFF"}
                                imageSettings={{
                                    src: "/logo-allcolor.gif", // Using local file from public/
                                    x: undefined,
                                    y: undefined,
                                    height: 48,
                                    width: 48,
                                    excavate: true,
                                }}
                            />
                        </div>
                    </div>

                    {/* Action Button */}
                    <button
                        onClick={handleDownload}
                        disabled={!slug}
                        className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all ${!slug
                                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                : 'bg-gray-900 hover:bg-black text-white shadow-lg hover:shadow-xl'
                            }`}
                    >
                        {downloaded ? (
                            <>
                                <Check className="w-5 h-5" />
                                저장 완료!
                            </>
                        ) : (
                            <>
                                <Download className="w-5 h-5" />
                                QR코드 다운로드
                            </>
                        )}
                    </button>
                    {!slug && (
                        <p className="text-center text-sm text-red-400">
                            * 후보자 ID를 입력해야 다운로드할 수 있습니다.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
