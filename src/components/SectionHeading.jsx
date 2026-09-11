import Reveal from "./Reveal";

export default function SectionHeading({ eyebrow, title, description, align = "center" }) {
  const alignment =
    align === "left" ? "items-start text-left" : "items-center text-center mx-auto";

  return (
    <Reveal className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-brand-300 uppercase">
        <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && <p className="text-base leading-relaxed text-slate-400">{description}</p>}
    </Reveal>
  );
}
