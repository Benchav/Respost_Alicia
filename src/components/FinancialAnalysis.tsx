import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, TrendingDown, TrendingUp, AlertCircle } from "lucide-react";

const FinancialAnalysis = () => {
  return (
    <section id="financial" className="py-20 bg-gradient-to-b from-muted/30 to-background">
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
              Fase 4: Análisis Financiero
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Análisis Financiero
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Evaluación del costo actual vs precio de venta y su impacto en la rentabilidad
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="border-2 border-destructive/30 bg-destructive/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <AlertCircle className="h-6 w-6 text-destructive" />
                  Situación Actual: Pérdida por Unidad
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-background rounded-xl shadow-md">
                    <DollarSign className="h-10 w-10 text-destructive mx-auto mb-3" />
                    <p className="text-sm text-muted-foreground mb-2">Costo de Producción</p>
                    <p className="text-4xl font-bold text-destructive">C$ 18.72</p>
                    <p className="text-xs text-muted-foreground mt-2">por unidad</p>
                  </div>
                  <div className="text-center p-6 bg-background rounded-xl shadow-md">
                    <TrendingDown className="h-10 w-10 text-foreground mx-auto mb-3" />
                    <p className="text-sm text-muted-foreground mb-2">Precio de Venta</p>
                    <p className="text-4xl font-bold text-foreground">C$ 3.00</p>
                    <p className="text-xs text-muted-foreground mt-2">por unidad</p>
                  </div>
                  <div className="text-center p-6 bg-destructive/10 rounded-xl shadow-md border-2 border-destructive">
                    <TrendingDown className="h-10 w-10 text-destructive mx-auto mb-3" />
                    <p className="text-sm text-muted-foreground mb-2">Pérdida</p>
                    <p className="text-4xl font-bold text-destructive">-C$ 15.72</p>
                    <p className="text-xs text-destructive mt-2">por unidad vendida</p>
                  </div>
                </div>
                <div className="mt-6 p-6 bg-background rounded-lg border-l-4 border-l-destructive">
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Problema crítico:</strong> El costo de producción supera ampliamente el precio de venta. Esto evidencia que el precio actual no refleja el costo real de producción, generando pérdidas en cada venta.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="border-2 border-amber-500/30 bg-amber-500/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <TrendingUp className="h-6 w-6 text-amber-600" />
                  Causas del Sobrecosto
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg text-amber-600">Exceso de Materia Prima</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Peso promedio actual: <strong className="text-foreground">92-95 g</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Peso nominal objetivo: <strong className="text-foreground">85 g</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Exceso por unidad: <strong className="text-foreground">7-10 g (8-12%)</strong></span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg text-amber-600">Otros Factores de Costo</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Desperdicio en proceso</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Costos de energía y mano de obra</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">Falta de optimización de procesos</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="border-2 border-primary bg-gradient-to-br from-primary/5 to-accent/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  Estrategia de Ajuste
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Para lograr rentabilidad sostenible, se requiere un enfoque dual:
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="p-6 bg-background rounded-lg shadow-md">
                    <h4 className="font-semibold text-lg mb-3 text-primary">1. Reducción de Costos</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
                        <span className="text-muted-foreground">Estandarización del peso (ahorro 10-12%)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
                        <span className="text-muted-foreground">Optimización de procesos productivos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
                        <span className="text-muted-foreground">Negociación con proveedores</span>
                      </li>
                    </ul>
                  </div>
                  <div className="p-6 bg-background rounded-lg shadow-md">
                    <h4 className="font-semibold text-lg mb-3 text-primary">2. Ajuste de Precio</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
                        <span className="text-muted-foreground">Reposicionamiento del producto</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
                        <span className="text-muted-foreground">Estrategia de branding y valor agregado</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
                        <span className="text-muted-foreground">Precio acorde al costo de calidad artesanal</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="p-6 bg-primary/10 rounded-lg border-l-4 border-l-primary">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Conclusión:</strong> No es posible mantener la rentabilidad con el precio actual. Se requiere una combinación de reducción de costos mediante estandarización y un ajuste de precio que reconozca el valor del producto artesanal de calidad.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinancialAnalysis;
