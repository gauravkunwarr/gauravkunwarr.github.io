# gauravkunwarr.github.io

Academic homepage of Gaurav Kunwar. Plain HTML and CSS, no build step, so GitHub Pages serves it as is.

## Put it online (about 5 minutes)

1. On GitHub, create a **public** repository named exactly `gauravkunwarr.github.io` (it must match your GitHub username).
2. Open the repository, click **Add file → Upload files**, and drag in everything *inside* this folder
   (the HTML files, `style.css`, `main.js`, all images, `Gaurav_Kunwar_CV.pdf`, `favicon.svg`, `.nojekyll` and `README.md`).
   Keep every file directly in the repository root, beside `index.html`. No assets folder is used in this version.
   Click **Commit changes**.
3. Go to **Settings → Pages**. Under *Build and deployment*, choose **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
4. After a minute or two the site is live at **https://gauravkunwarr.github.io**.

If you uploaded through the browser and `.nojekyll` did not come along (hidden files are sometimes skipped), the site still works.

## Add your photo

The home page currently uses `prof_pic.svg`, which is already in your repository.
To add a portrait, upload `prof_pic.jpg` (roughly 3:4, at least 400 px wide) to the repository root, then change the profile image in `index.html` from `src="prof_pic.svg"` to `src="prof_pic.jpg"`.

## Keep it up to date

| To change | Edit this file | Look for |
|---|---|---|
| News items | `index.html` | `<table class="news">` — add a new `<tr>` at the top |
| A paper's status (e.g. under review → accepted) | `publications.html` and, if it is selected, `index.html` | `<span class="chip review">Under review</span>` → `<span class="chip ok">Accepted</span>` |
| Move a paper to a year group | `publications.html` | cut its `<div class="pub" ...>` block and paste it under the right `<h2 class="bib-group">` |
| Add a DOI or PDF link | the paper's `<div class="links">` | add `<a class="btn" href="https://doi.org/...">DOI</a>` or `<a class="btn" href="paper.pdf">PDF</a>` |
| CV PDF | `Gaurav_Kunwar_CV.pdf` | replace the file, keep the name |
| Google Scholar / ORCID link | `index.html` | the `<div class="social">` block — copy the LinkedIn line and change the URL and label |

## Files

All files are stored directly in the repository root.

| File | Purpose |
|---|---|
| `index.html` | About, research interests, news and selected publications |
| `publications.html` | Full publication list with abstracts |
| `projects.html` | Project cards |
| `cv.html` | Web CV and download link |
| `404.html` | Page not found |
| `style.css` | Styling, light and dark modes |
| `main.js` | Theme toggle and abstract buttons |
| `prof_pic.svg` | Profile placeholder |
| `*.jpg` | Publication and project images |
| `Gaurav_Kunwar_CV.pdf` | Downloadable CV |
| `favicon.svg` | Browser icon |
