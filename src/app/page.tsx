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
      <section className="flex items-center justify-between h-screen py-[4em] px-[8em] overflow-hidden bg-[--background-primary] z-20">
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
            src={"/foto-perfil.webp"}
            alt="Profile picture of Marcelo Mastroiani"
            className="rounded-lg object-contain "
            width={600}
            height={400}
          />
        </div>
        {/* Text about me */}
        <div className="w-[60vw] flex flex-col justify-center gap-y-10 text-balance text-center">
          <div>
            <h1 className={`${montserrat.className} text-4xl text-white`}>
              ¡Hola! Soy{" "}
              <span className="text-[--color-primary]">Marcelo Mastroiani</span>{" "}
              un programador full-stack.
            </h1>
          </div>

          <p className={`${nunito.className} text-2xl text-white leading-9`}>
            Trabajo tanto en front-end como en back-end para crear aplicaciones
            que combinan diseño atractivo y funcionalidad eficiente.
          </p>
          <div className="animate-pulse">
            <Link
              href="/about"
              className={`${montserrat.className} text-2xl text-[--color-primary] leading-9 hover:underline`}
            >
              Descubre más sobre mí
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
