import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Box, Download, Smartphone, Info } from "lucide-react";
import { useEffect } from "react";

const ModelViewer3D = () => {
  useEffect(() => {
    // El visor 3D de RealityMAX se carga automáticamente
  }, []);

  // URLs de modelos en RealityMAX (páginas web)
  const models = [
    {
      title: "Sala de Horno",
      description: "Modelo 3D, sala de Hornado",
      iframeUrl: "https://realitymax.co/t-uZEM",
     specs: {
       // Peso: "85 g nominal",
       // Dimensiones: "~12 cm diámetro",
     //   Tipo: "Pan artesanal",
      }, 
    },
    {
      title: "Area completa",
      description: "Modelo 3D, Area completa de trabajo",
      iframeUrl: "https://realitymax.co/lH1T1f",
      specs: {
     //   Material: "Papel kraft ecológico",
      //  Tamaño: "20×15 cm",
     //   Diseño: "Logo + información nutricional",
      },
    },
     {
      title: "Entrada",
      description: "Modelo 3D, Area de entrada al local",
      iframeUrl: "https://realitymax.co/rJwUEY",
      specs: {
     //   Material: "Papel kraft ecológico",
    //    Tamaño: "20×15 cm",
    //    Diseño: "Logo + información nutricional",
      },
    },
  ];

  return (
    <section id="models" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Encabezado */}
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
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Modelos 3D Interactivos
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explora los modelos tridimensionales del producto y empaque. Puedes rotarlos, hacer zoom y verlos en realidad aumentada directamente desde RealityMAX.
          </p>
        </motion.div>

        {/* Tarjetas de modelos */}
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
                  {/* Visor RealityMAX embebido */}
                  <div className="relative w-full h-[400px] rounded-xl overflow-hidden bg-muted/30">
                    <iframe
                      src={model.iframeUrl}
                      title={model.title}
                      allow="fullscreen; xr-spatial-tracking; camera; gyroscope; accelerometer"
                      style={{
                        width: "100%",
                        height: "100%",
                        border: "none",
                        borderRadius: "0.75rem",
                      }}
                    ></iframe>
                  </div>

                  {/* Especificaciones */}
                  <div className="grid grid-cols-3 gap-4 p-4 bg-muted/50 rounded-lg">
                    {Object.entries(model.specs).map(([key, value], i) => (
                      <div key={i} className="text-center">
                        <p className="text-xs text-muted-foreground mb-1 capitalize">{key}</p>
                      {/*  <p className="text-sm font-semibold">{value}</p> */}
                      </div>
                    ))}
                  </div>

                  {/* Botones */}
                  <div className="flex flex-wrap gap-3">
                    <Button
                      variant="default"
                      className="flex-1 group"
                      onClick={() => window.open(model.iframeUrl, "_blank")}
                    >
                      <Smartphone className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                      Ver en AR
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 group"
                      onClick={() => window.open(model.iframeUrl, "_blank")}
                    >
                      <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                      Descargar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Guía informativa */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
     { /*    <Card className="bg-gradient-to-br from-blue-500/5 to-cyan-500/5 border-2 border-blue-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Info className="h-6 w-6 text-blue-500" />
                📦 Guía para actualizar los modelos 3D
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Los modelos se cargan directamente desde RealityMAX mediante URLs web. Para cambiar los modelos:
              </p>

              <div className="bg-background rounded-lg p-6 space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">1. Sube tu modelo a RealityMAX</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-4">
                    <li>Ve a <a href="https://realitymax.co" target="_blank" className="text-primary underline">realitymax.co</a> y crea una cuenta gratuita.</li>
                    <li>Sube tu modelo 3D (GLB, OBJ, FBX, etc.).</li>
                    <li>Publica el modelo y copia el enlace compartido.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">2. Actualiza el código</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-4">
                    <li>Edita el array <code className="px-2 py-1 bg-muted rounded text-xs">models</code> en este componente.</li>
                    <li>Cambia <code className="px-2 py-1 bg-muted rounded text-xs">iframeUrl</code> por la nueva URL de tu modelo.</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>💡 Tip:</strong> RealityMAX permite compartir, rotar y visualizar tus modelos en AR sin necesidad de convertir archivos manualmente.
                </p>
              </div>
            </CardContent>
          </Card> */}
        </motion.div>
      </div>
    </section>
  );
};

export default ModelViewer3D;