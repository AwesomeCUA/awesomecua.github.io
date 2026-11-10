---
title: "Harden Vanilla Puppeteer | AwesomeCUA"
url: https://awesomecua.com/resources/github-prescience-data-harden-puppeteer/
updated: 2026-11-10
type: tool
lang: en
---

# Harden Vanilla Puppeteer

Patch-package diffs that edit core Puppeteer files to run page calls in an isolated world and strip Puppeteer strings from error traces and profile names, lowering automation detection.

- Catalog URL: https://awesomecua.com/resources/github-prescience-data-harden-puppeteer/
- Original source: https://github.com/prescience-data/harden-puppeteer
- Kind: tool
- Review: curated
- Scope: adjacent
- Environments: web
- Topics: web-navigation, automation
- Evidence checked: 2026-11-10T06:29:29Z
- ID: github:prescience-data/harden-puppeteer

## Limitations

Patches cover Puppeteer 1.19.0, 2.1.1, 5.2.1, 5.3.1 and 7.0.1 and Puppeteer Core 5.3.1, plus a universal srcdoc patch in ./src. Scripts injected with page.evaluateOnNewDocument() still run in the main world.

- Record JSON: https://awesomecua.com/resources/github-prescience-data-harden-puppeteer/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/prescience-data/harden-puppeteer/ead46b8eefee34709d91c17a5dbe928e9d959356/README.md (retrieved 2026-11-10T06:29:29Z; SHA-256 eda340fdd66a38f6cf7bc83d63efc5d453be2b9b6b89814b8eaafa6c58bc4cda)
