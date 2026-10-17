// Line drawings for the hero, one per stage of the delivery cycle. Parts that move on their own
// have class names that HeroPeeks.css animates. Strokes that draw in use pathLength="1" so the CSS
// doesn't need to know their real length.
//
// The white lines carry the class "art-line": their colour comes from the --outline variable, so
// the whole drawing can light up purple when its stage is active. Purple details stay purple,
// and green is reserved for production's "live" light.
const WHITE = '#FFFFFF';
const PURPLE = '#906EF0';
const LIVE_GREEN = '#5BE38B';

const Drawing = ({ className, children }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {children}
  </svg>
);

// Code: the window's dots pop in, then </> types out behind a moving cursor. The window spans the
// same height as the other drawings (y 9–56).
export const CodeDrawing = ({ className }) => (
  <Drawing className={className}>
    <g className="art-line" stroke={WHITE}>
      <rect x="6" y="9" width="52" height="47" rx="5" />
      <path d="M6 18h52" />
      <path className="cd-char cd-slash" d="m35 28-6 18" />
    </g>
    <g stroke={PURPLE}>
      <path className="cd-dot" d="M12 13.5h.01" strokeWidth="3.5" />
      <path className="cd-dot" d="M17 13.5h.01" strokeWidth="3.5" />
      <path className="cd-dot" d="M22 13.5h.01" strokeWidth="3.5" />
      <path className="cd-char cd-lt" d="m25 30-7 7 7 7" />
      <path className="cd-char cd-gt" d="m39 30 7 7-7 7" />
    </g>
    <path className="cd-caret art-line" d="M15 31v12" stroke={WHITE} strokeWidth="2" />
  </Drawing>
);

// Storage: the build is written to storage layer by layer, then the drive lights flicker.
export const StorageDrawing = ({ className }) => (
  <Drawing className={className}>
    <g className="art-line" stroke={WHITE}>
      <ellipse cx="32" cy="14" rx="20" ry="7" />
      <path d="M12 14v36c0 3.9 9 7 20 7s20-3.1 20-7V14" />
      <path className="st-band" d="M12 26c0 3.9 9 7 20 7s20-3.1 20-7" pathLength="1" />
      <path className="st-band" d="M12 38c0 3.9 9 7 20 7s20-3.1 20-7" pathLength="1" />
    </g>
    <g stroke={PURPLE} strokeWidth="4">
      <path className="st-led" d="M44 26.5h.01" />
      <path className="st-led" d="M44 38.5h.01" />
      <path className="st-led" d="M44 50.5h.01" />
    </g>
  </Drawing>
);

// Cloud: wobbles like jelly as the deploy arrow shoots up into it. Four puffs on a flat base,
// spanning the same height as the other drawings (y 9–56) so the row reads evenly.
export const CloudDrawing = ({ className }) => (
  <Drawing className={className}>
    <path
      className="cl-shape art-line"
      d="M17 56A11 11 0 0 1 15.5 34.1A13 13 0 0 1 28 15A15 15 0 1 1 51.9 33.1A12 12 0 0 1 47 56Z"
      stroke={WHITE}
    />
    <path className="cl-arrow" d="M32 46V30M26 36l6-6 6 6" stroke={PURPLE} />
  </Drawing>
);

// Production: the screen boots, the deployed app renders piece by piece, then the live light
// comes on. Each time the cycle reaches production, HeroPeeks pulses the live light again.
export const ProductionDrawing = ({ className }) => (
  <Drawing className={className}>
    <g className="art-line" stroke={WHITE}>
      <rect className="pd-screen" x="6" y="9" width="52" height="38" rx="4" />
      <path d="M32 47v8M23 56h18" />
    </g>
    <g className="pd-app">
      <path className="pd-part art-line" d="M12 16h10" stroke={WHITE} strokeWidth="2" />
      <rect className="pd-part" x="12" y="22" width="20" height="13" rx="2" stroke={PURPLE} strokeWidth="2" />
      <path className="pd-part art-line" d="M37 24h14M37 29h10" stroke={WHITE} strokeWidth="2" />
      <path className="pd-part" d="M37 34h7" stroke={PURPLE} strokeWidth="3" />
      <path className="pd-part art-line" d="M12 41h40" stroke={WHITE} strokeWidth="2" strokeOpacity="0.5" />
    </g>
    <circle className="pd-live" cx="51" cy="16" r="2.4" fill={LIVE_GREEN} stroke="none" />
  </Drawing>
);
