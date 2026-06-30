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
