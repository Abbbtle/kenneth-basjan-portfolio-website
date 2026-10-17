import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import {
  About,
  Contact,
  CustomCursor,
  Experience,
  Footer,
  Header,
  Hero,
  Marquee,
  Projects,
  Recommendations,
  ScrollToTopButton,
  Skills,
} from './components';
import { startSmoothScroll } from './lib/smoothScroll';

const FOCUS_WORDS = [
  'Cloud-native',
  'AWS',
  'Serverless',
  'Event-driven',
  'Backend',
  'DevOps',
  'Storage',
  'Disaster recovery',
];
const CONTACT_WORDS = Array.from({ length: 4 }, () => ['Contact', 'me']).flat();

const App = () => {
  useEffect(() => startSmoothScroll(), []);

  return (
    <>
      <a href="#main" data-native-anchor className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <Marquee words={FOCUS_WORDS} duration={45} />
        <div className="space-y-32 pt-24 md:space-y-48 md:pt-40">
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Recommendations />
        </div>
        <div className="mt-32 md:mt-48">
          <Marquee words={CONTACT_WORDS} duration={30} href="#contact" label="Contact me" />
        </div>
        <div className="pt-16 md:pt-24">
          <Contact />
        </div>
      </main>
      <Footer />
      {/* The original site's toast settings; colours and fonts are themed in index.css. */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
        draggable
        theme="dark"
      />
      <ScrollToTopButton />
      <CustomCursor />
    </>
  );
};

export default App;
