## Personal site built with Jekyll

This repository contains the source for **ememchijioke.com**, a Jekyll site inspired by Sebastian Raschka’s layout. It includes pages for the home/portfolio, projects, CV, contact, and a blog with sample posts.

### Prerequisites
- Ruby (2.7+ recommended)
- Bundler (`gem install bundler`)

### Run locally
```bash
bundle install
bundle exec jekyll serve
```
Then visit `http://localhost:4000`.

### Deploying to GitHub Pages
- Push this repository to GitHub.
- In repository Settings → Pages, select the default branch and `/ (root)` as the source.
- GitHub Pages will build with the included `jekyll` and plugins (`jekyll-feed`, `jekyll-seo-tag`).

### Customizing
- Update `_config.yml` with your name, links, and metadata.
- Replace placeholder links (`your-github`, `your-linkedin`, newsletter URL) and adjust colors in `assets/css/style.css` if desired.
- Add or edit posts in `_posts/` using the `YYYY-MM-DD-title.md` convention.
