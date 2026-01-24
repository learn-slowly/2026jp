'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Check, AlertCircle, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { formSchema, FormData } from '@/lib/schema';
import { DynamicList } from '@/components/DynamicList';
import { ImageUpload } from '@/components/ImageUpload';
import { PledgeList } from '@/components/PledgeList';
import { ReportList } from '@/components/ReportList';

export default function RegisterPage() {
    const router = useRouter();
    const [step, setStep] = useState<'SLUG' | 'FORM'>('SLUG');
    const [slugStatus, setSlugStatus] = useState<{ available: boolean; message: string } | null>(null);
    const [checking, setChecking] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            category: '기초지역구',
            isIncumbent: false,
            careers: [],
            policies: [],
        }
    });

    const checkSlug = async () => {
        const slug = form.getValues('slug');
        if (!slug || slug.length < 2) {
            form.setError('slug', { message: '2글자 이상 입력해주세요' });
            return;
        }

        setChecking(true);
        try {
            const res = await fetch(`/api/check-slug?slug=${slug}`);
            const data = await res.json();

            if (res.ok) {
                if (data.available) {
                    setSlugStatus({ available: true, message: '사용 가능한 아이디입니다. 신규 등록을 진행합니다.' });
                    form.reset({
                        slug,
                        category: '기초지역구',
                        isIncumbent: false,
                        social: {},
                        donation: {},
                        contact: {},
                        careers: [],
                        policies: []
                    });
                } else {
                    setSlugStatus({ available: false, message: '이미 존재하는 아이디입니다. 기존 정보를 불러와 수정합니다.' });

                    // Pre-fill form with existing data
                    if (data.candidate) {
                        const c = data.candidate;
                        form.reset({
                            slug: c.slug,
                            name: c.name,
                            district: c.district,
                            category: c.category,
                            number: c.number?.toString(),
                            slogan: c.slogan,
                            intro: c.intro,
                            photoUrl: c.photoUrl,
                            donation: c.donation,
                            contact: c.contact,
                            social: c.social,
                            isIncumbent: c.isIncumbent,
                            careers: c.careers || [],
                            policies: c.policies || [],
                            address: c.address || '',
                        });
                    }
                }
                setStep('FORM');
            } else {
                form.setError('slug', { message: data.error || '확인 중 오류가 발생했습니다' });
            }
        } catch (error) {
            console.error(error);
            form.setError('slug', { message: '네트워크 오류가 발생했습니다' });
        } finally {
            setChecking(false);
        }
    };

    const onSubmit = async (data: FormData) => {
        setSubmitting(true);
        try {
            const res = await fetch('/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                const result = await res.json();
                alert('성공적으로 저장되었습니다!');
                router.push(`/card/${result.slug}`);
            } else {
                const err = await res.json();
                alert(`저장 실패: ${err.error}`);
            }
        } catch (error) {
            alert('저장 중 오류가 발생했습니다.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold text-gray-900">후보자 등록/수정</h1>
                    <p className="text-gray-600 mt-2">웹명함 생성을 위한 정보를 입력해주세요</p>
                </div>

                <form onSubmit={form.handleSubmit(onSubmit, (errors) => {
                    console.error(errors);
                    alert('입력되지 않은 필수 항목이 있습니다. 붉은색 경고 문구를 확인해주세요.');
                })} className="space-y-6">
                    {/* Step 1: Slug Check */}
                    <div className={`transition-all ${step === 'FORM' ? 'opacity-50 pointer-events-none' : ''}`}>
                        <label className="block text-sm font-medium text-gray-700 mb-1">아이디 (Slug)</label>
                        <div className="flex gap-2">
                            <input
                                {...form.register('slug')}
                                disabled={step === 'FORM'}
                                placeholder="예: hkd (영문 소문자)"
                                className="flex-1 block w-full rounded-lg border-gray-300 border p-3 text-gray-900 focus:ring-justice-green focus:border-justice-green"
                            />
                            {step === 'SLUG' && (
                                <button
                                    type="button"
                                    onClick={checkSlug}
                                    disabled={checking}
                                    className="bg-justice-green text-white px-6 py-3 rounded-lg font-bold hover:bg-justice-green-dark transition disabled:opacity-50"
                                >
                                    {checking ? <Loader2 className="animate-spin" /> : '중복확인'}
                                </button>
                            )}
                        </div>
                        {form.formState.errors.slug && (
                            <p className="text-red-500 text-sm mt-1">{form.formState.errors.slug.message}</p>
                        )}

                        {slugStatus && (
                            <div className={`mt-3 p-3 rounded-lg flex items-center gap-2 ${slugStatus.available ? 'bg-blue-50 text-blue-700' : 'bg-yellow-50 text-yellow-700'}`}>
                                {slugStatus.available ? <Check className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
                                <span className="font-medium text-sm">{slugStatus.message}</span>
                            </div>
                        )}
                    </div>

                    {/* Step 2: Details Form */}
                    {step === 'FORM' && (
                        <div className="space-y-6 border-t pt-6 animate-in slide-in-from-bottom-4 duration-500">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormInput label="이름" register={form.register('name')} error={form.formState.errors.name} placeholder="홍길동" />
                                <FormInput label="기호 (숫자)" register={form.register('number')} placeholder="3" type="number" />
                            </div>

                            <FormInput label="선거구" register={form.register('district')} error={form.formState.errors.district} placeholder="서울시 제1선거구" />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">출마 유형</label>
                                    <select {...form.register('category')} className="block w-full rounded-lg border-gray-300 border p-3 text-gray-900 focus:ring-2 focus:ring-justice-green focus:border-justice-green">
                                        <option value="기초지역구">기초지역구</option>
                                        <option value="기초비례">기초비례</option>
                                        <option value="광역지역구">광역지역구</option>
                                        <option value="광역비례">광역비례</option>
                                        <option value="기초단체장">기초단체장</option>
                                        <option value="광역단체장">광역단체장</option>
                                    </select>
                                </div>
                                <div className="flex items-center pt-6">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="checkbox" {...form.register('isIncumbent')} className="w-5 h-5 text-justice-green rounded accent-justice-green" />
                                        <span className="text-gray-700 font-medium">현역 의원입니다</span>
                                    </label>
                                </div>
                            </div>

                            <FormInput label="슬로건" register={form.register('slogan')} error={form.formState.errors.slogan} placeholder="정의로운 서울!" />

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">소개글</label>
                                <textarea
                                    {...form.register('intro')}
                                    className="block w-full rounded-lg border-gray-300 border p-3 text-gray-900 focus:ring-2 focus:ring-justice-green focus:border-justice-green h-32"
                                    placeholder="인사말을 입력하세요..."
                                />
                                <FormError error={form.formState.errors.intro} />
                            </div>

                            <div className="space-y-6 border-t pt-6 border-b pb-6">
                                <DynamicList
                                    label="🔥 주요 경력 (최신순)"
                                    items={form.watch('careers') || []}
                                    onChange={(val) => form.setValue('careers', val)}
                                    placeholder="예: 제21대 국회의원 (비례)"
                                    maxItems={10}
                                />

                                {form.watch('isIncumbent') && (
                                    <div className="animate-in fade-in slide-in-from-top-4 duration-300">
                                        <ReportList
                                            items={form.watch('reports') || []}
                                            onChange={(val) => form.setValue('reports', val)}
                                        />
                                    </div>
                                )}

                                <PledgeList
                                    title="🗳️ 핵심 공약 (우선순위순)"
                                    items={form.watch('policies') || []}
                                    onChange={(items) => form.setValue('policies', items)}
                                    maxItems={10}
                                />
                            </div>

                            <div>
                                <ImageUpload
                                    value={form.watch('photoUrl')}
                                    onChange={(url) => form.setValue('photoUrl', url)}
                                    error={form.formState.errors.photoUrl}
                                />
                            </div>

                            <div className="bg-yellow-50 p-4 rounded-xl space-y-4">
                                <h3 className="font-bold text-gray-900 flex items-center gap-2">💰 후원 정보</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <FormInput label="계좌번호" register={form.register('donation.account')} error={form.formState.errors.donation?.account} placeholder="은행 000-000..." />
                                    <FormInput label="예금주" register={form.register('donation.holder')} error={form.formState.errors.donation?.holder} placeholder="홍길동후원회" />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="font-bold text-gray-900">🔗 소셜 미디어</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <FormInput register={form.register('social.x')} placeholder="X (트위터) 링크" />
                                    <FormInput register={form.register('social.facebook')} placeholder="페이스북 링크" />
                                    <FormInput register={form.register('social.youtube')} placeholder="유튜브 링크" />
                                    <FormInput register={form.register('social.instagram')} placeholder="인스타그램 링크" />
                                </div>
                            </div>

                            <div className="space-y-4 border-t pt-6">
                                <h3 className="font-bold text-gray-900">📞 추가 정보</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <FormInput
                                        label="공개 연락처 (선택)"
                                        register={form.register('contact.phone')}
                                        placeholder="010-0000-0000"
                                    />
                                    <FormInput
                                        label="주소/위치 (선택)"
                                        register={form.register('address')}
                                        placeholder="선거 사무소 주소 등"
                                    />
                                </div>
                            </div>

                            <button
                                type="button"
                                onClick={(e) => {
                                    console.log('Save button clicked');
                                    form.handleSubmit(onSubmit, (errors) => {
                                        console.error('Validation errors:', errors);
                                        alert('입력되지 않은 필수 항목이 있습니다. 붉은색 경고 문구를 확인해주세요.');
                                    })(e);
                                }}
                                disabled={submitting}
                                className="w-full bg-justice-green hover:bg-justice-green-dark text-white font-bold py-4 rounded-xl text-lg transition shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {submitting ? <Loader2 className="animate-spin" /> : '저장하기'}
                            </button>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}

function FormInput({ label, register, error, placeholder, type = "text" }: {
    label?: string,
    register: any,
    error?: any,
    placeholder?: string,
    type?: string
}) {
    return (
        <div>
            {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
            <input
                {...register}
                type={type}
                className="block w-full rounded-lg border-gray-300 border p-3 text-gray-900 focus:ring-2 focus:ring-justice-green focus:border-justice-green"
                placeholder={placeholder}
            />
            <FormError error={error} />
        </div>
    );
}

function FormError({ error }: { error?: any }) {
    if (!error) return null;
    return <p className="text-red-500 text-sm mt-1">{error.message}</p>;
}
