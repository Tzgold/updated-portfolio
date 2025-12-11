# Minimal Dark Portfolio

A minimal, dark-themed personal portfolio built with React + TypeScript and Tailwind CSS. This repo contains a responsive single-page site showcasing bio, skills, projects, timeline, and contact links — ready to run locally or deploy.


## Features
- Dark / light theme toggle
- Animated reveal and staggered lists
- Project, creativity and timeline components
- Responsive layout suitable for desktop and mobile
- Easy image & asset handling (public or imported)

## Prerequisites
- Node.js (v16+ recommended)
- npm or yarn

## Quick start

1. Install dependencies
```bash
npm install
# or
yarn
```

2. Add environment variables (if required)
- If your app needs API keys, create `.env.local` and add keys, e.g.:
```env
GEMINI_API_KEY=your_api_key_here
```

3. Run development server
```bash
npm run dev
# or
yarn dev
```

Open http://localhost:3000 (or the port printed by your dev server).

## Build & Deploy

Build for production:
```bash
npm run build
# or
yarn build
```

Preview the production build:
```bash
npm run preview
# or
yarn preview
```

Deploy to static hosts (Vercel, Netlify, GitHub Pages) by pointing to the output folder or using the platform's recommended deployment flow.

## Changing images (profile / project logos)

Two common, reliable ways to add/replace images:

Option A — Use the public folder (recommended for static assets)
- Put images into `public/images/` (create the folder if missing).
- Reference them with absolute paths, e.g. `/images/profile3.jpg` or `/images/EXLP.png`.
- Example path used in code: `<img src="/images/profile3.jpg" />`
- After adding/replacing, restart the dev server and clear the browser cache if you still see the old image.

PowerShell example to copy an image into the project:
```powershell
Copy-Item -Path "C:\path\to\EXLP.png" -Destination "C:\Users\Admin\Downloads\minimal-dark-portfolio (4)\public\images\EXLP.png" -Force
```

Option B — Import inside src (bundler-managed)
- Place images inside `src/assets/` (or similar).
- Import them in components or data files:
```ts
import profileImg from './assets/profile3.png';
...
<img src={profileImg} alt="Profile" />
```
- If TypeScript errors on image imports, add a declaration file (e.g. `src/globals.d.ts`):
```ts
declare module '*.png';
declare module '*.jpg';
declare module '*.svg';
```

Troubleshooting tips
- Ensure exact file name (case-sensitive on some hosts).
- If image not showing, check browser devtools network tab for 404.
- Restart the dev server after adding files to `public` in some setups.
- If importing images, ensure the bundler is configured to handle image assets.

## Project structure (overview)
- src/
  - components/ — UI components (ProjectCard, TimelineCard, Icons, ...)
  - App.tsx — main app
  - data.ts — content (BIO, projects, social links, etc.)
  - assets/ — optional place for imported images
- public/
  - images/ — static images served at /images/...
- package.json, tailwind config, tsconfig, etc.

## Contributing
- Fixes and improvements welcome. Please open issues or PRs with focused changes.

## License
MIT

## Contact
Owner: Tequam Zework  
Email: tequamzgold@gmail.com  
GitHub: https://github.com/Tzgold
