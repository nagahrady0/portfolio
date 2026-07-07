import { useState, useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import {useTranslation} from 'react-i18next';
import Heading from "@/components/ui/heading/heading"

import Card from '@/components/ui/card/card.jsx';
import { data } from '@/data/data.js';

const Portfolio = () => {
  const { t } = useTranslation();

  const [category, setCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // Adjust as needed

  useEffect(() => {
    AOS.init();
  }, []);

  const changeCategory = (cat) => {
    setCategory(cat);
    setCurrentPage(1); // Reset to first page when changing category
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const filteredProjects = data.filter((el) => category === "all" || el.type === category);
  const currentProjects = filteredProjects.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const renderProjects = currentProjects.map((el, index) => 

     <Card key={index} link={el.link} src={el.src} title={el.title} technology={el.technology} />

  );

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredProjects.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="portfolio px-4">
      <div className="container max-[767px]:max-w-[600px] max-[767px]:mx-auto max-w-[1200px] mx-auto my-[25px] flex flex-col items-center gap-[35px] text-[var(--h1-color)]">
                       <Heading>
                         {t("portfolio title")}
                       </Heading>
        <p className="max-[767px]:w-[90%] text-center leading-6 w-[60%] text-[var(--p-color)]">
          {t("portfolio description")}
        </p>
        <div className="bg-[var(--second-background-color)] rounded-[25px] shadow-[1px_1px_12px_rgba(0,0,0,0.9)] px-[25px] py-0">
          <ul className="max-[767px]:w-[90%] list-none flex gap-[25px]
">
            <li className={`capitalize cursor-pointer p-[15px] transition-all duration-200 text-[18px] font-medium hover:text-[var(--second-color)] ${category === "all" ? "active" : ""}`} onClick={() => changeCategory("all")}>{t("all")}</li>
            <li className={`capitalize cursor-pointer p-[15px] transition-all duration-200 text-[18px] font-medium hover:text-[var(--second-color)] ${category === "projects" ? "active" : ""}`} onClick={() => changeCategory("projects")}>{t("projects")}</li>
            <li className={`capitalize cursor-pointer p-[15px] transition-all duration-200 text-[18px] font-medium hover:text-[var(--second-color)] ${category === "challenges" ? "active" : ""}`} onClick={() => changeCategory("challenges")}>{t("challenges")}</li>
          </ul>
        </div>
        <div className='max-[767px]:flex max-[767px]:flex-col max-[767px]:items-center max-[767px]:justify-center max-[767px]:gap-5 grid grid-cols-3 gap-5'>
          {renderProjects}
        </div>
        <div className="pagination">
          <ul className="list-none flex gap-[10px]">
              {pageNumbers.map(number => (
                <li 
                  key={number} 
                  className={`cursor-pointer text-[var(--button-color)] border-2 border-[var(--btn-border-color)] p-[10px] transition-all duration-500 
                  ${currentPage === number 
                    ? "active" 
                    : "hover:bg-[var(--btn-hover-bg-color)] hover:text-[var(--btn-hover-color)]"
                  }`}
                  onClick={() => paginate(number)}
                >
                  {number}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;

