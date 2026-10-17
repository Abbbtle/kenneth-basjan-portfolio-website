import { useRef } from 'react';
import { profile } from '../data/profile';
import Button from './Button';
import HeroPeeks from './HeroPeeks';

// Full-screen opening: the name fills the width and rises from a mask on load,
// the original white rule draws underneath, then the summary and actions fade in.
// Line drawings of the career then rise from behind the name into the open space above:
// in a row on desktop, round a ring on smaller screens.
const Hero = () => {
  const headingRef = useRef(null);

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="hero-intro page flex min-h-[100svh] flex-col justify-end pb-10 pt-28 md:pb-14"
    >
      {/* Keeps room for the ring of drawings above the text on phones and tablets held upright.
          On tall screens it just fills the open space; on short ones the hero grows to fit. */}
      <div aria-hidden="true" className="hidden min-h-52 grow max-lg:portrait:block" />
      <div className="hero-meta hero-fade flex justify-between gap-6 text-sm text-muted md:text-base">
        <p>
          {profile.role}
          <br />
          at {profile.company}
        </p>
        <p className="text-right">
          AWS and cloud-native
          <br />
          {profile.location}
        </p>
      </div>

      {/* Sized so "KENNETH BASJAN" spans the content width on one line from lg up. Below that
          it's two lines that scale with the screen's width (capped by its height when the screen
          is held sideways), so the words never run into each other.
          `isolate` lets the drawings sit behind the letters (negative z-index) but in front of the page. */}
      <h1
        ref={headingRef}
        id="hero-heading"
        className="relative isolate mt-6 text-[max(3.4rem,min(16vw,24vh))] font-bold uppercase leading-[0.88] tracking-[-0.035em] lg:flex lg:justify-between lg:text-[clamp(4rem,10.9vw,10.6rem)]"
      >
        <span className="mask-line">
          <span>Kenneth</span>
        </span>{' '}
        <span className="mask-line">
          <span className="text-accent">Basjan</span>
        </span>
        <HeroPeeks headingRef={headingRef} />
      </h1>
      <span aria-hidden="true" className="hero-rule mt-5 block h-0.5 w-full bg-white md:mt-7" />

      <div className="hero-fade mt-8 flex flex-col gap-8 md:mt-10 md:flex-row md:items-end md:justify-between">
        <p className="max-w-[34ch] text-xl font-light leading-snug md:text-2xl">{profile.summary}</p>
        <div className="flex flex-wrap gap-4">
          <Button href={profile.cvUrl} external variant="solid">
            Download CV
          </Button>
          <Button href="#contact">Get in touch</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
