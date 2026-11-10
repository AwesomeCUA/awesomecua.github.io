---
title: "Shadow · 工具 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/github-ghostwright-shadow/
updated: 2026-10-20
type: tool
lang: zh-CN
---

# Shadow

macOS 应用在设备端录制屏幕、音频、输入事件和无障碍树，构建可搜索的操作片段，并通过优先使用 AX 定位、回退到经 LoRA 微调的 ShowUI-2B 来重放学到的流程。

- 目录页面：https://awesomecua.com/zh/resources/github-ghostwright-shadow/
- English：https://awesomecua.com/resources/github-ghostwright-shadow/index.md
- 原始来源：https://github.com/ghostwright/shadow
- 类型：工具
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、macOS
- 主题：录制、数据生成、GUI 定位、记忆、界面理解
- 证据核查日期：2026-10-20T08:22:38Z
- ID：github:ghostwright/shadow

## 范围记录

Requires Apple Silicon, macOS 14 or later and a source build (Swift 6, Rust, XcodeGen). GroundingOracle.swift resolves targets for the Mimicry replay system in four steps: exact accessibility-tree match, fuzzy accessibility match, a local ShowUI-2B model on MLX over a live screenshot, then a vision-model escalation. TrainingDataGenerator.swift turns recorded (screenshot, accessibility state, click) tuples into JSONL grounding examples, and LoRATrainer.swift fine-tunes ShowUI-2B on them through the mlx-vlm Python package once enough new tuples accumulate. The README describes the capture of fourteen signal types, on-device Qwen and Whisper models, a 26-tool agent runtime, and points to a separate computer-use engine from the same publisher for full computer use. Cloud model features are optional with the user's own API key.

- 完整记录 JSON：https://awesomecua.com/resources/github-ghostwright-shadow/record.json

## 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/ghostwright/shadow/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/ghostwright/shadow/HEAD/README.md（获取于 2026-10-20T08:22:38Z；SHA-256：019cacc0c585b5c26ba2a4f7fc72cec2fdb43fa02fdecdad1c0904a3fadbcbb4）
- https://raw.githubusercontent.com/ghostwright/shadow/5eef3683b0654e1a1123fe63efa015e257efcdb5/README.md（获取于 2026-10-20T08:22:15Z；SHA-256：019cacc0c585b5c26ba2a4f7fc72cec2fdb43fa02fdecdad1c0904a3fadbcbb4）
- https://raw.githubusercontent.com/ghostwright/shadow/5eef3683b0654e1a1123fe63efa015e257efcdb5/Shadow/Shadow/Intelligence/Grounding/GroundingOracle.swift（获取于 2026-10-20T08:22:15Z；SHA-256：d9e2ec54f562462e713558ca72adf8aab7c141e3fd8b2537c480ff0bf206c00f）
- https://raw.githubusercontent.com/ghostwright/shadow/5eef3683b0654e1a1123fe63efa015e257efcdb5/Shadow/Shadow/Intelligence/Grounding/LoRATrainer.swift（获取于 2026-10-20T08:22:15Z；SHA-256：c74efecb59f211eaf572a0756133bbd94ff087bac340f7e47ecb3b5436acc54f）
- https://raw.githubusercontent.com/ghostwright/shadow/5eef3683b0654e1a1123fe63efa015e257efcdb5/Shadow/Shadow/Intelligence/Grounding/TrainingDataGenerator.swift（获取于 2026-10-20T08:22:16Z；SHA-256：1550f777dfb4df1cf5ff47f1ca58bac0c928a60e2214c08baad74143e1ff5207）
- https://raw.githubusercontent.com/ghostwright/shadow/5eef3683b0654e1a1123fe63efa015e257efcdb5/LICENSE（获取于 2026-10-20T08:22:16Z；SHA-256：8c578527d5aac83a4efb4f3a19969bae14853e0f5b0646ae59afff3dc90d36fa）
- https://raw.githubusercontent.com/ghostwright/shadow/HEAD/LICENSE（获取于 2026-10-20T08:22:40Z；SHA-256：8c578527d5aac83a4efb4f3a19969bae14853e0f5b0646ae59afff3dc90d36fa）
