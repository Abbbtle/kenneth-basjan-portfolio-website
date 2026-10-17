import { profile } from '../data/profile';
import { projects } from '../data/projects';
import Button from './Button';
import SectionHeading from './SectionHeading';

// The original site's project card: a purple-to-pink glow behind the copy, screenshot on the right.
const ProjectCard = ({ project }) => (
  <article
    aria-labelledby={`${project.id}-title`}
    className="group relative isolate overflow-hidden rounded-3xl border border-white/20 bg-gray-900 lg:grid lg:grid-cols-[5fr_6fr] lg:items-end"
  >
    <svg
      viewBox="0 0 1024 1024"
      aria-hidden="true"
      className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] lg:left-[30%]"
    >
      <circle cx={512} cy={512} r={512} fill={`url(#${project.id}-glow)`} fillOpacity="0.7" />
      <defs>
        <radialGradient id={`${project.id}-glow`}>
          <stop stopColor="#7775D6" />
          <stop offset={1} stopColor="#E935C1" />
        </radialGradient>
      </defs>
    </svg>

    <div className="p-8 md:p-14 lg:self-center">
      <p className="text-sm text-white/75">{project.subtitle}</p>
      <h3
        id={`${project.id}-title`}
        className="mt-3 text-4xl font-bold uppercase leading-none tracking-[-0.02em] md:text-6xl"
      >
        {project.title}
      </h3>
      <p className="mt-6 max-w-[44ch] text-lg leading-relaxed text-gray-100">{project.summary}</p>
      {project.stack.length > 0 && (
        <p className="mt-4 text-white/75">Built with {project.stack.join(', ')}</p>
      )}
      <div className="mt-8 flex flex-wrap gap-4">
        {project.liveUrl && (
          <Button href={project.liveUrl} external>
            Visit website
          </Button>
        )}
        {project.repoUrl && (
          <Button href={project.repoUrl} external>
            View the code
          </Button>
        )}
      </div>
    </div>

    <div className="pl-8 md:pl-14 lg:pl-0 lg:pt-14">
      <img
        src={project.image.src}
        alt={project.image.alt}
        width={project.image.width}
        height={project.image.height}
        loading="lazy"
        decoding="async"
        className="w-full origin-bottom-left rounded-tl-xl ring-1 ring-white/10 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] motion-reduce:transition-none"
      />
    </div>
  </article>
);

const Projects = () => (
  <section id="projects" aria-labelledby="projects-heading" className="page">
    <SectionHeading id="projects-heading" first="Selected" second="work" />
    <div className="mt-12 space-y-10 md:mt-16">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
    <p className="mt-10 text-lg text-muted">
      More of my work is on{' '}
      <a
        href={profile.socials.github}
        target="_blank"
        rel="noopener noreferrer"
        className="hover-line text-white"
      >
        GitHub
      </a>
      .
    </p>
  </section>
);

export default Projects;
