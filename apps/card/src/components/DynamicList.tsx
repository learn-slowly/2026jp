'use client';

import { Trash2 } from 'lucide-react';

interface DynamicListProps {
    label: string;
    items: string[];
    onChange: (items: string[]) => void;
    placeholder: string;
    maxItems?: number;
    maxLength?: number;
}

export function DynamicList({
    label,
    items,
    onChange,
    placeholder,
    maxItems = 10,
    maxLength = 100
}: DynamicListProps) {
    const addItem = () => {
        if (items.length < maxItems) {
            onChange([...items, '']);
        }
    };

    const updateItem = (index: number, value: string) => {
        if (value.length <= maxLength) {
            const newItems = [...items];
            newItems[index] = value;
            onChange(newItems);
        }
    };

    const removeItem = (index: number) => {
        const newItems = items.filter((_, i) => i !== index);
        onChange(newItems);
    };

    return (
        <div className="space-y-3">
            <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-gray-700">{label}</label>
                <span className="text-xs text-gray-500">
                    {items.length}/{maxItems}개 (최대 {maxLength}자)
                </span>
            </div>

            {items.map((item, index) => (
                <div key={index} className="flex gap-2">
                    <input
                        value={item}
                        onChange={(e) => updateItem(index, e.target.value)}
                        className="flex-1 block w-full rounded-lg border-gray-300 border p-3 text-gray-900 focus:ring-2 focus:ring-justice-green focus:border-justice-green transition-all"
                        placeholder={`${placeholder} #${index + 1}`}
                    />
                    <button
                        type="button"
                        onClick={() => removeItem(index)}
                        className="p-3 text-red-500 hover:bg-red-50 rounded-lg transition"
                        aria-label="삭제"
                    >
                        <Trash2 className="w-5 h-5" />
                    </button>
                </div>
            ))}

            {items.length < maxItems && (
                <button
                    type="button"
                    onClick={addItem}
                    className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-justice-green hover:text-justice-green transition font-medium text-sm flex items-center justify-center gap-2"
                >
                    + 항목 추가하기 ({items.length}/{maxItems})
                </button>
            )}

            {items.length >= maxItems && (
                <p className="text-xs text-orange-500 text-center">
                    더 이상 항목을 추가할 수 없습니다 (최대 {maxItems}개)
                </p>
            )}
        </div>
    );
}
