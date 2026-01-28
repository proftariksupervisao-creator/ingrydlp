import { Card } from "@/components/ui/card";
import drLucasImage from "@/assets/dr-lucas.jpg";

const Team = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-4 text-foreground">
          EQUIPE INTEGRADA
        </h2>
        
        <p className="text-center text-foreground/80 text-lg md:text-xl mb-6 max-w-3xl mx-auto">
          Cuidado completo, com profissionais que caminham junto com você
        </p>
        
        <p className="text-center text-foreground/70 mb-16 max-w-4xl mx-auto leading-relaxed">
          Aqui, você não está sozinho. Para garantir uma transformação verdadeira, que vá além da nutrição e respeite todas as dimensões da sua saúde, você conta com uma equipe integrada, que compartilha dos mesmos valores e da mesma missão: restaurar sua qualidade de vida!
        </p>

        <Card className="overflow-hidden border-0 shadow-2xl bg-beige max-w-md mx-auto">
          <div className="relative h-96 bg-muted flex items-center justify-center">
            <img
              src={drLucasImage}
              alt="Dr. Lucas Cardoso"
              className="w-full h-full object-cover object-top"
              loading="lazy"
              decoding="async"
            />
          </div>
          
          <div className="p-8 text-center">
            <h3 className="font-serif font-semibold text-foreground text-2xl mb-2">
              Dr. Lucas Cardoso
            </h3>
            <p className="text-primary font-medium text-base mb-4">
              Nutricionista Especializado em Endometriose e Nutrição Esportiva
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              Aprofunda o cuidado de pacientes com endometriose, trazendo um acompanhamento nutricional personalizado para quem convive com dores, inflamações e desequilíbrios hormonais.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Team;
