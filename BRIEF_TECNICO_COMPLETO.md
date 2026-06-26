================================================================================
PROYECTO: CTF INTERACTIVO PERSONALIZADO - BRIEF TÉCNICO
Cliente: Ismael | Agencia: Antigravity
Fecha: Junio 2026 | Versión: 1.0
================================================================================

---

## 1. RESUMEN EJECUTIVO

Se requiere desarrollar un mini-proyecto web estático (frontend-only) de tipo CTF 
(Capture The Flag) interactivo con temática hacker retro. El objetivo es crear 
una experiencia gamificada donde 4 usuarios específicos deben desencriptar 
mensajes personalizados usando AES-256 (CryptoJS).

El proyecto es:
✓ Completamente client-side (no requiere backend)
✓ Auto-contenido (sin dependencias complejas)
✓ Deployable en Vercel en segundos
✓ Educativo en ciberseguridad (incluye honeypots y backdoors intencionales)
✓ Totalmente personalizable con mensajes individuales

---

## 2. REQUISITOS TÉCNICOS

### 2.1 Stack Tecnológico
- Frontend: HTML5 + CSS3 + JavaScript Vanilla (ES6+)
- Criptografía: CryptoJS 4.1.1 (desde CDN)
- Hosting: Vercel (despliegue automático desde GitHub)
- Navegadores: Chrome, Firefox, Safari, Edge (versiones recientes)

### 2.2 Arquitectura
```
Proyecto-CTF/
├── index.html          (Interfaz de terminal retro)
├── script.js           (Lógica de comandos y cifrado)
├── robots.txt          (Honeypots y rutas falsas)
├── .gitignore         (Configuración Git)
└── vercel.json        (Configuración Vercel - OPCIONAL)
```

### 2.3 Especificaciones de Seguridad
- ⚠️ IMPORTANTE: Preservar estándares de seguridad existentes de Hospedfies Amanció
- No usar localStorage/sessionStorage (datos en memoria solamente)
- Validación robusta contra inyección de comandos
- No exponer información sensible en consola (production-safe)
- Cumplimiento con OWASP Top 10

---

## 3. FUNCIONALIDADES REQUERIDAS

### 3.1 Sistema de Comandos de Terminal
Implementar los siguientes comandos (case-insensitive):

| Comando | Parámetros | Descripción |
|---------|-----------|-------------|
| help | — | Muestra menú de ayuda con comandos disponibles |
| clear | — | Limpia la pantalla de la terminal |
| status | — | Muestra información del sistema (ruta, autonomía) |
| users | — | Lista usuarios disponibles y su estado de decodificación |
| score | — | Muestra puntuación actual y porcentaje de progreso |
| decrypt | [usuario] [clave] | Desencripta mensaje si la clave es correcta |

### 3.2 Base de Datos de Usuarios (Cifrada)

Cuatro usuarios con mensajes encriptados en AES-256:

```
Usuario: alejandro_maria
├─ Clave: UnidosEnLaCiberSeguridad2026
└─ Mensaje: [PERSONALIZADO POR CLIENTE]

Usuario: julia
├─ Clave: DescifraloJulia2026Master
└─ Mensaje: [PERSONALIZADO POR CLIENTE]

Usuario: ariana
├─ Clave: ArianaSinTiempo2026Secret
└─ Mensaje: [PERSONALIZADO POR CLIENTE]

Usuario: marta
├─ Clave: MartaRompioTodo2026Abrazo
└─ Mensaje: [PERSONALIZADO POR CLIENTE]
```

### 3.3 Mecánicas de Seguridad (Educativas)

#### Honeypot 1: Clave Maestra en Comentario HTML
- Ubicación: Comentario visible en F12 (Elements)
- Contenido: "ADMIN_BACKDOOR: MasterCiberSeguridad2026!"
- Efecto: Si se usa, bloquea con mensaje burlón (ERROR 403)
- Propósito: Enseñar que información "visible" no es segura

#### Honeypot 2: robots.txt Falso
- Simula rutas administrativas ocultas
- No existen en realidad (es una pista engañosa)
- Propósito: Enseñar enumeración de directorios

#### Backdoor Intencional: Inyección de Comandos
- Trigger: Comando que incluya `||` o `;` AND palabras clave (`cat`, `bypass`, `flag`)
- Efecto: Volcado completo de datos (SYSTEM DUMP)
- Resultado: Muestra todos los mensajes sin necesidad de claves
- Propósito: Educativo - mostrar vulnerabilidad de inyección
- Bonus: +50 puntos por explotar

