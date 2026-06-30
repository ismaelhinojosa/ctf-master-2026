const fs = require('fs');
let js = fs.readFileSync('script.js', 'utf8');

const regex = /    handleMoreTimeRequest\(\) \{([\s\S]*?isValid\) \{)[\s\S]*?(            const username = \'global\';\s*localStorage\.setItem\(\'timer_extended_\' \+ username, \'true\'\);[\s\S]*?            this\.moreTimeInput\.classList\.add\(\'glitch\'\);\s*setTimeout\(\(\) => \{\s*this\.moreTimeInput\.classList\.remove\(\'glitch\'\);\s*\}, 1000\);\s*\})/g;

js = js.replace(regex, (match) => {
    return `    handleMoreTimeRequest() {
        if (this.moreTimeSubmitBtn.disabled) return;

        const text = this.moreTimeInput.value.trim().toLowerCase();
        const cleanText = text.normalize("NFD").replace(/[\\u0300-\\u036f]/g, "");

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
                this.showCyberAlert('🍀 Prórroga concedida.\\n\\nSe han añadido 7 horas de acceso adicional.\\nDate prisa, Ismael sigue volando hacia Bolivia.');
            } else {
                this.moreTimeError.textContent = 'Petición denegada. Intenta pedirlo con más educación...';
                this.moreTimeInput.classList.add('glitch');
                setTimeout(() => {
                    this.moreTimeInput.classList.remove('glitch');
                }, 1000);
            }
        }, 2500);
    }`;
});

fs.writeFileSync('script.js', js);
console.log('JS Updated');
