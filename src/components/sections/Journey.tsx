import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { openWhatsApp } from "@/lib/whatsapp";

const profiles = [
  "Vive no efeito sanfona ou tenta emagrecer sem resultados, e busca por um caminho possível, saudável e duradouro.",
  "Teme efeitos colaterais, rebote ou perda de massa muscular dos remédios emagrecedores — e busca orientação para emagrecer com segurança.",
  "Acorda cansado, sem foco, irrita-se com facilidade e sente que o corpo já não acompanha o ritmo intenso da vida.",
  "Sofre com TPM intensa, cólicas, endometriose, SOP, alterações de humor e ciclos irregulares — sinais que você já entendeu que não são normais.",
  "Inchaço, insônia, acne, intestino preso, queda de cabelo e outros sinais que afetam seu humor, trabalho e autoestima.",
  "Estão com os exames alterados e um medo crescente de piorar e ficar doente, mas acreditam que ainda dá tempo de mudar.",
  "Convivem com as dores dos diagnósticos que limitam sua rotina, e sentem que a medicação sozinha não está resolvendo.",
  "Deseja envelhecer bem, prevenir doenças e ter energia para viver a rotina, ver os netos crescerem e realizar os seus sonhos.",
];

const Journey = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-6">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">
            Seu corpo está pedindo socorro — e você sabe disso.
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Meu trabalho é te ajudar a responder esse pedido, fornecendo o que seu corpo precisa para voltar a funcionar na sua capacidade máxima!
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="font-serif text-2xl md:text-3xl text-center text-foreground">
            Atendo pessoas que:
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {profiles.map((profile, index) => {
              // Desktop: left column (even index) = white, right column (odd index) = green
              // Mobile: alternating colors
              const isGreen = index % 2 === 1;
              
              return (
                <Card 
                  key={index} 
                  className={`relative overflow-hidden border-0 shadow-md hover:shadow-lg transition-smooth h-full ${
                    isGreen ? 'bg-primary' : 'bg-card'
                  }`}
                >
                  <div className={`absolute left-0 top-0 bottom-0 w-1 ${
                    isGreen ? 'bg-primary-foreground/30' : 'bg-primary'
                  }`} />
                  <div className="p-6 pl-5">
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1 ${
                        isGreen ? 'bg-primary-foreground' : 'bg-primary'
                      }`}>
                        <Check className={`w-4 h-4 ${
                          isGreen ? 'text-primary' : 'text-primary-foreground'
                        }`} />
                      </div>
                      <p className={`leading-relaxed flex-1 ${
                        isGreen ? 'text-primary-foreground' : 'text-foreground'
                      }`}>
                        {profile}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        <p className="text-center text-lg text-muted-foreground italic max-w-3xl mx-auto">
          Esses sintomas que hoje ainda parecem pequenos, são sinais do seu corpo de que ele já está no limite.
        </p>
        
        <div className="flex justify-center mt-12">
          <Button 
            variant="cta" 
            size="lg"
            onClick={() => openWhatsApp('Olá! Quero saber mais sobre o acompanhamento nutricional.')}
            data-gtm-section="journey"
            data-gtm-action="whatsapp-click"
            className="gtm-whatsapp-button"
          >
            AGENDE SUA CONSULTA
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Journey;
