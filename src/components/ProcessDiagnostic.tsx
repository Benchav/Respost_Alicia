import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Scale, TrendingDown, FileWarning } from "lucide-react";

const ProcessDiagnostic = () => {
  const issues = [
    {
      icon: Scale,
      title: "Pesado Manual",
      description: "Ausencia de procedimiento estandarizado para el pesado de masa.",
      severity: "high",
    },
    {
      icon: TrendingDown,
      title: "Variación de Peso",
      description: "Panes con peso superior al nominal (85 g), llegando hasta 95 g en algunos casos.",
      severity: "high",
    },
    {
      icon: AlertTriangle,
      title: "Desperdicio de Materia Prima",
      description: "Exceso de masa por unidad sin valor agregado para el cliente.",
      severity: "medium",
    },
    {
      icon: FileWarning,
      title: "Falta de Registros",
      description: "No existen registros de control de calidad ni análisis estadístico del proceso.",
      severity: "medium",
    },
  ];

  return (
    <section id="diagnostic" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-6 py-2 bg-destructive/10 border border-destructive/30 rounded-full">
            <span className="text-destructive font-semibold text-sm">
              Fase 1: Diagnóstico
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Diagnóstico del Proceso
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Identificación de fallas críticas en el proceso de producción
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {issues.map((issue, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full border-l-4 ${
                issue.severity === "high" 
                  ? "border-l-destructive bg-destructive/5" 
                  : "border-l-amber-500 bg-amber-500/5"
              }`}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${
                      issue.severity === "high" 
                        ? "bg-destructive/10" 
                        : "bg-amber-500/10"
                    }`}>
                      <issue.icon className={`h-6 w-6 ${
                        issue.severity === "high" 
                          ? "text-destructive" 
                          : "text-amber-600"
                      }`} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{issue.title}</CardTitle>
                      <p className="text-muted-foreground text-sm">
                        {issue.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-br from-muted/50 to-accent/30 border-2">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-bold">Impacto Detectado</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Las fallas identificadas generan un <strong className="text-foreground">sobrecosto promedio de C$ 15.72 por unidad</strong>, considerando que el peso nominal debería ser 85 g pero se está entregando hasta 95 g sin control.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Con un precio de venta de <strong className="text-foreground">C$ 3.00 por unidad</strong>, esto representa una pérdida significativa que afecta directamente la viabilidad del negocio.
                  </p>
                </div>
                <div className="bg-background rounded-xl p-8 shadow-lg min-w-[200px]">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-2">Costo Actual</p>
                    <p className="text-4xl font-bold text-destructive mb-1">C$ 18.72</p>
                    <p className="text-xs text-muted-foreground">por unidad</p>
                  </div>
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-2 text-center">Precio de Venta</p>
                    <p className="text-3xl font-bold text-foreground text-center">C$ 3.00</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessDiagnostic;
