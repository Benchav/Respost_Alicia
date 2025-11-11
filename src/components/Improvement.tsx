import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Package, Megaphone, Smartphone, Award } from "lucide-react";

const Improvement = () => {
  const proposals = [
    {
      icon: Award,
      title: "Estandarización del Pesado",
      description: "Implementación de balanzas digitales, capacitación del personal y procedimientos documentados.",
      impact: "Alto",
      timeline: "Inmediato",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Package,
      title: "Nueva Identidad Visual",
      description: "Diseño de logotipo profesional y sistema de identidad corporativa que refleje la tradición artesanal.",
      impact: "Alto",
      timeline: "1-2 meses",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: Megaphone,
      title: "Estrategia de Branding",
      description: "Posicionamiento del pan artesanal como producto premium de calidad certificada.",
      impact: "Medio",
      timeline: "Continuo",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: Smartphone,
      title: "Presencia Digital",
      description: "Creación de perfiles en redes sociales y estrategia de contenido para engagement con clientes.",
      impact: "Medio",
      timeline: "2-3 meses",
      color: "from-amber-500 to-orange-600",
    },
  ];

  return (
    <section id="improvement" className="py-20 bg-background">
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
              Fase 5: Propuestas
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Propuesta de Mejora Integral
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Estrategias de mejora en procesos, marketing y posicionamiento de marca
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {proposals.map((proposal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group border-2 hover:border-primary/50">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${proposal.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <proposal.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{proposal.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {proposal.description}
                  </p>
                  <div className="flex gap-4 pt-4 border-t border-border">
                    <div className="flex-1">
                      <p className="text-xs text-muted-foreground mb-1">Impacto</p>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        proposal.impact === "Alto" 
                          ? "bg-green-500/10 text-green-600" 
                          : "bg-blue-500/10 text-blue-600"
                      }`}>
                        {proposal.impact}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-muted-foreground mb-1">Plazo</p>
                      <span className="text-sm font-semibold">{proposal.timeline}</span>
                    </div>
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
          <Card className="bg-gradient-to-br from-primary/10 via-accent/20 to-secondary/10 border-2 border-primary/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Lightbulb className="h-6 w-6 text-primary" />
                Estrategia de Marketing y Branding
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                El reposicionamiento de la Panadería Alicia como marca artesanal premium requiere una estrategia integral de marketing que comunique calidad, tradición y valor.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-background rounded-lg shadow-md">
                  <h4 className="font-semibold text-lg mb-3 text-primary">Identidad Visual</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Logotipo profesional</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Paleta de colores cálidos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Tipografía distintiva</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Manual de marca</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 bg-background rounded-lg shadow-md">
                  <h4 className="font-semibold text-lg mb-3 text-primary">Empaque y Presentación</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Bolsas de papel kraft con logo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Etiquetas con información nutricional</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Sello de "Peso Certificado"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">QR code para redes sociales</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 bg-background rounded-lg shadow-md">
                  <h4 className="font-semibold text-lg mb-3 text-primary">Presencia Digital</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Facebook e Instagram activos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">WhatsApp Business</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Contenido de valor (recetas, tips)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">Testimonios de clientes</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-6 bg-primary/10 rounded-lg border-l-4 border-l-primary">
                <h4 className="font-semibold mb-2">Mensaje de Marca Propuesto</h4>
                <p className="text-muted-foreground italic">
                  "Panadería Alicia: Más de 20 años elaborando pan artesanal con control de calidad. Cada pieza, perfectamente pesada. Cada día, recién horneado. Tradición que se mide con precisión."
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Improvement;