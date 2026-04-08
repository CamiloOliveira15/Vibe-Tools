import fs from 'fs';
import archiver from 'archiver';

const output = fs.createWriteStream('test4.zip');
const archive = archiver('zip', {
  zlib: { level: 9 }
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
    name === ".git" ||
    name.startsWith("src/") ||
    name === "src" ||
    name === "package-lock.json"
  ) {
    return false;
  }
  return entryData;
});
archive.finalize();
