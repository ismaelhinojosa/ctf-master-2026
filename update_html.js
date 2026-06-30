const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Colors
html = html.replace(/--neon-cyan:\s*#[a-zA-Z0-9]+;/, '--neon-cyan: #06b6d4;');
html = html.replace(/--neon-pink:\s*#[a-zA-Z0-9]+;/, '--neon-pink: #ff1493;');
html = html.replace(/--neon-green:\s*#[a-zA-Z0-9]+;/, '--neon-magenta: #ec4899;\n            --neon-green: #22c55e;');
html = html.replace(/--bg-color:\s*#[a-zA-Z0-9]+;/, '--bg-color: #0a0505;');

// 2. Texts
html = html.replace('~ Antes de irme a Bolivia, un último reto para divertirnos todos ~', '~ Antes de irme a Bolivia... un último reto ~');
html = html.replace('⚡ Descifrar mi ¿despedida? o solo un mensaje🤔', '⚡ Venga, descifrá ya!');
html = html.replace('Usa la consola de la izquierda para buscar el archivo que contiene tu clave final. Cuando la encuentres, escríbela aquí abajo.', 'Hay una clave escondida en los archivos. Encontrála y escríbila acá. 🕵️‍♂️');

html = html.replace(/TIEMPO EXPIRADO: ACCESO NEGADO, HAY ALGO QUE NO HICISTE BIEN Y AHORA DEBERÁS COMENZAR DE NUEVO PERO ESTA VEZ ES MÁS DIFÍCIL/g, 'Tu mensaje se está borrando... pero espera.\\nExiste UNA forma de salvarlo (es obvio que es una broma):');
html = html.replace(/1️⃣ Realizar un volcado forense completo de tu memoria RAM a mano\./g, '1️⃣ Hacer un volcado forense de tu RAM. A mano. 📝');
html = html.replace(/2️⃣ Calcular una colisión SHA-256 en papel en menos de 5 minutos\./g, '2️⃣ Calcular SHA-256 en papel. En 5 minutos. 🤯');
html = html.replace(/3️⃣ Prometer invitarme a comer unas pizzas la proxima vez que te vea\./g, '3️⃣ Prometerme que me invitas a comer pizza cuando vuelva. 🍕');
html = html.replace(/4️⃣ Hacerme un Bizum para revelarte que que archivos se descargaron y no lo notaste/g, '4️⃣ Reconocer que esto fue lo mejor del máster. ⭐');
html = html.replace(/¿Aceptas las condiciones de\s*restauración\?/g, '¿Aceptás el reto?');

html = html.replace(/😜 ¡SOLO ES UNA\s*BROMA!<br><br>Has aceptado el reto\. Pero lo de la pizza no es broma y ya aceptaste!! jaja\. Acceso restaurado\./g, '😜 ¡ES BROMA!<br><br>Pero lo de la pizza NO. ¡Ya aceptaste! 🍕<br><br>Acceso restaurado. Ahora sí, leé tu mensaje.');

// 3. Audio & Music Button
if (!html.includes('id="bg-music"')) {
    html = html.replace('</body>', 
    '    <!-- Audio de Fondo (Música) -->\n' +
    '    <audio id="bg-music" autoplay loop volume="0.2">\n' +
    '        <source src="audio/background-music.mp3" type="audio/mpeg">\n' +
    '    </audio>\n' +
    '    <button id="music-toggle" style="position: fixed; bottom: 20px; right: 20px; z-index: 50; padding: 10px 15px; background: linear-gradient(135deg, var(--neon-violet), var(--neon-magenta)); border: none; color: white; border-radius: 50%; width: 50px; height: 50px; cursor: pointer; font-size: 1.2rem; box-shadow: 0 0 20px rgba(168, 85, 247, 0.4);">🎵</button>\n' +
    '</body>');
}

// 4. Glassmorphism & Shadow
html = html.replace(/backdrop-filter:\s*blur\(12px\);/g, 'backdrop-filter: blur(20px);');
html = html.replace(/-webkit-backdrop-filter:\s*blur\(12px\);/g, '-webkit-backdrop-filter: blur(20px);');
html = html.replace(/border-color:\s*rgba\(168, 85, 247, 0\.25\)/g, 'border-color: rgba(168, 85, 247, 0.35);');

fs.writeFileSync('index.html', html);
console.log('Update HTML Complete');
