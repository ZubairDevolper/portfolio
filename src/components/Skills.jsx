import { marqueeTech, skillGroups } from "../data/portfolio";
import { useReveal } from "../hooks/useReveal";
import Reveal from "./Reveal";    
import SectionHeading from "./SectionHeading";

function SkillBar({ skill, delay }) {       
  const { ref, visible } = useReveal();

  return (
    <div ref={ref} className="group">
      <div className="mb-2 flex items-center justify-between">
        <span className="flex items-center gap-2 text-sm font-medium text-slate-200">
          <skill.icon style={{ color: skill.color }} className="text-lg" />
          {skill.name}   
        </span>
        <span className="font-mono text-xs text-slate-500">{skill.level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/5">
        <div
          className="h-full rounded-full bg-gradient-to-r from-brand-500 via-brand-400 to-accent-400"
          style={{
            width: visible ? `${skill.level}%` : "0%",
            transition: `width 1.1s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="pointer-events-none absolute top-1/3 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="My technical toolbox"
          description="The languages, frameworks and tools I reach for to design, build and ship modern applications."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 100}>
              <div className="card-glow h-full p-6">
                <div className="mb-6 flex items-baseline justify-between">
                  <h3 className="font-display text-xl font-semibold text-white">{group.title}</h3>
                  <span className="font-mono text-xs text-slate-500">
                    0{gi + 1}
                  </span>
                </div>
                <p className="mb-6 text-sm text-slate-400">{group.description}</p>
                <div className="flex flex-col gap-5">
                  {group.skills.map((skill, i) => (
                    <SkillBar key={skill.name} skill={skill} delay={i * 70} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="group relative mt-16 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
        <div className="flex w-max animate-marquee gap-4 group-hover:[animation-play-state:paused]">
          {[...marqueeTech, ...marqueeTech].map((tech, i) => (
            <div
              key={`${tech.name}-${i}`}
              className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 backdrop-blur-sm"
            >
              <tech.icon style={{ color: tech.color }} className="text-2xl" />
              <span className="text-sm font-medium whitespace-nowrap text-slate-300">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
