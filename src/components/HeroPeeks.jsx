import { useEffect, useRef, useState } from 'react';
import { CloudDrawing, CodeDrawing, ProductionDrawing, StorageDrawing } from './CareerIcons';
import './HeroPeeks.css';

const DESKTOP = '(min-width: 1024px)';
const REDUCED_MOTION = '(prefers-reduced-motion: reduce)';

// Career drawings in delivery-cycle order: write the code, store the build, deploy it to the
// cloud, and it goes live in production — then round again to code.
const DRAWINGS = [
  { id: 'code', Drawing: CodeDrawing },
  { id: 'storage', Drawing: StorageDrawing },
  { id: 'cloud', Drawing: CloudDrawing },
  { id: 'production', Drawing: ProductionDrawing },
];

// Desktop: the drawings stand in a row across the open space, with a curve back under the row.
const ROW_MIN_SIZE = 72;
const ROW_MAX_SIZE = 140;
const ROW_SIZE_SHARE = 0.5; // drawing size as a share of the open space's height
const ROW_GAP_SHARE = 0.55; // gap between drawings, relative to their size

// Smaller screens: the drawings sit round a ring at 12, 3, 6 and 9 o'clock, in cycle order.
const RING_MIN_SIZE = 36;
const RING_MAX_SIZE = 88;
const RING_RADIUS = 1.7; // ring radius, relative to the drawing size
const RING_MARGIN = 16; // space kept clear above and below the ring
const RING_ARROW_GAP = 0.12; // gap between an arc's end and a drawing, relative to the drawing size
const RING_ANGLES = [-90, 0, 90, 180]; // degrees clockwise from 3 o'clock, as SVG measures angles

const SINK_EM = 0.05; // how far below the cap line the drawings start, hidden behind the letters
const SIDE_ROOM = 0.25; // extra clip width each side, so the squash on landing isn't cut off
const HIDDEN_STRETCH = 0.25; // extra drop before the hop: covers the 0.2× launch stretch, plus margin

// Timeline (seconds). Each drawing hops out in turn, lands, then does its own move.
const FIRST_HOP = 1.3;
const HOP_STAGGER = 0.22;
const LANDS_AFTER = 0.55;
// The connecting arrows draw once the last drawing has landed and finished its own move,
// then the highlight starts going round the cycle.
const FLOW_START = FIRST_HOP + (DRAWINGS.length - 1) * HOP_STAGGER + LANDS_AFTER + 0.9;
const CYCLE_START = FLOW_START + 1;
const REPLAY_COOLDOWN_MS = 1500;
const EASE = 'cubic-bezier(0.65, 0, 0.35, 1)';

// One lap of the cycle, as shares of its length. Each drawing lights up purple in turn; the arrow
// after it carries the highlight on to the next drawing, and the last arrow brings it back to
// code, which lights up again as the lap repeats.
const ROW_CYCLE = {
  ms: 7000,
  // code, storage, cloud, production
  stages: [
    [0, 0.12],
    [0.2, 0.32],
    [0.4, 0.52],
    [0.6, 0.72],
  ],
  // code → storage, storage → cloud, cloud → production, and the long curve back to code
  arrows: [
    [0.1, 0.21],
    [0.3, 0.41],
    [0.5, 0.61],
    [0.7, 0.98],
  ],
};
// The ring's four arcs are the same length, so its lap is four equal steps, each as long as one
// step along the row (1.4 s).
const RING_CYCLE = {
  ms: 5600,
  stages: [
    [0, 0.15],
    [0.25, 0.4],
    [0.5, 0.65],
    [0.75, 0.9],
  ],
  arrows: [
    [0.125, 0.26],
    [0.375, 0.51],
    [0.625, 0.76],
    [0.875, 0.985],
  ],
};
const LIT = { '--outline': '#906EF0', filter: 'drop-shadow(0 0 10px rgba(144, 110, 240, 0.55))' };
const UNLIT = { '--outline': '#FFFFFF', filter: 'drop-shadow(0 0 0 rgba(144, 110, 240, 0))' };
// Where production's live light sits in its 64×64 drawing.
const LIVE_LIGHT = { x: 51 / 64, y: 16 / 64 };

// A drawing lights up for its window. Code is also lit at the very end of the lap, as the
// last arrow arrives, so the loop joins up seamlessly.
const stageKeyframes = ([start, end], index) =>
  index === 0
    ? [
        { ...LIT, offset: 0 },
        { ...LIT, offset: end },
        { ...UNLIT, offset: end + 0.05 },
        { ...UNLIT, offset: 0.96 },
        { ...LIT, offset: 1 },
      ]
    : [
        { ...UNLIT, offset: 0 },
        { ...UNLIT, offset: start },
        { ...LIT, offset: start + 0.03 },
        { ...LIT, offset: end },
        { ...UNLIT, offset: end + 0.05 },
        { ...UNLIT, offset: 1 },
      ];

