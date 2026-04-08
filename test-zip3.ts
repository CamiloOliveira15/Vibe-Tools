import fs from 'fs';
import archiver from 'archiver';

const output = fs.createWriteStream('test3.zip');
const archive = archiver('zip', {
  zlib: { level: 9 }
});

archive.pipe(output);
archive.directory('src/', 'src');
archive.finalize();
