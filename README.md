# 🎨 Portfolio Minimalista

Un portafolio web moderno y minimalista inspirado en el diseño de Constance Souville, con énfasis en tipografía elegante, animaciones suaves y una estética profesional.

## ✨ Características

- **Diseño Minimalista**: Enfoque en tipografía grande y espacios en blanco
- **Animaciones Suaves**: Transiciones elegantes y efectos de scroll
- **Totalmente Responsive**: Optimizado para todos los dispositivos
- **Rendimiento Optimizado**: Vanilla JavaScript sin dependencias
- **SEO Friendly**: Estructura semántica y meta tags apropiados
- **Accesible**: Navegación por teclado y mejores prácticas de accesibilidad

## 🚀 Cómo Usar

### Opción 1: Abrir Directamente
Simplemente abre `index.html` en tu navegador favorito.

### Opción 2: Servidor Local (Recomendado)
Para una mejor experiencia de desarrollo:

```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (si tienes npx)
npx serve

# Con PHP
php -S localhost:8000
```

Luego visita `http://localhost:8000` en tu navegador.

## 📝 Personalización

### 1. Información Personal
Edita `index.html` y reemplaza todos los placeholders marcados con `[...]`:

- `[Tu Nombre]` - Tu nombre completo
- `[Tu Título Profesional]` - Ej: "Full Stack Developer", "Frontend Engineer"
- `[trabajando en X]` - Tu trabajo actual
- `[Tu Ciudad]` - Tu ubicación
- `tu@email.com` - Tu email

### 2. Sección About
En la sección `#about`:
- Actualiza tu descripción profesional
- Modifica las tecnologías que usas
- Edita el timeline con tu experiencia laboral

### 3. Proyectos
Para cada proyecto en la sección `#projects`:
- Reemplaza `[Nombre del Proyecto]`
- Actualiza `[Empresa/Cliente]` y `[Año]`
- Cambia el `href="#"` por el link real del proyecto
- Agrega imágenes reales en la carpeta `assets/` y actualiza las referencias

### 4. Redes Sociales
En la sección `#contact`, actualiza los links:
- Twitter: `@tuusuario`
- Email: `tu@email.com`
- LinkedIn: `in/tuusuario`
- GitHub: `@tuusuario`

### 5. Colores y Estilos
Edita las variables CSS en `style.css` (líneas 1-30):

```css
:root {
    --color-bg: #ffffff;        /* Color de fondo */
    --color-text: #0a0a0a;      /* Color de texto principal */
    --color-accent: #0066ff;    /* Color de acento */
    /* ... más variables */
}
```

## 📁 Estructura del Proyecto

```
portfolio/
├── index.html          # Estructura HTML principal
├── style.css           # Estilos y diseño
├── script.js           # Interactividad y animaciones
├── assets/             # Imágenes y recursos
│   └── (tus imágenes aquí)
└── README.md           # Este archivo
```

## 🎨 Agregar Imágenes de Proyectos

1. Guarda tus imágenes en la carpeta `assets/`
2. En `index.html`, reemplaza el placeholder:

```html
<!-- Antes -->
<div class="project-image-placeholder">
    <span class="project-placeholder-text">[Imagen del Proyecto]</span>
</div>

<!-- Después -->
<img src="assets/proyecto1.jpg" alt="Descripción del proyecto" 
     style="width: 100%; height: 100%; object-fit: cover;">
```

## 🌟 Características Técnicas

### Tecnologías Utilizadas
- **HTML5**: Estructura semántica
- **CSS3**: Variables CSS, Grid, Flexbox, Animaciones
- **JavaScript (Vanilla)**: Sin frameworks, puro y optimizado
- **Google Fonts**: Inter font family

### Animaciones Incluidas
- Fade-in en hero section
- Scroll-triggered animations con Intersection Observer
- Hover effects en proyectos y tarjetas sociales
- Progress bar de scroll
- Parallax sutil en hero
- Smooth scroll navigation

### Responsive Breakpoints
- Desktop: > 768px
- Tablet: 768px
- Mobile: < 480px

## 🔧 Mejoras Opcionales

### Efecto de Cursor Trail
Descomenta la sección en `script.js` (líneas ~150-180) para activar un efecto de trail del cursor.

### Agregar Más Proyectos
Copia y pega el bloque de `<article class="project-card">` en `index.html` y personaliza.

### Dark Mode
Agrega estas variables CSS y un toggle button:

```css
[data-theme="dark"] {
    --color-bg: #0a0a0a;
    --color-text: #ffffff;
    --color-hover: #1a1a1a;
}
```

## 📱 Testing

Prueba tu portafolio en:
- ✅ Chrome/Edge
- ✅ Firefox
- ✅ Safari
- ✅ Dispositivos móviles

## 🚀 Deployment

### GitHub Pages
1. Sube tu código a GitHub
2. Ve a Settings → Pages
3. Selecciona la rama `main` y carpeta `root`
4. Tu sitio estará en `https://tuusuario.github.io/portfolio`

### Netlify
1. Arrastra la carpeta del proyecto a [Netlify Drop](https://app.netlify.com/drop)
2. ¡Listo! Tu sitio está en línea

### Vercel
```bash
npx vercel
```

## 💡 Tips

- **Imágenes**: Usa formatos modernos (WebP) para mejor rendimiento
- **SEO**: Actualiza los meta tags en el `<head>` de `index.html`
- **Analytics**: Agrega Google Analytics o similar si lo necesitas
- **Performance**: Comprime tus imágenes antes de subirlas

## 📄 Licencia

Este proyecto es de código abierto. Siéntete libre de usarlo y modificarlo para tu propio portafolio.

## 🙏 Créditos

Diseño inspirado en [Constance Souville](https://constancesouville.com/)

---

**¿Necesitas ayuda?** Revisa el código - está bien comentado y organizado para facilitar la personalización.

¡Buena suerte con tu portafolio! 🎉
