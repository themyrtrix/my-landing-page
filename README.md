# Lumina landing page

## Run locally
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000).

## Build and deploy
```bash
npm run build
npm run start
```
Import the repository into Vercel; it detects Next.js automatically.

## Setup commands
```bash
npx create-next-app@latest lumina --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*"
cd lumina
npx shadcn@latest init
npx shadcn@latest add button input avatar card badge separator dropdown-menu sheet skeleton
npm install framer-motion lucide-react next-themes class-variance-authority clsx tailwind-merge
```

## Customize
- Edit content in `lib/mock-data.ts`.
- Change the core palette in `app/globals.css` and `tailwind.config.ts`.
- Update the hero copy and metadata in `app/page.tsx` and `app/layout.tsx`.
- Add navigation destinations in `components/header.tsx` and `components/sidebar.tsx`.
- Tune motion timing in `components/motion.tsx`.
