"use client";

import { Link } from 'react-scroll';
import { useTranslations } from 'next-intl';

const desktopLinkClass = " cursor-pointer relative before:content-[''] before:absolute before:left-0 before:-bottom-2 before:h-[2px] before:w-0 before:bg-[var(--second-color)] before:transition-all before:duration-500 hover:before:w-full";
const mobileLinkClass = " mb-[5px] cursor-pointer text-center py-[15px] hover:bg-[var(--main-background-color)]";

const NavLink = ({children ,  to , desktopLink , onClick  , className=""}) => {
  const  t  = useTranslations();

  return (
    <Link
      to={to}
      href={`#${to}`}
      offset={-100}
      smooth={true}
      duration={500}
      spy={true}
      className={`${desktopLink ? desktopLinkClass : mobileLinkClass} ${className}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default NavLink;