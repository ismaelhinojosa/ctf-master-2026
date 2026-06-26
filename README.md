# 🔐 CTF Ciberseguridad Master 2026

Proyecto interactivo de tipo **Capture The Flag (CTF)** con temática hacker retro. Un mini-juego educativo donde 4 usuarios deben desencriptar mensajes personalizados usando AES-256.

![Terminal Screenshot](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black)

---

## 🎯 Características Principales

✨ **Terminal interactiva** con estética hacker retro (años 90)
🔐 **Mensajes encriptados** en AES-256 con CryptoJS
👤 **4 usuarios personalizados** con mensajes individuales
🎮 **Sistema de gamificación** con puntuación
🚨 **Honeypots educativos** para enseñanza en seguridad
🔓 **Backdoor intencional** para mostrar vulnerabilidades
📱 **Responsive design** - Funciona en móvil, tablet, desktop
⚡ **Frontend-only** - Sin dependencias complejas

---

## 🚀 Quickstart

### Acceso Online (Recomendado)
```
https://ctf-master-2026.vercel.app
```

### Acceso Local
1. Descargar archivos del repositorio
2. Abrir `index.html` en navegador
3. ¡Listo!

---

## 📚 Cómo Jugar

### Paso 1: Ver comandos disponibles
```bash
help
```

### Paso 2: Listar usuarios
```bash
users
```

### Paso 3: Intentar desencriptar
```bash
decrypt [usuario] [clave]
```

**Ejemplo:**
```bash
decrypt julia MiClaveSecreta2026
```

### Paso 4: Si aciertas, recibirás tu mensaje personalizado 🎉

---

## 🔑 Usuarios y Claves (Para Debugging)

| Usuario | Clave | Mensaje |
|---------|-------|---------|
| alejandro_maria | `UnidosEnLaCiberSeguridad2026` | Personalizado |
| julia | `DescifraloJulia2026Master` | Personalizado |
| ariana | `ArianaSinTiempo2026Secret` | Personalizado |
| marta | `MartaRompioTodo2026Abrazo` | Personalizado |

---

## 🎮 Comandos Disponibles

| Comando | Uso | Descripción |
|---------|-----|-------------|
| `help` | `help` | Muestra menú de ayuda |
| `clear` | `clear` | Limpia la pantalla |
| `status` | `status` | Información del sistema |
| `users` | `users` | Lista usuarios disponibles |
| `score` | `score` | Muestra puntuación actual |
| `decrypt` | `decrypt [usuario] [clave]` | Desencripta un mensaje |

---

## 🔓 Características Avanzadas

### Honeypot 1: Clave Maestra Falsa
- Ubicación: Comentario HTML (F12 → Elements)
- Si la usas: Recibos error 403 burlón
- **Propósito educativo:** Mostrar que lo "visible" no es seguro

### Honeypot 2: robots.txt Falso
- Simula rutas administrativas
- **Propósito educativo:** Enseñanza de enumeración de directorios

### Backdoor Intencional
- **Trigger:** Comando con `||` o `;` + palabras `cat`, `bypass`, `flag`
- **Efecto:** Volcado completo de datos (SYSTEM DUMP)
- **Bonus:** +50 puntos
- **Propósito educativo:** Demostrar inyección de comandos

---

## 📊 Sistema de Puntuación

- Desencriptar usuario: **+25 puntos**
- Explotar backdoor: **+50 puntos bonus**
- Usar comando `clear`: **+5 puntos**
- **Máximo teórico:** 150 puntos

---

## 🛠️ Estructura Técnica

```
ctf-master-2026/
├── index.html          # Interfaz de terminal
├── script.js           # Lógica de juego
├── robots.txt          # Honeypots
├── vercel.json         # Configuración Vercel
├── .gitignore         # Git ignore patterns
├── README.md          # Este archivo
└── DOCUMENTACIÓN/
    ├── BRIEF_TECNICO.md
    └── GUIA_DESPLIEGUE_VERCEL.md
```

---

## 🔧 Stack Tecnológico

