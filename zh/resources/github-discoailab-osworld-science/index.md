---
title: "OSWorld-Science · 评测基准 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/github-discoailab-osworld-science/
updated: 2026-10-18
type: benchmark
lang: zh-CN
---

# OSWorld-Science

在按领域划分的虚拟机中运行科学软件操作智能体，并通过任务专用的可执行评估器检查应用状态和交付成果的基准框架。

- 目录页面：https://awesomecua.com/zh/resources/github-discoailab-osworld-science/
- English：https://awesomecua.com/resources/github-discoailab-osworld-science/index.md
- 原始来源：https://github.com/DiscoAILab/OSWorld-Science
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Linux、Windows
- 主题：评测、科学工作流
- 证据核查日期：2026-10-18T12:33:40Z
- ID：github:discoailab/osworld-science

## 范围记录

The repository holds the osworld_science package (CLI, VM control, agents, evaluators), VM build scripts and tests; task data and VM images are downloaded from the gated Hugging Face dataset, and the inspected tree contains no data/ files. The built-in prompt agent follows the OSWorld PromptAgent pattern (screenshot in, pyautogui code out); a Kimi tool-calling agent is vendored from xlang-ai/OSWorld under Apache-2.0. The paper builds task images on Ubuntu, and its ANSYS configuration runs on Windows; the README says that Windows image cannot be redistributed and the EEGLAB image is not yet published. The repository LICENSE is CC BY 4.0; scientific software and vendored components keep their own terms.

- 完整记录 JSON：https://awesomecua.com/resources/github-discoailab-osworld-science/record.json

## 结构化规格

- 动作 / 输出：pyautogui code (built-in prompt agent), tool calls (vendored Kimi agent)
- 评测方式：Task-specific executable evaluators (JSON, CSV, artifact, R, SQL, Slicer and Praat checks plus author-provided scientific checks) inspect application states and collected deliverables and can award partial credit; the report command exports PASS/FAIL/VOID counts, scores, steps and costs.
- 侧重：scientific-software workflows, combined GUI and command-line interaction
- 观测：screenshots
- 任务设置：交互式

### 数量记录

- 146 个任务 — full benchmark reported in the paper, seven scientific domains（来源报告；来源：https://raw.githubusercontent.com/DiscoAILab/OSWorld-Science/HEAD/README.md）

The README states that 83.6% of tasks also allow CLI access and 16.4% are GUI-only under the recorded configurations. The published dataset includes answer keys (the private/ folder is hidden from the solver, not access-controlled), so results from models that may have trained on it are not held-out measurements. Record the code revision, task data revision, VM image, model and agent when comparing scores.

## 许可证信息

- 代码：CC-BY-4.0 — https://raw.githubusercontent.com/DiscoAILab/OSWorld-Science/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/DiscoAILab/OSWorld-Science/HEAD/README.md（获取于 2026-10-18T12:33:40Z；SHA-256：5871a62e7dac017cbb16017bc28b956aa20058193aebced9505210f34fdc7057）
- https://api.github.com/repos/DiscoAILab/OSWorld-Science/git/trees/25483148138b235212ee75c660a63e5b7bde6072?recursive=1（获取于 2026-10-18T12:33:40Z；SHA-256：470ffe57b8ce4baab4b7849aa6c01450491142c7d8e16853f2e8d91c73cbff71）
- https://raw.githubusercontent.com/DiscoAILab/OSWorld-Science/25483148138b235212ee75c660a63e5b7bde6072/src/osworld_science/agents/prompt_agent/agent.py（获取于 2026-10-18T12:32:27Z；SHA-256：59571f205d945c2a4a2eaec84bf40e681c5de302182acaafe61f0481d9de52e7）
- https://arxiv.org/html/2609.39903v1（获取于 2026-10-18T12:32:28Z；SHA-256：b4878955429b6b8d177c7d18fde30004fafd1973dda36f7d0412fb61dd2b0178）
- https://raw.githubusercontent.com/DiscoAILab/OSWorld-Science/HEAD/LICENSE（获取于 2026-10-18T12:34:15Z；SHA-256：97d24386ff776d7160b87031b259a942bd03c9939796cab6724ad5d17d2cf785）
