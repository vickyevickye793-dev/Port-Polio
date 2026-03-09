import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Task Manager App",
    category: "Full Stack Web App",
    number: "01",
    desc: "A full-stack task management application with authentication and CRUD operations. Built with a focus on clean UX and reliable performance.",
    tech: ["React", "Node.js", "Express", "MySQL"],
    link: "https://github.com/yourgithub/task-manager",
    accent: "from-orange-500/20 to-amber-500/5",
  },
  {
    title: "School Management System",
    category: "MERN Application",
    number: "02",
    desc: "A web platform for managing students, courses, and teachers with role-based access control and a clean admin dashboard.",
    tech: ["React", "Node.js", "Express", "MySQL"],
    link: "https://github.com/yourgithub/school-app",
    accent: "from-sky-500/15 to-blue-500/5",
  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="py-28 bg-zinc-950 relative overflow-hidden">

      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute bottom-0 right-1/3 w-96 h-64 bg-orange-500/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-20">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-400">My Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Featured
              <br />
              <span className="text-zinc-500">Projects</span>
            </h2>
          </div>
          <p className="text-zinc-500 text-sm max-w-xs leading-relaxed md:text-right">
            A selection of projects I've built — from idea to deployment.
          </p>
        </div>

        {/* Project Cards */}
        <div className="flex flex-col gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="group relative grid md:grid-cols-[1fr_1.4fr] gap-0 bg-zinc-900/50 border border-white/[0.06] hover:border-white/[0.12] rounded-2xl overflow-hidden transition-all duration-300"
            >
              {/* Image Panel */}
              <div className={`relative bg-gradient-to-br ${project.accent} min-h-56 md:min-h-0 overflow-hidden flex items-center justify-center border-r border-white/[0.06]`}>

                {/* Placeholder visual */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />
                <div className="relative flex flex-col items-center gap-3">
                  <span className="text-6xl font-black text-white/5 select-none tracking-tighter">
                    {project.number}
                  </span>
                  <div className="w-16 h-px bg-white/10" />
                  <span className="text-[10px] tracking-widest uppercase text-white/20">Preview</span>
                </div>

                {/* Number badge */}
                <span className="absolute top-5 left-5 text-[11px] font-bold tracking-widest text-white/20">
                  {project.number}
                </span>
              </div>

              {/* Content Panel */}
              <div className="p-8 md:p-10 flex flex-col justify-between gap-6">

                <div>
                  {/* Category */}
                  <span className="inline-block text-[10px] font-semibold tracking-[0.18em] uppercase text-orange-400/80 bg-orange-500/8 border border-orange-500/15 px-3 py-1 rounded-full mb-5">
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-snug mb-3">
                    {project.title}
                  </h3>

                  {/* Desc */}
                  <p className="text-zinc-500 text-sm leading-relaxed max-w-md">
                    {project.desc}
                  </p>
                </div>

                <div className="flex flex-col gap-5">
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-medium tracking-wider text-zinc-400 bg-white/5 border border-white/[0.07] px-3 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-4 pt-1 border-t border-white/[0.06]">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-white bg-orange-500 hover:bg-orange-400 px-5 py-2.5 rounded transition-colors duration-200 shadow-lg shadow-orange-500/20"
                    >
                      View Project
                      <ArrowUpRight size={13} />
                    </a>
                    
                     <a href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-medium text-zinc-500 hover:text-white transition-colors duration-200"
                    >
                      <Github size={14} />
                      Source
                    </a>
                  </div>
                </div>
              </div>

              {/* Hover bottom line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectSection;