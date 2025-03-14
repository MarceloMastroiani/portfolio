import FooterContact from "@/components/FooterContact/FooterContact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marcelo Mastroiani - Proyectos",
  description: "Check out Marcelo's latest projects.",
  icons: {
    icon: "./favicon.png",
  },
};

export default function Projects() {
  return (
    <main className=" flex flex-col w-full min-h-[100%]">
      <section className="flex items-center justify-between h-screen py-[4em] px-[8em] overflow-hidden bg-[--background-primary] z-20">
        <h1 className="text-white text-center text-5xl font-bold">
          Coming soon...
        </h1>
      </section>
      {/* footer-contact */}
      <FooterContact />
    </main>
  );
}
