import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, TrendingUp, Target, Award } from "lucide-react";

const Results = () => {
  const results = [
    {
      icon: CheckCircle2,
      title: "Reducción de Desperdicios",
      value: "10-12%",
      description: "Disminución estimada en el uso de materia prima por estandarización del peso",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Target,
      title: "Control de Calidad",
      value: "100%",
      description: "Trazabilidad y registro de todos los panes producidos con peso certificado",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: TrendingUp,
      title: "Mejora de Rentabilidad",
      value: "15-18%",
      description: "Incremento proyectado en márgenes mediante optimización y reposicionamiento",
      color: "from-amber-500 to-orange-600",
    },
    {
      icon: Award,
      title: "Posicionamiento de Marca",
      value: "Premium",
      description: "Reconocimiento como panadería artesanal con control de calidad certificado",
      color: "from-purple-500 to-pink-600",
    },
  ];

  return (
    <section id="results" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-6 py-2 bg-green-500/10 border border-green-500/30 rounded-full">
            <span className="text-green-600 font-semibold text-sm">
              Resultados y Conclusiones
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Beneficios Esperados
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Impacto proyectado de la implementación de las mejoras propuestas
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group border-2 hover:border-primary/50">
                <CardContent className="p-6 space-y-4 text-center">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${result.color} flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <result.icon className="h-10 w-10 text-white" />
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-primary mb-2">{result.value}</p>
                    <h4 className="font-semibold text-lg mb-2">{result.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {result.description}
                  </p>
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
          className="max-w-4xl mx-auto space-y-8"
        >
          <Card className="bg-gradient-to-br from-primary/5 to-accent/10 border-2 border-primary/30">
            <CardContent className="p-8 space-y-6">
              <h3 className="text-2xl font-bold text-center mb-6">Conclusiones del Estudio</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-background rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Necesidad de Estandarización</h4>
                    <p className="text-sm text-muted-foreground">
                      La variabilidad en el proceso de pesado manual representa el problema principal que afecta la calidad y rentabilidad del producto. La implementación de procedimientos estandarizados con balanzas digitales es fundamental.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-background rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Viabilidad Económica</h4>
                    <p className="text-sm text-muted-foreground">
                      El análisis financiero demuestra que el precio actual no refleja el costo de producción. Es necesario un ajuste de precio acompañado de una estrategia de branding que justifique el valor del producto artesanal de calidad certificada.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-background rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Oportunidad de Diferenciación</h4>
                    <p className="text-sm text-muted-foreground">
                      La implementación de control estadístico de procesos y certificación de peso representa una oportunidad única de diferenciación en el mercado local, posicionando a la Panadería Alicia como referente de calidad.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-background rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Sostenibilidad del Negocio</h4>
                    <p className="text-sm text-muted-foreground">
                      Las mejoras propuestas no solo optimizan el proceso productivo, sino que sientan las bases para el crecimiento sostenible de la microempresa, permitiendo escalabilidad sin perder la esencia artesanal.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-500/5 to-emerald-500/5 border-2 border-green-500/30">
            <CardContent className="p-8">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mx-auto shadow-lg">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Recomendación Final</h3>
                <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Se recomienda implementar las mejoras de forma gradual, comenzando con la estandarización del pesado y el control estadístico. Paralelamente, desarrollar la estrategia de branding y presencia digital para preparar el reposicionamiento del producto en el mercado.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Con una inversión moderada en equipamiento y capacitación, la Panadería Alicia puede transformarse en un referente de calidad artesanal en la región.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Results;
