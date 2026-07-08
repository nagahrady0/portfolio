"use client";
import { useEffect, useRef } from "react";

const baseDotClass = "fixed pointer-events-none rounded-full bg-[var(--second-color)] -translate-x-1/2 -translate-y-1/2 transition-transform duration-200";

const dots = [
  { ref: null, className: `${baseDotClass} w-[10px] h-[10px] z-[99999] opacity-100` },
  { ref: null, className: `${baseDotClass} w-[8px] h-[8px] z-[99998] opacity-50` },
  { ref: null, className: `${baseDotClass} w-[5px] h-[5px] z-[99997] opacity-25` },
];

export default function CustomCursor() {
  const dot1Ref = useRef(null);
  const dot2Ref = useRef(null);
  const dot3Ref = useRef(null);
  const refs = [dot1Ref, dot2Ref, dot3Ref];

  useEffect(() => {
    const dotEls = refs.map(r => r.current);
    let mouse = { x: 0, y: 0 };
    let positions = [
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
    ];
    const speeds = [1, 0.15, 0.08];
    let animId;

    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      positions[0].x = mouse.x;
      positions[0].y = mouse.y;
      dotEls[0].style.left = mouse.x + "px";
      dotEls[0].style.top = mouse.y + "px";
    };

    const animate = () => {
      for (let i = 1; i < dotEls.length; i++) {
        positions[i].x += (positions[i - 1].x - positions[i].x) * speeds[i];
        positions[i].y += (positions[i - 1].y - positions[i].y) * speeds[i];
        dotEls[i].style.left = positions[i].x + "px";
        dotEls[i].style.top = positions[i].y + "px";
      }
      animId = requestAnimationFrame(animate);
    };

    const onHoverIn  = () => dotEls.forEach(d => d.style.transform = "translate(-50%, -50%) scale(1.8)");
    const onHoverOut = () => dotEls.forEach(d => d.style.transform = "translate(-50%, -50%) scale(1)");

    document.addEventListener("mousemove", onMove);
    animId = requestAnimationFrame(animate);

    const interactives = document.querySelectorAll("a, button, [role='button']");
    interactives.forEach(el => {
      el.addEventListener("mouseenter", onHoverIn);
      el.addEventListener("mouseleave", onHoverOut);
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(animId);
      interactives.forEach(el => {
        el.removeEventListener("mouseenter", onHoverIn);
        el.removeEventListener("mouseleave", onHoverOut);
      });
    };
  }, []);

  return (
    <>
      <div ref={dot1Ref} className={`${baseDotClass} w-[10px] h-[10px] z-[99999] opacity-100`} />
      <div ref={dot2Ref} className={`${baseDotClass} w-[8px]  h-[8px]  z-[99998] opacity-50`}  />
      <div ref={dot3Ref} className={`${baseDotClass} w-[5px]  h-[5px]  z-[99997] opacity-25`}  />
    </>
  );
}