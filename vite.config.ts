import { defineConfig, loadEnv, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function devContactApi(): Plugin {
  return {
    name: "dev-contact-api",
    configureServer(server) {
      server.middlewares.use("/api/contact", async (req, res) => {
        if (req.method !== "POST") {
          res.writeHead(405, { "content-type": "application/json" });
          res.end(JSON.stringify({ success: false, error: "Método no permitido" }));
          return;
        }

        let raw = "";
        for await (const chunk of req) {
          raw += chunk;
        }

        const { POST: contactHandler } = await import("./api/contact");

        const webRes = await contactHandler(
          new Request("http://localhost/api/contact", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: raw,
          }),
        );

        res.writeHead(webRes.status, { "content-type": "application/json" });
        res.end(await webRes.text());
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  process.env.RESEND_API_KEY ??= env.RESEND_API_KEY;
  process.env.RESEND_FROM_EMAIL ??= env.RESEND_FROM_EMAIL;
  process.env.CONTACT_TO_EMAIL ??= env.CONTACT_TO_EMAIL;

  return {
    plugins: [react(), tailwindcss(), devContactApi()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (
              id.includes("node_modules/react/") ||
              id.includes("node_modules/react-dom/") ||
              id.includes("node_modules/scheduler/")
            ) {
              return "react";
            }
            if (
              id.includes("node_modules/motion/") ||
              id.includes("node_modules/framer-motion/")
            ) {
              return "motion";
            }
            if (id.includes("node_modules/lenis/")) {
              return "lenis";
            }
          },
        },
      },
    },
  };
});
