"use client";

import Image from "next/image";
import Link from "next/link";
import { montserrat } from "@/components/fonts";
import { nunito } from "../components/fonts";
import { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import FooterContact from "@/components/FooterContact/FooterContact";

export default function Home() {
  const [animation, setAnimation] = useState("");
  setTimeout(() => {
    setAnimation("animate-imgDivTransition");
  }, 1000);

  return (
    <main className="flex flex-col w-full min-h-[100%]">
      <section className="flex items-center justify-between h-screen py-[4em] px-[8em] overflow-hidden  bg-[--background-primary] z-20">
        {/* Imagen */}
        <div
          id="img"
          className={` relative w-[40vw] mr-[4em] overflow-hidden animate-imgTransition`}
        >
          <div
            id="imgDiv"
            className={`absolute top-0 w-full h-full bg-[--color-primary] rounded-lg ${animation}`}
          ></div>
          <Image
            src={"/foto-perfil.jpeg"}
            alt="Profile picture of Marcelo Mastroiani"
            className="rounded-lg object-contain "
            width={600}
            height={400}
          />
        </div>
        {/* Text about me */}
        <div className="w-[60vw]">
          <div className=" mb-8">
            <h1 className={`${montserrat.className} text-4xl text-white`}>
              <span className="text-[--color-primary]">Marcelo Mastroiani</span>
              , programador front-end y back-end
            </h1>
          </div>
          <p className={`${nunito.className} text-2xl text-white leading-9`}>
            Apasionado por la tecnología y el aprendizaje constante. Me esfuerzo
            por mejorar cada día, no solo en habilidades técnicas, sino también
            en el trabajo en equipo y la colaboración. Disfruto creando
            aplicaciones que combinan diseño atractivo con funcionalidad
            eficiente, aportando soluciones innovadoras tanto en el frontend
            como en el backend. Mi dedicación a la programación y mi entusiasmo
            por superar desafíos me impulsan a dar siempre lo mejor.
          </p>
          <div className="mt-8 ">
            <Link
              href="/#"
              className={`${nunito.className} text-2xl text-[--color-primary] leading-9 hover:underline`}
            >
              Ir a works
              <IoIosArrowRoundForward className="inline text-5xl" />
            </Link>
          </div>
        </div>
      </section>

      {/* footer-contact */}
      <FooterContact />
    </main>
  );
}
