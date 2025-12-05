import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/ingryd-hero.jpg";
import heroImageDesktop from "@/assets/ingryd-hero-desktop.png";
import { openWhatsApp } from "@/lib/whatsapp";
import { memo } from "react";
const Hero = memo(() => {
  return <section className="relative min-h-screen bg-gradient-to-br from-dark via-dark/95 to-primary/20 overflow-hidden">
      {/* Mobile Layout - Image Background */}
      <div className="lg:hidden relative min-h-screen flex items-end justify-center">
        <div className="absolute inset-0 bg-cover bg-no-repeat will-change-transform" style={{
        backgroundImage: `url(${heroImage})`,
        backgroundPosition: '45% 25%'
      }} role="img" aria-label="Ingryd Caroline - Nutricionista" />
        
        {/* Mobile Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
        
        {/* Mobile Content */}
        <div className="relative z-10 w-full px-4 sm:px-6 pb-12 sm:pb-16 text-center">
          <div className="space-y-4 sm:space-y-6 animate-fade-in">
            <p className="text-sm sm:text-base font-light tracking-wide text-white/90">
              Você não nasceu para viver à beira da exaustão.
            </p>
            
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl leading-tight font-bold text-white">
              Recupere a saúde e energia que você nunca deveria ter perdido
            </h1>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-5 border border-white/20 max-w-2xl mx-auto">
              <p className="text-xs sm:text-sm leading-relaxed text-white/95">
                Com a alimentação adequada e mudanças possíveis, ele se reorganiza, desinflama e devolve a você o bem-estar e a vitalidade que ficaram pelo caminho.
              </p>
            </div>
          </div>
          
          <div className="pt-6 sm:pt-8 animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
            <Button variant="cta" size="lg" onClick={() => openWhatsApp()} data-gtm-section="hero" data-gtm-action="whatsapp-click" className="gtm-whatsapp-button text-sm sm:text-base px-8 sm:px-12 py-5 sm:py-6 shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 group">
              AGENDE SUA CONSULTA
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-3 pt-6 animate-fade-in" style={{
          animationDelay: '0.3s'
        }}>
            <div className="flex -space-x-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-accent border-2 border-white/50" />
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-accent/80 border-2 border-white/50" />
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-accent/60 border-2 border-white/50" />
            </div>
            <p className="text-xs sm:text-sm text-white/80">
              + de <span className="font-bold text-white">200 pessoas</span> transformadas
            </p>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Background Image with Left-Aligned Text */}
      <div className="hidden lg:flex min-h-screen items-center">
        <div className="absolute inset-0 bg-cover bg-no-repeat will-change-transform" style={{
        backgroundImage: `url(${heroImageDesktop})`,
        backgroundPosition: '60% center'
      }} role="img" aria-label="Ingryd Caroline - Nutricionista" />
        
        {/* Desktop Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        
        {/* Desktop Content - Left Aligned */}
        <div className="container mx-auto px-6 xl:px-12 relative z-10">
          <div className="max-w-2xl text-left space-y-8 animate-fade-in">
            <div className="space-y-6">
              <p className="text-lg font-light tracking-wide text-white/90">
                Você não nasceu para viver à beira da exaustão.
              </p>
              
              <h1 className="font-serif text-3xl xl:text-4xl 2xl:text-5xl leading-tight font-bold text-white">
                Recupere a autoestima e a saúde que você nunca deveria ter perdido
              </h1>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <p className="text-base xl:text-lg leading-relaxed text-white/95">
                  Com a alimentação adequada e mudanças possíveis o corpo desinflama e devolve a você o bem-estar e a vitalidade que ficaram pelo caminho.
                </p>
              </div>
            </div>
            
            <div className="animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
              <Button variant="cta" size="lg" onClick={() => openWhatsApp()} data-gtm-section="hero" data-gtm-action="whatsapp-click" className="gtm-whatsapp-button text-lg px-12 py-6 shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 group">
                AGENDE SUA CONSULTA
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="flex items-center gap-3 animate-fade-in" style={{
            animationDelay: '0.3s'
          }}>
              <div className="flex -space-x-2">
                <div className="w-9 h-9 rounded-full bg-accent border-2 border-white/50" />
                <div className="w-9 h-9 rounded-full bg-accent/80 border-2 border-white/50" />
                <div className="w-9 h-9 rounded-full bg-accent/60 border-2 border-white/50" />
              </div>
              <p className="text-sm text-white/80">
                + de <span className="font-bold text-white">200 pessoas</span> transformadas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
});
Hero.displayName = "Hero";
export default Hero;