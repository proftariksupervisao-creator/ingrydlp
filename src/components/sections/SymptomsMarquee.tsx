import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const symptoms = [
  "Fadiga crônica",
  "Dores de cabeça frequentes",
  "Insônia",
  "Queda de cabelo",
  "Dificuldade de concentração",
  "Falta de libido",
  "Irritabilidade",
  "Ansiedade",
  "Diabetes",
  "Pré-diabetes",
  "Hipotireoidismo",
  "Hipertireoidismo",
  "Doenças autoimunes",
  "Resistência à insulina",
  "SOP",
  "Endometriose",
  "Colesterol alto",
  "Gordura no fígado",
  "Hipertensão arterial",
  "Sobrepeso e obesidade",
  "Efeito sanfona",
  "Desregulação hormonal",
  "TPM intensa",
  "Ciclos menstruais irregulares",
  "Desequilíbrio hormonal",
  "Intestino preso",
  "Diarreia frequente",
  "Estufamento e gases",
  "Refluxo gástrico",
  "Má digestão",
  "Intolerâncias alimentares",
  "Síndrome do Intestino Irritável",
  "Acne hormonal",
  "Celulite",
  "Retenção de líquidos",
  "Flacidez",
  "Baixa autoestima",
  "Dificuldade em ganhar massa muscular",
];

const SymptomsMarquee = () => {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft1, setScrollLeft1] = useState(0);
  const [scrollLeft2, setScrollLeft2] = useState(0);

  const handleTouchStart = (e: React.TouchEvent, rowRef: React.RefObject<HTMLDivElement>, setScrollLeft: (val: number) => void) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX);
    if (rowRef.current) {
      const transform = window.getComputedStyle(rowRef.current).transform;
      const matrix = new DOMMatrixReadOnly(transform);
      setScrollLeft(matrix.m41);
    }
  };

  const handleTouchMove = (e: React.TouchEvent, rowRef: React.RefObject<HTMLDivElement>, scrollLeft: number) => {
    if (!isDragging || !rowRef.current) return;
    const x = e.touches[0].pageX;
    const walk = (x - startX) * 1.5;
    rowRef.current.style.transform = `translateX(${scrollLeft + walk}px)`;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Reset animation after drag
  useEffect(() => {
    if (!isDragging) {
      const timeout = setTimeout(() => {
        if (row1Ref.current) row1Ref.current.style.transform = '';
        if (row2Ref.current) row2Ref.current.style.transform = '';
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [isDragging]);

  return (
    <section className="py-8 bg-sage-dark overflow-hidden">
      <div className="relative">
        {/* First row - scrolling left */}
        <div 
          ref={row1Ref}
          className={cn(
            "flex whitespace-nowrap mb-4",
            !isDragging && "animate-marquee md:animate-marquee-slow"
          )}
          onTouchStart={(e) => handleTouchStart(e, row1Ref, setScrollLeft1)}
          onTouchMove={(e) => handleTouchMove(e, row1Ref, scrollLeft1)}
          onTouchEnd={handleTouchEnd}
        >
          {[...symptoms, ...symptoms].map((symptom, index) => (
            <span
              key={`row1-${index}`}
              className="mx-4 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white font-medium text-sm md:text-base border border-white/20"
            >
              {symptom}
            </span>
          ))}
        </div>
        
        {/* Second row - scrolling right */}
        <div 
          ref={row2Ref}
          className={cn(
            "flex whitespace-nowrap",
            !isDragging && "animate-marquee-reverse md:animate-marquee-reverse-slow"
          )}
          onTouchStart={(e) => handleTouchStart(e, row2Ref, setScrollLeft2)}
          onTouchMove={(e) => handleTouchMove(e, row2Ref, scrollLeft2)}
          onTouchEnd={handleTouchEnd}
        >
          {[...symptoms.slice().reverse(), ...symptoms.slice().reverse()].map((symptom, index) => (
            <span
              key={`row2-${index}`}
              className="mx-4 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white font-medium text-sm md:text-base border border-white/20"
            >
              {symptom}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SymptomsMarquee;
