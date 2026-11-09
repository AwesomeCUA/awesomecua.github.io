# OpenComet

Chrome side-panel agent that tags page elements with numbered boxes, redacts faces, credential fields and text PII on-device before a model sees the screenshot and DOM text, and acts through selectors or debugger clicks.

- Catalog URL: https://awesomecua.com/resources/github-princechouhan19-opencometai/
- Original source: https://github.com/princechouhan19/OpenCometAI
- Kind: agent
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, safety-security, screen-understanding
- Evidence checked: 2026-10-18T16:19:20Z
- ID: github:princechouhan19/opencometai

## Limitations

The README presents it as a Smart India Hackathon entry for problem statement 26171, whose listed organisation is ISRO. The Manifest V3 extension (version 1.31.0 at review) is loaded unpacked in Chrome; the README says Firefox has been built from the same source since v1.17.0. src/content/dom-detector.js paints numbered boxes on interactive elements, and the service worker captures the tab through the Chrome debugger or captureVisibleTab, so screenshots carry those marks. In privacy mode, MediaPipe, YOLO, ViT, Tesseract OCR and regex/checksum PII detectors run in the browser, and src/lib/privacy-firewall.js blocks or blanks a frame when sanitizing fails. Actions use selectors, with debugger Input.dispatchMouseEvent clicks where needed, inside a tab-group sandbox with an approval mode. Models: on-device Gemma 4, cloud providers, or Ollama through the bundled server. OpenCometBench is the repository's own test suite; its PII precision/recall uses a synthetic corpus built from the detector's own rules, as the README states, leaving independence outside the measurement.

- Record JSON: https://awesomecua.com/resources/github-princechouhan19-opencometai/record.json

## License declarations

- code: MIT — https://raw.githubusercontent.com/princechouhan19/OpenCometAI/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/princechouhan19/OpenCometAI/HEAD/README.md (retrieved 2026-10-18T16:19:20Z; SHA-256 0ac828306c3130219006b7f26a5a5bc1f89267d5c1ded62f4f831d59ad0c293f)
- https://raw.githubusercontent.com/princechouhan19/OpenCometAI/b1c6a9a226198c2cacab14e6746f384cb10b7575/src/background/sw.js (retrieved 2026-10-18T16:18:52Z; SHA-256 9fb05745727bf83bc92987623f00c5d581eb382425c182cd229a7a3378dc4261)
- https://raw.githubusercontent.com/princechouhan19/OpenCometAI/b1c6a9a226198c2cacab14e6746f384cb10b7575/src/content/dom-detector.js (retrieved 2026-10-18T16:18:52Z; SHA-256 e37367f96ab7dffb2ad3f52741e6407377d7fc7939e676717ba205f71fdd0391)
- https://raw.githubusercontent.com/princechouhan19/OpenCometAI/b1c6a9a226198c2cacab14e6746f384cb10b7575/src/background/actions.js (retrieved 2026-10-18T16:18:52Z; SHA-256 3abffee67cebd05c5cd15d605bf0281947f9ca84abcb1ada3a13ffa254dfc770)
- https://raw.githubusercontent.com/princechouhan19/OpenCometAI/b1c6a9a226198c2cacab14e6746f384cb10b7575/src/lib/privacy-firewall.js (retrieved 2026-10-18T16:18:52Z; SHA-256 a420b4e40a058e518e004a12feafa71a649621acb7e7812df81b2d9c5b2769e9)
- https://raw.githubusercontent.com/princechouhan19/OpenCometAI/b1c6a9a226198c2cacab14e6746f384cb10b7575/manifest.json (retrieved 2026-10-18T16:18:52Z; SHA-256 9a90cf2acfbfc449cf42ca0a0e115c1ffee3b0efe31c262c5b0cfea8400f0d26)
- https://raw.githubusercontent.com/princechouhan19/OpenCometAI/b1c6a9a226198c2cacab14e6746f384cb10b7575/LICENSE (retrieved 2026-10-18T16:18:52Z; SHA-256 9807e7c52637413d31b339b21e7659ea044235dc88fc37664073fa495fa73e7b)
- https://raw.githubusercontent.com/princechouhan19/OpenCometAI/HEAD/LICENSE (retrieved 2026-10-18T16:19:40Z; SHA-256 9807e7c52637413d31b339b21e7659ea044235dc88fc37664073fa495fa73e7b)
