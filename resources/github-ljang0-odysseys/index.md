---
title: "Odysseys | AwesomeCUA"
url: https://awesomecua.com/resources/github-ljang0-odysseys/
updated: 2026-10-19
type: benchmark
lang: en
---

# Odysseys

200 long-horizon web tasks drawn from real browsing sessions, run on the live Internet in Chrome through the OSWorld runner and scored per rubric item by an LLM judge over the trajectory's screenshots and actions.

- Catalog URL: https://awesomecua.com/resources/github-ljang0-odysseys/
- Original source: https://github.com/ljang0/Odysseys
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: web
- Topics: evaluation, long-horizon, web-navigation
- Evidence checked: 2026-10-19T07:10:53Z
- ID: github:ljang0/odysseys

## Limitations

Each task has a SHA-1 ID, a prompt, a starting URL, a difficulty level, a reference step count, numbered rubric items with requirement and verification text, and SimilarWeb category tags. The README runs tasks with the OSWorld runner (Chrome in an Ubuntu VM, 100-step budget) after converting them with convert_odysseys_to_osworld.py, whose OSWorld evaluator is a placeholder; scoring is done afterwards by run_full_trajectory_per_rubric.py, which asks an LLM judge (by default gemini-3.1-flash-lite-preview, the model the README uses, or an OpenAI-compatible model) whether any step satisfies each rubric item. Reported metrics are the averaged rubric score, the perfect rate and trajectory efficiency. The README says the starting URL is always Google, but 70 of the 200 tasks in odysseys.json start at another site, and the converter opens each task's own URL. Tasks run on live websites, so results can drift. README results are paper figures.

- Record JSON: https://awesomecua.com/resources/github-ljang0-odysseys/record.json

## Structured profile

- Actions / outputs: OSWorld computer actions in Chrome
- Evaluation: Post-hoc rubric scoring: an LLM judge marks each rubric item satisfied if any step's screenshot and action satisfy it; metrics are mean rubric score, perfect rate (all items satisfied) and trajectory efficiency.
- Focus: long-horizon web tasks from real browsing sessions
- Observations: screenshots
- Setting: interactive

### Count observations

- 200 tasks — data/odysseys.json at 8378146 (computed) (computed; source: https://raw.githubusercontent.com/ljang0/Odysseys/837814633ef948479abb3d142458f0acdb73fa65/data/odysseys.json)
- 45 easy tasks — data/odysseys.json at 8378146 (computed) (computed; source: https://raw.githubusercontent.com/ljang0/Odysseys/837814633ef948479abb3d142458f0acdb73fa65/data/odysseys.json)
- 46 medium tasks — data/odysseys.json at 8378146 (computed) (computed; source: https://raw.githubusercontent.com/ljang0/Odysseys/837814633ef948479abb3d142458f0acdb73fa65/data/odysseys.json)
- 109 hard tasks — data/odysseys.json at 8378146 (computed) (computed; source: https://raw.githubusercontent.com/ljang0/Odysseys/837814633ef948479abb3d142458f0acdb73fa65/data/odysseys.json)
- 1,225 rubric items — data/odysseys.json at 8378146 (computed) (computed; source: https://raw.githubusercontent.com/ljang0/Odysseys/837814633ef948479abb3d142458f0acdb73fa65/data/odysseys.json)

Counts were computed from the pinned task file and match the README's 200 tasks split into 45 easy, 46 medium and 109 hard. Difficulty follows reference step count and domain spread. The observation and action spaces are those of the OSWorld agent used; the paper setup uses a 100-step budget.

## License declarations

- code: MIT — https://raw.githubusercontent.com/ljang0/Odysseys/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/ljang0/Odysseys/837814633ef948479abb3d142458f0acdb73fa65/README.md (retrieved 2026-10-19T07:10:53Z; SHA-256 ffbbc15712ee94ec6718756992e7fda72c0632b259e73db7e93dd2d34674dd80)
- https://api.github.com/repos/ljang0/Odysseys/git/trees/837814633ef948479abb3d142458f0acdb73fa65?recursive=1 (retrieved 2026-10-19T07:10:55Z; SHA-256 c045c5525b370808035bffe95869fca74950580053f53bffd3563b801e5f451b)
- https://raw.githubusercontent.com/ljang0/Odysseys/837814633ef948479abb3d142458f0acdb73fa65/data/odysseys.json (retrieved 2026-10-19T07:10:55Z; SHA-256 0bb7081d740eb6237b72e7e33524cc9489e769c5e236ec54879a8eb06ebc48e0)
- https://raw.githubusercontent.com/ljang0/Odysseys/837814633ef948479abb3d142458f0acdb73fa65/scripts/python/convert_odysseys_to_osworld.py (retrieved 2026-10-19T07:10:55Z; SHA-256 d80d1edac5e9245225722f8ca5566b3b5e0346a60efe7f595918d60177d48bbc)
- https://raw.githubusercontent.com/ljang0/Odysseys/837814633ef948479abb3d142458f0acdb73fa65/scripts/python/run_full_trajectory_per_rubric.py (retrieved 2026-10-19T07:10:55Z; SHA-256 736c3c20a6d1d00d6fa1ffb34ae2b7c7835618bea0fe735bab99d036ee26983f)
- https://raw.githubusercontent.com/ljang0/Odysseys/837814633ef948479abb3d142458f0acdb73fa65/LICENSE (retrieved 2026-10-19T07:10:56Z; SHA-256 e58e9591671256eb4c7a45959614e70e9416ceda7b89d2120f9ade55060ed13b)
- https://raw.githubusercontent.com/ljang0/Odysseys/HEAD/LICENSE (retrieved 2026-10-19T07:11:32Z; SHA-256 e58e9591671256eb4c7a45959614e70e9416ceda7b89d2120f9ade55060ed13b)
