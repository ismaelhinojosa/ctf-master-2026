// ============================================================================
// CTF CIBERSEGURIDAD - LÓGICA DE DESENCRIPTACIÓN Y SANDBOX DE HACKING
// ============================================================================

class CTFGame {
    constructor() {
        // Base de datos de juegos por usuario (Clave de acceso de Instagram -> Datos)
        // Base de datos de juegos por usuario (Clave de acceso de Instagram + código por DM -> Datos)
        this.gameData = {
            'JULIA-PART1-98241': {
                username: 'julia',
                role: 'Analista de Malware',
                files: {
                    'readme.txt': 'Analiza el archivo log de conexiones para buscar fugas de credenciales de sesión.',
                    'connections.log': `[INFO] Connection established from IP 192.168.1.45\n[INFO] User julia logged in successfully.\n[WARNING] Session hijacked. AuthToken: Q2xhdmUgZmluYWw6IE11Y2hhc190YXJkZXNfQnVlbmFzX2dyYWNpYXNfaGFoYWhh\n[INFO] Connection terminated. System logged.`
                },
                finalKey: 'Muchas_tardes_Buenas_gracias_hahaha',
                secretMessage: '¡Hola Julia! Te acordaste del peor dolor de cabeza del máster. Espero que se diviertan descifrando esto. ¡Nos vemos a la vuelta!'
            },
            'ALEJANDRO-MARIA-PART1-35791': {
                username: 'alejandro_maria',
                role: 'Especialistas en Criptografía',
                files: {
                    'readme.txt': 'Hemos interceptado una comunicación secreta en la red interna, pero está protegida por un cifrado clásico (ROT13). Descífralo para obtener la clave de acceso final.',
                    'traffic.enc': 'Fhcbatb_dhr_yn_ivqn_dhrefvn_dhr_abf_rapbagerzbf'
                },
                finalKey: 'Supongo_que_la_vida_queria_que_nos_encontremos',
                secretMessage: '¡Alejandro y María! Como era de esperarse, Alejandro hizo todo el trabajo sucio para romper esto mientras María auditaba la operación. ¡Son unos cracks, gracias por todo!'
            },
            'ARIANA-PART1-24680': {
                username: 'ariana',
                role: 'Auditora de Base de Datos',
                files: {
                    'task.list': '1. Terminar TFM.\n2. Revisar la base de datos de respaldo en backup.sql y ver si hay variables residuales.',
                    'backup.sql': `CREATE TABLE secrets (\n    id INT PRIMARY KEY,\n    username VARCHAR(50),\n    final_key VARCHAR(100)\n);\n\nINSERT INTO secrets VALUES (1, 'ariana', 'No_tiene_tiempo_por_hacer_el_TFM');`
                },
                finalKey: 'No_tiene_tiempo_por_hacer_el_TFM',
                secretMessage: '¡Ariana! Sé perfectamente que no tenías tiempo para mis juegos, pero admítelo, ¡fue divertido resolverlo! Disfruta las semanas sin mí.'
            },
            'MARTA-PART1-13579': {
                username: 'marta',
                role: 'Ingeniera de DevSecOps',
                files: {
                    'readme.txt': 'El administrador ha dejado la clave de desarrollo en las variables de entorno locales del servidor. ¡Búscalas usando comandos avanzados de listado!',
                    '.env': 'FINAL_KEY=La_que_te_lee_la_mente_con_sus_ojos_bonitos'
                },
                finalKey: 'La_que_te_lee_la_mente_con_sus_ojos_bonitos',
                secretMessage: '¡Marta! Lograste romper el entorno. Te dejo un abrazo gigante, cuídate mucho durante estos meses y no extrañen mis dudas en clase.'
            }
        };

        // Estado del juego
        this.currentUserData = null;
        this.encryptedMessages = {};

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

        // Nuevos Elementos para la Broma del Contador
        this.countdownHeader = document.getElementById('countdown-header');
        this.timerSeconds = document.getElementById('timer-seconds');
        this.prankContainer = document.getElementById('prank-container');
        this.prankAcceptBtn = document.getElementById('prank-accept-btn');
        this.successTitle = document.getElementById('success-title');
        this.timerId = null;

        // Elementos del Buzón de Respuesta
        this.replyContainer = document.getElementById('reply-container');
        this.replyText = document.getElementById('reply-text');
        this.replySendBtn = document.getElementById('reply-send-btn');
        this.replyStatusMsg = document.getElementById('reply-status-msg');
        
        // Email de administración para recibir notificaciones
        this.adminEmail = 'ismaelhinojosa@hotmail.com';

        this.initializeEncryption();
        this.setupEventListeners();
    }

