import { Send, MapPin, Mail, Github, Linkedin, Twitter } from "lucide-react";

const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <section
      id="contact"
      className="py-28 bg-zinc-950 relative overflow-hidden"
    >
  
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-size-[64px_64px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-64 bg-orange-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
      
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-20">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-400">
                Get in Touch
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Let's Work
              <br />
              <span className="text-zinc-500">Together</span>
            </h2>
          </div>
          <p className="text-zinc-500 text-sm max-w-xs leading-relaxed md:text-right">
            Have a project in mind? I'd love to hear about it. Reach out
            anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr_1.5fr] gap-8 items-start">
         
          <div className="flex flex-col gap-5">
    
            {[
              {
                icon: Mail,
                label: "Email",
                value: "vickyevickye793@gmail.com",
                href: "mailto:vickyevickye793@gmail.com",
              },
              {
                icon: MapPin,
                label: "Location",
                value: "Tindivanam, Tamil Nadu",
                href: null,
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-4 bg-zinc-900/50 border border-white/6 rounded-2xl px-6 py-5 group hover:border-orange-500/20 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-orange-400" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold tracking-widest uppercase text-zinc-600 mb-0.5">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm font-medium text-zinc-300 hover:text-white transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-zinc-300">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-zinc-900/50 border border-white/6 rounded-2xl p-8 flex flex-col gap-4"
          >
            <h3 className="text-xs font-semibold tracking-[0.18em] uppercase text-zinc-500 mb-1">
              Send a Message
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full bg-white/3 border border-white/[0.07] focus:border-orange-500/40 focus:bg-orange-500/3 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-all duration-200"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full bg-white/3 border border-white/[0.07] focus:border-orange-500/40 focus:bg-orange-500/3 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-all duration-200"
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-white/3 border border-white/[0.07] focus:border-orange-500/40 focus:bg-orange-500/3 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-all duration-200"
            />

            <textarea
              rows={5}
              placeholder="Your Message"
              required
              className="w-full bg-white/3 border border-white/[0.07] focus:border-orange-500/40 focus:bg-orange-500/3 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none resize-none transition-all duration-200"
            />

            <button
              type="submit"
              className="flex items-center justify-center gap-2 w-full bg-orange-500 hover:bg-orange-400 text-white text-xs font-semibold tracking-widest uppercase py-3.5 rounded-xl transition-colors duration-200 shadow-lg shadow-orange-500/20 mt-1"
            >
              Send Message
              <Send size={13} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
