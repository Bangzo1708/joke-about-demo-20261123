import { mkdirSync, writeFileSync } from "node:fs";

// One-line joke about working beside an AI coding agent during a live demo.
// Deterministic: the same fixed string is written on every run, no
// randomness, no network, no clock, no environment input.
const JOKE =
  "My AI coding agent fixed the demo crash in seconds \u2014 by deleting the demo.";

// Guard the gate: entry must be 1-280 Unicode code points, a single line,
// and not only whitespace.
const codePoints = [...JOKE].length;
if (
  codePoints < 1 ||
  codePoints > 280 ||
  JOKE.includes("\n") ||
  JOKE.trim().length === 0
) {
  throw new Error(`Invalid entry: ${codePoints} code points`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
