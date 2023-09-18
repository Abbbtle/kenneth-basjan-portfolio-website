import { BrowserRouter } from "react-router-dom";
import { Navbar, Hero, About, Services, Work, Info, Flow, Testimonials, ScrollingText, Contact, Footer, CustomCursor, ScrollToTopButton } from "./components";
import './index.css'
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
		AOS.init();
		AOS.refresh(); 
	}, []);
  return (
    <BrowserRouter>
      <div className="app mx-2">
        <Navbar/>
        <Hero/>
        <About/>
        <Services/>
        <Work/>
        <div className="app -mx-2">
          <Info/>
        </div>
        <Flow/>
        <Testimonials/>
        <div className="app -mx-2">
          <ScrollingText/>
        </div>
        <Contact/>
        <Footer/>
        <CustomCursor/>
        <ScrollToTopButton/>
      </div>
    </BrowserRouter>
  );
}

export default App
