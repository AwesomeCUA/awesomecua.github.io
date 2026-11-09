# ViMo code

Code for the ViMo GUI world model: Gemini-based next-screen text prediction, AITW and AndroidControl data processing, InstructPix2Pix-style graphic inference, and an AndroidWorld agent that consults it.

- Catalog URL: https://awesomecua.com/resources/github-ai-agents-2030-vimo/
- Original source: https://github.com/ai-agents-2030/ViMo
- Kind: framework
- Review: curated
- Scope: core
- Environments: android
- Topics: world-models, mobile-navigation
- Evidence checked: 2026-10-19T06:59:55Z
- ID: github:ai-agents-2030/vimo

## Limitations

The README describes ViMo as a GUI world model that predicts the next GUI state as image and text. UI_text_prediction.py runs the text-prediction step with Gemini (gemini-2.0-flash), with a GPT-4o variant in the same file. data/ holds the selected Android in the Wild and AndroidControl episode IDs with annotations; images must be downloaded from the original releases, then generate_ocr.py and check_fix.py prepare the symbolic text representation. Graphic prediction is trained by following the InstructPix2Pix project, with edit_cli.py and generate.yaml for inference; no trained weights are in the repository. 'ViMo-Empowered Agent' is a copy of AndroidWorld (with its own Apache-2.0 LICENSE) whose vimo modules post the current screenshot and a candidate action to a world-model server and score the predicted screen when choosing actions. The README does not cite the paper; the project page links this repository and arXiv 2504.13936. No license file is at the repository root. Code was read, not run.

- Record JSON: https://awesomecua.com/resources/github-ai-agents-2030-vimo/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: No license file is at the repository root and the README states no license; the Apache-2.0 LICENSE inside the vendored AndroidWorld copy covers that copy only.
  Sources: https://api.github.com/repos/ai-agents-2030/ViMo/git/trees/1f319fece4d3a4ac1d41b4572751bca1a10fa690?recursive=1

## Primary evidence

- https://raw.githubusercontent.com/ai-agents-2030/ViMo/1f319fece4d3a4ac1d41b4572751bca1a10fa690/README.md (retrieved 2026-10-19T06:59:55Z; SHA-256 3bd1ee4aef9f07f0732989b83fb9ee1631814d72b567eb3300e32dc2d9b674a4)
- https://api.github.com/repos/ai-agents-2030/ViMo/git/trees/1f319fece4d3a4ac1d41b4572751bca1a10fa690?recursive=1 (retrieved 2026-10-19T06:59:59Z; SHA-256 bff182c03efb5b0acd9610f4ed4ff204cb3a2fe731bc416e59924f041b308ebc)
- https://raw.githubusercontent.com/ai-agents-2030/ViMo/1f319fece4d3a4ac1d41b4572751bca1a10fa690/UI_text_prediction.py (retrieved 2026-10-19T06:59:59Z; SHA-256 0723d06257b3d2fb795bc28238baaafaaf2737a684623d07ce99e25ba28c0110)
- https://raw.githubusercontent.com/ai-agents-2030/ViMo/1f319fece4d3a4ac1d41b4572751bca1a10fa690/ViMo-Empowered%20Agent/android_world/agents/vimo/vimo_reward.py (retrieved 2026-10-19T06:59:59Z; SHA-256 a1dbd214d87549cd65262cdaff34d09463bfba3a74c742cb72d0912b20d9ec24)
- https://raw.githubusercontent.com/ai-agents-2030/ViMo/1f319fece4d3a4ac1d41b4572751bca1a10fa690/edit_cli.py (retrieved 2026-10-19T07:00:00Z; SHA-256 bbe69cee05e986cf67f090dce46f3a748ce94539f5c3ce44ee14af45088dc14a)
- https://ai-agents-2030.github.io/ViMo/ (retrieved 2026-10-19T07:00:00Z; SHA-256 96f6b0485c524b937fbca9985f2630d3c5667239d9e9940b67c86e3a8e76425b)
