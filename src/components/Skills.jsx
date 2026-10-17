import { skillGroups } from '../data/skills';
import SectionHeading from './SectionHeading';

const Skills = () => (
  <section id="skills" aria-labelledby="skills-heading" className="page">
    <SectionHeading id="skills-heading" first="Skills" second="& tools" />
    <div className="mt-12 grid gap-x-12 gap-y-14 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
      {skillGroups.map(({ id, title, skills }) => (
        <div key={id} className="border-t border-white/15 pt-6">
          <h3 className="font-medium text-accent">{title}</h3>
          <ul className="mt-4 space-y-1.5 text-xl font-light md:text-2xl">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
