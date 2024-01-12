
import './portfolio.css';

import {useState} from 'react';

import {data} from '../../data/data.js';

const Portfolio = ()=> {

const [category , setCategory] = useState("all");
const changeCategory = (cat)=>{
	setCategory(cat);
}

const projects = data.map((el, index) => {
	if(category == "all"){
	return(
				  <div key={index}>
				    <a href={el.link} target="_blank">
				    
				    	<img src={el.src} alt={el.title} />  

					    <span></span>
					    <span></span>
					    
					    <div> {el.title}</div>
					    <div>{el.technology}</div>		    
				    </a> 
				  </div>
	)}
	
	else if ( category == "challenges"){
	
		if(el.type == "challenges"){
			return(
				  <div key={index}>
				    <a href={el.link} target="_blank">
				    
				    	<img src={el.src} alt={el.title} />  

					    <span></span>
					    <span></span>
					    
					    <div> {el.title}</div>
					    <div>{el.technology}</div>		    
				    </a> 
				  </div>
				
			)		
		
		}
	
	
	}
	
	else if ( category == "projects"){
	
		if(el.type == "projects"){
			return(
				  <div key={index}>
				    <a href={el.link} target="_blank">
				    
				    	<img src={el.src} alt={el.title} />  

					    <span></span>
					    <span></span>
					    
					    <div> {el.title}</div>
					    <div>{el.technology}</div>		    
				    </a> 
				  </div>
			)		
		
		}
	
	
	}	
	
	
	
});

const removeActive = ()=>{

const arr = document.querySelectorAll('li');
const arrli = Array.from(arr);
	console.log(arrli);
	arrli.map((el)=>{
		el.classList.remove("active");
	});
	
	
	
}

  return (
    <>
    	<div className="portfolio">
		<div className="container">
			
			<h1> my portfolio </h1>
			<p>
				i take pride in paying attention to the smallest details and making sure that my work is
				pixel perfect .i am excited to bring my skills and experience to help businesses achieve
				their goals and create a strong online presence
			</p>
			<div>
				<ul>
				  <li className="active" onClick={(e) => {
				  	removeActive();e.currentTarget.classList.add("active");changeCategory("all")}}>all</li>
				  <li onClick={(e) => {
				  	removeActive();e.currentTarget.classList.add("active");changeCategory("projects")}}>projects</li>
				  <li onClick={(e)=>{
				  	removeActive();e.currentTarget.classList.add("active");changeCategory("challenges")}}>challenges</li>
				</ul>
			</div>
			<div>
				
				{projects}
			</div>	
			
			
		
		
		</div>
    	</div>
    </>
  )
  
  
}

export default Portfolio;
