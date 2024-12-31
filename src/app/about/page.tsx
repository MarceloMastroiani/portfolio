import Biography from "@/components/Biography/Biography";
import Goals from "@/components/Goals/Goals.components";
import FooterContact from "@/components/FooterContact/FooterContact";
import { objetivosCortoplazo, objetivosLargoplazo } from "@/data/goals";
export default function AboutMe() {
  return (
    <main className="relative flex flex-col w-full min-h-screen">
      {/* section con texto */}
      <Biography />
      {/* section con objetivos */}

      <Goals
        cortoplazo={objetivosCortoplazo}
        largoplazo={objetivosLargoplazo}
      />
      {/* footer-contact */}
      <FooterContact />
    </main>
  );
}
