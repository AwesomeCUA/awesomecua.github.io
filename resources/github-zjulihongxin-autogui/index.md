# AutoGUI code

AutoGUI's functionality-annotation pipeline (collect, reject, annotate from accessibility-tree changes, verify, generate tasks), with Qwen-VL LoRA fine-tuning and lmms-eval-based grounding evaluation.

- Catalog URL: https://awesomecua.com/resources/github-zjulihongxin-autogui/
- Original source: https://github.com/ZJULiHongxin/AutoGUI
- Kind: framework
- Review: curated
- Scope: core
- Environments: web, android
- Topics: grounding, data-generation, screen-understanding
- Evidence checked: 2026-10-19T07:02:32Z
- ID: github:zjulihongxin/autogui

## Limitations

Official AutoGUI code. autogui_anno/ is a self-contained reimplementation of the paper's web and mobile annotation pipeline: it gathers screenshots and accessibility trees, rejects unpredictable elements, has an OpenAI-compatible LLM describe each element's function from before/after accessibility-tree changes, verifies descriptions by re-grounding them, and composes grounding tasks at several image scales; web collection uses Playwright. finetune/ trains Qwen-VL-Chat with LoRA on the released AutoGUI training data, and the adapted lmms_eval package runs FuncPred, ScreenSpot, ScreenSpot-v2, RefExp, MOTIF and VisualWebBench grounding tasks for models the README lists, including Qwen-VL-Chat, Qwen2-VL, LLaVA, CogAgent, Ferret-UI, UGround and OS-Atlas. The README links the 702K training set on the Hub, a 2K FuncPred test split on Google Drive and an AutoGUI-Qwen checkpoint. The arXiv abstract points to autogui-project.github.io, the repository's homepage, which links this code; that page's own Paper link points to an unrelated arXiv ID. The README's clone command uses the former BraveGroup/AutoGUI address. Code was read, not run.

- Record JSON: https://awesomecua.com/resources/github-zjulihongxin-autogui/record.json

## License declarations

- code: MIT — https://raw.githubusercontent.com/ZJULiHongxin/AutoGUI/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/ZJULiHongxin/AutoGUI/0c28fd248ec66623cd7f7b00275e229f4bec9bf3/README.md (retrieved 2026-10-19T07:02:32Z; SHA-256 101401f2b5a9e5f1f00c6f231b66fddd4b3f3b259bd1af4c8190ae0c3d748bab)
- https://api.github.com/repos/ZJULiHongxin/AutoGUI/git/trees/0c28fd248ec66623cd7f7b00275e229f4bec9bf3?recursive=1 (retrieved 2026-10-19T07:02:34Z; SHA-256 a35f0735dbd065f2722f991589fa4e03da2bfb3a372a4ae1c3e148bf91bda8e9)
- https://raw.githubusercontent.com/ZJULiHongxin/AutoGUI/0c28fd248ec66623cd7f7b00275e229f4bec9bf3/autogui_anno/README.md (retrieved 2026-10-19T07:02:34Z; SHA-256 e3c2c92ee9714e19d30d193d4ea1640b410bbc9368985d63daace90e0e545b0d)
- https://raw.githubusercontent.com/ZJULiHongxin/AutoGUI/0c28fd248ec66623cd7f7b00275e229f4bec9bf3/LICENSE (retrieved 2026-10-19T07:02:35Z; SHA-256 b97829e906566e1b931ec4a5ea7c07a25f0c16bebdae1367c3a4a14cc0154208)
- https://arxiv.org/abs/2502.01977v2 (retrieved 2026-10-19T07:02:35Z; SHA-256 768ec5314cb79ad995c9c0a6ffbf3da4946ed49a1d13e17c99f358e4b4459de8)
- https://autogui-project.github.io/ (retrieved 2026-10-19T07:02:35Z; SHA-256 3cab9b946d36e8362dbb8e386c333ddce597fcb03fbd0c7389c1398d8d849d21)
- https://raw.githubusercontent.com/ZJULiHongxin/AutoGUI/HEAD/LICENSE (retrieved 2026-10-19T07:03:30Z; SHA-256 b97829e906566e1b931ec4a5ea7c07a25f0c16bebdae1367c3a4a14cc0154208)
- https://api.github.com/repos/BraveGroup/AutoGUI (retrieved 2026-10-19T07:01:33Z; SHA-256 0cb04554d69ce35de9aa795902b5edcce383c86e015df497c47aba673b793a09)
- https://api.github.com/repos/ZJULiHongxin/AutoGUI (retrieved 2026-10-19T07:01:34Z; SHA-256 0cb04554d69ce35de9aa795902b5edcce383c86e015df497c47aba673b793a09)
