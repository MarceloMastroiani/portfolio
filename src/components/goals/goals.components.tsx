"use client";

import { useState } from "react";
import { montserrat } from "../fonts";
import { nunito } from "../fonts";

interface Objetivo {
  titulo: string;
  descripcion: string;
}

interface ObjetivosProps {
  cortoplazo: Objetivo[];
  largoplazo: Objetivo[];
}

export default function Goals({ cortoplazo, largoplazo }: ObjetivosProps) {
  const [activeTab, setActiveTab] = useState<"cortoplazo" | "largoplazo">(
    "cortoplazo"
  );

  return (
    <section
      className={`${montserrat.className} flex flex-col items-center justify-evenly h-screen py-[4em] px-[8em] overflow-hidden bg-[--background-primary] gap-y-8 z-30`}
    >
      <h1 className="text-4xl font-extrabold mb-8 text-white text-center">
        Mis objetivos 🎯
      </h1>

      {/* BOTONES */}
      <div className="flex w-full justify-center">
        {/* BOTON DE CORTO PLAZO */}
        <button
          className={`flex-1 py-2 px-4 text-center ${
            activeTab === "cortoplazo"
              ? "bg-[--color-primary] text-white"
              : "bg-[--background-sidebar] text-white"
          }`}
          //Se setea el estado SETACTIVETAB con el valor "cortoplazo"
          onClick={() => setActiveTab("cortoplazo")}
        >
          Corto Plazo
        </button>
        {/* BOTON DE LARGO PLAZO */}
        <button
          className={`flex-1 py-2 px-4 text-center ${
            activeTab === "largoplazo"
              ? "bg-[--color-primary] text-white"
              : "bg-[--background-sidebar] text-white"
          }`}
          //Se setea el estado SETACTIVETAB con el valor "largoplazo"
          onClick={() => setActiveTab("largoplazo")}
        >
          Largo Plazo
        </button>
      </div>

      {/* CONTENIDOS DE LOS OBJETIVOS */}
      <div className="p-6">
        <h2 className="text-2xl text-white font-extrabold mb-4">
          {activeTab === "cortoplazo"
            ? "Objetivos a Corto Plazo"
            : "Objetivos a Largo Plazo"}
        </h2>
        <ul className="space-y-4">
          {/* Si activeTab es cortoplazo, se muestra el array cortoplazo, si no, se muestra el array largoplazo */}
          {(activeTab === "cortoplazo" ? cortoplazo : largoplazo).map(
            //Se mapean los objetivos de cortoplazo y largoplazo
            (objetivo, index) => (
              //Se crea un indice para cada objetivo
              <li key={index} className="border-b pb-4 last:border-b-0">
                <h3 className="font-bold text-[--color-primary] text-lg">
                  {objetivo.titulo}
                </h3>
                <p
                  className={`${nunito.className} text-gray-400 text-base font-semibold`}
                >
                  {objetivo.descripcion}
                </p>
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
}
