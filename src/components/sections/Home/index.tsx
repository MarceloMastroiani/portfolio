"use client";

import Image from "next/image";
import Link from "next/link";
import { montserrat } from "@/components/fonts";
import { nunito } from "../../fonts";
import { useEffect, useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Home() {
  const [animation, setAnimation] = useState("");

  useEffect(() => {
    setAnimation("");

    const timer = setTimeout(() => {
      setAnimation("animate-imgDivTransition");
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <main id="home" className="flex flex-col w-full">
      {/* section-container */}
      <section className="flex items-center justify-between py-[4em] px-[8em] overflow-hidden bg-[--background-primary] z-20 max-[768px]:flex-col max-[768px]:gap-y-8 max-[768px]:px-[2em] max-[768px]:py-[2em]">
        {/* Imagen */}

        <div
          id="img"
          className={`relative w-[40vw] mr-[4em] overflow-hidden animate-imgTransition max-[768px]:flex max-[768px]:items-center max-[768px]:justify-center max-[768px]:w-[50vw]  max-[768px]:mr-0`}
        >
          <div
            id="imgDiv"
            className={`absolute top-0 w-full h-full rounded-3xl md:rounded-3xl lg:rounded-3xl bg-[--color-primary] ${animation}`}
          >
            <Image
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
              src="/smile.svg"
              alt="smile"
              width={80}
              height={80}
              priority={true}
              quality={75}
            />
          </div>
          <Image
            className="rounded-none md:rounded-3xl lg:rounded-3xl"
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
    </main>
  );
}
