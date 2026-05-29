import { provincePolicies, type Policy, type JusticeColor } from "@/data/policies-province";
import { cityPolicies } from "@/data/policies-city";
import { PERSONAS } from "@/data/sms-personas";

export type PersonaId =
  | "commute"  // 출퇴근 좀비
  | "medical"  // 응급실 뺑뺑이 난민
  | "labor"    // 산단 만년 야근러
  | "youth"    // 탈출각 청년
  | "village"  // 빈집 동네 지킴이
  | "night"    // 밤길 불안러
  | "solo";    // 혼삶 1인가구

export type Region = "changwon" | "gyeongnam";

export interface QuizOption {
  label: string;
  sub?: string;
  weights: Partial<Record<PersonaId, number>>;
  pain: number; // 0~18, 클수록 생존력 깎임
  region?: Region; // 장면 1에서만 사용
}

export interface QuizScene {
  id: number;
  eyebrow: string;
  prompt: string;
  color: JusticeColor;
  options: QuizOption[];
}

export interface PolicyRef {
  scope: "province" | "city";
  id: number;
}

export interface Persona {
  id: PersonaId;
  emoji: string;
  name: string;
  verdict: string;
  color: JusticeColor;
  policies: {
    changwon: [PolicyRef, PolicyRef];
    gyeongnam: [PolicyRef, PolicyRef];
  };
}

export interface QuizResult {
  personaId: PersonaId;
  survivalScore: number;
  region: Region;
}

// 동점 시 더 절실한 축 우선
export const PERSONA_PRIORITY: PersonaId[] = [
  "medical",
  "labor",
  "commute",
  "solo",
  "night",
  "youth",
  "village",
];

const SCORE_MIN = 12;
const SCORE_MAX = 68;

export function scoreQuiz(answers: QuizOption[]): QuizResult {
  const totals: Record<PersonaId, number> = {
    commute: 0,
    medical: 0,
    labor: 0,
    youth: 0,
    village: 0,
    night: 0,
    solo: 0,
  };
  let region: Region = "gyeongnam";
  let totalPain = 0;

  for (const a of answers) {
    if (a.region) region = a.region;
    totalPain += a.pain;
    for (const key of Object.keys(a.weights) as PersonaId[]) {
      totals[key] += a.weights[key] ?? 0;
    }
  }

  let personaId: PersonaId = PERSONA_PRIORITY[0];
  let best = -1;
  for (const pid of PERSONA_PRIORITY) {
    if (totals[pid] > best) {
      best = totals[pid];
      personaId = pid;
    }
  }

  const survivalScore = Math.max(SCORE_MIN, Math.min(SCORE_MAX, 100 - totalPain));
  return { personaId, survivalScore, region };
}

// PolicyRef → Policy 객체로 해석. 없으면 크게 터뜨림(fail-loud)
export function resolvePolicy(ref: PolicyRef): Policy {
  const list = ref.scope === "province" ? provincePolicies : cityPolicies;
  const found = list.find((p) => p.id === ref.id);
  if (!found) throw new Error(`정책을 찾을 수 없음: ${ref.scope} #${ref.id}`);
  return found;
}

// 페르소나 + 지역 → 매칭된 Policy 2개 반환
export function getMatchedPolicies(personaId: PersonaId, region: Region): Policy[] {
  const persona = PERSONAS.find((p) => p.id === personaId);
  if (!persona) throw new Error(`페르소나 없음: ${personaId}`);
  const refs = region === "changwon" ? persona.policies.changwon : persona.policies.gyeongnam;
  return refs.map(resolvePolicy);
}

// 페르소나 id → Persona 객체 반환
export function getPersona(personaId: PersonaId): Persona {
  const persona = PERSONAS.find((p) => p.id === personaId);
  if (!persona) throw new Error(`페르소나 없음: ${personaId}`);
  return persona;
}
