import { promises as fs } from 'node:fs';
import path from 'node:path';

const targetDir = process.argv[2] ?? path.join('dist', 'theme-bootstrap', 'browser');
const indexPath = path.join(targetDir, 'index.html');
const notFoundPath = path.join(targetDir, '404.html');

try {
	await fs.copyFile(indexPath, notFoundPath);
	console.log(`Copied ${indexPath} -> ${notFoundPath}`);
} catch (error) {
	console.error(`Failed to copy 404.html from ${indexPath}:`, error);
	process.exit(1);
}
