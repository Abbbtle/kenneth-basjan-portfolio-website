import { BrowserRouter } from "react-router-dom";
import { Navbar, Hero, About, Services, Work, Info, Flow, Testimonials, ScrollingText, Contact, Contact2, Footer, CustomCursor } from "./components";
import './index.css'

const App = () => {
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
        <Contact2/>
        <Footer/>
        <CustomCursor/>
      </div>
    </BrowserRouter>
  );
}

export default App
