import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Target, TrendingUp, Users } from "lucide-react";
import breadProduct from "@/assets/bread-product.jpg";

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Objetivo Principal",
      description: "Mejorar la calidad y rentabilidad del producto estrella mediante técnicas de ingeniería industrial aplicada.",
    },
    {
      icon: TrendingUp,
      title: "Metodología",
      description: "Aplicación de Control Estadístico de Procesos (CEP), análisis financiero y estrategias de mejora continua.",
    },
    {
      icon: Users,
      title: "Impacto",
      description: "Fortalecimiento de la capacidad productiva de una microempresa familiar con tradición artesanal.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Sobre el Proyecto
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Un estudio aplicado de ingeniería industrial en la Panadería Alicia
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={breadProduct}
                alt="Pan simple bonete - Producto artesanal"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-bold">
              Contexto de la Panadería Alicia
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              La Panadería Alicia es una microempresa familiar dedicada a la producción artesanal de pan desde hace más de dos décadas. Su producto estrella, el <strong className="text-foreground">"pan simple bonete"</strong>, representa una parte significativa de su producción diaria.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Sin embargo, la producción enfrenta desafíos relacionados con la <strong className="text-foreground">variabilidad en el peso del producto</strong>, generando desperdicios y afectando directamente la rentabilidad del negocio.
            </p>
            <div className="bg-accent/50 border-l-4 border-primary p-6 rounded-r-lg">
              <p className="font-semibold text-foreground">
                Problema identificado:
              </p>
              <p className="text-muted-foreground mt-2">
                Proceso de pesado manual sin estandarización, lo que genera panes con pesos superiores al nominal, incrementando costos de materia prima sin generar valor adicional para el cliente.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-2 hover:border-primary/50">
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold">{feature.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
