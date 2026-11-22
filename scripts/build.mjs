import { mkdir, copyFile } from 'node:fs/promises';

await mkdir('www', { recursive: true });
await copyFile('index.html', 'www/index.html');

console.log('Game files prepared successfully!');
