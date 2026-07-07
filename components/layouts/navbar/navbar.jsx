'use client';


import NavLink from '@/components/ui/navLink/navLink';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import { useState } from 'react';
import { BiComment } from 'react-icons/bi';
import Hamburger from 'hamburger-react';
import Button from '@/components/ui/button/button';
const Navbar = (props) => {
  const { t } = useTranslation();

  const desktopLinks = ['home', 'about', 'skills', 'portfolio'];
  const mobileLinks = [...desktopLinks, 'contact'];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="w-full px-4 bg-[var(--main-background-color)] shadow-[1px_1px_5px_rgba(0,0,0,0.2)] transition-all duration-300">
        <div className="mx-auto max-w-[1200px] h-[80px] flex justify-between items-center text-[var(--h1-color)] px-5 md:px-0">
         	 <NavLink to="home" desktopLink={true} className='text-[var(--second-color)]'>
                            {t("nagah")}
           </NavLink>

          <ul className="hidden md:flex gap-4">
            {desktopLinks.map((link, index) => (
              <NavLink key={index} to={link} desktopLink={true} >
                {t(link)}
              </NavLink>
            ))}
          </ul>

          <Link
            to="contact"
            offset={-100}
            smooth={true}
            duration={500}
            spy={true}
            className="hidden md:inline"
          >
            <Button>
              <BiComment />
              {t('contact')}
            </Button>
          </Link>

          <div className="md:hidden text-[var(--second-color)] cursor-pointer">
            <Hamburger toggled={isOpen} toggle={setIsOpen} />
          </div>

        </div>
      </div>

      <ul className={`md:hidden flex flex-col absolute top-[80px] w-full bg-[var(--second-background-color)] text-[var(--h1-color)] transition-all duration-500 ${isOpen ? 'left-0' : 'left-[-100vw]'}`}>
        {mobileLinks.map((link, index) => (
          <NavLink key={index} to={link}  onClick={() => setIsOpen(false)} >
              {t(link)}
          </NavLink>
        ))}
      </ul>
    </>
  );
};

export default Navbar;