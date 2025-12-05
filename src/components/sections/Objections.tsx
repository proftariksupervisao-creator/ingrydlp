import { Button } from "@/components/ui/button";
import { openWhatsApp } from "@/lib/whatsapp";

const Objections = () => {
  return (
    <section className="py-20 px-6 bg-primary">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-8 leading-tight">
          Saúde não é apenas ausência de doença.
        </h2>
        
        <div className="space-y-6 text-primary-foreground/90 text-lg md:text-xl leading-relaxed mb-12">
          <p className="font-medium">
            Saúde é <span className="text-accent">vitalidade</span>, <span className="text-accent">energia</span>, <span className="text-accent">bem-estar</span>, <span className="text-accent">autoestima</span>, <span className="text-accent">autonomia</span>, <span className="text-accent">longevidade</span>.
          </p>
          
          <p>
            É acordar com disposição, dormir com tranquilidade e viver o dia com presença.
          </p>
          
          <p className="font-serif text-2xl md:text-3xl text-primary-foreground mt-8">
            Meu trabalho existe para isso:
          </p>
          
          <p className="text-primary-foreground">
            Para ajudar você a interpretar seu corpo, nutrir suas necessidades reais, desinflamar o que está sobrecarregado e reconstruir a vida que você quer viver — com saúde, vitalidade e autonomia.
          </p>
        </div>
        
        <Button 
          variant="cta" 
          size="lg"
          onClick={() => openWhatsApp('Olá! Quero começar minha transformação com você.')}
          data-gtm-section="objections"
          data-gtm-action="whatsapp-click"
          className="gtm-whatsapp-button"
        >
          AGENDE SUA CONSULTA
        </Button>
      </div>
    </section>
  );
};

export default Objections;