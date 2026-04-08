import fs from 'fs';
import archiver from 'archiver';

const output = fs.createWriteStream('test5.zip');
const archive = archiver('zip', {
  zlib: { level: 9 }
});

archive.pipe(output);
archive.glob('**/*', {
  cwd: process.cwd(),
  ignore: ['node_modules/**', 'dist/**', '.git/**', '*.zip', '*.ts', '!server.ts', '!vite.config.ts'],
  dot: true
});
archive.finalize();
