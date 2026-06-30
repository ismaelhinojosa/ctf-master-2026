// ============================================================================
// ISMAEL'S LAST MISSION - LÓGICA MEJORADA CON EASTER EGGS Y EFECTOS
// ============================================================================

class ISMAELSLastMission {
    constructor() {
        // Base de datos de juegos cifrada (CryptoJS AES + SHA-256)
        // Ningún dato sensible (usuarios, roles, archivos, claves o mensajes) está visible en texto plano en el F12.
        this.encryptedDB = {
    "5cd7c4fe6f74cf06f4a5534608b899623e63fcd8136c7d6ffc4a0d5ac23e1c06": "U2FsdGVkX19Om81+zFDjUCyJsmbO93cl9Njw+3VaImiQ3KuYZQFmjVi4jEE65X7JQv7QVI1AJgXzI51C6Ay7nBeSLmSVTbfeQY8Odr+pAGKMRyu8URv6fRfA6gI64Ihlc1wVNiRgDTDe+6nMfzFWBCyUr65q2wnWX32QnqloYF6yGNo8p4lrBZFPaKjYEZpYV/Oh2M5RsH17UUN5a7mP1usP4nolEotp4OiYJEEcpTA5o6y1Z403YciSNg3praFQcCx3Q9IjmRtjmmJ9fIrDYsYiHrCTQgNcDzeZAx5jZQy7e5i50xu9GkJEY6I+DC8zfiYYB4KNVpkOMNRZYrfze80gHwRORwxpxENZFcWQDtybWMAsIeoQyVOQO0rHTf6hvJP3qwbZHmywRdEeQz+3w+8/w7rLyRIiAyPdAIgXgJPunmbf4/gprxlUxMrlgb50J8lYkGiYeEdiEfSEaVdZBWtI2tFfq3Is8U3uxsqfzxODjsT6mI/9FRKl5xf82neC4vzXgUcgcPv/u3bDSXAr+pcnB85SIpjclYkQ5kJUNjZ3wuBaybIN3Kdjh635RY1FnlQBI0XVkNoX4t10CeQGBLC84o8CEjXE6xCuZKf505fejbq8LdYLyD7Jtrbqv1h+ATRtoz6GWEetrrz8SxQFNb+nU6FO85RJGeldPGdYzrltGGpxRTRJL8H36EMjIzVKq+ZVpsXr7k6iTIpB+lynkzaDZW+eZUmxKzrJnpNLV1jOUbytoOR9O1jtLlJki+bJDi0a+Y98tjj3CwvHmw8T6aA3v+62mgPwAY07wM9IQ79zMaI+aBCA4J17CEWGezUFA84k/RAeil4mIR9i+oqHWHSjUESm/9zjVJkGjDmVYuICf7aIhEFjKh1WsyCVTRDvntXIsimjiVa5yx5Hi+i/IDaAqU0Ik0u8K+FxXs6LrPZYqGSzX9iIKQe0SY1lCL43Ay4/mZZrApDPIEt7ffHT5Q/C/VHUH+/eTxwvqwkMGTt/SGuouiOC0xQuy+GfhiUl",
    "403a928582a6b3b0324e91d1805777ef96d49b7cd15607f285d673270d553412": "U2FsdGVkX18/2xlYijQJoymYTM++QdvLNlk6NL0ldJloEDqYhy8ICoQj2SgAEwN37AMwtZYdZ3oNvfY2vBLQ9RE6jmyle9MAOLKz3YG+gHSaK/fjavWqJdz51oJpU6o8A/+W95stYFRkgD8TQskMgWHlUhPQO0wZRHJ6kWGWWJH96pfM9ORO0HFX+8F3Lqxr4P4zgxYDsOM0wP5fi/0lQYVIus0gBRMH9uUbgFoim6cDoWW5lwvayz4nQzix0M4n+S7YEoNNYKzriT+aBEKN2iDGNPRVXnmVWw2SO47TRN2Ok0oLz0nLWdWXqtWU3fz+kZMCUjBr8S5VBku6QtVjQ5UxBX5dI9rqdo50OF5+2jeZJ8o6amVznwgbVdiTTQY8BV1KtpTmO81iBlEbm927S4TewJb5IZTTcMjok1V9py4Qd5rDEbDNaafGM8jRkfwu4JXytl8bawOXgq66/5xTa44Jklze/EeNsjd+5JhsDEyC7XrkvSmFicKMjHBcehX+U1YZv+7vXHu2Rm/wkud7EXociOOFQiR4YsDyi9UhX4QUGeve/9IU04Rl7A6cpWNaBqDLtHzhKJGyZyy9N/whEM/0s/+NwYlIjY+EaVHDYnh9guCcpHbwAO4w8qjWfQFRUr0QP6zp5bzSYA+hc92nJBEt8BEkHRHJOo6WRHdpBJhK9ShQV0uBUojrzsU9n5ohqI3vONWy8wqFzRzqaNJIvn03UYzOKyDw4QONcfYt6cuCmFdaYjlervwPNVctP8MLAefnZPR0pgywrY5Rg6cRlc/glbqX+tUPcoVWPEUY9JUP9MsVvJOmJh2XZ5h+5a8oAF809fxcztHYDCeqBbd+05KFhlrDXlABkjiVrUJX9hcrjr1zR3UbvsXOe4wvcL0+",
    "9880a11702a0fdd064154b17df6eb0e07b7364968a2c86197b51a7328dd53c41": "U2FsdGVkX19xXQe8TKB1OgrsJDkXeW0ZpitBs+GYx6MRpD80ggsAmLAoEStqQKAnGtoIX1C/a5Ph5zWvC5NKf6WZz/P5KA2v38RntEVmws4ah3FPnDzdXS243Jzi0FhezJIPiScYDaaBkpz5i07OQG8QkgNTnjgu8g9RDQuRTZ3egHmfE44IVc+6y2icLUUIB1KPzjfJqGbAMjUqLoBwB0b/YKdsym08BC8Msxj6zsDS4Mmj7ScScAs/EoOWyRBjRDmeiZR1ceFz1XLEx+7QYECeq7u4m+WcStitLWC1mqXT6EWs+Fya2j80DW0060+gHXUOtWzdJTyUdsub6uq3qg+kcPCfPM96LBestn5HHTSEjmWUZPUW0hsbJLo2SXyGVYCXteOAO2F10eK/DLlBJbhyJAeNtJs+5GtNOhwc7n0QANlNFo6GU2x1kD1qcJooaX7KuZYIZRaTfI14DW4Iilw1NSmqOk9nCeQ0rzrdKIG7wKbUgxkxPxM1fMXr2hsSmJtfpS1WmK5CJVaoHtG6J7ku1Btyh3+lUCJ7V6GtlM76jRdRZStsz+mQ+QW9wD2Wsy4+6vMOsENXEt7exkBnmF0p3LhmF+eKnRrTS/yRgSu1cxWyPaq1MCXACzg2vmHbctGCLoRLJLUiJJyW4AJtfRbbUbpUxicHe05a/OT/o0gl3/9pAUxtGRQQ6k/IGGX6FQlsekEVMPyi+HHKhsRAjKern6cJ4AIAu2txoNCQ7wKEoyM0PsWJfRyT4kUMMWnl5qsad9Fc+QfQ+Pi4NfOD8pnqI1epluLaWfK5A+CMKjED35Is55XWWSLYSUfOFujT1FzcudovaWjR/rkZv6CeQVtCOwedJ5ctpqS5jORDHNRvx11mgI8KoLYkL7PWmHTEw9Y8Qwf5IVbqw91ewXoG5MiBfsljFB8tlBE6nB4bc4+esGwqOic5hTT3H/GIytivhHysGT/H3MInN3raShNktw==",
    "b3ca34e44d8e15e5f4001320329d6060ce6bf272895ee70ae5e395c3f607e5c4": "U2FsdGVkX18xkMiof+4uyXlWpihb3mJf4oLyRqITDmDTGpGMUye578YD65tzACo4TzuxP8RHbnL/Uztmg1W3GUAQXk9X+DQjocNs9c5QRZc204Kh6l/cS3rk8R1pok5DS+/PfXmPep/WppezjhsWFl+f7q8aouIBSpnnIkc9Nni/4NIvBgX3kFmqPmxc+xIJGrW2MR9BMRy+g4eyqDzMJEc9XDRQeVxbRx8Yx59cdGIKcegwUWRkrDCYiTHmQzDR5n7k8eOgI3xMWxzsoWpXc6m9ENShLpHNnv6Lo/vzbm2dFE1h3fCPUtPd46nTcvngwLFdEL9Kl7cE/JfmlKXWYRVzsMQSbeEMeAe1dTX+3jFmGtPakV42vHSy+k3XU8LzwIbuM77FIKa94G3LunQD0ZTB/0LFLd83h80jWoTwE4L0RwiFNV8al1JzRBl0r9ZaAaRNOOxWyuifh6vltpYEOdOeeO6uvbs1bBFs+I3Ynr+70Mbaaz5D05Zo1jJxXU6jkwawjxKappfbDZALhW35MiwNz7usCtaiR2YOC47AZdwOduf7pxNZGx0j6yFuDcqTl/IDVMv8pQ3A7fvDDaDh1Vxqpz+vtusp5qfTeoZqZJbSIvmX3yj9FcM9uMpLJnEGZvpnfv/9m0cmH/b4KJpOtGyuckER5iJyl85txA0YINigYgv6CrTGa8Ehi+hMMXd/lHgRJZ3Q1gLaIQGzRwF1rno7j0v/HFnAcACU1T0agjHJ0l9bRfEDlubp6dnr9commgWSaRCIqgsmhYLxKPxXYwiMvLnBt6+8qC/o9AKqpRCU82R1L8JnDJ3leBxFiObP26Tt9wuE9KkSQ14wX6a/dA=="
};

        // Nombres de usuarios válidos para inicializar el contador
        this.usernamesList = ['julia', 'marta', 'ariana', 'alejandro_maria'];

        // Variaciones de mensajes de error humanizadas
        this.errorMessages = [
            '❌ Eso no es. ¿Dormías cuando lo pasé por Insta? 😴',
            '❌ Mmm, no funciona. Más claves!',
            '❌ Estás cerca pero no es. Dale!',
            '❌ Nope, ahí no. Pensá un poco más.',
            '❌ De verdad? Intentá de nuevo.'
        ];

        // Easter eggs de comandos
        this.easterEggs = {
            'whoami': () => '👤 eres: Hacker_de_Ismael_v1.0',
            'date': () => '📅 ' + new Date().toLocaleString('es-ES'),
            'echo hola': () => '🔊 hola',
            'pwd': () => '/ismael/despedida/cifrada/2026',
            'sl': () => '🚂 choo choo! (solo era un easter egg)',
            'hack the planet': () => '🌍 ¡Estás en una película de 1995!',
            'sudo make me a sandwich': () => '🥪 Acceso denegado. Hazlo tú mismo.',
            'rm -rf /': () => '☠️ ¡Acabas de borrar el sistema! (No, era broma 😅)',
            'matrix': () => `\nThe Matrix has you... (es solo un easter egg)\n        Follow the white rabbit... 🐰`,
        };

        // Estado del juego
        this.currentUserData = null;
        this.terminalCommands = [];
        this.commandIndex = -1;

        // Elementos del DOM
        this.gateContainer = document.getElementById('gate-container');
        this.dashboardContainer = document.getElementById('dashboard-container');
        this.accessInput = document.getElementById('access-key-input');
        this.gateSubmitBtn = document.getElementById('gate-submit-btn');
        this.gateErrorMsg = document.getElementById('gate-error-msg');

        this.terminalOutput = document.getElementById('terminal-output');
        this.terminalInput = document.getElementById('terminal-input-field');
        this.profileUser = document.getElementById('profile-user');
        this.profileRole = document.getElementById('profile-role');
        this.finalKeyInput = document.getElementById('final-key-input');
        this.decryptSubmitBtn = document.getElementById('decrypt-submit-btn');

        this.successOverlay = document.getElementById('success-overlay');
        this.decryptedMessageDiv = document.getElementById('decrypted-message');
        this.resetBtn = document.getElementById('reset-btn');
        this.countdownHeader = document.getElementById('countdown-header');
        this.timerSeconds = document.getElementById('timer-seconds');
        this.prankContainer = document.getElementById('prank-container');
        this.prankAcceptBtn = document.getElementById('prank-accept-btn');
        this.successTitle = document.getElementById('success-title');

        this.replyContainer = document.getElementById('reply-container');
        this.replyText = document.getElementById('reply-text');
        this.replySendBtn = document.getElementById('reply-send-btn');
        this.replyStatusMsg = document.getElementById('reply-status-msg');

        this.adminEmail = 'ismaelhinojosa6@gmail.com';
        this.timerId = null;

        // Elementos del temporizador superior e overlays
        this.timerIntroOverlay = document.getElementById('timer-intro-overlay');
        this.introUsernameSpan = document.getElementById('intro-username-span');
        this.timerStartBtn = document.getElementById('timer-start-btn');
        this.timerExpiredOverlay = document.getElementById('timer-expired-overlay');
        this.expiredCardText = document.getElementById('expired-card-text');
        this.askMoreTimeBtn = document.getElementById('ask-more-time-btn');
        this.moreTimeInputContainer = document.getElementById('more-time-input-container');
        this.moreTimeInput = document.getElementById('more-time-input');
        this.moreTimeSubmitBtn = document.getElementById('more-time-submit-btn');
        this.moreTimeError = document.getElementById('more-time-error');
        this.globalCountdownBar = document.getElementById('global-countdown-bar');
        this.topTimerClock = document.getElementById('top-timer-clock');

        // Estado del temporizador y audio
        this.musicMuteBtn = document.getElementById('music-mute-btn');
        this.identifiedUser = null;
        this.timerIntervalId = null;
        this.isMuted = false;

        // FECHA Y HORA REAL DE LLEGADA A BOLIVIA (Salida de Madrid: 5 de Julio a las 14:45 + 14 horas de viaje)
        // Aterrizaje en Bolivia: 6 de Julio de 2026 a las 04:45:00 (Hora de España / UTC+2)
        this.boliviaArrivalTime = new Date('2026-07-06T04:45:00+02:00').getTime();
        this.extensionDuration = 7 * 60 * 60 * 1000; // 7 horas de prórroga

        this.setupEventListeners();
        this.detectIdentifiedUser();

        // Iniciar la música de fondo suave en la primera interacción del usuario con la página
        const startMusicOnInteraction = () => {
            this.startBackgroundMusic();
            document.removeEventListener('click', startMusicOnInteraction);
            document.removeEventListener('keydown', startMusicOnInteraction);
        };
        document.addEventListener('click', startMusicOnInteraction);
        document.addEventListener('keydown', startMusicOnInteraction);

        this.initializeTimer();
    }

