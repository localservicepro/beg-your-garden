// Static site generator: renders src/pages/*.js into dist/ with clean URLs.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const src = path.join(root, 'src');

const { site } = await import(pathToFileURL(path.join(src, 'data/site.js')).href);

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

// Static assets
fs.cpSync(path.join(src, 'public'), dist, { recursive: true });
fs.mkdirSync(path.join(dist, 'assets'), { recursive: true });
const css = fs.readFileSync(path.join(src, 'styles/main.css'), 'utf8');
let js = fs.readFileSync(path.join(src, 'scripts/main.js'), 'utf8');
let cssOut = css, jsOut = js;
try {
  const esbuild = await import('esbuild');
  cssOut = esbuild.transformSync(css, { loader: 'css', minify: true }).code;
  jsOut = esbuild.transformSync(js, { loader: 'js', minify: true, target: 'es2018' }).code;
} catch { console.log('esbuild not installed: shipping unminified CSS/JS'); }
fs.writeFileSync(path.join(dist, 'assets/main.css'), cssOut);
fs.writeFileSync(path.join(dist, 'assets/main.js'), jsOut);
fs.copyFileSync(path.join(src, 'public/images/favicon.ico'), path.join(dist, 'favicon.ico'));
const assetHash = crypto.createHash('md5').update(cssOut + jsOut).digest('hex').slice(0, 8);

// Pages
const pageFiles = fs.readdirSync(path.join(src, 'pages')).filter((f) => f.endsWith('.js')).sort();
const pages = [];
for (const f of pageFiles) {
  const mod = await import(pathToFileURL(path.join(src, 'pages', f)).href);
  const list = typeof mod.default === 'function' ? await mod.default({ assetHash }) : mod.default;
  for (const p of list) pages.push(p);
}

const written = [];
for (const p of pages) {
  const outPath = p.path.endsWith('/') ? path.join(dist, p.path, 'index.html') : path.join(dist, p.path);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, p.html);
  written.push(p);
}

// Sitemap (indexable pages only)
const today = new Date().toISOString().slice(0, 10);
const urls = written.filter((p) => p.path.endsWith('/') && !p.noindex).map((p) => `  <url><loc>${site.url}${p.path}</loc><lastmod>${today}</lastmod><changefreq>${p.path === '/' ? 'weekly' : 'monthly'}</changefreq><priority>${p.priority ?? (p.path === '/' ? '1.0' : '0.7')}</priority></url>`).join('\n');
fs.writeFileSync(path.join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
fs.writeFileSync(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\nDisallow: /thank-you/\n\nSitemap: ${site.url}/sitemap.xml\n`);

console.log(`Built ${written.length} pages -> dist/ (asset hash ${assetHash})`);
for (const p of written) console.log('  ' + p.path);
