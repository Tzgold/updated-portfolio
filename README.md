# Minimal Dark Portfolio

A minimal, dark themed personal portfolio built with React + TypeScript and Tailwind CSS. This repo contains a responsive single-page site showcasing bio, skills, projects, timeline, and contact links — ready to run locally or deploy.


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
for soe 

Preview the production build:
```bash
npm run preview
# or
yarn preview
```
Deploy to static hosts (Vercel, Netlify, GitHub Pages) by pointing to the output folder or using the platform's recommended deployment flow.

## Project structure (overview)
- src/
  - components/ — UI components (ProjectCard, TimelineCard, Icons, ...)
  - App.tsx — main app
  - data.ts — content (BIO, projects, social links, etc.)
  - assets/ — optional place for imported images
- public/
  - images/ — static images served at /images/...
- package.json, tailwind config, tsconfig, etc.


## Contact
Owner: Tequam Zework  
Email: tequamzgold@gmail.com  
GitHub: https://github.com/Tzgold
