const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-32 h-32">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          {/* Outer circle */}
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-primary-foreground"
          />
          
          {/* Inner circles pattern */}
          <circle cx="85" cy="85" r="8" className="fill-primary-foreground" />
          <circle cx="115" cy="85" r="8" className="fill-primary-foreground" />
          <circle cx="100" cy="105" r="8" className="fill-primary-foreground" />
          
          {/* Lines connecting circles */}
          <line x1="85" y1="85" x2="115" y2="85" stroke="currentColor" strokeWidth="1.5" className="text-primary-foreground" />
          <line x1="85" y1="85" x2="100" y2="105" stroke="currentColor" strokeWidth="1.5" className="text-primary-foreground" />
          <line x1="115" y1="85" x2="100" y2="105" stroke="currentColor" strokeWidth="1.5" className="text-primary-foreground" />
          
          {/* Monogram PD */}
          <text
            x="100"
            y="65"
            textAnchor="middle"
            className="fill-primary-foreground font-serif text-3xl font-bold"
          >
            PD
          </text>
          
          {/* Text around circle - top */}
          <path
            id="circlePath"
            d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
            fill="none"
          />
          <text className="text-[8px] tracking-widest fill-primary-foreground font-sans">
            <textPath href="#circlePath" startOffset="10%">
              PRYSCILLA DINIZ * NUTRIÇÃO E GASTRONOMIA
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
};

export default Logo;