import { execSync } from 'child_process';
console.log(execSync('unzip -l test4.zip').toString());
