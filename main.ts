import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.OUTPUT_DIR ?? "/output";
const target = join(outDir, "entry.png");

const bytes = readFileSync(source);
if (bytes.length === 0) {
  throw new Error(`source image is empty: ${source}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(target, bytes);
const written = readFileSync(target);
if (written.length !== bytes.length) {
  throw new Error(`output size mismatch: wrote ${written.length}, expected ${bytes.length}`);
}
console.log(`wrote ${target} (${bytes.length} bytes)`);
