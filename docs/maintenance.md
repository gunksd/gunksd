# Profile maintenance

## Findings and fixes (2026-09-21)

- Activity graph image returned HTTP 402, and its linked repository returned 404. Removed the broken graph; contribution history remains available through the snake and Metrics calendar.
- Visitor counter returned HTTP 403 in this environment. Removed this unreliable dependency.
- Metrics reported workflow success while its habits plugin rendered “Unexpected error”. Run 35562810334 logs show `Cannot destructure property 'author' of 'undefined'` in the upstream habits plugin. Disabled only that plugin, removed its existing error panel, and enabled `plugins_errors_fatal` so a future plugin error fails the workflow instead of publishing an error image. Other statistics are retained.
- Snake generation was successful, but publishing unnecessarily depended on `PERSONAL_ACCESS_TOKEN`. It now uses the repository `GITHUB_TOKEN` with explicit `contents: write`. The schedule comment now correctly states daily, not every 12 hours.
- Replaced remote decorative header/footer/typing images with a local SVG cover. Simplified repeated headings and layout tables, fixed missing alt text, removed the empty Move icon data URL, and consolidated blog links to the working `www.awansmith.cn` URL.
- X returned 404 to an anonymous HTTP request. This alone cannot verify whether the account is unavailable, so the owner's original handle is retained. Article URLs and WeChat image returned 200; HTTP status alone does not prove the full Notion article is publicly readable.

## Automation

Metrics still needs the existing `METRICS_TOKEN` secret with the upstream action's required access. `GITHUB_TOKEN` commits the generated file. Do not put tokens in source files.

The two existing workflows run on main. The updated files must be pushed before GitHub runs the fixes. Use Actions → Metrics / generate animation → Run workflow for immediate refresh. Branch rules may independently restrict generated-file commits or output-branch publishing.

Statistics images are snapshots; do not edit values manually. The checked-in Metrics snapshot had only its broken habits section removed, not its remaining values refreshed. Remote stats cards were working during this check and are retained inside the expandable statistics section.

## Website

See [website instructions](../website/README.md) for running the React portfolio. A local production build is not proof that GitHub Actions or public domain deployment has completed.

## Validation performed

- `npm run build`: passed (Vite production bundle).
- Browser: rendered WebGL canvas without console errors; Motion off removes the canvas and Motion on restores it.
- Browser: article anchor navigation works; mobile navigation opens and closes after selection.
- Browser: 1440px, 390px, and 320px viewports show no document-level horizontal overflow. Desktop hero, writing section, and mobile biography were visually inspected.
- Both GitHub Actions YAML files parse, both edited SVGs are valid XML, and `git diff --check` passes.
- GitHub Actions were inspected read-only; changed workflows have not been pushed or executed remotely.

## Content update

Removed the contact image link and all three article links from the profile and website at the owner's request. Restored the bilingual typewriter quote with a local SVG on GitHub and CSS animation on the website. Education now states September 2022 – July 2026, graduated.
