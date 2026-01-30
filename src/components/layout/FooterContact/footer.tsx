import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 bg-neutral-900 border-t border-neutral-800 md:h-20 h-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-semibold text-white">
              MM<span className="text-red-500">.</span>
            </span>
            <span className="text-neutral-600">|</span>
            <span className="text-sm text-neutral-500">
              © {currentYear} Marcelo Mastroiani
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/MarceloMastroiani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/marcelo-mastroiani/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:mastroianimarcelo04@gmail.com"
              className="text-neutral-500 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
