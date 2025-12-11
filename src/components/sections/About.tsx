import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import aboutImage from "@/assets/ingryd-about.jpg";
import { openWhatsApp } from "@/lib/whatsapp";
const About = () => {
  return <section className="py-20 px-6 bg-primary">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-16 text-primary-foreground">Quem é a Dra. Ingryd?</h2>
        
        <Card className="overflow-hidden border-0 shadow-2xl bg-beige">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
              <h3 className="font-serif font-semibold text-foreground text-2xl">CRN 67182</h3>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Sou nutricionista funcional integrativa, com um olhar clínico voltado à estética corporal, sinais e sintomas, longevidade e qualidade de vida.
                </p>
                
                <p>
                  Mas, antes de qualquer título, sou alguém que conhece o peso de viver em um corpo que parece não responder, que dá sinais que ninguém explica e que, muitas vezes, é tratado como se estivesse tudo bem — quando claramente não está.
                </p>
                
                <p>
                  Foi dessa vivência, de dúvidas, desconfortos, limitações e da busca incansável por respostas, que nasceu minha forma de trabalhar. Com anos de estudo, prática clínica, interpretação funcional de exames e aprofundamento em saúde da mulher, desenvolvi uma abordagem identificando causas, reorganizando o que o corpo perdeu pelo caminho e conduzindo meus pacientes a uma saúde que se sustenta de verdade, proporcionando aos meus pacientes um caminho possível rumo à vitalidade.
                </p>
              </div>
            </div>
            
            <div className="relative min-h-[400px] md:min-h-full">
              <img src={aboutImage} alt="Dra. Ingryd - Nutricionista Funcional" className="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" />
            </div>
          </div>
        </Card>
        
        <div className="flex justify-center mt-12">
          <Button variant="cta" size="lg" onClick={() => openWhatsApp('Olá, Dra. Ingryd! Quero conhecer melhor seu trabalho!')} data-gtm-section="about" data-gtm-action="whatsapp-click" className="gtm-whatsapp-button" title="https://wa.me/5511941837634">
            AGENDE SUA CONSULTA
          </Button>
        </div>
      </div>
    </section>;
};
export default About;