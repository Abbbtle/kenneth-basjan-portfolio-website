# Kenneth Basjan — Portfolio

Personal portfolio of Kenneth Basjan, Software Development Engineer (AWS & cloud-native).

**Live site:** https://kenneth-basjan.web.app

## Stack

- [React 18](https://react.dev) + [Vite](https://vite.dev)
- [Tailwind CSS 3](https://v3.tailwindcss.com)
- [EmailJS](https://www.emailjs.com) for the contact form
- [Firebase Hosting](https://firebase.google.com/docs/hosting), deployed with GitHub Actions

## Getting started

Requires Node.js 22 (or 20.19+).

```bash
npm ci            # install dependencies
npm run dev       # start the dev server at http://localhost:5173
npm run build     # production build into dist/
npm run preview   # serve the production build locally
npm run lint      # ESLint (fails on any warning)
npm run format    # format everything with Prettier
```

No environment variables are needed. The EmailJS IDs in `src/config/contact.js` are public identifiers by design.

## Editing content

Most content lives in plain data files, so updating the site rarely means touching components:

| What                    | Where                         |
| ----------------------- | ----------------------------- |
| Name, role, CV, socials | `src/data/profile.js`         |
| Experience & education  | `src/data/experience.js`      |
| Skills                  | `src/data/skills.js`          |
| Projects                | `src/data/projects.js`        |
| Recommendations         | `src/data/recommendations.js` |
| Navigation              | `src/data/navigation.js`      |
| SEO & link previews     | `index.html`, `public/`       |

Images live in `src/assets/images` as WebP. Keep new images small: resize to at most twice their displayed size before adding them.

## Deployment

- **Push to `main`:** GitHub Actions builds the site and deploys it to the live Firebase Hosting channel (`.github/workflows/firebase-hosting-merge.yml`).
- **Pull requests:** lint, format check and build run, then a preview channel is deployed and linked on the PR.

Hosting headers (caching and security) are configured in `firebase.json`.
