// Dates are 'YYYY-MM'; end: null means the role is current.
// Order here doesn't matter: current roles are shown first, then the rest newest first.
// Roles with a `group` are shown together under that programme's banner (see experienceGroups).
export const experience = [
  {
    id: 'nttdata-sde',
    title: 'Software Development Engineer',
    company: 'NTT DATA',
    companyUrl: 'https://www.nttdata.com',
    // TODO: add location (e.g. 'Johannesburg, South Africa' or 'Remote').
    location: null,
    start: '2026-08',
    end: null,
    highlights: [
      'Develop cloud-native applications on AWS.',
      'Build event-driven and serverless solutions.',
      'Implement cloud security best practices.',
      'Support cloud migrations and modernisation initiatives.',
      'Monitor application performance and availability, and troubleshoot production issues.',
      'Participate in code reviews and technical design with cross-functional teams.',
    ],
  },
  {
    id: 'absa-platform-storage',
    title: 'Platform Storage Engineer',
    company: 'ABSA Group',
    companyUrl: 'https://www.absa.co.za/',
    location: 'Johannesburg, South Africa',
    start: '2024-06',
    end: '2026-07',
    highlights: [
      'Designed and implemented storage systems across on-premises and cloud environments.',
      'Managed data backup and recovery processes, and planned for disaster recovery.',
      'Tuned system performance and troubleshot storage-related issues.',
      'Executed system upgrades and developed storage management procedures and standards.',
      'Ensured data integrity and security through routine system checks.',
      'Researched and implemented new storage technologies with other IT teams.',
    ],
  },
  {
    id: 'absa-aws-intern',
    group: 'absa-internship',
    title: 'AWS Developer Intern',
    company: 'ABSA Group',
    companyUrl: 'https://www.absa.co.za/',
    location: 'Cape Town, South Africa',
    start: '2024-01',
    end: '2024-05',
    highlights: [
      'Built solutions on AWS with Node.js 20 and JavaScript, across compute, messaging, data and CI/CD services.',
      'Built Amazon Connect contact flows.',
      'Worked in an agile team with daily stand-ups and two-week sprints.',
    ],
    skills: [
      'AWS Lambda',
      'Amazon API Gateway',
      'Amazon SNS',
      'Amazon SQS',
      'Amazon DynamoDB',
      'Amazon S3',
      'Amazon Redshift',
      'Amazon Connect',
      'Amazon CloudWatch',
      'AWS IAM',
      'AWS CloudFormation',
      'AWS CodePipeline',
    ],
  },
  {
    id: 'empire-partner-foundation',
    group: 'absa-internship',
    title: 'Fullstack Web Developer Intern',
    company: 'Empire Partner Foundation',
    companyUrl: 'https://empirepartnerfoundation.org',
    location: 'Remote',
    start: '2023-10',
    end: '2024-01',
    highlights: [
      'Built a fullstack web application in a team of three using Python, Django, JavaScript, jQuery, AJAX and Bootstrap.',
      'Wrote a user stories document covering each component’s functionality, appearance and user experience.',
      'Produced a pitch deck and ERD to streamline development across two sprints over four weeks.',
      'Ran daily online stand-ups and planned work with Microsoft Planner.',
    ],
  },
  {
    id: 'younglings',
    group: 'absa-internship',
    title: 'Junior Software Developer Intern',
    company: 'Younglings Africa',
    // No link: their site's HTTPS certificate expired in December 2021, so visitors get a security warning.
    location: 'Cape Town, South Africa',
    start: '2023-07',
    end: '2024-01',
    highlights: [
      'Developed and maintained web applications using JavaScript, Tailwind CSS and the MERN stack.',
      'Collaborated with cross-functional teams, including designers, product managers and other developers.',
      'Took part in hackathons, and joined the staff team that facilitated ABSA hackathons.',
      'Participated in code reviews and gave constructive feedback to other developers.',
      'Implemented responsive designs and ensured cross-browser compatibility.',
      'Supported the design and development of software under the guidance of senior developers.',
    ],
  },
  {
    id: 'capaciti',
    group: 'absa-internship',
    title: 'Junior Software Developer Intern',
    company: 'UVU Africa – CAPACITI',
    companyUrl: 'https://uvuafrica.com/capaciti/',
    location: 'Cape Town, South Africa',
    start: '2023-01',
    end: '2024-05',
    highlights: [
      'Developed and maintained web applications using HTML, CSS, JavaScript, Bootstrap, Python and the MERN stack.',
      'Implemented responsive designs and ensured cross-browser compatibility.',
      'Worked closely with the development team to deliver tasks on time and within scope.',
      'Documented my work and processes so other team members could understand and build on my code.',
    ],
  },
  {
    id: 'weberu',
    title: 'Founder',
    company: 'Weberu',
    // TODO: add companyUrl once the Weberu website is live.
    location: 'Remote',
    start: '2021-11',
    end: null,
    highlights: [
      'Develop and maintain client websites with WordPress and Elementor.',
      'Manage client relationships, proposals and new business.',
      'Create social media content and copy, and use performance data to guide decisions.',
    ],
  },
];

// Programmes that group several roles under one banner in the Experience list.
export const experienceGroups = [
  {
    id: 'absa-internship',
    title: 'ABSA internship programme',
    start: '2023-01',
    end: '2024-05',
    summary:
      'A paid internship with ABSA (Cohort 1). UVU Africa’s CAPACITI trained our cohort, with placements at Younglings Africa, Empire Partner Foundation and ABSA.',
  },
];

// Rendered in the order listed (most relevant first).
export const education = [
  {
    id: 'cut',
    title: 'National Diploma in Information Technology: Software Development',
    company: 'Central University of Technology',
    companyUrl: 'https://www.cut.ac.za/',
    location: 'Bloemfontein, South Africa',
    start: '2016-01',
    end: '2019-11',
    highlights: [
      'Programming in Java, C# and JavaScript.',
      'Algorithms and data structures.',
      'Object-oriented programming, software design principles and patterns.',
      'Mobile app development with Android Studio.',
      'Software project management: planning, estimation and risk management.',
    ],
  },
  {
    id: 'orms',
    title: 'Creative Business 101 for Videographers',
    company: 'ORMS Cape Town School of Photography',
    companyUrl: 'https://www.ormsdirect.co.za/pages/ctsp',
    location: 'Remote',
    start: '2021-08',
    end: '2021-08',
    highlights: [
      'Video production process, from pre-production to post-production.',
      'Business planning, budgeting, branding and marketing for video projects.',
    ],
  },
];
