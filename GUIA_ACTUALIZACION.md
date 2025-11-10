# Guía de Actualización - Panadería Alicia

Esta guía explica cómo personalizar el contenido del sitio web con tus propios textos, imágenes y modelos 3D.

---

## 📝 1. Actualizar Textos e Información

### Información del Equipo
**Archivo:** `src/components/Contact.tsx`

Busca la sección `teamMembers` (línea ~20) y actualiza con los nombres reales:

```typescript
const teamMembers = [
  "Juan Pérez García",
  "María González López",
  "Carlos Rodríguez Sánchez",
  "Ana Martínez Fernández",
];
```

También actualiza:
- Nombre de la universidad (línea ~80)
- Información de contacto de la panadería (Footer.tsx, línea ~60)

---

## 🖼️ 2. Actualizar Imágenes de la Galería

### Paso 1: Preparar tus imágenes
- Formato recomendado: **JPG** o **WebP**
- Dimensiones mínimas: **800x600 px**
- Tamaño máximo por imagen: **500 KB**
- Optimiza las imágenes antes de subirlas (usa herramientas como TinyPNG o Squoosh)

### Paso 2: Subir las imágenes
1. Crea la carpeta `public/images/` si no existe
2. Coloca tus fotografías en esta carpeta con nombres descriptivos:
   - `interior-panaderia.jpg`
   - `proceso-horneado.jpg`
   - `productos-finales.jpg`
   - `equipo-trabajo.jpg`
   - `control-calidad.jpg`
   - `empaque.jpg`

### Paso 3: Actualizar el código
**Archivo:** `src/components/Gallery.tsx`

Busca el array `images` (línea ~10) y actualiza las URLs:

```typescript
const images = [
  {
    src: "/images/interior-panaderia.jpg",
    alt: "Interior de Panadería Alicia",
    title: "Espacio de producción",
  },
  {
    src: "/images/proceso-horneado.jpg",
    alt: "Proceso de horneado",
    title: "Pan recién horneado",
  },
  // ... continúa con las demás imágenes
];
```

---

## 📦 3. Actualizar Modelos 3D

### Paso 1: Preparar los archivos 3D

Necesitas **dos formatos** por cada modelo:
- **GLB** (para Android y navegadores web)
- **USDZ** (para iOS/iPhone con AR)

**Recomendaciones:**
- Tamaño máximo por archivo: **5 MB**
- Optimiza los modelos (reduce polígonos si es necesario)
- Incluye texturas de calidad pero comprimidas

**Software sugerido para crear modelos:**
- Blender (gratuito y completo)
- SketchUp (versión gratuita disponible)
- Apps móviles de escaneo 3D (Polycam, Scaniverse)

### Paso 2: Exportar los modelos

**En Blender:**
1. File → Export → glTF 2.0 (.glb)
2. Activa "Apply Modifiers" y "Export"
3. Para USDZ, usa herramientas online de conversión o Reality Converter de Apple

### Paso 3: Subir los archivos
1. Crea la carpeta `public/models/` si no existe
2. Coloca tus archivos:
   - `pan-bonete.glb`
   - `pan-bonete.usdz`
   - `empaque.glb`
   - `empaque.usdz`

### Paso 4: Crear imágenes de vista previa (poster)
- Toma capturas de pantalla de tus modelos 3D
- Guárdalas como `pan-bonete-preview.jpg` y `empaque-preview.jpg`
- Colócalas en `public/images/`

### Paso 5: Actualizar el código
**Archivo:** `src/components/ModelViewer3D.tsx`

Busca el array `models` (línea ~20) y actualiza:

```typescript
const models = [
  {
    title: "Pan Simple Bonete",
    description: "Modelo 3D del producto principal con detalles de textura y forma",
    glbUrl: "/models/pan-bonete.glb",
    usdzUrl: "/models/pan-bonete.usdz",
    poster: "/images/pan-bonete-preview.jpg",
    specs: {
      weight: "85 g nominal",
      dimensions: "~12 cm diámetro",
      material: "Pan artesanal",
    },
  },
  {
    title: "Empaque Propuesto",
    description: "Diseño conceptual del nuevo empaque de marca",
    glbUrl: "/models/empaque.glb",
    usdzUrl: "/models/empaque.usdz",
    poster: "/images/empaque-preview.jpg",
    specs: {
      material: "Papel kraft",
      size: "20x15 cm",
      design: "Logo + info",
    },
  },
];
```

---

## 🎨 4. Personalizar Colores (Opcional)

Si deseas cambiar la paleta de colores del sitio:

**Archivo:** `src/index.css`

Busca la sección `:root` (línea ~10) y modifica los valores HSL:

```css
:root {
  --primary: 42 88% 55%; /* Color principal (dorado) */
  --accent: 38 60% 85%;  /* Color de acento (crema) */
  /* ... más colores */
}
```

**Herramienta útil:** Usa [HSL Color Picker](https://hslpicker.com/) para elegir colores.

---

## 🌐 5. Actualizar Metadatos SEO

**Archivo:** `index.html`

Actualiza (líneas 3-30):
- `<title>` - Título de la página
- Meta description
- Meta keywords
- URL canónica
- Open Graph tags (para redes sociales)

---

## 📱 6. Probar el Sitio

### En desarrollo:
```bash
npm run dev
```

### Ver en diferentes dispositivos:
- Abre las herramientas de desarrollador (F12)
- Usa el modo responsive para simular móvil/tablet

### Probar Realidad Aumentada (AR):
- Los modelos 3D con AR solo funcionan en dispositivos móviles reales
- Abre el sitio desde tu teléfono
- Toca el botón "Ver en AR"

---

## 🚀 7. Desplegar el Sitio

### Opción 1: Lovable (Recomendado)
1. Haz clic en "Publish" en la esquina superior derecha
2. Sigue las instrucciones de Lovable

### Opción 2: Netlify / Vercel
1. Sube tu código a GitHub
2. Conecta el repositorio a Netlify o Vercel
3. El sitio se desplegará automáticamente

---

## ❓ Solución de Problemas

### Las imágenes no se muestran
- Verifica que las rutas en el código coincidan con los nombres de archivo
- Asegúrate de que las imágenes estén en `public/images/`
- Las rutas deben empezar con `/` (ej: `/images/foto.jpg`)

### Los modelos 3D no cargan
- Verifica que los archivos .glb y .usdz existan
- Comprueba que los archivos no excedan 5 MB
- Abre la consola del navegador (F12) para ver errores

### El sitio se ve diferente en móvil
- Esto es normal, el diseño es responsive
- Usa las herramientas de desarrollador para simular diferentes dispositivos

---

## 📞 Soporte

Si necesitas ayuda adicional:
1. Revisa la documentación de [Lovable](https://docs.lovable.dev/)
2. Consulta la comunidad en Discord
3. Contacta a tu equipo de desarrollo

---

**Última actualización:** Diciembre 2024

¡Éxito con tu proyecto! 🍞✨
