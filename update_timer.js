const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');
html = html.replace('<div class="timer-clock">14:00:00</div>', '<div id="intro-timer-clock" class="timer-clock">14:00:00</div>');
fs.writeFileSync('index.html', html);
console.log('HTML updated');

let js = fs.readFileSync('script.js', 'utf8');

// Add to constructor
js = js.replace('this.topTimerClock = document.getElementById(\'top-timer-clock\');', 
    'this.topTimerClock = document.getElementById(\'top-timer-clock\');\n        this.introTimerClock = document.getElementById(\'intro-timer-clock\');');

// Add interval to initializeTimer
js = js.replace('        if (!timerStarted) {', 
    '        if (this.timerIntervalId) clearInterval(this.timerIntervalId);\n        this.timerIntervalId = setInterval(() => {\n            this.updateCountdown();\n        }, 1000);\n        this.updateCountdown();\n\n        if (!timerStarted) {');

// Clean up startCountdownLoop
const startCountdownLoopRegex = /    startCountdownLoop\(\) \{[\s\S]*?this\.updateCountdown\(\);\n    \}/;
js = js.replace(startCountdownLoopRegex, `    startCountdownLoop() {
        this.globalCountdownBar.style.display = 'block';
        document.body.classList.add('has-top-bar');
    }`);

// Update both clocks in updateCountdown
const updateCountdownRegex = /this\.topTimerClock\.textContent = \`\$\{format\(hours\)\}:\$\{format\(minutes\)\}:\$\{format\(seconds\)\}\`;/;
js = js.replace(updateCountdownRegex, `const timeString = \`\$\{format(hours)\}:\$\{format(minutes)\}:\$\{format(seconds)}\`;
            this.topTimerClock.textContent = timeString;
            if (this.introTimerClock) {
                this.introTimerClock.textContent = timeString;
            }`);

fs.writeFileSync('script.js', js);
console.log('JS updated');