// A bright streak runs along the arrow in its direction of travel, ending on the arrowhead.
const arrowKeyframes = ([start, end]) => [
  { strokeDashoffset: '0.3', opacity: 0, offset: 0 },
  { strokeDashoffset: '0.3', opacity: 0, offset: start },
  { strokeDashoffset: '0.3', opacity: 1, offset: start + 0.001, easing: EASE },
  { strokeDashoffset: '-1', opacity: 1, offset: end },
  { strokeDashoffset: '-1', opacity: 0, offset: end + 0.001 },
  { strokeDashoffset: '-1', opacity: 0, offset: 1 },
];

// Production's green ring pulses out as the highlight arrives: a new release goes live.
const releaseKeyframes = (arrives) => [
  { opacity: 0, transform: 'scale(0.4)', offset: 0 },
  { opacity: 0, transform: 'scale(0.4)', offset: arrives },
  { opacity: 0.95, transform: 'scale(1)', offset: arrives + 0.02, easing: 'ease-out' },
  { opacity: 0, transform: 'scale(3)', offset: arrives + 0.16 },
  { opacity: 0, transform: 'scale(3)', offset: 1 },
];

// Works out the open space between the navbar and the hero's top line of text, and where the
// name's cap line is. Everything is relative to the heading. offsetTop is used rather than
// getBoundingClientRect because it ignores the intro's transforms, so measuring mid-animation
// still gives the final layout. (The intro only moves the name up and down, so measuring where
// its first line ends is safe.)
const measure = (heading) => {
  const section = heading.closest('section');
  const meta = section.querySelector('.hero-meta');
  const headerHeight = document.querySelector('header')?.offsetHeight ?? 0;
  const style = getComputedStyle(heading);
  const fontSize = parseFloat(style.fontSize);
  const lineHeight = parseFloat(style.lineHeight);

  const context = document.createElement('canvas').getContext('2d');
  context.font = `${style.fontWeight} ${fontSize}px ${style.fontFamily}`;
  const metrics = context.measureText('E');
  const { fontBoundingBoxAscent: ascent, fontBoundingBoxDescent: descent } = metrics;
  const capTopInLine = (lineHeight - (ascent + descent)) / 2 + ascent - metrics.actualBoundingBoxAscent;
  const capTop = heading.querySelector('.mask-line').offsetTop + capTopInLine;
  const firstLine = document.createRange();
  firstLine.selectNodeContents(heading.querySelector('.mask-line > span'));

  return {
    width: heading.offsetWidth,
    firstLineRight: firstLine.getBoundingClientRect().right - heading.getBoundingClientRect().left,
    pageTop: section.offsetTop - heading.offsetTop,
    spaceTop: section.offsetTop + headerHeight - heading.offsetTop,
    spaceBottom: meta.offsetTop - heading.offsetTop,
    clipBottom: capTop + SINK_EM * fontSize,
  };
};

// Desktop: a row centred in the open space. Arrows run from each drawing to the next, and a curve
// under the row leads from the last back to the first.
const rowLayout = ({ width, spaceTop, spaceBottom, clipBottom }) => {
  const space = spaceBottom - spaceTop;
  const size = Math.min(ROW_MAX_SIZE, Math.max(ROW_MIN_SIZE, space * ROW_SIZE_SHARE));
  if (space < size + 24) return null;

  const gap = size * ROW_GAP_SHARE;
  const rowWidth = DRAWINGS.length * size + (DRAWINGS.length - 1) * gap;
  const rowLeft = width / 2 - rowWidth / 2;
  const restTop = spaceTop + space / 2 - size / 2;
  // Room under the row for the return curve, without reaching the line of text below.
  const returnDepth = Math.max(0, Math.min(size * 0.45, spaceBottom - (restTop + size) - 20));

  // The arrows, relative to the row's top left.
  const centres = DRAWINGS.map((_, index) => index * (size + gap) + size / 2);
  const first = centres[0];
  const last = centres[centres.length - 1];
  const middle = size / 2;
  const under = size + 6; // just below the drawings
  const dip = returnDepth * (4 / 3); // a cubic with both handles this deep bottoms out at 3/4 of it

  const forward = centres.slice(0, -1).map((centre, index) => {
    const from = centre + size / 2 + gap * 0.18;
    const to = centres[index + 1] - size / 2 - gap * 0.18;
    return `M${from} ${middle}H${to}M${to - 5} ${middle - 4}L${to} ${middle}L${to - 5} ${middle + 4}`;
  });
  const returnLine = `M${last} ${under}C${last} ${under + dip} ${first} ${under + dip} ${first} ${under}M${first - 4} ${under + 5}L${first} ${under}L${first + 4} ${under + 5}`;

  return {
    size,
    // Each drawing's column runs from the navbar down to just below the name's cap line.
    clipTop: spaceTop,
    clipBottom,
    positions: centres.map((centre) => ({ left: rowLeft + centre - size / 2, top: restTop })),
    flow: {
      box: { left: rowLeft, top: restTop, width: rowWidth, height: size },
      svgHeight: under + returnDepth + 8,
      arrows: [...forward, returnLine],
    },
    cycle: ROW_CYCLE,
  };
};

