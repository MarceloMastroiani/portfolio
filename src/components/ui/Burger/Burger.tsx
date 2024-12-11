import { useRef, useEffect } from "react";
import "./Burger.css";

export default function Burger({ isOpen }: { isOpen: boolean }) {
  // Crear un Ref para acceder al elemento y tener la referencia del elemento
  const burgerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Acceder al elemento una vez que se haya renderizado
    const burger = burgerRef.current;
    if (burger) {
      if (isOpen) {
        burger.classList.add("open");
      } else {
        burger.classList.remove("open");
      }
    }
  }, [isOpen]);
  return (
    <div>
      <div ref={burgerRef} className="burger">
        <span className="linea"></span>
        <span className="linea"></span>
        <span className="linea"></span>
      </div>
    </div>
  );
}
