import "./FooterContact.css";
import Link from "next/link";
import { montserrat } from "../fonts";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoNewspaperOutline } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";

export default function FooterContact() {
  return (
    <footer className="relative footer-container">
      <h1 className="text-4xl text-white">Contact</h1>

      {/* iconos de locacion  */}
      <div className={`${montserrat.className} absolute bottom-5 left-10 `}>
        <IoLocationSharp className="text-white text-2xl opacity-80" />
        <p className="text-white text-xl opacity-70 font-extrabold ">
          Location
        </p>
        <p className="text-white text-xl opacity-50 font-semibold">
          {" "}
          Buenos Aires, Argentina
        </p>
      </div>
      {/* Iconos redes sociales */}
      <div className="absolute bottom-5 right-10 flex gap-4">
        <Link
          href="/#"
          className="text-white text-4xl opacity-70 hover:opacity-100 hover:scale-125 ease-in-out duration-300"
        >
          <FaGithub className="inline " />
        </Link>
        <Link
          href="/#"
          className="text-blue-500 text-4xl opacity-70 hover:opacity-100 hover:scale-125 ease-in-out duration-300"
        >
          <FaLinkedin className="inline" />
        </Link>
        <a
          //problema con el link
          href="_CV-MarceloMastroiani-ES.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-4xl opacity-70 hover:opacity-100 hover:scale-125 ease-in-out duration-300"
        >
          <IoNewspaperOutline className="inline" />
        </a>
      </div>
    </footer>
  );
}
