================================================================================
GUÍA PASO A PASO: DESPLEGAR CTF EN VERCEL
Para: Antigravity | Preparado por: Ismael
================================================================================

DURACIÓN ESTIMADA: 10 minutos
DIFICULTAD: Muy fácil (requiere solo conocimientos básicos de Git)

---

## REQUISITOS PREVIOS

Asegúrate de tener:

□ Cuenta en GitHub (https://github.com) - GRATUITA
  → Si no tienes, crear una en 2 minutos
  
□ Cuenta en Vercel (https://vercel.com) - GRATUITA
  → Se conecta automáticamente con GitHub, no necesita datos adicionales
  
□ Git instalado en tu computadora
  → Descargar de: https://git-scm.com/download
  → (Windows: ejecutar installer, Mac/Linux: seguir instrucciones)

□ Editor de código (VS Code, Sublime, Notepad++, etc.)
  → VS Code recomendado (gratuito): https://code.visualstudio.com/

□ Los 3 archivos:
  ✓ index.html
  ✓ script.js
  ✓ robots.txt

---

## OPCIÓN A: DESPLIEGUE SIN USAR GIT (RECOMENDADO SI NO TIENES GIT INSTALADO)

### PASO 1: Crear repositorio en GitHub (Web)

1. Ir a https://github.com/new
2. Llenar el formulario:
   - Repository name: `ctf-master-2026`
   - Description: "CTF interactivo personalizado"
   - Visibility: "Public" ← IMPORTANTE
   - Inicializar con README: SÍ (marcar checkbox)
3. Click en "Create repository"
4. ¡LISTO! Ya tienes tu repositorio

### PASO 2: Subir archivos a GitHub (Método Manual - Sin Git)

1. En tu repositorio GitHub, click en "Add file" → "Upload files"
2. Arrastrar/soltar los 3 archivos:
   - index.html
   - script.js
   - robots.txt
3. En "Commit changes":
   - Message: "Initial commit: CTF project files"
   - Click "Commit changes"
4. ¡Los archivos están en GitHub!

### PASO 3: Conectar Vercel a GitHub

1. Ir a https://vercel.com/dashboard
2. Click en "Add New..." o "New Project"
3. Click en "Import Git Repository"
4. Vercel te pedirá conectar GitHub:
   - Click en "Install Vercel for GitHub"
   - Autorizar acceso a tus repositorios
5. Seleccionar el repositorio "ctf-master-2026"
6. Click "Import"

### PASO 4: Configurar Vercel

1. Framework: Vercel debería detectar "Static Site"
2. Root Directory: "./" (por defecto)
3. Build Command: Dejar vacío
4. Output Directory: Dejar vacío
5. Environment Variables: Dejar vacío
6. Click "Deploy"

### PASO 5: Esperar y obtener URL

1. Vercel mostrará progreso de despliegue (2-3 minutos)
2. Cuando termine, aparecerá URL como:
   ```
   https://ctf-master-2026.vercel.app
   ```
3. ¡LISTO! El proyecto está online

---

## OPCIÓN B: DESPLIEGUE CON GIT (RECOMENDADO SI TIENES GIT)

### PASO 1: Crear carpeta de proyecto

```bash
# Abrir terminal/PowerShell en la carpeta donde quieras el proyecto

mkdir ctf-master-2026
cd ctf-master-2026
```

### PASO 2: Inicializar repositorio local

```bash
git init
```

### PASO 3: Crear los archivos

En la carpeta `ctf-master-2026`, crear 3 archivos:
- index.html (copiar contenido)
- script.js (copiar contenido)
- robots.txt (copiar contenido)

### PASO 4: Crear .gitignore

En la misma carpeta, crear archivo `.gitignore` con contenido:
```
node_modules/
.DS_Store
.env
.env.local
.vercel
```

### PASO 5: Crear README.md

Crear archivo `README.md`:
```markdown
# CTF Ciberseguridad Master 2026

Proyecto interactivo de desencriptación con temática hacker retro.

## Características
- Terminal interactiva
- 4 usuarios personalizados
- Mensajes encriptados en AES-256
- Honeypots y backdoors educativos
- Sistema de puntuación

## Cómo acceder
Abre `index.html` en tu navegador o accede a la versión deployada en Vercel.

## Comandos disponibles
- `help` - Ver comandos
- `decrypt [usuario] [clave]` - Desencriptar
- `status` - Info del sistema
- `users` - Listar usuarios
- `score` - Ver puntuación
- `clear` - Limpiar pantalla
```

### PASO 6: Agregar archivos a Git

```bash
git add .
git commit -m "Initial commit: CTF project with personalized messages"
```

### PASO 7: Crear repositorio en GitHub

1. Ir a https://github.com/new
2. Nombre: `ctf-master-2026`
3. NO marcar "Initialize this repository"
4. Click "Create repository"
5. Copiar las líneas que GitHub te muestra (serán algo como):

```bash
git remote add origin https://github.com/[TU_USUARIO]/ctf-master-2026.git
git branch -M main
git push -u origin main
```

6. Pegar esas líneas en tu terminal local
7. Presionar Enter y listo

### PASO 8: Conectar Vercel (igual que Opción A)

1. https://vercel.com/dashboard
2. "Add New..." → "Import Git Repository"
3. Seleccionar "ctf-master-2026"
4. Dejar configuración por defecto
5. Click "Deploy"
6. Esperar 2-3 minutos
7. ¡Obtener URL!

---

## PASO FINAL: COMPARTIR CON AMIGOS

URL final será algo como:
```
https://ctf-master-2026.vercel.app
```

Compartir con los 4 usuarios:
```
Hola! Tengo un reto para ustedes.

Es un juego interactivo tipo CTF donde tienen que desencriptar 
mensajes personalizados que les dejé.

Aquí está el link:
https://ctf-master-2026.vercel.app

Instrucciones:
1. Abre el link
2. Escribe "help" para ver los comandos
3. Encuentra tu usuario y descifra tu mensaje

¡Que disfruten! 😎
```

---

## ACTUALIZAR EL PROYECTO DESPUÉS

Si necesitas cambiar mensajes o claves:

### Con Git (Recomendado):
```bash
# 1. Editar script.js localmente
# 2. Guardar el archivo

git add script.js
git commit -m "Update: New personalized messages"
git push origin main

# Vercel automáticamente redeploy en < 1 minuto
# URL se mantiene igual
```

### Sin Git (Manual):
```
1. En GitHub, abrir script.js
2. Click en ✏️ (editar)
3. Realizar cambios
4. Commit directamente a GitHub
5. Vercel automáticamente redeploy
```

---

## TROUBLESHOOTING (Solución de problemas)

### Problema: "Git no está instalado"
**Solución:** 
- Descargar de https://git-scm.com/download
- Instalar siguiendo asistente
- Reiniciar terminal/PowerShell

### Problema: "Vercel no detecta mi repositorio"
**Solución:**
- Asegurate que el repositorio es PUBLIC (no privado)
- Desconectar y reconectar acceso en Vercel settings
- Intentar de nuevo

### Problema: "Los archivos no están en la raíz"
**Solución:**
- Los 3 archivos deben estar en la carpeta raíz
- No en subcarpetas como /src/ o /public/
```
✓ CORRECTO:
├── index.html
├── script.js
├── robots.txt

✗ INCORRECTO:
├── src/
│   ├── index.html
│   ├── script.js
│   └── robots.txt
```

### Problema: "Terminal no funciona después de desplegar"
**Solución:**
- Actualizar la página (Ctrl+Shift+R full refresh)
- Limpiar caché del navegador
- Probar en otro navegador

### Problema: "Los mensajes no aparecen"
**Solución:**
- Verificar que los mensajes en script.js están correctos
- Verificar comillas (deben ser consistentes)
- Verificar que no hay errores de sintaxis
- Abrir DevTools (F12) → Console para ver errores

---

## VERIFICACIÓN POST-DESPLIEGUE

Después de desplegar, verificar:

□ Acceso a URL (se abre la terminal)
□ Terminal carga sin errores (F12 Console vacía)
□ Comando "help" funciona
□ Comando "users" muestra los 4 usuarios
□ Descifrar con clave correcta devuelve mensaje
□ Descifrar con clave incorrecta muestra error
□ Honeypot maestro bloquea (error 403)
□ Sistema de puntuación funciona (comando "score")
□ Mobile responsivo (ver en móvil o con F12 modo móvil)

Si todo esto funciona: ¡PERFECTO! ✓

---

## RESPALDO Y VERSIONADO

Para mantener versionamiento limpio:

```bash
# Ver historial de cambios
git log

# Ver cambios pendientes
git status

# Ver cambios específicos en un archivo
git diff script.js

# Volver a versión anterior (si necesario)
git revert [ID_COMMIT]
```

---

## DOMINIOS PERSONALIZADOS (OPCIONAL)

Si quieres un dominio personalizado en lugar de vercel.app:

1. Comprar dominio en Namecheap, GoDaddy, etc.
2. En Vercel Dashboard → Project Settings → Domains
3. Agregar dominio personalizado
4. Seguir instrucciones para apuntar DNS
5. Vercel genera certificado SSL automáticamente

Ejemplo:
```
https://ctf.tudominio.com en lugar de
https://ctf-master-2026.vercel.app
```

---

## MONITOREO Y ANALYTICS

Para ver estadísticas de acceso (OPCIONAL):

**Opción 1: Vercel Analytics (recomendado)**
- Dashboard de Vercel → Analytics
- Ver visitas, países, navegadores, etc.

**Opción 2: Google Analytics**
- Crear cuenta en google.com/analytics
- Agregar código en index.html
- Ver datos en Google Analytics

---

## PREGUNTAS FRECUENTES

**P: ¿Es seguro compartir el link?**
R: SÍ. Es un proyecto educativo. Los mensajes solo aparecen si adivinan 
las claves. El código está disponible para inspeccionar (es parte del 
juego).

**P: ¿Necesito pagar por Vercel?**
R: NO. Vercel free tier es suficiente para este proyecto. 
Límites: 100GB bandwidth/mes (más que suficiente).

**P: ¿Puedo cambiar las claves?**
R: SÍ. Edita script.js, cambia la propiedad "key" de cada usuario.

**P: ¿Puedo agregar más usuarios?**
R: SÍ. Duplica un objeto usuario en script.js y personaliza.

**P: ¿Qué pasa si alguien descubre el código fuente?**
R: Es el objetivo. Es educativo. Las claves están diseñadas para 
ser "encontrables" lógicamente.

**P: ¿Funciona offline?**
R: NO. Requiere internet para cargar CryptoJS desde CDN.

---

## PRÓXIMOS PASOS

1. ✓ Seguir esta guía
2. ✓ Desplegar en Vercel
3. ✓ Verificar que funciona
4. ✓ Compartir URL con amigos
5. ✓ ¡Disfrutar del CTF!

---

## CONTACTO

Si hay problemas:
- Antigravity support: [CONTACTO]
- Ismael (cliente): [EMAIL]

---

GUÍA COMPLETADA
Versión: 1.0 | Fecha: Junio 2026
================================================================================
