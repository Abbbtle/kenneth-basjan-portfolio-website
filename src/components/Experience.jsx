import { education, experience, experienceGroups } from '../data/experience';
import ExperienceItem, { DateRange } from './ExperienceItem';
import SectionHeading from './SectionHeading';

// Current roles first (an open end counts as the latest), then the rest by when they ended,
// newest first; ties go to the more recent start.
const byRecency = (a, b) =>
  (b.end ?? '9999-12').localeCompare(a.end ?? '9999-12') || b.start.localeCompare(a.start);
const newestStartFirst = (a, b) => b.start.localeCompare(a.start);

// The list's top level: roles on their own, plus one entry per programme with its roles inside.
const entries = [
  ...experience.filter((item) => !item.group).map((item) => ({ ...item, kind: 'role' })),
  ...experienceGroups.map((group) => ({
    ...group,
    kind: 'programme',
    roles: experience.filter((item) => item.group === group.id).sort(newestStartFirst),
  })),
].sort(byRecency);

// A banner for a programme (like a sponsored internship), with the roles that were part of it
// listed underneath and tied together by a purple line.
const Programme = ({ programme }) => (
  <li className="border-b border-white/15 pt-8 md:pt-10">
    <div className="-mx-4 grid gap-x-6 gap-y-2 rounded-2xl bg-accent/[0.08] px-4 py-6 md:-mx-6 md:grid-cols-[12rem_1fr] md:px-6 md:py-8">
      <p className="text-sm tabular-nums text-muted md:pt-2 md:text-base">
        <DateRange start={programme.start} end={programme.end} />
      </p>
      <div>
        <h3 className="text-2xl font-semibold leading-tight md:text-4xl">{programme.title}</h3>
        <p className="mt-3 max-w-[60ch] text-white/80">{programme.summary}</p>
      </div>
    </div>
    <ol
      aria-label={`Roles in the ${programme.title}`}
      className="ml-1 mt-2 border-l-2 border-accent/50 pl-4 md:ml-6 md:pl-8 [&>li:last-child]:border-b-0"
    >
      {programme.roles.map((role) => (
        <ExperienceItem key={role.id} item={role} headingLevel={4} nested />
      ))}
    </ol>
  </li>
);

const Experience = () => (
  <section id="experience" aria-labelledby="experience-heading" className="page">
    <SectionHeading id="experience-heading" first="My" second="experience" />
    <ol className="mt-4">
      {entries.map((entry, index) =>
        entry.kind === 'programme' ? (
          <Programme key={entry.id} programme={entry} />
        ) : (
          <ExperienceItem key={entry.id} item={entry} defaultOpen={index === 0} />
        ),
      )}
    </ol>

    <h3 id="education" className="mt-24 text-3xl font-bold uppercase tracking-[-0.01em] md:mt-32 md:text-5xl">
      Education
    </h3>
    <ol className="mt-6 border-t border-white/15">
      {education.map((item) => (
        <ExperienceItem key={item.id} item={item} headingLevel={4} />
      ))}
    </ol>
  </section>
);

export default Experience;
