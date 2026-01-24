'use client';

import { AlertCircle } from 'lucide-react';
import { UseFormReturn } from 'react-hook-form';

interface Report {
    year: string;
    month: string;
    category: string;
    title: string;
    description: string;
    linkUrl?: string;
    visible?: boolean;
}

interface ReportListProps {
    items: Report[];
    onChange: (items: Report[]) => void;
    maxItems?: number;
}

export function ReportList({
    items,
    onChange,
    maxItems = 20
}: ReportListProps) {
    const addItem = () => {
        if (items.length < maxItems) {
            const now = new Date();
            onChange([
                ...items,
                {
                    year: now.getFullYear().toString(),
                    month: (now.getMonth() + 1).toString(),
                    category: '조례제정',
                    title: '',
                    description: '',
                    linkUrl: '',
                    visible: true
                }
            ]);
        }
    };

    const updateItem = (index: number, field: keyof Report, value: string | boolean) => {
        const newItems = [...items];
        newItems[index] = { ...newItems[index], [field]: value };
        onChange(newItems);
    };

    const removeItem = (index: number) => {
        const newItems = items.filter((_, i) => i !== index);
        onChange(newItems);
    };

    return (
        <div className="space-y-4 bg-sky-50 p-6 rounded-xl border border-sky-100">
            <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-gray-900 flex items-center gap-2">
                    🏆 주요 의정 성과 (현역 전용)
                </h3>
                <span className="text-xs text-gray-500">
                    {items.length}/{maxItems}개
                </span>
            </div>

            <p className="text-sm text-gray-600 mb-4">
                임기 중 활동한 주요 성과를 입력해주세요. 웹명함에 '의정 보고서' 섹션으로 노출됩니다.
            </p>

            <div className="space-y-4">
                {items.map((item, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm relative group">
                        <button
                            type="button"
                            onClick={() => removeItem(index)}
                            className="absolute top-2 right-2 p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition opacity-0 group-hover:opacity-100"
                            aria-label="삭제"
                        >
                            <AlertCircle className="w-5 h-5" />
                        </button>

                        <div className="grid grid-cols-6 gap-2 mb-3">
                            <div className="col-span-2 sm:col-span-1">
                                <label className="block text-xs font-medium text-gray-500 mb-1">연도</label>
                                <input
                                    value={item.year}
                                    onChange={(e) => updateItem(index, 'year', e.target.value)}
                                    className="w-full rounded border-gray-300 text-sm p-2"
                                    placeholder="2025"
                                />
                            </div>
                            <div className="col-span-2 sm:col-span-1">
                                <label className="block text-xs font-medium text-gray-500 mb-1">월</label>
                                <input
                                    value={item.month}
                                    onChange={(e) => updateItem(index, 'month', e.target.value)}
                                    className="w-full rounded border-gray-300 text-sm p-2"
                                    placeholder="11"
                                />
                            </div>
                            <div className="col-span-2">
                                <label className="block text-xs font-medium text-gray-500 mb-1">분류</label>
                                <select
                                    value={item.category}
                                    onChange={(e) => updateItem(index, 'category', e.target.value)}
                                    className="w-full rounded border-gray-300 text-sm p-2 bg-white"
                                >
                                    <option>조례제정</option>
                                    <option>예산확보</option>
                                    <option>정책토론</option>
                                    <option>민원해결</option>
                                    <option>행정감사</option>
                                    <option>기타</option>
                                </select>
                            </div>
                            <div className="col-span-6 sm:col-span-2">
                                <label className="block text-xs font-medium text-gray-500 mb-1">노출</label>
                                <div className="flex items-center h-full">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={item.visible !== false}
                                            onChange={(e) => updateItem(index, 'visible', e.target.checked)}
                                            className="rounded text-justice-green focus:ring-justice-green"
                                        />
                                        <span className="text-sm text-gray-600">공개</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <div>
                                <input
                                    value={item.title}
                                    onChange={(e) => updateItem(index, 'title', e.target.value)}
                                    className="w-full rounded border-gray-300 font-bold p-2 focus:ring-2 focus:ring-justice-green focus:border-justice-green"
                                    placeholder="성과 제목 (예: 무상급식 조례 통과)"
                                />
                            </div>
                            <div>
                                <textarea
                                    value={item.description}
                                    onChange={(e) => updateItem(index, 'description', e.target.value)}
                                    className="w-full rounded border-gray-300 text-sm p-2 h-20 resize-none focus:ring-2 focus:ring-justice-green focus:border-justice-green"
                                    placeholder="상세 내용을 입력하세요..."
                                />
                            </div>
                            <div>
                                <input
                                    value={item.linkUrl || ''}
                                    onChange={(e) => updateItem(index, 'linkUrl', e.target.value)}
                                    className="w-full rounded border-gray-300 text-xs p-2 text-gray-500"
                                    placeholder="관련 링크 (블로그, 기사 등)"
                                />
                            </div>
                        </div>
                    </div>
                ))}

                {items.length < maxItems && (
                    <button
                        type="button"
                        onClick={addItem}
                        className="w-full py-3 bg-white border-2 border-dashed border-sky-200 rounded-lg text-sky-600 hover:border-sky-400 hover:text-sky-700 transition font-bold text-sm flex items-center justify-center gap-2 shadow-sm"
                    >
                        + 성과 추가하기
                    </button>
                )}
            </div>
        </div>
    );
}
