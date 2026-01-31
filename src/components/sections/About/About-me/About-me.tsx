import { Code2, Server, Palette, Zap } from "lucide-react";

const highlights = [
  {
    icon: Server,
    title: "Back-end",
    description:
      "NestJS, Node.js, APIs RESTful y arquitectura de microservicios",
  },
  {
    icon: Code2,
    title: "Front-end",
    description: "React, Next.js, TypeScript y diseño responsivo moderno",
  },
  {
    icon: Palette,
    title: "Diseño UI/UX",
    description: "Interfaces intuitivas con atención al detalle visual",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimización de rendimiento y mejores prácticas",
  },
];

export default function AboutMe() {
  return (
    <section id="about" className="py-24 bg-neutral-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-red-500 font-medium mb-2 tracking-widest uppercase text-sm">
            Conóceme
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sobre mí<span className="text-red-500">.</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed text-lg">
              Soy un desarrollador full-stack apasionado por crear soluciones
              digitales que marcan la diferencia. Mi enfoque combina la
              creatividad del diseño con la lógica de la programación para
              entregar productos de alta calidad.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Con experiencia en tecnologías modernas tanto del lado del cliente
              como del servidor, me especializo en construir aplicaciones web
              escalables, eficientes y con una excelente experiencia de usuario.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Siempre estoy buscando nuevos desafíos y oportunidades para
              aprender y crecer profesionalmente, manteniéndome actualizado con
              las últimas tendencias y mejores prácticas del desarrollo web.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="p-6 bg-background rounded-xl border border-border hover:border-primary/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
