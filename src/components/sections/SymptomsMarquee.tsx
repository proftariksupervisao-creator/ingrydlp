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
  return (
    <section className="py-8 bg-sage-dark overflow-hidden">
      <div className="relative">
        {/* First row - scrolling left */}
        <div className="flex mb-4 overflow-hidden">
          <div className="flex animate-marquee md:animate-marquee-slow">
            {symptoms.map((symptom, index) => (
              <span
                key={`row1a-${index}`}
                className="mx-4 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white font-medium text-sm md:text-base border border-white/20 whitespace-nowrap"
              >
                {symptom}
              </span>
            ))}
          </div>
          <div className="flex animate-marquee md:animate-marquee-slow" aria-hidden="true">
            {symptoms.map((symptom, index) => (
              <span
                key={`row1b-${index}`}
                className="mx-4 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white font-medium text-sm md:text-base border border-white/20 whitespace-nowrap"
              >
                {symptom}
              </span>
            ))}
          </div>
        </div>
        
        {/* Second row - scrolling right */}
        <div className="flex overflow-hidden">
          <div className="flex animate-marquee-reverse md:animate-marquee-reverse-slow">
            {[...symptoms].reverse().map((symptom, index) => (
              <span
                key={`row2a-${index}`}
                className="mx-4 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white font-medium text-sm md:text-base border border-white/20 whitespace-nowrap"
              >
                {symptom}
              </span>
            ))}
          </div>
          <div className="flex animate-marquee-reverse md:animate-marquee-reverse-slow" aria-hidden="true">
            {[...symptoms].reverse().map((symptom, index) => (
              <span
                key={`row2b-${index}`}
                className="mx-4 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white font-medium text-sm md:text-base border border-white/20 whitespace-nowrap"
              >
                {symptom}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SymptomsMarquee;