    // (Encriptación ahora se realiza de forma estática offline)

    // Setup de eventos
    setupEventListeners() {
        this.gateSubmitBtn.addEventListener('click', () => this.handleAccessLogin());
        this.accessInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') this.handleAccessLogin();
        });

        this.terminalInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                this.processTerminalCommand();
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                this.navigateCommandHistory('up');
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                this.navigateCommandHistory('down');
            }
        });

        this.decryptSubmitBtn.addEventListener('click', () => this.handleFinalDecryption());
        this.finalKeyInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') this.handleFinalDecryption();
        });

        this.prankAcceptBtn.addEventListener('click', () => this.handlePrankAccept());
        this.replySendBtn.addEventListener('click', () => this.handleReplySend());
        this.resetBtn.addEventListener('click', () => {
            localStorage.clear();
            window.location.reload();
        });
        if (this.musicMuteBtn) {
            this.musicMuteBtn.addEventListener('click', () => this.toggleMute());
        }
    }

    // Navegación de historial (Arrow Up/Down)
    navigateCommandHistory(direction) {
        if (this.terminalCommands.length === 0) return;

        if (direction === 'up') {
            this.commandIndex = Math.min(this.commandIndex + 1, this.terminalCommands.length - 1);
        } else {
            this.commandIndex = Math.max(this.commandIndex - 1, -1);
        }

        if (this.commandIndex >= 0) {
            this.terminalInput.value = this.terminalCommands[this.commandIndex];
        } else {
            this.terminalInput.value = '';
        }
    }

    // FASE 1: Login
    handleAccessLogin() {
        const inputKey = this.accessInput.value.trim();

        if (typeof CryptoJS === 'undefined') {
            console.error("❌ CryptoJS no está cargado!");
            return;
        }

        // Obtener el hash SHA-256 del inputKey
        const hashedInput = CryptoJS.SHA256(inputKey).toString();

        if (this.encryptedDB[hashedInput]) {
            const ciphertext = this.encryptedDB[hashedInput];
            try {
                // Intentar desencriptar el perfil con la clave ingresada (inputKey)
                const bytes = CryptoJS.AES.decrypt(ciphertext, inputKey);
                const decryptedText = bytes.toString(CryptoJS.enc.Utf8);

                if (decryptedText) {
                    const profile = JSON.parse(decryptedText);
                    this.currentUserData = {
                        username: profile.username,
                        role: profile.role,
                        files: profile.files,
                        encryptedSecretMessage: profile.encryptedSecretMessage
                    };
                    this.transitionToDashboard();
                    return;
                }
            } catch (e) {
                console.error("Error al descifrar el perfil:", e);
            }
        }

        // Error de login
        this.gateErrorMsg.textContent = this.errorMessages[Math.floor(Math.random() * this.errorMessages.length)];
        this.gateErrorMsg.style.opacity = '1';
        this.gateContainer.classList.add('glitch');
        this.accessInput.style.borderColor = '#ff1493';

        setTimeout(() => {
            this.gateErrorMsg.style.opacity = '0';
            this.accessInput.style.borderColor = 'var(--border-color)';
            this.gateContainer.classList.remove('glitch');
        }, 3500);
    }

    // Transición al Dashboard
    transitionToDashboard() {
        this.gateContainer.classList.add('hidden');

        this.profileUser.textContent = this.currentUserData.username.toUpperCase();
        this.profileRole.textContent = this.currentUserData.role;

        // Asegurar que la música de fondo esté sonando (sin reiniciarla si ya suena)
        this.startBackgroundMusic();

        // Iniciar temporizador si no se inició por URL
        if (!this.identifiedUser) {
            this.identifiedUser = this.currentUserData.username.toLowerCase();
            this.initializeTimer();
        }

        setTimeout(() => {
            this.dashboardContainer.classList.add('visible');
            this.terminalInput.focus();
            this.printTerminalWelcome();
        }, 400);
    }

    // Bienvenida en terminal
    printTerminalWelcome() {
        this.printLine('╔════════════════════════════════════════════════════════════╗');
        this.printToTerminal('║  🎮 ISMAEL\'S TERMINAL 🎮  ║', 'var(--neon-magenta)');
        this.printToTerminal('╚═════════════════════════════╝', 'var(--neon-violet)');
        this.printToTerminal('');
        this.printToTerminal('🔐 Conectado. Los archivos están acá.', '#bbf7d0');
        this.printToTerminal(`🎯 Rol: ${this.currentUserData.role}`, '#bbf7d0');
        this.printToTerminal('💡 Escribe "help" si necesitas ayuda.', '#bbf7d0');
        this.printToTerminal('');
    }

    // Procesar comando
    processTerminalCommand() {
        const rawInput = this.terminalInput.value;
        const input = rawInput.trim();
        this.terminalInput.value = '';

        if (!input) return;

        // Guardar en historial
        this.terminalCommands.unshift(input);
        this.commandIndex = -1;

        // Mostrar prompt con comando
        this.printLine(`guest@ismael-sandbox:~$ ${rawInput}`, '#ec4899');

        const parts = input.split(' ');
        const cmd = parts[0].toLowerCase();
        const args = parts.slice(1);

        // Easter eggs primero
        if (this.easterEggs[input.toLowerCase()]) {
            this.printLine(this.easterEggs[input.toLowerCase()]());
        } else if (cmd === 'help') {
            this.cmdHelp();
        } else if (cmd === 'clear') {
            this.cmdClear();
        } else if (cmd === 'ls' || cmd === 'dir') {
            this.cmdLs(args);
        } else if (cmd === 'cat') {
            this.cmdCat(args);
        } else {
            this.printLine(`bash: ${cmd}: comando no encontrado ❌`, '#ff1493');
            this.printLine('Escribe "help" para ver comandos disponibles.');
        }

        this.terminalOutput.scrollTop = this.terminalOutput.scrollHeight;
    }

    // Comandos
    cmdHelp() {
        this.printLine('');
        this.printLine('📋 COMANDOS DISPONIBLES:');
        this.printLine('  ls          - Listar archivos');
        this.printLine('  ls -a       - Listar archivos (incluyendo ocultos)');
        this.printLine('  cat [file]  - Mostrar contenido de archivo');
        this.printLine('  clear       - Limpiar pantalla');
        this.printLine('  help        - Mostrar esta ayuda');
        this.printLine('');
        this.printLine('🎮 También hay Easter Eggs ocultos... ¡intenta comandos aleatorios!');
        this.printLine('');
    }

    cmdClear() {
        this.terminalOutput.innerHTML = '';
    }

    cmdLs(args) {
        const showAll = args.includes('-a');
        const files = this.currentUserData.files;
        let fileList = [];

        for (const filename of Object.keys(files)) {
            if (filename.startsWith('.') && !showAll) continue;
            fileList.push(filename);
        }

        this.printLine('');
        if (fileList.length === 0) {
            this.printLine('(Directorio vacío)');
        } else {
            fileList.forEach(file => {
                const icon = file.startsWith('.') ? '🔒' : '📄';
                const color = file.startsWith('.') ? '#a855f7' : '#a8e6b8';
                this.printLine(`${icon}  ${file}`, color);
            });
        }
        this.printLine('');
    }

    cmdCat(args) {
        if (args.length === 0) {
            this.printLine('❌ Uso: cat [nombre_archivo]');
            return;
        }

        const filename = args[0];
        const files = this.currentUserData.files;

        if (files[filename] !== undefined) {
            this.printLine('');
            this.printLine(files[filename]);
            this.printLine('');
        } else {
            this.printLine(`❌ cat: ${filename}: No existe.`);
        }
    }

    // FASE 3: Desencriptación
    handleFinalDecryption() {
        if (typeof CryptoJS === 'undefined') {
            this.showCyberAlert('❌ Error: CryptoJS no cargado. Verifica internet.');
            return;
        }

        const inputKey = this.finalKeyInput.value.trim();

        if (!inputKey) {
            this.showCyberAlert('⚠️ Introduce la clave final.');
            return;
        }

        const ciphertext = this.currentUserData.encryptedSecretMessage;

        try {
            const bytes = CryptoJS.AES.decrypt(ciphertext, inputKey);
            const decryptedText = bytes.toString(CryptoJS.enc.Utf8);

            if (decryptedText) {
                // ÉXITO
                this.decryptedMessageDiv.textContent = decryptedText;

                // Marcar como resuelto para detener el temporizador de Bolivia
                localStorage.setItem('game_solved_' + this.currentUserData.username, 'true');

                // La música de fondo sigue sonando hasta que el usuario pulse CONFIRMAR

                // Notificar
                const subject = `🎉 ¡${this.currentUserData.username} decodificó su mensaje!`;
                const bodyContent = `Hola Ismael,\n\n${this.currentUserData.username} ha superado el reto y decodificó su mensaje con éxito.\n\nClave: ${inputKey}\n\n---\nDesde el portal ISMAEL'S LAST MISSION`;
                this.sendNotification(subject, bodyContent).catch(() => { });

                this.startPrankCountdown();
            } else {
                this.showFinalDecryptionError();
            }
        } catch (e) {
            this.showFinalDecryptionError();
        }
    }

    // Contador de broma
    startPrankCountdown() {
        this.successOverlay.classList.add('visible');

        this.successTitle.innerHTML = '<span>🔐</span> <span>SISTEMA DECODIFICADO</span> <span>🔐</span>';
        this.successTitle.style.color = '#ec4899';
        this.countdownHeader.style.display = 'block';
        this.decryptedMessageDiv.style.display = 'block';
        this.decryptedMessageDiv.style.filter = 'none';
        this.decryptedMessageDiv.style.opacity = '1';
        this.prankContainer.style.display = 'none';
        this.prankAcceptBtn.style.display = 'none';
        this.resetBtn.style.display = 'none';

        let timeLeft = 7.0;
        this.timerSeconds.textContent = timeLeft.toFixed(1);

        if (this.timerId) clearInterval(this.timerId);

        this.timerId = setInterval(() => {
            timeLeft -= 0.1;
            if (timeLeft <= 0) {
                timeLeft = 0;
                clearInterval(this.timerId);
                this.triggerPrankMeltdown();
            }
            this.timerSeconds.textContent = timeLeft.toFixed(1);

            const blurVal = Math.max(0, (7.0 - timeLeft) * 2.5);
            const opacityVal = Math.max(0.05, timeLeft / 7.0);
            this.decryptedMessageDiv.style.filter = `blur(${blurVal}px)`;
            this.decryptedMessageDiv.style.opacity = opacityVal;
        }, 100);
    }

    // Se expira el tiempo
    triggerPrankMeltdown() {
        this.successTitle.innerHTML = '<span>❌</span> <span>SISTEMA BLOQUEADO</span> <span>❌</span>';
        this.successTitle.style.color = '#ff1493';

        this.countdownHeader.style.display = 'none';
        this.decryptedMessageDiv.style.display = 'none';

        this.prankContainer.style.display = 'block';
        this.prankAcceptBtn.style.display = 'block';
    }

    // Aceptar la broma
    handlePrankAccept() {
        this.showCyberAlert('😜 ¡SOLO ES UNA  BROMA!<br><br>Has aceptado el reto. Pero lo de la pizza no es broma y ya aceptaste!! jaja. Acceso restaurado.', () => {
            this.successTitle.innerHTML = '<span>🔐</span> <span>SISTEMA DECODIFICADO</span> <span>🔐</span>';
            this.successTitle.style.color = '#ec4899';

            this.prankContainer.style.display = 'none';
            this.prankAcceptBtn.style.display = 'none';

            this.decryptedMessageDiv.style.display = 'block';
            this.decryptedMessageDiv.style.filter = 'none';
            this.decryptedMessageDiv.style.opacity = '1';

            this.replyContainer.style.display = 'flex';
            this.replyText.disabled = false;
            this.replySendBtn.style.display = 'block';
            this.replySendBtn.disabled = false;

            this.resetBtn.style.display = 'block';

            // Parar el fondo e iniciar la canción personal al confirmar
            const bgMusic = document.getElementById('background-music');
            if (bgMusic) bgMusic.pause();

            const music = document.getElementById('victory-music');
            if (music) {
                music.src = `audio/${this.currentUserData.username}.mp3`;
                music.volume = 0.8; // Canción personal al 90% de volumen
                music.load();
                music.muted = this.isMuted;
                music.play().catch(() => { });
            }
        });
    }

    // Error de clave
    showFinalDecryptionError() {
        this.finalKeyInput.style.borderColor = '#ff1493';
        this.finalKeyInput.value = '';
        this.finalKeyInput.setAttribute('placeholder', '❌ CLAVE INCORRECTA - INTENTA DE NUEVO');

        this.finalKeyInput.classList.add('glitch');

        setTimeout(() => {
            this.finalKeyInput.style.borderColor = 'var(--border-color)';
            this.finalKeyInput.setAttribute('placeholder', 'Introduce la clave encontrada...');
            this.finalKeyInput.classList.remove('glitch');
        }, 2500);
    }

    // Utilidades
    printLine(text, color = '#a8e6b8') {
        const line = document.createElement('div');
        line.className = 'terminal-line';
        line.style.color = color;
        line.textContent = text;
        this.terminalOutput.appendChild(line);
    }

    printToTerminal(text, color = '#a8e6b8') {
        const line = document.createElement('div');
        line.className = 'terminal-line';
        line.style.color = color;
        line.textContent = text;
        this.terminalOutput.appendChild(line);
    }

    // Modal
    showCyberAlert(message, callback) {
        const alertEl = document.getElementById('cyber-alert');
        const alertMsg = document.getElementById('cyber-alert-msg');
        const alertBtn = document.getElementById('cyber-alert-btn');

        alertMsg.innerHTML = message;
        alertEl.style.display = 'flex';

        setTimeout(() => {
            alertEl.style.opacity = '1';
        }, 10);

        const newBtn = alertBtn.cloneNode(true);
        alertBtn.parentNode.replaceChild(newBtn, alertBtn);

        newBtn.addEventListener('click', () => {
            alertEl.style.opacity = '0';
            setTimeout(() => {
                alertEl.style.display = 'none';
                if (callback) callback();
            }, 300);
        });
    }

    // Enviar respuesta
    handleReplySend() {
        const text = this.replyText.value.trim();
        if (!text) {
            this.replyStatusMsg.textContent = '❌ El mensaje no puede estar vacío.';
            this.replyStatusMsg.style.color = '#ff1493';
            return;
        }

        this.replySendBtn.disabled = true;
        this.replySendBtn.textContent = 'Enviando...';
        this.replyStatusMsg.textContent = 'Enviando respuesta...';
        this.replyStatusMsg.style.color = '#a855f7';

        const subject = `💬 ${this.currentUserData.username} te dejó una respuesta`;
        const bodyContent = `Hola Ismael,\n\n${this.currentUserData.username} te dejó este mensaje:\n\n"${text}"\n\n---\nISMAEL'S LAST MISSION`;

        this.sendNotification(subject, bodyContent)
            .then(() => {
                this.replyStatusMsg.textContent = '✅ ¡Respuesta enviada con éxito!';
                this.replyStatusMsg.style.color = '#22c55e';
                this.replyText.value = '';
                this.replyText.disabled = true;
                this.replySendBtn.style.display = 'none';
            })
            .catch((error) => {
                console.error(error);
                this.replyStatusMsg.textContent = `❌ Error: ${error.message}`;
                this.replyStatusMsg.style.color = '#ff1493';
                this.replySendBtn.disabled = false;
                this.replySendBtn.textContent = 'Enviar Respuesta';
            });
    }

    // Enviar notificación (Web3Forms - sin CORS, sin activación)
    sendNotification(subject, bodyContent) {
        console.log(`📧 [CTF] Enviando notificación...`);
        console.log(`   Asunto: ${subject}`);

        return fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                access_key: '58513408-780b-4735-a859-393851651943',
                subject: subject,
                message: bodyContent,
                from_name: 'CTF Ciberseguridad 2026',
                email: 'ismaelhinojosa6@gmail.com',
                botcheck: ''
            })
        })
            .then(response => {
                console.log(`📡 [CTF] Web3Forms HTTP status: ${response.status}`);
                return response.json().then(data => {
                    console.log('📄 [CTF] Respuesta completa Web3Forms:', JSON.stringify(data));
                    if (!response.ok || !data.success) {
                        throw new Error(`Web3Forms: ${data.message || JSON.stringify(data)}`);
                    }
                    console.log('✅ [CTF] Email enviado correctamente:', data);
                    return data;
                });
            })
            .catch(err => {
                console.error('❌ [CTF] Error al enviar notificación:', err.message);
                throw err;
            });
    }

    // --- MÉTODOS DEL TEMPORIZADOR DE BOLIVIA ---

    detectIdentifiedUser() {
        const urlParams = new URLSearchParams(window.location.search);
        let u = urlParams.get('u') || urlParams.get('user');

        if (u) {
            u = u.toLowerCase().trim();
            if (this.usernamesList.includes(u)) {
                this.identifiedUser = u;
                this.initializeTimer();
            }
        }
    }

    initializeTimer() {
        const username = 'global';
        const timerStarted = localStorage.getItem('timer_started_' + username) === 'true';

        if (!timerStarted) {
            // Mostrar modal de bienvenida si no ha iniciado el reto
            
            this.timerIntroOverlay.classList.add('visible');
            this.timerStartBtn.addEventListener('click', () => this.startCountdown());
        } else {
            // Iniciar cuenta atrás directamente si ya se había activado
            this.startCountdownLoop();
        }
    }

    startCountdown() {
        const username = 'global';
        localStorage.setItem('timer_started_' + username, 'true');
        this.timerIntroOverlay.classList.remove('visible');
        this.startCountdownLoop();
    }

    startCountdownLoop() {
        this.globalCountdownBar.style.display = 'block';
        document.body.classList.add('has-top-bar');

        if (this.timerIntervalId) clearInterval(this.timerIntervalId);

        this.timerIntervalId = setInterval(() => {
            this.updateCountdown();
        }, 1000);

        this.updateCountdown();
    }

    updateCountdown() {
        const username = 'global';

        if (localStorage.getItem('game_solved_' + username) === 'true') {
            clearInterval(this.timerIntervalId);
            this.topTimerClock.textContent = 'DECODIFICADO CON ÉXITO 🎉';
            this.topTimerClock.style.color = 'var(--neon-green)';
            this.topTimerClock.style.textShadow = '0 0 8px rgba(34, 197, 94, 0.5)';
            return;
        }

        const isExtended = localStorage.getItem('timer_extended_' + username) === 'true';
        const expirationTime = this.boliviaArrivalTime + (isExtended ? this.extensionDuration : 0);
        const timeLeft = expirationTime - Date.now();

        if (timeLeft <= 0) {
            clearInterval(this.timerIntervalId);
            this.topTimerClock.textContent = '00:00:00 - SISTEMA BLOQUEADO';
            this.triggerTimeExpired();
        } else {
            const hours = Math.floor(timeLeft / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            const format = (num) => String(num).padStart(2, '0');
            this.topTimerClock.textContent = `${format(hours)}:${format(minutes)}:${format(seconds)}`;
        }
    }

    triggerTimeExpired() {
        const username = 'global';
        const isExtended = localStorage.getItem('timer_extended_' + username) === 'true';

        this.timerExpiredOverlay.classList.add('visible');

        if (isExtended) {
            this.expiredCardText.innerHTML = `Ismael ya está establecido en Bolivia 🇧🇴.<br><br><span style="color: var(--neon-pink); font-weight: bold; font-size: 1.1rem; text-shadow: 0 0 5px var(--neon-pink);">🔒 SISTEMA BLOQUEADO PERMANENTEMENTE</span>`;
            this.askMoreTimeBtn.style.display = 'none';
            this.moreTimeInputContainer.style.display = 'none';
        } else {
            this.expiredCardText.innerHTML = `Ismael ha aterrizado en Bolivia 🇧🇴.<br>El sistema de seguridad ha bloqueado el acceso a tu mensaje final.`;
            this.askMoreTimeBtn.style.display = 'block';

            const newAskBtn = this.askMoreTimeBtn.cloneNode(true);
            this.askMoreTimeBtn.parentNode.replaceChild(newAskBtn, this.askMoreTimeBtn);
            this.askMoreTimeBtn = newAskBtn;

            this.askMoreTimeBtn.addEventListener('click', () => {
                this.askMoreTimeBtn.style.display = 'none';
                this.moreTimeInputContainer.style.display = 'block';
                this.moreTimeInput.focus();
            });

            const newSubmitBtn = this.moreTimeSubmitBtn.cloneNode(true);
            this.moreTimeSubmitBtn.parentNode.replaceChild(newSubmitBtn, this.moreTimeSubmitBtn);
            this.moreTimeSubmitBtn = newSubmitBtn;

            this.moreTimeSubmitBtn.addEventListener('click', () => this.handleMoreTimeRequest());
            this.moreTimeInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') this.handleMoreTimeRequest();
            });
        }
    }

    handleMoreTimeRequest() {
        const text = this.moreTimeInput.value.trim().toLowerCase();
        const cleanText = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        const validPhrases = [
            'por favor',
            'porfavor',
            'si por favor',
            'si porfavor',
            'mas tiempo por favor',
            'mas tiempo porfavor',
            'mas tiempo, por favor',
            'mas tiempo, porfavor',
            'mas tiempo',
            'un poco mas de tiempo',
            'quiero mas tiempo'
        ];

        const isValid = validPhrases.some(phrase => cleanText.includes(phrase)) || cleanText.includes('por favor') || cleanText.includes('porfavor');

        if (isValid) {
            const username = 'global';
            localStorage.setItem('timer_extended_' + username, 'true');
            this.timerExpiredOverlay.classList.remove('visible');
            this.moreTimeInput.value = '';
            this.moreTimeError.textContent = '';
            this.moreTimeInputContainer.style.display = 'none';

            this.showCyberAlert('🍀 Prórroga concedida.<br><br>Se han añadido 7 horas de acceso adicional. Date prisa, Ismael sigue volando hacia Bolivia.', () => {
                this.startCountdownLoop();
            });
        } else {
            this.moreTimeError.textContent = '❌ Petición rechazada. Sé más educado o di "por favor".';
            this.moreTimeInput.classList.add('glitch');
            setTimeout(() => {
                this.moreTimeInput.classList.remove('glitch');
            }, 1000);
        }
    }

    startBackgroundMusic() {
        const bgMusic = document.getElementById('background-music');
        if (bgMusic && bgMusic.paused) {
            bgMusic.src = 'audio/background.mp3';
            bgMusic.load();
            bgMusic.volume = 0.08; // Volumen muy suave (8%) para acompañar de fondo
            bgMusic.muted = this.isMuted;
            bgMusic.play().catch(err => {
                console.log('Autoplay suspendido por el navegador, esperando interacción:', err);
            });
        }
    }

    toggleMute() {
        this.isMuted = !this.isMuted;
        const bgMusic = document.getElementById('background-music');
        const victoryMusic = document.getElementById('victory-music');

        if (bgMusic) bgMusic.muted = this.isMuted;
        if (victoryMusic) victoryMusic.muted = this.isMuted;

        this.musicMuteBtn.textContent = this.isMuted ? '🔇' : '🔊';
        this.musicMuteBtn.setAttribute('title', this.isMuted ? 'Activar Música' : 'Silenciar Música');
    }
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    window.game = new ISMAELSLastMission();
});
