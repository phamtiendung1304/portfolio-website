# Pham Tien Dung — Personal Portfolio Website

Professional portfolio for Data Analyst, Risk Analyst, Business Analyst, and Banking & Finance internship applications.

**Tech Stack:** Next.js 15 · TypeScript · Tailwind CSS · Static Export

---

## Project Structure

```
portfolio/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx          # Responsive navigation with scroll effects
│   │   ├── Hero.tsx            # Landing hero with CTA buttons
│   │   ├── About.tsx           # Academic background + skills grid
│   │   ├── Projects.tsx        # Analytics project cards
│   │   ├── Leadership.tsx      # CMET + TEDx sections
│   │   ├── Achievements.tsx    # Timeline + certifications
│   │   ├── Blog.tsx            # Blog post previews
│   │   ├── Contact.tsx         # Contact form + social links
│   │   └── Footer.tsx
│   ├── data/
│   │   └── portfolio.ts        # ALL content lives here — edit this file
│   ├── globals.css
│   ├── layout.tsx              # SEO metadata
│   └── page.tsx
├── public/
│   └── resume.pdf              # Upload your actual resume here
├── next.config.ts
└── README.md
```

---

## Quick Start

```bash
git clone https://github.com/YOUR_USERNAME/portfolio.git
cd portfolio
npm install
npm run dev
# Visit http://localhost:3000
```

---

## Updating Content

All content is in `app/data/portfolio.ts`. Edit personalInfo, projects, achievements, certifications, and blogPosts directly.

### Add a New Project
```typescript
{
  id: 6,
  title: "Project Title",
  category: "Risk Management",
  problem: "...",
  dataset: "...",
  methodology: "...",
  results: "...",
  technologies: ["Python", "SQL"],
  github: "https://github.com/YOUR/repo",
  highlight: false,   // true = featured card
  icon: "📊",
}
```

---

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import repo at vercel.com
3. Framework: Next.js | Output: `out`
4. Deploy

### GitHub Pages
1. Add `basePath: "/REPO_NAME"` to `next.config.ts`
2. Create `.github/workflows/deploy.yml` (see full README for YAML)
3. Enable Pages → GitHub Actions in repo settings

---

## Resume
Replace `public/resume.pdf` with your actual resume file.

---

## Contact Form
Currently uses local state. Integrate Formspree (free) to make it functional:
```tsx
await fetch("https://formspree.io/f/YOUR_ID", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formState),
});
```
