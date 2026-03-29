# ShivArmor Website

This branch is a single-page static website built with plain HTML, CSS, and a small amount of JavaScript.

## Local development

There is no build step.

1. Open `index.html` in a browser, or
2. Run a simple static server from the repository root if you want local navigation and form testing behavior.

Example with Python:

`python3 -m http.server 3000`

## Deploy to GitHub Pages

This repository deploys with GitHub Actions.

1. In GitHub, open `Settings` > `Pages`.
2. Set the source to `GitHub Actions`.
3. Push to `main` or `refactor/static-one-page` to trigger deployment.

The workflow publishes the static files directly from the repository root, so no bundler or generated `docs/` or `dist/` output is required.
