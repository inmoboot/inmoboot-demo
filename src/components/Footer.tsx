import { Building, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Building className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-primary">Inmoboot</span>
            </div>
            <p className="text-muted-foreground">
              Tu inmobiliaria de confianza en Santa Pola. Más de 20 años ayudando a familias a encontrar su hogar perfecto.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Servicios</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Venta de Propiedades</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Alquiler</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Tasaciones</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Gestión Inmobiliaria</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Asesoramiento Legal</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Zonas</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Gran Playa</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Centro</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Puerto</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Varadero</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Gran Alacant</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>965 123 456</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@inmoboot.com</span>
              </div>
              <div className="flex items-start space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>Calle Real, 45<br />03130 Santa Pola, Alicante</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Inmoboot. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;