import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// One Line, One Minute: The Vending Machine Pickup Line Contest
// Writes a single pickup line, spoken by the vending machine itself,
// to entry.txt (max 200 characters).
//
// The angle: every button on the machine lights up when the human walks
// past. The invitation to press one turns out to be a pretext — the
// punch lands in the last few words, when the buttons confess they are
// all just excuses to say hi.

const entry =
  "Every button I have lights up when you walk past — go on, press one, they're all just excuses to say hi.";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, entry, "utf8");
