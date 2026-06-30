const CryptoJS = require('crypto-js');

const generateEncryptedDB = () => {
    const rawData = {
        'JULIA-PART1-98241': {
            username: 'julia',
            role: 'Analista de Malware',
            files: {
                'readme.txt': 'Analiza el archivo log de conexiones para buscar fugas de credenciales de sesión.',
                'connections.log': '[INFO] Connection established from IP 192.168.1.45\n[INFO] User julia logged in successfully.\n[WARNING] Session hijacked. AuthToken: Q2xhdmUgZmluYWw6IE11Y2hhc190YXJkZXNfQnVlbmFzX2dyYWNpYXNfaGFoYWhh\n[INFO] Connection terminated. System logged.'
            },
            finalKey: 'Muchas_tardes_Buenas_gracias_hahaha',
            secretMessage: '¡Julia! Sabía que ibas a descifrar esto en dos segundos.\nSos demasiado inteligente para mis propios trucos.\nMe voy a extrañar tus análisis de malware... y tus risas.\n¡Nos vemos a la vuelta, genia! 🧠'
        },
        'ALEJANDRO-MARIA-PART1-35791': {
            username: 'alejandro_maria',
            role: 'Especialistas en Criptografía',
            files: {
                'readme.txt': 'Hemos interceptado una comunicación secreta en la red interna, pero está protegida por un cifrado clásico (ROT13). Descífralo para obtener la clave de acceso final.',
                'traffic.enc': 'Fhcbatb_dhr_yn_ivqn_dhrevn_dhr_abf_rapbagerzbf'
            },
            finalKey: 'Supongo_que_la_vida_queria_que_nos_encontremos',
            secretMessage: '¡Che, Alejandro y María! Se que Ale lo pirateó en 5 segundos\ny María lo auditó en 3. Dupla letal.\nGracias por todo durante el máster. ¡De verdad!\nQue disfruten y cuídense, boludos! 🔥'
        },
        'ARIANA-PART1-24680': {
            username: 'ariana',
            role: 'Auditora de Base de Datos',
            files: {
                'task.list': '1. Terminar TFM.\n2. Revisar la base de datos de respaldo en backup.sql y ver si hay variables residuales.',
                'backup.sql': 'CREATE TABLE secrets (\n    id INT PRIMARY KEY,\n    username VARCHAR(50),\n    final_key VARCHAR(100)\n);\n\nINSERT INTO secrets VALUES (1, \'ariana\', \'No_tiene_tiempo_por_hacer_el_TFM\');'
            },
            finalKey: 'No_tiene_tiempo_por_hacer_el_TFM',
            secretMessage: '¡Ariana! Sabía que estabas ocupada con el TFM.\nPero ey, entre tanto trabajo encontraste tiempo para esto.\nSos una máquina. Descansa estas semanas, que te lo mereces.\n¡Nos vemos cuando vuelva! 💪'
        },
        'MARTA-PART1-13579': {
            username: 'marta',
            role: 'Ingeniera de DevSecOps',
            files: {
                'readme.txt': 'El administrador ha dejado la clave de desarrollo en las variables de entorno locales del servidor. ¡Búscalas usando comandos avanzados de listado!',
                '.env': 'FINAL_KEY=La_que_te_lee_la_mente_con_sus_ojos_bonitos'
            },
            finalKey: 'La_que_te_lee_la_mente_con_sus_ojos_bonitos',
            secretMessage: '¡Marta! Literalmente ROMPISTE el entorno durante el máster.\nEso merece respeto. Sos increíble en lo tuyo.\nTe voy a extrañar un montón, de verdad.\n¡Un abrazo grande! Nos vemos en Bolivia 🇧🇴'
        }
    };

    let encryptedDB = {};

    for (const [accessKey, data] of Object.entries(rawData)) {
        let hash = CryptoJS.SHA256(accessKey).toString();
        let payload = {
            username: data.username,
            role: data.role,
            files: data.files,
            encryptedSecretMessage: CryptoJS.AES.encrypt(data.secretMessage, data.finalKey).toString()
        };
        let encryptedPayload = CryptoJS.AES.encrypt(JSON.stringify(payload), accessKey).toString();
        encryptedDB[hash] = encryptedPayload;
    }

    console.log(JSON.stringify(encryptedDB, null, 4));
};

generateEncryptedDB();
