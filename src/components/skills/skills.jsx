
import './skills.css';



import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import bootstrap from '../../assets/skills/bootstrap.png';
import mui from '../../assets/skills/png-transparent-material-ui-logo.png';
import tailwind from '../../assets/skills/Tailwind_CSS_Logo.svg.png';
import sass from '../../assets/skills/SASS.png';


import css from '../../assets/skills/css.png';
import html from '../../assets/skills/html.png';
import js from '../../assets/skills/JS.png';
import jquery from '../../assets/skills/jquery.png';

import ts from '../../assets/skills/TS.png';
import git from '../../assets/skills/git.png';
import redux from '../../assets/skills/redux.svg';
import react from '../../assets/skills/react.png';






const Skills = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true,
    touchMove: true,
    autoplay: true,         // Enable autoplay
    autoplaySpeed: 2000,//Autoplay speed in milliseconds
    // Accessibility
    accessibility: true,     // Enable keyboard accessibility
    arrows: false,  
  // Center mode (for centering the current slide)
  centerMode: true,    // Enable center mode
  centerPadding: '50px', 
  
  
  
    responsive: [
    {
      breakpoint: 1024,   // Adjust settings for screens larger than 1024px wide
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,    // Adjust settings for screens larger than 768px wide
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
    // Add more breakpoints and settings as needed
  ],
  
  
  };

  return (
  <div className="slider skills">
  	 <h1> Skills</h1>
	  <div className="slide-container">
	  		 
		    <Slider {...settings} >
		      <div>
				<img src={bootstrap} alt="bootstrap" />
		      </div>
		      <div>
				<img src={mui} alt="mui" />
		      </div>
		      <div>
				<img src={tailwind} alt="tailwind" />
		      </div>
		      <div>
				<img src={sass} alt="sass" />
		      </div>	
		      
		      <div>
				<img src={css} alt="css" />
		      </div>
		      <div>
				<img src={html} alt="html" />
		      </div>
		      <div>
				<img src={js} alt="js" />
		      </div>
		      <div>
				<img src={jquery} alt="jquery" />
		      </div>		      		      		      
		      
		      <div>
				<img src={ts} alt="ts" />
		      </div>
		      <div>
				<img src={git} alt="git" />
		      </div>
		      <div>
				<img src={redux} alt="redux" />
		      </div>
		      <div>
				<img src={react} alt="react" />
		      </div>
		      
		    </Slider>
	    </div>
    </div>
  );
};

export default Skills;

