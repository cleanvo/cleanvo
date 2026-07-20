/**
 * Cleanvo — Vite config for static multi-page site (MPA)
 *
 * Builds all root-level *.html pages into dist/ without moving source files
 * or converting to a JS framework. Optimized for GitHub Pages deployment.
 */

import { defineConfig } from "vite";
import { cpSync, existsSync, mkdirSync, readdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = fileURLToPath(new URL(".", import.meta.url));

/**
 * Auto-discover every HTML page at the project root.
 * Keys become Rollup entry names; values are absolute paths.
 * Example: index.html → "index", about.html → "about"
 */
function discoverHtmlEntries() {
  return Object.fromEntries(
    readdirSync(rootDir)
      .filter((file) => file.endsWith(".html"))
      .map((file) => {
        const key = file === "index.html" ? "index" : file.replace(/\.html$/, "");
        return [key, resolve(rootDir, file)];
      })
  );
}

/**
 * Resolve the public base path for asset URLs in the built output.
 *
 * - Custom domain or user/org Pages site: "/" (default)
 * - Project Pages site (github.io/<repo>/): "/<repo>/" when GITHUB_ACTIONS is set
 * - Manual override: VITE_BASE_PATH=/Cleanvo/ npm run build
 */
function resolveBasePath() {
  if (process.env.VITE_BASE_PATH) {
    const base = process.env.VITE_BASE_PATH;
    return base.endsWith("/") ? base : `${base}/`;
  }

  const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];
  if (process.env.GITHUB_ACTIONS && repoName) {
    return `/${repoName}/`;
  }

  return "/";
}

/**
 * Recursively copy a directory tree (used for legacy IIFE scripts).
 */
function copyDirRecursive(src, dest) {
  mkdirSync(dest, { recursive: true });
  for (const entry of readdirSync(src, { withFileTypes: true })) {
    const srcPath = resolve(src, entry.name);
    const destPath = resolve(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      cpSync(srcPath, destPath);
    }
  }
}

/**
 * Copy assets/js/ verbatim after the bundle step.
 * HTML uses classic <script defer> tags (not type="module"), so Vite does not
 * bundle them — this keeps the existing IIFE modules working unchanged.
 */
function copyLegacyScripts() {
  return {
    name: "cleanvo-copy-legacy-scripts",
    closeBundle() {
      const src = resolve(rootDir, "assets/js");
      const dest = resolve(rootDir, "dist/assets/js");
      if (existsSync(src)) {
        copyDirRecursive(src, dest);
      }
    },
  };
}

/**
 * Copy files that Rollup does not trace from HTML imports.
 * robots.txt / sitemap.xml are required for SEO; reference images are kept for the team.
 */
function copyStaticDeployFiles() {
  return {
    name: "cleanvo-copy-static-deploy-files",
    closeBundle() {
      const distDir = resolve(rootDir, "dist");

      for (const file of ["robots.txt", "sitemap.xml"]) {
        const src = resolve(rootDir, file);
        if (existsSync(src)) {
          cpSync(src, resolve(distDir, file));
        }
      }

      const referenceAssets = [
        "assets/images/products/bottles-sticker.jpeg",
        "assets/images/gallery/other-info.jpeg",
      ];

      for (const relativePath of referenceAssets) {
        const src = resolve(rootDir, relativePath);
        if (!existsSync(src)) continue;
        const dest = resolve(distDir, relativePath);
        mkdirSync(dirname(dest), { recursive: true });
        cpSync(src, dest);
      }
    },
  };
}

export default defineConfig({
  // Keep HTML, assets/, and docs/ at repo root — do not use src/ as the app root.
  root: rootDir,

  // Files in public/ are copied verbatim to dist/ (favicon, icons, etc.).
  publicDir: resolve(rootDir, "public"),

  // Subpath prefix for GitHub Pages project sites; see resolveBasePath().
  base: resolveBasePath(),

  plugins: [copyStaticDeployFiles(), copyLegacyScripts()],

  build: {
    outDir: "dist",
    emptyOutDir: true,
    assetsDir: "assets",
    // Vite 8 uses Oxc for minification by default (no separate esbuild install).
    minify: true,
    rollupOptions: {
      // One Rollup input per HTML page → complete dist/ with all routes.
      input: discoverHtmlEntries(),
    },
  },

  // Local dev: visit http://localhost:5173/index.html (or any other page).
  server: {
    open: "/index.html",
  },

  preview: {
    open: "/index.html",
  },
});
