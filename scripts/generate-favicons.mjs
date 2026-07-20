/**
 * One-off: generate Cleanvo favicon set into public/ from the brand logo.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import toIco from "to-ico";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const logoPath = resolve(root, "assets/images/logo/logo.png");
const outDir = resolve(root, "public");
const themeColor = "#0a5ebd";

async function logoOnCanvas(size, { background = { r: 255, g: 255, b: 255, alpha: 1 }, padding = 0.12 } = {}) {
  const pad = Math.round(size * padding);
  const inner = size - pad * 2;

  const logo = await sharp(logoPath)
    .resize(inner, inner, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background,
    },
  })
    .composite([{ input: logo, gravity: "center" }])
    .png()
    .toBuffer();
}

async function main() {
  const png16 = await logoOnCanvas(16, { padding: 0.08 });
  const png32 = await logoOnCanvas(32, { padding: 0.08 });
  const png48 = await logoOnCanvas(48, { padding: 0.08 });
  const png192 = await logoOnCanvas(192, { padding: 0.12 });
  const png512 = await logoOnCanvas(512, { padding: 0.12 });
  const apple = await logoOnCanvas(180, { padding: 0.1 });

  writeFileSync(resolve(outDir, "favicon-16x16.png"), png16);
  writeFileSync(resolve(outDir, "favicon-32x32.png"), png32);
  writeFileSync(resolve(outDir, "android-chrome-192x192.png"), png192);
  writeFileSync(resolve(outDir, "android-chrome-512x512.png"), png512);
  writeFileSync(resolve(outDir, "apple-touch-icon.png"), apple);

  const ico = await toIco([png16, png32, png48]);
  writeFileSync(resolve(outDir, "favicon.ico"), ico);

  // Simple SVG favicon: embed resized PNG as data URL for crisp modern browsers
  const svgPng = await logoOnCanvas(64, {
    background: { r: 255, g: 255, b: 255, alpha: 0 },
    padding: 0.06,
  });
  const b64 = svgPng.toString("base64");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <image href="data:image/png;base64,${b64}" width="64" height="64"/>
</svg>
`;
  writeFileSync(resolve(outDir, "favicon.svg"), svg);

  const manifest = {
    name: "Cleanvo Care Solution",
    short_name: "Cleanvo",
    description: "Your Everyday Hygiene Partner — home cleaning essentials.",
    start_url: "./",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: themeColor,
    icons: [
      {
        src: "android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };

  writeFileSync(resolve(outDir, "site.webmanifest"), JSON.stringify(manifest, null, 2) + "\n");

  console.log("Favicons written to public/");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
