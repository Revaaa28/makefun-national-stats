// Minimal static server for local testing: serves app/ at http://localhost:8080.
// Usage: node serve.ts [--port 8080]

import { createServer } from 'node:http';
import { readFileSync, existsSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = fileURLToPath(new URL('.', import.meta.url));
const root = join(here, 'app');
const port = Number(process.argv.find((a) => a.startsWith('--port='))?.split('=')[1] ?? 8080);
const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json' };

createServer((req, res) => {
  const path = decodeURIComponent(new URL(req.url, 'http://x').pathname).replace(/^\/+/, '') || 'index.html';
  const file = join(root, path);
  if (!file.startsWith(root) || !existsSync(file) || !statSync(file).isFile()) {
    res.writeHead(404); res.end('not found'); return;
  }
  res.writeHead(200, { 'content-type': types[extname(file)] ?? 'application/octet-stream' });
  res.end(readFileSync(file));
}).listen(port, () => console.log(`AngkaNusa at http://localhost:${port}`));
