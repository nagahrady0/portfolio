
import './portfolio.css';

import {useState} from 'react';

import {data} from '../data/data.js';

const Portfolio = ()=> {

const [category , setCategory] = useState("all");
const changeCategory = (cat)=>{
	setCategory(cat);
}

const projects = data.map((el, index) => {
	if(category == "all"){
	return(
		  <div key={index}>
		   
		    <img src={el.src} alt={el.title} />

		    <span></span>
		    <span></span>
		    
		    <div> {el.title}</div>
		    <div>{el.technology}</div>		    
		    
		  </div>
	)}
	
	else if ( category == "challenges"){
	
		if(el.type == "challenges"){
			return(
				  <div key={index}>
				   
				    <img src={el.src} alt={el.title} />

				    <span></span>
				    <span></span>
				    
				    <div> {el.title}</div>
				    <div>{el.technology}</div>		    
				    
				  </div>
			)		
		
		}
	
	
	}
	
	else if ( category == "projects"){
	
		if(el.type == "projects"){
			return(
				  <div key={index}>
				   
				    <img src={el.src} alt={el.title} />

				    <span></span>
				    <span></span>
				    
				    <div> {el.title}</div>
				    <div>{el.technology}</div>		    
				    
				  </div>
			)		
		
		}
	
	
	}	
	
	
	
});

  return (
    <>
    	<div className="portfolio">
		<div className="container">
			
			<h2> my portfolio </h2>
			<p>
				i take pride in paying attention to the smallest details and making sure that my work is
				pixel perfect .i am excited to bring my skills and experience to help businesses achieve
				their goals and create a strong online presence
			</p>
			<div>
				<ul>
				  <li onClick={() => changeCategory("all")}>all</li>
				  <li onClick={() => changeCategory("projects")}>projects</li>
				  <li onClick={() => changeCategory("challenges")}>challenges</li>
				</ul>
			</div>
			<div>
				
				{projects}
			</div>	
			
			<button>
				see more
			</button>			
		
		
		</div>
    	</div>
    </>
  )
  
  
}

export default Portfolio;
