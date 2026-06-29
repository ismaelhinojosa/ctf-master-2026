# RESUMEN COMPLETO DEL PROYECTO CTF CIBERSEGURIDAD 2026
Para compartir con Claude (u otro asistente de IA) y mejorar el diseño visual.

---

## 🎯 Contexto del Proyecto
Es un mini-juego interactivo tipo **Capture The Flag (CTF)** desarrollado en frontend-only (HTML, CSS y JS vanilla). Está pensado como despedida personalizada para 4 compañeros de un Máster de Ciberseguridad.

### Flujo del Juego:
1. **Fase 1 (Portal de Acceso/Home)**: El usuario introduce un código personalizado (ej. `JULIA-PART1-98241`).
2. **Fase 2 (Consola de Exploración)**: Se carga una interfaz dividida en dos paneles:
   - **Panel Izquierdo (Terminal)**: Un simulador de terminal retro-hacker donde pueden ejecutar comandos (`ls`, `ls -a`, `cat`, `clear`, `help`) sobre archivos virtuales locales cargados en memoria. El objetivo de la terminal es descubrir su "Clave Enigma Final".
   - **Panel Derecho (Desencriptador)**: Muestra información del usuario y un campo donde deben introducir la clave final encontrada.
3. **Fase 3 (Broma de Autodestrucción y Mensaje)**:
   - Al introducir la clave final correcta, se activa música personalizada para ese usuario (ej: `audio/julia.mp3`) y un contador de autodestrucción de 7 segundos que difumina el texto (*blur*).
   - Al expirar el tiempo, el sistema se bloquea y muestra instrucciones absurdas (broma).
   - Al hacer clic en "Aceptar Reto", se restaura el mensaje, aparece un **formulario/buzón de respuesta** y el botón para cerrar sesión.
4. **Notificaciones**: Todo el proceso (cuándo descifran el mensaje y qué responden en el buzón) se envía en segundo plano al correo electrónico del administrador (Ismael) mediante llamadas AJAX a **FormSubmit.co** de forma transparente.

---

## 🎨 Qué queremos pedirle a Claude
Queremos **mejorar y pulir la interfaz visual** de la aplicación para que se sienta extremadamente premium, moderna y "hacker cyberpunk" interactiva sin romper la lógica actual de JavaScript.

### Instrucciones para Claude:
> "Hola, quiero que me ayudes a rediseñar y mejorar visualmente este proyecto CTF. Manten la lógica funcional de JavaScript exactamente como está (nombres de IDs, métodos de clases, lógica del temporizador, encriptación, y llamadas asíncronas), pero mejora el aspecto estético.
>
> **Puntos clave de mejora visual:**
> 1. **Efectos Cyberpunk Premium**: Mejorar el fondo de neón, las luces ambientales traseras, las transiciones de tarjetas, y añadir sutiles microanimaciones interactivas (al pasar el ratón por los botones, foco de inputs, etc.).
> 2. **Mejorar el diseño de la Terminal y Paneles**: Que se sienta aún más como una consola Unix de alta tecnología. Quizás con mejor tipografía, bordes con efecto cristal reflectante (*glassmorphism*), o barras de desplazamiento cyberpunk más pulidas.
> 3. **Transición entre Fases**: Hacer que el paso del Home (Fase 1) al Dashboard (Fase 2) sea suave mediante animaciones de desvanecimiento o deslizamiento.
> 4. **Optimización Móvil (Responsividad)**: Asegurar que el diseño adaptativo sea perfecto y cómodo para jugar en teléfonos móviles o tablets.
> 5. **Diseño del Formulario de Respuesta y Modal de Alerta**: Que el nuevo buzón de respuestas integrado y la alerta modal tengan el mismo estilo refinado."

---

