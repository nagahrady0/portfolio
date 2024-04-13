
import './navbar.css';

import {Link , Element} from 'react-scroll';
import {useState} from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { BiComment } from "react-icons/bi";

const Navbar = (props)=> {
 
	const [hidden , setHidden] = useState(true);
	const handleMenu = ()=>{
	
		if(!hidden){
			document.querySelector(".mobile-menu").classList.remove("show");
			setHidden(true);
		}
		else{
		document.querySelector(".mobile-menu").classList.add("show");
		setHidden(false);
		}

	}
	
	

	const chgMode = ()=>{

		if(props.mode == 'light'){
		
			props.setMode('dark');
			document.body.style.background = "#1E1E1E";
			localStorage.setItem('mymode' , 'dark');
			console.log('dark');

		}
		else if (props.mode == 'dark'){

			props.setMode('light');
			document.body.style.background = "#f8f8f8";
			localStorage.setItem('mymode' , 'light');
			console.log('dark');
		
		}
	}	
	
	
  return (
    <>
    
    	<div className="navbar">
    		<div className="container">
    			<div className="logo">
	    		<Link to="header" offset={-100} smooth={true} duration={500} spy={true} className="logo">
	    			NaGaH
	    		</Link>
	    		<i className={`bi ${props.mode == 'light'?'bi-lightbulb-fill':'bi-lightbulb'} lamp`} onClick={()=>{ chgMode()}}></i>
	    		</div>
	    		<ul className="desktop-menu">
		    		<Link to="header"     offset={-100} smooth={true} duration={500} spy={true} activeClass="active"> home  </Link>
	    			<Link to="about"   smooth={true} duration={500} spy={true} activeClass="active"> about </Link>
	    			<Link to="skills" smooth={true} duration={500} spy={true} activeClass="active"> skills</Link>
	    			<Link to="portfolio" smooth={true} duration={500} spy={true} activeClass="active"> portfolio</Link>
	    			
	    				
	    		</ul>
	    		<Link to="contact"   className="btn-contact"  offset={-100} smooth={true} duration={500} spy={true} >  
	    			<BiComment className="custom-icon-class"/>
	    			contact me
	    		</Link>
 		
	    		<i className="bi bi-list menu" onClick={handleMenu}></i>
    		</div>
    	</div>
    		    	<ul className="mobile-menu" >
		    		<Link 
			    		to="header"
			    		offset={-100} 
			    		smooth={true} 
			    		duration={500} 
			    		spy={true} 
			    		activeClass="active"
			    		onClick={()=>{setHidden(false) ; handleMenu();}}
		    		> home  </Link>
		    		
	    			<Link 
		    			to="about"
		    			smooth={true}
		    			duration={500}
		    			spy={true}
		    			activeClass="active"
		    			onClick={()=>{setHidden(false) ; handleMenu();}}	
	    			> about </Link>
	    			
	    			<Link 	
	    				to="portfolio"
		    			smooth={true}
		    			duration={500}
		    			spy={true}
		    			activeClass="active"
		    			onClick={()=>{setHidden(false) ; handleMenu();}}	
		    		> portfolio</Link>
		    		
	    			<Link 	  
	    			  	to="skills"
		    			smooth={true}
		    			duration={500}
		    			spy={true}
		    			activeClass="active"
		    			onClick={()=>{setHidden(false) ; handleMenu();}}	
		    		> skills</Link>
		    		
	    			<Link 	
	    				to="contact"
		    			smooth={true}
		    			duration={500}
		    			spy={true}
		    			activeClass="active"
		    			onClick={()=>{setHidden(false) ; handleMenu();}}
		    		> contact me</Link>
	    			
	    			
	    		</ul>	
	    		   
    </>
  )
  
  
}

export default Navbar;
