# Portfolio (React + Vite)

A single-page portfolio. **All content lives in one place:** the `profile` object at the top of `src/App.jsx`. Search the file for `EDIT` to find every placeholder.

## Run locally

```bash
npm install
npm run dev
```

Open the URL it prints (usually http://localhost:5173).

## Build for hosting

```bash
npm run build
```

This produces a static site in `dist/`. Upload the **contents of `dist/`** to any static host: GitHub Pages, Netlify, Vercel, Cloudflare Pages, or a school web server.

> Deploying to a subpath (e.g. GitHub Pages at `username.github.io/repo-name/`)? Set `base: "/repo-name/"` in `vite.config.js` first — it's commented in there.

> Note: a Vite/React build is a folder of JS/CSS files. It does **not** drop into classic Google Sites. If the site must live on Google Sites or another no-build platform, ask for the single-file plain-HTML version instead.

## Where to edit what

| You want to change…                  | Edit…                                                  |
| ------------------------------------- | ------------------------------------------------------ |
| Name, bio, projects, skills, links    | `src/App.jsx` → the `profile` object                   |
| Colors, fonts, spacing, layout        | `src/index.css` (theme variables are at the top)       |
| Browser tab title                     | `index.html` `<title>`                                 |
| Project screenshots                   | Replace `<CoverA/>` / `<CoverB/>` in `src/App.jsx` with `<img src="/yourshot.png" />` (put the image in a `public/` folder) |

## Notes

- Fonts load from Google Fonts and degrade gracefully if offline.
- The `stats` strip on the home page is optional — delete the `stats` array in `profile` to hide it.
- **Privacy (this is a public site for a student):** prefer a school email over a personal one, keep the location vague (city/state is plenty), and skip phone number and home address. Have a parent/guardian review the live site before it's published.
