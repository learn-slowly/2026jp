import { Plus, Trash2, Clock, MapPin } from 'lucide-react';
import { MayorSchedule } from '@justice/types';

interface ScheduleListProps {
    items: Partial<MayorSchedule>[];
    onChange: (items: Partial<MayorSchedule>[]) => void;
    maxItems?: number;
    title: string;
}

export function ScheduleList({ items = [], onChange, maxItems = 10, title }: ScheduleListProps) {
    const handleAdd = () => {
        if (items.length < maxItems) {
            onChange([...items, { date: '', time: '', title: '', location: '', visible: true }]);
        }
    };

    const handleRemove = (index: number) => {
        const newItems = items.filter((_, i) => i !== index);
        onChange(newItems);
    };

    const handleChange = (index: number, field: keyof MayorSchedule, value: string | boolean) => {
        const newItems = [...items];
        newItems[index] = { ...newItems[index], [field]: value };
        onChange(newItems);
    };

    return (
        <div className="space-y-3">
            <div className="flex justify-between items-center">
                <label className="block text-sm font-bold text-gray-700">
                    🗓️ {title}
                </label>
                <span className="text-xs text-gray-400">
                    {items.length}/{maxItems}개
                </span>
            </div>

            <div className="space-y-4">
                {items.map((item, index) => (
                    <div key={index} className="flex flex-col gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200">
                        <div className="flex justify-between items-center">
                            <span className="text-xs font-bold bg-white px-2 py-1 rounded border text-gray-500">일정 {index + 1}</span>
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
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Clock className="w-4 h-4 text-gray-400" />
                                </div>
                                <input
                                    type="time"
                                    value={item.time || ''}
                                    onChange={(e) => handleChange(index, 'time', e.target.value)}
                                    className="block w-full pl-9 rounded-lg border-gray-300 border p-2 text-sm focus:ring-2 focus:ring-justice-green focus:border-justice-green"
                                />
                            </div>
                        </div>
                        
                        <input
                            value={item.title || ''}
                            onChange={(e) => handleChange(index, 'title', e.target.value)}
                            placeholder="일정 제목 (예: ○○시장 방문)"
                            className="block w-full rounded-lg border-gray-300 border p-2 text-sm focus:ring-2 focus:ring-justice-green focus:border-justice-green"
                        />
                        
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <MapPin className="w-4 h-4 text-gray-400" />
                            </div>
                            <input
                                value={item.location || ''}
                                onChange={(e) => handleChange(index, 'location', e.target.value)}
                                placeholder="장소"
                                className="block w-full pl-9 rounded-lg border-gray-300 border p-2 text-sm focus:ring-2 focus:ring-justice-green focus:border-justice-green"
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
                    후보자 일정 추가하기 ({items.length}/{maxItems})
                </button>
            )}
        </div>
    );
}
