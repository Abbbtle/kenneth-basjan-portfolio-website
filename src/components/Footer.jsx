import logo from '../assets/images/logo.webp';
import { navLinks } from '../data/navigation';
import { profile } from '../data/profile';

const SOCIALS = [
  { label: 'LinkedIn', href: profile.socials.linkedin },
  { label: 'GitHub', href: profile.socials.github },
  { label: 'WhatsApp', href: profile.socials.whatsapp },
  profile.email && { label: 'Email', href: `mailto:${profile.email}` },
].filter(Boolean);

// The original footer layout: large logo, then Socials and Links columns.
const Footer = () => (
  <footer className="page mt-32 border-t border-white/15 pb-10 pt-16 md:mt-48">
    <div className="grid gap-12 md:grid-cols-12">
      <a href="#top" aria-label="Kenneth Basjan, back to top" className="w-fit md:col-span-6">
        <img
          src={logo}
          alt=""
          width={480}
          height={479}
          loading="lazy"
          className="h-32 w-32 md:h-44 md:w-44"
        />
      </a>

      <div className="md:col-span-3">
        <h2 className="text-sm text-muted">Socials</h2>
        <ul className="mt-4 space-y-2 text-lg">
          {SOCIALS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                {...(href.startsWith('mailto:') ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                className="hover-line"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <nav aria-label="Footer" className="md:col-span-3">
        <h2 className="text-sm text-muted">Links</h2>
        <ul className="mt-4 space-y-2 text-lg">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <a href={`#${id}`} className="hover-line">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>

    <div className="mt-16 flex flex-col gap-3 border-t border-white/15 pt-6 text-sm text-muted sm:flex-row sm:justify-between">
      <p>© {new Date().getFullYear()} Kenneth Basjan. All rights reserved.</p>
      <a href="#top" className="hover-line w-fit">
        Back to top
      </a>
    </div>
  </footer>
);

export default Footer;
