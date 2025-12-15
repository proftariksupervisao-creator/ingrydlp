import { lazy, Suspense } from "react";
import Hero from "@/components/sections/Hero";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

// Lazy load components below the fold for better initial load performance
const Journey = lazy(() => import("@/components/sections/Journey"));
const SymptomsMarquee = lazy(() => import("@/components/sections/SymptomsMarquee"));
const Objections = lazy(() => import("@/components/sections/Objections"));
const Benefits = lazy(() => import("@/components/sections/Benefits"));
const ForWho = lazy(() => import("@/components/sections/ForWho"));
const Testimonials = lazy(() => import("@/components/sections/Testimonials"));
const About = lazy(() => import("@/components/sections/About"));
const Team = lazy(() => import("@/components/sections/Team"));
const Footer = lazy(() => import("@/components/sections/Footer"));

const Index = () => {
  return (
    <>
      <main className="overflow-x-hidden">
        <Hero />
        <Suspense fallback={<div className="min-h-screen" />}>
          <Journey />
          <SymptomsMarquee />
          <Objections />
          <Benefits />
          <ForWho />
          <Testimonials />
          <About />
          <Team />
          <Footer />
        </Suspense>
      </main>
      <FloatingWhatsApp />
    </>
  );
};

export default Index;