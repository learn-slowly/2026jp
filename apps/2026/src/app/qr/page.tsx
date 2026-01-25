
'use client';

import { useState, useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { Download, QrCode as QrIcon, Copy, Check } from 'lucide-react';

export default function QRPage() {
    const [slug, setSlug] = useState('');
    const [type, setType] = useState<'card' | 'page'>('card');
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
                <div className="bg-justice-purple p-6 text-white text-center">
                    <h1 className="text-2xl font-bold flex items-center justify-center gap-2">
                        <QrIcon className="w-6 h-6" />
                        QR코드 생성기
                    </h1>
                    <p className="text-white/80 mt-2 text-sm">
                        후보자 명함이나 홍보물에 넣을<br />
                        QR코드를 즉시 생성하세요.
                    </p>
                </div>

                <div className="p-8 space-y-8">
                    {/* Controls */}
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">QR 타입</label>
                            <div className="flex bg-gray-100 p-1 rounded-lg">
                                <button
                                    onClick={() => setType('card')}
                                    className={`flex-1 py-2 rounded-md text-sm font-bold transition-all ${type === 'card'
                                            ? 'bg-white text-justice-purple shadow-sm'
                                            : 'text-gray-500 hover:text-gray-700'
                                        }`}
                                >
                                    웹명함 (Card)
                                </button>
                                <button
                                    onClick={() => setType('page')}
                                    className={`flex-1 py-2 rounded-md text-sm font-bold transition-all ${type === 'page'
                                            ? 'bg-white text-justice-purple shadow-sm'
                                            : 'text-gray-500 hover:text-gray-700'
                                        }`}
                                >
                                    홈페이지 (Page)
                                </button>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">후보자 ID (Slug)</label>
                            <input
                                type="text"
                                placeholder="예: hkd"
                                value={slug}
                                onChange={(e) => setSlug(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-justice-purple focus:ring-2 focus:ring-justice-purple/20 outline-none transition-all"
                            />
                            <p className="mt-2 text-xs text-gray-400">
                                연결 주소: <span className="font-mono text-justice-purple">{targetUrl}</span>
                            </p>
                        </div>
                    </div>

                    {/* Preview */}
                    <div className="flex justify-center">
                        <div ref={canvasRef} className="p-4 bg-white border-2 border-justice-purple rounded-xl shadow-lg relative group">
                            <QRCodeCanvas
                                value={targetUrl}
                                size={200}
                                level={"H"}
                                fgColor={"#2D0B59"} // Justice Purple Dark
                                bgColor={"#FFFFFF"}
                                imageSettings={{
                                    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Justice_Party_%28South_Korea%29_logo.svg/1200px-Justice_Party_%28South_Korea%29_logo.svg.png",
                                    x: undefined,
                                    y: undefined,
                                    height: 40,
                                    width: 40,
                                    excavate: true,
                                }}
                            />
                            {/* Overlay Label */}
                            <div className="absolute top-full left-0 right-0 text-center mt-2">
                                <span className="inline-block px-2 py-1 bg-gray-100 rounded text-xs font-bold text-gray-500">
                                    {type === 'card' ? '웹명함' : '홈페이지'}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Action Button */}
                    <button
                        onClick={handleDownload}
                        disabled={!slug}
                        className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all ${!slug
                                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                : 'bg-justice-purple hover:bg-justice-purple-dark text-white shadow-lg hover:shadow-xl'
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
