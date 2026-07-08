"use client";
import { useEffect, useState } from "react";

export default function Toast({ message, type = "success", onClose }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 300);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="fixed left-1/2 -translate-x-1/2 bg-[var(--second-background-color)] text-[var(--h1-color)] px-7 py-3.5 rounded-xl text-sm font-medium tracking-wide shadow-[0_8px_32px_rgba(0,0,0,0.3)] z-[99999] transition-all duration-300 flex items-center gap-2.5 whitespace-nowrap"
      style={{
        bottom: visible ? '30px' : '-100px',
        borderLeft: `4px solid ${type === 'success' ? 'orange' : '#ff4d4d'}`,
      }}
    >
      <span>{type === 'success' ? '✅' : '❌'}</span>
      {message}
    </div>
  );
}