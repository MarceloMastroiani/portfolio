import Biografi from "@/components/Biografi/Biografi";
import Goals from "@/components/goals/goals.components";
import FooterContact from "@/components/FooterContact/FooterContact";
import { objetivosCortoplazo, objetivosLargoplazo } from "@/data/goals";
export default function AboutMe() {
  return (
    <main className="relative flex flex-col w-full min-h-[100%]">
      {/* section con texto */}
      <Biografi />
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
