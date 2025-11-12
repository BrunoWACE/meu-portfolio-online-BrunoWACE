import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground() {
  const init = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={init}
      /* 👉 canvas limitado à seção */
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
      options={{
        fullScreen: { enable: false }, // 👈 mantém apenas dentro da seção
        background: { color: "transparent" },
        detectRetina: true,
        fpsLimit: 60,

        particles: {
          number: { value: 20, density: { enable: true, area: 900 } },
          color: { value: ["#847a7a", "#6f748c", "#615f67"] },
          shape: { type: "circle" },

          opacity: {
            value: 0.45,
            random: { enable: true, minimumValue: 0.10 },
            animation: {
              enable: true,
              speed: 0.1, // 👈 leve pulsação natural
              minimumValue: 0.3,
              sync: false,
            },
          },

          size: {
            value: { min: 10, max: 35 },
            random: { enable: true },
            animation: {
              enable: true,
              speed: 0.15, // 👈 muda o tamanho lentamente
              minimumValue: 10,
              sync: false,
            },
          },

          // movimento suave e constante
          move: {
            enable: true,
            speed: 0.15,        // 👈 bem lento e constante
            direction: "none",
            random: false,      // 👈 evita velocidades aleatórias
            straight: false,
            decay: 0,           // 👈 impede aceleração/desaceleração
            gravity: { enable: false },
            attract: { enable: false },
            outModes: { default: "bounce" },
          },

          collisions: { enable: false }, // 👈 desativa empurrões
          links: { enable: false },
        },

        interactivity: { events: { resize: true } },
      }}
    />
  );
}
