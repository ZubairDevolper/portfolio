import { useEffect, useState } from "react";

export function useActiveSection(ids, offset = 120) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY + offset;
      let current = ids[0];

      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          current = id;
        }
      }

      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 4) {
        current = ids[ids.length - 1];
      }

      setActive(current);
    };

    handler();
    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
    };
  }, [ids, offset]);

  return active;
}
