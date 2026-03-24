"use client";

import { useEffect } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import gsap from "gsap";
import CountUp from "@/components/CountUp";
import DarkVeil from "@/components/DarkVeil";

export default function Hero() {
  useEffect(() => {
    const tl = gsap.timeline({
      ease: "power2.out",
    });

    //fondo 1
    tl.fromTo(
      "#bg-loading",
      {
        opacity: 1,
        zIndex: 100,
      },
      {
        duration: 2.5,
        zIndex: 80,
      },
    );

    //fondo 2
    tl.fromTo(
      "#bg-next-loading",
      {
        x: "-120%",
        width: "15000px",
        opacity: 1,
        ease: "sine.out",
        zIndex: 100,
      },
      {
        x: "200%",
        duration: 5,
        ease: "sine.in",
      },
    );

    tl.to(
      "#bg-loading",
      {
        opacity: 0,
        delay: 1,
      },
      "<1",
    );

    tl.fromTo(
      "#imgDiv",
      {
        y: "0",
        ease: "power1.inOut",
      },
      {
        y: "-200%",
        delay: 1,
        duration: 2,
        ease: "power1.inOut",
      },
      "<1",
    );
  }, []);

  return (
    <main
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* loading */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-100 ">
        <div
          className="absolute h-screen bg-red-500"
          id="bg-next-loading"
        ></div>
        <div
          className=" flex justify-center items-center absolute w-full h-screen bg-black"
          id="bg-loading"
        >
          <CountUp
            from={0}
            to={100}
            separator=","
            direction="up"
            duration={0.5}
            className="count-up-text text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 text-balance"
          />
        </div>
      </div>

      {/* Background */}
      <div className="w-full h-full md:h-screen absolute">
        <DarkVeil
          hueShift={238}
          noiseIntensity={0.05}
          scanlineIntensity={0}
          speed={1}
          scanlineFrequency={2.5}
          warpAmount={3}
        />
      </div>

      {/* section-container */}
      <section className="flex items-center  md:py-[4em] lg:px-48 overflow-hidden z-40 max-[768px]:flex-col ">
        {/* Imagen */}

        <div className=" max-w-6xl mx-auto px-6 py-20 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Imagen */}
            <div
              id="img"
              className={`relative flex-none overflow-hidden animate-img-transition max-[768px]:flex max-[768px]:items-center max-[768px]:justify-center max-[768px]:w-[50vw] max-[768px]:mr-0`}
            >
              <div
                id="imgDiv"
                className={`absolute top-0 w-full h-full rounded-3xl bg-(--color-primary)   md:w-80 md:h-80`} //${animation}
              >
                <img
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
                  src="/smile.svg"
                  alt="smile"
                  width={80}
                  height={80}
                />
              </div>

              <img
                className="md:w-80 md:h-80 object-cover rounded-3xl"
                src={"/foto-perfil.webp"}
                alt="Profile picture of Marcelo Mastroiani"
                width={600}
                height={400}
              />
            </div>

            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              <p className="text-white font-medium mb-3 tracking-widest uppercase text-sm">
                ¡Hola! Soy
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-balance">
                Marcelo Mastroiani
              </h1>

              <h2 className="text-xl md:text-2xl text-neutral-400 mb-6">
                Programador Full-Stack
              </h2>
              <p className="text-neutral-400 max-w-lg mb-8 leading-relaxed">
                Trabajo tanto en back-end como en front-end para crear
                aplicaciones que combinan diseño atractivo y funcionalidad
                eficiente.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-8">
                <a
                  href="#about"
                  className="inline-flex items-center justify-center px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition-colors w-full sm:w-auto"
                >
                  Descubre más sobre mí
                  <ArrowDown className="ml-2 h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-neutral-700 hover:border-neutral-600 text-white font-medium rounded-lg transition-colors w-full sm:w-auto"
                >
                  Contáctame
                </a>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <a
                  href="https://github.com/MarceloMastroiani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/marcelo-mastroiani/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:mastroianimarcelo04@gmail.com"
                  className="p-3 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about">
            <ArrowDown className="text-neutral-500" size={24} />
          </a>
        </div>
      </section>
    </main>
  );
}
