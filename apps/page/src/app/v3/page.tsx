import { redirect } from 'next/navigation';

// /v3 단독 접근 시 데모 후보(권영국)로 리다이렉트
export default function V3IndexRedirect() {
  redirect('/kyg');
}
