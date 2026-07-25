# BLG — Bilibili Gaming Valorant Division

A fan-made, highly-animated concept site for Bilibili Gaming's VALORANT division, built as a static site (plain HTML/CSS/JS — no build step).

Signature touch: the background is animated with **danmaku** — the scrolling bullet-comment overlay Bilibili itself is famous for — carrying BLG match chants across the hero and page.

## Structure
```
index.html
css/style.css
js/script.js
```

## Run locally
Just open `index.html` in a browser, or serve the folder:
```bash
python3 -m http.server 8000
```
then visit `http://localhost:8000`.

## Deploy to GitHub Pages
1. Create a new repo (e.g. `blg-valorant`) and push these files to the root of the `main` branch.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set Source to **Deploy from a branch**, branch `main`, folder `/ (root)`.
4. Save — your site will be live at `https://<your-username>.github.io/<repo-name>/` within a minute or two.

## Data
Roster, staff, results, and event history pulled from [Liquipedia](https://liquipedia.net/valorant/Bilibili_Gaming) and [VLR.gg](https://www.vlr.gg/team/12010/bilibili-gaming) as of July 2026. Update the arrays at the top of `js/script.js` (`ROSTER`, `STAFF`, `TIMELINE`, `RESULTS`) as the roster or results change — the page re-renders from that data automatically.

This is an unofficial fan project, not affiliated with Bilibili Gaming or Riot Games.
