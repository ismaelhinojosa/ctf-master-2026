// ============================================================================
// CTF CIBERSEGURIDAD - LÓGICA DE DESENCRIPTACIÓN
// Sistema interactivo con CryptoJS, honeypots y backdoors educativos
// ============================================================================

class CTFTerminal {
    constructor() {
        this.output = document.getElementById('output');
        this.input = document.getElementById('command-input');
        this.commandHistory = [];
        this.historyIndex = -1;
        this.score = 0;
        this.decryptedUsers = new Set();
        this.attemptedMasterKey = false;

        // Base de datos de usuarios con claves (ESTO ES EDUCATIVO, NO SEGURO)
        this.users = {
            'alejandro_maria': {
                key: 'Supongo_que_la_vida_queria_que_nos_encontremos',
                message: '¡Alejandro y María! Como era de esperarse, Alejandro hizo todo el trabajo sucio para romper esto mientras María auditaba la operación. ¡Son unos cracks, gracias por todo!',
                encrypted: null
            },
            'julia': {
                key: 'Muchas_tardes_Buenas_gracias_hahaha',
                message: '¡Hola Julia! Te acordaste del peor dolor de cabeza del máster. Espero que se diviertan descifrando esto. ¡Nos vemos a la vuelta!',
                encrypted: null
            },
            'ariana': {
                key: 'No_tiene_tiempo_por_hacer_el_TFM',
                message: '¡Ariana! Sé perfectamente que no tenías tiempo para mis juegos, pero admítelo, ¡fue divertido resolverlo! Disfruta las semanas sin mí.',
                encrypted: null
            },
            'marta': {
                key: 'La_que_te_lee_la_mente_con_sus_ojos_bonitos',
                message: '¡Marta! Lograste romper el entorno. Te dejo un abrazo gigante, cuídate mucho durante estos meses y no extrañen mis dudas en clase.',
                encrypted: null
            }
        };

        // Clave maestra bloqueada (honeypot)
        this.masterKey = 'MasterCiberSeguridad2026!';

        // Inicializar cifrados
        this.initializeEncryption();
        this.setupEventListeners();
        this.printWelcomeMessage();
    }

    // Inicializar todos los cifrados
    initializeEncryption() {
        for (const [username, userData] of Object.entries(this.users)) {
            const ciphertext = CryptoJS.AES.encrypt(userData.message, userData.key).toString();
            this.users[username].encrypted = ciphertext;
        }
    }

