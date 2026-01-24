import * as z from 'zod';

export const formSchema = z.object({
    slug: z.string().min(2, "2글자 이상 입력해주세요").regex(/^[a-z0-9-]+$/, "영문 소문자, 숫자, 하이픈만 가능합니다"),
    name: z.string().min(1, "이름을 입력해주세요"),
    district: z.string().min(1, "선거구를 입력해주세요"),
    category: z.string(),
    number: z.string().optional(),
    slogan: z.string().min(1, "슬로건을 입력해주세요"),
    intro: z.string().min(1, "소개글을 입력해주세요"),
    // Allow up to 10 items
    careers: z.array(z.string()).max(10, "경력은 최대 10개까지만 입력 가능합니다").default([]),
    policies: z.array(z.object({
        title: z.string().min(1, "공약 제목을 입력해주세요"),
        content: z.string()
    })).max(10, "공약은 최대 10개까지만 입력 가능합니다").default([]),
    photoUrl: z.string().url("올바른 URL을 입력해주세요").optional().or(z.literal('')),
    donation: z.object({
        account: z.string().min(1, "후원계좌를 입력해주세요"),
        holder: z.string().min(1, "예금주를 입력해주세요"),
    }),
    contact: z.object({
        phone: z.string().optional(),
        email: z.string().email("이메일 형식이 올바르지 않습니다").optional().or(z.literal('')),
    }),
    address: z.string().optional(),
    social: z.object({
        x: z.string().optional(),
        facebook: z.string().optional(),
        youtube: z.string().optional(),
        instagram: z.string().optional(),
    }),
    isIncumbent: z.boolean().default(false),
    reports: z.array(z.object({
        candidateSlug: z.string().optional(),
        year: z.string().min(4, "연도를 입력해주세요"),
        month: z.string().min(1, "월을 입력해주세요"),
        category: z.string().min(1, "분류를 선택해주세요"),
        title: z.string().min(1, "제목을 입력해주세요"),
        description: z.string().min(1, "내용을 입력해주세요"),
        linkUrl: z.string().optional(),
        visible: z.boolean().default(true),
    })).default([]),
});

export type FormData = z.infer<typeof formSchema>;
