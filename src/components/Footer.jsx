import { FiHeart } from "react-icons/fi";
import { navLinks, profile, socials } from "../data/portfolio";

export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 pt-14 pb-8">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <button
              onClick={() => scrollTo("home")}
              className="flex items-center gap-2.5 font-display text-lg font-bold text-white"
            >
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-sm font-black text-white">
                Z
              </span>
              Zubair
            </button>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              {profile.headline} crafting fast, accessible and beautiful web experiences.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-display text-sm font-semibold tracking-wide text-white uppercase">
              Navigate
            </h4>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display text-sm font-semibold tracking-wide text-white uppercase">
              Connect
            </h4>
            <div className="flex flex-wrap gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all hover:-translate-y-0.5 hover:border-brand-400/50 hover:text-white"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {year} {profile.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-xs text-slate-500">
            Built with <FiHeart className="text-rose-400" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
