import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className={`fixed right-5 bottom-5 z-40 grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-accent-500 text-xl text-white shadow-lg shadow-brand-500/30 transition-all duration-300 hover:-translate-y-1 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <FiArrowUp />
    </button>
  );
}
