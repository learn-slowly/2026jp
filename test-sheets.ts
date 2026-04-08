import { sheetsClient } from './packages/api-client/src/index.js';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

async function main() {
  const candidates = await sheetsClient.getCandidates();
  const c = candidates.find((c) => c.name.includes("김찬우"));
  console.log("Kim Chanwoo District:", c?.district);
}
main();
