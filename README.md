# 🍞 Trabajo Final Integrador VI - Panadería Alicia

Sitio web académico e informativo del proyecto de mejora de calidad y rentabilidad aplicado en la Panadería Alicia.

## 📋 Descripción del Proyecto

Este sitio presenta un estudio completo de ingeniería industrial aplicado en una microempresa dedicada a la producción artesanal de pan. El proyecto incluye:

- Control Estadístico de Procesos (CEP)
- Procedimientos Operativos Estándar (SOP)
- Análisis financiero y de costos
- Estrategias de branding y marketing
- Propuestas de mejora integral
- Modelos 3D interactivos con soporte AR
- Galería fotográfica del negocio

## 🚀 Tecnologías Utilizadas

- **React 18** - Framework de UI
- **Vite** - Build tool y dev server
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos utility-first
- **Shadcn/ui** - Componentes de UI
- **Framer Motion** - Animaciones
- **Model Viewer** - Visualización 3D con AR
- **React Lightbox** - Galería de imágenes
- **Three.js** - Renderizado 3D

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Navigation.tsx          # Barra de navegación responsive
│   ├── Hero.tsx               # Sección hero principal
│   ├── About.tsx              # Sobre el proyecto
│   ├── ProcessDiagnostic.tsx  # Diagnóstico del proceso
│   ├── StatisticalControl.tsx # Control Estadístico (CEP)
│   ├── StandardProcedure.tsx  # Procedimiento Operativo (SOP)
│   ├── FinancialAnalysis.tsx  # Análisis financiero
│   ├── Improvement.tsx        # Propuestas de mejora
│   ├── Gallery.tsx            # Galería de imágenes
│   ├── ModelViewer3D.tsx      # Visor de modelos 3D
│   ├── Results.tsx            # Resultados y conclusiones
│   ├── Contact.tsx            # Contacto y créditos
│   ├── Footer.tsx             # Pie de página
│   └── ui/                    # Componentes de Shadcn
├── assets/                    # Imágenes generadas
├── pages/
│   └── Index.tsx              # Página principal
└── index.css                  # Sistema de diseño

public/
├── images/                    # (Agregar tus imágenes aquí)
├── models/                    # (Agregar tus modelos 3D aquí)
├── robots.txt
└── sitemap.xml
```

## 🎨 Sistema de Diseño

El sitio utiliza una paleta de colores cálidos inspirada en panadería artesanal:

- **Primary:** Dorado trigo (#D4A547)
- **Secondary:** Madera cálida (#E8D5C4)
- **Accent:** Crema (#F5E9D7)
- **Muted:** Tonos suaves neutros

Tipografía:
- **Títulos:** Playfair Display (serif elegante)
- **Cuerpo:** Inter (sans-serif moderna)

## 🛠️ Instalación y Desarrollo

### Requisitos previos
- Node.js 18+ 
- npm o bun

### Pasos de instalación

```bash
# Clonar el repositorio
git clone <URL_DEL_REPOSITORIO>

# Navegar al directorio
cd panaderia-alicia

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:8080`

## 📝 Personalización

### 1. Actualizar Imágenes de la Galería

Coloca tus fotografías en `public/images/` y actualiza el archivo `src/components/Gallery.tsx`:

```typescript
const images = [
  {
    src: "/images/tu-imagen.jpg",
    alt: "Descripción",
    title: "Título",
  },
  // ... más imágenes
];
```

### 2. Agregar Modelos 3D

1. Coloca archivos `.glb` y `.usdz` en `public/models/`
2. Actualiza `src/components/ModelViewer3D.tsx`:

```typescript
const models = [
  {
    title: "Pan Simple Bonete",
    glbUrl: "/models/tu-modelo.glb",
    usdzUrl: "/models/tu-modelo.usdz",
    poster: "/images/preview.jpg",
    // ... especificaciones
  },
];
```

### 3. Actualizar Información del Equipo

Edita `src/components/Contact.tsx`:

```typescript
const teamMembers = [
  "Nombre Completo 1",
  "Nombre Completo 2",
  // ...
];
```

### 4. Cambiar Colores (Opcional)

Modifica las variables CSS en `src/index.css`:

```css
:root {
  --primary: 42 88% 55%; /* Tu color HSL */
  --accent: 38 60% 85%;
  /* ... más colores */
}
```

## 📱 Características

### Responsive Design
- ✅ Optimizado para móvil, tablet y desktop
- ✅ Navegación adaptativa con menú hamburguesa
- ✅ Imágenes con lazy loading

### SEO Optimizado
- ✅ Meta tags completos (Open Graph, Twitter Cards)
- ✅ Schema.org JSON-LD
- ✅ Sitemap.xml y robots.txt
- ✅ URLs semánticas

### Interactividad
- ✅ Animaciones suaves con Framer Motion
- ✅ Scroll suave entre secciones
- ✅ Galería con lightbox y zoom
- ✅ Modelos 3D rotables con soporte AR
- ✅ Formulario de contacto con validación

### Accesibilidad
- ✅ Etiquetas ARIA adecuadas
- ✅ Alto contraste de colores
- ✅ Navegación por teclado
- ✅ Alt text en todas las imágenes

## 🚢 Despliegue

### Opción 1: Lovable (Recomendado)
1. Haz clic en "Publish" en la interfaz de Lovable
2. El sitio se desplegará automáticamente

### Opción 2: Netlify
1. Conecta tu repositorio de GitHub
2. Build command: `npm run build`
3. Publish directory: `dist`

### Opción 3: Vercel
1. Importa el proyecto desde GitHub
2. Vercel detectará automáticamente la configuración de Vite

## 📖 Documentación Adicional

- [GUIA_ACTUALIZACION.md](./GUIA_ACTUALIZACION.md) - Guía detallada para personalizar contenido
- [Documentación de Lovable](https://docs.lovable.dev/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Shadcn/ui](https://ui.shadcn.com/)

## 🎓 Créditos

**Universidad:** [Nombre de tu Universidad]  
**Facultad:** Ingeniería  
**Carrera:** Ingeniería Industrial  
**Curso:** Trabajo Final Integrador VI  
**Año:** 2024

**Equipo de desarrollo:**
- Estudiante 1
- Estudiante 2
- Estudiante 3
- Estudiante 4

**Empresa:** Panadería Alicia

## 📄 Licencia

Este proyecto fue desarrollado con fines académicos.

---

**Última actualización:** Diciembre 2024

Para soporte o consultas, revisa la sección de contacto en el sitio web.
