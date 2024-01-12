
import './navbar.css';
import contact from '../../assets/contact.png';
import {Link , Element} from 'react-scroll';
import {useState} from 'react';
import menu  from '../../assets/menu.png';

const Navbar = ()=> {
 
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

  return (
    <>
    
    	<div className="navbar">
    		<div className="container">
	    		<Link to="header" offset={-100} smooth={true} duration={500} spy={true} className="logo">
	    			NaGaH
	    		</Link>
	    		<ul className="desktop-menu">
		    		<Link to="header"     offset={-100} smooth={true} duration={500} spy={true} activeClass="active"> home  </Link>
	    			<Link to="about"   smooth={true} duration={500} spy={true} activeClass="active"> about </Link>
	    			<Link to="portfolio" smooth={true} duration={500} spy={true} activeClass="active"> portfolio</Link>
	    			<Link to="clients" smooth={true} duration={500} spy={true} activeClass="active"> clients</Link>
	    			
	    			
	    		</ul>
	    		<Link to="contact"   className="btn-contact"  offset={-100} smooth={true} duration={500} spy={true} >  
	    			<img src={contact} alt="contact"/>
	    			contact me
	    		</Link>
 		
	    		<img src={menu} alt="menu" className="menu" onClick={handleMenu}/>
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
	    			  	to="clients"
		    			smooth={true}
		    			duration={500}
		    			spy={true}
		    			activeClass="active"
		    			onClick={()=>{setHidden(false) ; handleMenu();}}	
		    		> clients</Link>
		    		
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
