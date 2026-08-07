import { useEffect, useRef } from "react";

/**
 * Soft cursor-following light that moves with the pointer over the whole page.
 * Renders a fixed, blurred rose-gold glow behind all content.
 */
export default function CursorLight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const pos = { ...target };

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };

    const loop = () => {
      pos.x += (target.x - pos.x) * 0.08;
      pos.y += (target.y - pos.y) * 0.08;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${pos.x - 300}px, ${
          pos.y - 300
        }px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[1] h-[600px] w-[600px] rounded-full opacity-50 blur-3xl"
      style={{
        background:
          "radial-gradient(circle, rgba(224,169,109,0.35) 0%, rgba(197,123,87,0.12) 45%, transparent 70%)",
      }}
    />
  );
}
