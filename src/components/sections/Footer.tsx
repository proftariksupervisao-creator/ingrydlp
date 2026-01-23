import { Button } from "@/components/ui/button";
import { Instagram, MapPin } from "lucide-react";
import { Link } from "react-router-dom"; 
import { openWhatsApp } from "@/lib/whatsapp";

const Footer = () => {
  return (
    <footer id="contact" className="py-20 px-6 bg-dark text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="font-serif text-4xl md:text-5xl">
          Transforme sua vida e tenha mais energia
        </h2>
        
        <p className="text-xl text-primary-foreground/80">
          Busque um novo estilo de vida energético e produtivo
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <Button 
            variant="cta" 
            size="lg" 
            onClick={() => openWhatsApp('Olá! Quero agendar minha consulta!')} 
            data-gtm-section="footer" 
            data-gtm-action="whatsapp-click" 
            className="gtm-whatsapp-button text-base px-10 py-6"
          >
            AGENDE SUA CONSULTA
          </Button>
        </div>
        
        <div className="pt-12 border-t border-primary-foreground/20 space-y-6">
          <a href="https://maps.google.com/?q=Alameda+dos+Anapurus,1912" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
            <MapPin className="w-5 h-5" />
            <span>Alameda dos Anapurus, 1912 - Indianápolis, SP</span>
          </a>
          
          <div className="w-full max-w-2xl mx-auto rounded-xl overflow-hidden border border-primary-foreground/20">
            {/* Se o mapa abaixo não abrir, você precisará pegar o link 'Embed' correto no Google Maps */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.051378822006!2d-46.6644!3d-23.6049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a0bdace1b37%3A0x6e8045353526804a!2sAlameda%20dos%20Anapurus%2C%201912%20-%20Indian%C3%B3polis%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1625680000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do consultório"
            />
          </div>
        </div>
        
        <div className="flex flex-col items-center gap-4">
          <a href="https://www.instagram.com/ingrydcarolnutri/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
            <Instagram className="w-5 h-5" />
            <span>@ingrydcarolnutri</span>
          </a>
          
          {/* CORRIGIDO AQUI: Sem o .tsx */}
          <Link to="/politica-privacidade" className="text-sm text-primary-foreground/60 hover:text-primary transition-colors underline underline-offset-4">
            Política de Privacidade
          </Link>
        </div>
        
        <div className="text-sm text-primary-foreground/60 pt-8">
          <p>© {new Date().getFullYear()} Ingryd Caroline - Nutrição</p>
          <p className="mt-2">Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;