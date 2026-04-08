import fs from 'fs';
import archiver from 'archiver';

const output = fs.createWriteStream('test2.zip');
const archive = archiver('zip', {
  zlib: { level: 9 }
});

output.on('close', function() {
  console.log(archive.pointer() + ' total bytes');
  console.log('archiver has been finalized and the output file descriptor has closed.');
});

archive.on('error', function(err) {
  throw err;
});

archive.pipe(output);

archive.directory(process.cwd(), false, (entryData) => {
  const name = entryData.name;
  if (
    name.startsWith("node_modules/") ||
    name === "node_modules" ||
    name.startsWith("dist/") ||
    name === "dist" ||
    name.startsWith(".git/") ||
    name === ".git"
  ) {
    return false;
  }
  return entryData;
});

archive.finalize();
