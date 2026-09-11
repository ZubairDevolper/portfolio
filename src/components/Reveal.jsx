import { useReveal } from "../hooks/useReveal";

export default function Reveal({ children, delay = 0, className = "", as: Tag = "div" }) {
  const { ref, visible } = useReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
