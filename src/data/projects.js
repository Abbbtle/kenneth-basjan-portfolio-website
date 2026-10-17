import billiardManScreenshot from '../assets/images/projects/the-billiard-man.webp';

// TODO: add 1–2 cloud/backend projects (ideally on AWS) with a repoUrl, the stack used,
// and a summary covering the problem, your role and the outcome.
export const projects = [
  {
    id: 'the-billiard-man',
    title: 'The Billiard Man',
    subtitle: 'Website for a pool table service company in New York',
    summary:
      'I designed and developed the website for The Billiard Man, presenting their pool table installation, moving and repair services to customers near New York, NY.',
    // TODO: list the technologies used, e.g. ['WordPress', 'Elementor'].
    stack: [],
    liveUrl: 'https://thebilliardman.com',
    repoUrl: null,
    image: {
      src: billiardManScreenshot,
      alt: 'The Billiard Man home page: “Looking for reliable pool table services?” beside a photo of pool tables',
      width: 1416,
      height: 900,
    },
  },
];
