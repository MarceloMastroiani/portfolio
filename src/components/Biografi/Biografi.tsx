import "./Biografi.css";
import Link from "next/link";
import { nunito } from "../fonts";
import { montserrat } from "../fonts";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Biografi() {
  return (
    <section className=" bio-section">
      <div
        className={`${nunito.className} flex flex-col justify-center gap-y-4 text-center text-balance w-[50vw] opacity-90 animate-bioDiv`}
      >
        <p className="text-white text-2xl ">
          Soy un programador{" "}
          <span className="text-[--color-primary]">comprometido</span> con el
          aprendizaje y la mejora{" "}
          <span className="text-[--color-primary]">constante</span> en cada
          proyecto que desarrollo. Disfruto creando aplicaciones que combinan un
          diseño atractivo con una experiencia{" "}
          <span className="text-[--color-primary]">funcional</span> y{" "}
          <span className="text-[--color-primary]">eficiente</span> para los
          usuarios.
        </p>

        <p className="text-white text-2xl ">
          Me esfuerzo por mantener{" "}
          <span className="text-[--color-primary]">
            altos estándares de calidad
          </span>{" "}
          en cada etapa del desarrollo, optimizando el rendimiento y
          asegurándome de que el producto final cumpla con las expectativas. Mi
          objetivo es ofrecer{" "}
          <span className="text-[--color-primary]">soluciones prácticas</span>{" "}
          que aporten valor real y hagan una diferencia tanto para los usuarios
          como para los negocios.
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
