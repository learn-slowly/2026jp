import { Plus, Trash2 } from 'lucide-react';

interface Pledge {
    title: string;
    content: string;
}

interface PledgeListProps {
    items: Pledge[];
    onChange: (items: Pledge[]) => void;
    maxItems?: number;
    title: string;
}

export function PledgeList({ items = [], onChange, maxItems = 10, title }: PledgeListProps) {
    const handleAdd = () => {
        if (items.length < maxItems) {
            onChange([...items, { title: '', content: '' }]);
        }
    };

    const handleRemove = (index: number) => {
        const newItems = items.filter((_, i) => i !== index);
        onChange(newItems);
    };

    const handleChange = (index: number, field: keyof Pledge, value: string) => {
        const newItems = [...items];
        newItems[index] = { ...newItems[index], [field]: value };
        onChange(newItems);
    };

    return (
        <div className="space-y-3">
            <div className="flex justify-between items-center">
                <label className="block text-sm font-bold text-gray-700">
                    📢 {title}
                </label>
                <span className="text-xs text-gray-400">
                    {items.length}/{maxItems}개 (최대 100자/항목)
                </span>
            </div>

            <div className="space-y-3">
                {items.map((item, index) => (
                    <div key={index} className="flex flex-col gap-2 p-3 bg-gray-50 rounded-xl border border-gray-200">
                        <div className="flex gap-2">
                            <div className="flex-1 space-y-2">
                                <input
                                    value={item.title}
                                    onChange={(e) => handleChange(index, 'title', e.target.value)}
                                    placeholder={`공약 ${index + 1} 제목`}
                                    className="block w-full rounded-lg border-gray-300 border p-2 text-sm focus:ring-2 focus:ring-justice-green focus:border-justice-green"
                                />
                                <textarea
                                    value={item.content}
                                    onChange={(e) => handleChange(index, 'content', e.target.value)}
                                    placeholder={`공약 ${index + 1} 상세 내용`}
                                    rows={2}
                                    className="block w-full rounded-lg border-gray-300 border p-2 text-sm focus:ring-2 focus:ring-justice-green focus:border-justice-green resize-none"
                                />
                            </div>
                            <button
                                type="button"
                                onClick={() => handleRemove(index)}
                                className="text-gray-400 hover:text-red-500 self-start p-1"
                            >
                                <Trash2 className="w-5 h-5" />
                            </button>
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
                    항목 추가하기 ({items.length}/{maxItems})
                </button>
            )}
        </div>
    );
}
