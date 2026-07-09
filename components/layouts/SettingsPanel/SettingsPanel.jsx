"use client";
import { useEffect, useState } from "react";
import Link from 'next/link';
import { useLocale } from 'next-intl';

const THEMES = [
  { id: "theme-light",    label: "☀️ Light"    },
  { id: "theme-dark",     label: "🌙 Dark"     },
  { id: "theme-midnight", label: "🌊 Midnight" },
   { id: "theme-ocean",       label: "🌊 Ocean"      },
  { id: "theme-forest",   label: "🌿 Forest"   },
  { id: "theme-ember",    label: "🔥 Ember"    },
];

const ALL_THEMES = THEMES.map(t => t.id);

export default function SettingsPanel() {
  const locale = useLocale();
  const [theme, setTheme] = useState("theme-light");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "theme-dark";

    applyTheme(savedTheme);
    setTheme(savedTheme);

  }, []);

  const applyTheme = (newTheme) => {
    document.documentElement.classList.remove(...ALL_THEMES);
    document.documentElement.classList.add(newTheme);
  };

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  };




  return (
    <>
      {/* Panel - دايما على اليمين مش متأثر بالـ RTL */}
      {open && (
        <div className="fixed bottom-20 right-5 z-50 bg-gray-900 text-white rounded-2xl p-4 flex flex-col gap-4 shadow-xl w-48">
          
          {/* Themes */}
          <div className="flex flex-col gap-1">
            <span className="text-xs text-gray-400 mb-1">Theme</span>
            {THEMES.map(t => (
              <button
                key={t.id}
                onClick={() => changeTheme(t.id)}
                className={`text-left px-3 py-1.5 rounded-lg text-sm transition-all ${
                  theme === t.id
                    ? "bg-orange-500 text-white"
                    : "bg-gray-800 hover:bg-gray-700"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700" />

          {/* Language */}
          <div className="flex flex-col gap-1">
            <span className="text-xs text-gray-400 mb-1">Language</span>
            <div className="flex gap-2">
              {["en", "ar"].map(lng => (
                <Link href={`/${lng}`}  key={lng}                  
                className={`flex-1 py-1.5 rounded-lg text-sm font-medium text-center transition-all ${
                    locale === lng
                      ? "bg-orange-500 text-white"
                      : "bg-gray-800 hover:bg-gray-700"
                  }`}>
                  {lng.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>

        </div>
      )}

      {/* Toggle Button - ثابت دايما */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-5 right-5 z-50 w-12 h-12 rounded-full bg-gray-900 text-white shadow-xl flex items-center justify-center text-xl hover:scale-105 transition-all"
      >
        {open ? "✕" : "⚙️"}
      </button>
    </>
  );
}