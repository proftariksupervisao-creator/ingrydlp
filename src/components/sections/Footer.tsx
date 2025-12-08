import { Button } from "@/components/ui/button";
import { Instagram, MapPin } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";
const Footer = () => {
  return <footer id="contact" className="py-20 px-6 bg-dark text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="font-serif text-4xl md:text-5xl">
          Transforme sua vida e tenha mais energia
        </h2>
        
        <p className="text-xl text-primary-foreground/80">
          Busque um novo estilo de vida energético e produtivo
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <Button variant="cta" size="lg" onClick={() => openWhatsApp('Olá! Quero agendar minha consulta!')} data-gtm-section="footer" data-gtm-action="whatsapp-click" className="gtm-whatsapp-button text-base px-10 py-6">
            AGENDE SUA CONSULTA
          </Button>
          
          
        </div>
        
        <div className="pt-12 border-t border-primary-foreground/20">
          <a href="https://www.google.com/maps/search/?api=1&query=Alameda+dos+Anapurus+1912+Higienopolis+SP" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
            <MapPin className="w-5 h-5" />
            <span>Alameda dos Anapurus, 1912 - Indianápolis, SP</span>
          </a>
        </div>
        
        <div>
          <a href="https://www.instagram.com/ingrydcarolnutri/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
            <Instagram className="w-5 h-5" />
            <span>@ingrydcarolnutri</span>
          </a>
        </div>
        
        <div className="text-sm text-primary-foreground/60 pt-8">
          <p>© 2025 Ingryd Caroline - Nutrição</p>
          <p className="mt-2">Todos os direitos reservados</p>
        </div>
      </div>
    </footer>;
};
export default Footer;