import { FiCode, FiLayers, FiZap, FiCheckCircle } from "react-icons/fi";
import { profile, stats } from "../data/portfolio";
import { useCountUp } from "../hooks/useCountUp";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function StatCard({ stat, delay }) {
  const { value, ref } = useCountUp(stat.value);

  return (
    <Reveal delay={delay}>
      <div ref={ref} className="card-glow p-5 text-center">
        <p className="font-display text-3xl font-bold text-white sm:text-4xl">
          {value}
          <span className="text-gradient">{stat.suffix}</span>
        </p>
        <p className="mt-1 text-xs tracking-wide text-slate-400 uppercase">{stat.label}</p>
      </div>
    </Reveal>
  );
}

const services = [
  {
    icon: FiCode,
    title: "Frontend Development",
    text: "Pixel-perfect, accessible interfaces built with React, Next.js and Tailwind CSS.",
  },
  {
    icon: FiLayers,
    title: "Responsive Design",
    text: "Mobile-first, pixel-perfect layouts built with modern HTML, CSS, Bootstrap and Tailwind CSS.",
  },
  {
    icon: FiZap,
    title: "Performance",
    text: "Auditing and optimising apps for speed, Core Web Vitals and smooth UX.",
  },
];

const highlights = ["Clean, maintainable code", "Mobile-first responsive design", "Accessibility minded", "On-time delivery"];

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="About Me"
          title="Turning ideas into refined digital products"
          description="A developer who cares about the details — from architecture and performance to the little micro-interactions that make a product feel alive."
        />

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="relative"> 
            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-brand-500/30 to-accent-500/20 blur-2xl" />
              <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-ink-700 to-ink-900">
                <div className="grid-overlay absolute inset-0 opacity-40" />
                <div className="absolute inset-0 grid place-items-center">
                  <span className="font-display text-[7rem] font-black text-white/10">
                    {profile.firstName[0]}
                    {profile.lastName[0]}
                  </span>
                </div>
                <div className="absolute right-5 bottom-5 left-5 rounded-2xl border border-white/10 bg-ink-900/70 px-4 py-3 backdrop-blur-xl">
                  <p className="font-display font-semibold text-white">{profile.name}</p>
                  <p className="text-sm text-brand-300">{profile.headline}</p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-6">
            <Reveal>
              <h3 className="font-display text-2xl font-semibold text-white">
                Hey! I&apos;m a frontend developer based in {profile.location.split(",")[0]}.
              </h3>
            </Reveal>
            <Reveal delay={80}>
              <p className="leading-relaxed text-slate-400">
                I&apos;m a frontend developer with 1+ year of experience helping companies ship
                fast, reliable products. I love turning designs into beautiful, human-centred
                interfaces that feel smooth and look pixel-perfect.
              </p>
            </Reveal>

            <Reveal delay={140}>
              <ul className="grid gap-3 sm:grid-cols-2">
                {highlights.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                    <FiCheckCircle className="shrink-0 text-accent-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={200}>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition-transform hover:-translate-y-0.5"
                >
                  Let&apos;s talk
                </a>
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Download CV
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} delay={i * 90} />
          ))}
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {services.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 100}>
              <div className="card-glow group h-full p-6">
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-500/20 to-accent-500/20 text-2xl text-brand-300 transition-transform group-hover:scale-110">
                  <Icon />
                </div>
                <h4 className="font-display text-lg font-semibold text-white">{title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
