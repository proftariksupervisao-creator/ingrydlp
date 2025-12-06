import { Card } from "@/components/ui/card";
import drCaioImage from "@/assets/dr-caio.jpg";
import rossanaImage from "@/assets/rossana.jpg";

const teamMembers = [
  {
    name: "Dr. Caio",
    role: "Médico Funcional Integrativo",
    description: "Investiga a fundo as causas dos seus sintomas e contribui com uma abordagem médica funcional, que considera o corpo como um sistema interligado. Um olhar mais atento, humano e preventivo.",
    image: drCaioImage,
  },
  {
    name: "Rossana",
    role: "Nutri Personal Chef",
    description: "Transforma o plano alimentar em sabor e praticidade. Ela prepara suas refeições saudáveis no conforto da sua casa, respeitando as orientações nutricionais com afeto, leveza e sabor de comida de verdade.",
    image: rossanaImage,
  },
  {
    name: "Dr. Lucas",
    role: "Nutricionista Especializado em Endometriose",
    description: "Aprofunda o cuidado de pacientes com endometriose, trazendo um acompanhamento nutricional personalizado para quem convive com dores, inflamações e desequilíbrios hormonais.",
    image: null,
  },
];

const Team = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-4 text-foreground">
          EQUIPE INTEGRADA
        </h2>
        
        <p className="text-center text-foreground/80 text-lg md:text-xl mb-6 max-w-3xl mx-auto">
          Cuidado completo, com profissionais que caminham junto com você
        </p>
        
        <p className="text-center text-foreground/70 mb-16 max-w-4xl mx-auto leading-relaxed">
          Aqui, você não está sozinho. Para garantir uma transformação verdadeira, que vá além da nutrição e respeite todas as dimensões da sua saúde, você conta com uma equipe integrada, que compartilha dos mesmos valores e da mesma missão: restaurar sua qualidade de vida!
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-2xl bg-beige">
              <div className="relative h-80 bg-muted flex items-center justify-center">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-primary/30 animate-pulse" />
                  </div>
                )}
              </div>
              
              <div className="p-6 text-center">
                <h3 className="font-serif font-semibold text-foreground text-xl mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium text-sm mb-4">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
