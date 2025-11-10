import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ZoomIn } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // Placeholder images - estas deben ser reemplazadas con las imágenes reales de la panadería
  const images = [
    {
      src: "https://i.ibb.co/4n1yczX7/Whats-App-Image-2025-11-10-at-2-51-20-PM-1.jpg",
      alt: "Interior de Panadería Alicia",
      title: "Espacio de producción",
    },
    {
      src: "https://i.ibb.co/9mdJ2x6g/Whats-App-Image-2025-11-10-at-2-51-20-PM.jpg",
      alt: "Proceso de horneado",
      title: "Pan recién horneado",
    },
    {/*
    {
      src: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=800&q=80",
      alt: "Productos finales",
      title: "Variedad de productos",
    },
    {
      src: "https://images.unsplash.com/photo-1548340748-6d2b7d7da280?w=800&q=80",
      alt: "Equipo de trabajo",
      title: "Nuestro equipo",
    },
    {
      src: "https://images.unsplash.com/photo-1534432182912-63863115e106?w=800&q=80",
      alt: "Control de calidad",
      title: "Control de calidad",
    },
    {
      src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80",
      alt: "Empaque de productos",
      title: "Empaque y presentación",
    }, */}
  ];

  const lightboxImages = images.map((img) => ({ src: img.src }));

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Galería de la Panadería
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Conoce nuestras instalaciones, procesos y productos
          </p>
          <div className="mt-6 p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg max-w-2xl mx-auto">
            <p className="text-sm text-muted-foreground">
              📸 <strong className="text-foreground">Nota:</strong> Las imágenes mostradas son de ejemplo. Puedes reemplazarlas con fotografías reales de la Panadería Alicia.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300">
                <div
                  className="relative aspect-[4/3] overflow-hidden"
                  onClick={() => {
                    setPhotoIndex(index);
                    setIsOpen(true);
                  }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h4 className="text-white font-semibold text-lg">{image.title}</h4>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/90 rounded-full p-3">
                        <ZoomIn className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={lightboxImages}
          index={photoIndex}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 max-w-3xl mx-auto"
        >
          <Card className="bg-gradient-to-br from-primary/5 to-accent/10 border-2 border-primary/20">
            <div className="p-8">
              <h3 className="text-xl font-bold mb-4">🖼️ Guía para actualizar las imágenes</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>Para reemplazar las imágenes de la galería con fotografías reales:</p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>Coloca tus imágenes en la carpeta <code className="px-2 py-1 bg-muted rounded text-xs">public/images/</code></li>
                  <li>Actualiza el array <code className="px-2 py-1 bg-muted rounded text-xs">images</code> en el archivo <code className="px-2 py-1 bg-muted rounded text-xs">src/components/Gallery.tsx</code></li>
                  <li>Cambia las URLs de <code className="px-2 py-1 bg-muted rounded text-xs">src</code> para apuntar a tus imágenes, por ejemplo: <code className="px-2 py-1 bg-muted rounded text-xs">"/images/tu-imagen.jpg"</code></li>
                  <li>Actualiza los textos de <code className="px-2 py-1 bg-muted rounded text-xs">alt</code> y <code className="px-2 py-1 bg-muted rounded text-xs">title</code> según corresponda</li>
                </ol>
                <p className="pt-2">
                  <strong>Recomendación:</strong> Usa imágenes en formato JPG o WebP, con dimensiones mínimas de 800x600px y optimizadas para web (&lt;500KB cada una).
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
