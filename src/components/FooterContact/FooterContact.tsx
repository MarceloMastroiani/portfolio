import "./FooterContact.css";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoNewspaperOutline } from "react-icons/io5";

export default function FooterContact() {
  return (
    <footer className="relative footer-container">
      <h1 className="text-4xl text-white">Contact</h1>

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
