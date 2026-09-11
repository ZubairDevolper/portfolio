import { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle } from "react-icons/fi";
import { profile, socials } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const infoItems = [
  { icon: FiMail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: FiPhone, label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
  { icon: FiMapPin, label: "Location", value: profile.location, href: null },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  const field =
    "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-brand-400/60 focus:bg-white/[0.07]";

  return (
    <section id="contact" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="pointer-events-none absolute right-0 bottom-0 h-72 w-72 animate-float-slow rounded-full bg-accent-500/15 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great"
          description="Have a project in mind, a role to fill or just want to say hi? My inbox is always open."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col gap-5">
            {infoItems.map(({ icon: Icon, label, value, href }, i) => {
              const content = (
                <div className="card-glow flex items-center gap-4 p-5">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-500/20 to-accent-500/20 text-xl text-brand-300">
                    <Icon />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs tracking-wide text-slate-500 uppercase">{label}</p>
                    <p className="truncate font-medium text-white">{value}</p>
                  </div>
                </div>
              );
              return (
                <Reveal key={label} delay={i * 90}>
                  {href ? (
                    <a href={href} className="block">
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </Reveal>
              );
            })}

            <Reveal delay={280}>
              <div className="card-glow p-5">
                <p className="mb-4 text-sm font-medium text-slate-300">Find me online</p>
                <div className="flex flex-wrap gap-3">
                  {socials.map(({ label, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-lg text-slate-300 transition-all hover:-translate-y-0.5 hover:border-brand-400/50 hover:text-white"
                    >
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <form onSubmit={handleSubmit} className="card-glow p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-slate-300" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={field}
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-slate-300" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                    className={field}
                  />
                </div>
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-sm text-slate-300" htmlFor="subject">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry"
                  className={field}
                />
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-sm text-slate-300" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className={`${field} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition-transform hover:-translate-y-0.5"
              >
                {sent ? (
                  <>
                    <FiCheckCircle className="text-lg" />
                    Message Sent
                  </>
                ) : (
                  <>
                    <FiSend className="text-lg" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
