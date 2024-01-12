
import './App.css'


import Headroom from 'react-headroom';
import Navbar from './components/navbar/navbar.jsx';
import Header from './components/header/header.jsx';
import About from './components/about/about.jsx';
import Portfolio from './components/portfolio/portfolio.jsx';
import Clients from './components/clients/clients.jsx';
import Contact from './components/contact/contact.jsx';
import Footer from './components/footer/footer.jsx';

function App() {
 
 

  return (
    <>
    	<Headroom>
    		<Navbar />
    	</Headroom>
    	
    	<Header />
    	<About />
    	<Portfolio />
    	<Clients />
    	<Contact />
    	<Footer />
    </>
  )
}

export default App
