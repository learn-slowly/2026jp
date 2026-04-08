import { Plus, Trash2 } from 'lucide-react';
import { ImageUpload } from '@/components/ImageUpload';
import { MayorStory } from '@justice/types';

interface StoryListProps {
    items: Partial<MayorStory>[];
    onChange: (items: Partial<MayorStory>[]) => void;
    maxItems?: number;
    title: string;
}

export function StoryList({ items = [], onChange, maxItems = 10, title }: StoryListProps) {
    const handleAdd = () => {
        if (items.length < maxItems) {
            onChange([...items, { date: '', category: '현장스케치', title: '', content: '', imageUrl: '', visible: true }]);
        }
    };

    const handleRemove = (index: number) => {
        const newItems = items.filter((_, i) => i !== index);
        onChange(newItems);
    };

    const handleChange = (index: number, field: keyof MayorStory, value: string | boolean) => {
        const newItems = [...items];
        newItems[index] = { ...newItems[index], [field]: value };
        onChange(newItems);
    };

    return (
        <div className="space-y-3">
            <div className="flex justify-between items-center">
                <label className="block text-sm font-bold text-gray-700">
                    📰 {title}
                </label>
                <span className="text-xs text-gray-400">
                    {items.length}/{maxItems}개
                </span>
            </div>

            <div className="space-y-4">
                {items.map((item, index) => (
                    <div key={index} className="flex flex-col gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200">
                        <div className="flex justify-between items-center">
                            <span className="text-xs font-bold bg-white px-2 py-1 rounded border text-gray-500">소식 {index + 1}</span>
                            <button
                                type="button"
                                onClick={() => handleRemove(index)}
                                className="text-gray-400 hover:text-red-500 p-1"
                            >
                                <Trash2 className="w-5 h-5" />
                            </button>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-3">
                            <input
                                type="date"
                                value={item.date || ''}
                                onChange={(e) => handleChange(index, 'date', e.target.value)}
                                className="block w-full rounded-lg border-gray-300 border p-2 text-sm focus:ring-2 focus:ring-justice-green focus:border-justice-green"
                            />
                            <select
                                value={item.category || '현장스케치'}
                                onChange={(e) => handleChange(index, 'category', e.target.value)}
                                className="block w-full rounded-lg border-gray-300 border p-2 text-sm focus:ring-2 focus:ring-justice-green focus:border-justice-green"
                            >
                                <option value="현장스케치">현장스케치</option>
                                <option value="언론보도">언론보도</option>
                                <option value="논평/성명">논평/성명</option>
                            </select>
                        </div>
                        
                        <input
                            value={item.title || ''}
                            onChange={(e) => handleChange(index, 'title', e.target.value)}
                            placeholder="소식 제목"
                            className="block w-full rounded-lg border-gray-300 border p-2 text-sm focus:ring-2 focus:ring-justice-green focus:border-justice-green"
                        />
                        
                        <textarea
                            value={item.content || ''}
                            onChange={(e) => handleChange(index, 'content', e.target.value)}
                            placeholder="소식 내용"
                            rows={3}
                            className="block w-full rounded-lg border-gray-300 border p-2 text-sm focus:ring-2 focus:ring-justice-green focus:border-justice-green resize-none"
                        />

                        <div>
                            <span className="text-xs text-gray-500 mb-1 block">첨부 사진 (선택)</span>
                            <ImageUpload
                                value={item.imageUrl || ''}
                                onChange={(url) => handleChange(index, 'imageUrl', url)}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {items.length < maxItems && (
                <button
                    type="button"
                    onClick={handleAdd}
                    className="w-full py-3 border-2 border-dashed border-gray-300 rounded-xl text-gray-500 hover:border-justice-green hover:text-justice-green hover:bg-green-50 transition flex items-center justify-center gap-2 text-sm font-medium"
                >
                    <Plus className="w-4 h-4" />
                    현장 소식 추가하기 ({items.length}/{maxItems})
                </button>
            )}
        </div>
    );
}
