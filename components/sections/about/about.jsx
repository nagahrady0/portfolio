import Image from 'next/image';
import { useTranslations } from 'next-intl';

import Heading from "@/components/ui/heading/heading"

const services = [
  { key: 'ui/ux design', icon: '/assets/ui-design.png' },
  { key: 'website design', icon: '/assets/website-design.png' },
  { key: 'app design', icon: '/assets/app-design.png' },
];

const About = () => {
  const  t  = useTranslations();

  return (
    <div id="about" className="px-4">
      <div className="max-w-[1200px] mx-auto py-6 flex flex-col items-center gap-4 text-[var(--h1-color)]">


        <Heading>
         {t('about title')}
        </Heading>
        <p className="w-[60%] max-md:w-[90%] text-[length:var(--text-paragraph)]  text-center leading-relaxed my-8 text-[var(--p-color)]">
          {t('about paragraph')}
        </p>

        {services.map(({ key, icon }) => (
          <div
            key={key}
            className="w-[60%] max-md:w-[90%] flex gap-4 p-4 rounded-xl bg-[var(--second-background-color)]"
          >
            <div className="shrink-0">
              <Image src={icon} alt={key} width={50} height={50} />
            </div>
            <div>
              <h2 className="text-[length:var(--text-heading)] font-semibold mb-1">{t(key)}</h2>
              <p className=" text-[length:var(--text-small)]  text-[var(--p-color)] leading-relaxed">{t(`${key} description`)}</p>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default About;