import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { sheetsClient } from '@justice/api-client';

export const revalidate = 0;

export default async function Home() {
  const settings = await sheetsClient.getSettings('page_settings');
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center space-y-6">
        <div className="w-16 h-16 bg-justice-green rounded-full flex items-center justify-center mx-auto text-white font-bold text-2xl">
          JP
        </div>

        <h1 className="text-3xl font-bold text-gray-900">
          {settings.home_heading || '2026 지방선거'}<br />
          <span className="text-justice-purple">{settings.home_heading_highlight || '웹명함 플랫폼'}</span>
        </h1>

        <p className="text-gray-600">
          {settings.home_description || '후보자 웹명함을 직접 등록하고 관리하세요.'}
        </p>

        <div className="pt-4 space-y-3">
          <Link
            href="/register"
            className="flex items-center justify-center gap-2 w-full py-4 bg-justice-green hover:bg-justice-green-dark text-white font-bold rounded-xl transition-colors text-lg"
          >
            {settings.home_cta || '후보자 등록 / 수정하기'}
            <ArrowRight className="w-5 h-5" />
          </Link>

          <p className="text-xs text-gray-400">
            * 웹명함 등록 및 기존 정보 수정이 가능합니다.
          </p>
        </div>
      </div>
    </div>
  );
}