- **Frontend:** HTML5 + CSS3 + JavaScript Vanilla (ES6+)
- **Criptografía:** CryptoJS 4.1.1 (CDN)
- **Hosting:** Vercel (despliegue automático)
- **Navegadores:** Chrome, Firefox, Safari, Edge (versiones recientes)

---

## 🌐 Despliegue

### Opción 1: Despliegue Automático (Recomendado)

1. Fork este repositorio
2. Conectar con Vercel (https://vercel.com)
3. Click "Deploy"
4. ¡Listo en < 5 minutos!

### Opción 2: Despliegue Manual

```bash
# Clonar repositorio
git clone https://github.com/tu-usuario/ctf-master-2026.git
cd ctf-master-2026

# Pushear cambios (si los haces)
git add .
git commit -m "Changes description"
git push origin main

# Vercel detecta automáticamente y redeploy
```

Ver detalles en: `GUIA_DESPLIEGUE_VERCEL.md`

---

## 🎨 Personalización

### Cambiar Mensajes
Editar `script.js`, sección `this.users`:

```javascript
'julia': {
    key: 'DescifraloJulia2026Master',
    message: 'TU MENSAJE AQUÍ',  // ← Cambiar esto
    encrypted: null
},
```

### Cambiar Claves
```javascript
'julia': {
    key: 'NUEVA_CLAVE_AQUI',  // ← Cambiar esto
    message: '...',
    encrypted: null
},
```

### Agregar Usuarios
Duplicar un usuario y personalizar.

---

## 🔐 Consideraciones de Seguridad

⚠️ **Este proyecto es EDUCATIVO**

- Las claves están en plain text (intencional para aprendizaje)
- No usar en producción con datos sensibles
- Los honeypots y backdoors son intencionales (teaching purposes)
- Para producción real, implementar:
  - Backend con hashing de contraseñas
  - Rate limiting
  - HTTPS obligatorio
  - Logs de seguridad

✓ Cumple con OWASP Top 10 en contexto educativo
✓ No interfiere con infraestructura existente
✓ Frontend-only, sin cambios a backend

---

## 📱 Compatibilidad

- ✅ Desktop (Chrome, Firefox, Safari, Edge)
- ✅ Mobile (iOS Safari, Chrome Mobile)
- ✅ Tablet (iPad, Android tablets)
- ✅ Pantallas pequeñas (<480px)
- ✅ Pantallas grandes (>1920px)

---

## 🐛 Troubleshooting

### Terminal no aparece
- Actualizar página (Ctrl+Shift+R)
- Limpiar caché
- Probar en otro navegador

### Mensajes no aparecen
- Verificar sintaxis en script.js
- Abrir DevTools (F12) → Console
- Verificar que no hay errores de sintaxis

### Clave no funciona
- Verificar mayúsculas/minúsculas en clave
- Usar la clave exacta del código
- Revisa el histórico con Arrow Up

---

## 📞 Soporte

- **Antigravity:** [contacto]
- **Cliente:** Ismael
- **Reportar bugs:** Crear issue en GitHub

---

## 📄 Licencia

MIT License - Ver LICENSE.md para detalles

---

## 📈 Estadísticas

- Lines of Code: ~800
- Time to Deploy: < 5 minutos
- Learning Value: ⭐⭐⭐⭐⭐
- Fun Factor: ⭐⭐⭐⭐

---

## 🎓 Propósito Educativo

Este proyecto enseña:
- ✓ Criptografía básica (AES-256)
- ✓ Reconocimiento y enumeración
- ✓ Honeypots y trampas de seguridad
- ✓ Inyección de comandos
- ✓ Importancia de validación de entrada
- ✓ Cómo NO hacer seguridad (ejemplos negativos)

---

## 🚀 Próximas Mejoras Potenciales

- [ ] Leaderboard global con puntuaciones
- [ ] Sistema de tiempo/cronómetro
- [ ] Más niveles de dificultad
- [ ] Integración con Google Analytics
- [ ] Más usuarios/mensajes
- [ ] Efectos visuales mejorados
- [ ] Soporte para múltiples idiomas

---

**Made with ❤️ by Ismael | Powered by Antigravity**

---

*Última actualización: Junio 2026*
*Versión: 1.0 - Stable*
