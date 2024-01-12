
import './App.css'
import {useState , useEffect} from 'react';

import Headroom from 'react-headroom';
import Navbar from './components/navbar/navbar.jsx';
import Header from './components/header/header.jsx';
import About from './components/about/about.jsx';
import Portfolio from './components/portfolio/portfolio.jsx';
import Skills from './components/skills/skills.jsx';
import Contact from './components/contact/contact.jsx';
import Footer from './components/footer/footer.jsx';




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



  return (
    <div style={mode == "light" ? lightmode : darkmode}> 


    	<Headroom>
    		<Navbar mode={mode} setMode={setMode}/>
    	</Headroom>
    	
    	<Header />
    	<About />
    	<Skills />
    	<Portfolio />
    	<Contact />
    	<Footer />

    </div>
  )
}

export default App
