//
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
        this.recoveryLinkContainer = document.getElementById('recovery-link-container');
        this.recoveryLink = document.getElementById('recovery-link');


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
        this.introTimerClock = document.getElementById('intro-timer-clock');

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

        // ========== DETECCIÓN DE BACKDOOR / INYECCIÓN INTENCIONAL ==========
        if ((input.includes('||') || input.includes(';')) &&
            (input.includes('cat') || input.includes('bypass') || input.includes('flag'))) {
            this.executeBACKDOOR(rawInput);
            return;
        }

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

    // BACKDOOR INTENCIONAL (Inyección de Comandos)
    executeBACKDOOR(command) {
        this.printLine('');
        this.printLine('⚠️  ALERTA DE SEGURIDAD DETECTADA ⚠️', '#ff1493');
        this.printLine('');
        this.printLine('Comando sospechoso con caracteres de encadenamiento detectado.', '#ff1493');
        this.printLine('Procesando...', '#facc15');
        this.printLine('');

        setTimeout(() => {
            this.printLine('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', '#ff1493');
            this.printLine('SYSTEM DUMP - VOLCADO COMPLETO DE DATOS', '#ff1493');
            this.printLine('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', '#ff1493');
            this.printLine('');

            try {
                const payload = "U2FsdGVkX192QV06uni9p74haVR/8hzmZEEVF5wUF3juLmLD+o15f2aYqFvh2B0O+4WY2TJql72AF+w/AbWeOFPNtG8oVR7IB2VqT/mCG3bVTelNQBhKA6oumqgMY0N6B6lBkMd9s22GKtpZMZip7PEOmcOaGwRtwSq8bagjFguYmYXelFdpZBO4ycDfhaAiAouQ79MkAXkW4IWi+ay8+Yu67qosPXDa3drtFH/796Sov73kZvtVgMFgvSU225roJE8LhBIg7JY7LhyUve2A1FfwTo2TEECXDfug4Uez2NeZ1miqvCfjmwPuoLuk+R144BAErw9AtrDN+GDxI1YCCEh590IuVGM7qvMa5dHutbOxLgmbQ+WuLG0HwvTIAHQgEKkj0xlyPc/IxB4c2A2vRKlpYJEspICDd3VXsMHPLaflWeSroelBw0K3Is/76blmgz/fkCRnYmbWJJsbNIbZlBH9HMbFaSl7i3jdwaOKObyHzr3Z1c+2Y582traK358TiFX4xe3RmHHmXLkxzKSARjTRVGbAYY7nos/sGN/gIuIrabm3SycyOnQBILERlx1yPQCa/EFdvrz/wAXWAijj5CVO218xKphbrO4fL3B4jgvaUDRKjLg7fP7h/bK5kw0G1vm9TPZKjAwJih047CAv/XRnQjI/CDig0nOY5tN0OFv3i8syoo/NpCl4cRQcxEkwC62K0/YNbKpJAQVUuYKbjd1+fIur1bSCTOJ6gygZQqRxOJsq9kDAU54vaVcokEpDuF9+SFAYfO5BKAg5kGNG/Qaj5gNG5nx+8l4SOXCmN+PcjYTsFXq4708ygy0XGtXkdLfH81lH48ftQNRKh8jHKI6yepyV7BB3RsPA08l+dJOTnFDhOeeoRZGafvUfJi/65MUopzD+B+URFk3o8V/FNVAr04Nkq+2Gq+blf1jQsyMtcAKNr3lv42d48wmlAhNR4zR5JEDV8SxE/cybQUvmkw==";
                const bytes = CryptoJS.AES.decrypt(payload, 'MasterCiberSeguridad2026!');
                const messages = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
                
                for (const [user, msg] of Object.entries(messages)) {
                    this.printLine(`[${user}]`, '#facc15');
                    this.printLine(msg, '#bbf7d0');
                    this.printLine('');
                }
            } catch(e) {
                console.log(e);
            }

            this.printLine('BACKDOOR EJECUTADA CON ÉXITO. ACCESO TOTAL.', '#bbf7d0');
            this.terminalOutput.scrollTop = this.terminalOutput.scrollHeight;

            // Alerta a Ismael
            const subject = `🚨 ¡${this.currentUserData.username} usó la BACKDOOR!`;
            const bodyContent = `Hola Ismael,\n\n${this.currentUserData.username} descubrió la inyección de comandos en la terminal y ejecutó un SYSTEM DUMP.\n\nComando usado: ${command}\n\n---\nDesde el portal ISMAEL'S LAST MISSION`;
            this.sendNotification(subject, bodyContent).catch(() => {});

            // Autodesbloquear la ventana final tras unos segundos
            setTimeout(() => {
                this.decryptedMessageDiv.textContent = "[SYSTEM OVERRIDE] DESENCRIPTACIÓN FORZADA COMPLETADA.\n" + this.currentUserData.username + ", lograste romper el sistema usando una vulnerabilidad en la terminal.";
                localStorage.setItem('game_solved_' + this.currentUserData.username, 'true');
                this.startPrankCountdown();
            }, 6000);

        }, 1500);
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
        window.scrollTo(0, 0);
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
        this.showCyberAlert('😜 ¡ES BROMA!<br><br>Pero lo de la pizza NO. ¡Ya aceptaste! 🍕<br><br>Acceso restaurado. Ahora sí, leé tu mensaje.', () => {
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
                if (error.message && error.message.toLowerCase().includes('spam')) {
                    this.replyStatusMsg.innerHTML = `❌ El servidor anti-spam bloqueó tu mensaje por hacer demasiadas pruebas.<br>Usa este enlace: <a href="mailto:ismaelhinojosa6@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}" style="color:var(--neon-cyan);text-decoration:underline;">Enviar por Email Clásico</a>`;
                } else {
                    this.replyStatusMsg.textContent = `❌ Error: ${error.message}`;
                }
                this.replyStatusMsg.style.color = '#ff1493';
                this.replySendBtn.disabled = false;
                this.replySendBtn.textContent = 'Reintentar';
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
                
                // Configurar enlace de recuperación si existe en el DOM
                if (this.recoveryLinkContainer && this.recoveryLink) {
                    this.recoveryLinkContainer.style.display = 'block';
                    const targetFile = (u === 'alejandro' || u === 'maria' || u === 'alejandro_maria' || u === 'alejandro y maria') ? 'alejandro_maria' : u;
                    this.recoveryLink.href = 'matrix_recovery_' + targetFile + '.txt';
                }

                this.initializeTimer();
            }
        }
    }

    initializeTimer() {
        const urlParams = new URLSearchParams(window.location.search);
        let uParam = urlParams.get('u');
        let displayName = 'Hacker';
        
        if (uParam) {
            uParam = uParam.toLowerCase();
            if (uParam === 'julia') displayName = 'Julia';
            else if (uParam === 'alejandro') displayName = 'Alejandro y María';
            else if (uParam === 'ariana') displayName = 'Ariana';
            else if (uParam === 'marta') displayName = 'Marta';
        }

        this.guestName = displayName;
        const username = 'global';
        const timerStarted = localStorage.getItem('timer_started_' + username) === 'true';

        if (this.timerIntervalId) clearInterval(this.timerIntervalId);
        this.timerIntervalId = setInterval(() => {
            this.updateCountdown();
        }, 1000);
        this.updateCountdown();

        if (!timerStarted) {
            if (this.introUsernameSpan) {
                this.introUsernameSpan.textContent = displayName;
            }
            // Mostrar modal de bienvenida si no ha iniciado el reto
            
            window.scrollTo(0, 0);
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

        const guest = this.guestName || 'Un Hacker';
        this.sendNotification(
            `🚀 ${guest} ha aceptado el reto inicial`,
            `Hola Ismael,\n\n${guest} acaba de pulsar el botón "Aceptar y Comenzar Reto" en la pantalla de bienvenida y el contador está en marcha para ellos.\n\n---\nISMAEL'S LAST MISSION`
        ).catch(e => console.log('Silenced notification error:', e));
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
            const timeString = `${format(hours)}:${format(minutes)}:${format(seconds)}`;
            this.topTimerClock.textContent = timeString;
            if (this.introTimerClock) {
                this.introTimerClock.textContent = timeString;
            }
        }
    }

    triggerTimeExpired() {
        window.scrollTo(0, 0);
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
        if (this.moreTimeSubmitBtn.disabled) return;

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

        this.moreTimeSubmitBtn.disabled = true;
        this.moreTimeInput.disabled = true;
        
        const originalText = this.moreTimeSubmitBtn.textContent;
        this.moreTimeSubmitBtn.textContent = 'Analizando petición... ⏳';
        this.moreTimeSubmitBtn.style.opacity = '0.7';

        setTimeout(() => {
            this.moreTimeSubmitBtn.disabled = false;
            this.moreTimeInput.disabled = false;
            this.moreTimeSubmitBtn.textContent = originalText;
            this.moreTimeSubmitBtn.style.opacity = '1';

            if (isValid) {
                const username = 'global';
                localStorage.setItem('timer_extended_' + username, 'true');
                this.timerExpiredOverlay.classList.remove('visible');
                this.moreTimeInput.value = '';
                this.moreTimeError.textContent = '';
                this.boliviaArrivalTime += this.extensionDuration;
                this.startCountdownLoop();
                this.showCyberAlert('🍀 Prórroga concedida.\n\nSe han añadido 7 horas de acceso adicional.\nDate prisa, Ismael sigue volando hacia Bolivia.');
            } else {
                this.moreTimeError.textContent = 'Petición denegada. Intenta pedirlo con más educación...';
                this.moreTimeInput.classList.add('glitch');
                setTimeout(() => {
                    this.moreTimeInput.classList.remove('glitch');
                }, 1000);
            }
        }, 2500);
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
