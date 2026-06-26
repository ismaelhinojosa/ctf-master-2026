================================================================================
PARA ANTIGRAVITY: INSTRUCCIONES COMPLETAS DEL PROYECTO
Cliente: Ismael | Proyecto: CTF Interactivo Personalizado
================================================================================

RESUMEN EJECUTIVO PARA ANTIGRAVITY:

Este es un pequeño proyecto frontend-only que no interfiere con 
Hospedfies Amanció. Es completamente independiente, deployable en Vercel, 
y listo para uso inmediato.

Tiempo de implementación: < 1 hora (desarrollo ya completado)
Tiempo de despliegue: < 10 minutos
Mantenimiento: Mínimo (solo cambios de mensajes ocasionales)

---

## ARCHIVOS QUE RECIBES

1. **index.html** - Interfaz de terminal retro (HTML5 + CSS3 incrustado)
2. **script.js** - Toda la lógica del juego (JavaScript Vanilla)
3. **robots.txt** - Archivo de configuración web estándar
4. **vercel.json** - Configuración para Vercel (OPCIONAL pero recomendado)
5. **.gitignore** - Archivo Git estándar
6. **README.md** - Documentación pública del repositorio
7. **BRIEF_TECNICO.md** - Especificaciones detalladas (este archivo)
8. **GUIA_DESPLIEGUE_VERCEL.md** - Paso a paso para Vercel

---

## QUÉ HACE EL PROYECTO

Es un juego interactivo tipo "Capture The Flag" donde:

1. Usuario entra a una terminal hacker retro
2. Escribe comandos (help, decrypt, etc.)
3. Intenta desencriptar 4 mensajes personalizados
4. Cada mensaje requiere adivinanza clave diferente
5. Sistema gamificado con puntuación

**Propósito:** Crear experiencia educativa/nostálgica para despedida 
del máster de ciberseguridad.

**No interfiere con:** Hospedfies Amanció, ningún sistema existente

---

## ESTRUCTURA DE ARCHIVOS EN GITHUB

```
ctf-master-2026/
├── index.html              ← INTERFAZ
├── script.js               ← LÓGICA PRINCIPAL
├── robots.txt              ← CONFIGURACIÓN WEB
├── vercel.json            ← CONFIG VERCEL (opcional)
├── .gitignore             ← GIT IGNORE
├── README.md              ← PARA GITHUB
└── DOCUMENTACION/
    ├── BRIEF_TECNICO.md
    ├── GUIA_DESPLIEGUE_VERCEL.md
    └── INSTRUCCIONES_ANTIGRAVITY.md (este archivo)
```

---

## PASOS DE IMPLEMENTACIÓN (Para Antigravity)

### FASE 1: PREPARACIÓN (5 minutos)

□ Leer este documento completamente
□ Leer BRIEF_TECNICO.md
□ Leer GUIA_DESPLIEGUE_VERCEL.md
□ Preparar credenciales GitHub/Vercel

### FASE 2: SETUP EN GITHUB (3 minutos)

□ Crear repositorio en https://github.com/new
  - Nombre: ctf-master-2026
  - Visibility: Public
  - Initialize README: Sí

□ Subir archivos (método manual o Git)
  - index.html
  - script.js
  - robots.txt
  - vercel.json
  - .gitignore
  - README.md

### FASE 3: DESPLIEGUE EN VERCEL (5 minutos)

□ Ir a https://vercel.com/dashboard
□ "Add New Project"
□ "Import Git Repository"
□ Seleccionar "ctf-master-2026"
□ Vercel detecta automáticamente proyecto estático
□ Click "Deploy"
□ Esperar 2-3 minutos
□ Copiar URL generada

### FASE 4: TESTING (5 minutos)

□ Abrir URL en navegador
□ Escribir "help" → debe mostrar menú
□ Escribir "users" → debe listar 4 usuarios
□ Intentar "decrypt julia [CLAVE_INCORRECTA]" → debe error
□ Intentar "decrypt julia DescifraloJulia2026Master" → debe funcionar
□ Abrir F12 → Elements → buscar comentario (honeypot)
□ Probar comando con || o ; (backdoor)

Si todo funciona: ¡LISTO PARA PRODUCCIÓN!

---

## PERSONALIZACIÓN DE MENSAJES

Los 4 usuarios actuales tienen mensajes PLACEHOLDER.

Para cambiar mensajes:

### Opción A: Manual en GitHub (Sin Git instalado)

1. En GitHub.com, abrir el repositorio
2. Click en "script.js"
3. Click en ✏️ (editar)
4. Buscar la sección `this.users = {`
5. Cambiar los valores en "message:" para cada usuario
6. Scroll abajo, "Commit changes"
7. Vercel automáticamente redeploy

### Opción B: Vía Git (Si Git está instalado)

```bash
# Clonar repo
git clone https://github.com/[USUARIO]/ctf-master-2026.git
cd ctf-master-2026

# Editar script.js
# [Abrir con editor, cambiar mensajes]

# Pushear cambios
git add script.js
git commit -m "Update: Personalized messages"
git push origin main

# Vercel automáticamente redeploy en < 1 minuto
```

