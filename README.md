# Vasanthavel K — Portfolio

Personal portfolio website built with HTML, CSS, and vanilla JavaScript.

## 🚀 Deploy to GitHub Pages

1. Create a new repository named `Portfolio` on GitHub
2. Push this folder:
   ```bash
   cd Portfolio
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/Vasanth2428/Portfolio.git
   git push -u origin main
   ```
3. Go to **Settings → Pages** → set Source to `main` branch, root (`/`)
4. Site will be live at: `https://vasanth2428.github.io/Portfolio/`

## 📁 File Structure

```
├── index.html        # Main portfolio page
├── styles.css        # Styles (cyber-neon theme)
├── script.js         # Particles, scroll reveal, counters
├── favicon.png       # Favicon
├── 404.html          # Custom 404 page
├── robots.txt        # Search engine directives
├── sitemap.xml       # Sitemap for SEO
├── .nojekyll         # Skip Jekyll on GitHub Pages
└── Vasanthavel_Resume_v2.docx  # Downloadable resume
```

## 🛠 Local Development

```bash
python -m http.server 8080
# Open http://localhost:8080
```

## ✏️ Customization

- **Colors**: Edit CSS variables at the top of `styles.css`
- **Content**: Edit sections directly in `index.html`
- **Deploy URL**: Update canonical/OG URLs in `index.html`, `robots.txt`, and `sitemap.xml`
