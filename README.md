# André Alvarado — Portfolio

Personal portfolio showcasing academic projects, software development, data analysis, Machine Learning, interests and learning journey.

## Stack
- Next.js (App Router) · React · TypeScript
- Tailwind CSS v4
- Git / GitHub · Vercel

## Run locally
1. Install Node.js LTS.
2. Clone your repository.
3. Install packages: `npm install`
4. Start development server: `npm run dev`
5. Open http://localhost:3000

## Contact API
`POST /api/contact` accepts JSON `{name,email,message}` and validates required fields, length and email format. Currently it returns a successful validation response but **does not deliver or store messages**. Connect an email provider or database before treating it as a live contact inbox.

## Before publishing
- Update GitHub and LinkedIn URLs and email in `app/page.tsx`.
- Replace project placeholder links (`#`) in `data/projects.ts`.
- Add real screenshots and evidence to `public/projects/` and update the project detail pages.
- Confirm project descriptions, tools and results are accurate.
- Deploy via Vercel by importing this repository.

## Deployment
Push to GitHub and import the repository in Vercel. Framework preset should detect Next.js automatically. No environment variables are required for the current demo endpoint.

## Learning reflection
This project brings together interface design, component-based development, TypeScript, responsive CSS, routing and API validation. The portfolio is designed as an evolving record of learning: projects should show process, evidence, decisions and limitations—not only polished outcomes.
