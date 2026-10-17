// The original site's giant scrolling text, alternating white and purple words.
// Two identical copies scroll by half their combined width, so the loop is seamless.
// It never pauses, even on hover; it only stands still under reduced motion.
const Marquee = ({ words, duration = 40, href, label }) => {
  const track = (
    <span className="marquee-track" style={{ '--marquee-duration': `${duration}s` }}>
      {[0, 1].map((copy) => (
        <span key={copy} className="flex shrink-0">
          {words.map((word, index) => (
            <span key={`${copy}-${index}`} className={`px-[0.3em] ${index % 2 ? 'text-accent' : ''}`}>
              {word}
            </span>
          ))}
        </span>
      ))}
    </span>
  );

  const classes =
    'marquee block select-none overflow-hidden whitespace-nowrap py-8 text-[clamp(3.5rem,11vw,10rem)] font-bold uppercase leading-none tracking-[-0.02em] md:py-12';

  if (href) {
    return (
      <a href={href} className={`${classes} transition-colors hover:bg-white/[0.03]`}>
        <span className="sr-only">{label}</span>
        <span aria-hidden="true">{track}</span>
      </a>
    );
  }

  return (
    <div aria-hidden="true" className={classes}>
      {track}
    </div>
  );
};

export default Marquee;
