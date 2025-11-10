import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ClipboardCheck, Scale, FileCheck, Bell } from "lucide-react";

const StandardProcedure = () => {
  const steps = [
    {
      number: "01",
      icon: Scale,
      title: "Equipamiento",
      description: "Instalación de balanzas digitales calibradas en estaciones de trabajo.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: "02",
      icon: ClipboardCheck,
      title: "Procedimiento",
      description: "Pesado de cada porción de masa antes del formado, verificando que esté dentro del rango 85 g ± 5 g.",
      color: "from-primary to-amber-500",
    },
    {
      number: "03",
      icon: FileCheck,
      title: "Registro",
      description: "Documentación de pesos en hoja de control cada hora para análisis estadístico.",
      color: "from-green-500 to-emerald-500",
    },
    {
      number: "04",
      icon: Bell,
      title: "Acciones Correctivas",
      description: "Protocolo de ajuste inmediato si se detectan valores fuera de especificación.",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section id="sop" className="py-20 bg-background">
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
              Fase 3: Estandarización
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Procedimiento Operativo Estándar (SOP)
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Nuevo método estandarizado con balanzas digitales y registros de control
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group border-2 hover:border-primary/50">
                <CardContent className="p-6 space-y-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-2xl group-hover:scale-110 transition-transform duration-300`}>
                    {step.number}
                  </div>
                  <div className="p-3 bg-accent/50 rounded-lg w-fit">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold">{step.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
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
          className="grid md:grid-cols-2 gap-8"
        >
          <Card className="bg-gradient-to-br from-primary/10 to-accent/20 border-2 border-primary/30">
            <CardContent className="p-8 space-y-4">
              <h3 className="text-2xl font-bold text-primary">Capacitación del Personal</h3>
              <p className="text-muted-foreground leading-relaxed">
                Se diseñó un programa de capacitación para el personal de producción que incluye:
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <span className="text-muted-foreground">Importancia del control de peso en la calidad y rentabilidad</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <span className="text-muted-foreground">Uso correcto de las balanzas digitales y calibración</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <span className="text-muted-foreground">Llenado de formatos de registro y hojas de control</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <span className="text-muted-foreground">Identificación de productos fuera de especificación</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-muted/50 to-accent/30 border-2">
            <CardContent className="p-8 space-y-4">
              <h3 className="text-2xl font-bold">Beneficios Esperados</h3>
              <p className="text-muted-foreground leading-relaxed">
                La implementación del SOP permitirá:
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
                  <span className="text-muted-foreground"><strong className="text-foreground">Reducir desperdicios</strong> de materia prima en un 10-12%</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
                  <span className="text-muted-foreground"><strong className="text-foreground">Estandarizar la calidad</strong> del producto final</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
                  <span className="text-muted-foreground"><strong className="text-foreground">Mejorar la rentabilidad</strong> del producto estrella</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
                  <span className="text-muted-foreground"><strong className="text-foreground">Generar datos</strong> para análisis y mejora continua</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default StandardProcedure;
