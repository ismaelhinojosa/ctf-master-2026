// ============================================================================
// ISMAEL'S LAST MISSION - LÓGICA MEJORADA CON EASTER EGGS Y EFECTOS
// ============================================================================

class ISMAELSLastMission {
    constructor() {
        // Base de datos de juegos
        this.gameData = {
            'JULIA-PART1-98241': {
                username: 'julia',
                role: '🧠 Analista de Malware',
                files: {
                    'readme.txt': '🔍 Analiza el archivo log de conexiones para buscar fugas de credenciales de sesión.',
                    'connections.log': `[INFO] Connection established from IP 192.168.1.45\n[INFO] User julia logged in successfully.\n[WARNING] Session hijacked. AuthToken: Q2xhdmUgZmluYWw6IE11Y2hhc190YXJkZXNfQnVlbmFzX2dyYWNpYXNfaGFoYWhh\n[ALERT] Connection terminated. System logged.\n[EASTER_EGG] Secret message: "Te extrañarás de mis preguntas en clase, ¿verdad?"`,
                    '.hidden_file': '🙈 Este archivo está oculto. Solo se ve con "ls -a"'
                },
                finalKey: 'Muchas_tardes_Buenas_gracias_hahaha',
                secretMessage: '¡Hola Julia! 👋 Te acordaste del peor dolor de cabeza del máster (¡esos bugs sin resolver!). Espero que se diviertan descifrando esto. ¡Nos vemos a la vuelta, reina de los análisis de malware! 🏆\n\nNo olvides que eres increíblemente inteligente. ¡Lo lograste todo con una sonrisa!'
            },
            'ALEJANDRO-MARIA-PART1-35791': {
                username: 'alejandro_maria',
                role: '🔐 Especialistas en Criptografía',
                files: {
                    'readme.txt': '🔍 Hemos interceptado una comunicación secreta protegida por cifrado clásico (ROT13). Descífrala.',
                    'traffic.enc': 'Fhcbatb_dhr_yn_ivqn_dhrefvn_dhr_abf_rapbagezbf',
                    'hint.txt': '💡 Pista: Usa un descodificador ROT13 online si lo necesitas.',
                    '.config': '⚙️ [Alejandro] Pirate esto en 5 segundos. [María] Auditaré la operación.'
                },
                finalKey: 'Supongo_que_la_vida_queria_que_nos_encontremos',
                secretMessage: '¡Alejandro y María! 👫 Como era de esperarse, Alejandro hizo todo el trabajo sucio para romper esto mientras María auditaba cada paso de la operación. ¡Son unos CRACKS absolutos, gracias por todo!\n\nAlejandro, tu velocidad es brutal. María, tu precisión impeccable. Juntos son prácticamente imparables. 🚀\n\n¡Que disfruten Bolivia (bueno, yo el que me voy 😅) y las futuras aventuras de criptografía!'
            },
            'ARIANA-PART1-24680': {
                username: 'ariana',
                role: '📊 Auditora de Base de Datos',
                files: {
                    'task.list': '1️⃣ Terminar TFM (¡casi ahí!)\n2️⃣ Revisar backup.sql para variables residuales\n3️⃣ Descansar cuando todo esto termine 😴',
                    'backup.sql': `CREATE TABLE secrets (\n    id INT PRIMARY KEY,\n    username VARCHAR(50),\n    final_key VARCHAR(100)\n);\n\nINSERT INTO secrets VALUES (1, 'ariana', 'No_tiene_tiempo_por_hacer_el_TFM');\n-- ¡Encontraste el secreto! 🎉`,
                    '.notes': '📝 "Ariana sin tiempo pero siempre aquí para ayudar. Leyenda absoluta."'
                },
                finalKey: 'No_tiene_tiempo_por_hacer_el_TFM',
                secretMessage: '¡Ariana! 💪 Sé perfectamente que no tenías tiempo para mis juegos de ciberseguridad. PERO ADMÍTELO, ¡fue un poco divertido resolverlo! 😏\n\nTu dedicación al TFM es legendaria. Tu capacidad de hacer mil cosas a la vez es sobrehumana. Disfruta estas semanas sin hacer nada más que respirar.\n\n¡Te lo mereces, auditora de bases de datos más ocupada del máster! 👑'
            },
            'MARTA-PART1-13579': {
                username: 'marta',
                role: '⚙️ Ingeniera de DevSecOps',
                files: {
                    'readme.txt': '🔑 El admin dejó las variables de entorno en .env. ¡Búscalas con comandos avanzados de listado!',
                    '.env': `DATABASE_PASSWORD=P@ssw0rd123\nAPI_KEY=sk_live_12345678\nFINAL_KEY=La_que_te_lee_la_mente_con_sus_ojos_bonitos\nMARTA_SKILL_LEVEL=9001 (¡Rompió el entorno!)`,
                    'LEAKED_DATABASE.txt': '⚠️ RIESGO CRÍTICO: Variables de entorno en texto plano. ¡Marta, arregla esto! 😨'
                },
                finalKey: 'La_que_te_lee_la_mente_con_sus_ojos_bonitos',
                secretMessage: '¡Marta! 🎯 Lograste romper LITERALMENTE el entorno durante el máster (y lo arreglaste después). Eso merece respeto absoluto.\n\nTe dejo un abrazo de 2000 km desde Bolivia. Cuídate mucho durante estos meses. No dejen de ser geniales, y cuando vuelva, quiero que sigas rompiendo cosas... en el buen sentido. 🤗\n\n¡Eres la DevSecOps más caótica y brillante del grupo! 💥'
            }
        };

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
        this.encryptedMessages = {};
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
        
        this.adminEmail = 'ismaelhinojosa@hotmail.com';
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

        // FECHA Y HORA REAL DE LLEGADA A BOLIVIA (Ajusta con tu vuelo real)
        // Por defecto: 1 de Julio de 2026 a las 15:00:00 (Hora de España / UTC+2)
        this.boliviaArrivalTime = new Date('2026-07-01T15:00:00+02:00').getTime();
        this.extensionDuration = 7 * 60 * 60 * 1000; // 7 horas de prórroga

        this.initializeEncryption();
        this.setupEventListeners();
        this.detectIdentifiedUser();
    }