### Qué cambiar en script.js

Buscar (Ctrl+F): `this.users = {`

```javascript
this.users = {
    'alejandro_maria': {
        key: 'UnidosEnLaCiberSeguridad2026',
        message: 'CAMBIAR ESTE TEXTO',  ← ← ← AQUÍ
        encrypted: null
    },
    'julia': {
        key: 'DescifraloJulia2026Master',
        message: 'CAMBIAR ESTE TEXTO',  ← ← ← AQUÍ
        encrypted: null
    },
    'ariana': {
        key: 'ArianaSinTiempo2026Secret',
        message: 'CAMBIAR ESTE TEXTO',  ← ← ← AQUÍ
        encrypted: null
    },
    'marta': {
        key: 'MartaRompioTodo2026Abrazo',
        message: 'CAMBIAR ESTE TEXTO',  ← ← ← AQUÍ
        encrypted: null
    }
};
```

**IMPORTANTE:** 
- Mantener las comillas (simples o dobles)
- Si el mensaje tiene comillas, escaparlas con \
- Después de guardar cambios en GitHub, Vercel se actualiza automáticamente

---

## CAMBIAR CLAVES (Opcional)

Si Ismael quiere cambiar las claves para que sean más/menos difíciles:

En script.js, cambiar la propiedad "key":

```javascript
'julia': {
    key: 'NUEVA_CLAVE_AQUI',  ← ← ← CAMBIAR AQUÍ
    message: '...',
    encrypted: null
},
```

**Recomendación:** Las claves actuales están bien diseñadas. Son:
- Adivinables lógicamente (nombre + contexto)
- Ni muy fáciles ni muy difíciles
- Educativas (enseñan sobre ingeniería social)

---

## AGREGAR MÁS USUARIOS (Avanzado)

Si Ismael quiere agregar más usuarios:

1. En script.js, duplicar un objeto usuario completo
2. Cambiar:
   - Clave del diccionario (ej: 'user_nuevo')
   - Valor key
   - Valor message
3. Guardar y pushear a GitHub

Ejemplo:
```javascript
'nuevo_usuario': {
    key: 'NuevaClaveAqui2026',
    message: 'Mensaje para nuevo usuario',
    encrypted: null
},
```

El código automáticamente encriptará el mensaje.

---

## MANTENER ESTÁNDARES DE SEGURIDAD

✓ Este proyecto PRESERVA la seguridad de Hospedfies Amanció porque:

1. Es completamente independiente (no modifica nada existente)
2. Frontend-only (sin backend)
3. Sin acceso a datos sensibles
4. Sin dependencias que creen vulnerabilidades
5. CryptoJS es librería auditada y confiable
6. Cumple OWASP Top 10 en contexto educativo

⚠️ Consideraciones:
- Las "claves" están en plain text (intencional educativo)
- Este proyecto es SOLO para uso educativo/personal
- NO usar estructura similar para datos reales sin backend seguro
- Si cambian código, verificar que no introduce vulnerabilidades

---

## MONITOREO POST-DEPLOY

Después de desplegar:

✓ URL funciona sin errores (Ctrl+Shift+I Console debe estar vacía)
✓ Terminal carga en < 2 segundos
✓ Todos los comandos responden correctamente
✓ Mensajes aparecen cuando se descifran
✓ Responsive en móvil y desktop

**Dashboard de Vercel:**
- Ir a https://vercel.com/dashboard/[PROYECTO]
- Ver analytics básico (visitas, países, navegadores)
- Ver logs de despliegue si hay errores

---

## MANTENIMIENTO

### Cambios Frecuentes
- Actualizar mensajes
- Cambiar claves
- Modificar descripción

**Cómo:** Editar script.js vía GitHub UI o Git local → push → Vercel redeploy automático

### Cambios Visuales
- Colores, fuentes, layout
- Editar index.html → push → redeploy

### Agregar Funcionalidades
- Más usuarios
- Más comandos
- Sistema de puntuación diferente

**Cómo:** Editar script.js → push → redeploy

**Tiempo de redeploy:** < 2 minutos siempre

---

## TROUBLESHOOTING PARA ANTIGRAVITY

### Error: "Repository not found"
- Verificar que repositorio es PUBLIC (no privado)
- Verificar nombre exacto del repo
- Reconectar acceso en Vercel settings

### Error: "Terminal no carga"
- Limpiar caché del navegador (Ctrl+Shift+Del)
- Probar en navegador diferente
- Verificar que CryptoJS CDN está accesible
- Abrir F12 Console para ver errores específicos

### Error: "Mensajes no aparecen"
- Verificar sintaxis en script.js (comillas, llaves)
- Verificar que no hay errores en console
- Re-desplegar desde Vercel dashboard

### Error: "Descifrado no funciona"
- Verificar que clave es exacta (mayúsculas/minúsculas)
- Verificar que mensaje no está vacío
- Limpiar caché

### Solución Rápida para Cualquier Error
```
1. Ir a Vercel Dashboard
2. Seleccionar proyecto
3. Redeploy button → Redeploy
4. Esperar 2-3 minutos
5. Limpiar caché navegador
6. Intentar de nuevo
```

