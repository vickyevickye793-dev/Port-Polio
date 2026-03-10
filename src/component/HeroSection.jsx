import { ArrowDown, Code2, Layers, Zap } from "lucide-react";
import image from "../assets/portpolio.png"

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-zinc-950 pt-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[64px_64px]" />

      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-orange-500/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10 w-full">

   
        <div className="flex flex-col gap-6">

    
          <div className="flex items-center gap-2 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-400">
              Full Stack Developer
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight text-white">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-600">
              Vignesh
            </span>
            <br />
            <span className="text-zinc-300">I Build Modern</span>
            <br />
            <span className="text-zinc-500">Web Applications</span>
          </h1>

          <p className="text-zinc-400 text-base leading-relaxed max-w-sm">
            Passionate developer specializing in scalable full-stack web
            applications using modern technologies. Turning ideas into
            real digital products.
          </p>

      

          <div className="flex flex-wrap gap-3">
            
             <a href="#projects"
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white text-sm font-semibold tracking-wider uppercase px-6 py-3 rounded transition-colors duration-200 shadow-lg shadow-orange-500/25"
            >
              View Projects
              <ArrowDown size={14} />
            </a>
            
            <a  href="#contact"
              className="flex items-center gap-2 border border-white/10 hover:border-white/25 hover:bg-white/5 text-zinc-300 hover:text-white text-sm font-medium tracking-wider uppercase px-6 py-3 rounded transition-all duration-200"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="relative flex justify-center items-center">

          
          <div className="absolute w-85 h-105 md:w-100 md:h-120 rounded-2xl border border-white/5 -top-2 left-[calc(50%-166px)] md:left-[calc(50%-196px)]" />

       
          <div className="relative w-80 h-104 md:w-96 md:h-112 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60">
            <img
              src={image}
              alt="Vignesh Developer"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
        
            <div className="absolute inset-0 bg-linear-to-t from-zinc-950/60 via-transparent to-transparent" />
          </div>

          <div className="absolute -left-4 top-10 flex flex-col gap-2">
            {[
              { icon: <Code2 size={12} />, label: "React" },
              { icon: <Layers size={12} />, label: "Node.js" },
              { icon: <Zap size={12} />, label: "TypeScript" },
            ].map((chip) => (
              <div
                key={chip.label}
                className="flex items-center gap-1.5 bg-zinc-900/90 backdrop-blur border border-white/10 text-zinc-300 text-[11px] font-medium px-3 py-1.5 rounded-full shadow-lg"
              >
                <span className="text-orange-400">{chip.icon}</span>
                {chip.label}
              </div>
            ))}
          </div>

          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-zinc-900 border border-white/10 px-4 py-2 rounded-full shadow-xl">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-medium text-zinc-300 whitespace-nowrap">Available for work</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection