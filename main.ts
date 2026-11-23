// Pocket Acres — "Day One, Day Seven": the entry program for the make.fun
// bounty post-tiktok-day-one-day-seven-20261123-0327 (Node 22, stdlib only).
//
// The entry itself is a TikTok video: the same tiny farm game filmed on the
// day it was made and again after a week of daily updates, ending with
// make.fun's referral end card. This program's whole job is to hand the
// video's address to the grader: it copies VIDEO.json from the repository
// root into the output directory, where the house reads the video itself
// and scores what TikTok shows for it. Nothing else is written or scored.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });

const source = join(botDir, "VIDEO.json");
const target = join(outputDir, "VIDEO.json");
try {
  copyFileSync(source, target);
} catch (err) {
  console.error(`could not copy VIDEO.json: ${(err as Error).message}`);
  process.exit(1);
}
