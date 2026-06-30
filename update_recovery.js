const fs = require('fs');

let script = fs.readFileSync('script.js', 'utf8');

// 1. Inject DOM bindings for recovery link
const domBindings = `
        this.recoveryLinkContainer = document.getElementById('recovery-link-container');
        this.recoveryLink = document.getElementById('recovery-link');
`;
if (!script.includes("this.recoveryLink = document.getElementById('recovery-link');")) {
    script = script.replace(
        "this.gateErrorMsg = document.getElementById('gate-error-msg');",
        "this.gateErrorMsg = document.getElementById('gate-error-msg');" + domBindings
    );
}

// 2. Inject detectIdentifiedUser logic
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

script = script.replace(/    detectIdentifiedUser\(\) \{[\s\S]*?this\.initializeTimer\(\);\s*\}\s*\}\s*\}/, newDetectFnStr);
fs.writeFileSync('script.js', script);
console.log('Recovery logic successfully injected via regex');
