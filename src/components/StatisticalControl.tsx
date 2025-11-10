import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, CheckCircle2, Target } from "lucide-react";
import processDiagram from "@/assets/process-diagram.jpg";

const StatisticalControl = () => {
  const specifications = [
    { label: "Peso nominal objetivo", value: "85 g", icon: Target },
    { label: "Límite de tolerancia superior", value: "90 g", icon: CheckCircle2 },
    { label: "Límite de tolerancia inferior", value: "80 g", icon: CheckCircle2 },
  ];

  return (
    <section id="cep" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-6 py-2 bg-primary/10 border border-primary/30 rounded-full">
            <span className="text-primary font-semibold text-sm">
              Fase 2: Análisis
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Control Estadístico de Procesos (CEP)
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Implementación de técnicas de control estadístico para monitorear y mejorar la calidad
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-bold">
              Parámetros de Control
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Se estableció un sistema de control basado en el peso del producto, con límites de especificación que permiten mantener la calidad sin generar desperdicios innecesarios.
            </p>
            
            <div className="space-y-4">
              {specifications.map((spec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-l-4 border-l-primary hover:shadow-md transition-shadow">
                    <CardContent className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <spec.icon className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium">{spec.label}</span>
                      </div>
                      <span className="text-xl font-bold text-primary">{spec.value}</span>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="bg-accent/50 border-l-4 border-primary p-6 rounded-r-lg">
              <p className="font-semibold text-foreground mb-2">Beneficio del CEP:</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                La implementación del Control Estadístico de Procesos permite detectar variaciones en tiempo real, identificar causas especiales de variación y tomar acciones correctivas antes de que se generen productos fuera de especificación.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden shadow-xl">
              <CardHeader className="bg-primary/10">
                <CardTitle className="flex items-center gap-2">
                  <LineChart className="h-5 w-5 text-primary" />
                  Gráficos de Control
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <img
                  src={processDiagram}
                  alt="Gráficos de control estadístico de procesos"
                  className="w-full h-auto"
                />
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-br from-primary/5 to-accent/20">
            <CardContent className="p-8">
              <h4 className="text-xl font-bold mb-4">Metodología Aplicada</h4>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold mb-2 text-primary">Recolección de Datos</h5>
                  <p className="text-sm text-muted-foreground">
                    Se tomaron múltiples muestras del peso de los panes durante diferentes turnos de producción para establecer una línea base del proceso actual.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold mb-2 text-primary">Análisis Estadístico</h5>
                  <p className="text-sm text-muted-foreground">
                    Se calcularon medias, desviaciones estándar y se construyeron gráficos de control para identificar patrones de variación.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold mb-2 text-primary">Identificación de Causas</h5>
                  <p className="text-sm text-muted-foreground">
                    Se determinó que la variación se debe principalmente al método de pesado manual sin referencia visual o instrumental adecuada.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold mb-2 text-primary">Capacidad del Proceso</h5>
                  <p className="text-sm text-muted-foreground">
                    Se calcularon índices de capacidad (Cp, Cpk) para cuantificar la habilidad del proceso actual para cumplir con las especificaciones.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default StatisticalControl;
