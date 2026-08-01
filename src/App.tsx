"use client";

import { Footer } from "@/components/layout/FooterContact/footer";
import { Navigation } from "@/components/layout/Navigation/navigation";
import Contact from "@/components/layout/FooterContact/contact";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Home/Hero";
import { Skills } from "@/components/sections/Skills/skill";
import Projects from "@/components/sections/projects";

export default function app() {
  return (
    <div className="relative">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-red-500 focus:text-white focus:rounded-lg focus:font-medium"
      >
        Saltar al contenido
      </a>
      {/* Footer fijo en el fondo */}
      <div className="fixed bottom-0 left-0 right-0 z-0">
        <Footer />
      </div>
      <main id="main-content" className="relative z-10 bg-neutral-950">
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
