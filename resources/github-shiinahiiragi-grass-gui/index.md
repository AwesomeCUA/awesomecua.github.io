---
title: "grass-gui | AwesomeCUA"
url: https://awesomecua.com/resources/github-shiinahiiragi-grass-gui/
updated: 2026-10-18
type: infrastructure
lang: en
---

# grass-gui

ScienceBoard's replacement GRASS GIS 8.4 wxPython GUI with an embedded Flask server that loads mapsets and layers, runs GRASS commands and returns layer, region and console state as JSON for task checks.

- Catalog URL: https://awesomecua.com/resources/github-shiinahiiragi-grass-gui/
- Original source: https://github.com/ShiinaHiiragi/grass-gui
- Kind: infrastructure
- Review: curated
- Scope: adjacent
- Environments: desktop, linux
- Topics: science, evaluation, state-tracking
- Evidence checked: 2026-10-18T12:13:46Z
- ID: github:shiinahiiragi/grass-gui

## Limitations

The ScienceBoard README lists this repository among its modified applications as the Python GUI part of GRASS GIS. Its manual.md installs GRASS 8.4 from the ubuntugis PPA and swaps this repository in for /usr/lib/grass84/gui/wxpython. At commit 4fe0312, wxgui.py starts a Flask thread on FLASK_PORT (default 8000) with /version, /init/cmd, /init/map, /init/layer, /init/scale, /dump, /gcmd, /gcmdline and /quit routes; /dump reports map layers, layer windows, toolbars, status-bar mode and scale, the region and console output. The rest of the tree is the upstream wxGUI code with its original README. GitHub does not mark the repository as a fork.

- Record JSON: https://awesomecua.com/resources/github-shiinahiiragi-grass-gui/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: The inspected tree has no license or COPYING file and GitHub reports no license. GRASS GIS's own license is not transferred to this copy by inference.
  Sources: https://api.github.com/repos/ShiinaHiiragi/grass-gui/git/trees/4fe031217483301519798b07f83f7f53c5142b09?recursive=1

## Primary evidence

- https://raw.githubusercontent.com/ShiinaHiiragi/grass-gui/HEAD/manual.md (retrieved 2026-10-18T12:13:46Z; SHA-256 578e99d639e296a8148a2d967a99764df4c4e4debf30c89b01cbc9242f11d656)
- https://raw.githubusercontent.com/OS-Copilot/ScienceBoard/21b5eb0f1d00898f7de9e84c3d33a87c2f2b3c3e/README.md (retrieved 2026-10-18T12:10:16Z; SHA-256 4c3fe93aa740dbf4a279a246ddd836f2590a2a36f39b820abe166e38cb484577)
- https://api.github.com/repos/ShiinaHiiragi/grass-gui/git/trees/4fe031217483301519798b07f83f7f53c5142b09?recursive=1 (retrieved 2026-10-18T12:13:30Z; SHA-256 e88b2d29f8b3939e225cf9bbe68680c7d07ccfd1d130f826074fc2c661bb01be)
- https://raw.githubusercontent.com/ShiinaHiiragi/grass-gui/4fe031217483301519798b07f83f7f53c5142b09/wxgui.py (retrieved 2026-10-18T12:13:30Z; SHA-256 7e39b02d2602c84d95e85c9606816d73b2a856b6877e1dc8a7b2af8050fba7a4)
