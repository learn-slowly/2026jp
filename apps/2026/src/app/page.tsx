
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
      <PolicyShowcase policies={policies} />
      <CandidateFinder candidates={candidates} />

      <footer className="bg-gray-900 text-white/50 py-12 text-center">
        <p className="mb-2">2026 지방선거 정의당</p>
        <p className="text-sm">Copyright © Justice Party. All rights reserved.</p>
      </footer>
    </main>
  );
}
