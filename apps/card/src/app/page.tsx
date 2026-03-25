import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center space-y-6">
        <div className="w-16 h-16 bg-justice-green rounded-full flex items-center justify-center mx-auto text-white font-bold text-2xl">
          JP
        </div>

        <h1 className="text-3xl font-bold text-gray-900">
          2026 지방선거<br />
          <span className="text-justice-purple">웹플랫폼 샘플</span>
        </h1>

        <p className="text-gray-600">
          Google Sheets와 연동된<br />
          후보자 웹명함 시스템입니다.
        </p>

        <div className="pt-4 space-y-3">
          <Link
            href="/hkd"
            className="flex items-center justify-center gap-2 w-full py-4 bg-justice-green hover:bg-justice-green-dark text-white font-bold rounded-xl transition-colors text-lg"
          >
            홍길동 후보 보기
            <ArrowRight className="w-5 h-5" />
          </Link>

          <Link
            href="/qr"
            className="flex items-center justify-center gap-2 w-full py-4 bg-justice-purple hover:bg-justice-purple-dark text-white font-bold rounded-xl transition-colors text-lg"
          >
            QR코드 만들기
            <ArrowRight className="w-5 h-5" />
          </Link>

          <p className="text-xs text-gray-400">
            * 실제 Google Sheets 데이터와 연동됩니다.
          </p>
        </div>
      </div>
    </div>
  );
}
