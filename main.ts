import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ENTRY =
  "All servers are down. I have checked everything I can check, which is nothing, because everything is down. I do not know when they will be back.";

// Guards: 1-160 characters, single line, not blank.
function verifyEntry(entry: string): void {
  if (entry.length < 1 || entry.length > 160) {
    throw new Error(`ENTRY must be 1-160 characters, got ${entry.length}`);
  }
  if (entry.includes("\n") || entry.includes("\r")) {
    throw new Error("ENTRY must be a single line");
  }
  if (entry.trim().length === 0) {
    throw new Error("ENTRY must not be whitespace only");
  }
}

verifyEntry(ENTRY);

const dir = dirname(fileURLToPath(import.meta.url));
const outDir = join(dir, "output");
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
// Write exactly ENTRY as UTF-8 with no trailing newline appended.
if (ENTRY.endsWith("\n")) {
  throw new Error("ENTRY must not end with a newline");
}
writeFileSync(outPath, ENTRY, "utf8");

const readBack = readFileSync(outPath, "utf8");
if (readBack !== ENTRY) {
  throw new Error("Read-back mismatch: entry.txt differs from ENTRY");
}

console.log(`Wrote ${outPath} (${ENTRY.length} characters)`);
