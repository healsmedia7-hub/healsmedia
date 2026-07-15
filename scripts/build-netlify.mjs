import { copyFileSync, existsSync, mkdirSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const root = process.cwd();
const dist = join(root, "dist");
const publicDir = join(root, "public");
const siteHtml = join(root, "src", "heals-site.html");

function copyDirContents(from, to) {
  if (!existsSync(from)) return;
  mkdirSync(to, { recursive: true });
  for (const item of readdirSync(from)) {
    const src = join(from, item);
    const dest = join(to, item);
    if (statSync(src).isDirectory()) copyDirContents(src, dest);
    else {
      mkdirSync(dirname(dest), { recursive: true });
      copyFileSync(src, dest);
    }
  }
}

mkdirSync(dist, { recursive: true });
copyDirContents(publicDir, dist);
writeFileSync(join(dist, "index.html"), copyFileSync ? String(await import("node:fs").then(({ readFileSync }) => readFileSync(siteHtml, "utf8"))) : "");
