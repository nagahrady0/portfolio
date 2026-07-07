import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import Heading from "@/components/ui/heading/heading"

const skills = [
  { src: '/assets/skills/bootstrap.png',                    alt: 'bootstrap' },
  { src: '/assets/skills/png-transparent-material-ui-logo.png', alt: 'mui' },
  { src: '/assets/skills/Tailwind_CSS_Logo.svg.png',        alt: 'tailwind' },
  { src: '/assets/skills/SASS.png',                         alt: 'sass' },
  { src: '/assets/skills/css.png',                          alt: 'css' },
  { src: '/assets/skills/html.png',                         alt: 'html' },
  { src: '/assets/skills/JS.png',                           alt: 'js' },
  { src: '/assets/skills/jquery.png',                       alt: 'jquery' },
  { src: '/assets/skills/TS.png',                           alt: 'ts' },
  { src: '/assets/skills/git.png',                          alt: 'git' },
  { src: '/assets/skills/redux.svg',                        alt: 'redux' },
  { src: '/assets/skills/react.png',                        alt: 'react' },
];

const imgClass = 'w-[100px] h-[100px] cursor-pointer outline-none select-none border-0';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  draggable: true,
  touchMove: true,
  autoplay: true,
  autoplaySpeed: 2000,
  accessibility: true,
  arrows: false,
  centerMode: true,
  centerPadding: '50px',
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    { breakpoint: 768,  settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
};

const Skills = () => {
  const { t } = useTranslation();

  return (
    <div className="slider w-full flex justify-center items-center flex-col gap-[20px] my-[50px] skills px-4">
          <Heading className="mb-[35px]">
            {t('skills')}
          </Heading>
      <div className="slide-container w-[90%] text-center max-w-[1200px]">
        <Slider {...settings}>
          {skills.map(({ src, alt }) => (
            <div key={alt}>
              <Image src={src} alt={alt} width={100} height={100} className={imgClass} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Skills;