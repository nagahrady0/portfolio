"use client"
import { useTranslations , useLocale} from 'next-intl';
import { TypeAnimation } from 'react-type-animation';
import { IoBagSharp } from "react-icons/io5";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import animationData from "@/public/assets/hello.json";

import Button from "@/components/ui/button/button";

const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);

const hexToNormalized = (hex) => {
  hex = hex.trim().replace('#', '');
  return [
    parseInt(hex.slice(0, 2), 16) / 255,
    parseInt(hex.slice(2, 4), 16) / 255,
    parseInt(hex.slice(4, 6), 16) / 255,
  ];
};

const replaceColor = (json, oldColor, newColor) => {
  const str = JSON.stringify(json);
  return JSON.parse(str.split(JSON.stringify(oldColor)).join(JSON.stringify(newColor)));
};



const Hero = () => {
  const  t  = useTranslations();
  const locale = useLocale();
  const [lottieData, setLottieData] = useState(null);

  useEffect(() => {
    const updateLottie = () => {
      let json = structuredClone(animationData);
      const style = getComputedStyle(document.documentElement);
      const [r, g, b] = hexToNormalized(style.getPropertyValue('--second-background-color').trim());

      json = replaceColor(json, [0.165000002992, 0.165000002992, 0.165000002992, 1], [r, g, b, 1]);
      json = replaceColor(json, [0.152999997606, 0.152999997606, 0.152999997606, 1], [r, g, b, 1]);

      setLottieData(json);
    };

    updateLottie();

    const observer = new MutationObserver(updateLottie);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  const roles = [t("Nagah Rady"), t("a front end developer"), t("web designer")];

  return (
    <div id="home" className="px-4">
      <div className="max-w-[1200px] min-h-screen flex justify-between items-center mx-auto max-md:flex-col max-md:min-h-fit max-md:my-6">

        <div className="w-1/2 max-md:w-[90%] max-md:mt-20 flex flex-col gap-8 text-[var(--h1-color)]">

          <div className="text-[length:var(--text-greeting)] font-extrabold  mb-2 capitalize">{t('hello')}</div>

          <h1 className="whitespace-nowrap text-[length:var(--text-display)] font-bold capitalize">
            {t("i'm")}
            <span className="text-[length:var(--text-display)] font-bold text-[var(--second-color)] inline-block mb-4 ml-4">
              <TypeAnimation
                key={locale}
                sequence={roles.flatMap(role => [role, 2000])}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>

          <p className=" text-[length:var(--text-hero-paragraph)] max-w-xl leading-relaxed mt-4 leading-6 text-[var(--p-color)]">{t("header paragraph")}</p>

          <a
            href="/cv/Nagah_Rady_CV.pdf"
            download="Nagah_Rady_CV.pdf"
            
          >
            <Button > 
			<IoBagSharp /> 
			{t("hire me")} 
	   </Button>
          </a>
	 
        </div>

        <div className="w-1/2 flex justify-end max-md:hidden">
          {lottieData && (
            <Player autoplay loop src={lottieData} className="w-96 h-96" />
          )}
        </div>

      </div>
    </div>
  );
};

export default Hero;