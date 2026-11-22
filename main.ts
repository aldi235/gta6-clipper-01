// gta6-clipper-01 — entrypoint: copies VIDEO.json (the YouTube Shorts URL of
// the submitted clip) into the grader output directory.
//
// The clip itself is a vertical 9:16 Short cut from Rockstar's official
// GTA VI Trailer 2, with a make.fun pitch at the end. The URL in VIDEO.json
// points at the uploaded Short; this file only moves that pointer to /output.
import { copyFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const destination = join(outputDir, "VIDEO.json");
const source = new URL("./VIDEO.json", import.meta.url);

copyFileSync(source, destination);
console.log(`Wrote ${destination}`);

// Node 22, stdlib only — nothing here needs a package install, so the
// grader sandbox can run this entrypoint exactly as-is.
