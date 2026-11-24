import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "I finished it on time \u2014 in the session that compacted before I could send it.";

// An empty MAKEFUN_OUTPUT_DIR falls back to /output, so a blank env
// var can never produce a write to a relative "entry.txt" by accident.
const rawOutDir = process.env.MAKEFUN_OUTPUT_DIR?.trim();
const outDir = rawOutDir ? rawOutDir : "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", { encoding: "utf8" });
