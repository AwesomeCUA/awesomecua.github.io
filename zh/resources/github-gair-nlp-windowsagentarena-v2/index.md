---
title: "WindowsAgentArena-V2 · 评测基准 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/github-gair-nlp-windowsagentarena-v2/
updated: 2026-10-18
type: benchmark
lang: zh-CN
---

# WindowsAgentArena-V2

Windows 基准的修订版本，修复任务和评估器问题并支持虚拟机初始化，相关说明与 PC-Agent-E 一同提供。

- 目录页面：https://awesomecua.com/zh/resources/github-gair-nlp-windowsagentarena-v2/
- English：https://awesomecua.com/resources/github-gair-nlp-windowsagentarena-v2/index.md
- 原始来源：https://github.com/GAIR-NLP/WindowsAgentArena-V2
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Windows
- 主题：评测、跨应用、鲁棒性
- 证据核查日期：2026-10-18T04:35:17Z
- ID：github:gair-nlp/windowsagentarena-v2

## 范围记录

Repository contains executable evaluation code and task definitions. README links a separate Windows 11 VM snapshot. MIT is recorded for repository code only. Default task selection and the reported full suite have different scopes.

- 完整记录 JSON：https://awesomecua.com/resources/github-gair-nlp-windowsagentarena-v2/record.json

## 结构化规格

- 动作 / 输出：PyAutoGUI
- 评测方式：Runner exposes four observation choices and uses PyAutoGUI. count.py sums the last score in each results.json and divides by the number of traj.jsonl files, multiplying by 100; it separately reports result/trajectory/error-file coverage. This denominator counts trajectory files in the evaluated run, with the full benchmark size recorded separately.
- 侧重：Windows desktop task execution, revised task evaluators
- 观测：screenshot, accessibility tree, screenshot plus accessibility tree, set-of-marks
- 任务设置：交互式

### 数量记录

- 141 个任务 — full WindowsAgentArena-V2 suite reported by README（来源报告；来源：https://raw.githubusercontent.com/GAIR-NLP/WindowsAgentArena-V2/HEAD/README.md）
- 11 个 Windows 应用 — full suite coverage reported by README（来源报告；来源：https://raw.githubusercontent.com/GAIR-NLP/WindowsAgentArena-V2/HEAD/README.md）
- 20 个任务 ID — shipped test_custom.json selection（计算得出）（来源：https://raw.githubusercontent.com/GAIR-NLP/WindowsAgentArena-V2/HEAD/src/win-arena-container/client/evaluation_examples_windows/test_custom.json）

README sample config uses max_steps=30. The shipped selected-task index has 20 IDs; the 141-task figure has a different scope. Preserve the selected task list, trial ID, score coverage and VM snapshot when comparing runs. Docker/Windows-11 setup is required. No VM or benchmark was executed.

## 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/GAIR-NLP/WindowsAgentArena-V2/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 代码审核：Reviewed repository license declaration for code; third-party dependencies, data, weights and executable environment images are separate.
  来源：https://raw.githubusercontent.com/GAIR-NLP/WindowsAgentArena-V2/HEAD/LICENSE

## 一手证据

- https://raw.githubusercontent.com/GAIR-NLP/WindowsAgentArena-V2/HEAD/README.md（获取于 2026-10-18T04:35:17Z；SHA-256：1dd744ce565ec00b20ea5637eb7bc6112e97fb9044bd9a471f7cc4b7227ca344）
- https://api.github.com/repos/GAIR-NLP/WindowsAgentArena-V2（获取于 2026-10-18T04:33:20Z；SHA-256：0b0af02d3c2c4916dd786b868b99d60b4681927d0273a23661eb2b6db7cf9404）
- https://api.github.com/repos/GAIR-NLP/WindowsAgentArena-V2/git/trees/main?recursive=1（获取于 2026-10-18T04:35:16Z；SHA-256：638ef9ee593a3a560c1d0b3fb2bc4a9d31a3e904c0111971924a6d66e1763aa6）
- https://raw.githubusercontent.com/GAIR-NLP/WindowsAgentArena-V2/HEAD/src/win-arena-container/client/run.py（获取于 2026-10-18T04:40:39Z；SHA-256：494de9e74629ac2c55358629c0d9ba13703f36317057a3089388fbb6e80ca28f）
- https://raw.githubusercontent.com/GAIR-NLP/WindowsAgentArena-V2/HEAD/src/win-arena-container/client/evaluation_examples_windows/test_custom.json（获取于 2026-10-18T04:40:39Z；SHA-256：e45ba7fdc7555f46ad1b4cfaab79d00754909d053fc49d5bab651b0fb593439b）
- https://raw.githubusercontent.com/GAIR-NLP/WindowsAgentArena-V2/HEAD/count.py（获取于 2026-10-18T04:40:39Z；SHA-256：f12147ac78c39c72eb75f9c37b293ba7fff3209fc5758fd51c69abbd96d80a97）
- https://raw.githubusercontent.com/GAIR-NLP/WindowsAgentArena-V2/HEAD/LICENSE（获取于 2026-10-18T04:35:20Z；SHA-256：2a2d1e46940b570d60f5e2198ed27fcec6316fc8489e9660da8777dbd75aaeec）
