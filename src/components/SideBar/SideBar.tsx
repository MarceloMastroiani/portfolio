"use client";

import "./SideBar.css";
import { useState } from "react";
import Link from "next/link";
import Burger from "../ui/Burger/Burger";

const menuItems = [
  { href: "/", label: "Inicio" },
  { href: "/about", label: "Acerca de" },
  { href: "/projects", label: "Proyectos" },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Botón para abrir el sidebar */}
      <button
        className="button-open-close"
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
        className={`fixed inset-0 bg-[--background-sidebar] text-white transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } z-40`}
      >
        <div className="flex flex-col h-full">
          {/* Linea del sidebar */}
          <div className="p-4 border-b border-gray-700 pt-14"></div>

          {/* Enlaces de navegación */}
          <nav className="nav-links">
            <ul className="p-4">
              {menuItems.map((item) => (
                <li key={item.href} className="mb-4">
                  <Link
                    href={item.href}
                    className="block p-2 rounded-md hover:bg-[--color-primary]"
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
