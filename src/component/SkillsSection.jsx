const skills = [
  { name: "React", level: 90, tag: "Frontend" },
  { name: "JavaScript", level: 85, tag: "Language" },
  { name: "Node.js", level: 80, tag: "Backend" },
  { name: "Express.js", level: 80, tag: "Backend" },
  { name: "MySQL", level: 75, tag: "Database" },
  { name: "Tailwind CSS", level: 85, tag: "Styling" },
];

const tools = ["Git", "GitHub", "VS Code", "Postman", "Linux"];

const tagColor = {
  Frontend: "text-sky-400 bg-sky-500/8 border-sky-500/15",
  Language: "text-violet-400 bg-violet-500/8 border-violet-500/15",
  Backend: "text-emerald-400 bg-emerald-500/8 border-emerald-500/15",
  Database: "text-amber-400 bg-amber-500/8 border-amber-500/15",
  Styling: "text-orange-400 bg-orange-500/8 border-orange-500/15",
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-28 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-orange-500/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-20">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-400">
                Expertise
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Skills &<br />
              <span className="text-zinc-500">Tools</span>
            </h2>
          </div>
          <p className="text-zinc-500 text-sm max-w-xs leading-relaxed md:text-right">
            Technologies I work with to build full-stack applications.
          </p>
        </div>

        <div className="grid md:grid-cols-[1.2fr_1fr] gap-6 items-start">
          <div className="bg-zinc-900/50 border border-white/[0.06] rounded-2xl p-8 flex flex-col gap-7">
            <h3 className="text-xs font-semibold tracking-[0.18em] uppercase text-zinc-500 mb-1">
              Proficiency
            </h3>

            {skills.map((skill, i) => (
              <div key={i} className="group flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-white">
                      {skill.name}
                    </span>
                    <span
                      className={`text-[10px] font-medium tracking-wider border px-2 py-0.5 rounded-full ${tagColor[skill.tag]}`}
                    >
                      {skill.tag}
                    </span>
                  </div>

                  <span className="text-xs font-bold text-zinc-400 tabular-nums w-8 text-right">
                    {skill.level}%
                  </span>
                </div>

                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-orange-500 to-amber-400 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-5">
            <div className="bg-zinc-900/50 border border-white/[0.06] rounded-2xl p-7">
              <h3 className="text-xs font-semibold tracking-[0.18em] uppercase text-zinc-500 mb-5">
                Tools & Environment
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {tools.map((tool) => (
                  <div
                    key={tool}
                    className="flex items-center gap-2.5 bg-white/[0.03] border border-white/[0.06] hover:border-orange-500/25 hover:bg-orange-500/5 rounded-xl px-4 py-3 transition-all duration-200 group cursor-default"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500/50 group-hover:bg-orange-400 transition-colors" />
                    <span className="text-sm font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors">
                      {tool}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
