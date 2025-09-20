"use client";

import "./SideBar.css";
import { useState } from "react";
import Link from "next/link";
import Burger from "../../ui/Burger/Burger";
import { nunito } from "../../fonts";

const menuItems = [
  { href: "/#home", label: "Inicio" },
  { href: "/#projects", label: "Proyectos" },
  { href: "/#about", label: "Acerca de" },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Botón para abrir el sidebar */}
      <button
        className="fixed top-4 right-4 z-50 p-2 text-white rounded-md max-[768px]:top-2 max-[768px]:right-2" //button-open-close
        onClick={() => {
          if (isOpen === false) {
            setIsOpen(true);
          } else setIsOpen(false);
        }}
      >
        <Burger isOpen={isOpen} />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-0 bg-(--background-sidebar) text-white transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } z-40`}
      >
        <div className="flex flex-col pt-20">
          {/* Enlaces de navegación */}

          <nav className="grow">
            {/*nav-links */}
            <ul className="p-4">
              {menuItems.map((item) => (
                <li key={item.href} className="mb-4">
                  <Link
                    href={item.href}
                    className={`${nunito.className} block p-2 font-bold text-2xl hover:text-(--color-primary) hover:scale-98 ease-in-out duration-300`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
