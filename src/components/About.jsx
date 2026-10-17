import portrait from '../assets/images/kenneth-portrait.webp';
import { profile } from '../data/profile';
import SectionHeading from './SectionHeading';

const FACTS = [
  { term: 'Currently', detail: `${profile.role}, ${profile.company}` },
  { term: 'Focus', detail: 'AWS, backend development and DevOps' },
  { term: 'Background', detail: 'Software development and enterprise storage' },
  { term: 'Education', detail: 'National Diploma in IT, Central University of Technology' },
];

// The original site's white About panel, with the portrait and a large statement.
const About = () => (
  <section id="about" aria-labelledby="about-heading" className="page">
    <div className="rounded-[2rem] bg-white px-6 py-12 text-black shadow-inner shadow-black md:px-12 md:py-16 lg:px-20 lg:py-20">
      <SectionHeading id="about-heading" first="About" second="me" tone="light" />

      <div className="mt-12 grid gap-10 md:mt-16 lg:grid-cols-12 lg:gap-16">
        <img
          src={portrait}
          alt="Kenneth Basjan"
          width={900}
          height={900}
          loading="lazy"
          decoding="async"
          className="aspect-square w-full max-w-md rounded-3xl object-cover lg:col-span-5 lg:max-w-none"
        />

        <div className="lg:col-span-7">
          <p className="text-2xl font-light leading-snug md:text-[2.1rem] md:leading-[1.25]">
            My background is in <span className="font-medium text-accent-strong">software development</span>.
            After time in enterprise storage, looking after backup and disaster recovery, I came back to
            software development, bringing that infrastructure experience with me.
          </p>
          <p className="mt-6 max-w-[58ch] text-black/70">
            I enjoy building scalable applications, automating processes and designing reliable cloud
            solutions. I’m most interested in AWS, backend development and DevOps, and in using new
            technologies to solve real-world problems.
          </p>

          <dl className="mt-10 grid gap-x-10 gap-y-6 border-t border-black/15 pt-8 sm:grid-cols-2">
            {FACTS.map(({ term, detail }) => (
              <div key={term}>
                <dt className="text-sm text-black/60">{term}</dt>
                <dd className="mt-1 font-medium">{detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  </section>
);

export default About;
