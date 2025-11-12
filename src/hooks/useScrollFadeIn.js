import { useEffect, useRef, useState } from "react";

export default function useScrollFadeIn({ once = false } = {}) {
  const ref = useRef(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // ⚡ torna instantâneo o "sumir" quando sai da tela
        if (entry.isIntersecting) {
          setVisible(true);
        } else if (!once) {
          setVisible(false);
        }
      },
      {
        threshold: 0.2, // aparece só quando 20% da seção está visível
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  return { ref, isVisible };
}
