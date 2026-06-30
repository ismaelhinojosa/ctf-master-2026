const fs = require('fs');

let js = fs.readFileSync('script.js', 'utf8');

// 1. Save guestName
const target1 = "        const username = 'global';\n        const timerStarted = localStorage.getItem('timer_started_' + username) === 'true';";
const replacement1 = "        this.guestName = displayName;\n" + target1;
js = js.replace(target1, replacement1);

// 2. Add notification to startCountdown()
const oldStartCountdown = `    startCountdown() {
        const username = 'global';
        localStorage.setItem('timer_started_' + username, 'true');
        this.timerIntroOverlay.classList.remove('visible');
        this.startCountdownLoop();
    }`;

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

js = js.replace(oldStartCountdown, newStartCountdown);

fs.writeFileSync('script.js', js);
console.log('Update complete');
