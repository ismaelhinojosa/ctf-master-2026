const fs = require('fs');

let script = fs.readFileSync('script.js', 'utf8');

// 1. Inject the encryptedDB from output_db.json
let dbText = fs.readFileSync('output_db.json', 'utf16le');
if (dbText.charCodeAt(0) === 0xFEFF) {
    dbText = dbText.substring(1);
}
let newDB;
try {
    newDB = JSON.parse(dbText);
} catch (e) {
    // If it fails, try UTF-8 without BOM
    dbText = fs.readFileSync('output_db.json', 'utf8');
    if (dbText.charCodeAt(0) === 0xFEFF) {
        dbText = dbText.substring(1);
    }
    newDB = JSON.parse(dbText);
}

const dbStr = JSON.stringify(newDB, null, 4);

// Replace the encryptedDB block
const dbRegex = /this\.encryptedDB\s*=\s*\{[\s\S]*?\};/;
script = script.replace(dbRegex, `this.encryptedDB = ${dbStr};`);

// 2. Inject DOM bindings for recoveryLink
const domBindings = `
        this.recoveryLinkContainer = document.getElementById('recovery-link-container');
        this.recoveryLink = document.getElementById('recovery-link');`;

script = script.replace(
    "this.gateErrorMsg = document.getElementById('gate-error-msg');",
    "this.gateErrorMsg = document.getElementById('gate-error-msg');" + domBindings
);

// 3. Replace detectIdentifiedUser logic
const originalDetectFnStr = `    detectIdentifiedUser() {
        const urlParams = new URLSearchParams(window.location.search);
        let u = urlParams.get('u') || urlParams.get('user');

        if (u) {
            u = u.toLowerCase().trim();
            if (this.usernamesList.includes(u)) {
                this.identifiedUser = u;
                this.initializeTimer();
            }
        }
    }`;

const newDetectFnStr = `    detectIdentifiedUser() {
        const urlParams = new URLSearchParams(window.location.search);
        let u = urlParams.get('u') || urlParams.get('user');

        if (u) {
            u = u.toLowerCase().trim();
            if (this.usernamesList.includes(u)) {
                this.identifiedUser = u;
                
                // Configurar enlace de recuperación si existe en el DOM
                if (this.recoveryLinkContainer && this.recoveryLink) {
                    this.recoveryLinkContainer.style.display = 'block';
                    const targetFile = (u === 'alejandro' || u === 'maria' || u === 'alejandro_maria' || u === 'alejandro y maria') ? 'alejandro_maria' : u;
                    this.recoveryLink.href = 'matrix_recovery_' + targetFile + '.txt';
                }

                this.initializeTimer();
            }
        }
    }`;

script = script.replace(originalDetectFnStr, newDetectFnStr);

fs.writeFileSync('script.js', script);
console.log('Script updated successfully!');
