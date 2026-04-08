
import { sheetsClient } from '@justice/api-client';
import { HeroSection } from '@/components/HeroSection';
import { PolicyShowcase } from '@/components/PolicyShowcase';
import { CandidateFinder } from '@/components/CandidateFinder';

export const revalidate = 300;

export default async function Home() {
  const [policies, candidates] = await Promise.all([
    sheetsClient.getCentralPolicies(),
    sheetsClient.getCandidates()
  ]);

  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <CandidateFinder candidates={candidates} />
      <PolicyShowcase policies={policies} />

      <footer className="bg-gray-900 text-white/50 py-16 text-center">
        <div className="flex flex-wrap items-center justify-center gap-5 mb-8 px-4">
            <a href="https://www.justice21.org/" target="_blank" rel="noreferrer" className="hover:opacity-80 transition flex items-center justify-center h-8">
                <img src="/logo-03.png" alt="정의당" className="h-full w-auto object-contain" />
            </a>
            <div className="w-[1px] h-4 bg-white/20"></div>
            <a href="https://2026.justice21.org/" target="_blank" rel="noreferrer" className="hover:text-justice-yellow transition text-white/90 font-bold text-sm tracking-wide flex items-center gap-1">
                2026 지선 특별 페이지 <span className="text-white/40 text-xs text-center">↗</span>
            </a>
        </div>
        <p className="text-sm">&copy; 2026 Justice Party. All rights reserved.</p>
      </footer>
    </main>
  );
}
