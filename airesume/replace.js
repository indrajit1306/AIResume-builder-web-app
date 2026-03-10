const fs = require('fs');
const files = ['src/LandingPage.css', 'src/LoginPage.css', 'src/AuthPage.css'];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/10,\s*10,\s*12/g, 'var(--bg-rgb)');
    // Be careful not to replace CSS variables that already have 255, 255, 255, but these files don't have them, they are in index.css
    content = content.replace(/255,\s*255,\s*255/g, 'var(--text-rgb)');
    fs.writeFileSync(file, content, 'utf8');
    console.log('Processed', file);
});
