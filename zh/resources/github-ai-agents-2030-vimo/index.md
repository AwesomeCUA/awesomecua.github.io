# ViMo code

ViMo GUI 世界模型的代码，包括基于 Gemini 的下一屏文本预测、AITW 和 AndroidControl 数据处理、InstructPix2Pix 风格的图像推断，以及调用该模型的 AndroidWorld 智能体。

- 目录页面：https://awesomecua.com/zh/resources/github-ai-agents-2030-vimo/
- English：https://awesomecua.com/resources/github-ai-agents-2030-vimo/index.md
- 原始来源：https://github.com/ai-agents-2030/ViMo
- 类型：框架
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：世界模型、手机操作
- 证据核查日期：2026-10-19T06:59:55Z
- ID：github:ai-agents-2030/vimo

## 范围记录

The README describes ViMo as a GUI world model that predicts the next GUI state as image and text. UI_text_prediction.py runs the text-prediction step with Gemini (gemini-2.0-flash), with a GPT-4o variant in the same file. data/ holds the selected Android in the Wild and AndroidControl episode IDs with annotations; images must be downloaded from the original releases, then generate_ocr.py and check_fix.py prepare the symbolic text representation. Graphic prediction is trained by following the InstructPix2Pix project, with edit_cli.py and generate.yaml for inference; no trained weights are in the repository. 'ViMo-Empowered Agent' is a copy of AndroidWorld (with its own Apache-2.0 LICENSE) whose vimo modules post the current screenshot and a candidate action to a world-model server and score the predicted screen when choosing actions. The project page links this repository and arXiv 2504.13936. No license file is at the repository root.

- 完整记录 JSON：https://awesomecua.com/resources/github-ai-agents-2030-vimo/record.json

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 代码审核：No license file is at the repository root and the README states no license; the Apache-2.0 LICENSE inside the vendored AndroidWorld copy covers that copy only.
  来源：https://api.github.com/repos/ai-agents-2030/ViMo/git/trees/1f319fece4d3a4ac1d41b4572751bca1a10fa690?recursive=1

## 一手证据

- https://raw.githubusercontent.com/ai-agents-2030/ViMo/1f319fece4d3a4ac1d41b4572751bca1a10fa690/README.md（获取于 2026-10-19T06:59:55Z；SHA-256：3bd1ee4aef9f07f0732989b83fb9ee1631814d72b567eb3300e32dc2d9b674a4）
- https://api.github.com/repos/ai-agents-2030/ViMo/git/trees/1f319fece4d3a4ac1d41b4572751bca1a10fa690?recursive=1（获取于 2026-10-19T06:59:59Z；SHA-256：bff182c03efb5b0acd9610f4ed4ff204cb3a2fe731bc416e59924f041b308ebc）
- https://raw.githubusercontent.com/ai-agents-2030/ViMo/1f319fece4d3a4ac1d41b4572751bca1a10fa690/UI_text_prediction.py（获取于 2026-10-19T06:59:59Z；SHA-256：0723d06257b3d2fb795bc28238baaafaaf2737a684623d07ce99e25ba28c0110）
- https://raw.githubusercontent.com/ai-agents-2030/ViMo/1f319fece4d3a4ac1d41b4572751bca1a10fa690/ViMo-Empowered%20Agent/android_world/agents/vimo/vimo_reward.py（获取于 2026-10-19T06:59:59Z；SHA-256：a1dbd214d87549cd65262cdaff34d09463bfba3a74c742cb72d0912b20d9ec24）
- https://raw.githubusercontent.com/ai-agents-2030/ViMo/1f319fece4d3a4ac1d41b4572751bca1a10fa690/edit_cli.py（获取于 2026-10-19T07:00:00Z；SHA-256：bbe69cee05e986cf67f090dce46f3a748ce94539f5c3ce44ee14af45088dc14a）
- https://ai-agents-2030.github.io/ViMo/（获取于 2026-10-19T07:00:00Z；SHA-256：96f6b0485c524b937fbca9985f2630d3c5667239d9e9940b67c86e3a8e76425b）
