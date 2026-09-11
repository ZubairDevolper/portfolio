import { FiBriefcase, FiBookOpen } from "react-icons/fi";
import { education, experience } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function TimelineItem({ item, icon: Icon, index }) {
  return (
    <Reveal delay={index * 90}>
      <div className="relative pl-10">
        <span className="absolute top-1.5 left-0 grid h-6 w-6 place-items-center rounded-full border border-brand-400/40 bg-brand-500/15 text-xs text-brand-300">
          <Icon />
        </span>
        <span className="absolute top-8 bottom-[-1.75rem] left-3 w-px bg-gradient-to-b from-brand-500/40 to-transparent last:hidden" />
        <div className="card-glow p-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h4 className="font-display font-semibold text-white">{item.role}</h4>
            <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[10px] tracking-wide text-slate-400">
              {item.period}
            </span>
          </div>
          <p className="mt-0.5 text-sm text-brand-300">{item.company}</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Journey"
          title="Experience & education"
          description="Where I've worked, what I've learned and the milestones that shaped how I build."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <h3 className="mb-8 flex items-center gap-3 font-display text-xl font-semibold text-white">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-500/20 to-accent-500/20 text-brand-300">
                  <FiBriefcase />
                </span>
                Work Experience
              </h3>
            </Reveal>
            <div className="flex flex-col gap-7">
              {experience.map((item, i) => (
                <TimelineItem key={item.role} item={item} icon={FiBriefcase} index={i} />
              ))}
            </div>
          </div>

          <div>
            <Reveal>
              <h3 className="mb-8 flex items-center gap-3 font-display text-xl font-semibold text-white">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-500/20 to-accent-500/20 text-brand-300">
                  <FiBookOpen />
                </span>
                Education & Certificates
              </h3>
            </Reveal>
            <div className="flex flex-col gap-7">
              {education.map((item, i) => (
                <TimelineItem key={item.role} item={item} icon={FiBookOpen} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