---

## COMUNICACIÓN CON ISMAEL

Para cambios o actualizaciones:

1. **Cambios rápidos (mensajes):**
   - Ismael proporciona nuevos textos
   - Antigravity edita script.js
   - Commit y push
   - ¡Listo en < 5 minutos!

2. **Cambios moderados (diseño visual):**
   - Ismael proporciona requisitos
   - Antigravity edita index.html CSS
   - Test en múltiples navegadores
   - Commit y push
   - ¡Listo en < 30 minutos!

3. **Cambios grandes (funcionalidad):**
   - Requiere planning
   - Puede tomar horas
   - Requiere testing extenso

---

## DOCUMENTACIÓN PARA USUARIOS FINALES

Los 4 usuarios (alejandro_maria, julia, ariana, marta) recibirán:

```
Hola! Tengo un reto para ustedes.

Es un juego interactivo tipo CTF donde tienen que desencriptar 
mensajes personalizados que les dejé.

Link: [URL_VERCEL]

Instrucciones:
1. Abre el link
2. Escribe "help" para ver los comandos
3. Usa "decrypt [tu_nombre] [clave]" para intentar
4. ¡Que disfruten!
```

---

## INTEGRACIÓN CON HOSPEDFIES AMANCIÓ

Este proyecto es COMPLETAMENTE INDEPENDIENTE de Hospedfies Amanció.

Si Ismael quisiera integrarlo en el futuro (opcional):
- Podría linkearlo desde dashboard de cliente
- Pero no es necesario
- No comparte datos ni infraestructura
- Totalmente separado en Vercel

---

## ROADMAP (Para Futuros Sprints)

Mejoras potenciales (si Ismael lo solicita):
- [ ] Leaderboard con puntuaciones
- [ ] Más usuarios/niveles
- [ ] Sistema de hints/pistas
- [ ] Integración con Discord (notificaciones)
- [ ] Soporte para múltiples idiomas
- [ ] Animaciones mejoradas
- [ ] Mobile app version

---

## PRESUPUESTO/COSTOS

Para Antigravity y Ismael:

**Costos:**
- GitHub: Gratuito
- Vercel: Gratuito (free tier suficiente)
- CryptoJS CDN: Gratuito
- **Total: $0/mes**

**Mantenimiento:**
- Minimal (ocasionalmente actualizar mensajes)
- Tiempo estimado por actualización: 5-15 minutos
- Uptime: 99.95% (garantía Vercel)

---

## TÉRMINOS Y CONDICIONES

✓ El proyecto es educativo
✓ Sin licencias comerciales
✓ Libre para modificar internamente
✓ No requiere créditos en público
✓ Derecho de Ismael mantener proyecto privado o público

---

## PREGUNTAS FRECUENTES PARA ANTIGRAVITY

**P: ¿Cuánto cuesta mantener esto?**
R: Nada. Vercel free tier es suficiente.

**P: ¿Qué pasa si Vercel cae?**
R: Muy unlikely. Vercel tiene 99.95% uptime. Pero si pasa, proyecto 
sigue en GitHub. Pode redeploy en otro proveedor en < 5 minutos.

**P: ¿Se puede hackear?**
R: No hay datos sensibles. El código está públicamente disponible. 
Es educativo. Las "claves" no son reales, es un juego.

**P: ¿Puedo modificar el código?**
R: SÍ. Es open source (MIT license). Puedes hacer fork, modificar, 
usar como base para otros proyectos.

**P: ¿Necesita backend?**
R: NO. Es completamente frontend-only. Perfecto para Vercel.

**P: ¿Soporta base de datos?**
R: NO necesita. Datos en memoria (se pierden al recargar). 
Si quieres persistencia, agregar Firebase/Supabase (más complejo).

---

## CONTACTO Y ESCALATION

Para Antigravity:
- Problemas técnicos: [CONTACTO_ANTIGRAVITY]
- Cambios solicitados por Ismael: [CONTACTO_ISMAEL]
- Bugs o seguridad: [CONTACTO_SOPORTE]

---

## CHECKLIST FINAL PARA ANTIGRAVITY

Antes de entregar a Ismael:

□ Proyecto deployado en Vercel
□ URL funciona sin errores
□ Todos los comandos testiados
□ Responsive en móvil
□ F12 Console vacía (sin errores)
□ Mensajes se descifran correctamente
□ Honeypot maestro funciona
□ Backdoor se activa con inyección
□ Sistema de puntuación funciona
□ GitHub repo bien documentado
□ README.md completo
□ .gitignore presente
□ vercel.json bien configurado

✓ SI TODO ESTÁ VERDE: ¡LISTO PARA PRODUCCIÓN!

---

## PRÓXIMOS PASOS

1. Leer GUIA_DESPLIEGUE_VERCEL.md
2. Seguir pasos de despliegue
3. Testear completamente
4. Entregar URL a Ismael
5. Ismael comparte con sus amigos
6. ¡Disfrutar del CTF!

---

DOCUMENTO COMPLETADO
Versión: 1.0 | Para: Antigravity | Fecha: Junio 2026
================================================================================
