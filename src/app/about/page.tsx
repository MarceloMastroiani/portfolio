import Timeline from "@/components/Timeline/Timeline";
import Goals from "@/components/Goals/Goals";
import Skills from "@/components/Skills/Skills";
import FooterContact from "@/components/FooterContact/FooterContact";
import { objetivosCortoplazo, objetivosLargoplazo } from "@/data/goals";
export default function AboutMe() {
  return (
    <main className="relative flex flex-col w-full min-h-screen">
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
