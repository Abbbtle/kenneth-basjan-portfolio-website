// The original site's button: a 3px purple outline, uppercase label, fills on hover.
const VARIANTS = {
  outline: 'border-accent bg-transparent hover:border-accent-fill hover:bg-accent-fill',
  solid: 'border-accent-fill bg-accent-fill hover:border-accent hover:bg-transparent',
};

const Button = ({
  variant = 'outline',
  href,
  external = false,
  type = 'button',
  className = '',
  children,
  ...rest
}) => {
  const classes = [
    'inline-flex min-h-12 items-center justify-center rounded-[10px] border-[3px] px-6',
    'text-sm font-medium uppercase tracking-[0.08em] text-white transition-colors duration-300 md:text-base',
    'disabled:cursor-not-allowed disabled:opacity-60',
    VARIANTS[variant],
    className,
  ].join(' ');

  if (href) {
    const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
    return (
      <a href={href} className={classes} {...externalProps} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
