const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const glitchCSS = `        @keyframes subtle-connection-glitch {
            0%, 93%, 97%, 100% { 
                transform: translate(0) skew(0deg);
                filter: drop-shadow(0 0 0 rgba(0,0,0,0));
            }
            94% { 
                transform: translate(-1px, 1px) skewX(0.5deg);
                filter: drop-shadow(2px 0 0 rgba(0,255,255,0.2)) drop-shadow(-2px 0 0 rgba(255,0,255,0.2));
            }
            95% { 
                transform: translate(1px, -1px) skewX(-0.5deg);
                filter: drop-shadow(-2px 0 0 rgba(0,255,255,0.2)) drop-shadow(2px 0 0 rgba(255,0,255,0.2));
            }
            96% { 
                transform: translate(0px, 1px) skewX(0.2deg);
                filter: drop-shadow(1px 0 0 rgba(0,255,255,0.1));
            }
        }

        .app-container {`;

html = html.replace('        .app-container {', glitchCSS);
html = html.replace('        .app-container {\r\n            width: 90%;', '        .app-container {\r\n            width: 90%;\r\n            animation: subtle-connection-glitch 4s infinite;');
html = html.replace('        .app-container {\n            width: 90%;', '        .app-container {\n            width: 90%;\n            animation: subtle-connection-glitch 4s infinite;');

fs.writeFileSync('index.html', html);
console.log('Glitch effect added');
