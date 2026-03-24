"use client";

import Contact from "@/components/layout/FooterContact/contact";
import { Footer } from "@/components/layout/FooterContact/footer";
import { Navigation } from "@/components/layout/Navigation/navigation";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Home/Hero";
import { Skills } from "@/components/sections/Skills/skill";
import Projects from "@/components/sections/projects";

export default function app() {
  return (
    <div className="relative">
      {/* Footer fijo en el fondo */}
      <div className="fixed bottom-0 left-0 right-0 z-0">
        <Footer />
      </div>
      <main className="relative z-10 bg-neutral-950">
        <Navigation />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      {/* Espaciador para revelar el footer al final */}
      <div className="h-20 bg-transparent" />
    </div>
  );
}
