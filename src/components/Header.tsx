import { Building, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Building className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">Inmoboot</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-foreground hover:text-primary transition-colors">Inicio</a>
            <a href="#propiedades" className="text-foreground hover:text-primary transition-colors">Propiedades</a>
            <a href="/contacto" className="text-foreground hover:text-primary transition-colors">Contacto</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span>965 123 456</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="h-4 w-4" />
                <span>Santa Pola</span>
              </div>
            </div>
            <Button variant="outline" onClick={() => window.location.href = '/contacto'}>Contactar</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;