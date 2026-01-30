// import Timeline from "@/components/sections/About/Timeline/Timeline";
// import Skills from "@/components/sections/About/Skills/Skills";
import { Metadata } from "next";
import AboutMe from "./About-me/About-me";

export const metadata: Metadata = {
  title: "Marcelo Mastroiani - Acerca de mi",
  description:
    "Learn more about Marcelo, a passionate developer from Argentina.",
  icons: {
    icon: "./favicon.png",
  },
};

export default function About() {
  return (
    <main id="about" className="relative flex flex-col z-20">
      {/* section con linea de tiempo */}
      {/* <Timeline /> */}

      {/* section con skills */}
      {/* <Skills /> */}

      {/* section con about me */}
      <AboutMe />
    </main>
  );
}
