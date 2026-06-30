// ============================================================================
// ISMAEL'S LAST MISSION - LÓGICA MEJORADA CON EASTER EGGS Y EFECTOS
// ============================================================================

class ISMAELSLastMission {
    constructor() {
        // Base de datos de juegos cifrada (CryptoJS AES + SHA-256)
        // Ningún dato sensible (usuarios, roles, archivos, claves o mensajes) está visible en texto plano en el F12.
        this.encryptedDB = {
    "5cd7c4fe6f74cf06f4a5534608b899623e63fcd8136c7d6ffc4a0d5ac23e1c06": "U2FsdGVkX19GIHeX1HeDXcuwjhZiXVsuoLQjD17zYHIEsDB21fm1ffzBr84lZTjXMBMnAA74SguurcvBBmnf7cfxhEU4fe8t7ziBGbNrPsX+ULLU7wvTrbdO5tvhQg9F28LgOL2BUoNPouByxjn1BGC5L38GTIC+rm60InubPbinvhdjKdFxs0dMfNjEDVLgmf9tchskXdTiRIAdYS1pdz+SVGaP7Ff94hy5AgyPBUJyyKNk95n2/17chHkEYF2gbMzFJL9R8onN6tQ4Q7KyVChM6UTqmgPJwqaw0+98ctczP8WWt68a6ssTUKppMm/xWLzxMI8s9lw3GS1mHN5laysAA3Ag0bOdCFTMPEftRPyVFEz6igJ9LZHt6sI8Oe3F8uRGtOPJFX+dD7FKeMc8dDhbpuB+wyPBLcWD+581AT/5QmyQOy8Yd5ZnEfyhxELEOshQsZVzfiO0DMVGsNnemXKrGTCTLv+HxORRHLr4vTCLT42ob//UOHwUBCCPA8VzKDHXfPtDm3yu06D+l9HTj+JplG51AITzZIBgzVNf0DAkOZthjtf5OtOyNLIba9V2BYwqDrsb1hMI1WsC9on/Snd1g2MGBTFzz8ujeFxIbs13x57/0XHAtGsWw6gpQdDC6C5Q1HPs646wxXrttRgTA0vvQTabjhYIaEXuHkBKWm9+CwSk4a6QVvnL3yRNGbq0Bf8wSVtUSOWasHOidJfndnEEHYn1jjA4Cu23uIfTh7iaugD+quvo0maZfTh0OAN6o48xssImOOHN4rQ7ZcY37UP2QGKg5UxDvTbG6tfQfsedDm/fW4A1QlW1IAhbJh6S/848KHGR4SV0lj8CUcYxNpSHQPkB4LRgc7T+C37fCLb0tFPVifjQBeFXaNeSd13XWuIY2UxMF1nBUP28aTmXsw==",
    "403a928582a6b3b0324e91d1805777ef96d49b7cd15607f285d673270d553412": "U2FsdGVkX1+OupnlBoqgOyoB9AL+MhRCdSuKIMmO0MB15g8eZ1xKGZiQpn/voBOy5jY8YPmQZvULR7IpvDf6JrVl+9EvLLZbyLw9rwTHsZEhe8mWO618fb8ZX8o0RC2dOTwlE1bpOcpMw+0PPukl+idJ9kb3aDJlTOXk2LCxQS7C9BZpz+EROM9nB7vqpkVq0Jps8AOjGiUgYcBOss7Rw8Y36tMtvYvijqrDpV2cAlXHNzGg5ly0LL5Ry54exe8xtQ6lcn38Arj8kllvgtffOkx0oOjh4CxGdCeTFQFhMmm4VBmm/uDfeXVZbqnBotpk/F8EUVim2utnfWzBJgoQ0JbpiRQ3D6hyHyKZLJe5BN3izijz63RWYsLaBt7AoGWCe/One0ZZS733XvDvPNqC3Q7lC05pADmjlgqaK67IHihfRQK0uU/EAZJArLbUwx7AiPLag4S1G2OcuYkEITl1SFiFFkxx6j1m7+K/eTMSTF5llhZoS03YmX7S/Ps+9VrYpsPChlMPtKQDx+RaEUDcLYl0cOrmBo3E4eHPj/icTdFGchzcWSYUcpdeIBRmEzAp/oXQ/IvpQUwDcw2u2tcDfg4cc+tKPqhOMPnGHOyMFnX2afD8nAEmSY01/G+AOEwpwcQSx6RdOhfGoIS8OqV//QnP7L99DgSfEcmnyhacpRcGd1pFgXfr1BSPZu+aqkBaPdFc8tdvdgI9y+AshrhMm9Zi3hpc5E0sfq9Ia6Y67X/xVfKsaFfq5ZSzGSq62bV+0LSqTQVsN4TFibeFGzptDjiavIbX9nxU2/DJAdF5lhNKZKl6qWEHz0wZACU4LLggg8oQrKghW37HI+t/VQW6Bg==",
    "9880a11702a0fdd064154b17df6eb0e07b7364968a2c86197b51a7328dd53c41": "U2FsdGVkX1/gT9CJfESjMdPwrwISr/UWSTSYRWcvNKExrUINtI4diNnaq4jHEONLlxFliTatkRFf4Koeog214d0QtBcT/Da2JGFgANMpw+bbd9Q1wqKRFabeOaydhW6zIDODkDhtbx55NaaAG+sR8IO1h6isAVbeMnS02GXcLvl1gLxPZgNc20MEJfgQbKYxQLWuEnBoWvczepyBeBVNYz8nRy1U2C1NIOrU1aGpdH6J6Al7T1h3v4+rdnaqaRe4fcX3LXBlkxzBS5F5T5WkMoZK1lmQiMlNkJHm4L5TqshWyiEXYg8KItkQXHgSyx2sip/N0BwO+91vSc1Xe/cgYjwceJjmyvLdTNclapSXbSRa0t1F7a+NnS4fVPmsJ4PYDSIpiuzClivMCnP6uHCIo2grutv7Ej1Fz4XvFPxLozcbNFLVE6Wcgg9HI2QBjNTGApWRG2hfhPljSZmy3p7wobVNlDxWQDiTWsPXphJ4leLItMEaz0m1E4SpDFV9T9Q9xqNUr7BLnB0drYAcY5Oy/XSr+66Y5lOxOnsTga3XMutoS27Q0nRrukVq+KNRcp7tYaGxYJ1ub+DFaYBiVdoVAgf08wkrfVJ1bi6vJzNMEoc0GZD/VM8LdTpe8AkYlBSaNIwGaEtTC3NrEu1zPCEQfEh4W8XWoepzTUbMpExFuW8hP5gO5Lm7LEhjua16b1q5zX1pTFJ1CReBrY8Bl/kJfr7Qht8n9f0fqkIWBd9yLs0ipc7QXMTlcpZoLs57Npzc3iG3gwYgF0gKvcz4/TJkFl9XPacOC/2gMfboLiM9nJFdfpXTEzwZmahVLuIOp9p7sPhPsjflIpU6EBhOjh7Qb7pK1nbIfLCkxEOyWGlLmvA=",
    "b3ca34e44d8e15e5f4001320329d6060ce6bf272895ee70ae5e395c3f607e5c4": "U2FsdGVkX1/Pt+D8CHdR4H/o+z1DfIBXBfnL8Fv65qynP+mcvGUkmfLmU6zMMlaO9yAVnvS/uLnNHwqh117e7k+BkEFXIH2YInhHoUv9iMGZ9bZ7f9E14covUB7zhpCDNUHXqYgjDDzB+rTJhvHgBrPcgfkl7NzjVXD6ocjJBgWUaBwFjkSG3C2CydYtjsS+SL79aiCeGm1RVtdxtrVtBdRmn9+2dzSGM5pDilkFki682w4Erh2wuqsiHfw51lR/ZRA8SuDqf/p3InWl7pU7j5j7uKQCkEyoCH4jxccCvEgR+0tNbrQrWN4/kPvIiJgKsyGfFJmwFMvNAFhf8GR6Lc5TCMekvB6j/VlXMWOFIKJ6BTNyY8cupNAQJ8BGZa8MkHCJhOO/GH579PK8AAle4ygvlVCylX/33tWuFAXSKfUNmAgRUEOgCG3HfWK+G/DXSBALomtnNKpnb4qGATCxpeBjSNdelZNwbY7A8WDuSdyL79C4O90E3txd3y4QV1/TceA3yn0pCDbkopC5BsfbkvbIPIU4olIPelDZl7wrHXzzBs/aWwM8XfVDD0dXL3G/nA7yrVCzMVGobn4wmv4lB8VzQbWNbWyK4DqYoza7jrj1dgp1PMq0OapJmNUEWKqSykPnHBOiwHf/yobA/3TEiL95GpZ0ErBdInwAEAzxx9NmHNjZStUozcP4aKWelOrroFsYMDzVupRO+EqYKVsNU0uSSEfbSMRZ4TG7cjKozoI="
};

        // Nombres de usuarios válidos para inicializar el contador
        this.usernamesList = ['julia', 'marta', 'ariana', 'alejandro_maria'];

        // Mensajes chistosos para errores
        this.funnyErrors = [
            '❌ Código incorrecto. ¿Estuviste durmiendo cuando lo pasé? 😴',
            '❌ Nope. Sigue intentando, campeón.',
            '❌ Eso está más lejos que Bolivia. 🌍',
            '❌ ¿De verdad? Inténtalo de nuevo.',
            '❌ ERROR 403: Tu intuición falló esta vez.',
            '❌ Casi. Pero no es. 🎯'
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
        this.gateErrorMsg.textContent = this.funnyErrors[Math.floor(Math.random() * this.funnyErrors.length)];
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
        this.printLine('║  🎮 ISMAEL\'S LAST MISSION - SANDBOX TERMINAL v2.1 🎮     ║');
        this.printLine('╚════════════════════════════════════════════════════════════╝');
        this.printLine('');
        this.printLine('🔐 Conexión establecida con el nodo de archivos cifrados.');
        this.printLine('📁 Rol detectado: ' + this.currentUserData.role);
        this.printLine('');
        this.printLine('💡 Introduce "help" para ver comandos disponibles.');
        this.printLine('');
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
        const username = this.identifiedUser;
        const timerStarted = localStorage.getItem('timer_started_' + username) === 'true';

        if (!timerStarted) {
            // Mostrar modal de bienvenida si no ha iniciado el reto
            this.introUsernameSpan.textContent = username.toUpperCase();
            this.timerIntroOverlay.classList.add('visible');
            this.timerStartBtn.addEventListener('click', () => this.startCountdown());
        } else {
            // Iniciar cuenta atrás directamente si ya se había activado
            this.startCountdownLoop();
        }
    }

    startCountdown() {
        const username = this.identifiedUser;
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
        const username = this.identifiedUser;

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
        const username = this.identifiedUser;
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
            const username = this.identifiedUser;
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

// Inicializar cuando carga el DOM
document.addEventListener('DOMContentLoaded', () => {
    new ISMAELSLastMission();
});
