import { BrowserRouter } from "react-router-dom";
import { Navbar, Hero, About, Services, Work, Info, Flow, Testimonials, ScrollingText, Contact, Footer, CustomCursor } from "./components";
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
      <div className="app">
        <Navbar/>
        <Hero/>
        <About/>
        <Services/>
        <Work/>
        <Info/>
        <Flow/>
        <Testimonials/>
        <ScrollingText/>
        <Contact/>
        <Footer/>
        <CustomCursor/>
      </div>
    </BrowserRouter>
  );
}

export default App
