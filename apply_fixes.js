const fs = require('fs');

// --- UPDATE INDEX.HTML ---
let html = fs.readFileSync('index.html', 'utf8');

// Update success-overlay
html = html.replace('.success-overlay {\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100vw;\n            height: 100vh;\n            background: rgba(4, 5, 12, 0.95);\n            z-index: 100;\n            display: flex;\n            justify-content: center;\n            align-items: center;', 
    '.success-overlay {\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100vw;\n            height: 100vh;\n            background: rgba(4, 5, 12, 0.95);\n            z-index: 100;\n            display: flex;\n            justify-content: center;\n            align-items: flex-start;\n            overflow-y: auto;\n            padding: 40px 10px;');
html = html.replace('.success-overlay {\r\n            position: fixed;\r\n            top: 0;\r\n            left: 0;\r\n            width: 100vw;\r\n            height: 100vh;\r\n            background: rgba(4, 5, 12, 0.95);\r\n            z-index: 100;\r\n            display: flex;\r\n            justify-content: center;\r\n            align-items: center;', 
    '.success-overlay {\r\n            position: fixed;\r\n            top: 0;\r\n            left: 0;\r\n            width: 100vw;\r\n            height: 100vh;\r\n            background: rgba(4, 5, 12, 0.95);\r\n            z-index: 100;\r\n            display: flex;\r\n            justify-content: center;\r\n            align-items: flex-start;\r\n            overflow-y: auto;\r\n            padding: 40px 10px;');

// Add margin auto to success-card
html = html.replace('.success-card {\n            background: var(--bg-color);', '.success-card {\n            margin: auto;\n            background: var(--bg-color);');
html = html.replace('.success-card {\r\n            background: var(--bg-color);', '.success-card {\r\n            margin: auto;\r\n            background: var(--bg-color);');

// Update timer-overlay
html = html.replace('.timer-overlay {\n            display: none;\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100vw;\n            height: 100vh;\n            background: rgba(4, 5, 12, 0.95);\n            z-index: 100;\n            justify-content: center;\n            align-items: center;', 
    '.timer-overlay {\n            display: none;\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100vw;\n            height: 100vh;\n            background: rgba(4, 5, 12, 0.95);\n            z-index: 100;\n            justify-content: center;\n            align-items: flex-start;\n            overflow-y: auto;\n            padding: 40px 10px;');
html = html.replace('.timer-overlay {\r\n            display: none;\r\n            position: fixed;\r\n            top: 0;\r\n            left: 0;\r\n            width: 100vw;\r\n            height: 100vh;\r\n            background: rgba(4, 5, 12, 0.95);\r\n            z-index: 100;\r\n            justify-content: center;\r\n            align-items: center;', 
    '.timer-overlay {\r\n            display: none;\r\n            position: fixed;\r\n            top: 0;\r\n            left: 0;\r\n            width: 100vw;\r\n            height: 100vh;\r\n            background: rgba(4, 5, 12, 0.95);\r\n            z-index: 100;\r\n            justify-content: center;\r\n            align-items: flex-start;\r\n            overflow-y: auto;\r\n            padding: 40px 10px;');

// Add margin auto to timer-card
html = html.replace('.timer-card {\n            background: var(--bg-color);', '.timer-card {\n            margin: auto;\n            background: var(--bg-color);');
html = html.replace('.timer-card {\r\n            background: var(--bg-color);', '.timer-card {\r\n            margin: auto;\r\n            background: var(--bg-color);');

// Bump version
html = html.replace('script.js?v=1.3.11', 'script.js?v=1.3.14');
html = html.replace('script.js?v=1.3.12', 'script.js?v=1.3.14');
html = html.replace('script.js?v=1.3.13', 'script.js?v=1.3.14');

fs.writeFileSync('index.html', html);


// --- UPDATE SCRIPT.JS ---
let js = fs.readFileSync('script.js', 'utf8');

// Add scrollTo(0,0) to startPrankCountdown
js = js.replace('    startPrankCountdown() {\n        this.successOverlay.classList.add(\'visible\');',
    '    startPrankCountdown() {\n        window.scrollTo(0, 0);\n        this.successOverlay.classList.add(\'visible\');');
js = js.replace('    startPrankCountdown() {\r\n        this.successOverlay.classList.add(\'visible\');',
    '    startPrankCountdown() {\r\n        window.scrollTo(0, 0);\r\n        this.successOverlay.classList.add(\'visible\');');

// Add scrollTo(0,0) to timerIntroOverlay
js = js.replace('            this.timerIntroOverlay.classList.add(\'visible\');\n            this.timerStartBtn.addEventListener',
    '            window.scrollTo(0, 0);\n            this.timerIntroOverlay.classList.add(\'visible\');\n            this.timerStartBtn.addEventListener');
js = js.replace('            this.timerIntroOverlay.classList.add(\'visible\');\r\n            this.timerStartBtn.addEventListener',
    '            window.scrollTo(0, 0);\r\n            this.timerIntroOverlay.classList.add(\'visible\');\r\n            this.timerStartBtn.addEventListener');

// Add scrollTo(0,0) to timerExpiredOverlay
js = js.replace('    triggerTimeExpired() {\n        const username',
    '    triggerTimeExpired() {\n        window.scrollTo(0, 0);\n        const username');
js = js.replace('    triggerTimeExpired() {\r\n        const username',
    '    triggerTimeExpired() {\r\n        window.scrollTo(0, 0);\r\n        const username');

// Fix the SPAM filter in handleReplySend
const oldCatch = `            .catch((error) => {
                console.error(error);
                this.replyStatusMsg.textContent = \`❌ Error: \${error.message}\`;
                this.replyStatusMsg.style.color = '#ff1493';
                this.replySendBtn.disabled = false;
                this.replySendBtn.textContent = 'Enviar Respuesta';
            });`;
const newCatch = `            .catch((error) => {
                console.error(error);
                if (error.message && error.message.toLowerCase().includes('spam')) {
                    this.replyStatusMsg.innerHTML = \`❌ El servidor anti-spam bloqueó tu mensaje por hacer demasiadas pruebas.<br>Usa este enlace: <a href="mailto:ismaelhinojosa6@gmail.com?subject=\${encodeURIComponent(subject)}&body=\${encodeURIComponent(text)}" style="color:var(--neon-cyan);text-decoration:underline;">Enviar por Email Clásico</a>\`;
                } else {
                    this.replyStatusMsg.textContent = \`❌ Error: \${error.message}\`;
                }
                this.replyStatusMsg.style.color = '#ff1493';
                this.replySendBtn.disabled = false;
                this.replySendBtn.textContent = 'Reintentar';
            });`;

js = js.replace(oldCatch, newCatch);

// Also try replacing \r\n version of oldCatch just in case
const oldCatchRN = oldCatch.replace(/\n/g, '\r\n');
const newCatchRN = newCatch.replace(/\n/g, '\r\n');
js = js.replace(oldCatchRN, newCatchRN);

fs.writeFileSync('script.js', js);
console.log('Fixes applied successfully.');
