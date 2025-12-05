import { Button } from "@/components/ui/button";
import { openWhatsApp } from "@/lib/whatsapp";

const Benefits = () => {
  return (
    <section className="py-16 px-6 bg-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-8 leading-tight">
          Eu cuido do que está por trás dos seus sintomas — não só do que aparece na superfície.
        </h2>
        
        <div className="space-y-6 text-muted-foreground text-lg md:text-xl leading-relaxed mb-12">
          <p>
            A minha consulta não é uma lista do que você "pode ou não pode comer".
          </p>
          
          <p>
            É um <span className="text-foreground font-medium">mergulho no seu corpo</span>, na sua rotina, nos seus exames, nos seus sintomas e na maneira como você tem vivido.
          </p>
          
          <p>
            Eu conecto tudo: <span className="text-accent font-medium">sinais, histórico, comportamentos, emoções e biologia</span> — para entender porque o seu corpo está gritando e o que ele precisa para voltar a funcionar bem.
          </p>
          
          <p className="font-serif text-2xl md:text-3xl text-foreground mt-10 pt-6 border-t border-border">
            Cuidar do seu corpo não é sobre restrição — é sobre permitir que ele funcione como deveria.
          </p>
        </div>
        
        <Button 
          variant="cta" 
          size="lg"
          onClick={() => openWhatsApp('Olá! Quero entender melhor como funciona a consulta.')}
          data-gtm-section="benefits"
          data-gtm-action="whatsapp-click"
          className="gtm-whatsapp-button"
        >
          AGENDE SUA CONSULTA
        </Button>
      </div>
    </section>
  );
};

export default Benefits;