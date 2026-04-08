import fs from 'fs';
import archiver from 'archiver';

const output = fs.createWriteStream('test6.zip');
const archive = archiver('zip', {
  zlib: { level: 9 }
});

archive.pipe(output);
archive.glob("**/*", {
  cwd: process.cwd(),
  ignore: ["node_modules/**", "dist/**", ".git/**"],
  dot: true
});
archive.finalize();