    // Cifrar los mensajes en memoria al arrancar usando la clave correspondiente (Seguridad real)
    initializeEncryption() {
        if (typeof CryptoJS === 'undefined') {
            console.error("CryptoJS is not loaded! Please check internet connection.");
            return;
        }
        for (const [accessKey, data] of Object.entries(this.gameData)) {
            const ciphertext = CryptoJS.AES.encrypt(data.secretMessage, data.finalKey).toString();
            this.encryptedMessages[data.username] = ciphertext;
        }
    }

    // Configurar listeners de eventos
    setupEventListeners() {
        // Submit de la clave de acceso de Instagram
        this.gateSubmitBtn.addEventListener('click', () => this.handleAccessLogin());
        this.accessInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') this.handleAccessLogin();
        });

        // Comandos de la terminal de exploración
        this.terminalInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                this.processTerminalCommand();
            }
        });

        // Desencriptar mensaje final
        this.decryptSubmitBtn.addEventListener('click', () => this.handleFinalDecryption());
        this.finalKeyInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') this.handleFinalDecryption();
        });

        // Aceptar el reto de restauración (Broma)
        this.prankAcceptBtn.addEventListener('click', () => this.handlePrankAccept());

        // Enviar respuesta
        this.replySendBtn.addEventListener('click', () => this.handleReplySend());

        // Reset / Cerrar sesión
        this.resetBtn.addEventListener('click', () => {
            window.location.reload();
        });
    }

    // FASE 1: Login de acceso desde Instagram
    handleAccessLogin() {
        const inputKey = this.accessInput.value.trim();
        
        if (this.gameData[inputKey]) {
            this.currentUserData = this.gameData[inputKey];
            this.transitionToDashboard();
        } else {
            this.gateErrorMsg.style.opacity = '1';
            this.accessInput.style.borderColor = 'var(--neon-pink)';
            setTimeout(() => {
                this.gateErrorMsg.style.opacity = '0';
                this.accessInput.style.borderColor = 'var(--border-color)';
            }, 3000);
        }
    }

    // Transición del Portal de Acceso al Dashboard
    transitionToDashboard() {
        this.gateContainer.classList.add('hidden');
        
        // Cargar datos de perfil
        this.profileUser.textContent = this.currentUserData.username.toUpperCase();
        this.profileRole.textContent = this.currentUserData.role;

        setTimeout(() => {
            this.dashboardContainer.classList.add('visible');
            this.terminalInput.focus();
            this.printTerminalWelcome();
        }, 400);
    }

    // FASE 2: Consola Sandbox de Archivos
    printTerminalWelcome() {
        this.printLine(`=== CONSOLA DE EXPLORACIÓN DE ARCHIVOS PARA EL ROL: ${this.currentUserData.role.toUpperCase()} ===`);
        this.printLine('Estableciendo entorno local y montando volumen virtual...');
        this.printLine('Introduce "help" para ver la lista de comandos disponibles.');
        this.printLine('');
    }

    processTerminalCommand() {
        const rawInput = this.terminalInput.value;
        const input = rawInput.trim();
        this.terminalInput.value = '';

        if (!input) return;

        // Imprimir el prompt con el comando del usuario
        this.printLine(`guest@ciberseguridad-sandbox:~$ ${rawInput}`, 'var(--neon-cyan)');

        const parts = input.split(' ');
        const cmd = parts[0].toLowerCase();
        const args = parts.slice(1);

        if (cmd === 'help') {
            this.cmdHelp();
        } else if (cmd === 'clear') {
            this.cmdClear();
        } else if (cmd === 'ls' || cmd === 'dir') {
            this.cmdLs(args);
        } else if (cmd === 'cat') {
            this.cmdCat(args);
        } else {
            this.printLine(`bash: ${cmd}: comando no encontrado. Escribe "help" para ver comandos disponibles.`, 'var(--neon-pink)');
        }

        // Scroll automático
        this.terminalOutput.scrollTop = this.terminalOutput.scrollHeight;
    }

    // Comandos de consola
    cmdHelp() {
        this.printLine('Comandos disponibles en el sistema de exploración:');
        this.printLine('  ls          - Listar archivos en el directorio actual');
        this.printLine('  ls -a       - Listar todos los archivos (incluyendo archivos ocultos)');
        this.printLine('  cat [file]  - Mostrar el contenido de un archivo específico');
        this.printLine('  clear       - Limpiar la pantalla de la terminal');
        this.printLine('  help        - Mostrar esta ayuda');
    }

    cmdClear() {
        this.terminalOutput.innerHTML = '';
    }

    cmdLs(args) {
        const showAll = args.includes('-a');
        const files = this.currentUserData.files;
        let fileList = [];

        for (const filename of Object.keys(files)) {
            // Filtrar archivos ocultos (los que empiezan con '.') a menos que se use -a
            if (filename.startsWith('.') && !showAll) {
                continue;
            }
            fileList.push(filename);
        }

        if (fileList.length === 0) {
            this.printLine('(Directorio vacío)');
        } else {
            // Imprimir archivos con colores llamativos
            fileList.forEach(file => {
                const color = file.startsWith('.') ? 'var(--neon-pink)' : '#fff';
                this.printLine(`  ${file}`, color);
            });
        }
    }

    cmdCat(args) {
        if (args.length === 0) {
            this.printLine('Error: Especifica el nombre de un archivo. Uso: cat [nombre_archivo]', 'var(--neon-pink)');
            return;
        }

        const filename = args[0];
        const files = this.currentUserData.files;

        if (files[filename] !== undefined) {
            // Imprimir contenido del archivo
            this.printLine(files[filename]);
        } else {
            this.printLine(`cat: ${filename}: No existe el archivo o directorio en este nodo.`, 'var(--neon-pink)');
        }
    }

    // FASE 3: Desencriptación Final
    handleFinalDecryption() {
        if (typeof CryptoJS === 'undefined') {
            this.showCyberAlert('Error: La librería criptográfica no se ha cargado. Verifica tu conexión a internet.');
            return;
        }
        const inputKey = this.finalKeyInput.value.trim();

        if (!inputKey) {
            this.showCyberAlert('Por favor introduce la clave final.');
            return;
        }

        const username = this.currentUserData.username;
        const ciphertext = this.encryptedMessages[username];

        try {
            // Intentar descifrar el mensaje secreto usando la clave introducida
            const bytes = CryptoJS.AES.decrypt(ciphertext, inputKey);
            const decryptedText = bytes.toString(CryptoJS.enc.Utf8);

            if (decryptedText) {
                // ÉXITO - Iniciar simulación de autodestrucción (Broma)
                this.decryptedMessageDiv.textContent = decryptedText;

                // Reproducir audio de victoria
                const music = document.getElementById('victory-music');
                if (music) {
                    music.play().catch(err => console.log('Autoplay bloqueado o error de audio:', err));
                }

                // Notificar descifrado con éxito
                const subject = `CTF: ¡${this.currentUserData.username} ha descifrado su mensaje!`;
                const bodyContent = `Hola Ismael,\n\nTu amigo/a ${this.currentUserData.username} ha superado el reto y ha descifrado su mensaje secreto con éxito.\n\nClave utilizada: ${inputKey}\n\n---\nEnviado automáticamente desde el portal CTF.`;
                this.sendNotification(subject, bodyContent).catch(err => console.error('Error al notificar:', err));

                this.startPrankCountdown();
            } else {
                // ERROR DE CLAVE
                this.showFinalDecryptionError();
            }
        } catch (e) {
            this.showFinalDecryptionError();
        }
    }

    // Iniciar el temporizador de la broma de autodestrucción
    startPrankCountdown() {
        this.successOverlay.classList.add('visible');
        
        // Resetear visibilidad por defecto
        this.successTitle.textContent = '🔐 SISTEMA DECODIFICADO 🔐';
        this.successTitle.style.color = 'var(--neon-green)';
        this.successTitle.style.textShadow = '0 0 10px rgba(57, 255, 20, 0.4)';
        
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

            // Efecto visual: ir difuminando y desvaneciendo el texto
            const blurVal = Math.max(0, (7.0 - timeLeft) * 2.5); // De 0px a 17.5px de difuminado
            const opacityVal = Math.max(0.05, timeLeft / 7.0);
            this.decryptedMessageDiv.style.filter = `blur(${blurVal}px)`;
            this.decryptedMessageDiv.style.opacity = opacityVal;
        }, 100);
    }

    // El tiempo expira: se censura el mensaje y se muestran instrucciones difíciles
    triggerPrankMeltdown() {
        this.successTitle.textContent = '❌ SISTEMA BLOQUEADO ❌';
        this.successTitle.style.color = 'var(--neon-pink)';
        this.successTitle.style.textShadow = '0 0 10px rgba(255, 0, 127, 0.5)';

        this.countdownHeader.style.display = 'none';
        this.decryptedMessageDiv.style.display = 'none';

        // Mostrar instrucciones graciosas y botón de aceptar reto
        this.prankContainer.style.display = 'block';
        this.prankAcceptBtn.style.display = 'block';
    }

    // El usuario acepta el reto: se le dice que es broma y se restaura el mensaje final
    handlePrankAccept() {
        this.showCyberAlert('😜 ¡Es broma!<br><br>Reto de recuperación aceptado (y las rondas de cervezas/comidas quedan registradas en el sistema). Acceso de lectura restaurado.', () => {
            this.successTitle.textContent = '🔐 SISTEMA DECODIFICADO 🔐';
            this.successTitle.style.color = 'var(--neon-green)';
            this.successTitle.style.textShadow = '0 0 10px rgba(57, 255, 20, 0.4)';

            // Esconder broma
            this.prankContainer.style.display = 'none';
            this.prankAcceptBtn.style.display = 'none';

            // Mostrar el mensaje original de forma legible
            this.decryptedMessageDiv.style.display = 'block';
            this.decryptedMessageDiv.style.filter = 'none';
            this.decryptedMessageDiv.style.opacity = '1';

            // Mostrar el formulario de respuesta
            this.replyContainer.style.display = 'flex';
            this.replyText.disabled = false;
            this.replySendBtn.style.display = 'block';
            this.replySendBtn.disabled = false;
            this.replySendBtn.textContent = 'Enviar Respuesta';
            this.replyStatusMsg.textContent = '';

            // Mostrar el botón de Cerrar Sesión real
            this.resetBtn.style.display = 'block';
        });
    }

    showFinalDecryptionError() {
        this.finalKeyInput.style.borderColor = 'var(--neon-pink)';
        this.finalKeyInput.value = '';
        this.finalKeyInput.setAttribute('placeholder', 'CLAVE INCORRECTA - INTENTA DE NUEVO');
        
        setTimeout(() => {
            this.finalKeyInput.style.borderColor = 'var(--border-color)';
            this.finalKeyInput.setAttribute('placeholder', 'Introduce la Clave Final...');
        }, 2500);
    }

    // Utilidad para imprimir líneas en la terminal
    printLine(text, color = '#bbf7d0') {
        const line = document.createElement('div');
        line.className = 'terminal-line';
        line.style.color = color;
        line.textContent = text;
        this.terminalOutput.appendChild(line);
    }

    // Modal de Alerta Cyberpunk Personalizado
    showCyberAlert(message, callback) {
        const alertEl = document.getElementById('cyber-alert');
        const alertMsg = document.getElementById('cyber-alert-msg');
        const alertBtn = document.getElementById('cyber-alert-btn');
        
        alertMsg.innerHTML = message;
        alertEl.style.display = 'flex';
        
        // Efecto fade-in
        setTimeout(() => {
            alertEl.style.opacity = '1';
        }, 10);
        
        // Clonar botón para eliminar listeners antiguos
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

    // Gestionar el envío de la respuesta
    handleReplySend() {
        const text = this.replyText.value.trim();
        if (!text) {
            this.replyStatusMsg.textContent = '❌ El mensaje no puede estar vacío.';
            this.replyStatusMsg.style.color = 'var(--neon-pink)';
            return;
        }

        this.replySendBtn.disabled = true;
        this.replySendBtn.textContent = 'Enviando...';
        this.replyStatusMsg.textContent = 'Enviando respuesta a Ismael...';
        this.replyStatusMsg.style.color = 'var(--neon-cyan)';

        const subject = `CTF: ¡${this.currentUserData.username} ha respondido!`;
        const bodyContent = `Hola Ismael,\n\nTu amigo/a ${this.currentUserData.username} ha descifrado su mensaje y te ha dejado la siguiente respuesta:\n\n"${text}"\n\n---\nEnviado automáticamente desde el portal CTF.`;

        this.sendNotification(subject, bodyContent)
            .then(() => {
                this.replyStatusMsg.textContent = '✅ ¡Respuesta enviada con éxito! Gracias.';
                this.replyStatusMsg.style.color = 'var(--neon-green)';
                this.replyText.value = '';
                this.replyText.disabled = true;
                this.replySendBtn.style.display = 'none';
            })
            .catch((error) => {
                console.error(error);
                this.replyStatusMsg.textContent = '❌ Error al enviar. Inténtalo de nuevo.';
                this.replyStatusMsg.style.color = 'var(--neon-pink)';
                this.replySendBtn.disabled = false;
                this.replySendBtn.textContent = 'Enviar Respuesta';
            });
    }

    // Enviar notificación a través de FormSubmit
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
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        });
    }
}

// Iniciar aplicación
document.addEventListener('DOMContentLoaded', () => {
    new CTFGame();
});
