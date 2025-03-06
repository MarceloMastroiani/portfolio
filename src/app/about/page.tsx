import Timeline from "@/components/Timeline/Timeline";
import Goals from "@/components/Goals/Goals";
import Skills from "@/components/Skills/Skills";
import FooterContact from "@/components/FooterContact/FooterContact";
import { objetivosCortoplazo, objetivosLargoplazo } from "@/data/goals";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marcelo Mastroiani - Acerca de mi",
  description:
    "Learn more about Marcelo, a passionate developer from Argentina.",
  icons: {
    icon: "./favicon.png",
  },
};

export default function AboutMe() {
  return (
    <main className="relative flex flex-col">
      {/* section con linea de tiempo */}
      <Timeline />

      {/* section con objetivos */}
      <Goals
        cortoplazo={objetivosCortoplazo}
        largoplazo={objetivosLargoplazo}
      />

      {/* section con skills */}
      <Skills />

      {/* footer-contact */}
      <FooterContact />
    </main>
  );
}
