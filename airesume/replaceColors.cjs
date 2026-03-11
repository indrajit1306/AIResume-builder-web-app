const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function replaceInDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            replaceInDir(fullPath);
        } else if (fullPath.endsWith('.css') || fullPath.endsWith('.jsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let newContent = content
                .replace(/99,\s*102,\s*241/g, 'var(--primary-rgb)')
                .replace(/236,\s*72,\s*153/g, 'var(--secondary-rgb)');
            
            if (content !== newContent) {
                fs.writeFileSync(fullPath, newContent);
                console.log(`Updated ${fullPath}`);
            }
        }
    }
}

replaceInDir(srcDir);
console.log('Done!');
