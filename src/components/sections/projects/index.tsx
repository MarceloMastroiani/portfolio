import { Metadata } from "next";
import PopupsModal from "@/components/ui/PopUp/PopUpModal";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Marcelo Mastroiani - Proyectos",
  description: "Check out Marcelo's latest projects.",
  icons: {
    icon: "./favicon.png",
  },
};

export default function Projects() {
  return (
    <main id="projects" className=" flex flex-col w-full ">
      <section className="flex items-center justify-between py-[4em] px-[8em] overflow-hidden bg-[--background-primary] z-20">
        <PopupsModal projectArr={projects} />
      </section>
    </main>
  );
}
