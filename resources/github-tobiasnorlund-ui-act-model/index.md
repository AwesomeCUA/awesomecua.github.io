---
title: "UI-Act model | AwesomeCUA"
url: https://awesomecua.com/resources/github-tobiasnorlund-ui-act-model/
updated: 2026-10-18
type: model
lang: en
---

# UI-Act model

2023 GUI agent model: a text-conditioned encoder-decoder Transformer that reads full-screen captures through a convolutional encoder and predicts left clicks on a 4-pixel grid, demonstrated on GNOME Calculator.

- Catalog URL: https://awesomecua.com/resources/github-tobiasnorlund-ui-act-model/
- Original source: https://github.com/TobiasNorlund/UI-Act-model
- Kind: model
- Review: curated
- Scope: core
- Environments: desktop, linux
- Topics: imitation-learning, action-prediction
- Evidence checked: 2026-10-18T15:58:37Z
- ID: github:tobiasnorlund/ui-act-model

## Limitations

The demo model has 1.8M parameters and was trained from scratch by behavioural cloning to compute simple additions and subtractions of up to two-digit numbers in an open GNOME Calculator window on Ubuntu at 1920x1080; the README says it is brittle to new backgrounds, resolutions or other windows. In the demo runner each step grabs the full screen with PIL ImageGrab, resizes it to the configured 1024x576 input, and clicks the predicted position with pyautogui until the model predicts end. Neither the trained checkpoint (run.py expects data/gnome_calculator_model/epoch=14-step=1875.ckpt) nor the demonstration recordings (the data module reads screen.mp4 and events.jsonl under data/screen_recordings/) are in the repository; the README instead offers a VirtualBox VM image, whose HTTP HEAD response on 2026-10-18 reported 23,411,565,568 bytes, last modified 2023-10-11. The README's demo-video URL uses the path TobiasNorlund/UI-Act, a name that the GitHub API now resolves to a different repository (ID 993359793; this one is 702482392). There is no LICENSE file and the GitHub API reports no license. Nothing was run.

- Record JSON: https://awesomecua.com/resources/github-tobiasnorlund-ui-act-model/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: The README names no license, the repository tree at d591416c has no LICENSE file, and the GitHub API reports no license.
  Sources: https://raw.githubusercontent.com/TobiasNorlund/UI-Act-model/d591416c7203578c2daca748f4c441c6d0b27cfe/README.md

## Primary evidence

- https://raw.githubusercontent.com/TobiasNorlund/UI-Act-model/d591416c7203578c2daca748f4c441c6d0b27cfe/README.md (retrieved 2026-10-18T15:58:37Z; SHA-256 6b28fe66bb23f8cdc49643a3c3f054bf41be6f0cbf50ce445c3f87d68a8d27d5)
- https://raw.githubusercontent.com/TobiasNorlund/UI-Act-model/d591416c7203578c2daca748f4c441c6d0b27cfe/ui_act/tasks/gnome_calculator/run.py (retrieved 2026-10-18T15:58:17Z; SHA-256 c0258669f916d3ad22c580fee4d1d078a8085be07c409675ca2790cc8198bd1f)
- https://raw.githubusercontent.com/TobiasNorlund/UI-Act-model/d591416c7203578c2daca748f4c441c6d0b27cfe/ui_act/model.py (retrieved 2026-10-18T15:58:18Z; SHA-256 433eac64661a471176012dc0a1956ba63cb38a23dcd64956b9ffc17511388fbd)
- https://raw.githubusercontent.com/TobiasNorlund/UI-Act-model/d591416c7203578c2daca748f4c441c6d0b27cfe/ui_act/tasks/gnome_calculator/data.py (retrieved 2026-10-18T15:58:18Z; SHA-256 7fdd36de702b677d760fb7fe9767d84ceb2a4c9bf44af68118f4b7ade6d4c977)
- https://raw.githubusercontent.com/TobiasNorlund/UI-Act-model/d591416c7203578c2daca748f4c441c6d0b27cfe/data/gnome_calculator_model/model_config.json (retrieved 2026-10-18T15:58:18Z; SHA-256 cd1a070afc47753b786eab78a678082b42902d6810f1c99bf3303c7ec72f6ddd)