// The ring's arrows, relative to the ring's bounding square: an arc from each drawing to the next,
// clockwise, stopping just clear of both, with an arrowhead along the direction of travel.
const ringArrows = (size, radius) => {
  const round = (value) => Math.round(value * 100) / 100;
  const trim = Math.asin(Math.min(1, (size / 2 + size * RING_ARROW_GAP) / radius));
  const point = (angle) => [
    round(radius + radius * Math.cos(angle)),
    round(radius + radius * Math.sin(angle)),
  ];

  return RING_ANGLES.map((degrees) => {
    const start = (degrees * Math.PI) / 180 + trim;
    const end = ((degrees + 90) * Math.PI) / 180 - trim;
    const [x0, y0] = point(start);
    const [x1, y1] = point(end);
    // The arrowhead's wings: 5 back along the arc's direction, 4 out to each side.
    const wing = (side) =>
      `${round(x1 + 5 * Math.sin(end) + 4 * side * Math.cos(end))} ${round(y1 - 5 * Math.cos(end) + 4 * side * Math.sin(end))}`;
    return `M${x0} ${y0}A${round(radius)} ${round(radius)} 0 0 1 ${x1} ${y1}M${wing(1)}L${x1} ${y1}L${wing(-1)}`;
  });
};

// Smaller screens: a ring centred in the open space, clockwise from code at 12 o'clock, so the
// arc from production at 9 o'clock leads back round to code. The name is left-aligned on two
// lines there, so the ring is also kept narrow enough to stay over its first line: every drawing
// rises from behind the letters.
const ringLayout = ({ width, firstLineRight, pageTop, spaceTop, spaceBottom, clipBottom }) => {
  const centreX = width / 2;
  const size = Math.min(
    RING_MAX_SIZE,
    (spaceBottom - spaceTop - RING_MARGIN * 2) / (RING_RADIUS * 2 + 1),
    (firstLineRight - centreX) / (RING_RADIUS + 0.5),
  );
  if (size < RING_MIN_SIZE) return null;

  const radius = size * RING_RADIUS;
  const centreY = (spaceTop + spaceBottom) / 2;
  const box = { left: centreX - radius, top: centreY - radius, width: radius * 2, height: radius * 2 };

  return {
    size,
    // The columns reach up behind the navbar (transparent over the hero), so the top drawing's
    // bounce isn't cut off.
    clipTop: pageTop,
    clipBottom,
    positions: RING_ANGLES.map((degrees) => {
      const angle = (degrees * Math.PI) / 180;
      return {
        left: centreX + radius * Math.cos(angle) - size / 2,
        top: centreY + radius * Math.sin(angle) - size / 2,
      };
    }),
    flow: { box, svgHeight: box.height, arrows: ringArrows(size, radius) },
    cycle: RING_CYCLE,
  };
};

// The delivery loop's arrows. Each has a second, bright copy on top that carries the highlight.
// Production's release ring sits on its live light.
const DataFlow = ({ size, positions, flow: { box, svgHeight, arrows } }) => {
  const production = positions[positions.length - 1];
  const releaseSize = size * 0.16;

  return (
    <span className="flow" style={{ ...box, '--flow-start': `${FLOW_START}s` }}>
      <svg width={box.width} height={svgHeight} viewBox={`0 0 ${box.width} ${svgHeight}`}>
        {arrows.map((d, index) => (
          <path key={d} className="flow-line" d={d} pathLength="1" style={{ '--flow-index': index }} />
        ))}
        {arrows.map((d) => (
          <path key={`pulse-${d}`} className="flow-pulse" d={d} pathLength="1" />
        ))}
      </svg>
      <span
        className="flow-release"
        style={{
          width: releaseSize,
          height: releaseSize,
          left: production.left - box.left + size * LIVE_LIGHT.x - releaseSize / 2,
          top: production.top - box.top + size * LIVE_LIGHT.y - releaseSize / 2,
        }}
      />
    </span>
  );
};

