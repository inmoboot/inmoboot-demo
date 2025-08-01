import { Button } from "@/components/ui/button";
import { Search, MapPin, Home, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-background via-muted/50 to-accent/20 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Tu hogar perfecto en 
                <span className="text-primary block">Santa Pola</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Descubre las mejores propiedades en la costa alicantina. 
                Más de 20 años ayudando a familias a encontrar su hogar ideal.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="px-8">
                <Search className="h-5 w-5 mr-2" />
                Ver Propiedades
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                Tasación Gratuita
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Home className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">200+</div>
                <div className="text-sm text-muted-foreground">Propiedades</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">Satisfacción</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">20+</div>
                <div className="text-sm text-muted-foreground">Años</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=600&fit=crop"
                alt="Vista de Santa Pola"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg border border-border">
              <div className="text-sm text-muted-foreground">Propiedades desde</div>
              <div className="text-2xl font-bold text-primary">150.000€</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;