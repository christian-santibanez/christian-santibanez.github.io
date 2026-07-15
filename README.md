# christian-santibanez.github.io

Portafolio personal de **Christian Santibáñez** — DevSecOps Engineer · AppSec · Santiago, Chile.

🔗 **[christian-santibanez.github.io](https://christian-santibanez.github.io)**

---

## Descripción

Single Page Application (SPA) construida con React 18 y Vite, diseñada como portafolio profesional con énfasis en identidad de marca, rendimiento y accesibilidad. Incluye modo oscuro/claro persistente, scroll suave con Lenis, diseño responsivo mobile-first y formulario de contacto con validación por captcha.

---

## Stack técnico

| Tecnología | Versión | Rol |
|---|---|---|
| React | 18.3.1 | UI framework |
| Vite | 5.3.4 | Build tool y dev server |
| Tailwind CSS | 3.4.6 | Utility-first CSS |
| Lenis | 1.3.11 | Smooth scroll |
| gh-pages | 6.3.0 | Deploy a GitHub Pages |
| ESLint | 8.57.0 | Linting |

---

## Arquitectura del proyecto

```
christian-santibanez/
├── public/
│   └── assets/          # Imágenes, iconos, CV en PDF
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         # Navegación fija con scroll detection, dark mode toggle, menú mobile
│   │   ├── Header.jsx         # Hero section con foto, título, badge de disponibilidad y CTAs
│   │   ├── About.jsx          # Biografía, tarjetas de info, grid de herramientas
│   │   ├── Services.jsx       # Grid de áreas de trabajo con links a GitHub
│   │   ├── Certifications.jsx # Grid de certificaciones verificables (Credly)
│   │   ├── Work.jsx           # Grid de proyectos con modal de detalle
│   │   ├── Contact.jsx        # Formulario con Web3Forms + hCaptcha
│   │   ├── Footer.jsx         # Logo, email, links sociales
│   │   └── LenisScroll.jsx    # Inicialización y cleanup de Lenis smooth scroll
│   ├── App.jsx                # Composición de secciones + ScrollToTop button
│   ├── main.jsx               # Entry point React
│   └── index.css              # Directivas Tailwind base/components/utilities
├── index.html                 # HTML base con meta SEO, Open Graph, fuentes Google
├── vite.config.js             # Configuración Vite con base: '/'
├── tailwind.config.js         # Tema extendido: colores, fuentes, sombras, grid
├── postcss.config.js          # PostCSS con Tailwind y Autoprefixer
└── package.json               # Scripts: dev, build, lint, predeploy, deploy
```

---

## Características

### UI / UX
- **Modo oscuro/claro** — toggle manual con persistencia en `localStorage` y detección automática via `prefers-color-scheme`
- **Smooth scroll** — Lenis con `duration: 1.2`, offset de anchors `-100px` para compensar navbar fija
- **ScrollToTop** — botón flotante que aparece tras 400px de scroll con animación suave
- **Hover states** — consistentes en todos los elementos interactivos con color de marca `#2d9cbc`
- **Transiciones** — `duration-300/500` en tarjetas, botones e iconos

### Responsivo
- Mobile-first con breakpoints `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)
- Navbar con menú hamburguesa en móvil (side drawer animado)
- Grids adaptativos: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
- Flex wrap en listas de iconos de herramientas

### SEO y accesibilidad
- `lang="es"` en el `<html>`
- `<title>` descriptivo con nombre y rol profesional
- `meta description` optimizada para buscadores
- Open Graph tags para LinkedIn, WhatsApp y Slack
- `alt` descriptivos en imágenes de contenido
- `aria-label` en el botón ScrollToTop
- `rel="noopener noreferrer"` en todos los links externos

### Formulario de contacto
- Integración con **Web3Forms** (serverless, sin backend propio)
- Validación de **hCaptcha** cargado dinámicamente via script injection
- Mensajes de resultado en español
- Reset automático del formulario tras envío exitoso

### Proyectos — modal de detalle
- Grid de tarjetas con imagen de fondo, `aspect-square` y overlay animado
- Modal con descripción, highlights técnicos, stack de tecnologías y links a GitHub / sitio en producción
- Cierre por clic en overlay o botón X

---

## Configuración de Tailwind

```js
theme: {
    extend: {
        colors: {
            lightHover: '#fcf4ff',   // hover tarjetas modo claro
            darkHover:  '#2a004a',   // hover tarjetas modo oscuro
            darkTheme:  '#11001F',   // fondo modo oscuro
        },
        fontFamily: {
            Outfit: ['Outfit', 'sans-serif'],  // UI principal
            Ovo:    ['Ovo', 'serif'],           // títulos y textos elegantes
        },
        boxShadow: {
            black: '4px 4px 0 #000',
            white: '4px 4px 0 #fff',
        },
    },
    darkMode: 'selector',  // activado via clase .dark en <html>
}
```

---

## Colores de marca

| Token | Valor | Uso |
|---|---|---|
| Brand primary | `#1F4E5F` | Botones CTA principales (hablemos, Enviar ahora) |
| Brand hover | `#2a6477` | Hover de botones CTA |
| Brand accent | `#2d9cbc` | Punto del logo, hover de iconos sociales y links |

---

## Scripts

```bash
npm run dev        # Servidor de desarrollo en localhost:5173
npm run build      # Build de producción en /dist
npm run preview    # Preview del build local
npm run lint       # ESLint sobre archivos JS/JSX
npm run deploy     # Build + push a rama gh-pages (GitHub Pages)
```

---

## Deploy

El sitio se despliega en **GitHub Pages** desde la rama `gh-pages` generada automáticamente por el script `deploy`.

```bash
npm run deploy
```

`predeploy` ejecuta `npm run build` automáticamente antes del deploy. El `base: '/'` en `vite.config.js` es correcto para repos de usuario (`username.github.io`).

---

## Desarrollo local

```bash
# Clonar el repositorio
git clone https://github.com/christian-santibanez/christian-santibanez.github.io.git
cd christian-santibanez.github.io

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

---

## Licencia

MIT — Christian Santibáñez
