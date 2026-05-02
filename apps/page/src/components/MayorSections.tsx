import { UseFormReturn, useFieldArray, useWatch } from 'react-hook-form';
import { FormData } from '@/lib/schema';
import { Plus, Trash2, Calendar, Image as ImageIcon, Newspaper } from 'lucide-react';
import { ImageUpload } from './ImageUpload';

interface MayorSectionProps {
    form: UseFormReturn<FormData>;
}

export function MayorSections({ form }: MayorSectionProps) {
    return (
        <div className="space-y-8 border-t pt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100">
                <h3 className="text-xl font-bold text-justice-purple flex items-center gap-2 mb-6">
                    👑 단체장 홈페이지 전용 설정
                </h3>

                <div className="space-y-6">
                    {/* Extra Info */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-purple-100 space-y-4">
                        <h4 className="font-bold text-gray-800 border-b pb-2">기본 설정 (비전 &amp; 인사말)</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormInput label="직함 (예: 서울시장 예비후보)" register={form.register('mayorExtra.position')} />
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-1">메인 배너 이미지</label>
                                <ImageUpload
                                    value={form.watch('mayorExtra.heroImageUrl') || ''}
                                    onChange={(url) => form.setValue('mayorExtra.heroImageUrl', url)}
                                />
                                <p className="text-xs text-gray-500 mt-1">1920x1080 이상의 고해상도 가로 이미지를 권장합니다.</p>
                            </div>
                            <div className="md:col-span-2">
                                <HeroImageAdjustments form={form} />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-medium text-gray-500 mb-1">비전 타이틀 (예: 내 삶을 바꾸는 서울)</label>
                                <textarea
                                    {...form.register('mayorExtra.visionTitle')}
                                    className="block w-full rounded-lg border-gray-300 border p-3 text-black bg-white focus:ring-2 focus:ring-justice-purple focus:border-justice-purple h-24"
                                    placeholder="비전 타이틀 (엔터로 줄바꿈 가능)"
                                />
                            </div>
                            <FormInput label="비전 서브타이틀 (예: 돌봄 책임 국가 책임)" register={form.register('mayorExtra.visionSubtitle')} />
                        </div>
                        <div>
                            <FormInput label="인사말 제목 (예: 시민 여러분 반갑습니다)" register={form.register('mayorExtra.greetingTitle')} />
                            <div className="mt-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">인사말 본문</label>
                                <textarea
                                    {...form.register('mayorExtra.greetingText')}
                                    className="block w-full rounded-lg border-gray-300 border p-3 text-black bg-white focus:ring-2 focus:ring-justice-purple focus:border-justice-purple h-40"
                                    placeholder="인사말 내용을 입력하세요..."
                                />
                            </div>
                        </div>
                    </div>

                    {/* v3 페이지 전용 입력 (선거명·메인슬로건·CTA 문구) */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-purple-100 space-y-4">
                        <h4 className="font-bold text-gray-800 border-b pb-2">✨ v3 디자인 전용 (선거명 · 슬로건 · CTA)</h4>
                        <FormInput
                            label="선거명 (예: 제9회 전국동시지방선거)"
                            register={form.register('mayorExtra.election')}
                            placeholder="제9회 전국동시지방선거"
                        />
                        <div>
                            <label className="block text-xs font-medium text-gray-500 mb-1">
                                정책·공약 메인 슬로건 (한 줄에 하나씩, Enter로 줄바꿈)
                            </label>
                            <textarea
                                {...form.register('mayorExtra.slogans')}
                                className="block w-full rounded-lg border-gray-300 border p-3 text-black bg-white focus:ring-2 focus:ring-justice-purple focus:border-justice-purple h-24"
                                placeholder={'노동소득만으로도 살 수 있는 서울!\n지역과 공생하는 서울!'}
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-500 mb-1">
                                노란 CTA 박스 문구 (한 줄에 하나씩, **굵게** 표시할 부분은 별표 두 개로 감싸기)
                            </label>
                            <textarea
                                {...form.register('mayorExtra.ctaLines')}
                                className="block w-full rounded-lg border-gray-300 border p-3 text-black bg-white focus:ring-2 focus:ring-justice-purple focus:border-justice-purple h-32"
                                placeholder={'서울의 **생활비는 절반**으로 낮추고,\n**일자리는 지킵니다.**\n서울의 **에너지-쓰레기 문제**에\n**책임있게** 나서겠습니다.'}
                            />
                        </div>
                    </div>

                    {/* Declaration Section */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-purple-100 space-y-4">
                        <h4 className="font-bold text-gray-800 border-b pb-2">🎬 출마선언 영상 및 선언문 (선택)</h4>
                        <div className="space-y-4">
                            <FormInput
                                label="출마선언 영상 제목 (예: 출마를 선언하며)"
                                register={form.register('mayorExtra.declarationTitle')}
                                placeholder="출마를 선언하며"
                            />
                            <FormInput
                                label="유튜브 영상 링크"
                                register={form.register('mayorExtra.declarationVideoUrl')}
                                placeholder="https://youtube.com/watch?v=..."
                            />
                            <div>
                                <label className="block text-xs font-medium text-gray-500 mb-1">출마선언문 전문</label>
                                <textarea
                                    {...form.register('mayorExtra.declarationText')}
                                    className="block w-full rounded-lg border-gray-300 border p-3 text-black bg-white focus:ring-2 focus:ring-justice-purple focus:border-justice-purple h-40"
                                    placeholder="선언문 텍스트를 붙여넣으세요..."
                                />
                            </div>
                        </div>
                    </div>

                    {/* Stories */}
                    <StoryList form={form} />

                    {/* Schedules */}
                    <ScheduleList form={form} />

                    {/* Gallery */}
                    <GalleryList form={form} />
                </div>
            </div>
        </div>
    );
}

function StoryList({ form }: MayorSectionProps) {
    const { fields, append, remove } = useFieldArray({
        control: form.control,
        name: "mayorStories"
    });

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-purple-100">
            <div className="flex justify-between items-center mb-4">
                <h4 className="font-bold text-gray-800 flex items-center gap-2">
                    <Newspaper className="w-5 h-5 text-justice-purple" /> 활동 소식
                </h4>
                <button
                    type="button"
                    onClick={() => append({ date: new Date().toISOString().split('T')[0], category: '일반', title: '', content: '', visible: true })}
                    className="text-sm bg-justice-purple text-white px-3 py-1.5 rounded-lg hover:bg-justice-purple-dark transition flex items-center gap-1"
                >
                    <Plus className="w-4 h-4" /> 추가
                </button>
            </div>
            <div className="space-y-4">
                {fields.map((field, index) => (
                    <div key={field.id} className="p-4 bg-gray-50 rounded-lg relative group">
                        <button
                            type="button"
                            onClick={() => remove(index)}
                            className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition opacity-0 group-hover:opacity-100"
                        >
                            <Trash2 className="w-4 h-4" />
                        </button>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormInput label="날짜" type="date" register={form.register(`mayorStories.${index}.date`)} />
                            <FormInput label="분류" register={form.register(`mayorStories.${index}.category`)} placeholder="유세, 인터뷰 등" />
                            <div className="md:col-span-2">
                                <FormInput label="제목" register={form.register(`mayorStories.${index}.title`)} placeholder="소식 제목" />
                            </div>
                            <div className="md:col-span-2">
                                <textarea
                                    {...form.register(`mayorStories.${index}.content`)}
                                    className="block w-full rounded-lg border-gray-300 border p-2 text-sm text-black bg-white focus:ring-2 focus:ring-justice-purple focus:border-justice-purple h-20"
                                    placeholder="내용 요약"
                                />
                            </div>
                        </div>
                    </div>
                ))}
                {fields.length === 0 && <p className="text-gray-400 text-center py-4 text-sm">등록된 소식이 없습니다.</p>}
            </div>
        </div>
    );
}

function ScheduleList({ form }: MayorSectionProps) {
    const { fields, append, remove } = useFieldArray({
        control: form.control,
        name: "mayorSchedules"
    });

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-purple-100">
            <div className="flex justify-between items-center mb-4">
                <h4 className="font-bold text-gray-800 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-justice-purple" /> 공개 일정
                </h4>
                <button
                    type="button"
                    onClick={() => append({ date: new Date().toISOString().split('T')[0], time: '14:00', title: '', location: '', visible: true })}
                    className="text-sm bg-justice-purple text-white px-3 py-1.5 rounded-lg hover:bg-justice-purple-dark transition flex items-center gap-1"
                >
                    <Plus className="w-4 h-4" /> 추가
                </button>
            </div>
            <div className="space-y-4">
                {fields.map((field, index) => (
                    <div key={field.id} className="p-4 bg-gray-50 rounded-lg relative group flex gap-4 items-center">
                        <button
                            type="button"
                            onClick={() => remove(index)}
                            className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition opacity-0 group-hover:opacity-100"
                        >
                            <Trash2 className="w-4 h-4" />
                        </button>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                            <FormInput type="date" register={form.register(`mayorSchedules.${index}.date`)} />
                            <FormInput type="time" register={form.register(`mayorSchedules.${index}.time`)} />
                            <div className="md:col-span-2">
                                <FormInput register={form.register(`mayorSchedules.${index}.title`)} placeholder="일정명" />
                            </div>
                            <div className="md:col-span-4">
                                <FormInput register={form.register(`mayorSchedules.${index}.location`)} placeholder="장소" />
                            </div>
                        </div>
                    </div>
                ))}
                {fields.length === 0 && <p className="text-gray-400 text-center py-4 text-sm">등록된 일정이 없습니다.</p>}
            </div>
        </div>
    );
}

function GalleryList({ form }: MayorSectionProps) {
    const { fields, append, remove } = useFieldArray({
        control: form.control,
        name: "mayorGallery"
    });

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-purple-100">
            <div className="flex justify-between items-center mb-4">
                <h4 className="font-bold text-gray-800 flex items-center gap-2">
                    <ImageIcon className="w-5 h-5 text-justice-purple" /> 갤러리
                </h4>
                <button
                    type="button"
                    onClick={() => append({ date: new Date().toISOString().split('T')[0], caption: '', imageUrl: '', visible: true })}
                    className="text-sm bg-justice-purple text-white px-3 py-1.5 rounded-lg hover:bg-justice-purple-dark transition flex items-center gap-1"
                >
                    <Plus className="w-4 h-4" /> 추가
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {fields.map((field, index) => (
                    <div key={field.id} className="p-4 bg-gray-50 rounded-lg relative group space-y-3">
                        <button
                            type="button"
                            onClick={() => remove(index)}
                            className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition opacity-0 group-hover:opacity-100 z-10"
                        >
                            <Trash2 className="w-4 h-4" />
                        </button>
                        <ImageUpload
                            value={form.watch(`mayorGallery.${index}.imageUrl`) || ''}
                            onChange={(url) => form.setValue(`mayorGallery.${index}.imageUrl`, url)}
                        />
                        <FormInput label="설명" register={form.register(`mayorGallery.${index}.caption`)} placeholder="사진 설명" />
                        <FormInput label="날짜" type="date" register={form.register(`mayorGallery.${index}.date`)} />
                    </div>
                ))}
                {fields.length === 0 && <p className="col-span-2 text-gray-400 text-center py-4 text-sm">등록된 사진이 없습니다.</p>}
            </div>
        </div>
    );
}

