"use client";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NotFound() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedLang = localStorage.getItem("language") || "en";
    i18n.changeLanguage(savedLang).then(() => setMounted(true));
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-8 [background:var(--main-background-color)]">
      <h1 className="text-[120px] font-bold leading-none tracking-[-4px] relative select-none [color:var(--h1-color)]">
        4<span className="[color:var(--second-color)]">0</span>4
        <span
          className="absolute top-0 left-0 w-full h-full animate-glitch1 [clip-path:polygon(0_0,100%_0,100%_35%,0_35%)] [color:#ff6b6b]"
          aria-hidden="true"
        >
          404
        </span>
        <span
          className="absolute top-0 left-0 w-full h-full animate-glitch2 [clip-path:polygon(0_65%,100%_65%,100%_100%,0_100%)] [color:#4ecdc4]"
          aria-hidden="true"
        >
          404
        </span>
      </h1>

      <div className="w-16 h-0.5 rounded-full mx-auto mb-4 [background:var(--second-color)]" />

      <p className="text-sm tracking-[4px] uppercase mb-6 [color:var(--p-color)]">
        {t("notFound.title")}
      </p>

      <p className="text-base text-center max-w-xs leading-relaxed mb-8 [color:var(--p-color)]">
        {t("notFound.message")}
      </p>

      <button
        onClick={() => router.push("/")}
        className="px-8 py-3 rounded-full text-sm font-semibold tracking-wide cursor-pointer transition-transform hover:scale-105 [background:var(--second-color)] [color:var(--main-background-color)]"
      >
        {t("notFound.button")}
      </button>
    </div>
  );
}