import { FiArrowDown, FiArrowUpRight, FiMapPin } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { profile, socials } from "../data/portfolio";
import { useTypingEffect } from "../hooks/useTypingEffect";
import Reveal from "./Reveal";

export default function Hero() {
  const typed = useTypingEffect(profile.roles);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative overflow-hidden pt-36 pb-20 sm:pt-44 md:pb-32">
      <div className="grid-overlay pointer-events-none absolute inset-0 [mask-image:radial-gradient(70%_60%_at_50%_0%,#000,transparent)]" />
      <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 animate-float rounded-full bg-brand-600/25 blur-[120px]" />
      <div className="pointer-events-none absolute top-40 -right-24 h-96 w-96 animate-float-slow rounded-full bg-accent-500/20 blur-[130px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col items-start gap-6">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {profile.availability}
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="font-display text-4xl leading-[1.1] font-bold text-white sm:text-5xl md:text-6xl">
              Hi, I&apos;m <span className="text-gradient">{profile.name}</span>
              <span className="mt-3 block text-2xl text-slate-300 sm:text-3xl md:text-4xl">
                <span className="font-mono text-brand-300">&lt;</span>{" "}
                {typed}
                <span className="animate-blink text-accent-400">|</span>{" "}
                <span className="font-mono text-brand-300">/&gt;</span>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
              {profile.summary}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => scrollTo("projects")}
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition-transform hover:-translate-y-0.5"
              >
                View My Work
                <FiArrowUpRight className="text-lg transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <HiOutlineMail className="text-lg" />
                Hire Me
              </button>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <FiMapPin className="text-brand-300" />
                {profile.location}
              </div>
              <span className="h-4 w-px bg-white/10" />
              <div className="flex items-center gap-2">
                {socials.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-all hover:-translate-y-0.5 hover:border-brand-400/50 hover:text-white"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand-500/20 to-accent-500/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-900/80 shadow-2xl shadow-black/40 backdrop-blur-xl">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                <span className="ml-2 font-mono text-xs text-slate-500">developer.js</span>
              </div>

              <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
                <code>
                  <span className="text-slate-500">1</span>{" "}
                  <span className="text-fuchsia-400">const</span>{" "}
                  <span className="text-brand-300">developer</span>{" "}
                  <span className="text-slate-400">=</span> <span className="text-slate-300">{"{"}</span>
                  {"\n"}
                  <span className="text-slate-500">2</span>{"   "}
                  <span className="text-accent-300">name</span>
                  <span className="text-slate-400">:</span>{" "}
                  <span className="text-emerald-300">&apos;{profile.name}&apos;</span>
                  <span className="text-slate-400">,</span>
                  {"\n"}
                  <span className="text-slate-500">3</span>{"   "}
                  <span className="text-accent-300">role</span>
                  <span className="text-slate-400">:</span>{" "}
                  <span className="text-emerald-300">&apos;Frontend&apos;</span>
                  <span className="text-slate-400">,</span>
                  {"\n"}
                  <span className="text-slate-500">4</span>{"   "}
                  <span className="text-accent-300">stack</span>
                  <span className="text-slate-400">:</span>{" "}
                  <span className="text-slate-300">[</span>
                  <span className="text-emerald-300">&apos;React&apos;</span>
                  <span className="text-slate-400">,</span>{" "}
                  <span className="text-emerald-300">&apos;Next.js&apos;</span>
                  <span className="text-slate-300">]</span>
                  <span className="text-slate-400">,</span>
                  {"\n"}
                  <span className="text-slate-500">5</span>{"   "}
                  <span className="text-accent-300">focus</span>
                  <span className="text-slate-400">:</span>{" "}
                  <span className="text-emerald-300">&apos;clean &amp; fast&apos;</span>
                  <span className="text-slate-400">,</span>
                  {"\n"}
                  <span className="text-slate-500">6</span>{"   "}
                  <span className="text-accent-300">hireable</span>
                  <span className="text-slate-400">:</span>{" "}
                  <span className="text-fuchsia-400">true</span>
                  <span className="text-slate-400">,</span>
                  {"\n"}
                  <span className="text-slate-500">7</span>{" "}
                  <span className="text-slate-300">{"}"}</span>
                  <span className="text-slate-400">;</span>
                </code>
              </pre>
            </div>

            <div className="absolute -right-4 -bottom-5 animate-float rounded-2xl border border-white/10 bg-ink-800/90 px-4 py-3 shadow-xl backdrop-blur-xl">
              <p className="font-display text-2xl font-bold text-white">1+</p>
              <p className="text-xs text-slate-400">year experience</p>
            </div>
          </div>
        </Reveal>
      </div>

      <button
        onClick={() => scrollTo("about")}
        className="mx-auto mt-16 hidden items-center gap-2 text-xs font-medium tracking-widest text-slate-500 uppercase transition-colors hover:text-white md:flex"
      >
        Scroll
        <FiArrowDown className="animate-bounce" />  
      </button>
    </section>
  );
}
