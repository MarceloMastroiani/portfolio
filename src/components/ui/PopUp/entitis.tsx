// Definición de la interfaz para el array de Popups
interface Project {
  title: string;
  imagen: string;
  description: string;
  urlDemo?: string;
  urlCode: string;
  svgs: SvgProps[];
}

interface SvgProps {
  alt: string;
  svg: string;
}

// Lo que nos va a llegar va a ser un array de props por eso le anidamos la interface de project
export interface ProjectModalProps {
  projectArr: Project[];
}
