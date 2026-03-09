import { Code, Database, Layout, ArrowUpRight } from "lucide-react";

const highlights = [
  {
    icon: Code,
    title: "Frontend Development",
    desc: "Building responsive and interactive UI using React, JavaScript, and modern CSS frameworks.",
    tag: "React · Tailwind · JS",
  },
  {
    icon: Database,
    title: "Backend Development",
    desc: "Creating scalable APIs and server-side logic using Node.js, Express, and MySQL.",
    tag: "Node · Express · MySQL",
  },
  {
    icon: Layout,
    title: "Full Stack Projects",
    desc: "Developing complete web applications from frontend to backend with real-world functionality.",
    tag: "End-to-End · SaaS · APIs",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-28 bg-zinc-950 relative overflow-hidden">

  
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px]" />

   
      <div className="absolute top-0 left-1/3 w-96 h-64 bg-orange-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        <div className="grid md:grid-cols-2 gap-10 items-end mb-20">

          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-400">
                About Me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white tracking-tight">
              Turning ideas
              <br />
              <span className="text-zinc-500">into reality</span>
            </h2>
          </div>

          <div className="md:pb-2">
            <p className="text-zinc-400 text-base leading-relaxed border-l-2 border-orange-500/30 pl-5">
              I'm a passionate full-stack developer who enjoys building modern
              web applications. I focus on writing clean, scalable code and
              creating user-friendly digital experiences using modern technologies.
            </p>

          </div>
        </div>

   
        <div className="grid md:grid-cols-3 gap-5">
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group relative bg-zinc-900/60 border border-white/[0.06] hover:border-orange-500/30 rounded-2xl p-7 transition-all duration-300 hover:bg-zinc-900/80"
              >
            
                <div className="flex items-start justify-between mb-6">
                  <div className="w-11 h-11 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                    <Icon size={20} className="text-orange-400" />
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-zinc-700 group-hover:text-orange-400 transition-colors duration-200"
                  />
                </div>

                <h3 className="text-base font-semibold text-white mb-2 tracking-tight">
                  {item.title}
                </h3>

                <p className="text-zinc-500 text-sm leading-relaxed mb-5">
                  {item.desc}
                </p>

                {/* Tech tag */}
                <span className="inline-block text-[10px] font-medium tracking-widest uppercase text-orange-400/70 bg-orange-500/8 border border-orange-500/15 px-3 py-1 rounded-full">
                  {item.tag}
                </span>

               
                <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default AboutSection;