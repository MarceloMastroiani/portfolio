//Buscar fuentes en google fonts y importarlas aca
import { Montserrat } from "next/font/google";
import { Nunito } from "next/font/google";

//Anchos sugeridos: 600 (semi-bold) o 700 (bold)
export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700"],
});

//Anchos sugeridos: 400 (regular) o 300 (light)
export const nunito = Nunito({
  subsets: ["latin"],
  weight: ["500"],
});
