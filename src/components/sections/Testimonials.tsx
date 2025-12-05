import { useState, useEffect, useCallback, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { openWhatsApp } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    text: "A Consulta da Dra. Ingryd foi incrivelmente diferente de todas que já passei, ela é humana, atenciosa aos detalhes, entende a sua dor, acolhe e cuida do seu objetivo de forma sensata e respeitosa. Olhou todos os meus exames, pediu outros exames que nem médico havia pedido e de fato consegui chegar no resultado que esperava. Indico de olhos fechados!",
    author: "Nathalia M.",
  },
  {
    text: "Maravilhosa, a dr deixa tudo mais leve que se encaixe no dia a dia, nada de extremismo, fazer as dietas recomendadas por ela me deixaram com mais disposição, melhorou minha autoestima. Recomendo, eliminei 8 quilos sem passar fome, ou melhor comendo muito bem.",
    author: "Danyelle R.",
  },
  {
    text: "Super recomendo essa Nutricionista, pois ela é super atenciosa, trata todo o processo com bastante informações e leveza!!! Em 1 mês de acompanhamento já tive excelente resultado... se você quer um tratamento focado e personalizado, é com ela!!!",
    author: "Diego S.",
  },
  {
    text: "Profissional MARAVILHOSA! Atenciosa, acolhedora, cuidadosa, paciente rsrs de fato, a melhor nutricionista. Sempre pronta para nos ajudar, puxar a orelha também rsrs mas sempre tenta entender o que gostamos e como somos e adequa a alimentação de acordo conosco. Eu não tenho palavras… nota 100000",
    author: "Suky A.",
  },
];

const TestimonialCard = ({ text, author }: { text: string; author: string }) => (
  <Card className="p-6 border-0 shadow-md relative flex-shrink-0 w-[85vw] md:w-[45%] bg-card">
    <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
    <div className="space-y-4">
      <p className="text-foreground leading-relaxed italic">
        "{text}"
      </p>
      <p className="text-primary font-semibold">
        — {author}
      </p>
    </div>
  </Card>
);

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  // Detectar mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Triplicar para loop infinito suave
  const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];
  const totalOriginal = testimonials.length;

  const goToSlide = useCallback((index: number) => {
    setIsTransitioning(true);
    setActiveIndex(index + totalOriginal); // Go to middle set
  }, [totalOriginal]);

  const nextSlide = useCallback(() => {
    setIsTransitioning(true);
    setActiveIndex((prev) => prev + 1);
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Handle infinite loop reset
  useEffect(() => {
    if (activeIndex >= totalOriginal * 2) {
      // Reached end of middle set, jump to start of middle set
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setActiveIndex(activeIndex - totalOriginal);
      }, 500);
      return () => clearTimeout(timeout);
    } else if (activeIndex < totalOriginal) {
      // Before middle set, jump to middle set
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setActiveIndex(activeIndex + totalOriginal);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [activeIndex, totalOriginal]);

  // Re-enable transition after instant jump
  useEffect(() => {
    if (!isTransitioning) {
      const timeout = setTimeout(() => setIsTransitioning(true), 50);
      return () => clearTimeout(timeout);
    }
  }, [isTransitioning]);

  const getTransform = () => {
    // Mobile: card é 85vw + 24px gap | Desktop: card é 50% + 24px gap
    if (isMobile) {
      return `translateX(calc(-${activeIndex * 85}vw - ${activeIndex * 24}px))`;
    }
    return `translateX(calc(-${activeIndex * 50}% - ${activeIndex * 24}px))`;
  };

  // Get real index for dots (0 to totalOriginal-1)
  const realIndex = ((activeIndex % totalOriginal) + totalOriginal) % totalOriginal;

  return (
    <section className="py-20 bg-secondary overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl mb-6 text-foreground">
            Depoimentos
          </h2>
          <p className="text-xl text-foreground leading-relaxed">
            Experimente o que é viver com energia do acordar ao dormir — sem cansaço, sem peso, sem sobreviver no automático
          </p>
        </div>
      </div>
      
      {/* Carousel Container */}
      <div 
        className="relative w-full px-6 md:px-12"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="overflow-hidden">
          <div 
            ref={trackRef}
            className={cn(
              "flex gap-6",
              isTransitioning && "transition-transform duration-500 ease-out"
            )}
            style={{ transform: getTransform() }}
          >
            {extendedTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                text={testimonial.text}
                author={testimonial.author}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              realIndex === index
                ? "bg-primary w-8"
                : "bg-primary/30 hover:bg-primary/50"
            )}
            aria-label={`Ver depoimento ${index + 1}`}
          />
        ))}
      </div>
      
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mt-16 mb-8 max-w-3xl mx-auto">
          <p className="text-xl text-foreground leading-relaxed italic">
            Quando o corpo recebe o que precisa, ele devolve o que você sempre buscou: saúde, leveza, energia e presença na própria vida.
          </p>
        </div>
        
        <div className="flex justify-center mt-12">
          <Button 
            variant="cta" 
            size="lg"
            onClick={() => openWhatsApp('Olá! Vi os depoimentos e quero ter os mesmos resultados!')}
            data-gtm-section="testimonials"
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

export default Testimonials;
