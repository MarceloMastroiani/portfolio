import { Metadata } from "next";
// import PopupsModal from "@/components/ui/PopUp/PopUpModal";
// import { projects } from "@/data/projects";
import ProjectX from "./project-me/projectx";

export const metadata: Metadata = {
  title: "Marcelo Mastroiani - Proyectos",
  description: "Check out Marcelo's latest projects.",
  icons: {
    icon: "./favicon.png",
  },
};

export default function Projects() {
  return (
    // TODO: Actualizar la data que Projects
    <main id="projects" className=" flex flex-col w-full ">
      <section className="bg-neutral-950 z-20">
        {/* <PopupsModal projectArr={projects} /> */}
        <ProjectX />
      </section>
    </main>
  );
}