// Line drawings of the delivery cycle hop out from behind the big name and each does its own move
// once it lands: in a row on desktop, round a ring on smaller screens. Then a highlight travels
// round the loop — each drawing lights up purple in turn, carried along by its arrow:
// code → storage → cloud → production → code.
const HeroPeeks = ({ headingRef }) => {
  const [layout, setLayout] = useState(null);
  const [replays, setReplays] = useState(() => DRAWINGS.map(() => 0));
  const lastReplay = useRef(DRAWINGS.map(() => -Infinity));
  const rootRef = useRef(null);

  useEffect(() => {
    const heading = headingRef.current;
    if (!heading) return undefined;

    const desktop = window.matchMedia(DESKTOP);
    let cancelled = false;
    const update = () => {
      if (cancelled) return;
      const space = measure(heading);
      setLayout(desktop.matches ? rowLayout(space) : ringLayout(space));
    };
    const observer = new ResizeObserver(update);

    document.fonts.ready.then(() => {
      if (cancelled) return;
      update();
      observer.observe(heading.closest('section'));
    });
    desktop.addEventListener('change', update);
    return () => {
      cancelled = true;
      observer.disconnect();
      desktop.removeEventListener('change', update);
    };
  }, [headingRef]);

  // The highlight going round the cycle. Every part shares one timing, so they stay in step.
  // It runs on the drawings' wrappers (not the drawings), so replays don't interrupt it.
  useEffect(() => {
    const root = rootRef.current;
    if (!layout || !root || window.matchMedia(REDUCED_MOTION).matches) return undefined;

    const { ms, stages: stageWindows, arrows: arrowWindows } = layout.cycle;
    const timing = { duration: ms, delay: CYCLE_START * 1000, iterations: Infinity };
    const stages = [...root.querySelectorAll('.peek-rise')];
    const arrows = [...root.querySelectorAll('.flow-pulse')];
    const release = root.querySelector('.flow-release');
    const animations = [
      ...stages.map((stage, index) => stage.animate(stageKeyframes(stageWindows[index], index), timing)),
      ...arrows.map((arrow, index) => arrow.animate(arrowKeyframes(arrowWindows[index]), timing)),
      release.animate(releaseKeyframes(stageWindows[DRAWINGS.length - 1][0]), timing),
    ];
    return () => animations.forEach((animation) => animation.cancel());
  }, [layout]);

  // Hovering a drawing, or tapping it on a touchscreen, replays its own move (remounting it
  // restarts the CSS animations).
  const replay = (index, time) => {
    if (time - lastReplay.current[index] < REPLAY_COOLDOWN_MS) return;
    lastReplay.current[index] = time;
    setReplays((counts) => counts.map((count, i) => (i === index ? count + 1 : count)));
  };

  if (!layout) return null;

  const { size, clipTop, clipBottom, positions } = layout;
  const sideRoom = size * SIDE_ROOM;
  return (
    <span ref={rootRef} aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      {DRAWINGS.map(({ id, Drawing }, index) => {
        const { left, top } = positions[index];
        const hop = FIRST_HOP + index * HOP_STAGGER;
        return (
          <span
            key={id}
            className="peek-clip absolute overflow-hidden"
            style={{
              left: left - sideRoom,
              top: clipTop,
              width: size + sideRoom * 2,
              height: clipBottom - clipTop,
              // Distance from the resting place down to the cap line, where the hop starts.
              '--peek-distance': `${clipBottom - top}px`,
              // Where it waits before hopping: low enough that even stretched for launch
              // (scaled 1.2× tall from its base) none of it shows above the letters.
              '--peek-start': `${clipBottom - top + size * HIDDEN_STRETCH}px`,
              '--peek-delay': `${hop}s`,
              '--land': `${hop + LANDS_AFTER}s`,
            }}
          >
            <span
              className="peek-rise pointer-events-auto absolute block"
              style={{ top: top - clipTop, left: sideRoom, width: size, height: size }}
              onPointerEnter={(event) => replay(index, event.timeStamp)}
            >
              <Drawing
                key={replays[index]}
                className={`peek-drawing block w-full ${replays[index] > 0 ? 'is-replay' : ''}`}
              />
            </span>
          </span>
        );
      })}
      <DataFlow size={size} positions={positions} flow={layout.flow} />
    </span>
  );
};

export default HeroPeeks;
