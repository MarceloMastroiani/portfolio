"use client";

import type React from "react";
import { useState } from "react";
import { Mail, MapPin, Send, Linkedin, Github } from "lucide-react";
import { toast } from "react-hot-toast";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const body = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      company: formData.get("company"), // honeypot
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error();
      }

      form.reset();
      toast.success("Mensaje enviado correctamente");
    } catch {
      toast.error("Ocurrió un error al enviar el mensaje");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-neutral-950 shadow-2xl">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-red-500 font-medium mb-2">Trabajemos juntos</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Contacto
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                ¿Tienes un proyecto en mente?
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                Estoy siempre abierto a nuevas oportunidades y colaboraciones.
                Si tienes una idea o proyecto que te gustaría desarrollar, no
                dudes en contactarme.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:mastroianimarcelo04@gmail.com"
                className="flex items-center gap-4 p-4 bg-neutral-800/50 rounded-xl hover:bg-neutral-800 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                  <Mail className="text-red-500" size={20} />
                </div>
                <div>
                  <p className="text-sm text-neutral-500">Email</p>
                  <p className="text-white font-medium">
                    mastroianimarcelo04@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-neutral-800/50 rounded-xl">
                <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center">
                  <MapPin className="text-red-500" size={20} />
                </div>
                <div>
                  <p className="text-sm text-neutral-500">Ubicación</p>
                  <p className="text-white font-medium">Argentina</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/marcelomastroiani"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-neutral-800 hover:bg-red-500 text-neutral-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/marcelomastroiani"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-neutral-800 hover:bg-red-500 text-neutral-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-white"
                >
                  Nombre
                </label>
                <input
                  id="name"
                  name="name"
                  placeholder="Tu nombre"
                  required
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-white"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="tu@email.com"
                  required
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                />
              </div>
              <input
                type="text"
                name="company"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="subject"
                className="text-sm font-medium text-white"
              >
                Asunto
              </label>
              <input
                id="subject"
                name="subject"
                placeholder="¿En qué puedo ayudarte?"
                required
                className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-white"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Cuéntame sobre tu proyecto..."
                rows={5}
                required
                className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center px-6 py-3 bg-red-500 hover:bg-red-600 disabled:bg-red-500/50 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors"
            >
              {isSubmitting ? (
                "Enviando..."
              ) : (
                <>
                  Enviar mensaje
                  <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

// import Link from "next/link";
// import { montserrat } from "../../fonts";
// import { FaGithub } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa6";
// import { IoNewspaperOutline } from "react-icons/io5";

// export default function FooterContact() {
//   return (
//     <footer className="sticky bottom-0 flex flex-col items-center justify-center h-[88vh] bg-(--background-secondary) py-[6em] px-[10em] z-10 max-md:relative max-md:bottom-0 max-md:py-[6em] max-md:px-4">
//       {/* LINK para contactar */}
//       <Link
//         href={"mailto:mastroianimarcelo04@gmail.com"}
//         target="_blank"
//         rel="noreferrer"
//         className="flex flex-col items-center justify-center"
//       >
//         <p
//           className={`${montserrat.className} text-3xl text-white animate-pulse opacity-70 hover:opacity-100 hover:text-(--color-primary) hover:scale-105 ease-in-out duration-300 max-lg:text-xl max-md:text-lg max-lg:hover:opacity-70 max-lg:hover:text-white max-lg:hover:scale-100 `}
//         >
//           mastroianimarcelo04@gmail.com
//         </p>
//       </Link>

//       {/* iconos de Ubicacion  */}
//       <div
//         className={`${montserrat.className} absolute bottom-5 left-10 max-md:left-2 max-md:ml-2 `}
//       >
//         <p className="text-white text-xl text-center opacity-80 font-extrabold max-md:text-sm ">
//           Ubicación
//         </p>
//         <p className="text-(--color-primary) text-xl opacity-80 font-bold max-md:text-sm  ">
//           Buenos Aires, Argentina
//         </p>
//         <p className="text-(--color-primary) text-xl opacity-80 font-bold max-md:text-sm ">
//           Tel: <span className="text-white">+54 9 2364-373048</span>
//         </p>
//       </div>

//       {/* Iconos redes sociales */}
//       <div className="absolute bottom-5 right-10 flex gap-4 max-md:gap-3">
//         <Link
//           href="https://github.com/MarceloMastroiani"
//           target="_blank"
//           rel="noopener noreferrer"
//           aria-label="Github"
//           className="text-white text-4xl opacity-70 hover:opacity-100 hover:text-(--color-primary) hover:scale-125 ease-in-out duration-300 max-md:text-2xl"
//         >
//           <FaGithub className="inline " />
//         </Link>
//         <Link
//           href="https://www.linkedin.com/in/marcelo-mastroiani"
//           target="_blank"
//           rel="noopener noreferrer"
//           aria-label="Linkedin"
//           className="text-blue-500 text-4xl opacity-70 hover:opacity-100 hover:text-(--color-primary) hover:scale-125 ease-in-out duration-300 max-md:text-2xl"
//         >
//           <FaLinkedin className="inline" />
//         </Link>
//         <Link
//           //problema con el link
//           href="/CV-MarceloMastroiani.pdf"
//           target="_blank"
//           rel="noopener noreferrer"
//           aria-label="CV"
//           className="text-white text-4xl opacity-70 hover:opacity-100 hover:text-(--color-primary) hover:scale-125 ease-in-out duration-300 max-md:text-2xl"
//         >
//           <IoNewspaperOutline className="inline" />
//         </Link>
//       </div>
//     </footer>
//   );
// }
