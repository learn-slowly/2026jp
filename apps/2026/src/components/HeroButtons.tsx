'use client';

const FONT_FAMILY =
    '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, "Apple SD Gothic Neo", "Noto Sans KR", sans-serif';

type SvgProps = {
    className?: string;
};

export function HomepageButton({ className }: SvgProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 89" className={className}>
            <defs>
                <filter id="hero-shadow-home" x="0" y="0" width="260" height="89" filterUnits="userSpaceOnUse">
                    <feOffset dx="1.98" dy="1.98" />
                    <feGaussianBlur result="blur" stdDeviation="8.5" />
                    <feFlood floodColor="#fff100" floodOpacity="0.25" />
                    <feComposite in2="blur" operator="in" />
                    <feComposite in="SourceGraphic" />
                </filter>
            </defs>
            <g filter="url(#hero-shadow-home)">
                <rect x="23.64" y="24.32" width="207.95" height="36.97" rx="18.48" ry="18.48" fill="#fff" fillOpacity="0.75" />
            </g>
            <text
                x="39.78"
                y="48.73"
                fill="#0d131c"
                fontFamily={FONT_FAMILY}
                fontSize="16"
                fontWeight="700"
            >
                정의당 홈페이지 바로가기
            </text>
            <g fill="none" stroke="#0d131c" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10">
                <line x1="203.15" y1="46.09" x2="211.85" y2="37.38" />
                <line x1="212.13" y1="45.36" x2="211.99" y2="37.4" />
                <line x1="211.62" y1="37.38" x2="203.66" y2="37.52" />
            </g>
        </svg>
    );
}

export function YouthButton({ className }: SvgProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 89" className={className}>
            <defs>
                <filter id="hero-shadow-youth" x="0" y="0" width="256" height="89" filterUnits="userSpaceOnUse">
                    <feOffset dx="1.98" dy="1.98" />
                    <feGaussianBlur result="blur" stdDeviation="8.5" />
                    <feFlood floodColor="#fff100" floodOpacity="0.25" />
                    <feComposite in2="blur" operator="in" />
                    <feComposite in="SourceGraphic" />
                </filter>
            </defs>
            <g filter="url(#hero-shadow-youth)">
                <rect
                    x="23.68"
                    y="24.32"
                    width="204.27"
                    height="36.97"
                    rx="18.48"
                    ry="18.48"
                    fill="#27281b"
                    stroke="#b6c1a6"
                    strokeWidth="0.25"
                    strokeMiterlimit="10"
                />
            </g>
            <text
                x="39.82"
                y="48.73"
                fill="#fff100"
                fontFamily={FONT_FAMILY}
                fontSize="16"
                fontWeight="700"
            >
                청년후보페이지 보러가기
            </text>
            <g fill="none" stroke="#fff100" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10">
                <line x1="200.07" y1="46.09" x2="208.77" y2="37.38" />
                <line x1="209.05" y1="45.36" x2="208.91" y2="37.4" />
                <line x1="208.54" y1="37.38" x2="200.58" y2="37.52" />
            </g>
        </svg>
    );
}

export function FinderButton({ className }: SvgProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 169.79 89" className={className}>
            <rect x="0" y="23.07" width="169.79" height="36.97" rx="18.48" ry="18.48" fill="#fff100" />
            <path
                d="M22.03,33.93c-3.34,0-6.05,2.71-6.05,6.05s6.05,10.25,6.05,10.25c0,0,6.05-6.91,6.05-10.25s-2.71-6.05-6.05-6.05ZM22.03,42.56c-1.51,0-2.73-1.22-2.73-2.73s1.22-2.73,2.73-2.73,2.73,1.22,2.73,2.73-1.22,2.73-2.73,2.73Z"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
            />
            <text
                x="35.55"
                y="47.49"
                fill="#000"
                fontFamily={FONT_FAMILY}
                fontSize="16"
                fontWeight="700"
            >
                우리동네 후보 찾기
            </text>
        </svg>
    );
}

export function PolicyButton({ className }: SvgProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 217 89" className={className}>
            <defs>
                <filter id="hero-shadow-policy" x="0" y="0" width="217" height="89" filterUnits="userSpaceOnUse">
                    <feOffset dx="1.98" dy="1.98" />
                    <feGaussianBlur result="blur" stdDeviation="8.5" />
                    <feFlood floodColor="#fff100" floodOpacity="0.25" />
                    <feComposite in2="blur" operator="in" />
                    <feComposite in="SourceGraphic" />
                </filter>
            </defs>
            <g filter="url(#hero-shadow-policy)">
                <rect x="24.07" y="24.46" width="165.43" height="36.97" rx="18.48" ry="18.48" fill="#fff" fillOpacity="0.75" />
            </g>
            <text
                x="67.08"
                y="48.87"
                fill="#0d131c"
                fontFamily={FONT_FAMILY}
                fontSize="16"
                fontWeight="700"
            >
                정의당 핵심 공약
            </text>
            <g fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10">
                <line x1="47.95" y1="37.87" x2="58.77" y2="37.87" />
                <line x1="43.74" y1="37.87" x2="44.29" y2="37.87" />
                <line x1="47.95" y1="43.1" x2="58.77" y2="43.1" />
                <line x1="43.74" y1="43.1" x2="44.29" y2="43.1" />
                <line x1="47.95" y1="48.33" x2="58.77" y2="48.33" />
                <line x1="43.74" y1="48.33" x2="44.29" y2="48.33" />
            </g>
        </svg>
    );
}
