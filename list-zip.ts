import { execSync } from 'child_process';
console.log(execSync('unzip -l test2.zip').toString());
