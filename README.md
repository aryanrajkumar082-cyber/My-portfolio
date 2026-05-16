# Kumar Aryan — Portfolio

Personal portfolio of Kumar Aryan, Visual Communication Designer (NIFT Delhi).

## Pages
- `index.html` — Home with hero + projects grid (links each card to Behance)
- `about.html` — Bio, experience timeline, education, skills
- `contact.html` — Email, phone, socials
- `assets/Kumar-Aryan-Resume.pdf` — Downloadable résumé

## Deploy to Vercel (3 steps)

### Option 1 — Drag & drop (easiest)
1. Go to [vercel.com/new](https://vercel.com/new)
2. Drag this whole folder onto the upload area
3. Click **Deploy** — done in ~10 seconds

### Option 2 — Vercel CLI
```bash
npm i -g vercel
cd portfolio
vercel
```

### Option 3 — GitHub
1. Push this folder to a new GitHub repo
2. On Vercel: **New Project** → Import that repo → **Deploy**

No build step is needed. This is a pure static site (HTML + CSS + JS).

## Local preview
Open `index.html` directly in a browser, or run:
```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Tech
- Plain HTML / CSS / vanilla JS — no framework, no build
- Fonts: Fraunces (display serif), Inter Tight (UI sans), JetBrains Mono (mono)
- Project images served directly from Behance CDN
- Fully responsive, accessible, reduced-motion aware

## Edit the projects
All 10 projects live in `script.js` as a single `projects` array. To add/remove/edit, just update that array.
