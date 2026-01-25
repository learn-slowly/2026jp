'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Check, AlertCircle, Loader2, Lock, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { formSchema, FormData } from '@/lib/schema';
import { DynamicList } from '@/components/DynamicList';
import { ImageUpload } from '@/components/ImageUpload';
import { PledgeList } from '@/components/PledgeList';
import { ReportList } from '@/components/ReportList';
import { MayorSections } from '@/components/MayorSections';

type Step = 'SLUG' | 'AUTH' | 'FORM';

export default function RegisterPage() {
    const router = useRouter();
    const [step, setStep] = useState<Step>('SLUG');
    const [slugStatus, setSlugStatus] = useState<{ available: boolean; message: string } | null>(null);
    const [checking, setChecking] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    // Auth State
    const [isNewCandidate, setIsNewCandidate] = useState(false);
    const [slug, setSlug] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [authError, setAuthError] = useState('');
    const [verifying, setVerifying] = useState(false);

    const form = useForm<any>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            slug: '',
            name: '',
            district: '',
            category: '기초지역구',
            slogan: '',
            intro: '',
            photoUrl: '',
            isIncumbent: false,
            careers: [] as string[],
            policies: [] as { title: string; content: string }[],
            donation: { account: '', holder: '' },
            contact: { phone: '', email: '', kakao: '', telegram: '' },
            social: { x: '', facebook: '', youtube: '', instagram: '', blog: '' },
            reports: [] as { year: string; month: string; category: string; title: string; description: string; visible: boolean; candidateSlug?: string; linkUrl?: string; }[],
            mayorExtra: { position: '', visionTitle: '', visionSubtitle: '', greetingTitle: '', greetingText: '', heroImageUrl: '' },
            mayorStories: [] as any[],
            mayorSchedules: [] as any[],
            mayorGallery: [] as any[],
        }
    });

    // Step 1: Check Slug
    const checkSlug = async () => {
        if (!slug || slug.length < 2) {
            setSlugStatus({ available: false, message: '2글자 이상 입력해주세요' });
            return;
        }

        setChecking(true);
        try {
            const res = await fetch(`/api/check-slug?slug=${slug}`);
            const data = await res.json();

            if (res.ok) {
                if (data.available) {
                    setIsNewCandidate(true);
                    setSlugStatus({ available: true, message: '사용 가능한 아이디입니다. 비밀번호를 설정해주세요.' });
                } else {
                    setIsNewCandidate(false);
                    setSlugStatus({ available: false, message: '이미 존재하는 아이디입니다. 비밀번호를 입력해주세요.' });
                }
                setStep('AUTH');
                setAuthError('');
            } else {
                setSlugStatus({ available: false, message: data.error || '확인 중 오류가 발생했습니다' });
            }
        } catch (error) {
            console.error(error);
            setSlugStatus({ available: false, message: '네트워크 오류가 발생했습니다' });
        } finally {
            setChecking(false);
        }
    };

    // Step 2: Authenticate (Create or Login)
    const handleAuth = async () => {
        setAuthError('');

        if (isNewCandidate) {
            // New Candidate: Validate Password Creation
            if (password.length < 4) {
                setAuthError('비밀번호는 4자 이상이어야 합니다.');
                return;
            }
            if (password !== confirmPassword) {
                setAuthError('비밀번호가 일치하지 않습니다.');
                return;
            }

            // Setup new form
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
            setStep('FORM');
        } else {
            // Existing Candidate: Verify Password
            setVerifying(true);
            try {
                const res = await fetch('/api/verify', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ slug, password }),
                });

                const data = await res.json();

                if (res.ok && data.valid) {
                    const c = data.candidate;
                    // Load data
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
                    setStep('FORM');
                } else {
                    setAuthError('비밀번호가 올바르지 않습니다.');
                }
            } catch (error) {
                setAuthError('인증 중 오류가 발생했습니다.');
            } finally {
                setVerifying(false);
            }
        }
    };

    const onSubmit = async (data: FormData) => {
        setSubmitting(true);
        try {
            // Include password in submission
            const payload = { ...data, password };

            const res = await fetch('/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
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

                <div className="space-y-8">
                    {/* Step 1: Slug Input */}
                    {step === 'SLUG' && (
                        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">아이디 (Slug)</label>
                                <div className="flex gap-2">
                                    <input
                                        value={slug}
                                        onChange={(e) => setSlug(e.target.value.toLowerCase())}
                                        onKeyDown={(e) => e.key === 'Enter' && checkSlug()}
                                        placeholder="예: hkd (영문 소문자)"
                                        className="flex-1 block w-full rounded-lg border-gray-300 border p-3 text-gray-900 focus:ring-justice-green focus:border-justice-green"
                                    />
                                    <button
                                        onClick={checkSlug}
                                        disabled={checking}
                                        className="bg-justice-green text-white px-6 py-3 rounded-lg font-bold hover:bg-justice-green-dark transition disabled:opacity-50 flex items-center gap-2"
                                    >
                                        {checking ? <Loader2 className="animate-spin w-5 h-5" /> : <>확인 <ArrowRight className="w-5 h-5" /></>}
                                    </button>
                                </div>
                                <p className="text-xs text-gray-500 mt-2">
                                    * 영문 소문자와 숫자만 사용 가능합니다.
                                </p>
                                {slugStatus && (
                                    <p className={`text-sm mt-2 font-medium ${slugStatus.available ? 'text-blue-600' : 'text-red-600'}`}>
                                        {slugStatus.message}
                                    </p>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Step 2: Authentication */}
                    {step === 'AUTH' && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                                <p className="text-sm text-gray-500">선택된 아이디</p>
                                <div className="flex justify-between items-center">
                                    <p className="font-mono font-bold text-lg text-gray-900">{slug}</p>
                                    <button
                                        onClick={() => { setStep('SLUG'); setPassword(''); setConfirmPassword(''); setAuthError(''); }}
                                        className="text-xs text-gray-500 hover:text-gray-900 underline"
                                    >
                                        변경
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        {isNewCandidate ? '비밀번호 설정' : '비밀번호 입력'}
                                    </label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                                        <input
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            onKeyDown={(e) => e.key === 'Enter' && handleAuth()}
                                            placeholder={isNewCandidate ? "비밀번호를 설정해주세요 (4자 이상)" : "비밀번호를 입력해주세요"}
                                            className="block w-full pl-10 rounded-lg border-gray-300 border p-3 text-gray-900 focus:ring-justice-green focus:border-justice-green"
                                        />
                                    </div>
                                </div>

                                {isNewCandidate && (
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">비밀번호 확인</label>
                                        <div className="relative">
                                            <Lock className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                                            <input
                                                type="password"
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                onKeyDown={(e) => e.key === 'Enter' && handleAuth()}
                                                placeholder="비밀번호를 한 번 더 입력해주세요"
                                                className="block w-full pl-10 rounded-lg border-gray-300 border p-3 text-gray-900 focus:ring-justice-green focus:border-justice-green"
                                            />
                                        </div>
                                    </div>
                                )}

                                {authError && (
                                    <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded-lg">
                                        <AlertCircle className="w-5 h-5" />
                                        {authError}
                                    </div>
                                )}

                                <button
                                    onClick={handleAuth}
                                    disabled={verifying}
                                    className="w-full bg-justice-purple hover:bg-justice-purple-dark text-white font-bold py-4 rounded-xl text-lg transition shadow-lg disabled:opacity-70 flex items-center justify-center gap-2"
                                >
                                    {verifying ? <Loader2 className="animate-spin w-5 h-5" /> : (isNewCandidate ? '비밀번호 생성 및 시작' : '로그인')}
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Step 3: Main Form */}
                    {step === 'FORM' && (
                        <form onSubmit={form.handleSubmit(onSubmit, (errors) => {
                            console.error(errors);
                            alert('입력되지 않은 필수 항목이 있습니다. 붉은색 경고 문구를 확인해주세요.');
                        })} className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-500">

                            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 flex items-center justify-between">
                                <span className="text-blue-800 text-sm font-bold">Authenticated as: {slug}</span>
                            </div>

                            <div className="space-y-6 border-t pt-6">
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
                                                errors={form.formState.errors.reports}
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
                                        <FormInput register={form.register('social.x')} placeholder="https://x.com/users/..." />
                                        <FormInput register={form.register('social.facebook')} placeholder="https://facebook.com/..." />
                                        <FormInput register={form.register('social.youtube')} placeholder="https://youtube.com/@..." />
                                        <FormInput register={form.register('social.instagram')} placeholder="https://instagram.com/..." />
                                        <FormInput register={form.register('social.blog')} placeholder="https://blog.naver.com/..." label="네이버 블로그" />
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
                                            label="이메일 (선택)"
                                            register={form.register('contact.email')}
                                            placeholder="email@example.com"
                                        />
                                        <FormInput
                                            label="카카오톡 ID (선택)"
                                            register={form.register('contact.kakao')}
                                            placeholder="kakao_id"
                                        />
                                        <FormInput
                                            label="텔레그램 ID (선택)"
                                            register={form.register('contact.telegram')}
                                            placeholder="@telegram_id"
                                        />
                                        <FormInput
                                            label="주소/위치 (선택)"
                                            register={form.register('address')}
                                            placeholder="선거 사무소 주소 등"
                                        />
                                    </div>
                                </div>

                                {/* Mayor Specific Sections */}
                                {(form.watch('category') || '').includes('단체장') && (
                                    <MayorSections form={form} />
                                )}

                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="w-full bg-justice-green hover:bg-justice-green-dark text-white font-bold py-4 rounded-xl text-lg transition shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {submitting ? <Loader2 className="animate-spin" /> : '저장하기'}
                                </button>
                            </div>
                        </form>
                    )}
                </div>
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
            {label && <label className={`block text-sm font-medium mb-1 ${error ? 'text-red-600' : 'text-gray-700'}`}>{label}</label>}
            <div className="relative">
                <input
                    {...register}
                    type={type}
                    className={`block w-full rounded-lg border p-3 focus:ring-2 transition-colors ${error
                        ? 'border-red-500 bg-red-50 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500'
                        : 'border-gray-300 text-gray-900 focus:border-justice-green focus:ring-justice-green'
                        }`}
                    placeholder={placeholder}
                />
                {error && (
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <AlertCircle className="h-5 w-5 text-red-500" />
                    </div>
                )}
            </div>
            <FormError error={error} />
        </div>
    );
}

function FormError({ error }: { error?: any }) {
    if (!error) return null;
    return <p className="text-red-500 text-sm mt-1">{error.message}</p>;
}
