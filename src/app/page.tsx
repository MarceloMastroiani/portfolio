"use client";

import Image from "next/image";
import Link from "next/link";
import { montserrat } from "@/components/fonts";
import { nunito } from "../components/fonts";
import { useEffect, useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import FooterContact from "@/components/FooterContact/FooterContact";
import "./globals.css";

export default function Home() {
  const [animation, setAnimation] = useState("");

  useEffect(() => {
    setAnimation("");

    const timer = setTimeout(() => {
      setAnimation("animate-imgDivTransition");
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="flex flex-col w-full min-h-[100%]">
      {/* section-container */}
      <section className="flex items-center justify-between h-screen py-[4em] px-[8em] overflow-hidden bg-[--background-primary] z-20 max-[768px]:flex-col max-[768px]:gap-y-8 max-[768px]:px-[2em] max-[768px]:py-[2em]">
        {/* Imagen */}

        <div
          id="img"
          className={`relative w-[40vw] mr-[4em] overflow-hidden animate-imgTransition max-[768px]:flex max-[768px]:items-center max-[768px]:justify-center max-[768px]:w-[50vw] max-[768px]:min-h-48 max-[768px]:mr-0`}
        >
          <div
            id="imgDiv"
            className={`absolute top-0 w-full h-full bg-[--color-primary] ${animation}`}
          ></div>
          <Image
            src={"/foto-perfil.webp"}
            alt="Profile picture of Marcelo Mastroiani"
            width={600}
            height={400}
            priority={true}
            quality={75}
          />
        </div>
        {/* Text about me */}
        <div className="w-[60vw] flex flex-col justify-center gap-y-10 text-balance text-center max-[768px]:h-full max-[768px]:justify-start max-[768px]:gap-y-4 max-[768px]:z-[100] max-[768px]:bg-[--background-primary]">
          <div>
            <h1
              className={`${montserrat.className} text-4xl text-white max-[768px]:text-2xl`}
            >
              ¡Hola! Soy{" "}
              <span className="text-[--color-primary]">Marcelo Mastroiani</span>{" "}
              un programador full-stack.
            </h1>
          </div>

          <p
            className={`${nunito.className} text-2xl text-white leading-9 max-[768px]:text-xl`}
          >
            Trabajo tanto en front-end como en back-end para crear aplicaciones
            que combinan diseño atractivo y funcionalidad eficiente.
          </p>
          <div className="animate-pulse">
            <Link
              href="/about"
              className={`${montserrat.className} text-2xl text-[--color-primary] leading-9 hover:underline max-[768px]:text-sm max-[768px]:hover:no-underline`}
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
