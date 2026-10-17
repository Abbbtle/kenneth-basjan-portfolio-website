import { useState } from 'react';

const formatMonth = (yearMonth) => {
  const [year, month] = yearMonth.split('-').map(Number);
  return new Date(year, month - 1).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' });
};

export const DateRange = ({ start, end }) => {
  if (end === start) return <time dateTime={start}>{formatMonth(start)}</time>;
  return (
    <>
      <time dateTime={start}>{formatMonth(start)}</time>
      {' – '}
      {end ? <time dateTime={end}>{formatMonth(end)}</time> : 'Present'}
    </>
  );
};

const hostname = (url) => new URL(url).hostname.replace(/^www\./, '');

// One row of the Experience or Education list. The row is a button that expands the details.
// `nested` rows sit under a programme banner, so their titles are a step smaller than the banner's.
const ExperienceItem = ({ item, headingLevel = 3, defaultOpen = false, nested = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  const Heading = `h${headingLevel}`;
  const panelId = `${item.id}-details`;

  return (
    <li className="border-b border-white/15">
      <Heading>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((isOpen) => !isOpen)}
          className="group grid w-full grid-cols-[1fr_auto] items-center gap-x-6 gap-y-2 py-7 text-left md:grid-cols-[12rem_1fr_auto] md:py-9"
        >
          <span className="col-start-1 row-start-1 text-sm tabular-nums text-muted md:text-base">
            <DateRange start={item.start} end={item.end} />
          </span>
          <span className="col-start-1 row-start-2 md:col-start-2 md:row-start-1">
            <span
              className={`block font-semibold leading-tight transition-colors duration-300 group-hover:text-accent ${
                nested ? 'text-xl md:text-3xl' : 'text-2xl md:text-4xl'
              }`}
            >
              {item.title}
            </span>
            <span className="mt-1 block text-muted">
              {item.company}
              {item.location && `, ${item.location}`}
            </span>
          </span>
          <span
            aria-hidden="true"
            className="relative col-start-2 row-span-2 row-start-1 h-6 w-6 md:col-start-3 md:row-span-1"
          >
            <span className="absolute left-0 top-1/2 h-0.5 w-6 -translate-y-1/2 bg-current" />
            <span
              className={`absolute left-1/2 top-0 h-6 w-0.5 -translate-x-1/2 bg-current transition-transform duration-500 ${
                open ? 'scale-y-0' : ''
              }`}
            />
          </span>
        </button>
      </Heading>

      <div
        id={panelId}
        className="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
        style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
        {...(open ? {} : { inert: '' })}
      >
        <div className="overflow-hidden">
          <div className="pb-10 md:pl-[calc(12rem+1.5rem)]">
            {item.highlights.length > 0 && (
              <ul className="max-w-[64ch] space-y-2 text-white/85">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="relative pl-6">
                    <span aria-hidden="true" className="absolute left-0 top-[0.8em] h-px w-3 bg-accent" />
                    {highlight}
                  </li>
                ))}
              </ul>
            )}
            {item.skills && (
              <p className="mt-5 max-w-[64ch] text-muted">
                <span className="text-white">AWS services: </span>
                {item.skills.join(', ')}
              </p>
            )}
            {item.companyUrl && (
              <a
                href={item.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-line mt-6 inline-block font-medium text-accent"
              >
                Visit {hostname(item.companyUrl)}
              </a>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};

export default ExperienceItem;
