export type CandidateCategory = '기초지역구' | '기초비례' | '광역지역구' | '광역비례' | '기초단체장' | '광역단체장';
export type CandidateStatus = 'active' | 'draft' | 'review';
export interface MayorExtra {
    candidateSlug: string;
    position: string;
    visionTitle: string;
    visionSubtitle: string;
    greetingTitle: string;
    greetingText: string;
    heroImageUrl: string;
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
        x?: string;
        blog?: string;
    };
    contact: {
        phone?: string;
        email?: string;
        kakao?: string;
        telegram?: string;
    };
    isIncumbent: boolean;
    address?: string;
    password?: string;
    status: CandidateStatus;
    updatedAt: Date;
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
