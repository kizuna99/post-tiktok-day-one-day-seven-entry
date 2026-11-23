// Pocket Acres — "Day One, Day Seven" hand-in program.
// Entry for make.fun's post-tiktok-day-one-day-seven-20261123-0327 bounty
// (program/v1, Node 22, standard library only).
//
// The entry itself is a TikTok video: a tiny farm game filmed on the day it
// was made and again after a week of daily updates. This program does the
// one job the grader asks of it — it takes VIDEO.json from the repository
// root and places a byte-identical copy in the output directory, where the
// house reads the video's address and scores the video itself on TikTok.
//
// Locally, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for /bot and
// /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
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

// Read both sides back and refuse to hand in a copy that differs.
const handed = readFileSync(target);
if (!handed.equals(readFileSync(source))) {
  console.error("VIDEO.json copy does not match the repository file");
  process.exit(1);
}
console.log(`VIDEO.json handed in (${handed.length} bytes)`);
