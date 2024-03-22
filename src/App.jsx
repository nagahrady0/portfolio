
import './App.css'
import {useState , useEffect} from 'react';
import { useSelector , useDispatch} from 'react-redux';


import Headroom from 'react-headroom';
import Navbar from './components/navbar/navbar.jsx';
import Header from './components/header/header.jsx';
import About from './components/about/about.jsx';
import Portfolio from './components/portfolio/portfolio.jsx';
import Skills from './components/skills/skills.jsx';
import Contact from './components/contact/contact.jsx';
import Footer from './components/footer/footer.jsx';
import Loader from './components/loader/loader.jsx';

import {setLoading} from './redux/actions.js';

function App() {
 
const localmode = localStorage.getItem('mymode');

const [mode , setMode] =useState("");


useEffect(()=>{

	if(localmode != null && localmode == "light"){
		setMode("light");
		localStorage.setItem('mymode' , 'light');
		document.body.style.background = "#fff";
	}
	else if(localmode != null && localmode == "dark"){
		setMode("dark");
		document.body.style.background = "#1E1E1E";
	}
	else{
		setMode("light");
		localStorage.setItem('mymode' , 'dark');
		document.body.style.background = "#fff";
	}

} , [mode]);


const lightmode = {
'--main-background-color':'#fff',
'--second-background-color':'#ddd',
'--p-color':'rgba(0,0,0,.6)',
'--second-color':'orange',
'--h1-color':'#000',
'--button-color':'#000',
'--btn-bg-color':'transparent',
'--btn-border-color':'#1E1E1E',
'--btn-hover-color':'#fff',
'--btn-hover-bg-color':'#1E1E1E',
}


const darkmode = {
'--main-background-color':'#1E1E1E',
'--second-background-color':'#282828',
'--p-color':'rgba(255,255,255,.6)',
'--second-color':'orange',
'--h1-color':'#fff',
'--button-color':'#fff',
'--btn-bg-color':'transparent',
'--btn-border-color':'#fff',
'--btn-hover-color':'#000',
'--btn-hover-bg-color':'#fff',



}


const state = useSelector(state => state.loading);
const dispatch = useDispatch();


 window.onload = ()=> {    // code to be excuted after whole page is loaded
 	const timeout = setTimeout(()=>{ // delay code two seconds to show loading if the internet is speed
 		dispatch(setLoading(false)); // fire action to disappear loading 
 		} , 2000);
 	}	
 	


 		
 

  return (
    <div style={mode == "light" ? lightmode : darkmode}> 

	{!state?(	    	
		
		<>
		<Headroom>
	    		<Navbar mode={mode} setMode={setMode}/>
	    	</Headroom>
	    	
	    	<Header />
	    	<About />
	    	<Skills />
	    	<Portfolio />
	    	<Contact />
	    	<Footer />
	    	</>
	    	):
	    	
	    	<Loader />
	
	
	}

    	

    </div>
  )
}

export default App
