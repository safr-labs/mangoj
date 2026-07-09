# Mango J (Manganikka) — Creator Portfolio Website
**Studio**: Safr Labs  
**Package**: Starter Package (₹6,000)  
**Client**: Mango J  
**Developer**: Abdul Ajees M  
**Deployment Target**: Vercel

This is an enterprise-grade, high-performance static marketing website built for Mango J (Manganikka), a Tamil YouTube creator based in Dubai. The project is designed strictly according to the **Safr Labs Website Blueprint V2.0** specifications, ensuring it is 100% accessible, SEO-optimized, and structurally ready for a seamless CMS/Database upgrade.

---

## Technical Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: Strict TypeScript 5
- **Styling**: Tailwind CSS v4
- **Theme**: Light Mode (Cream Editorial) & Dark Mode (Obsidian) via `next-themes`
- **Components**: `shadcn/ui` (Radix & Base UI primitives)
- **Forms & Validation**: React Hook Form + Zod
- **Icons**: Lucide React + Inline SVGs for brand logos

---

## Directory Structure

The project strictly follows the Safr Labs unified folder blueprint:

```text
├── src/
│   ├── app/            # App Router files (pages, layouts, robots, sitemap)
│   ├── components/     # Reusable layout, home, and shared UI components
│   ├── data/           # Structured local JSON/TS databases (CMS Ready)
│   ├── content/        # Page copywriting strings (CMS Ready)
│   ├── types/          # Strict TypeScript interfaces
│   ├── hooks/          # Reusable custom React hooks
│   ├── utils/          # Core utility functions
│   ├── constants/      # Brand metadata tokens
│   ├── actions/        # Server Actions (DB pipeline placeholders)
│   ├── styles/         # Custom CSS animations & utilities
│   └── lib/            # Font configs & shadcn tailwind merges
├── public/             # Static public assets (images, logos, icons)
├── middleware.ts       # Route handler middleware
└── next.config.ts      # Next.js configurations (Image remote patterns)
```

---

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the site.

### 3. Build for Production
```bash
npm run build
```

---

## CMS / Database Upgrade Path

To upgrade this Starter Package to a **Business/Premium Package** (adding PostgreSQL, Prisma ORM, and an Admin Dashboard CMS):
1. **Do not modify the UI components**. All markup is fully decoupled.
2. Replace local data files in `/src/data/` with fetch queries calling the CMS APIs or PostgreSQL tables in Next.js Server Components.
3. Hook up the form submit actions in `/src/actions/contact.ts` to insert entries into the database using Prisma.

