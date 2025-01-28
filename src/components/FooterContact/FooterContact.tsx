import Link from "next/link";
import { montserrat } from "../fonts";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoNewspaperOutline } from "react-icons/io5";

//TODO Agregar telefono
export default function FooterContact() {
  return (
    <footer className="sticky bottom-0 flex flex-col items-center justify-center h-[88vh] bg-[--background-secondary] py-[6em] px-[10em] z-10 max-md:relative max-md:bottom-0 max-md:py-[6em] max-md:px-4">
      {/* LINK para contactar */}
      <Link
        href={"mailto:mastroianimarcelo04@gmail.com"}
        target="_blank"
        rel="noreferrer"
        className="flex flex-col items-center justify-center"
      >
        <p
          className={`${montserrat.className} text-3xl text-white animate-pulse opacity-70 hover:opacity-100 hover:text-[--color-primary] hover:scale-105 ease-in-out duration-300 max-lg:text-xl max-md:text-lg max-lg:hover:opacity-70 max-lg:hover:text-white max-lg:hover:scale-100 `}
        >
          mastroianimarcelo04@gmail.com 👆
        </p>
      </Link>

      {/* iconos de Ubicacion  */}
      <div
        className={`${montserrat.className} absolute bottom-5 left-10 max-md:left-2 max-md:ml-2 `}
      >
        <p className="text-white text-xl text-center opacity-70 font-extrabold max-md:text-sm ">
          Ubicación
        </p>
        <p className="text-[--color-primary] text-xl opacity-80 font-bold max-md:text-sm  ">
          Buenos Aires, Argentina
        </p>
      </div>

      {/* Iconos redes sociales */}
      <div className="absolute bottom-5 right-10 flex gap-4 max-md:gap-3">
        <Link
          href="https://github.com/MarceloMastroiani"
          className="text-white text-4xl opacity-70 hover:opacity-100 hover:text-[--color-primary] hover:scale-125 ease-in-out duration-300 max-md:text-2xl"
        >
          <FaGithub className="inline " />
        </Link>
        <Link
          href="https://www.linkedin.com/in/marcelo-mastroiani/"
          className="text-blue-500 text-4xl opacity-70 hover:opacity-100 hover:text-[--color-primary] hover:scale-125 ease-in-out duration-300 max-md:text-2xl"
        >
          <FaLinkedin className="inline" />
        </Link>
        <Link
          //problema con el link
          href="/_CV-MarceloMastroiani-ES.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-4xl opacity-70 hover:opacity-100 hover:text-[--color-primary] hover:scale-125 ease-in-out duration-300 max-md:text-2xl"
        >
          <IoNewspaperOutline className="inline" />
        </Link>
      </div>
    </footer>
  );
}
