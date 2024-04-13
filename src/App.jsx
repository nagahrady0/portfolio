import './App.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Headroom from 'react-headroom';
import Navbar from './components/navbar/navbar.jsx';
import Header from './components/header/header.jsx';
import About from './components/about/about.jsx';
import Portfolio from './components/portfolio/portfolio.jsx';
import Skills from './components/skills/skills.jsx';
import Contact from './components/contact/contact.jsx';
import Footer from './components/footer/footer.jsx';
import Loader from './components/loader/loader.jsx';
import { setLoading } from './redux/actions.js';

function App() {
  const localmode = localStorage.getItem('mymode');
  const [mode, setMode] = useState("");
  const state = useSelector(state => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    // Set loading state to true when component mounts
    dispatch(setLoading(true));

    // Load content asynchronously
    // For demonstration purposes, we use a setTimeout to simulate loading time
    const timeout = setTimeout(() => {
      // Set loading state to false after content is loaded
      dispatch(setLoading(false));
    }, 2000);

    // Clean up timer to prevent memory leaks
    return () => clearTimeout(timeout);
  }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount

  useEffect(() => {
    if (localmode != null && localmode === "light") {
      setMode("light");
      localStorage.setItem('mymode', 'light');
      document.body.style.background = "#FAFBFF";
    } else if (localmode != null && localmode === "dark") {
      setMode("dark");
      document.body.style.background = "#1E1E1E";
    } else {
      setMode("dark");
      localStorage.setItem('mymode', 'dark');
      document.body.style.background = "#1E1E1E";
    }
  }, [mode]);

  const lightmode = {
    '--main-background-color': '#FAFBFF',
    '--second-background-color': '#EEEFFD',
    '--p-color': 'rgba(0,0,0,.6)',
    '--second-color': 'orange',
    '--h1-color': '#000',
    '--button-color': '#000',
    '--btn-bg-color': 'transparent',
    '--btn-border-color': '#1E1E1E',
    '--btn-hover-color': '#fff',
    '--btn-hover-bg-color': '#1E1E1E',
  };

  const darkmode = {
    '--main-background-color': '#1E1E1E',
    '--second-background-color': '#282828',
    '--p-color': 'rgba(255,255,255,.6)',
    '--second-color': 'orange',
    '--h1-color': '#fff',
    '--button-color': '#fff',
    '--btn-bg-color': 'transparent',
    '--btn-border-color': '#fff',
    '--btn-hover-color': '#000',
    '--btn-hover-bg-color': '#fff',
  };

  return (
    <div style={mode === "light" ? lightmode : darkmode}>
      {state ? (
        <Loader />
      ) : (
        <>
          <Headroom>
            <Navbar mode={mode} setMode={setMode} />
          </Headroom>

          <Header />
          <About />
          <Skills />
          <Portfolio />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;

