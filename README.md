# Emem Chijioke

A static personal portfolio built with HTML, CSS, and JavaScript. No build step or dependency installation is required.

## Files

- `index.html`: homepage, combined Projects & Labs list, writing, and publication.
- `about.html`: background and education.
- `work.html`: Projects & Labs portfolio page.
- `posts/`: published articles.
- `public/images/`: favicon, portrait, and images used by the pages.
- `style.css`: shared styles and light/dark themes.
- `theme.js`: theme preference.
- `work-filters.js`: homepage All/Projects/Labs filtering and ordering.
- `portfolio.js`: portfolio page tabs.

## Preview locally

Run `python3 -m http.server 8000` from this directory, then open <http://localhost:8000>.

## Publish with GitHub Pages

Publish from the root directory of your publishing branch. Keep `CNAME` for the custom domain, `.nojekyll` for plain static hosting, `404.html`, `robots.txt`, and `sitemap.xml`.

## Update content

Project cards link directly to GitHub; individual project pages are not published. The edge registry project has no repository link yet. Its date is 26 October 2026; other project dates use repository creation dates.

On the homepage, add lab cards with `data-work-kind="lab"`, a date (`<time datetime="YYYY-MM-DD">`), a Lab type label, description, tags, and a verified link. Add the corresponding lab entry to `work.html` when publishing it.

Cards with `data-work-status="ongoing"` are pinned first; entries within each group appear newest first. MARL and container security are marked as ongoing projects.

The CV link requests a copy by email until a current PDF is supplied.
