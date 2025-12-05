import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './app.scss';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Parallax from './components/parallax/Parallax';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
// import About from './pages/About/About';
import whatappLogo from './assets/wlogo.png';
import Preloader from './components/loader/Preloader';
import PackageModel from './components/PackageModel/PackageModel';
import Skill from './components/skills/Skill';
import Consultation from './components/Consultation/Consultation';
import WebDesignCreation from './components/WebDesignCreation/WebDesignCreation';
import Approach from './components/Approach/Approach';
import Footer from './components/Footer/Footer';
import GetStarted from './components/GetStarted/GetStarted';
import About from './pages/About/About';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the timeout duration as needed
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/about" element={<About />} />

        <Route path='/' element={
          <div>
            <section id="Homepage">
              <Navbar />
              <Hero />
            </section>
            <section id="Services"><Parallax type="services" /></section>
            <section id="Work-Service"><Services /></section>
            {/* <section id="Portfolio"><Parallax type="portfolio" /></section> */}
             <div id="approach" >
            <Approach /></div>
                  <div id="packageModel" >
   <PackageModel/> </div>
            {/* <Portfolio /> */}
         <div id="book-consultation" >
             <Skill /> 
             </div>
            <Consultation />
             <div id="webDesign" >
            <WebDesignCreation /></div>
              <Contact />
           <Footer />
            <section className='footer'>
            </section>
          </div>
        } />
        <Route path='/getstarted' element={<GetStarted />} />
      </Routes>
    </Router>
    <div className="whatsapp-button">
  <a href="https://wa.me/923244282516?text=Hello How can I help you?" target="_blank">
    <img src={whatappLogo} width="60" alt="w/a" />
  </a>
</div>

    </div>
  );
}

export default App;
