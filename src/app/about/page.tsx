import Biografi from "@/components/Biografi/Biografi";
import FooterContact from "@/components/FooterContact/FooterContact";

export default function AboutMe() {
  return (
    <main className="relative flex flex-col w-full min-h-[100%]">
      {/* section con texto */}
      <Biografi />
      {/* footer-contact */}
      <FooterContact />
    </main>
  );
}
