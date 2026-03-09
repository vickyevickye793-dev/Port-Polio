import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [active, setActive] = useState("#home");

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500bg-transparent py-5">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#home"
          className="text-white text-xl font-bold tracking-tight select-none group"
        >
          Vignesh
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-orange-500 mb-2 ml-0.5 group-hover:scale-150 transition-transform duration-300" />
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setActive(link.href)}
                className={`relative px-4 py-2 text-xs font-medium tracking-widest uppercase transition-colors duration-200 rounded-md ${
                  active === link.href
                    ? "text-white bg-white/5"
                    : "text-zinc-400 hover:text-red-400 hover:bg-white/5"
                }`}
              >
                {link.label}
                {active === link.href && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-orange-500" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <div className="w-px h-5 bg-white/10" />

          <a
            href="#contact"
            className="px-5 py-2 text-xs font-semibold tracking-widest uppercase text-white bg-orange-500 hover:bg-orange-400 rounded transition-colors duration-200 shadow-lg shadow-orange-500/20"
          >
            Hire Me
          </a>
        </div>

  
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg border border-white/10 bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 transition-all duration-200"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={15} /> : <Menu size={15} />}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-zinc-950/98 border-t border-white/[0.06] px-6 pb-6 pt-2">
          <ul className="flex flex-col">
            {links.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => {
                    setActive(link.href);
                    setIsOpen(false);
                  }}
                  className="flex items-center gap-4 py-3.5 border-b border-white/[0.05] last:border-none text-zinc-400 hover:text-white transition-colors duration-200 group"
                >
                  <span className="text-[10px] font-bold tracking-wider text-orange-500/70 w-5">
                    0{i + 1}
                  </span>
                  <span className="text-sm font-medium tracking-widest uppercase">
                    {link.label}
                  </span>
                  <span className="ml-auto text-zinc-700 group-hover:text-zinc-400 transition-colors text-xs">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-5 flex items-center justify-center w-full py-3 text-xs font-semibold tracking-widest uppercase text-white bg-orange-500 hover:bg-orange-400 rounded transition-colors duration-200"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
