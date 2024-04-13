import { useState, useEffect } from 'react';
import './portfolio.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { data } from '../../data/data.js';

const Portfolio = () => {
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

  const renderProjects = currentProjects.map((el, index) => (
    <div key={index} data-aos="fade-up">
      <a href={el.link} target="_blank">
        <img src={el.src} alt={el.title} />
        <span></span>
        <span></span>
        <div> {el.title}</div>
        <div>{el.technology}</div>
      </a>
    </div>
  ));

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredProjects.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="portfolio">
      <div className="container">
        <h1>my portfolio</h1>
        <p>
          I take pride in paying attention to the smallest details and making sure that my work is
          pixel perfect. I am excited to bring my skills and experience to help businesses achieve
          their goals and create a strong online presence.
        </p>
        <div>
          <ul>
            <li className={category === "all" ? "active" : ""} onClick={() => changeCategory("all")}>all</li>
            <li className={category === "projects" ? "active" : ""} onClick={() => changeCategory("projects")}>projects</li>
            <li className={category === "challenges" ? "active" : ""} onClick={() => changeCategory("challenges")}>challenges</li>
          </ul>
        </div>
        <div>
          {renderProjects}
        </div>
        <div className="pagination">
          <ul>
            {pageNumbers.map(number => (
              <li key={number} className={currentPage === number ? "active" : ""} onClick={() => paginate(number)}>
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

