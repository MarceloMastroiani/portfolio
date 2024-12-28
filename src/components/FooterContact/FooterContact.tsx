import "./FooterContact.css";
import Link from "next/link";
import { montserrat } from "../fonts";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoNewspaperOutline } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";

export default function FooterContact() {
  return (
    <footer className="relative footer-container-footerContact">
      {/* LINK para contactar */}
      <Link
        href={"mailto:mastroianimarcelo04@gmail.com"}
        target="_blank"
        rel="noreferrer"
        className="w-full h-full bg-[--background-tertiary] flex flex-col items-center justify-center"
      >
        <p
          className={`${montserrat.className} text-4xl text-white animate-pulse opacity-70 hover:opacity-100 hover:text-[--color-primary] hover:scale-125 ease-in-out duration-300`}
        >
          Click para contactar 👆
        </p>
      </Link>

      {/* iconos de Ubicacion  */}
      <div className={`${montserrat.className} div-location-footerContact `}>
        <IoLocationSharp className="text-[--color-primary] text-2xl opacity-80" />
        <p className="text-white text-xl opacity-70 font-extrabold ml-1">
          Ubicación
        </p>
        <p className="text-[--color-primary] text-xl opacity-80 font-bold ml-1">
          Buenos Aires, Argentina
        </p>
      </div>

      {/* Iconos redes sociales */}
      <div className="div-redes-footerContact">
        <Link
          href="https://github.com/MarceloMastroiani"
          className="text-white text-4xl opacity-70 hover:opacity-100 hover:text-[--color-primary] hover:scale-125 ease-in-out duration-300"
        >
          <FaGithub className="inline " />
        </Link>
        <Link
          href="https://www.linkedin.com/in/marcelo-mastroiani/"
          className="text-blue-500 text-4xl opacity-70 hover:opacity-100 hover:text-[--color-primary] hover:scale-125 ease-in-out duration-300"
        >
          <FaLinkedin className="inline" />
        </Link>
        <Link
          //problema con el link
          href="/_CV-MarceloMastroiani-ES.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-4xl opacity-70 hover:opacity-100 hover:text-[--color-primary] hover:scale-125 ease-in-out duration-300"
        >
          <IoNewspaperOutline className="inline" />
        </Link>
      </div>
    </footer>
  );
}
