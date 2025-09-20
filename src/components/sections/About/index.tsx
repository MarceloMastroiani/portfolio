import Timeline from "@/components/sections/About/Timeline/Timeline";
import Skills from "@/components/sections/About/Skills/Skills";
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
    <main id="about" className="relative flex flex-col">
      {/* section con linea de tiempo */}
      <Timeline />

      {/* section con skills */}
      <Skills />
    </main>
  );
}
