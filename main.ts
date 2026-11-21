import { readFileSync, writeFileSync, mkdirSync, existsSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const source = join(scriptDir, "entry.png");
const outDir = process.env.OUTPUT_DIR ?? "/output";
const target = join(outDir, "entry.png");

// The catalogue image ships in the repo; the program just copies it out.
if (!existsSync(source)) {
  throw new Error(`source image missing: ${source}`);
}
const bytes = readFileSync(source);
mkdirSync(outDir, { recursive: true });
writeFileSync(target, bytes);
const written = statSync(target).size;
if (written !== bytes.length) {
  throw new Error(`output size mismatch: wrote ${written}, expected ${bytes.length}`);
}
console.log(`wrote ${target} (${written} bytes)`);
