// ============================================================================
// ISMAEL'S LAST MISSION - LÓGICA MEJORADA CON EASTER EGGS Y EFECTOS
// ============================================================================

class ISMAELSLastMission {
    constructor() {
        // Base de datos de juegos cifrada (CryptoJS AES + SHA-256)
        // Ningún dato sensible (usuarios, roles, archivos, claves o mensajes) está visible en texto plano en el F12.
        this.encryptedDB = {
            "5cd7c4fe6f74cf06f4a5534608b899623e63fcd8136c7d6ffc4a0d5ac23e1c06": "U2FsdGVkX1/+jcN3Fr/04IyglJU06gly2zWzERDYArH6mxeWhm/Iq540hBVwFxoitIyJGYoNcIBGaavDiA57MwvjCYSvRAGzSp/fI3yIv8VQuVUVDAzVuqqmFBNFDu5SYGd2wlLrsWA2ZUvlET2xrG+C4FURN/KZmh0W5KLvOmbjLkpPNUA2p/Us+SciMb+HQclupvDJyTM+GttCM1C71UyU395zpYhOfIA4GARoc2uShsNX/TWNXdCtkUA/8jGM20bkkg2sbeUdT294PhTw3SajmLc7K9v8L44IjQCNyAls9BHBysC7WgO8o6Qlu3HskKuAagxv/fLhz19AIR4Akb9wGvZvIVyttRCkaBfEysjzczgZaMYpOLr/ZushNwuJItqlRxCYBTu2zI8SPbbVrZ798JBQAe4rgSHLcWp6w5XBG+iBQVZa9sOOEQno+VU1SJ7TRWXcV3FGk6Yp8MfHh7rtcVfj88Xawz3m4v1UC0RTol2iFoXdQQowmXqPiQHJxxDwbRcswWv4uE5zVlwVxpjzD7SVxkXunN0HZp/XmNIiyaO5bXtg/gxvwJzKfBbwjcAdu1vCfSXXRvo3VqMxy71G8/9xcBn8U3qKAGozRIP6JLTXIEYWkNA2Ff1IDRGqv5oFKe8/O1byWQEfGpr5t25lgx+iOMT57uhFCw+M9KamiD0I/agxP5SKAI0blJbb7b/Q3gXBSxXvdhKAfzVSllv5dPx2+ErBt0bXEjdclhGOj61CnO327qhHH2zq6UY5nk6pWzgJ5ESg23y6WS7gMW3aIQ2+kWV0pnVdAuHbtncjxo4j91Ww7NcLJ1hBMU/7560IfFMn/9X6diFbQhIiS2cRExnfPLDIXbO1B+4RecSpvcoGbjEJe7q0MV5X4kqUSN/tKtsIO/a7hlUJf6abiAiQ4caPc5hH5YGhs63rbkWjR+sVz+jyo/TuOISdG5d73vqdXYvcKeTUzZ0C5Nt5LJLJqXInShH7PAHka6SpjtpbdXXuFajjlRPTEXflwlXqkyYk3Yr86OGV9l1gszAEO62MxogspECKR/BXn7w4xiToLRpxzuHa9i48IdJk0EW8gD3HZIGRLK/gLnpBoY2XMcdcET/zKH8nWzbn/MSWXDrEf/YRwXDY0rh8IKb2dlmG9preh0oovHD3F3Qr7DXrievuE0DHnSv01vfNXYp+B0XGIiP8un4FPoNZ3+x+0BRRU40Je6oety/1onZSH+HC0iftl8xwtOwRgZZAZjH7OMkQuApWX7G6J9HunvHf4g3KHpZeUsYJvkWm7SGStlqjJZJEbrs/u2MHBUV4oeisNSg+fC2F8EbgIjFXgTkaxc1uZPQoSQHrHUhAQbgfEIrefc0WexTiQmtChTOIXCUDME8KzxrsF5e5apxV/XGUaHXJYbjwzIL4aox8W0Rp7FJI+A==",
            "403a928582a6b3b0324e91d1805777ef96d49b7cd15607f285d673270d553412": "U2FsdGVkX19iK6Xn5qSm7qfHMfHUkzunMa+MXlC36oMyhVlAfVcfAKiYfsZzF3NO8SAdCfUI2cHu9mL9g+R2Ci6VMcDmFGSZ5+bbyyJbZJsSkxewyYJI2jiT93CziTF0RNDYyihWhadY7hiuXBwbhkRkLjJliy6/N2P/Rv1Y71CqbhsO3U3CRPO6pzOVhLW6wqVisq02QJGLS3Zp3IgOsfA4iitYQBdwDUblHLDLED5/CmRRNDYZc8mgnfQH7D0RjR1UYV8RbH1nogmxD7qb5CtnY0eP6WzexJUY3GUVXz5w4PopXT7AIQ/IiBtvpFWmUBDLMgdHlJ9tjIK6mL3lnex/uS0EROaz7cAg0YPK6ijotN77KakRABBhNwhtCIBpYuVu3Pyo9TSVP0ULNTbGcWZoCgvPR+cAfCBkRchl9Gfd16K252HZU/lKj9SMo35qaqB5XPH5EnYc3xOCkpbk+8zlDlEn6UxGmCY+guTBMxOJy+77N3oILclzC5KH+4wkVTatPGGNvFfq519GKt503Ut1YPP6d+7z/wJGO1S5PZpsNb6t8eottSQgVNbj68jFOx/aaQTkYXBbBK5EfVDNE1VcCX3NvoLJ56OsYR9LIw4kev23hDyrj7lr3CjIZliPzVxk5Hi2nhN26y5MoXuTJ/HWxN/M7qqLMzAl1NnK4RFU6GF61H7xT0klVbaYAade1PCbB8fi9b/I6XSitteOrtz6GppwaZRZjgQC+GRt/O1gtfMBT3kEhKqybJBsUBAPALeKdj6cC5beg9/Nc/ZEcwUwIBlD/emA+FuwSIhceYr1saQcv3l8SAauImrW0DVzeTnyWpd7vprcq9zg23r+4mTGelbgeHvPdiH4rwCt9ygzWYazYLkfZ8gj6XpIgHvwgXdAXqztdalwDjPuXsULswlVEdQMI4pRb/zJmDGk2iWtuJDGA/Tai4hRbafhBsWrmdwI8C+jqoa5FP95Jor1K+O1fXCEYJ/OkaJB1zMSkXCY4lb+V+kIYdksLGZPGnBZm9m1GZ56bIaL4hAfBx6mefMsvbQNJBE395QgLA41Or14NeKkfQowCl1+eqpaN+rk1RvGpfYtG6wtj/6MSPFpNfeV/eo3EFsSL4wOHMpHMdkZtSlZsZLZmTrbX81ajZpNcm3s2oV7dKqWy5BU1yPLTIu1d1uKem4GK0EBZx0qBo3GPiJIx/V6viktxj17nIr8atJ/sjKqITOb7W/n8iOJB1ZUwNXf2o007WF4KxqQ6sAU2f5pV/ngtn7buMFz+PcoZhdU9a3YLzyZCR7LidftDabtUXBXRR1oUe9GlmsWSoB9naKxbNvV82QPXHUCJMCq7/zaZ6ebe3givuLGDMHfSXqd8wXFDSnmKP+HpkkQvWyIqautJiVSiyg92G1OelOb",
            "9880a11702a0fdd064154b17df6eb0e07b7364968a2c86197b51a7328dd53c41": "U2FsdGVkX18A1yLdL49y4MDxrJPYFzueXbNNUIesNkG+7kngZ0HC0p92BQOEDvt80mECrv0oxgDvLATTnm2t5zbOw+IhKWN+bhGpw5UxzlDRpjaQH6dYHcUkHh+KyjkpyM8dVh76TzIUd3ekLFh0yQaBEvopMKtGxO+QdHpTWZloTn966Xn8cOHfNdWTC4UHVtxnDjN1O9q/Mtfh+TDsNe84+KUHJTruYqMSfXu+Prx6QJhvxDr5rqtGNU67ScV15mGKTz7z+i4NXEBxdecgmkQdLxFX6d/hroNWRm4zAMtcOoHhR4WZdtI0wsv4alznGhUR0Gu5/5F+8CEWwdqsdJUF9WGTLhY7fvvFCfyqc9fiCFO2mMbu7zLeqGfD2Xzg7e1pUXglhoAm8bngzr9YUXslqniWZPozCmHvJyVIUtAUJcGAVN0ZAJSb2gOk9Yh2cs/eH9EHbfMV5huWs4D5sPxYOv1xH0D08fq7ETQ2mskJzibrPmOyqImoqL672hT3qYB3eEUYPe30EtQHF775aeIfhXD0tCHT/Kdnec9UPGx91Q4tC6whAybqa360Ffx+g2pCsnuecINS56VC3zKGPJIIkM1RgBaL0dcYkDFnGOW42iqmtcx9Xksr+GKspXA0PtfNo0WH2c8b49j/lms6d458hnyHhG9bvcG6JAiEUs8VtPYBmIxcLIeCM2Wr8cywbOS7AgMh8gmJx/SyXNY1hi BRJMB5EQOtl4XrAIBXSom00JHVTqAplQNZZzy9pt9uvQZnB9Sad5F2YadGzrqLErczLsNna9EHA57YC5Ony5LAsFdasuggLnzYLpZhideoSMJNwMVaDubcpb1ODmpKy5SeI2HFWM7yfDZ5VUkpkUXyf9MfxhPU/QvZf5wHWK5TxnSpzi/ZMtL7auXSwYcCoUHAqjMb2ZlipmslAKPVify/um2BkatpdirkrIZDB/YZ1gGP/rWv+9USbrw2oe491QNB1ohYcqW67pkIkklDZR958T5/3oEjnfFpJJIQQ/ffKY2155Njg/0o1YyuRLfZUmty7wlnbdgewhnBa510fwOOzYRe1Ck4GnS1xXOmIBcUl4kTPyfz//AHLJ/RbW1y4kFhpGYzTnItJ1pIg7MjPh3jS7ICexuL+kseLJD1qosBRk7JFuqBBCxQgi7bbDD2FcUPp4+VmcYcB2RoytbFQeHzSjLAN+lL1Ppd3N0jMJ2tAU+VDI9j+Nbz5uAFlpO2XZVOgNx/Iwfsissy7mQ193bxA688ZUkZILkIl+3+8TboZ3KaCoZB2OpQ0R1ajoJdLhkDM3UaX1E13zx2+WppURE8FN/N5KUo/8RlbPkzfE6B0E2RmSk+J3WKWiYgYLsEOmY8M+NjRTx2wY9NSupL9uWEdByrVq6btE4ABTlAEc17Tn/DumZskGPADRk1zHR5YNdxZznjXOYLY85y9d+bqAqlPy/B7Ilbns4m/pm3oDTnbTOGL11S56LXJMbGGpY/bSfaHbzQJ3vrv5j08xBqL54=",
            "b3ca34e44d8e15e5f4001320329d6060ce6bf272895ee70ae5e395c3f607e5c4": "U2FsdGVkX1+CfnOxvVn6gbqZdWDUY5CDiYsMfcp/lAVHHoi965o6qWLy8eIFxo2i0+K9nCl/5/Tg2wKDX/kQ/X/UseLvIauqY3oJzFy6DNzMv4iJQzYIlg0kM6rRwVgq7i5B5G/wBI196KvYM0Js15djcUMMbBB2XMLYHmqWNDL4qHv0PFnpYk0LrzPmjD3GZYbE4PWkMC01ubZHbJeC+WjdjvB/EfPN6dsOjcioL9aCdJdbx5gCWxqcBRsRp140eFUYmezZPVKB2xJD4A+/ygxuDV71OJGnUbsZNUNQGxmUKHwmiAvE3sDJDQ4Aqu2wVzQCxodO40bpmh8g7qCMQppv9jKB4P+1EAdLs9vdBHLDimMgjbGGUuTlVC66HONJt7kqdmHobsMaTDNFfcpOnASDIDR15vTdr4rN0PujJgb9CJoU5hy/OLHqlUC4Pk0Xn7vR+lHDSnfV0vALvgv+e5zustZ11lWKeEiaVc3iFpXiyNatV2Yih/n8oo2TL1lDq/tJLPMF47PjzZ9tohvJeg5glsFjqezxh8oysbTphTV3im6QmAGPbpMxfG05yIWNIG6WjPZ6DgrUbmFfX4afoyjNi3Iwf/X76WOzxqfJsp6Jh2CtxEGBLkiNwQapJEv2MVOOA1zITlfrOBdPGOKkZ945NkezkatwAFuYVnY6ew4JCsDjnx6gRkO+L37XidUKJkS/guRNtJ1ZWrGZMICAV5PF7o0J7WYD9d0gUyROqURPFL6Dd3P9ThMCfZ9R/6yZn8m0enF/qfoDg/fL7WTrxxmTeXniMHorVjkYkInJ6YXwIRrdYysesV5Y4BxiZU1yWoSxb8RY1kI+dOAMFsqQwWHSOT1FRrMeScQhZnqK0uM5aCmsEAceZiGaSIdGbZ9EodPhOK9B7GU/x+fMorXfn0Ya18c09bi4Od3xvdrcgvTUv4ReFb+jMPB5i39n3qvwfaPNMaxV4X5m/aKAnPWIChTXm8OrwMS+TIrD9GGQKq5yYJfDNsuts/imXePpqi9L4Wr9Vm0U1gAxawD4ToQS4+f9yP6uxYZtttnJL1Ot3TFpcDH+VrDwHhVBIWs1ABrCBZYa1yVSeBbbVnCXV7ObGoapDv5i2TKSilQL2/rN+jPQqjLmVhoMgql1MQML49g12pN7HiCVjSHrEk4f03SbhQ7JRDafCyxHFyBCEiOCmjL/FQZtsiRBoIyUikbnosdIDPOGbOxaZmYwPPorEozXjPCbquSNrUMcRezmb/nKntPGvvieR4wbxglf6a8o6cX0/v0ZJmQxbKWHhYAQgRS0fBZH8/K41uk+d6m7Bz9vDe2pFzIvnF0qtDqcm/6s7wcxfSIX8FuhsRVaLzIctIkeoMSvUGfp2UCiO3b1xUxGEUrUKlWBV65TtXCp9ZWE49A"
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
