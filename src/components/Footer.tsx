import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-background to-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">PA</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Panadería Alicia</h3>
                <p className="text-xs text-muted-foreground">Pan Artesanal de Calidad</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Más de 20 años produciendo pan artesanal con dedicación y calidad. Ahora con control de peso certificado.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre el Proyecto
                </a>
              </li>
              <li>
                <a href="#diagnostic" className="text-muted-foreground hover:text-primary transition-colors">
                  Diagnóstico
                </a>
              </li>
              <li>
                <a href="#cep" className="text-muted-foreground hover:text-primary transition-colors">
                  Control Estadístico
                </a>
              </li>
              <li>
                <a href="#improvement" className="text-muted-foreground hover:text-primary transition-colors">
                  Propuestas de Mejora
                </a>
              </li>
              <li>
                <a href="#models" className="text-muted-foreground hover:text-primary transition-colors">
                  Modelos 3D
                </a>
              </li>
            {/*  <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contacto
                </a>
              </li> */}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Información de Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Dirección de la Panadería Alicia<br />Diriamba, reloj ..</span>
              </li>
           {/*   <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span>+123 456 7890</span>
              </li> */}
          { /*   <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span>contacto@panaderiaalicia.com</span>
              </li> */ }
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              © {currentYear} Panadería Alicia. Todos los derechos reservados.
            </p>
            <p>
              Desarrollado como Trabajo Final Integrador VI - Ingeniería Industrial
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;