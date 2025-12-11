import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { openWhatsApp } from "@/lib/whatsapp";

const pillars = [
  {
    title: "Profundidade clínica",
    description: "Solicito e interpreto exames de forma funcional, estudo casos complexos, entendo os mecanismos por trás de cada sintoma."
  },
  {
    title: "Humanidade e escuta",
    description: "Não trato números. Trato pessoas. Cada orientação existe para fazer sentido na sua vida real."
  },
  {
    title: "Estratégia que respeita suas necessidades",
    description: "Nada de dietas impossíveis. O plano é pensado com base no seu dia a dia, no que é real e possível para você."
  }
];

const ForWho = () => {
  return (
    <section className="py-16 px-6 bg-primary">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 max-w-3xl mx-auto space-y-4">
          <h2 className="font-serif text-4xl md:text-5xl mb-6 text-primary-foreground">
            O Método
          </h2>
          <p className="text-lg text-primary-foreground/90 leading-relaxed">
            Você não precisa esperar piorar para começar a cuidar da sua saúde.
          </p>
          <p className="text-lg text-primary-foreground/90 leading-relaxed">
            Cada pessoa chega com uma história, uma rotina, um corpo e um contexto diferente. O meu método existe para entender o que está por trás do que você sente, reorganizar o que está desequilibrado e devolver ao seu corpo o que ele precisa para funcionar.
          </p>
          <p className="text-lg font-semibold text-primary-foreground mt-8">
            Não sigo protocolos prontos. Eu construo o seu protocolo com:
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <Card key={index} className="p-8 border-0 shadow-md hover:shadow-lg transition-smooth bg-card/95 backdrop-blur">
              <div className="text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                  <span className="text-accent-foreground font-bold text-xl">•</span>
                </div>
                <h3 className="font-serif text-2xl text-foreground">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Button 
            variant="cta" 
            size="lg"
            onClick={() => openWhatsApp('Olá! Quero conhecer melhor o método personalizado!')}
            data-gtm-section="for-who"
            data-gtm-action="whatsapp-click"
            className="gtm-whatsapp-button"
            title="https://wa.me/5511941837634"
          >
            AGENDE SUA CONSULTA
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ForWho;