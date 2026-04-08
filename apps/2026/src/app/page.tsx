
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
        <div className="flex flex-wrap justify-center gap-4 mb-8 px-4">
            <a href="https://www.justice21.org/" target="_blank" rel="noreferrer" className="hover:opacity-80 transition flex items-center justify-center px-2 py-2 h-12">
                <img src="/logo-03.png" alt="정의당" className="h-full w-auto object-contain" />
            </a>
            <a href="https://2026.justice21.org/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center h-12 px-6 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white transition font-bold text-sm shadow-sm backdrop-blur-sm">
                2026 지선 특별 페이지
            </a>
        </div>
        <p className="text-sm">&copy; 2026 Justice Party. All rights reserved.</p>
      </footer>
    </main>
  );
}