    // Inicializar encriptación
    initializeEncryption() {
        if (typeof CryptoJS === 'undefined') {
            console.error("❌ CryptoJS no está cargado!");
            return;
        }
        for (const [accessKey, data] of Object.entries(this.gameData)) {
            const ciphertext = CryptoJS.AES.encrypt(data.secretMessage, data.finalKey).toString();
            this.encryptedMessages[data.username] = ciphertext;
        }
    }

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
        this.resetBtn.addEventListener('click', () => window.location.reload());
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
        
        if (this.gameData[inputKey]) {
            this.currentUserData = this.gameData[inputKey];
            this.transitionToDashboard();
        } else {
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
    }

    // Transición al Dashboard
    transitionToDashboard() {
        this.gateContainer.classList.add('hidden');
        
        this.profileUser.textContent = this.currentUserData.username.toUpperCase();
        this.profileRole.textContent = this.currentUserData.role;

        // Iniciar reproducción de la música de fondo
        const bgMusic = document.getElementById('background-music');
        if (bgMusic) {
            bgMusic.src = 'audio/background.mp3';
            bgMusic.load();
            bgMusic.volume = 0.35; // Volumen moderado para no aturdir
            bgMusic.muted = this.isMuted;
            bgMusic.play().catch(err => console.log('Autoplay de música de fondo bloqueado:', err));
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

        const username = this.currentUserData.username;
        const ciphertext = this.encryptedMessages[username];

        try {
            const bytes = CryptoJS.AES.decrypt(ciphertext, inputKey);
            const decryptedText = bytes.toString(CryptoJS.enc.Utf8);

            if (decryptedText) {
                // ÉXITO
                this.decryptedMessageDiv.textContent = decryptedText;

                // Marcar como resuelto para detener el temporizador de Bolivia
                localStorage.setItem('game_solved_' + this.currentUserData.username, 'true');

                // Detener música de fondo
                const bgMusic = document.getElementById('background-music');
                if (bgMusic) {
                    bgMusic.pause();
                }

                // Audio de victoria
                const music = document.getElementById('victory-music');
                if (music) {
                    music.src = `audio/${this.currentUserData.username}.mp3`;
                    music.load();
                    music.muted = this.isMuted;
                    music.play().catch(() => {});
                }

                // Notificar
                const subject = `🎉 ¡${this.currentUserData.username} decodificó su mensaje!`;
                const bodyContent = `Hola Ismael,\n\n${this.currentUserData.username} ha superado el reto y decodificó su mensaje con éxito.\n\nClave: ${inputKey}\n\n---\nDesde el portal ISMAEL'S LAST MISSION`;
                this.sendNotification(subject, bodyContent).catch(() => {});

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
        
        this.successTitle.textContent = '🔐 SISTEMA DECODIFICADO 🔐';
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
        this.successTitle.textContent = '❌ SISTEMA BLOQUEADO ❌';
        this.successTitle.style.color = '#ff1493';

        this.countdownHeader.style.display = 'none';
        this.decryptedMessageDiv.style.display = 'none';

        this.prankContainer.style.display = 'block';
        this.prankAcceptBtn.style.display = 'block';
    }

    // Aceptar la broma
    handlePrankAccept() {
        this.showCyberAlert('😜 ¡ES BROMA!<br><br>Has aceptado el reto. Las cervezas/comidas quedan registradas en el sistema. Acceso restaurado.', () => {
            this.successTitle.textContent = '🔐 SISTEMA DECODIFICADO 🔐';
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
                this.replyStatusMsg.style.color = '#a855f7';
                this.replyText.value = '';
                this.replyText.disabled = true;
                this.replySendBtn.style.display = 'none';
            })
            .catch((error) => {
                console.error(error);
                this.replyStatusMsg.textContent = '❌ Error al enviar.';
                this.replyStatusMsg.style.color = '#ff1493';
                this.replySendBtn.disabled = false;
                this.replySendBtn.textContent = '📤 Enviar Respuesta';
            });
    }

    // Enviar notificación
    sendNotification(subject, bodyContent) {
        return fetch(`https://formsubmit.co/ajax/${this.adminEmail}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                _subject: subject,
                mensaje: bodyContent
            })
        })
        .then(response => {
            if (!response.ok) throw new Error('Network response error');
            return response.json();
        });
    }

    // --- MÉTODOS DEL TEMPORIZADOR DE BOLIVIA ---

    detectIdentifiedUser() {
        const urlParams = new URLSearchParams(window.location.search);
        let u = urlParams.get('u') || urlParams.get('user');
        
        if (u) {
            u = u.toLowerCase().trim();
            const match = Object.values(this.gameData).find(data => data.username === u);
            if (match) {
                this.identifiedUser = match.username;
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
