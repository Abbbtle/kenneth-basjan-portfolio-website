import { useRef } from 'react';
import useInViewOnce from '../hooks/useInViewOnce';

// The original site's two-line uppercase heading (second line in purple) over a full-width rule.
// Each line slides up from a mask when the heading scrolls into view.
const SectionHeading = ({ id, first, second, tone = 'dark' }) => {
  const ref = useRef(null);
  const inView = useInViewOnce(ref);
  const onLight = tone === 'light';

  return (
    <div ref={ref} className={`reveal-heading ${inView ? 'is-visible' : ''}`}>
      <h2
        id={id}
        className="text-[clamp(2.75rem,8.5vw,7.5rem)] font-bold uppercase leading-[0.92] tracking-[-0.02em]"
      >
        <span className="mask-line">
          <span>{first}</span>
        </span>{' '}
        <span className="mask-line">
          <span className={onLight ? 'text-accent-strong' : 'text-accent'}>{second}</span>
        </span>
      </h2>
      <span
        aria-hidden="true"
        className={`heading-rule mt-6 block h-0.5 w-full md:mt-8 ${onLight ? 'bg-black' : 'bg-white'}`}
      />
    </div>
  );
};

export default SectionHeading;