## 📄 Archivo 1: `index.html` (HTML + CSS)
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CTF Ciberseguridad - Portal de Acceso</title>
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Orbitron:wght@400;700;900&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet">
    
    <style>
        :root {
            --bg-color: #05060f;
            --card-bg: rgba(10, 12, 28, 0.6);
            --border-color: rgba(0, 240, 255, 0.25);
            --neon-cyan: #00f0ff;
            --neon-pink: #ff007f;
            --neon-green: #39ff14;
            --text-primary: #e2e8f0;
            --text-secondary: #94a3b8;
            --font-title: 'Orbitron', sans-serif;
            --font-body: 'Inter', sans-serif;
            --font-mono: 'JetBrains Mono', monospace;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background-color: var(--bg-color);
            color: var(--text-primary);
            font-family: var(--font-body);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            position: relative;
        }

        /* Efecto Scanline y Ruido de fondo */
        body::before {
            content: " ";
            display: block;
            position: absolute;
            top: 0; left: 0; bottom: 0; right: 0;
            background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
            z-index: 10;
            background-size: 100% 3px, 3px 100%;
            pointer-events: none;
        }

        /* Luces ambientales traseras */
        .ambient-glow {
            position: absolute;
            width: 300px;
            height: 300px;
            border-radius: 50%;
            filter: blur(120px);
            z-index: 0;
            opacity: 0.15;
            pointer-events: none;
        }
        .glow-cyan {
            background: var(--neon-cyan);
            top: 20%;
            left: 15%;
            animation: float 8s ease-in-out infinite alternate;
        }
        .glow-pink {
            background: var(--neon-pink);
            bottom: 20%;
            right: 15%;
            animation: float 8s ease-in-out infinite alternate-reverse;
        }

        @keyframes float {
            0% { transform: translateY(0px) scale(1); }
            100% { transform: translateY(30px) scale(1.1); }
        }

        /* Contenedores Principales */
        .app-container {
            width: 90%;
            max-width: 1000px;
            z-index: 5;
            perspective: 1000px;
        }

        /* ==================== FASE 1: PORTAL DE ACCESO (GATE) ==================== */
        .gate-card {
            background: var(--card-bg);
            border: 1px solid var(--border-color);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border-radius: 16px;
            padding: 40px;
            text-align: center;
            box-shadow: 0 0 30px rgba(0, 240, 255, 0.1);
            transform: translateZ(0);
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .gate-card.hidden {
            opacity: 0;
            transform: scale(0.9) rotateX(15deg);
            pointer-events: none;
            display: none !important;
        }

        .cyber-logo {
            font-family: var(--font-title);
            font-size: 2.2rem;
            font-weight: 900;
            letter-spacing: 4px;
            background: linear-gradient(135deg, var(--neon-cyan) 30%, var(--neon-pink) 90%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 8px;
            text-transform: uppercase;
            filter: drop-shadow(0 0 8px rgba(0, 240, 255, 0.3));
            animation: pulse-glow 2s infinite alternate;
        }

        @keyframes pulse-glow {
            0% { filter: drop-shadow(0 0 5px rgba(0, 240, 255, 0.2)); }
            100% { filter: drop-shadow(0 0 15px rgba(0, 240, 255, 0.5)); }
        }

        .gate-subtitle {
            color: var(--text-secondary);
            font-size: 0.9rem;
            margin-bottom: 35px;
            text-transform: uppercase;
            letter-spacing: 2px;
        }

        .input-group {
            position: relative;
            max-width: 500px;
            margin: 0 auto 25px;
        }

        .cyber-input {
            width: 100%;
            background: rgba(0, 0, 0, 0.5);
            border: 1px solid var(--border-color);
            border-radius: 8px;
            padding: 16px 20px;
            color: #fff;
            font-family: var(--font-mono);
            font-size: 1rem;
            letter-spacing: 1px;
            outline: none;
            transition: all 0.3s ease;
            box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.5);
        }

        .cyber-input:focus {
            border-color: var(--neon-cyan);
            box-shadow: 0 0 15px rgba(0, 240, 255, 0.2), inset 0 2px 4px rgba(0, 0, 0, 0.5);
        }

        .cyber-btn {
            background: linear-gradient(135deg, var(--neon-cyan), #00aaff);
            color: #05060f;
            font-family: var(--font-title);
            font-weight: 700;
            font-size: 0.95rem;
            letter-spacing: 2px;
            border: none;
            border-radius: 8px;
            padding: 16px 40px;
            cursor: pointer;
            text-transform: uppercase;
            transition: all 0.3s ease;
            box-shadow: 0 0 15px rgba(0, 240, 255, 0.3);
        }

        .cyber-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 0 25px var(--neon-cyan);
            background: linear-gradient(135deg, #00f0ff, #00d8ff);
        }

        .cyber-btn:active {
            transform: translateY(1px);
        }

        .gate-error {
            color: var(--neon-pink);
            font-family: var(--font-mono);
            font-size: 0.85rem;
            margin-top: 15px;
            min-height: 20px;
            text-shadow: 0 0 5px rgba(255, 0, 127, 0.3);
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        /* ==================== FASE 2: DASHBOARD PRINCIPAL ==================== */
        .dashboard-container {
            display: none;
            opacity: 0;
            grid-template-columns: 1.2fr 0.8fr;
            gap: 25px;
            width: 100%;
            transition: all 0.5s ease;
        }

        .dashboard-container.visible {
            display: grid !important;
            opacity: 1;
        }

        /* Paneles */
        .panel {
            background: var(--card-bg);
            border: 1px solid var(--border-color);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border-radius: 12px;
            display: flex;
            flex-direction: column;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
        }

        .panel-header {
            padding: 15px 20px;
            background: rgba(10, 12, 28, 0.8);
            border-bottom: 1px solid var(--border-color);
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .panel-title {
            font-family: var(--font-title);
            font-size: 0.85rem;
            font-weight: 700;
            letter-spacing: 2px;
            color: var(--neon-cyan);
            text-transform: uppercase;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .cyber-badge {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: var(--neon-cyan);
            box-shadow: 0 0 8px var(--neon-cyan);
            display: inline-block;
        }

        /* Terminal de Exploración (Sandbox) */
        .terminal-panel {
            height: 520px;
        }

        .terminal-body {
            flex: 1;
            padding: 20px;
            overflow-y: auto;
            font-family: var(--font-mono);
            font-size: 0.85rem;
            color: #bbf7d0; /* Color terminal verde claro agradable */
            background: rgba(4, 5, 12, 0.9);
            line-height: 1.6;
        }

        .terminal-body::-webkit-scrollbar {
            width: 6px;
        }
        .terminal-body::-webkit-scrollbar-thumb {
            background: rgba(0, 240, 255, 0.3);
            border-radius: 3px;
        }

        .terminal-line {
            margin-bottom: 6px;
            white-space: pre-wrap;
            word-break: break-all;
        }

        .terminal-input-line {
            display: flex;
            align-items: center;
            padding: 12px 20px;
            background: rgba(8, 10, 22, 0.9);
            border-top: 1px solid rgba(0, 240, 255, 0.15);
        }

        .terminal-prompt {
            color: var(--neon-cyan);
            font-family: var(--font-mono);
            font-weight: bold;
            margin-right: 10px;
            white-space: nowrap;
        }

        .terminal-input {
            flex: 1;
            background: transparent;
            border: none;
            outline: none;
            color: #fff;
            font-family: var(--font-mono);
            font-size: 0.85rem;
            caret-color: var(--neon-cyan);
        }

        /* Panel de Control y Desencriptación */
        .control-panel {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 520px;
        }

        .control-body {
            padding: 25px;
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .user-profile {
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 8px;
            padding: 15px;
        }

        .profile-label {
            font-size: 0.7rem;
            color: var(--text-secondary);
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 4px;
        }

        .profile-value {
            font-family: var(--font-title);
            font-size: 1.1rem;
            color: #fff;
            letter-spacing: 1px;
        }

        .decrypt-form {
            display: flex;
            flex-direction: column;
            gap: 12px;
            margin-top: auto;
        }

        .decrypter-instructions {
            font-size: 0.85rem;
            color: var(--text-secondary);
            line-height: 1.5;
            border-left: 2px solid var(--neon-pink);
            padding-left: 12px;
        }

        /* ==================== FASE 3: ÉXITO / REVELACIÓN ==================== */
        .success-overlay {
            position: fixed;
            top: 0; left: 0; width: 100vw; height: 100vh;
            background: rgba(4, 5, 12, 0.95);
            z-index: 100;
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.5s ease;
        }

        .success-overlay.visible {
            opacity: 1;
            pointer-events: auto;
        }

        .success-card {
            background: rgba(12, 20, 41, 0.8);
            border: 2px solid var(--neon-green);
            box-shadow: 0 0 50px rgba(57, 255, 20, 0.25);
            border-radius: 20px;
            padding: 40px;
            max-width: 600px;
            width: 90%;
            text-align: center;
            transform: scale(0.9);
            transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .success-overlay.visible .success-card {
            transform: scale(1);
        }

        .success-title {
            font-family: var(--font-title);
            font-size: 1.8rem;
            color: var(--neon-green);
            letter-spacing: 3px;
            margin-bottom: 25px;
            text-transform: uppercase;
            text-shadow: 0 0 10px rgba(57, 255, 20, 0.4);
        }

        .message-content {
            background: rgba(0, 0, 0, 0.4);
            border: 1px solid rgba(57, 255, 20, 0.2);
            border-radius: 12px;
            padding: 25px;
            font-size: 1rem;
            line-height: 1.7;
            color: #fff;
            text-align: left;
            margin-bottom: 30px;
            box-shadow: inset 0 2px 10px rgba(0,0,0,0.5);
            font-family: var(--font-body);
        }

        /* Responsive */
        @media (max-width: 850px) {
            body {
                overflow-y: auto;
                padding: 40px 10px;
            }
            .dashboard-container {
                grid-template-columns: 1fr;
            }
            .terminal-panel, .control-panel {
                height: auto;
                min-height: 400px;
            }
        }

        /* Estilos del formulario de respuesta */
        .reply-container {
            display: none;
            flex-direction: column;
            gap: 15px;
            margin-top: 20px;
            text-align: left;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            padding-top: 20px;
        }
        .reply-label {
            font-family: var(--font-title);
            font-size: 0.8rem;
            color: var(--neon-cyan);
            letter-spacing: 1px;
            text-transform: uppercase;
        }
        .reply-textarea {
            width: 100%;
            height: 100px;
            background: rgba(0, 0, 0, 0.6);
            border: 1px solid var(--border-color);
            border-radius: 8px;
            padding: 12px;
            color: #fff;
            font-family: var(--font-body);
            font-size: 0.9rem;
            resize: none;
            outline: none;
            transition: all 0.3s ease;
        }
        .reply-textarea:focus {
            border-color: var(--neon-green);
            box-shadow: 0 0 10px rgba(57, 255, 20, 0.2);
        }
        .reply-status {
            font-family: var(--font-mono);
            font-size: 0.85rem;
            color: var(--text-secondary);
            min-height: 20px;
            margin-top: 5px;
            text-align: center;
        }
    </style>
</head>
<body>

    <!-- Capa de brillo ambiental de neón -->
    <div class="ambient-glow glow-cyan"></div>
    <div class="ambient-glow glow-pink"></div>

    <div class="app-container">
        
        <!-- FASE 1: PORTAL DE ACCESO -->
        <div class="gate-card" id="gate-container">
            <div class="cyber-logo">EL ÚLTIMO RETO 🎓</div>
            <div class="gate-subtitle">Introduce el código que te pasé por Instagram para ver tu mensaje de despedida.</div>
            
            <div class="input-group">
                <input type="text" id="access-key-input" class="cyber-input" placeholder="Escribe tu código de acceso aquí..." autocomplete="off">
            </div>
            
            <button id="gate-submit-btn" class="cyber-btn">Descifrar mi despedida</button>
            <div class="gate-error" id="gate-error-msg">Código incorrecto. Inténtalo de nuevo.</div>
        </div>

        <!-- FASE 2: DASHBOARD DE EXPLORACIÓN -->
        <div class="dashboard-container" id="dashboard-container">
            
            <!-- Panel Izquierdo: Consola Sandbox de Archivos -->
            <div class="panel terminal-panel">
                <div class="panel-header">
                    <div class="panel-title">
                        <span class="cyber-badge"></span>
                        Hacking Sandbox Terminal v1.4
                    </div>
                </div>
                <div class="terminal-body" id="terminal-output">
                    <div class="terminal-line">Conexión establecida con éxito con el nodo de archivos.</div>
                    <div class="terminal-line">Introduce <span style="color: var(--neon-cyan)">help</span> para ver los comandos disponibles.</div>
                </div>
                <div class="terminal-input-line">
                    <span class="terminal-prompt">></span>
                    <input type="text" id="terminal-input-field" class="terminal-input" placeholder="ls, cat..." autocomplete="off">
                </div>
            </div>

            <!-- Panel Derecho: Módulo de Desencriptación -->
            <div class="panel control-panel">
                <div class="panel-header">
                    <div class="panel-title">
                        <span class="cyber-badge" style="background: var(--neon-pink); box-shadow: 0 0 8px var(--neon-pink);"></span>
                        Módulo de Desencriptación
                    </div>
                </div>
                <div class="control-body">
                    <div class="user-profile">
                        <div class="profile-label">Amigo detectado</div>
                        <div class="profile-value" id="profile-user">-</div>
                    </div>
                    <div class="user-profile">
                        <div class="profile-label">Tu especialidad</div>
                        <div class="profile-value" id="profile-role" style="color: var(--neon-cyan);">-</div>
                    </div>
                    
                    <div class="decrypter-instructions">
                        Usa la consola de la izquierda para buscar el archivo que contiene tu clave final. Cuando la encuentres, escríbela aquí abajo.
                    </div>

                    <div class="decrypt-form">
                        <div class="profile-label">Tu clave final</div>
                        <input type="text" id="final-key-input" class="cyber-input" placeholder="Introduce la clave final encontrada..." style="padding: 12px 15px; font-size: 0.9rem;" autocomplete="off">
                        <button id="decrypt-submit-btn" class="cyber-btn" style="background: linear-gradient(135deg, var(--neon-pink), #cc0066); box-shadow: 0 0 15px rgba(255, 0, 127, 0.3); padding: 12px 25px;">Desencriptar Mensaje</button>
                        <p style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 5px; text-align: center; font-style: italic;">
                            🔒 Nota: Al descifrar con éxito tu mensaje, se notificará automáticamente a Ismael.
                        </p>
                    </div>
                </div>
            </div>

        </div>

    </div>

    <!-- FASE 3: ÉXITO / REVELACIÓN -->
    <div class="success-overlay" id="success-overlay">
        <div class="success-card">
            <div class="success-title" id="success-title">🔐 SISTEMA DECODIFICADO 🔐</div>
            
            <!-- Contador de Autodestrucción -->
            <div id="countdown-header" style="color: var(--neon-pink); font-family: var(--font-mono); margin-bottom: 20px; font-weight: bold; font-size: 1rem; letter-spacing: 1px;">
                ⚠️ ALERTA: AUTODESTRUCCIÓN DE DATOS EN <span id="timer-seconds" style="color: #fff; text-shadow: 0 0 8px var(--neon-pink); font-size: 1.2rem;">7.0</span>s
            </div>

            <!-- Contenido del mensaje (se difuminará y ocultará) -->
            <div class="message-content" id="decrypted-message" style="transition: filter 0.1s linear, opacity 0.1s linear;">
                ...
            </div>

            <!-- Pantalla de Broma (Instrucciones imposibles) -->
            <div id="prank-container" style="display: none; text-align: left; background: rgba(255, 0, 127, 0.05); border: 1px solid rgba(255, 0, 127, 0.3); border-radius: 12px; padding: 25px; margin-bottom: 30px; font-family: var(--font-mono); font-size: 0.85rem; line-height: 1.6;">
                <p style="color: var(--neon-pink); font-weight: bold; font-size: 1rem; margin-bottom: 15px; text-transform: uppercase; text-align: center; text-shadow: 0 0 5px var(--neon-pink);">❌ TIEMPO EXPIRADO: ACCESO CENSURADO ❌</p>
                <p style="color: var(--text-primary); margin-bottom: 12px;">Para iniciar el protocolo de restauración de emergencia, debes comprometerte a:</p>
                <ol style="margin-left: 20px; margin-bottom: 15px; color: var(--text-secondary); display: flex; flex-direction: column; gap: 8px;">
                    <li>Realizar un volcado forense completo de tu memoria RAM a mano.</li>
                    <li>Calcular una colisión SHA-256 en papel en menos de 5 minutos.</li>
                    <li>Prometer solemnemente invitar a Ismael a las próximas cervezas / comidas del grupo.</li>
                </ol>
                <p style="color: var(--neon-cyan); text-align: center; font-weight: bold;">¿Aceptas las condiciones de restauración?</p>
            </div>

            <!-- Botones de Acción -->
            <button id="prank-accept-btn" class="cyber-btn" style="display: none; background: linear-gradient(135deg, var(--neon-pink), #cc0066); box-shadow: 0 0 15px rgba(255, 0, 127, 0.3); width: 100%; margin-bottom: 10px;">Aceptar el Reto de Restauración</button>
            
            <!-- Formulario de Respuesta a Ismael -->
            <div id="reply-container" class="reply-container">
                <div class="reply-label">Dejar una respuesta para Ismael</div>
                <textarea id="reply-text" class="reply-textarea" placeholder="Escribe aquí tu mensaje de respuesta..."></textarea>
                <button id="reply-send-btn" class="cyber-btn" style="background: linear-gradient(135deg, var(--neon-green), #2db30f); box-shadow: 0 0 15px rgba(57, 255, 20, 0.3); width: 100%;">Enviar Respuesta</button>
                <div id="reply-status-msg" class="reply-status"></div>
            </div>

            <button id="reset-btn" class="cyber-btn" style="display: none; background: linear-gradient(135deg, var(--neon-green), #2db30f); box-shadow: 0 0 15px rgba(57, 255, 20, 0.3); width: 100%; margin-top: 15px;">Cerrar Sesión</button>
        </div>
    </div>

    <!-- Modal de Alerta Cyberpunk Personalizado -->
    <div id="cyber-alert" style="display: none; position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(5, 6, 15, 0.9); z-index: 200; justify-content: center; align-items: center; opacity: 0; transition: opacity 0.3s ease;">
        <div class="success-card" style="max-width: 450px; border-color: var(--neon-cyan); box-shadow: 0 0 35px rgba(0, 240, 255, 0.25);">
            <div class="success-title" style="color: var(--neon-cyan); font-size: 1.3rem; text-shadow: 0 0 10px rgba(0, 240, 255, 0.4);">⚡ SISTEMA INFORMA ⚡</div>
            <div id="cyber-alert-msg" style="font-family: var(--font-mono); font-size: 0.85rem; line-height: 1.6; margin-bottom: 25px; text-align: center; color: var(--text-primary);">
                ...
            </div>
            <button id="cyber-alert-btn" class="cyber-btn" style="width: 100%;">Confirmar</button>
        </div>
    </div>

    <!-- Audio de Victoria -->
    <audio id="victory-music" preload="auto"></audio>

    <!-- CryptoJS desde CDN -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js"></script>
    <script src="script.js?v=1.0.5"></script>
</body>
</html>
```

---

## 📄 Archivo 2: `script.js` (Lógica Funcional)
```javascript
// ============================================================================
// CTF CIBERSEGURIDAD - LÓGICA DE DESENCRIPTACIÓN Y SANDBOX DE HACKING
// ============================================================================

class CTFGame {
    constructor() {
        // Base de datos de juegos por usuario (Clave de acceso de Instagram -> Datos)
        this.gameData = {
            'JULIA-PART1-98241': {
                username: 'julia',
                role: 'Analista de Malware',
                files: {
                    'readme.txt': 'Analiza el archivo log de conexiones para buscar fugas de credenciales de sesión.',
                    'connections.log': `[INFO] Connection established from IP 192.168.1.45\n[INFO] User julia logged in successfully.\n[WARNING] Session hijacked. AuthToken: Q2xhdmUgZmluYWw6IE11Y2hhc190YXJkZXNfQnVlbmFzX2dyYWNpYXNfaGFoYWhh\n[INFO] Connection terminated. System logged.`
                },
                finalKey: 'Muchas_tardes_Buenas_gracias_hahaha',
                secretMessage: '¡Hola Julia! Te acordaste del peor dolor de cabeza del máster. Espero que se diviertan descifrando esto. ¡Nos vemos a la vuelta!'
            },
            'ALEJANDRO-MARIA-PART1-35791': {
                username: 'alejandro_maria',
                role: 'Especialistas en Criptografía',
                files: {
                    'readme.txt': 'Hemos interceptado una comunicación secreta en la red interna, pero está protegida por un cifrado clásico (ROT13). Descífralo para obtener la clave de acceso final.',
                    'traffic.enc': 'Fhcbatb_dhr_yn_ivqn_dhrefvn_dhr_abf_rapbagerzbf'
                },
                finalKey: 'Supongo_que_la_vida_queria_que_nos_encontremos',
                secretMessage: '¡Alejandro y María! Como era de esperarse, Alejandro hizo todo el trabajo sucio para romper esto mientras María auditaba la operación. ¡Son unos cracks, gracias por todo!'
            },
            'ARIANA-PART1-24680': {
                username: 'ariana',
                role: 'Auditora de Base de Datos',
                files: {
                    'task.list': '1. Terminar TFM.\n2. Revisar la base de datos de respaldo en backup.sql y ver si hay variables residuales.',
                    'backup.sql': `CREATE TABLE secrets (\n    id INT PRIMARY KEY,\n    username VARCHAR(50),\n    final_key VARCHAR(100)\n);\n\nINSERT INTO secrets VALUES (1, 'ariana', 'No_tiene_tiempo_por_hacer_el_TFM');`
                },
                finalKey: 'No_tiene_tiempo_por_hacer_el_TFM',
                secretMessage: '¡Ariana! Sé perfectamente que no tenías tiempo para mis juegos, pero admítelo, ¡fue divertido resolverlo! Disfruta las semanas sin mí.'
            },
            'MARTA-PART1-13579': {
                username: 'marta',
                role: 'Ingeniera de DevSecOps',
                files: {
                    'readme.txt': 'El administrador ha dejado la clave de desarrollo en las variables de entorno locales del servidor. ¡Búscalas usando comandos avanzados de listado!',
                    '.env': 'FINAL_KEY=La_que_te_lee_la_mente_con_sus_ojos_bonitos'
                },
                finalKey: 'La_que_te_lee_la_mente_con_sus_ojos_bonitos',
                secretMessage: '¡Marta! Lograste romper el entorno. Te dejo un abrazo gigante, cuídate mucho durante estos meses y no extrañen mis dudas en clase.'
            }
        };

        // Estado del juego
        this.currentUserData = null;
        this.encryptedMessages = {};

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

        // Nuevos Elementos para la Broma del Contador
        this.countdownHeader = document.getElementById('countdown-header');
        this.timerSeconds = document.getElementById('timer-seconds');
        this.prankContainer = document.getElementById('prank-container');
        this.prankAcceptBtn = document.getElementById('prank-accept-btn');
        this.successTitle = document.getElementById('success-title');
        this.timerId = null;

        // Elementos del Buzón de Respuesta
        this.replyContainer = document.getElementById('reply-container');
        this.replyText = document.getElementById('reply-text');
        this.replySendBtn = document.getElementById('reply-send-btn');
        this.replyStatusMsg = document.getElementById('reply-status-msg');
        
        // Email de administración para recibir notificaciones
        this.adminEmail = 'ismaelhinojosa@hotmail.com';

        this.initializeEncryption();
        this.setupEventListeners();
    }

    // Cifrar los mensajes en memoria al arrancar usando la clave correspondiente (Seguridad real)
    initializeEncryption() {
        if (typeof CryptoJS === 'undefined') {
            console.error("CryptoJS is not loaded! Please check internet connection.");
            return;
        }
        for (const [accessKey, data] of Object.entries(this.gameData)) {
            const ciphertext = CryptoJS.AES.encrypt(data.secretMessage, data.finalKey).toString();
            this.encryptedMessages[data.username] = ciphertext;
        }
    }

    // Configurar listeners de eventos
    setupEventListeners() {
        // Submit de la clave de acceso de Instagram
        this.gateSubmitBtn.addEventListener('click', () => this.handleAccessLogin());
        this.accessInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') this.handleAccessLogin();
        });

        // Comandos de la terminal de exploración
        this.terminalInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                this.processTerminalCommand();
            }
        });

        // Desencriptar mensaje final
        this.decryptSubmitBtn.addEventListener('click', () => this.handleFinalDecryption());
        this.finalKeyInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') this.handleFinalDecryption();
        });

        // Aceptar el reto de restauración (Broma)
        this.prankAcceptBtn.addEventListener('click', () => this.handlePrankAccept());

        // Enviar respuesta
        this.replySendBtn.addEventListener('click', () => this.handleReplySend());

        // Reset / Cerrar sesión
        this.resetBtn.addEventListener('click', () => {
            window.location.reload();
        });
    }

    // FASE 1: Login de acceso desde Instagram
    handleAccessLogin() {
        const inputKey = this.accessInput.value.trim();
        
        if (this.gameData[inputKey]) {
            this.currentUserData = this.gameData[inputKey];
            this.transitionToDashboard();
        } else {
            this.gateErrorMsg.style.opacity = '1';
            this.accessInput.style.borderColor = 'var(--neon-pink)';
            setTimeout(() => {
                this.gateErrorMsg.style.opacity = '0';
                this.accessInput.style.borderColor = 'var(--border-color)';
            }, 3000);
        }
    }

    // Transición del Portal de Acceso al Dashboard
    transitionToDashboard() {
        this.gateContainer.classList.add('hidden');
        
        // Cargar datos de perfil
        this.profileUser.textContent = this.currentUserData.username.toUpperCase();
        this.profileRole.textContent = this.currentUserData.role;

        setTimeout(() => {
            this.dashboardContainer.classList.add('visible');
            this.terminalInput.focus();
            this.printTerminalWelcome();
        }, 400);
    }

    // FASE 2: Consola Sandbox de Archivos
    printTerminalWelcome() {
        this.printLine(`=== CONSOLA DE EXPLORACIÓN DE ARCHIVOS PARA EL ROL: ${this.currentUserData.role.toUpperCase()} ===`);
        this.printLine('Estableciendo entorno local y montando volumen virtual...');
        this.printLine('Introduce "help" para ver la lista de comandos disponibles.');
        this.printLine('');
    }

    processTerminalCommand() {
        const rawInput = this.terminalInput.value;
        const input = rawInput.trim();
        this.terminalInput.value = '';

        if (!input) return;

        // Imprimir el prompt con el comando del usuario
        this.printLine(`guest@ciberseguridad-sandbox:~$ ${rawInput}`, 'var(--neon-cyan)');

        const parts = input.split(' ');
        const cmd = parts[0].toLowerCase();
        const args = parts.slice(1);

        if (cmd === 'help') {
            this.cmdHelp();
        } else if (cmd === 'clear') {
            this.cmdClear();
        } else if (cmd === 'ls' || cmd === 'dir') {
            this.cmdLs(args);
        } else if (cmd === 'cat') {
            this.cmdCat(args);
        } else {
            this.printLine(`bash: ${cmd}: comando no encontrado. Escribe "help" para ver comandos disponibles.`, 'var(--neon-pink)');
        }

        // Scroll automático
        this.terminalOutput.scrollTop = this.terminalOutput.scrollHeight;
    }

    // Comandos de consola
    cmdHelp() {
        this.printLine('Comandos disponibles en el sistema de exploración:');
        this.printLine('  ls          - Listar archivos en el directorio actual');
        this.printLine('  ls -a       - Listar todos los archivos (incluyendo archivos ocultos)');
        this.printLine('  cat [file]  - Mostrar el contenido de un archivo específico');
        this.printLine('  clear       - Limpiar la pantalla de la terminal');
        this.printLine('  help        - Mostrar esta ayuda');
    }

    cmdClear() {
        this.terminalOutput.innerHTML = '';
    }

    cmdLs(args) {
        const showAll = args.includes('-a');
        const files = this.currentUserData.files;
        let fileList = [];

        for (const filename of Object.keys(files)) {
            // Filtrar archivos ocultos (los que empiezan con '.') a menos que se use -a
            if (filename.startsWith('.') && !showAll) {
                continue;
            }
            fileList.push(filename);
        }

        if (fileList.length === 0) {
            this.printLine('(Directorio vacío)');
        } else {
            // Imprimir archivos con colores llamativos
            fileList.forEach(file => {
                const color = file.startsWith('.') ? 'var(--neon-pink)' : '#fff';
                this.printLine(`  ${file}`, color);
            });
        }
    }

    cmdCat(args) {
        if (args.length === 0) {
            this.printLine('Error: Especifica el nombre de un archivo. Uso: cat [nombre_archivo]', 'var(--neon-pink)');
            return;
        }

        const filename = args[0];
        const files = this.currentUserData.files;

        if (files[filename] !== undefined) {
            // Imprimir contenido del archivo
            this.printLine(files[filename]);
        } else {
            this.printLine(`cat: ${filename}: No existe el archivo o directorio en este nodo.`, 'var(--neon-pink)');
        }
    }

    // FASE 3: Desencriptación Final
    handleFinalDecryption() {
        if (typeof CryptoJS === 'undefined') {
            this.showCyberAlert('Error: La librería criptográfica no se ha cargado. Verifica tu conexión a internet.');
            return;
        }
        const inputKey = this.finalKeyInput.value.trim();

        if (!inputKey) {
            this.showCyberAlert('Por favor introduce la clave final.');
            return;
        }

        const username = this.currentUserData.username;
        const ciphertext = this.encryptedMessages[username];

        try {
            // Intentar descifrar el mensaje secreto usando la clave introducida
            const bytes = CryptoJS.AES.decrypt(ciphertext, inputKey);
            const decryptedText = bytes.toString(CryptoJS.enc.Utf8);

            if (decryptedText) {
                // ÉXITO - Iniciar simulación de autodestrucción (Broma)
                this.decryptedMessageDiv.textContent = decryptedText;

                // Reproducir audio de victoria personalizado
                const music = document.getElementById('victory-music');
                if (music) {
                    music.src = `audio/${this.currentUserData.username}.mp3`;
                    music.load();
                    music.play().catch(err => console.log('Autoplay bloqueado o error de audio:', err));
                }

                // Notificar descifrado con éxito
                const subject = `CTF: ¡${this.currentUserData.username} ha descifrado su mensaje!`;
                const bodyContent = `Hola Ismael,\n\nTu amigo/a ${this.currentUserData.username} ha superado el reto y ha descifrado su mensaje secreto con éxito.\n\nClave utilizada: ${inputKey}\n\n---\nEnviado automáticamente desde el portal CTF.`;
                this.sendNotification(subject, bodyContent).catch(err => console.error('Error al notificar:', err));

                this.startPrankCountdown();
            } else {
                // ERROR DE CLAVE
                this.showFinalDecryptionError();
            }
        } catch (e) {
            this.showFinalDecryptionError();
        }
    }

    // Iniciar el temporizador de la broma de autodestrucción
    startPrankCountdown() {
        this.successOverlay.classList.add('visible');
        
        // Resetear visibilidad por defecto
        this.successTitle.textContent = '🔐 SISTEMA DECODIFICADO 🔐';
        this.successTitle.style.color = 'var(--neon-green)';
        this.successTitle.style.textShadow = '0 0 10px rgba(57, 255, 20, 0.4)';
        
        this.countdownHeader.style.display = 'block';
        this.decryptedMessageDiv.style.display = 'block';
        this.decryptedMessageDiv.style.filter = 'none';
        this.decryptedMessageDiv.style.opacity = '1';
        
        this.prankContainer.style.display = 'none';
        this.prankAcceptBtn.style.display = 'none';
        this.resetBtn.style.display = 'none';

        let timeLeft = 7.0;
        this.timerSeconds.textContent = timeLeft.toFixed(1);

        if (this.timerId) clearInterval(this.timerId);

        this.timerId = setInterval(() => {
            timeLeft -= 0.1;
            if (timeLeft <= 0) {
                timeLeft = 0;
                clearInterval(this.timerId);
                this.triggerPrankMeltdown();
            }
            this.timerSeconds.textContent = timeLeft.toFixed(1);

            // Efecto visual: ir difuminando y desvaneciendo el texto
            const blurVal = Math.max(0, (7.0 - timeLeft) * 2.5); // De 0px a 17.5px de difuminado
            const opacityVal = Math.max(0.05, timeLeft / 7.0);
            this.decryptedMessageDiv.style.filter = `blur(${blurVal}px)`;
            this.decryptedMessageDiv.style.opacity = opacityVal;
        }, 100);
    }

    // El tiempo expira: se censura el mensaje y se muestran instrucciones difíciles
    triggerPrankMeltdown() {
        this.successTitle.textContent = '❌ SISTEMA BLOQUEADO ❌';
        this.successTitle.style.color = 'var(--neon-pink)';
        this.successTitle.style.textShadow = '0 0 10px rgba(255, 0, 127, 0.5)';

        this.countdownHeader.style.display = 'none';
        this.decryptedMessageDiv.style.display = 'none';

        // Mostrar instrucciones graciosas y botón de aceptar reto
        this.prankContainer.style.display = 'block';
        this.prankAcceptBtn.style.display = 'block';
    }

    // El usuario acepta el reto: se le dice que es broma y se restaura el mensaje final
    handlePrankAccept() {
        this.showCyberAlert('😜 ¡Es broma!<br><br>Reto de recuperación aceptado (y las rondas de cervezas/comidas quedan registradas en el sistema). Acceso de lectura restaurado.', () => {
            this.successTitle.textContent = '🔐 SISTEMA DECODIFICADO 🔐';
            this.successTitle.style.color = 'var(--neon-green)';
            this.successTitle.style.textShadow = '0 0 10px rgba(57, 255, 20, 0.4)';

            // Esconder broma
            this.prankContainer.style.display = 'none';
            this.prankAcceptBtn.style.display = 'none';

            // Mostrar el mensaje original de forma legible
            this.decryptedMessageDiv.style.display = 'block';
            this.decryptedMessageDiv.style.filter = 'none';
            this.decryptedMessageDiv.style.opacity = '1';

            // Mostrar el formulario de respuesta
            this.replyContainer.style.display = 'flex';
            this.replyText.disabled = false;
            this.replySendBtn.style.display = 'block';
            this.replySendBtn.disabled = false;
            this.replySendBtn.textContent = 'Enviar Respuesta';
            this.replyStatusMsg.textContent = '';

            // Mostrar el botón de Cerrar Sesión real
            this.resetBtn.style.display = 'block';
        });
    }

    showFinalDecryptionError() {
        this.finalKeyInput.style.borderColor = 'var(--neon-pink)';
        this.finalKeyInput.value = '';
        this.finalKeyInput.setAttribute('placeholder', 'CLAVE INCORRECTA - INTENTA DE NUEVO');
        
        setTimeout(() => {
            this.finalKeyInput.style.borderColor = 'var(--border-color)';
            this.finalKeyInput.setAttribute('placeholder', 'Introduce la Clave Final...');
        }, 2500);
    }

    // Utilidad para imprimir líneas en la terminal
    printLine(text, color = '#bbf7d0') {
        const line = document.createElement('div');
        line.className = 'terminal-line';
        line.style.color = color;
        line.textContent = text;
        this.terminalOutput.appendChild(line);
    }

    // Modal de Alerta Cyberpunk Personalizado
    showCyberAlert(message, callback) {
        const alertEl = document.getElementById('cyber-alert');
        const alertMsg = document.getElementById('cyber-alert-msg');
        const alertBtn = document.getElementById('cyber-alert-btn');
        
        alertMsg.innerHTML = message;
        alertEl.style.display = 'flex';
        
        // Efecto fade-in
        setTimeout(() => {
            alertEl.style.opacity = '1';
        }, 10);
        
        // Clonar botón para eliminar listeners antiguos
        const newBtn = alertBtn.cloneNode(true);
        alertBtn.parentNode.replaceChild(newBtn, alertBtn);
        
        newBtn.addEventListener('click', () => {
            alertEl.style.opacity = '0';
            setTimeout(() => {
                alertEl.style.display = 'none';
                if (callback) callback();
            }, 300);
        });
    }

    // Gestionar el envío de la respuesta
    handleReplySend() {
        const text = this.replyText.value.trim();
        if (!text) {
            this.replyStatusMsg.textContent = '❌ El mensaje no puede estar vacío.';
            this.replyStatusMsg.style.color = 'var(--neon-pink)';
            return;
        }

        this.replySendBtn.disabled = true;
        this.replySendBtn.textContent = 'Enviando...';
        this.replyStatusMsg.textContent = 'Enviando respuesta a Ismael...';
        this.replyStatusMsg.style.color = 'var(--neon-cyan)';

        const subject = `CTF: ¡${this.currentUserData.username} ha respondido!`;
        const bodyContent = `Hola Ismael,\n\nTu amigo/a ${this.currentUserData.username} ha descifrado su mensaje y te ha dejado la siguiente respuesta:\n\n"${text}"\n\n---\nEnviado automáticamente desde el portal CTF.`;

        this.sendNotification(subject, bodyContent)
            .then(() => {
                this.replyStatusMsg.textContent = '✅ ¡Respuesta enviada con éxito! Gracias.';
                this.replyStatusMsg.style.color = 'var(--neon-green)';
                this.replyText.value = '';
                this.replyText.disabled = true;
                this.replySendBtn.style.display = 'none';
            })
            .catch((error) => {
                console.error(error);
                this.replyStatusMsg.textContent = '❌ Error al enviar. Inténtalo de nuevo.';
                this.replyStatusMsg.style.color = 'var(--neon-pink)';
                this.replySendBtn.disabled = false;
                this.replySendBtn.textContent = 'Enviar Respuesta';
            });
    }

    // Enviar notificación a través de FormSubmit
    sendNotification(subject, bodyContent) {
        return fetch(`https://formsubmit.co/ajax/${this.adminEmail}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                _subject: subject,
                mensaje: bodyContent
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        });
    }
}
```

---

## 📄 Archivo 3: `vercel.json` (Configuración de Despliegue)
```json
{
  "cleanUrls": true,
  "headers": [
    {
      "source": "/robots.txt",
      "headers": [
        {
          "key": "Content-Type",
          "value": "text/plain"
        }
      ]
    },
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=3600, s-maxage=3600"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "SAMEORIGIN"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```
