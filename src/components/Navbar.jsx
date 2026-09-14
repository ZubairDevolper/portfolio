import { useEffect, useMemo, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FiDownload } from "react-icons/fi";
import { navLinks, profile } from "../data/portfolio";
import { useActiveSection } from "../hooks/useActiveSection";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const ids = useMemo(() => navLinks.map((l) => l.id), []);
  const active = useActiveSection(ids);

  useEffect(() => {
    const onScroll = () => {   
      setScrolled(window.scrollY > 40);
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? (window.scrollY / height) * 100 : 0);
    };   
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {   
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="h-0.5 w-full bg-white/5">   
        <div
          className="h-full bg-gradient-to-r from-brand-500 to-accent-400 transition-[width] duration-150"      
          style={{ width: `${progress}%` }}
        />
      </div>

      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between px-5 transition-all duration-300 sm:px-8 ${
          scrolled
            ? "my-3 rounded-2xl bg-ink-900/70 py-3 shadow-lg shadow-black/30 backdrop-blur-xl"
            : "py-5"
        }`}
      >
        <button
          onClick={() => scrollTo("home")}  
          className="group flex items-center gap-2.5 font-display text-lg font-bold text-white cursor-pointer"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-sm font-black text-white shadow-lg shadow-brand-500/30 transition-transform group-hover:rotate-6">
            Z
          </span>
          <span>Zubair</span>
        </button>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollTo(link.id)}
                className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors cursor-pointer ${
                  active === link.id
                    ? "text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {active === link.id && (
                  <span className="absolute inset-0 rounded-lg border border-white/10 bg-white/5" />
                )}
                <span className="relative">{link.label}</span>
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500
             px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition-transform sm:inline-flex"
          >   
            <FiDownload className="text-base" />
            Resume
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-xl text-white lg:hidden"
          >
            {open ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </nav>

      <div
        className={`mx-4 overflow-hidden rounded-2xl bg-ink-900/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          open ? "mt-2 max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col p-3">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollTo(link.id)}
                className={`w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors ${
                  active === link.id
                    ? "bg-brand-500/15 text-white"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