// hero 이미지 위치/크기를 조정하는 슬라이더 그룹
// 값은 schema에 string으로 저장된다 (빈 문자열 허용 → 기본값 사용)
const HERO_DEFAULTS = { scale: 1.5, offsetX: 0, offsetY: 0 } as const;

function parseNum(value: string | undefined, fallback: number): number {
    if (value === undefined || value === '') return fallback;
    const n = Number(value);
    return Number.isFinite(n) ? n : fallback;
}

function HeroImageAdjustments({ form }: MayorSectionProps) {
    // useWatch로 컴포넌트별 구독 — form.watch는 React Compiler 환경에서
    // 자기 컴포넌트 리렌더를 못 트리거하는 케이스가 있다.
    const scaleStr = useWatch({ control: form.control, name: 'mayorExtra.heroImageScale' });
    const offsetXStr = useWatch({ control: form.control, name: 'mayorExtra.heroImageOffsetX' });
    const offsetYStr = useWatch({ control: form.control, name: 'mayorExtra.heroImageOffsetY' });

    const scale = parseNum(scaleStr, HERO_DEFAULTS.scale);
    const offsetX = parseNum(offsetXStr, HERO_DEFAULTS.offsetX);
    const offsetY = parseNum(offsetYStr, HERO_DEFAULTS.offsetY);

    const reset = () => {
        form.setValue('mayorExtra.heroImageScale', '');
        form.setValue('mayorExtra.heroImageOffsetX', '');
        form.setValue('mayorExtra.heroImageOffsetY', '');
    };

    return (
        <div className="bg-purple-50/60 rounded-xl p-4 space-y-3 border border-purple-100">
            <div className="flex items-center justify-between">
                <h5 className="text-sm font-bold text-gray-800">🎚️ Hero 이미지 위치/크기 조정</h5>
                <button
                    type="button"
                    onClick={reset}
                    className="text-xs text-justice-purple hover:text-justice-purple-dark hover:underline font-bold"
                >
                    기본값으로
                </button>
            </div>
            <p className="text-xs text-gray-500">미리보기를 보면서 조정하세요. 빈 값으로 두면 기본값({HERO_DEFAULTS.scale}x, 0%, 0%)이 적용됩니다.</p>

            <SliderRow
                label="확대/축소"
                value={scale}
                display={`${scale.toFixed(2)}x`}
                min={0.5}
                max={2.5}
                step={0.05}
                onChange={(v) => form.setValue('mayorExtra.heroImageScale', String(v))}
            />
            <SliderRow
                label="가로 위치"
                value={offsetX}
                display={`${offsetX > 0 ? '+' : ''}${offsetX}%`}
                min={-50}
                max={50}
                step={1}
                onChange={(v) => form.setValue('mayorExtra.heroImageOffsetX', String(v))}
            />
            <SliderRow
                label="세로 위치"
                value={offsetY}
                display={`${offsetY > 0 ? '+' : ''}${offsetY}%`}
                min={-50}
                max={50}
                step={1}
                onChange={(v) => form.setValue('mayorExtra.heroImageOffsetY', String(v))}
            />
        </div>
    );
}

function SliderRow({
    label, value, display, min, max, step, onChange,
}: {
    label: string;
    value: number;
    display: string;
    min: number;
    max: number;
    step: number;
    onChange: (v: number) => void;
}) {
    return (
        <div>
            <div className="flex items-center justify-between mb-1">
                <label className="text-xs font-medium text-gray-700">{label}</label>
                <span className="text-xs font-mono font-bold text-justice-purple">{display}</span>
            </div>
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={(e) => onChange(Number(e.target.value))}
                className="w-full accent-justice-purple cursor-pointer"
            />
        </div>
    );
}

function FormInput({ label, register, placeholder, type = "text" }: {
    label?: string,
    register: any,
    placeholder?: string,
    type?: string
}) {
    return (
        <div>
            {label && <label className="block text-xs font-medium text-gray-500 mb-1">{label}</label>}
            <input
                {...register}
                type={type}
                className="block w-full rounded-lg border-gray-300 border p-2 text-sm text-black bg-white focus:ring-2 focus:ring-justice-purple focus:border-justice-purple"
                placeholder={placeholder}
            />
        </div>
    );
}
