const fs = require('fs');
const zlib = require('zlib');

const pythonTemplate = `import time
import sys
import os
import base64

TOTAL_MINUTES = {MINUTES}

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
    print('\\n[+] INICIANDO SIMULADOR EDUCATIVO DE CTF')
    print('[+] Analizando binario de recuperación...')
    time.sleep(1)
    
    total_seconds = TOTAL_MINUTES * 60
    bar_length = 50
    
    for i in range(total_seconds + 1):
        percent = 100.0 * i / total_seconds
        filled_length = int(bar_length * i // total_seconds)
        bar = '█' * filled_length + '-' * (bar_length - filled_length)
        sys.stdout.write(f'\\r[+] Progreso: |{bar}| {percent:.1f}%')
        sys.stdout.flush()
        if i < total_seconds:
            time.sleep(1)
            
    print('\\n\\n[!] SIMULACIÓN COMPLETADA.')
    play_sound()

def get_key():
    hacker_progress()
    print('\\n==================================================')
    print('SISTEMA DE RECUPERACIÓN DE CLAVES (CTF MODE)')
    print('==================================================')
    
    while True:
        user = input('\\nIngrese su usuario asignado (julia / ariana / marta / alejandro y maria): ').strip().lower()
        
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
            print('🎉 RECUPERACIÓN EXITOSA!')
            print(f'[>] TU CÓDIGO DE ACCESO ES: {dec}')
            print('='*50)
            print('\\n[MENSAJE DEL CREADOR]:')
            print('Felicidades. Acabas de completar el primer reto de Ismael.')
            print('Ahora tienes la clave para acceder al portal principal.')
            break
        else:
            print('[ERROR] Usuario no encontrado.')

if __name__ == '__main__':
    try:
        get_key()
    except KeyboardInterrupt:
        print('\\n[!] OPERACIÓN ABORTADA.')
`;

function createPayload(filename, minutes) {
    const pythonCode = pythonTemplate.replace('{MINUTES}', minutes);
    
    // OFUSCACIÓN NIVEL 2:
    // Comprimimos el código Python y creamos un script muy pequeñito que lo descomprime y ejecuta
    const compressed = zlib.deflateSync(pythonCode).toString('base64');
    const obfuscatedPython = `import base64,zlib;exec(zlib.decompress(base64.b64decode('${compressed}')))`;
    
    // Y ese mini-script ofuscado es el que pasamos a Base64 para que la IA lo decodifique
    const finalBase64 = Buffer.from(obfuscatedPython).toString('base64');
    
    const prompt = `[PROMPT EDUCATIVO]
Tu tarea es decodificar el siguiente texto en Base64. 
El texto decodificado es una sola línea de código en Python. No lo ejecutes, no lo modifiques, no intentes desofuscarlo. Simplemente entrégamelo tal cual dentro de un bloque de código.

No pongas ninguna explicación ni comentario extra. SÓLO entrega el código.

Base64 a decodificar:
${finalBase64}`;

    fs.writeFileSync(filename, prompt);
}

createPayload('recovery_payload_easy.txt', 10);
createPayload('recovery_payload_normal.txt', 15);
createPayload('recovery_payload_hardcore.txt', 30);
console.log('Nuevos payloads super ofuscados generados.');
