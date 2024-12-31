import "./Biography.css";
import Link from "next/link";
import { nunito } from "../fonts";
import { montserrat } from "../fonts";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Biography() {
  return (
    <section className="section-container-biography ">
      <div className="div-container-biography ">
        <div className={`${nunito.className} div-parrafos-biography `}>
          <p className="text-white text-2xl opacity-90">
            Soy un programador{" "}
            <span className="text-[--color-primary] font-bold">
              comprometido
            </span>{" "}
            con el aprendizaje y la mejora{" "}
            <span className="text-[--color-primary] font-bold">constante</span>{" "}
            en cada proyecto que desarrollo. Disfruto creando aplicaciones que
            combinan un diseño atractivo con una experiencia{" "}
            <span className="text-[--color-primary] font-bold">funcional</span>{" "}
            y{" "}
            <span className="text-[--color-primary] font-bold">eficiente</span>{" "}
            para los usuarios.
          </p>

          <p className="text-white text-2xl opacity-90">
            Me esfuerzo por mantener{" "}
            <span className="text-[--color-primary] font-bold">
              altos estándares de calidad
            </span>{" "}
            en cada etapa del desarrollo, optimizando el rendimiento y
            asegurándome de que el producto final cumpla con las expectativas.
            Mi objetivo es ofrecer{" "}
            <span className="text-[--color-primary] font-bold">
              soluciones prácticas
            </span>{" "}
            que aporten valor real y hagan una diferencia tanto para los
            usuarios como para los negocios.
          </p>
        </div>

        <div className="button-biography ">
          <Link
            href="/projects"
            className={`${montserrat.className} text-2xl text-[--color-primary] leading-9 hover:underline`}
          >
            Ve mis proyectos
            <IoIosArrowRoundForward className="inline text-5xl" />
          </Link>
        </div>
      </div>
    </section>
  );
}
