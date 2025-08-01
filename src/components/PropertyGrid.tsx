import PropertyCard from "./PropertyCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const properties = [
  {
    id: 1,
    title: "Apartamento Primera Línea de Playa",
    price: 285000,
    location: "Gran Playa, Santa Pola",
    bedrooms: 3,
    bathrooms: 2,
    area: 85,
    image: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=600&h=400&fit=crop",
    type: "Venta",
    featured: true
  },
  {
    id: 2,
    title: "Chalet con Piscina Privada",
    price: 450000,
    location: "Varadero, Santa Pola",
    bedrooms: 4,
    bathrooms: 3,
    area: 180,
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop",
    type: "Venta",
    featured: false
  },
  {
    id: 3,
    title: "Piso Céntrico Reformado",
    price: 195000,
    location: "Centro, Santa Pola",
    bedrooms: 2,
    bathrooms: 1,
    area: 70,
    image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?w=600&h=400&fit=crop",
    type: "Venta",
    featured: false
  },
  {
    id: 4,
    title: "Apartamento con Vistas al Puerto",
    price: 1200,
    location: "Puerto, Santa Pola",
    bedrooms: 2,
    bathrooms: 1,
    area: 65,
    image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=600&h=400&fit=crop",
    type: "Alquiler",
    featured: false
  },
  {
    id: 5,
    title: "Villa de Lujo con Jardín",
    price: 750000,
    location: "Gran Alacant, Santa Pola",
    bedrooms: 5,
    bathrooms: 4,
    area: 250,
    image: "https://images.unsplash.com/photo-1433832597046-4f10e10ac764?w=600&h=400&fit=crop",
    type: "Venta",
    featured: true
  },
  {
    id: 6,
    title: "Estudio Moderno",
    price: 850,
    location: "Playa de Levante, Santa Pola",
    bedrooms: 1,
    bathrooms: 1,
    area: 40,
    image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=600&h=400&fit=crop",
    type: "Alquiler",
    featured: false
  }
];

const PropertyGrid = () => {
  const salesProperties = properties.filter(p => p.type === "Venta");
  const rentalProperties = properties.filter(p => p.type === "Alquiler");

  return (
    <section id="propiedades" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Nuestras Propiedades
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre una selección exclusiva de propiedades en Santa Pola
          </p>
        </div>

        <Tabs defaultValue="venta" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="venta">En Venta</TabsTrigger>
            <TabsTrigger value="alquiler">En Alquiler</TabsTrigger>
          </TabsList>
          
          <TabsContent value="venta">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {salesProperties.map((property) => (
                <PropertyCard key={property.id} {...property} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="alquiler">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {rentalProperties.map((property) => (
                <PropertyCard key={property.id} {...property} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            Ver Todas las Propiedades
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PropertyGrid;