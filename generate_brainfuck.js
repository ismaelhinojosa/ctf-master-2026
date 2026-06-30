const fs = require('fs');
const zlib = require('zlib');

// User keys to generate individual payloads for
const users = {
    'julia': 'julia_root_x99',
    'ariana': 'ariana_db_admin',
    'marta': 'marta_sysadmin_55',
    'alejandro': 'crypto_duo_0x00',
    'alejandro y maria': 'crypto_duo_0x00',
    'alejandro_maria': 'crypto_duo_0x00',
    'maria': 'crypto_duo_0x00'
};

// Función para convertir string a Brainfuck (método naive)
function textToBrainfuck(str) {
    let bf = '';
    let currentVal = 0;
    
    for (let i = 0; i < str.length; i++) {
        let targetVal = str.charCodeAt(i);
        let diff = targetVal - currentVal;
        
        if (diff > 0) bf += '+'.repeat(diff);
        else if (diff < 0) bf += '-'.repeat(-diff);
        
        bf += '.';
        currentVal = targetVal;
        
        if (i > 0 && i % 30 === 0) {
            bf += '\n';
        }
    }
    return bf;
}

const generateForUser = (username, finalKey) => {
    // 30 min = 1800 sec, but testing can be adjusted
    const TOTAL_SECONDS = 1800;
    
    // Obfuscate the key
    const b64Key = Buffer.from(finalKey).toString('base64');
    
    const pythonCode = `
import time, sys, base64

def run():
    print("\\n[SISTEMA DE RECUPERACIÓN DE CONTRASEÑAS OFFLINE]")
    print("Iniciando bypass de seguridad de 30 minutos...")
    print("--------------------------------------------------")
    
    total_time = ${TOTAL_SECONDS}
    start_time = time.time()
    
    while True:
        elapsed = time.time() - start_time
        remaining = total_time - elapsed
        
        if remaining <= 0:
            break
            
        progress = int((elapsed / total_time) * 40)
        bar = '█' * progress + '-' * (40 - progress)
        mins, secs = divmod(int(remaining), 60)
        sys.stdout.write(f'\\rProgreso: [{bar}] {mins:02d}:{secs:02d} restantes')
        sys.stdout.flush()
        time.sleep(1)
        
    print("\\n\\n[+] BYPASS COMPLETADO CON ÉXITO")
    print(f"Tu clave de acceso es: {base64.b64decode('${b64Key}').decode('utf-8')}")
    print("--------------------------------------------------")
    
run()
`;

    // 2. Compress the Python code with zlib
    const compressed = zlib.deflateSync(pythonCode);
    const base64Compressed = compressed.toString('base64');
    
    // 3. Create the loader python code
    const loaderCode = `import base64,zlib;exec(zlib.decompress(base64.b64decode('${base64Compressed}')))`;
    
    // 4. Convert loader to Brainfuck
    const bfCode = textToBrainfuck(loaderCode);
    
    // 5. Wrap in the CTF narrative string
    let output = "// =========================================================================\n";
    output += "// SISTEMA COMPROMETIDO - PROTOCOLO DE EXTRACCIÓN INICIADO\n";
    output += "// TIPO DE ARCHIVO: BINARIO OFUSCADO NIVEL 3\n";
    output += "// FORMATO: ESOTÉRICO (Brainfuck)\n";
    output += "// USUARIO OBJETIVO: " + username.toUpperCase() + "\n";
    output += "// INSTRUCCIONES DE DECODIFICACIÓN:\n";
    output += "// 1. Pídele a Gemini o ChatGPT que traduzca este código Brainfuck a Python.\n";
    output += "// 2. Ejecuta el archivo Python resultante en tu terminal o VSCode.\n";
    output += "// 3. Espera a que termine el proceso de fuerza bruta.\n";
    output += "// =========================================================================\n\n";
    output += bfCode;
    output += "\n\n// =========================================================================\n";
    output += "// FIN DE LA TRANSMISIÓN\n";
    output += "// =========================================================================\n";
    
    const filename = `matrix_recovery_${username.replace(/ /g, '_')}.txt`;
    fs.writeFileSync(filename, output);
    console.log(`Generated ${filename}`);
};

// Generate for primary usernames
generateForUser('julia', users['julia']);
generateForUser('ariana', users['ariana']);
generateForUser('marta', users['marta']);
generateForUser('alejandro_maria', users['alejandro_maria']);
