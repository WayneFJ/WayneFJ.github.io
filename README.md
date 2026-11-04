# Wayne Johnson portfolio: published website

**Live site: https://waynefj.github.io/**

This repository holds the generated static build served by GitHub Pages. The editable application is in [WayneFJ/personal-site-source](https://github.com/WayneFJ/personal-site-source), which requires authorized access.

## Repository map

| Repository | Purpose |
| --- | --- |
| [personal-site-source](https://github.com/WayneFJ/personal-site-source) | Current React/TypeScript source, assets, local previews, checks and deployment instructions |
| [WayneFJ.github.io](https://github.com/WayneFJ/WayneFJ.github.io) | This generated public output; Pages serves main at the domain root |
| [Wayne-Johnson-Aspiring-Software-Engineer](https://github.com/WayneFJ/Wayne-Johnson-Aspiring-Software-Engineer) | Historical implementation; not the source of this live build |

## How updates arrive

Edit the current source repo, run its checks, and publish the complete fresh `dist/` output to this repository's main branch. Then wait for the Pages deployment to succeed. Editing minified files here is not a maintainable source change and will be overwritten by the next build.

The source repo documents both manual publication and its token-dependent automatic workflow. Source-to-public automation needs a working `GH_TOKEN`; public Pages deployment is a separate stage. See its [deployment guide](https://github.com/WayneFJ/personal-site-source/blob/main/docs/DEPLOYMENT.md) and [architecture guide](https://github.com/WayneFJ/personal-site-source/blob/main/docs/ARCHITECTURE.md).

## Output layout

- `index.html`: built entry point and metadata.
- `assets/`: current hashed JavaScript and CSS bundles.
- `art/`: watermarked portfolio images.
- `audio/`: recorded instruments and `CREDITS.txt` attribution.
- `brand-mark.svg`, `favicon-v3.svg`, `favicon.ico`: matching site identity and browser icons.
- `social-preview.png`, `robots.txt`, `sitemap.xml`, `404.html`, `.nojekyll`: static hosting and discovery assets.

The source build includes this README through `public/README.md`; update that original when changing these instructions. No npm install or build is needed inside this output repository. To inspect an existing checkout locally, `python -m http.server 4173` serves it at http://localhost:4173/.

## Deployment and cleanup

Confirm **Actions > pages build and deployment** succeeds for the published commit, then check the live page. Keep only assets referenced by the fresh build; source publication removes obsolete tracked bundles. Preserve `audio/CREDITS.txt`. Do not upload source dependencies, private files or resume PDFs here.

SVG and ICO files contain the same current logo. The conventional `/favicon.ico` endpoint supports clients that request it directly. A browser may still cache an earlier history icon independently of the live files; deleting more repository files does not clear that local cache.

To roll back, revert the faulty build commit as a unit and let Pages redeploy, then reconcile the editable source. Do not rewrite history.
