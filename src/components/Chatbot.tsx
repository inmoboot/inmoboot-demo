import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const predefinedResponses = {
  "hola": "¡Hola! Soy el asistente virtual de Inmoboot. ¿En qué puedo ayudarte hoy?",
  "precio": "Los precios de nuestras propiedades varían según la ubicación y características. Tenemos opciones desde 150.000€ en venta y desde 850€ en alquiler. ¿Te interesa algún tipo de propiedad en particular?",
  "alquiler": "Tenemos excelentes opciones de alquiler en Santa Pola. ¿Buscas un estudio, apartamento o casa? ¿Para cuántas personas?",
  "venta": "Contamos con propiedades en venta desde apartamentos hasta villas de lujo. ¿Cuál es tu presupuesto aproximado?",
  "santa pola": "Santa Pola es una ubicación privilegiada en la Costa Blanca, con excelentes playas, puerto deportivo y todos los servicios. ¿Te interesa alguna zona específica?",
  "contacto": "Puedes contactarnos en el 965 123 456 o visítanos en nuestras oficinas en Santa Pola. También podemos concertar una cita para mostrarte las propiedades.",
  "visita": "¡Por supuesto! Organizamos visitas a las propiedades de lunes a sábado. ¿Qué propiedad te interesa ver?",
  "financiacion": "Trabajamos con las mejores entidades financieras para ayudarte con la financiación. Podemos gestionar hasta el 80% del valor de la propiedad.",
  "documentos": "Nos encargamos de toda la gestión documental: registro, notaría, impuestos y todo lo necesario para que tu compra sea segura y sencilla."
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "¡Hola! Soy el asistente virtual de Inmoboot. Estoy aquí para ayudarte con cualquier consulta sobre nuestras propiedades en Santa Pola. ¿En qué puedo ayudarte?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    for (const [key, response] of Object.entries(predefinedResponses)) {
      if (lowerMessage.includes(key)) {
        return response;
      }
    }
    
    return "Gracias por tu consulta. Para una respuesta más específica, te recomiendo que contactes con nuestro equipo al 965 123 456 o nos visites en nuestras oficinas. ¡Estaremos encantados de ayudarte!";
  };

  const sendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputValue),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    setInputValue("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-50"
        size="lg"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    );
  }

  return (
    <Card className="fixed bottom-6 right-6 w-96 h-[500px] shadow-2xl z-50 flex flex-col">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-lg flex items-center space-x-2">
          <Bot className="h-5 w-5 text-primary" />
          <span>Asistente Inmoboot</span>
        </CardTitle>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsOpen(false)}
          className="h-8 w-8 p-0"
        >
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col p-4">
        <ScrollArea className="flex-1 pr-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isBot
                      ? 'bg-muted text-foreground'
                      : 'bg-primary text-primary-foreground'
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {message.isBot ? (
                      <Bot className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    ) : (
                      <User className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    )}
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        
        <div className="flex space-x-2 mt-4">
          <Input
            placeholder="Escribe tu consulta..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1"
          />
          <Button onClick={sendMessage} size="sm">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Chatbot;