import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./SideInformation.css";
import { montserrat } from "../fonts";

export default function SideInformation() {
  return (
    <aside className={`${montserrat.className} aside-container`}>
      <header className="flex flex-row items-center justify-center m-2 gap-4">
        <Image src="/logo.png" alt="Logo" width={40} height={40} />
        <h1 className="text-xl"> Marcelo Mastroiani</h1>
      </header>

      <section className="flex items-center justify-center h-full rounded-lg ">
        <Image
          src="/foto-perfil.jpeg"
          alt="Profile picture of Marcelo Mastroiani"
          className="rounded-lg max-w-[80%] max-h-[100%]"
          width={200}
          height={200}
        />
      </section>

      <section className="flex items-center justify-center h-full text-xl">
        <p>Front-end/Back-end</p>
      </section>

      {/* TODO: poner mas gap */}
      <footer>
        <a href="#">
          <FaGithub />
        </a>
        <a href="#" className="text-blue-500 ">
          <FaLinkedin />
        </a>
      </footer>
    </aside>
  );
}