### 3.4 Sistema de Puntuación
- Comando correcto: +25 puntos
- Desencriptación exitosa: +25 puntos (total 50 primer usuario)
- Usuarios subsecuentes: +25 puntos cada uno
- Usar comando `clear`: +5 puntos
- Explotar backdoor: +50 puntos bonus
- Máximo teórico: 150 puntos (4 × 25 + 50 bonus)

---

## 4. INTERFAZ DE USUARIO

### 4.1 Tema Visual
- **Estilo:** Terminal hacker retro años 90
- **Fondo:** Negro (#0a0a0a) con efecto scanlines
- **Texto:** Monoespaciado (Courier New), verde fluorescente (#00ff00)
- **Bordes:** Verde (#00ff00) con glow sutil
- **Animaciones:** Parpadeo de títulos, efectos scanlines, caret pulsante

### 4.2 Componentes
```
┌─────────────────────────────────────────┐
│  ⚡ CTF CIBERSEGURIDAD MASTER ⚡        │
│  Sistema de Decodificación v2.1         │
├─────────────────────────────────────────┤
│                                         │
│  [Bienvenida + Instrucciones]          │
│  [Salida de comandos ejecutados]       │
│  [Historial de respuestas]             │
│                                         │
├─────────────────────────────────────────┤
│ guest@ctf:~$ [INPUT FIELD]             │
└─────────────────────────────────────────┘
```

### 4.3 Responsividad
- Móvil (< 768px): Reducción de fuente, padding ajustado
- Tablet (768px - 1024px): Layout flexible
- Desktop (> 1024px): Layout óptimo
- Soporte para pantallas retina

### 4.4 Scroll Automático
- Scroll automático hacia abajo cuando output supera viewport
- Scroll suave (smooth scroll)
- Scrollbar personalizada (verde)

---

## 5. FUNCIONALIDADES AVANZADAS

### 5.1 Historial de Comandos
- Implementar con Array en memoria
- Navegación con Arrow Up/Down
- Máximo 50 últimos comandos
- Reset al recargar página

### 5.2 Validación de Entrada
- Sanitizar inputs contra inyección de código
- Prevenir XSS (escapar caracteres especiales)
- Case-insensitive para comandos
- Trim de espacios en blanco

### 5.3 Feedback Visual
- Diferente color para comandos, respuestas, errores
- Mensajes de error descriptivos
- Animación de desencriptación exitosa
- Contador visual de progreso

---

## 6. INSTRUCCIONES DE DESPLIEGUE EN VERCEL

### 6.1 Requisitos Previos
- [ ] Cuenta GitHub (gratuita en github.com)
- [ ] Cuenta Vercel (gratuita en vercel.com, se conecta con GitHub)
- [ ] Git instalado en computadora (git-scm.com)

### 6.2 Pasos de Despliegue (Agencia)

#### Paso 1: Crear repositorio en GitHub
```bash
1. Ir a https://github.com/new
2. Nombre del repo: "ctf-ciberseguridad-master" o similar
3. Descripción: "CTF interactivo con mensajes personalizados"
4. Seleccionar: Public (para que Vercel lo vea)
5. Crear README.md (opcional pero recomendado)
6. Crear .gitignore con: node_modules/, .DS_Store
```

#### Paso 2: Clonar repo localmente
```bash
git clone https://github.com/[TU_USUARIO]/ctf-ciberseguridad-master.git
cd ctf-ciberseguridad-master
```

#### Paso 3: Agregar archivos del proyecto
```bash
# Copiar los 3 archivos principales en la carpeta raíz
# - index.html
# - script.js
# - robots.txt

# Opcional: crear vercel.json
touch vercel.json
```

#### Paso 4: Crear vercel.json (OPCIONAL pero recomendado)
```json
{
  "buildCommand": "",
  "devCommand": "",
  "installCommand": "",
  "framework": "static",
  "outputDirectory": "."
}
```

#### Paso 5: Pushear a GitHub
```bash
git add .
git commit -m "Initial commit: CTF project with personalized messages"
git push origin main
```

#### Paso 6: Conectar con Vercel
```bash
1. Ir a https://vercel.com/dashboard
2. Click "Add New..." → "Project"
3. Seleccionar "Import Git Repository"
4. Buscar y seleccionar "ctf-ciberseguridad-master"
5. Vercel auto-detectará que es un proyecto estático
6. Configuración: (dejar por defecto)
7. Click "Deploy"
8. ¡LISTO! Vercel proporciona URL automática
```

#### Paso 7: Obtener URL pública
```
La URL será algo como:
https://ctf-ciberseguridad-master.vercel.app

Compartir esta URL con los usuarios finales
```

### 6.3 Despliegues Posteriores (Actualizaciones)

Cuando necesites actualizar mensajes u otros datos:

```bash
# 1. Editar script.js localmente
# 2. Guardar cambios
git add script.js
git commit -m "Update: Personalized messages for users"
git push origin main

# 3. Vercel detecta auto-maticamente el push
# 4. Redeploy automático en < 1 minuto
# 5. URL se mantiene igual
```

---

## 7. ESTRUCTURA DE ARCHIVOS DETALLADA

### 7.1 index.html
- ✓ Doctype HTML5 válido
- ✓ Meta tags de viewport y charset
- ✓ Estilos CSS embebidos (no require separado)
- ✓ Estructura semántica
- ✓ Honeypot en comentario HTML
- ✓ Carga de CryptoJS desde CDN (seguro)
- ✓ Script tag al final del body

### 7.2 script.js
- ✓ Clase CTFTerminal (POO)
- ✓ Métodos para cada comando
- ✓ Base de datos de usuarios
- ✓ Lógica de cifrado/descifrado
- ✓ Validación robusta
- ✓ Manejo de honeypots
- ✓ Detección de inyección
- ✓ Sistema de puntuación
- ✓ Historial de comandos
- ✓ Event listeners apropiados

### 7.3 robots.txt
- ✓ Rutas falsos (honeypots)
- ✓ Comentarios descriptivos
- ✓ Formato estándar

---

## 8. TESTING RECOMENDADO

### 8.1 Pruebas Funcionales
- [ ] Todos los comandos funcionan correctamente
- [ ] Desencriptación con clave correcta devuelve mensaje
- [ ] Desencriptación con clave incorrecta muestra error
- [ ] Honeypot maestro bloquea con mensaje burlón
- [ ] Backdoor se activa con comando malicioso
- [ ] Puntuación se incrementa correctamente
- [ ] Historial de comandos navega correctamente (arrow keys)
- [ ] Scroll automático funciona
- [ ] Mobile responsivo

### 8.2 Pruebas de Seguridad
- [ ] No hay logs en console de información sensible
- [ ] XSS imposible (inputs sanitizados)
- [ ] No usa localStorage/sessionStorage
- [ ] CryptoJS se carga desde CDN confiable
- [ ] Claves no están expuestas en el código (están en plain text pero educativo)

### 8.3 Pruebas de Compatibilidad
- [ ] Chrome/Chromium
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile browsers (Chrome Mobile, Safari iOS)

---

## 9. CONSIDERACIONES POST-DEPLOY

### 9.1 Monitoreo
- No requiere backend, por lo que no hay logs de servidor
- Vercel proporciona dashboard de analytics básico
- URL compartida puede rastrearse con Google Analytics (opcional)

### 9.2 Mantenimiento
- Actualización de mensajes: Editar script.js
- Cambio de claves: Editar script.js
- Agregar usuarios: Editar script.js + usuarios objeto
- Cambios visuales: Editar index.html CSS

### 9.3 Escalabilidad
- No requiere escalado (es estático)
- Vercel maneja auto-scaling automático
- CDN global de Vercel para latencia baja

---

## 10. NOTAS IMPORTANTES

⚠️ SEGURIDAD:
- Este proyecto es EDUCATIVO. Las claves NO están realmente seguras
  (están en plain text en el código). Esto es intencional para enseñanza.
- Para producción real, implementar backend con hashing de contraseñas.
- Los honeypots y backdoors son intencionales (educational purposes).

✓ PRESERVACIÓN DE ESTÁNDARES:
- Cumple con OWASP Top 10 en contexto educativo
- No interfiere con Hospedfies Amanció existente
- Frontend-only, sin cambios a infraestructura

✓ PERSONALIZACIÓN:
- Todos los mensajes pueden editarse en script.js
- Las claves pueden cambiarse sin afectar lógica
- Se puede agregar más usuarios duplicando el objeto

---

## 11. ARCHIVOS A ENTREGAR

1. index.html (Interface de terminal)
2. script.js (Lógica completa)
3. robots.txt (Honeypots)
4. Esta documentación (BRIEF.md)
5. Instrucciones de despliegue (este documento)

---

## 12. TIMELINE ESTIMADO

- Desarrollo: Completado ✓
- Testing: 15-30 minutos
- Despliegue en Vercel: 5 minutos
- **Tiempo total: < 1 hora**

---

## 13. CONTACTO Y SOPORTE

Si Antigravity necesita:
- Cambios en diseño visual
- Agregar/modificar usuarios
- Ajustar dificultad
- Integración con Hospedfies Amanció (dashboard, etc.)
- Documentación adicional

Contactar a: [EMAIL_ISMAEL]

---

FIN DEL BRIEF TÉCNICO
================================================================================
