const fs = require('fs');
const zlib = require('zlib');

// El payload de Python que dura 30 minutos
const pythonTemplate = `import time
import sys
import os
import base64

TOTAL_MINUTES = 30

def play_sound():
    try:
        if sys.platform == 'darwin':
            os.system('afplay /System/Library/Sounds/Glass.aiff')
        elif sys.platform == 'win32':
            import winsound
            winsound.MessageBeep(winsound.MB_ICONASTERISK)
        else:
            os.system('play -q /usr/share/sounds/freedesktop/stereo/complete.oga 2>/dev/null || echo -e "\\a"')
    except:
        pass

def hacker_progress():
    print('\\n[+] INICIANDO SIMULADOR DE ATAQUE CTF')
    print('[+] Desempaquetando payload de memoria...')
    time.sleep(1)
    
    total_seconds = TOTAL_MINUTES * 60
    bar_length = 50
    
    for i in range(total_seconds + 1):
        percent = 100.0 * i / total_seconds
        filled_length = int(bar_length * i // total_seconds)
        bar = '█' * filled_length + '-' * (bar_length - filled_length)
        sys.stdout.write(f'\\r[+] Inyectando: |{bar}| {percent:.1f}%')
        sys.stdout.flush()
        if i < total_seconds:
            time.sleep(1)
            
    print('\\n\\n[!] INYECCIÓN COMPLETADA.')
    play_sound()

def get_key():
    hacker_progress()
    print('\\n==================================================')
    print('SISTEMA DE RECUPERACIÓN DE CLAVES (OFFLINE)')
    print('==================================================')
    
    while True:
        user = input('\\nIngrese su ID objetivo (julia / ariana / marta / alejandro / maria): ').strip().lower()
        
        if user == 'admin':
            print('[ERROR] Nice try. Acceso denegado.')
            continue
        elif user == 'ismael':
            print('[ERROR] Narcisista. Clarito que no es tu nombre. 😏')
            continue
            
        k = {
            'julia': 'anVsaWFfcm9vdF94OTk=',
            'ariana': 'YXJpYW5hX2RiX2FkbWlu',
            'marta': 'bWFydGFfc3lzYWRtaW5fNTU=',
            'alejandro': 'Y3J5cHRvX2R1b18weDAw',
            'alejandro y maria': 'Y3J5cHRvX2R1b18weDAw',
            'alejandro_maria': 'Y3J5cHRvX2R1b18weDAw',
            'maria': 'Y3J5cHRvX2R1b18weDAw'
        }
        
        if user in k:
            dec = base64.b64decode(k[user]).decode('utf-8')
            print('\\n' + '='*50)
            print('🎉 EXTRACCIÓN EXITOSA!')
            print(f'[>] TU CÓDIGO DE ACCESO INICIAL ES: {dec}')
            print('='*50)
            print('\\n[MENSAJE DEL CREADOR]:')
            print('Felicidades. Acabas de completar la primera fase.')
            print('Usa esta clave para acceder al portal principal.')
            break
        else:
            print('[ERROR] Objetivo no encontrado.')

if __name__ == '__main__':
    try:
        get_key()
    except KeyboardInterrupt:
        print('\\n[!] OPERACIÓN ABORTADA.')
`;

// 1. Ofuscar el python con zlib y base64
const compressed = zlib.deflateSync(pythonTemplate).toString('base64');
const targetString = `import base64,zlib;exec(zlib.decompress(base64.b64decode('${compressed}')))`;

// 2. Función para convertir string a Brainfuck (método naive)
function stringToBrainfuck(str) {
    let bf = '';
    let currentVal = 0;
    
    for (let i = 0; i < str.length; i++) {
        let targetVal = str.charCodeAt(i);
        let diff = targetVal - currentVal;
        
        if (diff > 0) {
            bf += '+'.repeat(diff);
        } else if (diff < 0) {
            bf += '-'.repeat(-diff);
        }
        
        bf += '.';
        currentVal = targetVal;
        
        // Agregar saltos de línea para que se vea como código de matrix
        if (i > 0 && i % 30 === 0) {
            bf += '\\n';
        }
    }
    return bf;
}

const bfCode = stringToBrainfuck(targetString);

// 3. Crear el archivo final para los jugadores
const finalFileContent = `// [ARCHIVO ENCRIPTADO EN BRAINFUCK]
// Instrucciones para el usuario:
// 1. Copia TODO el contenido de este archivo.
// 2. Ve a tu IA (Gemini, ChatGPT) y dile exactamente esto:
// "Eres un intérprete de Brainfuck. Ejecuta el siguiente código Brainfuck y dame ÚNICAMENTE el texto resultante en formato Python (en un bloque de código). No expliques el proceso."
// 3. Pega el código de abajo y envíalo.

${bfCode}
`;

fs.writeFileSync('matrix_recovery_30m.txt', finalFileContent);
console.log('Archivo Brainfuck generado exitosamente.');
