# Danielle Silfa — Portfolio

Personal portfolio website built with **React + Vite**. Deployed via GitHub Pages.

## Tech Stack
- React 18
- Vite 5
- Pure CSS (no UI library — custom design system)

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (hot reload)
npm run dev
```

Open http://localhost:5173 in your browser.

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx / .css
│   ├── Hero.jsx / .css
│   ├── Experience.jsx / .css
│   ├── Projects.jsx / .css
│   ├── Skills.jsx / .css
│   ├── Contact.jsx / .css
│   └── Footer.jsx / .css
├── App.jsx
├── main.jsx
└── index.css        ← global styles & CSS variables
```

## Customization

- **Content**: Edit data arrays directly inside each component (e.g. `jobs` in `Experience.jsx`, `projects` in `Projects.jsx`)
- **Colors / Fonts**: All design tokens are CSS variables in `src/index.css` under `:root`
- **New sections**: Create a new component in `src/components/`, import it in `App.jsx`

## Deploying to GitHub Pages

1. Create a GitHub repo (e.g. `portfolio`)
2. Update `vite.config.js` — set `base` to your repo name:
   ```js
   base: '/your-repo-name/',
   ```
3. Push your code:
   ```bash
   git init
   git remote add origin https://github.com/dnsilfa/your-repo-name.git
   git add .
   git commit -m "initial commit"
   git push -u origin main
   ```
4. Deploy:
   ```bash
   npm run deploy
   ```
   This runs `vite build` and pushes the `dist/` folder to the `gh-pages` branch.

5. In your GitHub repo settings → **Pages** → set source to the `gh-pages` branch.

Your site will be live at: `https://dnsilfa.github.io/your-repo-name/`

## Adding a Custom Domain (optional)

In GitHub Pages settings, add your custom domain and create a `CNAME` file in the `public/` folder with your domain name.
