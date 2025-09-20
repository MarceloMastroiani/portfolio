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
      setAnimation("animate-img-div-transition");
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <main id="home" className="flex flex-col w-full">
      {/* section-container */}
      <section className="flex items-center justify-between pt-[4em] px-4 md:h-screen md:py-[4em] lg:px-[8em] overflow-hidden bg-(--background-primary) z-20 max-[768px]:flex-col max-[768px]:gap-y-8 ">
        {/* Imagen */}

        <div
          id="img"
          className={`relative flex items-center w-[50%] justify-center overflow-hidden animate-img-transition max-[768px]:flex max-[768px]:items-center max-[768px]:justify-center max-[768px]:w-[50vw] max-[768px]:mr-0`}
        >
          <div
            id="imgDiv"
            className={`absolute top-0 w-[80%] h-full rounded-3xl bg-(--color-primary) ${animation} md:w-[60%]`}
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
            className="rounded-3xl w-[80%] object-cover md:w-[60%]"
            src={"/foto-perfil.webp"}
            alt="Profile picture of Marcelo Mastroiani"
            width={600}
            height={400}
            priority={true}
            quality={75}
          />
        </div>
        {/* Text about me */}
        <div className="flex flex-col h-full justify-start gap-y-4 z-100 text-balance text-center bg-(--background-primary) md:w-[50%] md:justify-center md:gap-y-6 md:text-left">
          <div>
            <h1
              className={`${montserrat.className} text-white text-xl md:w-[80%] md:text-xl xl:text-3xl 2xl:text-4xl  `}
            >
              ¡Hola! Soy{" "}
              <span className="text-(--color-primary)">Marcelo Mastroiani</span>{" "}
              un programador full-stack.
            </h1>
          </div>

          <p
            className={`${nunito.className} text-md text-white leading-6 md:w-[80%] md:text-lg md:leading-6 lg:leading-7 lg:w-[75%] lg:text-xl 2xl:text-2xl`}
          >
            Trabajo tanto en front-end como en back-end para crear aplicaciones
            que combinan diseño atractivo y funcionalidad eficiente.
          </p>
          <div className="flex w-full justify-center md:justify-start animate-pulse">
            <Link
              href="/#about"
              className={`${montserrat.className} flex w-64 cursor-pointer items-center justify-center text-sm md:text-md 2xl:text-lg rounded-xl border-[1.58px] border-zinc-600 py-2 md:px-2 lg:px-6 lg:py-1 font-medium text-slate-200 shadow-md transition-all duration-300 hover:[transform:translateY(-.335rem)] hover:bg-zinc-900 hover:shadow-xl md:w-1/2`}
            >
              Descubre más sobre mí
              <IoIosArrowRoundForward className="inline text-2xl pl-1 md:text-5xl" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
