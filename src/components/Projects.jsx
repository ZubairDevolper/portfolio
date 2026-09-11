import { useMemo, useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { projectFilters, projects } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <section id="projects" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected projects"
          description="A snapshot of things I've designed, built and shipped. Each one taught me something new."
        />

        <Reveal className="mt-10 flex flex-wrap justify-center gap-2">
          {projectFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                filter === f
                  ? "bg-gradient-to-r from-brand-500 to-accent-500 text-white shadow-lg shadow-brand-500/25"
                  : "border border-white/10 bg-white/5 text-slate-400 hover:border-brand-400/40 hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <Reveal key={project.title} delay={(i % 3) * 100}>
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="card-glow group flex h-full flex-col cursor-pointer"
              >
                <div
                  className={`relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br ${project.accent}`}
                >
                  <div className="grid-overlay absolute inset-0 opacity-20" />
                  <div
                    className={`absolute -top-16 -right-16 h-40 w-40 rounded-full ${project.glow} blur-3xl`}
                  />
                  <span className="grid h-24 w-24 place-items-center rounded-2xl border border-white/15 bg-white/10 shadow-lg backdrop-blur-sm">
                    <project.icon
                      className={`relative text-5xl text-white transition-transform duration-500 group-hover:scale-125 ${project.iconClass}`}
                    />
                  </span>
                  {project.featured && (
                    <span className="absolute top-3 right-3 rounded-full border border-amber-400/40 bg-amber-400/15 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-amber-300 uppercase">
                      Featured
                    </span>
                  )}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 bg-ink-950/70 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                    <span className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/10 text-lg text-white transition-transform hover:scale-110">
                      <FiExternalLink />
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display text-lg font-semibold text-white">
                      {project.title}
                    </h3>
                    <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[10px] tracking-wide text-brand-300 uppercase">
                      {project.category}
                    </span>
                  </div>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            See more on GitHub
          </a>
        </Reveal>
      </div>
    </section>
  );
}
