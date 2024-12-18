import "./Biografi.css";
import Link from "next/link";
import { nunito } from "../fonts";
import { montserrat } from "../fonts";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Biografi() {
  return (
    <section className=" bio-section">
      <div
        className={`${nunito.className} flex flex-col justify-center gap-y-4 text-center text-balance w-[50vw] animate-bioDiv`}
      >
        <p className="text-white text-2xl ">
          Soy un <span className="text-[--color-primary]">programador</span>{" "}
          apasionado por la tecnología y el aprendizaje constante. Me esfuerzo
          por crecer cada día, no solo desarrollando habilidades técnicas, sino
          también fortaleciendo mi capacidad para trabajar en equipo y colaborar
          efectivamente.
        </p>

        <p className="text-white text-2xl ">
          Disfruto creando aplicaciones que no solo destacan por su diseño
          atractivo, sino también por ofrecer una experiencia funcional y
          eficiente a los usuarios. Me aseguro de que cada proyecto cumpla con{" "}
          <span className="text-[--color-primary]">
            altos estándares de calidad
          </span>
          , optimizando tiempos de carga y mejorando la experiencia del usuario
          final.
        </p>

        <p className="text-white text-2xl">
          Cada proyecto que desarrollo está enfocado en{" "}
          <span className="text-[--color-primary]">ofrecer soluciones</span>{" "}
          prácticas y eficientes que realmente marquen una diferencia en la vida
          de los usuarios o el éxito de un negocio. Mi compromiso es entregar
          soluciones que no solo funcionen, sino que también superen las
          expectativas y aporten valor real.
        </p>
      </div>

      <div className="bio-button">
        <Link
          href="/projects"
          className={`${montserrat.className} text-2xl text-[--color-primary] leading-9 hover:underline`}
        >
          Ve mis proyectos
          <IoIosArrowRoundForward className="inline text-5xl" />
        </Link>
      </div>
    </section>
  );
}
