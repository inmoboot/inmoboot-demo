import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bed, Bath, Square, MapPin, Euro, Heart, Share } from "lucide-react";

interface PropertyCardProps {
  id: number;
  title: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  type: string;
  featured?: boolean;
}

const PropertyCard = ({ 
  title, 
  price, 
  location, 
  bedrooms, 
  bathrooms, 
  area, 
  image, 
  type,
  featured = false 
}: PropertyCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {featured && (
          <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
            Destacada
          </Badge>
        )}
        <Badge variant="secondary" className="absolute top-4 right-4">
          {type}
        </Badge>
        <div className="absolute top-4 right-16 flex space-x-2">
          <Button size="sm" variant="ghost" className="h-8 w-8 p-0 bg-white/80 hover:bg-white">
            <Heart className="h-4 w-4" />
          </Button>
          <Button size="sm" variant="ghost" className="h-8 w-8 p-0 bg-white/80 hover:bg-white">
            <Share className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
            <div className="flex items-center space-x-1 text-muted-foreground mt-1">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">{location}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Bed className="h-4 w-4" />
                <span>{bedrooms}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Bath className="h-4 w-4" />
                <span>{bathrooms}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Square className="h-4 w-4" />
                <span>{area}m²</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-between pt-4">
            <div className="flex items-center space-x-1">
              <Euro className="h-5 w-5 text-primary" />
              <span className="text-2xl font-bold text-primary">
                {price.toLocaleString()}
              </span>
            </div>
            <Button>Ver Detalles</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;