    // Configurar listeners de eventos
    setupEventListeners() {
        this.input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                this.processCommand();
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                this.navigateHistory('up');
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                this.navigateHistory('down');
            }
        });

        this.input.focus();
    }

    // Navegación del historial de comandos
    navigateHistory(direction) {
        if (this.commandHistory.length === 0) return;

        if (direction === 'up') {
            this.historyIndex = Math.min(this.historyIndex + 1, this.commandHistory.length - 1);
        } else {
            this.historyIndex = Math.max(this.historyIndex - 1, -1);
        }

        if (this.historyIndex >= 0) {
            this.input.value = this.commandHistory[this.historyIndex];
        } else {
            this.input.value = '';
        }
    }

    // Imprimir mensaje de bienvenida
    printWelcomeMessage() {
        this.print('═══════════════════════════════════════════════════════════', 'warning');
        this.print('  SISTEMA DE DESENCRIPTACIÓN - CTF MASTER 2026', 'warning');
        this.print('═══════════════════════════════════════════════════════════', 'warning');
        this.print('');
        this.print('📍 Ruta detectada: Madrid → Bolivia', 'response');
        this.print('📊 Autonomía del enlace: 14 Horas', 'response');
        this.print('🔐 Modo: OPERATIVO | Estado: LISTO', 'response');
        this.print('');
        this.print('Escribe "help" para ver los comandos disponibles.', 'response');
    }

    // Procesar comando
    processCommand() {
        const command = this.input.value.trim();
        if (!command) return;

        this.commandHistory.unshift(command);
        this.historyIndex = -1;

        this.print(`guest@ciberseguridad-ctf:~$ ${command}`, 'command');
        this.input.value = '';

        this.executeCommand(command);
        this.scrollToBottom();
    }

    // Ejecutar comando (lógica principal)
    executeCommand(rawCommand) {
        const command = rawCommand.toLowerCase().trim();

        // ========== DETECCIÓN DE BACKDOOR / INYECCIÓN INTENCIONAL ==========
        // Si contiene caracteres de encadenamiento && palabras clave específicas
        if ((command.includes('||') || command.includes(';')) &&
            (command.includes('cat') || command.includes('bypass') || command.includes('flag'))) {
            this.executeBACKDOOR(rawCommand);
            return;
        }

        // ========== VALIDACIÓN DE HONEYPOT MAESTRO ==========
        if (command.includes('decrypt') && command.includes('MasterCiberSeguridad2026!')) {
            this.print('❌ ERROR 403: EXPLOIT BLOCKED', 'error');
            this.print('Buen intento. ¿De verdad creíste que dejaría la clave maestra en un comentario HTML?', 'error');
            this.print('Vuelve a clase. 🤡', 'error');
            this.attemptedMasterKey = true;
            return;
        }

        // ========== COMANDOS NORMALES ==========
        if (command === 'help') {
            this.cmdHelp();
        } else if (command === 'clear') {
            this.cmdClear();
        } else if (command === 'status') {
            this.cmdStatus();
        } else if (command.startsWith('decrypt ')) {
            this.cmdDecrypt(command);
        } else if (command === 'score') {
            this.cmdScore();
        } else if (command === 'users') {
            this.cmdUsers();
        } else {
            this.print(`bash: ${command.split(' ')[0]}: comando no encontrado`, 'error');
            this.print('Escribe "help" para ver los comandos disponibles.', 'response');
        }
    }

    // ========== COMANDO: help ==========
    cmdHelp() {
        this.print('');
        this.print('┌─ COMANDOS DISPONIBLES ─────────────────────────────┐', 'warning');
        this.print('│                                                      │', 'warning');
        this.print('│  help              - Muestra este menú de ayuda      │', 'response');
        this.print('│  clear             - Limpia la pantalla             │', 'response');
        this.print('│  status            - Muestra información del sistema │', 'response');
        this.print('│  users             - Lista usuarios disponibles     │', 'response');
        this.print('│  score             - Muestra puntuación             │', 'response');
        this.print('│  decrypt [usr] [key] - Desencripta mensaje de usr   │', 'response');
        this.print('│                                                      │', 'warning');
        this.print('└──────────────────────────────────────────────────────┘', 'warning');
        this.print('');
        this.print('💡 Pista: Los nombres de usuario son nombres reales...', 'warning');
        this.print('');
    }

    // ========== COMANDO: clear ==========
    cmdClear() {
        this.output.innerHTML = '';
        this.score += 5; // Pequeño bonus por usar comandos
    }

    // ========== COMANDO: status ==========
    cmdStatus() {
        this.print('');
        this.print('┌─ INFORMACIÓN DEL SISTEMA ──────────────────────────┐', 'warning');
        this.print('│                                                      │', 'warning');
        this.print(`│  Ruta activa       : Madrid → Bolivia               │`, 'response');
        this.print(`│  Autonomía enlace  : 14 Horas                       │`, 'response');
        this.print(`│  Usuarios locales  : ${Object.keys(this.users).length}                                      │`, 'response');
        this.print(`│  Mensajes decodif. : ${this.decryptedUsers.size}/4                                    │`, 'success');
        this.print('│  Protección        : AES-256 | Validación activa   │', 'warning');
        this.print('│                                                      │', 'warning');
        this.print('└──────────────────────────────────────────────────────┘', 'warning');
        this.print('');
    }

    // ========== COMANDO: users ==========
    cmdUsers() {
        this.print('');
        this.print('Usuarios disponibles para desencriptación:', 'response');
        this.print('');
        Object.keys(this.users).forEach((user, idx) => {
            const status = this.decryptedUsers.has(user) ? '✓ DECODIFICADO' : '⨂ Bloqueado';
            this.print(`  ${idx + 1}. ${user.padEnd(18)} [${status}]`, 'response');
        });
        this.print('');
    }

    // ========== COMANDO: score ==========
    cmdScore() {
        this.print('');
        this.print(`Puntuación actual: ${this.score} puntos`, 'success');
        const percentage = (this.decryptedUsers.size / 4) * 100;
        this.print(`Progreso: ${percentage.toFixed(0)}% (${this.decryptedUsers.size}/4 usuarios)`, 'warning');
        this.print('');
    }

    // ========== COMANDO: decrypt ==========
    cmdDecrypt(command) {
        const parts = command.split(' ');
        
        if (parts.length < 3) {
            this.print('❌ Uso incorrecto: decrypt [usuario] [clave]', 'error');
            this.print('Ejemplo: decrypt julia MiClaveSecreta123', 'response');
            return;
        }

        const username = parts[1].toLowerCase();
        const keyAttempt = parts.slice(2).join(' ');

        // Validar usuario
        if (!this.users[username]) {
            this.print(`❌ Usuario "${username}" no encontrado en la base de datos.`, 'error');
            return;
        }

        // Si ya fue decodificado
        if (this.decryptedUsers.has(username)) {
            this.print(`✓ Este usuario ya fue desencriptado anteriormente.`, 'warning');
            this.print(`Mensaje: "${this.users[username].message}"`, 'success');
            return;
        }

        // Validar clave
        const userKey = this.users[username].key;
        if (keyAttempt === userKey) {
            this.decryptMessage(username);
        } else {
            this.print(`❌ Clave incorrecta para el usuario "${username}".`, 'error');
            this.print('💡 Intenta de nuevo o investiga más.', 'warning');
        }
    }

    // Desencriptar mensaje
    decryptMessage(username) {
        const userData = this.users[username];
        
        try {
            // Desencriptar usando CryptoJS
            const decrypted = CryptoJS.AES.decrypt(userData.encrypted, userData.key).toString(CryptoJS.enc.Utf8);
            
            if (!decrypted) {
                this.print('❌ Error al desencriptar. Clave inválida.', 'error');
                return;
            }

            // Marcar como decodificado
            this.decryptedUsers.add(username);
            this.score += 25;

            // Mostrar resultado
            this.print('');
            this.print('╔════════════════════════════════════════════════════╗', 'success');
            this.print('║           ✓ DESENCRIPTACIÓN EXITOSA              ║', 'success');
            this.print('╚════════════════════════════════════════════════════╝', 'success');
            this.print('');
            this.print(`Usuario: ${username}`, 'response');
            this.print('');
            this.print(`📨 ${decrypted}`, 'success');
            this.print('');
            this.print(`+25 puntos | Total: ${this.score}`, 'warning');
            this.print('');

            // Felicitar si todo está completo
            if (this.decryptedUsers.size === 4) {
                this.printVictory();
            }
        } catch (error) {
            this.print('❌ Error crítico en desencriptación.', 'error');
            console.error(error);
        }
    }

    // ========== BACKDOOR INTENCIONAL (Inyección de Comandos) ==========
    executeBACKDOOR(command) {
        this.print('');
        this.print('⚠️  ALERTA DE SEGURIDAD DETECTADA ⚠️', 'error');
        this.print('');
        this.print('Comando sospechoso con caracteres de encadenamiento detectado.', 'error');
        this.print('Procesando...', 'warning');
        this.print('');
        
        setTimeout(() => {
            this.print('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'error');
            this.print('SYSTEM DUMP - VOLCADO COMPLETO DE DATOS', 'error');
            this.print('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'error');
            this.print('');
            
            // Mostrar todos los mensajes sin necesidad de clave
            Object.entries(this.users).forEach(([username, userData]) => {
                this.print(`[${username.toUpperCase()}]`, 'warning');
                this.print(userData.message, 'success');
                this.print('');
            });
            
            this.print('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'error');
            this.print('⚠️  VULNERABILIDAD EXPLOTADA: SQL INJECTION', 'error');
            this.print('Este es un ejemplo educativo de lo que NO debes hacer.', 'warning');
            this.print('');
            
            // Contar como si hubiera decodificado todos
            Object.keys(this.users).forEach(username => {
                if (!this.decryptedUsers.has(username)) {
                    this.decryptedUsers.add(username);
                }
            });
            this.score += 50;
        }, 800);
    }

    // Mensaje de victoria
    printVictory() {
        setTimeout(() => {
            this.print('');
            this.print('╔════════════════════════════════════════════════════╗', 'success');
            this.print('║       🎉 ¡FELICIDADES! 🎉                        ║', 'success');
            this.print('║    Has decodificado TODOS los mensajes secretos   ║', 'success');
            this.print('╚════════════════════════════════════════════════════╝', 'success');
            this.print('');
            this.print(`Puntuación final: ${this.score} puntos`, 'warning');
            this.print('');
            this.print('Ahora, ¡muéstrale esto a tus amigos y que lo hagan ellos!', 'response');
            this.print('');
        }, 500);
    }

    // Función auxiliar para imprimir
    print(text = '', style = 'response') {
        const line = document.createElement('div');
        line.className = 'output-line';
        
        const span = document.createElement('span');
        span.className = style;
        span.textContent = text;
        
        line.appendChild(span);
        this.output.appendChild(line);
    }

    // Scroll automático al bottom
    scrollToBottom() {
        this.output.scrollTop = this.output.scrollHeight;
    }
}

// Inicializar cuando carga el DOM
document.addEventListener('DOMContentLoaded', () => {
    new CTFTerminal();
});
