export type CandidateCategory =
    | '기초지역구'
    | '기초비례'
    | '광역지역구'
    | '광역비례'
    | '기초단체장'
    | '광역단체장';

export type CandidateStatus = 'active' | 'draft' | 'review';

// Mayor Specific Types
export interface MayorExtra {
    candidateSlug: string;
    position: string;
    visionTitle: string;
    visionSubtitle: string;
    greetingTitle: string;
    greetingText: string;
    heroImageUrl: string;
    declarationTitle?: string;
    declarationVideoUrl?: string;
    declarationText?: string;
    // v3 디자인 전용 필드 — 후보자별로 register에서 입력
    election?: string;       // 예: '제9회 전국동시지방선거'
    slogans?: string;        // 줄바꿈 또는 |로 구분된 슬로건 묶음
    ctaLines?: string;       // CTA 박스 문구. **굵게** 마크다운 지원
    // Hero 이미지 위치/크기 조정값 (모두 문자열로 저장됨, 빈 값 → 기본값)
    heroImageScale?: string;     // 1.5 (기본), 0.5 ~ 2.5
    heroImageOffsetX?: string;   // % 단위, 음수=왼쪽
    heroImageOffsetY?: string;   // % 단위, 음수=위
}

export interface MayorStory {
    candidateSlug: string;
    date: string;
    category: string;
    title: string;
    content: string;
    imageUrl?: string;
    visible: boolean;
}

export interface MayorSchedule {
    candidateSlug: string;
    date: string;
    time: string;
    title: string;
    location: string;
    visible: boolean;
}

export interface MayorGallery {
    candidateSlug: string;
    date: string;
    caption: string;
    imageUrl: string;
    visible: boolean;
}

export interface Candidate {
    slug: string;
    name: string;
    district: string;
    category: CandidateCategory;
    number?: number;
    photoUrl: string;
    slogan: string;
    intro: string;
    careers: string[];
    policies: {
        title: string;
        content: string;
    }[];
    donation: {
        account: string;
        holder: string;
    };
    social: {
        facebook?: string;
        youtube?: string;
        instagram?: string;
        x?: string; // social_x
        blog?: string;
    };
    contact: {
        phone?: string;
        email?: string;
        kakao?: string;
        telegram?: string;
    };
    isIncumbent: boolean;
    address?: string; // 사무실 주소 등
    password?: string; // 데이터 보호용 비밀번호
    status: CandidateStatus;
    updatedAt: Date;
    // Optional Mayor Data (fetched separately or attached)
    mayorExtra?: MayorExtra;
    mayorStories?: MayorStory[];
    mayorSchedules?: MayorSchedule[];
    mayorGallery?: MayorGallery[];
    reports?: Report[];
}

export interface Report {
    candidateSlug: string;
    year: string;
    month: string;
    category: string;
    title: string;
    description: string;
    linkUrl?: string;
    visible: boolean;
    updatedAt?: Date;
}

export interface CandidatePolicy {
    candidateSlug: string;
    order: number;
    title: string;
    content: string;
    visible: boolean;
    updatedAt?: Date;
}

export interface CentralPolicy {
    category: string;
    order: number;
    title: string;
    summary: string;
    content: string;
    imageUrl?: string;
    linkUrl?: string;
    visible: boolean;
}
