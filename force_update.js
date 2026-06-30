const fs = require('fs');
let js = fs.readFileSync('script.js', 'utf8');

js = js.replace(/        const username = 'global';\s*const timerStarted/g, 
    "        this.guestName = displayName;\n        const username = 'global';\n        const timerStarted");

if (!js.includes('this.guestName = displayName;')) {
    console.log('Failed to add guestName!');
}

const newStartCountdown = `    startCountdown() {
        const username = 'global';
        localStorage.setItem('timer_started_' + username, 'true');
        this.timerIntroOverlay.classList.remove('visible');
        this.startCountdownLoop();

        const guest = this.guestName || 'Un Hacker';
        this.sendNotification(
            \`🚀 \${guest} ha aceptado el reto inicial\`,
            \`Hola Ismael,\\n\\n\${guest} acaba de pulsar el botón "Aceptar y Comenzar Reto" en la pantalla de bienvenida y el contador está en marcha para ellos.\\n\\n---\\nISMAEL'S LAST MISSION\`
        ).catch(e => console.log('Silenced notification error:', e));
    }`;

js = js.replace(/    startCountdown\(\) \{[\s\S]*?this\.startCountdownLoop\(\);\s*\}/g, newStartCountdown);

if (!js.includes('ha aceptado el reto inicial')) {
    console.log('Failed to replace startCountdown!');
}

fs.writeFileSync('script.js', js);
console.log('Force update complete');
