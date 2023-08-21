import { BrowserRouter } from "react-router-dom";
import { Navbar, Hero, About, Services, Work, Info, Flow, Testimonials, Transition, Contact, Footer } from "./components";
import './index.css'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Work/>
      <Info/>
      <Flow/>
      <Testimonials/>
      <Transition/>
      <Contact/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App
