import { useEffect, useState } from "react";

export function useTypingEffect(words, { typeSpeed = 90, deleteSpeed = 45, pause = 1500 } = {}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      timeout = setTimeout(() => {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      }, deleteSpeed);
    } else {
      timeout = setTimeout(
        () => {
          setText((prev) =>   
            deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1),
          );
        },
        deleting ? deleteSpeed : typeSpeed,
      );
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause]);    

  return text;
}
