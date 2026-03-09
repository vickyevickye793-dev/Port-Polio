import { Mail, Github, Linkedin, ArrowUp } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Github, href: "https://github.com/vickyevickye793-dev/", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "mailto:vickyevickye793@gmail.com", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-white/[0.06] relative overflow-hidden">

      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Top — Brand + Nav + Socials */}
        <div className="grid md:grid-cols-[1fr_auto_auto] gap-10 items-start py-14 border-b border-white/[0.06]">

          {/* Brand */}
          <div className="flex flex-col gap-4 max-w-xs">
            <a href="#home" className="text-white text-xl font-bold tracking-tight select-none group w-fit">
              Vignesh
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-orange-500 mb-2 ml-0.5 group-hover:scale-150 transition-transform duration-300" />
            </a>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Full-stack developer building clean, scalable web applications with modern technologies.
            </p>
            {/* Status */}
            <div className="flex items-center gap-2 w-fit bg-zinc-900/60 border border-white/[0.06] px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-medium text-zinc-400">Available for work</span>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-3">
            <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-zinc-600 mb-1">
              Navigation
            </p>
            {footerLinks.map((link) => (
              
               <a className="text-sm text-zinc-500 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-3">
            <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-zinc-600 mb-1">
              Connect
            </p>
            {socials.map(({ icon: Icon, href, label }) => (
              
               <a key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-zinc-500 hover:text-white transition-colors duration-200 group"
              >
                <span className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/[0.07] group-hover:border-orange-500/30 group-hover:bg-orange-500/8 flex items-center justify-center transition-all duration-200">
                  <Icon size={13} className="group-hover:text-orange-400 transition-colors" />
                </span>
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-5">
          <p className="text-xs text-zinc-600 tracking-wide">
            © 2026{" "}
            <span className="text-zinc-500 font-medium">Vignesh</span>
            . All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <span className="text-xs text-zinc-700">Built with React & Tailwind</span>
            
            <a  href="#home"
              className="flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-900 border border-white/[0.07] hover:border-orange-500/30 hover:bg-orange-500/8 text-zinc-500 hover:text-orange-400 transition-all duration-200"
              aria-label="Back to top"
            >
              <ArrowUp size={13} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;