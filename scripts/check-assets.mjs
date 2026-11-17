import fs from 'node:fs';
import path from 'node:path';
const root = process.cwd();
const refs = new Set();
const app = fs.readFileSync(path.join(root,'src/App.jsx'),'utf8');
const data = fs.readFileSync(path.join(root,'src/data.js'),'utf8');
const html = fs.readFileSync(path.join(root,'index.html'),'utf8');
for (const m of app.matchAll(/\$\{A\}([^`"']+)/g)) refs.add(m[1]);
for (const m of data.matchAll(/\$\{ASSET\}([^`"']+)/g)) refs.add(m[1]);
for (const m of html.matchAll(/%BASE_URL%assets\/([^"']+)/g)) refs.add(m[1]);
const missing = [...refs].filter(ref => !fs.existsSync(path.join(root,'public','assets',ref)));
if (missing.length) {
  console.error('Assets referenciados pero no encontrados en public/assets:');
  for (const ref of missing) console.error(` - ${ref}`);
  process.exit(1);
}
console.log(`Verificación de activos correcta: ${refs.size} archivos referenciados existen.`);
