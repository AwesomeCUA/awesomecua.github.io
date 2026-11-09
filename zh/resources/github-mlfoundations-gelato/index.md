# Gelato

Gelato-30B-A3B 的发布代码：在 Click-100k 上使用 GRPO 训练 GUI 点击定位模型，包含 EasyR1 配置、点击奖励、定位评估脚本与日志，以及由 GPT-5 规划的 OS-World 智能体框架。

- 目录页面：https://awesomecua.com/zh/resources/github-mlfoundations-gelato/
- English：https://awesomecua.com/resources/github-mlfoundations-gelato/index.md
- 原始来源：https://github.com/mlfoundations/Gelato
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：GUI 定位、强化学习、数据生成
- 证据核查日期：2026-10-18T15:54:59Z
- ID：github:mlfoundations/gelato

## 范围记录

There is no arXiv paper; the README's citation is a GitHub @misc entry. The README describes how Click-100k was filtered (OmniParser element checks, Qwen2.5-VL-7B difficulty and GTA1-7B-2507 alignment filters) and reports 63.88% on ScreenSpot-Pro, 69.15% on OS-World-G with refusal prompting, and 58.71 ± 0.66% automated OS-World success across three runs; none of these was reproduced. It also releases a UI-TARS-1.5-7B baseline trained with the same recipe as mlfoundations/Gelato-UI-TARS-1.5-7B, which has no model card. evaluation/os-world/gelato_agent.py is a modified GTA1.5 OSWorld agent: GPT-5 plans from screenshots and its tool calls become pyautogui commands, with click targets requested from a vLLM-served grounding model; it runs inside an OSWorld checkout. The repository has no license file.

- 完整记录 JSON：https://awesomecua.com/resources/github-mlfoundations-gelato/record.json

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 代码审核：The recursive tree at commit 2a8757d4 has no LICENSE file and the README states no license, so no code license is established.
  来源：https://api.github.com/repos/mlfoundations/Gelato/git/trees/2a8757d473a63d34f71b043192d08dad61d298ee?recursive=1

## 一手证据

- https://raw.githubusercontent.com/mlfoundations/Gelato/HEAD/README.md（获取于 2026-10-18T15:54:59Z；SHA-256：437eb06553ed6d63d871d18842906b26b6148db5b0a5489064736ef6f5f0cfcf）
- https://api.github.com/repos/mlfoundations/Gelato/git/trees/2a8757d473a63d34f71b043192d08dad61d298ee?recursive=1（获取于 2026-10-18T15:53:36Z；SHA-256：264ea1121a89f66087bdc945fa132b3ffa310ca6333dbc801ed0a443764e4e4c）
- https://raw.githubusercontent.com/mlfoundations/Gelato/2a8757d473a63d34f71b043192d08dad61d298ee/training_configs/README.md（获取于 2026-10-18T15:53:37Z；SHA-256：c2a6c7ebe068b732f3e2cf21ee085c1ca375e4c044e39a053bd34e74c0287669）
- https://raw.githubusercontent.com/mlfoundations/Gelato/2a8757d473a63d34f71b043192d08dad61d298ee/evaluation/os-world/gelato_agent.py（获取于 2026-10-18T15:53:37Z；SHA-256：060968a137ee7cd396722252742ef8f7a26e81504e1d36d5110c70a25f71d445）
- https://raw.githubusercontent.com/mlfoundations/Gelato/2a8757d473a63d34f71b043192d08dad61d298ee/README.md（获取于 2026-10-18T15:53:38Z；SHA-256：437eb06553ed6d63d871d18842906b26b6148db5b0a5489064736ef6f5f0cfcf）
