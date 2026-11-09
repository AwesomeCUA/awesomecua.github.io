# WindowsWorld

WindowsWorld 是跨应用的 Windows 基准，支持对任务中间步骤进行评估。

- 目录页面：https://awesomecua.com/zh/resources/github-hitsz-tmg-windowsworld/
- English：https://awesomecua.com/resources/github-hitsz-tmg-windowsworld/index.md
- 原始来源：https://github.com/HITsz-TMG/WindowsWorld
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Windows
- 主题：评测、跨应用
- 证据核查日期：2026-10-16T06:35:59Z
- ID：github:hitsz-tmg/windowsworld

- 完整记录 JSON：https://awesomecua.com/resources/github-hitsz-tmg-windowsworld/record.json

## 结构化规格

- 动作 / 输出：PyAutoGUI, UiPath Computer_13 action interface
- 评测方式：Publisher distinguishes S_int (intermediate checkpoint score on L1–L3) and S_final (final completion on L1–L4). Documented step budgets are 15/25/40/20 for L1/L2/L3/L4. Preserve level, observation mode, agent interface and checkpoint/final metric when reporting a run.
- 侧重：multi-application Windows workflows, intermediate-state and final-goal completion
- 观测：screenshot, accessibility tree, screenshot plus accessibility tree, set-of-marks
- 任务设置：interactive

### 数量记录

- 181 tasks — WindowsWorld benchmark described in the retained README（来源报告；来源：https://raw.githubusercontent.com/HITsz-TMG/WindowsWorld/HEAD/README.md）
- 17 desktop applications — WindowsWorld coverage described in the retained README（来源报告；来源：https://raw.githubusercontent.com/HITsz-TMG/WindowsWorld/HEAD/README.md）

Interactive VMware/Windows environment. The public repository includes benchmark.json, task/evaluator code and monitoring support; the README refers VM import to Installation Guide.md. Checkpoint counts, application counts and task counts are different units. Apache-2.0 is recorded for repository code; Windows, apps and VM artifacts retain separate terms.

## 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/HITsz-TMG/WindowsWorld/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/HITsz-TMG/WindowsWorld/HEAD/README.md（获取于 2026-10-16T06:35:59Z；SHA-256：9857bd8ae9f521f152761ae3bd85debe4e7471aad34c9eb47618332948bca6c9）
- https://api.github.com/repos/HITsz-TMG/WindowsWorld/git/trees/main?recursive=1（获取于 2026-10-17T14:14:05Z；SHA-256：490c9257d56f0a5214e6424e02490379b0b00ca2f7d4626fd5d14e17239d05ed）
- https://raw.githubusercontent.com/HITsz-TMG/WindowsWorld/HEAD/LICENSE（获取于 2026-10-16T06:41:59Z；SHA-256：a8d1d88a0f9cce3cdbff73b03a80dc5e5d69e3ba2443946c268815a550c9e0ec）
