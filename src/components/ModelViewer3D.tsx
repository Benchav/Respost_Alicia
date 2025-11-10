import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Box, Download, Smartphone, Info } from "lucide-react";
import { useEffect, useRef } from "react";

// @ts-ignore
import "@google/model-viewer";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': any;
    }
  }
}

const ModelViewer3D = () => {
  const modelViewerRef = useRef<any>(null);

  useEffect(() => {
    // El componente model-viewer se carga automáticamente
  }, []);

  // URLs de ejemplo - deben ser reemplazadas con los modelos 3D reales
  const models = [
    {
      title: "Pan Simple Bonete",
      description: "Modelo 3D del producto principal con detalles de textura y forma",
      glbUrl: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
      usdzUrl: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz",
      poster: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80",
      specs: {
        weight: "85 g nominal",
        dimensions: "~12 cm diámetro",
        material: "Pan artesanal",
      },
    },
    {
      title: "Empaque Propuesto",
      description: "Diseño conceptual del nuevo empaque de marca",
      glbUrl: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
      usdzUrl: "https://modelviewer.dev/shared-assets/models/Astronaut.usdz",
      poster: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=400&q=80",
      specs: {
        material: "Papel kraft",
        size: "20x15 cm",
        design: "Logo + info",
      },
    },
  ];

  return (
    <section id="models" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-6 py-2 bg-primary/10 border border-primary/30 rounded-full">
            <span className="text-primary font-semibold text-sm flex items-center gap-2">
              <Box className="h-4 w-4" />
              Experiencia Interactiva
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Modelos 3D Interactivos
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explora los modelos tridimensionales del producto y empaque. Puedes rotarlos, hacer zoom y verlos en realidad aumentada.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {models.map((model, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl">{model.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{model.description}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="relative">
                    <model-viewer
                      ref={modelViewerRef}
                      src={model.glbUrl}
                      ios-src={model.usdzUrl}
                      poster={model.poster}
                      alt={model.title}
                      shadow-intensity="1"
                      camera-controls
                      auto-rotate
                      ar
                      ar-modes="webxr scene-viewer quick-look"
                      style={{
                        width: "100%",
                        height: "400px",
                        background: "linear-gradient(to bottom, hsl(var(--muted)), hsl(var(--background)))",
                        borderRadius: "0.75rem",
                      }}
                    >
                      <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-lg p-2 text-xs text-muted-foreground border border-border">
                        <p className="font-semibold">💡 Controles:</p>
                        <p>• Arrastra para rotar</p>
                        <p>• Scroll para zoom</p>
                        <p>• 2 dedos para mover</p>
                      </div>
                    </model-viewer>
                  </div>

                  <div className="grid grid-cols-3 gap-4 p-4 bg-muted/50 rounded-lg">
                    {Object.entries(model.specs).map(([key, value], i) => (
                      <div key={i} className="text-center">
                        <p className="text-xs text-muted-foreground mb-1 capitalize">{key}</p>
                        <p className="text-sm font-semibold">{value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Button variant="default" className="flex-1 group">
                      <Smartphone className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                      Ver en AR
                    </Button>
                    <Button variant="outline" className="flex-1 group">
                      <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                      Descargar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-br from-blue-500/5 to-cyan-500/5 border-2 border-blue-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Info className="h-6 w-6 text-blue-500" />
                📦 Guía para actualizar los modelos 3D
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Los modelos mostrados son de ejemplo. Para usar tus propios modelos 3D:
              </p>
              
              <div className="bg-background rounded-lg p-6 space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">1. Preparar los archivos</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-4">
                    <li>Exporta tus modelos en formato <strong>.GLB</strong> (para Android y web)</li>
                    <li>Exporta también en formato <strong>.USDZ</strong> (para iOS/iPhone)</li>
                    <li>Optimiza los archivos para que pesen menos de 5 MB</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">2. Subir los archivos</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-4">
                    <li>Coloca los archivos .glb y .usdz en la carpeta <code className="px-2 py-1 bg-muted rounded text-xs">public/models/</code></li>
                    <li>Crea una imagen de poster (preview) en <code className="px-2 py-1 bg-muted rounded text-xs">public/images/</code></li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">3. Actualizar el código</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-4">
                    <li>En <code className="px-2 py-1 bg-muted rounded text-xs">src/components/ModelViewer3D.tsx</code>, actualiza el array <code className="px-2 py-1 bg-muted rounded text-xs">models</code></li>
                    <li>Cambia <code className="px-2 py-1 bg-muted rounded text-xs">glbUrl</code> a <code className="px-2 py-1 bg-muted rounded text-xs">"/models/tu-modelo.glb"</code></li>
                    <li>Cambia <code className="px-2 py-1 bg-muted rounded text-xs">usdzUrl</code> a <code className="px-2 py-1 bg-muted rounded text-xs">"/models/tu-modelo.usdz"</code></li>
                    <li>Actualiza título, descripción y especificaciones</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>💡 Tip:</strong> Puedes crear modelos 3D usando software como Blender (gratuito), SketchUp, o contratar servicios de modelado 3D. También existen apps móviles que escanean objetos y generan modelos 3D automáticamente.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ModelViewer3D;
