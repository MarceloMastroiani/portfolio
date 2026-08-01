import { describe, expect, it, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Contact from "./contact";

vi.mock("react-hot-toast", () => ({
  toast: { success: vi.fn(), error: vi.fn() },
}));

describe("Contact", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("renderiza el formulario con sus campos", () => {
    render(<Contact />);
    expect(screen.getByLabelText("Nombre")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Asunto")).toBeInTheDocument();
    expect(screen.getByLabelText("Mensaje")).toBeInTheDocument();
  });

  it("muestra el toast de éxito al enviar correctamente", async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ success: true }),
    });

    const toast = (await import("react-hot-toast")).toast;
    render(<Contact />);

    fireEvent.change(screen.getByLabelText("Nombre"), { target: { value: "Juan" } });
    fireEvent.change(screen.getByLabelText("Email"), { target: { value: "juan@mail.com" } });
    fireEvent.change(screen.getByLabelText("Asunto"), { target: { value: "Hola" } });
    fireEvent.change(screen.getByLabelText("Mensaje"), { target: { value: "Mensaje de prueba" } });

    fireEvent.click(screen.getByText("Enviar mensaje"));

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        "/api/contact",
        expect.objectContaining({ method: "POST" }),
      );
      expect(toast.success).toHaveBeenCalled();
    });
  });

  it("muestra el toast de error cuando falla la API", async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      json: async () => ({ success: false }),
    });

    const toast = (await import("react-hot-toast")).toast;
    render(<Contact />);

    fireEvent.change(screen.getByLabelText("Nombre"), { target: { value: "Juan" } });
    fireEvent.change(screen.getByLabelText("Email"), { target: { value: "juan@mail.com" } });
    fireEvent.change(screen.getByLabelText("Asunto"), { target: { value: "Hola" } });
    fireEvent.change(screen.getByLabelText("Mensaje"), { target: { value: "Mensaje de prueba" } });

    fireEvent.click(screen.getByText("Enviar mensaje"));

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalled();
    });
  });
});
