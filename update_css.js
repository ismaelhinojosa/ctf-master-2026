const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const newCSS = `
        /* ===== NUEVAS ANIMACIONES v2.5 ===== */
        .gate-card {
            animation: bounceIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
        }

        @keyframes bounceIn {
            0% { transform: scale(0.3); opacity: 0; }
            50% { transform: scale(1.05); opacity: 1; }
            70% { transform: scale(0.9); }
            100% { transform: scale(1); opacity: 1; }
        }

        .cyber-logo {
            animation: titlePulse 3s infinite alternate;
        }

        @keyframes titlePulse {
            0% { filter: drop-shadow(0 0 5px var(--neon-violet)); }
            100% { filter: drop-shadow(0 0 25px var(--neon-magenta)); }
        }

        .cyber-badge {
            animation: badgeBreathing 1.5s infinite alternate;
        }

        @keyframes badgeBreathing {
            0% { box-shadow: 0 0 5px var(--neon-magenta); transform: scale(1); }
            100% { box-shadow: 0 0 15px var(--neon-magenta), 0 0 30px var(--neon-violet); transform: scale(1.2); }
        }

        .cyber-btn {
            position: relative;
            overflow: hidden;
        }

        .cyber-btn::after {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%);
            transform: rotate(30deg) translateY(-50%) translateX(-150%);
            animation: shineEffect 4s infinite;
        }

        @keyframes shineEffect {
            0% { transform: rotate(30deg) translateY(-50%) translateX(-150%); }
            100% { transform: rotate(30deg) translateY(-50%) translateX(150%); }
        }
        /* ==================================== */
`;

html = html.replace('/* ==================== FASE 1: PORTAL DE ACCESO (GATE) ==================== */', newCSS + '\\n        /* ==================== FASE 1: PORTAL DE ACCESO (GATE) ==================== */');

fs.writeFileSync('index.html', html);
console.log('CSS Animations Injected');
