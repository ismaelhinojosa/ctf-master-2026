const fs = require('fs');
let dom = fs.readFileSync('dom_bindings.js', 'utf8');
let script = fs.readFileSync('script.js', 'utf8');

const marker = 'document.addEventListener(\'click\', startMusicOnInteraction);';
if (script.includes(marker)) {
    script = script.replace(marker, dom + '\n\n        ' + marker);
    fs.writeFileSync('script.js', script);
    console.log('DOM bindings successfully injected into script.js');
} else {
    console.log('Marker not found!');
}
