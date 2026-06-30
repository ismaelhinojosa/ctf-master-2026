const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Remove the new audio block and button
const startIdx = html.indexOf('<!-- Audio de Fondo (Música) -->');
if (startIdx !== -1) {
    const endIdx = html.indexOf('</body>', startIdx);
    if (endIdx !== -1) {
        html = html.substring(0, startIdx) + html.substring(endIdx);
    }
}

fs.writeFileSync('index.html', html);
console.log('HTML Reverted');
