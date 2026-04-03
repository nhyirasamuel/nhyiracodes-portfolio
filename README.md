# NhyiraCodes Portfolio

Personal developer portfolio for **Nhyira Samuel Kwame** — Full Stack Developer, Level 400, University of Cape Coast.

Built with **React 18**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Vite**.

---

## Getting Started

### Prerequisites
- Node.js 18+ — https://nodejs.org

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

---

## Available Scripts

| Command            | Description                        |
|--------------------|------------------------------------|
| `npm run dev`      | Start dev server at localhost:8080 |
| `npm run build`    | Build for production               |
| `npm run preview`  | Preview the production build       |
| `npm run lint`     | Run ESLint                         |
| `npm test`         | Run unit tests (Vitest)            |

---

## Project Structure

```
src/
├── assets/          # Images and static assets
├── components/      # Reusable UI components
│   ├── ui/          # shadcn/ui primitives
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── SkillsSection.tsx
│   ├── ServicesSection.tsx
│   ├── ContactSection.tsx
│   └── Footer.tsx
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
├── pages/           # Page-level components
├── App.tsx          # Root component & providers
├── main.tsx         # Entry point
└── index.css        # Global styles & CSS variables
```

---

## Customisation

All content data lives at the top of each component file as constants (e.g. `SKILLS`, `SERVICES`, `CONTACT_INFO`). Update those arrays to change content without touching JSX.

---

## Deployment

Deploy for free on **Vercel**:
1. Push to GitHub
2. Import the repo on [vercel.com](https://vercel.com)
3. Click **Deploy** — done!
