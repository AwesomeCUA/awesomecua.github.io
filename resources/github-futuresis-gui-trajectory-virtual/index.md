---
title: "GUI-Trajectory-Virtual | AwesomeCUA"
url: https://awesomecua.com/resources/github-futuresis-gui-trajectory-virtual/
updated: 2026-10-18
type: framework
lang: en
---

# GUI-Trajectory-Virtual

Synthesizes Android agent trajectories without a device: an image model behind a chat-completions API draws each next screen from the previous screenshot and the action chosen by a Mobile-Agent-v3-style agent.

- Catalog URL: https://awesomecua.com/resources/github-futuresis-gui-trajectory-virtual/
- Original source: https://github.com/Futuresis/GUI-Trajectory-Virtual
- Kind: framework
- Review: curated
- Scope: core
- Environments: android
- Topics: data-generation, world-models, mobile-navigation
- Evidence checked: 2026-10-18T15:56:30Z
- ID: github:futuresis/gui-trajectory-virtual

## Limitations

The README says its arXiv paper is still to come; the GUIGuard project page presents this repository as that paper's trajectory-synthesis workflow, which is the basis for the paper link. In virtual_env_gemini3.py each step sends the previous screenshot and an action description to a chat-completions endpoint and decodes the returned image as the next screen; the code's default model is google/gemini-2.0-flash-exp:free, while the README examples use google/gemini-3-pro-image-preview. The adapter mocks the accessibility tree and ADB calls. The runner defines 57 social-app task goals whose simplified task class reports success as 1.0 without a check; generated trajectories therefore have unverified outcomes. Nothing was run.

- Record JSON: https://awesomecua.com/resources/github-futuresis-gui-trajectory-virtual/record.json

## License declarations

- code: MIT — https://raw.githubusercontent.com/Futuresis/GUI-Trajectory-Virtual/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/Futuresis/GUI-Trajectory-Virtual/8ccef36747ca140471206534824b9f2f6278d37d/README.md (retrieved 2026-10-18T15:56:30Z; SHA-256 2262044b993d01ef4833e28511f2646983e2ae3df2e1ae097eef6896062aa87a)
- https://futuresis.github.io/GUIGuard-page/ (retrieved 2026-10-18T15:54:36Z; SHA-256 14fe15c990481087ad504f631dc94d777736373f56344a0746cd77320c3db3b5)
- https://raw.githubusercontent.com/Futuresis/GUI-Trajectory-Virtual/8ccef36747ca140471206534824b9f2f6278d37d/virtual_env_gemini3.py (retrieved 2026-10-18T15:54:39Z; SHA-256 5c53724751a6bbd86773179aa3aaad8fc8ae7564d1aaa00167e7fcd4caddc870)
- https://raw.githubusercontent.com/Futuresis/GUI-Trajectory-Virtual/8ccef36747ca140471206534824b9f2f6278d37d/run_virtual.py (retrieved 2026-10-18T15:54:39Z; SHA-256 fb3ce0feb35566cd2ad2913794cb6983d7a949540e8f1a03fef58e81cce2f931)
- https://raw.githubusercontent.com/Futuresis/GUI-Trajectory-Virtual/8ccef36747ca140471206534824b9f2f6278d37d/virtual_env_adapter.py (retrieved 2026-10-18T15:56:05Z; SHA-256 e5d4dd12b9562aa48cc6ca641d717633796ea18fa50715570d69e0b5b06def70)
- https://raw.githubusercontent.com/Futuresis/GUI-Trajectory-Virtual/8ccef36747ca140471206534824b9f2f6278d37d/agent_env/task_evals/single/contacts.py (retrieved 2026-10-18T15:54:40Z; SHA-256 b668a60fd31dc89b7e493585ff1bf4966a3fbd6c8a77da10adaa2f4727133be6)
- https://raw.githubusercontent.com/Futuresis/GUI-Trajectory-Virtual/HEAD/LICENSE (retrieved 2026-10-18T15:56:48Z; SHA-256 0b7f2e6ad1dbbf5989c34b34a71da4a9b7271b2356715fb007a009ec73d1b705)
