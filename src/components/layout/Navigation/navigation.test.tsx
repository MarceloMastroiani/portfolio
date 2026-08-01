import { describe, expect, it } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Navigation } from "./navigation";

describe("Navigation", () => {
  it("renderiza los items del menú", () => {
    render(<Navigation />);
    expect(screen.getByText("Inicio")).toBeInTheDocument();
    expect(screen.getByText("Sobre mí")).toBeInTheDocument();
    expect(screen.getByText("Proyectos")).toBeInTheDocument();
    expect(screen.getByText("Contacto")).toBeInTheDocument();
  });

  it("abre y cierra el menú móvil", () => {
    render(<Navigation />);

    const toggle = screen.getByLabelText("Toggle menu");
    expect(screen.getAllByText("Experiencia")).toHaveLength(1);

    fireEvent.click(toggle);
    expect(screen.getAllByText("Experiencia")).toHaveLength(2);

    fireEvent.click(toggle);
    expect(screen.getAllByText("Experiencia")).toHaveLength(1);
  });
});
