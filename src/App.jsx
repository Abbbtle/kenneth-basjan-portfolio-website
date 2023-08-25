import { BrowserRouter } from "react-router-dom";
import { Navbar, Hero, About, Slider, Services, Work, Info, Flow, Testimonials, ScrollingText, Contact, Footer, CustomCursor } from "./components";
import './index.css'

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar/>
        <Hero/>
        <About/>
        <Slider/>
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
