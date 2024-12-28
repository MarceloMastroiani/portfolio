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
      <section className="section-home-homepage">
        {/* Imagen */}
        <div id="img" className={`div-container-img-homepage`}>
          <div
            id="imgDiv"
            className={`absolute top-0 w-full h-full bg-[--color-primary] rounded-lg ${animation}`}
          ></div>
          <Image
            src={"/foto-perfil.webp"}
            alt="Profile picture of Marcelo Mastroiani"
            className="rounded-lg"
            width={600}
            height={400}
            priority={true}
            quality={75}
          />
        </div>
        {/* Text about me */}
        <div className="div-about-homepage">
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
          <div className="div-link-homepage">
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
