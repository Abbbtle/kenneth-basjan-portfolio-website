import { recommendations } from '../data/recommendations';
import SectionHeading from './SectionHeading';

const Recommendations = () => (
  <section id="recommendations" aria-labelledby="recommendations-heading" className="page">
    <SectionHeading id="recommendations-heading" first="What people" second="say" />
    <ul className="mt-12 grid gap-6 md:mt-16 lg:grid-cols-3">
      {recommendations.map(({ id, name, role, quote, linkedinUrl }) => (
        <li key={id}>
          <figure className="flex h-full flex-col rounded-3xl border border-white/20 p-8 md:p-10">
            <span aria-hidden="true" className="text-7xl font-bold leading-[0.6] text-accent">
              “
            </span>
            <blockquote className="mt-6 flex-1 text-lg font-light leading-relaxed text-white/90 md:text-xl">
              <p>{quote}</p>
            </blockquote>
            <figcaption className="mt-8 border-t border-white/15 pt-5">
              <p className="font-semibold">
                {linkedinUrl ? (
                  <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover-line">
                    {name}
                  </a>
                ) : (
                  name
                )}
              </p>
              <p className="text-sm text-muted">{role}</p>
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  </section>
);

export default Recommendations;
