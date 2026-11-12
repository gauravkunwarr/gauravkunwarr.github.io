# gauravkunwarr.github.io

Academic homepage of Gaurav Kunwar. Plain HTML and CSS, no build step, so GitHub Pages serves it as is.

## Put it online (about 5 minutes)

1. On GitHub, create a **public** repository named exactly `gauravkunwarr.github.io` (it must match your GitHub username).
2. Open the repository, click **Add file → Upload files**, and drag in everything *inside* this folder
   (`index.html`, `publications.html`, `projects.html`, `cv.html`, `404.html`, `favicon.svg`, `.nojekyll`, `README.md` and the `assets` folder).
   Click **Commit changes**.
3. Go to **Settings → Pages**. Under *Build and deployment*, choose **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
4. After a minute or two the site is live at **https://gauravkunwarr.github.io**.

If you uploaded through the browser and `.nojekyll` did not come along (hidden files are sometimes skipped), the site still works.

## Add your photo

Save a portrait photo (roughly 3:4, at least 400 px wide) as `assets/img/prof_pic.jpg` and upload it.
Until then a grey placeholder is shown.

## Keep it up to date

| To change | Edit this file | Look for |
|---|---|---|
| News items | `index.html` | `<table class="news">` — add a new `<tr>` at the top |
| A paper's status (e.g. under review → accepted) | `publications.html` and, if it is selected, `index.html` | `<span class="chip review">Under review</span>` → `<span class="chip ok">Accepted</span>` |
| Move a paper to a year group | `publications.html` | cut its `<div class="pub" ...>` block and paste it under the right `<h2 class="bib-group">` |
| Add a DOI or PDF link | the paper's `<div class="links">` | add `<a class="btn" href="https://doi.org/...">DOI</a>` or `<a class="btn" href="assets/pdf/paper.pdf">PDF</a>` |
| CV PDF | `assets/pdf/Gaurav_Kunwar_CV.pdf` | replace the file, keep the name |
| Google Scholar / ORCID link | `index.html` | the `<div class="social">` block — copy the LinkedIn line and change the URL and label |

## Files

```
index.html            about, research interests, news, selected publications
publications.html     full list with abstracts
projects.html         project cards linking to papers
cv.html               web CV + PDF download
404.html              not-found page
assets/css/style.css  all styling (light and dark mode)
assets/js/main.js     dark-mode toggle and abstract buttons
assets/img/pubs/      figures from the papers
assets/pdf/           CV PDF
```
