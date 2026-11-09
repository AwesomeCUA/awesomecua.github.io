# 计算机使用智能体模型

计算机使用模型是读取屏幕、输出目标坐标或动作的视觉语言模型和 GUI 专用检查点。条目包括模型系列和已发布的检查点，其中许多托管在 Hugging Face。

> AwesomeCUA 目录收录 351 条已审核模型。每条附有完整注释、一手证据和许可证信息。快照：2026-11-09T20:03:14Z。

HTML 页面：https://awesomecua.com/zh/categories/model/ · [English](https://awesomecua.com/categories/model/index.md) · 目录索引：https://awesomecua.com/llms.txt · API：https://awesomecua.com/api/v1/resources.json

## 怎么选

| 模型 | 平台 | 许可证 | 论文 | 提及 |
| --- | --- | --- | --- | --- |
| [UI-TARS](https://awesomecua.com/resources/github-bytedance-ui-tars/) | 跨平台 | [Apache-2.0（代码）](https://raw.githubusercontent.com/bytedance/UI-TARS/HEAD/LICENSE) | [arXiv 2501.12326](https://awesomecua.com/resources/arxiv-2501-12326/) | 25 |
| [SeeClick](https://awesomecua.com/resources/github-njucckevin-seeclick/) | 跨平台 | [Apache-2.0（代码）](https://raw.githubusercontent.com/njucckevin/SeeClick/HEAD/LICENSE) | [arXiv 2401.10935](https://awesomecua.com/resources/arxiv-2401-10935/) | 18 |
| [Qwen2-VL-7B-Instruct](https://awesomecua.com/resources/url-b9c90048411606b00db0/) | — | [apache-2.0（权重）](https://huggingface.co/Qwen/Qwen2-VL-7B-Instruct) | — | 11 |
| [Aguvis](https://awesomecua.com/resources/github-xlang-ai-aguvis/) | 跨平台 | — | [arXiv 2412.04454](https://awesomecua.com/resources/arxiv-2412-04454/) | 8 |
| [GUI-Actor](https://awesomecua.com/resources/github-microsoft-gui-actor/) | 跨平台 | [MIT（代码）](https://raw.githubusercontent.com/microsoft/GUI-Actor/HEAD/LICENSE) | [arXiv 2506.03143](https://awesomecua.com/resources/arxiv-2506-03143/) | 7 |
| [Holo4 27B BF16](https://awesomecua.com/resources/url-acd43f38167ba02e7ff8/) | 网页 · 桌面 · 跨平台 | [CC-BY-NC-4.0（权重）](https://huggingface.co/Hcompany/Holo4-27B/raw/4de03cfeee1d930b616bfd4817570293f29ad8b9/README.md) | — | 7 |

## 常见问题

### 目录中被提及最多的模型有哪些？

[UI-TARS](https://awesomecua.com/resources/github-bytedance-ui-tars/)（25 条记录）、[SeeClick](https://awesomecua.com/resources/github-njucckevin-seeclick/)（18 条记录）和 [Qwen2-VL-7B-Instruct](https://awesomecua.com/resources/url-b9c90048411606b00db0/)（11 条记录）在其他目录记录的已审核来源中被提及最多。

### 这些模型覆盖哪些平台？

在 351 条已审核模型中，桌面 143 条、网页 141 条、跨平台 129 条、手机 85 条；52 条未记录平台。标注多个平台的条目在每个平台下各计一次。

### 有多少模型托管在 Hugging Face？

351 条模型中有 262 条链接到 Hugging Face 模型仓库，例如 [Qwen2-VL-7B-Instruct](https://awesomecua.com/resources/url-b9c90048411606b00db0/)、[Holo4 27B BF16](https://awesomecua.com/resources/url-acd43f38167ba02e7ff8/) 和 [Holo4 35B-A3B BF16](https://awesomecua.com/resources/url-16083a0225a60882c704/)。

### 模型使用哪些许可证？

最常见的声明许可证是 Apache-2.0（185 条）、MIT（68 条）和标为 other 的许可证（25 条）。351 条中有 46 条未记录声明的许可证。

### 这个列表按什么排序？

按在已审核来源中提及该条目的目录记录数排序，多者在前，数量相同时按名称排序。列表上方的排序菜单可切换为 A–Z。

---

## UI-TARS

原生 GUI 智能体模型；UI-TARS-1.5 增加经强化学习训练的行动前推理并开放 7B 检查点，UI-TARS-2 扩展至游戏、代码和工具使用。

- 目录页面：https://awesomecua.com/resources/github-bytedance-ui-tars/
- 原始来源：https://github.com/bytedance/UI-TARS
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：GUI 定位、规划
- 证据核查日期：2026-10-16T06:35:59Z
- ID：github:bytedance/ui-tars

- 完整记录 JSON：https://awesomecua.com/resources/github-bytedance-ui-tars/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/bytedance/UI-TARS/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/bytedance/UI-TARS/HEAD/README.md（获取于 2026-10-16T06:35:59Z；SHA-256：0c4feb17b657c0c9a71d7e0c5e2142abbd19bb5cff22e6cd3b6b082644c98ee7）
- https://raw.githubusercontent.com/bytedance/UI-TARS/HEAD/LICENSE（获取于 2026-10-16T06:42:00Z；SHA-256：c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4）

---

## SeeClick

经过训练、用于定位可视化界面元素的 GUI 定位模型。

- 目录页面：https://awesomecua.com/resources/github-njucckevin-seeclick/
- 原始来源：https://github.com/njucckevin/SeeClick
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：GUI 定位
- 证据核查日期：2026-10-16T06:36:00Z
- ID：github:njucckevin/seeclick

- 完整记录 JSON：https://awesomecua.com/resources/github-njucckevin-seeclick/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/njucckevin/SeeClick/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/njucckevin/SeeClick/HEAD/readme.md（获取于 2026-10-16T06:36:00Z；SHA-256：c4112415bec58fc77f9a1e8fa98f8d602c5d382747579dfda9f866900c55995c）
- https://raw.githubusercontent.com/njucckevin/SeeClick/HEAD/LICENSE（获取于 2026-10-16T06:42:00Z；SHA-256：43070e2d4e532684de521b885f385d0841030efa2b1a20bafb76133a5e1379c1）

---

## Qwen2-VL-7B-Instruct

这款 7B 指令微调多模态模型处理图像和视频；模型卡还介绍了依据视觉输入操作移动设备的能力。

- 目录页面：https://awesomecua.com/resources/url-b9c90048411606b00db0/
- 原始来源：https://huggingface.co/Qwen/Qwen2-VL-7B-Instruct
- 类型：模型
- 审核状态：已审核
- 范围：相关研究
- 运行环境：unspecified
- 主题：手机操作、界面理解
- 证据核查日期：2026-11-09T05:05:02Z
- ID：url:b9c90048411606b00db0

### 范围记录

The repository contains model weight shards and inference examples using Transformers. The card declares an Apache 2.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-b9c90048411606b00db0/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/Qwen/Qwen2-VL-7B-Instruct

### 一手证据

- https://huggingface.co/api/models/Qwen/Qwen2-VL-7B-Instruct（获取于 2026-11-09T05:05:02Z；SHA-256：650d50a34596177605aed04826278f05cc1a146486913e05efe7db71803b50d0）
- https://huggingface.co/api/models/Qwen/Qwen2-VL-7B-Instruct（获取于 2026-11-09T05:05:02Z；SHA-256：650d50a34596177605aed04826278f05cc1a146486913e05efe7db71803b50d0）

---

## Aguvis

采用统一操作表示的视觉 GUI 智能体模型。

- 目录页面：https://awesomecua.com/resources/github-xlang-ai-aguvis/
- 原始来源：https://github.com/xlang-ai/aguvis
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：GUI 定位、规划
- 证据核查日期：2026-10-16T06:36:00Z
- ID：github:xlang-ai/aguvis

- 完整记录 JSON：https://awesomecua.com/resources/github-xlang-ai-aguvis/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/xlang-ai/aguvis/HEAD/README.md（获取于 2026-10-16T06:36:00Z；SHA-256：2dd9f36b818c1b7b6bd772ba8575f6c0ebab6d9e0d307edcc2f196f3e4ba502e）

---

## GUI-Actor

GUI-Actor 是利用注意力机制定位操作位置的 GUI 定位模型。

- 目录页面：https://awesomecua.com/resources/github-microsoft-gui-actor/
- 原始来源：https://github.com/microsoft/GUI-Actor
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：GUI 定位
- 证据核查日期：2026-10-16T06:36:00Z
- ID：github:microsoft/gui-actor

- 完整记录 JSON：https://awesomecua.com/resources/github-microsoft-gui-actor/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/microsoft/GUI-Actor/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/microsoft/GUI-Actor/HEAD/README.md（获取于 2026-10-16T06:36:00Z；SHA-256：2dafdebf2fa1e0a5db871addd103e50cb55625f0108c757708029e885920ee4e）
- https://raw.githubusercontent.com/microsoft/GUI-Actor/HEAD/LICENSE（获取于 2026-10-16T06:42:00Z；SHA-256：98a96c38494df4963951e32b81ec4effebe4c8a812ab8d9e7d185d59e86fe2fc）

---

## Holo4 27B BF16

H Company 基于 Qwen3.8-27B 构建的 27B 稠密计算机使用检查点；外部执行框架向其发送截图和工具结果，并执行其请求的点击、输入、代码及工具调用。

- 目录页面：https://awesomecua.com/resources/url-acd43f38167ba02e7ff8/
- 原始来源：https://huggingface.co/Hcompany/Holo4-27B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、桌面、跨平台
- 主题：GUI 定位、动作预测、工具集成
- 证据核查日期：2026-10-18T16:09:32Z
- ID：url:acd43f38167ba02e7ff8

### 范围记录

This is the full-precision BF16 Holo4-27B repository; the card lists FP8, NVFP4 and Q4 GGUF builds as separate repositories and names web, desktop and mobile as target environments. config.json declares Qwen3_5ForConditionalGeneration, while the card and Hub metadata name Qwen/Qwen3.8-27B as the base. The manifest lists 18 Safetensors shards and the Hub reports 27,356,728,560 BF16 parameters. The card declares CC BY-NC 4.0 for the weights and also ships the base model's Apache-2.0 text. OSWorld, OSWorld 2.0 and AutomationBench scores and costs on the card are publisher claims.

- 完整记录 JSON：https://awesomecua.com/resources/url-acd43f38167ba02e7ff8/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：CC-BY-NC-4.0 — https://huggingface.co/Hcompany/Holo4-27B/raw/4de03cfeee1d930b616bfd4817570293f29ad8b9/README.md

- 权重审核：Publisher model-card declaration for the Holo4-27B weights, matched by the repository's CC BY-NC 4.0 LICENSE file; the bundled Apache-2.0 text covers the Qwen base model, and code and training-data terms are separate.
  来源：https://huggingface.co/Hcompany/Holo4-27B/raw/4de03cfeee1d930b616bfd4817570293f29ad8b9/README.md, https://huggingface.co/Hcompany/Holo4-27B/raw/4de03cfeee1d930b616bfd4817570293f29ad8b9/LICENSE

### 一手证据

- https://huggingface.co/Hcompany/Holo4-27B/raw/4de03cfeee1d930b616bfd4817570293f29ad8b9/README.md（获取于 2026-10-18T16:09:32Z；SHA-256：2254c1065a1d88bc491a93e060c5c55e25edc90a34c935a457b5dc1466a1c123）
- https://huggingface.co/api/models/Hcompany/Holo4-27B（获取于 2026-10-18T16:09:31Z；SHA-256：32d1105195420bd56f24e9267bbbfd543a407d53468318c2387695fd71faa480）
- https://huggingface.co/Hcompany/Holo4-27B/raw/4de03cfeee1d930b616bfd4817570293f29ad8b9/config.json（获取于 2026-10-18T16:09:32Z；SHA-256：c0dac651abc94fc028da5ecef306b23c795ec5ebbd3f30b3772c6995f34c8a44）
- https://huggingface.co/Hcompany/Holo4-27B/raw/4de03cfeee1d930b616bfd4817570293f29ad8b9/LICENSE（获取于 2026-10-18T16:09:33Z；SHA-256：41003d4a74749c0220e33dd415042164b5a1093ed401f36277234f772d22d3d0）
- https://huggingface.co/Hcompany/Holo4-27B/raw/4de03cfeee1d930b616bfd4817570293f29ad8b9/README.md（获取于 2026-10-18T16:09:32Z；SHA-256：2254c1065a1d88bc491a93e060c5c55e25edc90a34c935a457b5dc1466a1c123）

---

## Holo4 35B-A3B BF16

基于 Qwen3.6 的计算机使用模型检查点，设计用于通过外部智能体运行框架请求 GUI 操作、代码执行和工具调用。

- 目录页面：https://awesomecua.com/resources/url-16083a0225a60882c704/
- 原始来源：https://huggingface.co/Hcompany/Holo4-35B-A3B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、网页
- 主题：GUI 定位、动作预测、工具集成
- 证据核查日期：2026-10-17T04:11:45Z
- ID：url:16083a0225a60882c704

### 范围记录

The public manifest contains 26 safetensors shards for the BF16 checkpoint and the card declares Apache-2.0. Quantized FP8/NVFP4/GGUF variants belong to the same model release. The card also contains demos and scores for Holo4-27B. No training corpus or runtime was downloaded.

- 完整记录 JSON：https://awesomecua.com/resources/url-16083a0225a60882c704/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/Hcompany/Holo4-35B-A3B/raw/main/README.md

### 一手证据

- https://huggingface.co/Hcompany/Holo4-35B-A3B/raw/main/README.md（获取于 2026-10-17T04:11:45Z；SHA-256：4f1aa5006aa9adaeb5ac549e5a5f8ea164352714a00528b1afb8602812d45b44）
- https://huggingface.co/api/models/Hcompany/Holo4-35B-A3B（获取于 2026-10-17T04:11:45Z；SHA-256：7a41bdbfb4a300302a7d3633f12962505d56ba874a37292afccbd48b1bec8287）
- https://huggingface.co/Hcompany/Holo4-35B-A3B/raw/main/README.md（获取于 2026-10-17T04:11:45Z；SHA-256：4f1aa5006aa9adaeb5ac549e5a5f8ea164352714a00528b1afb8602812d45b44）

---

## OpenCUA

开放的计算机使用研究技术栈，包括模型和训练资源。

- 目录页面：https://awesomecua.com/resources/github-xlang-ai-opencua/
- 原始来源：https://github.com/xlang-ai/OpenCUA
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：数据生成、规划
- 证据核查日期：2026-10-16T06:35:59Z
- ID：github:xlang-ai/opencua

- 完整记录 JSON：https://awesomecua.com/resources/github-xlang-ai-opencua/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/xlang-ai/OpenCUA/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/xlang-ai/OpenCUA/HEAD/README.md（获取于 2026-10-16T06:35:59Z；SHA-256：91fed11b234775bde91bb766ee65e1015897ced6668de8e80418fcee09f8f75d）
- https://raw.githubusercontent.com/xlang-ai/OpenCUA/HEAD/LICENSE（获取于 2026-10-16T06:42:00Z；SHA-256：a53fdf6cdedc93c99879b2881d8626d61b09e9a03841b3dc6ebe4e267f4fb2bf）

---

## ScaleCUA

使用跨平台交互数据训练的计算机使用模型系列。

- 目录页面：https://awesomecua.com/resources/github-opengvlab-scalecua/
- 原始来源：https://github.com/OpenGVLab/ScaleCUA
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：数据生成、规划
- 证据核查日期：2026-10-16T06:35:59Z
- ID：github:opengvlab/scalecua

- 完整记录 JSON：https://awesomecua.com/resources/github-opengvlab-scalecua/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/OpenGVLab/ScaleCUA/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/OpenGVLab/ScaleCUA/HEAD/README.md（获取于 2026-10-16T06:35:59Z；SHA-256：0538701c860afedd5d63c3839039699d8e5a14977d5c339b187ed13ad666c8fa）
- https://raw.githubusercontent.com/OpenGVLab/ScaleCUA/HEAD/LICENSE（获取于 2026-10-16T06:42:00Z；SHA-256：c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4）

---

## UI-TARS 1.5 7B

UI-TARS 1.5 GUI 智能体检查点，采用 Qwen2.5-VL 架构，约有 8.3B 个以 FP32 存储的参数；以 Apache-2.0 协议发布，供 Transformers 处理英文图文到文本任务。

- 目录页面：https://awesomecua.com/resources/url-4d32ad3682ae2d71c178/
- 原始来源：https://huggingface.co/ByteDance-Seed/UI-TARS-1.5-7B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：GUI 定位、规划
- 证据核查日期：2026-10-16T06:50:49Z
- ID：url:4d32ad3682ae2d71c178

- 完整记录 JSON：https://awesomecua.com/resources/url-4d32ad3682ae2d71c178/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/ByteDance-Seed/UI-TARS-1.5-7B

### 一手证据

- https://huggingface.co/api/models/ByteDance-Seed/UI-TARS-1.5-7B（获取于 2026-10-16T06:50:49Z；SHA-256：73b8964fb8ae2c25009dd4621549a3549d357c4c5c766ef7ed441acaef7efbc9）
- https://huggingface.co/api/models/ByteDance-Seed/UI-TARS-1.5-7B（获取于 2026-10-16T06:50:49Z；SHA-256：73b8964fb8ae2c25009dd4621549a3549d357c4c5c766ef7ed441acaef7efbc9）

---

## Hcompany/Holo4-35B-A3B-GGUF

面向计算机使用的 GGUF 视觉语言模型。它通过智能体运行框架接收屏幕截图和工具结果，并请求点击、输入、执行代码或调用工具。

- 目录页面：https://awesomecua.com/resources/url-d96a6dcdd2aa622c523b/
- 原始来源：https://huggingface.co/Hcompany/Holo4-35B-A3B-GGUF
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、网页、桌面
- 主题：动作预测、界面理解、工具集成
- 证据核查日期：2026-11-09T06:16:34Z
- ID：url:d96a6dcdd2aa622c523b

### 范围记录

The card identifies a Q4_K_M GGUF checkpoint based on Qwen3.6-35B-A3B and declares Apache License 2.0 for the weights.

- 完整记录 JSON：https://awesomecua.com/resources/url-d96a6dcdd2aa622c523b/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/Hcompany/Holo4-35B-A3B-GGUF

### 一手证据

- https://huggingface.co/api/models/Hcompany/Holo4-35B-A3B-GGUF（获取于 2026-11-09T06:16:34Z；SHA-256：8f3181e82dc6e1540c5eb1dd0e4e6a3935e267c60921b2eb790274e9f9e3e123）
- https://huggingface.co/api/models/Hcompany/Holo4-35B-A3B-GGUF（获取于 2026-11-09T06:16:34Z；SHA-256：8f3181e82dc6e1540c5eb1dd0e4e6a3935e267c60921b2eb790274e9f9e3e123）

---

## Hcompany/Holo4-35B-A3B-NVFP4

Holo4-35B-A3B-NVFP4 是面向计算机使用的 NVFP4 视觉语言模型；它接收截图和工具结果，并通过智能体运行框架请求界面操作。

- 目录页面：https://awesomecua.com/resources/url-ef732d252e9eb9b04e20/
- 原始来源：https://huggingface.co/Hcompany/Holo4-35B-A3B-NVFP4
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、桌面、网页
- 主题：动作预测、GUI 定位、工具集成
- 证据核查日期：2026-11-09T06:16:33Z
- ID：url:ef732d252e9eb9b04e20

### 范围记录

The repository lists NVFP4 safetensors weights and configuration files. The card names Qwen3.6-35B-A3B as its base model and declares an Apache 2.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-ef732d252e9eb9b04e20/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/Hcompany/Holo4-35B-A3B-NVFP4

### 一手证据

- https://huggingface.co/api/models/Hcompany/Holo4-35B-A3B-NVFP4（获取于 2026-11-09T06:16:33Z；SHA-256：a9800ea79ca5e9f879cff4eef1b52303ce4c71dd6729d6f355ca65f45e4b10ce）
- https://huggingface.co/api/models/Hcompany/Holo4-35B-A3B-NVFP4（获取于 2026-11-09T06:16:33Z；SHA-256：a9800ea79ca5e9f879cff4eef1b52303ce4c71dd6729d6f355ca65f45e4b10ce）

---

## Holo4-27B-NVFP4

Holo4 的量化视觉语言模型检查点用于网页、桌面和移动界面操作；配套运行框架可执行模型请求的界面操作与工具调用。

- 目录页面：https://awesomecua.com/resources/url-b1457a20d437732b60f7/
- 原始来源：https://huggingface.co/Hcompany/Holo4-27B-NVFP4
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、网页、桌面
- 主题：界面理解、工具集成、网页导航、手机操作
- 证据核查日期：2026-11-09T05:05:20Z
- ID：url:b1457a20d437732b60f7

### 范围记录

The card identifies Qwen3.8-27B as the base model. It declares CC BY-NC 4.0 for the weights and says the repository includes both that license and the base model's Apache license.

- 完整记录 JSON：https://awesomecua.com/resources/url-b1457a20d437732b60f7/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：cc-by-nc-4.0 — https://huggingface.co/Hcompany/Holo4-27B-NVFP4

### 一手证据

- https://huggingface.co/api/models/Hcompany/Holo4-27B-NVFP4（获取于 2026-11-09T05:05:20Z；SHA-256：e4ac619f39056f8679cedd3b4b462202f0495f0bf6dc0a82c3ce577f0c72cb90）
- https://huggingface.co/api/models/Hcompany/Holo4-27B-NVFP4（获取于 2026-11-09T05:05:20Z；SHA-256：e4ac619f39056f8679cedd3b4b462202f0495f0bf6dc0a82c3ce577f0c72cb90）

---

## Holo4-35B-A3B-FP8

面向计算机使用的 FP8 视觉语言模型。配合智能体运行框架，它根据屏幕截图和工具结果发出点击、输入、代码及工具调用请求。

- 目录页面：https://awesomecua.com/resources/url-f3a7296977a39c37f693/
- 原始来源：https://huggingface.co/Hcompany/Holo4-35B-A3B-FP8
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、网页、桌面
- 主题：界面理解、动作预测、工具集成
- 证据核查日期：2026-11-09T05:05:14Z
- ID：url:f3a7296977a39c37f693

### 范围记录

The repository provides FP8 safetensors weights and configuration files. The card names the hai-agents harness for execution and declares the weights available under Apache License 2.0.

- 完整记录 JSON：https://awesomecua.com/resources/url-f3a7296977a39c37f693/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/Hcompany/Holo4-35B-A3B-FP8

### 一手证据

- https://huggingface.co/api/models/Hcompany/Holo4-35B-A3B-FP8（获取于 2026-11-09T05:05:14Z；SHA-256：370ea84521180e0f9e981b0e5b58ee1d30390e2f0efa9e049bd1c65ec534db15）
- https://huggingface.co/api/models/Hcompany/Holo4-35B-A3B-FP8（获取于 2026-11-09T05:05:14Z；SHA-256：370ea84521180e0f9e981b0e5b58ee1d30390e2f0efa9e049bd1c65ec534db15）

---

## OS-Atlas

OS-Atlas GUI 操作模型，包括基于 InternVL2-4B 和 Qwen2-VL-7B-Instruct 微调的定位基础模型，可接收任意尺寸图像并输出 0-1000 的相对坐标。

- 目录页面：https://awesomecua.com/resources/github-os-copilot-os-atlas/
- 原始来源：https://github.com/OS-Copilot/OS-Atlas
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：GUI 定位
- 证据核查日期：2026-10-16T06:36:00Z
- ID：github:os-copilot/os-atlas

- 完整记录 JSON：https://awesomecua.com/resources/github-os-copilot-os-atlas/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/OS-Copilot/OS-Atlas/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/OS-Copilot/OS-Atlas/HEAD/README.md（获取于 2026-10-16T06:36:00Z；SHA-256：021cf14ec9482d1dab04dfeaadc3e39cdc405a284991cd540f5eeae7dea47a12）
- https://raw.githubusercontent.com/OS-Copilot/OS-Atlas/HEAD/LICENSE（获取于 2026-10-16T06:42:00Z；SHA-256：c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4）

---

## ShowUI

Show Lab 与 Microsoft 推出的轻量级 GUI 智能体视觉语言操作模型，同时发布了 UI 引导的 token 选择方法、训练代码、ShowUI-web 和 ShowUI-desktop 数据集，以及 vLLM 推理支持。

- 目录页面：https://awesomecua.com/resources/github-showlab-showui/
- 原始来源：https://github.com/showlab/ShowUI
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：GUI 定位、效率
- 证据核查日期：2026-10-16T06:36:00Z
- ID：github:showlab/showui

- 完整记录 JSON：https://awesomecua.com/resources/github-showlab-showui/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/showlab/ShowUI/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/showlab/ShowUI/HEAD/README.md（获取于 2026-10-16T06:36:00Z；SHA-256：730e51422c0ebe00cb2a1a8f4510d9914b1ea735fdb06445fde2b243da80bdd4）
- https://raw.githubusercontent.com/showlab/ShowUI/HEAD/LICENSE（获取于 2026-10-16T06:42:00Z；SHA-256：1b4977f976211c2644742e3a56cf75ecffb4c7c31d1bce456875123ba8bcd342）

---

## Holo4 27B FP8

Holo4-27B 计算机使用模型的 FP8 分块量化版本；外部运行框架向其发送截图和工具结果，并执行其请求的点击、输入、代码及工具调用。

- 目录页面：https://awesomecua.com/resources/url-354c5b46fd423f9b1b85/
- 原始来源：https://huggingface.co/Hcompany/Holo4-27B-FP8
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、桌面、跨平台
- 主题：GUI 定位、动作预测、工具集成、效率
- 证据核查日期：2026-10-18T15:44:49Z
- ID：url:354c5b46fd423f9b1b85

### 范围记录

Hub metadata marks this repository as a quantized derivative of Hcompany/Holo4-27B. Its config.json declares Qwen3_5ForConditionalGeneration with FP8 block quantization of linear layers, while the card names Qwen3.8-27B as the base; the manifest lists 18 Safetensors shards. The card declares CC BY-NC 4.0 for these weights and also ships the base model's Apache-2.0 license. OSWorld and other scores on the card are publisher claims for Holo4-27B.

- 完整记录 JSON：https://awesomecua.com/resources/url-354c5b46fd423f9b1b85/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：CC-BY-NC-4.0 — https://huggingface.co/Hcompany/Holo4-27B-FP8/raw/18dcb4d5aeb558d505633af7bc5609d7ab046e81/README.md

- 权重审核：Publisher model-card declaration for these quantized weights; the bundled Apache-2.0 text covers the Qwen base model, and code and training-data terms are separate.
  来源：https://huggingface.co/Hcompany/Holo4-27B-FP8/raw/18dcb4d5aeb558d505633af7bc5609d7ab046e81/README.md

### 一手证据

- https://huggingface.co/Hcompany/Holo4-27B-FP8/raw/18dcb4d5aeb558d505633af7bc5609d7ab046e81/README.md（获取于 2026-10-18T15:44:49Z；SHA-256：f474e4100f3e00498129e6cc35fafd5cbe3487e8e557a701650550a6199b4d54）
- https://huggingface.co/api/models/Hcompany/Holo4-27B-FP8（获取于 2026-10-18T15:44:49Z；SHA-256：e19d56b53a3e7d316f1a9fb76c55cfb29228a0284798fbadde5391cd0f24d73a）
- https://huggingface.co/Hcompany/Holo4-27B-FP8/raw/18dcb4d5aeb558d505633af7bc5609d7ab046e81/config.json（获取于 2026-10-18T15:44:50Z；SHA-256：06bb68e88c7f4eaed33710b6639ea3a4dfa4a24d413be16121fd8d7551e4e761）
- https://huggingface.co/Hcompany/Holo4-27B-FP8/raw/18dcb4d5aeb558d505633af7bc5609d7ab046e81/README.md（获取于 2026-10-18T15:44:49Z；SHA-256：f474e4100f3e00498129e6cc35fafd5cbe3487e8e557a701650550a6199b4d54）

---

## Holo4 27B GGUF

Holo4-27B 计算机使用模型的 Q4_K_M GGUF 版本，配有独立的 F16 视觉投影器；外部执行框架发送截图和工具结果，并执行其请求的动作和工具调用。

- 目录页面：https://awesomecua.com/resources/url-acfd6d395d67ce8011bb/
- 原始来源：https://huggingface.co/Hcompany/Holo4-27B-GGUF
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、桌面、跨平台
- 主题：GUI 定位、动作预测、工具集成、效率
- 证据核查日期：2026-10-19T07:14:40Z
- ID：url:acfd6d395d67ce8011bb

### 范围记录

Hub metadata marks this repository as a quantized derivative of Hcompany/Holo4-27B. It holds one Q4_K_M language-model GGUF file and an F16 multimodal projector GGUF; the Hub's GGUF metadata reports the qwen35 architecture, 26,895,998,464 parameters and an importance-matrix quantization. The card text is shared with the BF16 release, so its specification and its OSWorld and other scores describe Holo4-27B. The card declares CC BY-NC 4.0 for the weights and also ships the base model's Apache-2.0 text.

- 完整记录 JSON：https://awesomecua.com/resources/url-acfd6d395d67ce8011bb/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：CC-BY-NC-4.0 — https://huggingface.co/Hcompany/Holo4-27B-GGUF/raw/045834b6864fb5cee8e9c72e47ef4c19140ce932/README.md

- 权重审核：Publisher model-card declaration for these GGUF weights, matched by the repository's CC BY-NC 4.0 LICENSE file; the bundled Apache-2.0 text covers the Qwen base model, and code and training-data terms are separate.
  来源：https://huggingface.co/Hcompany/Holo4-27B-GGUF/raw/045834b6864fb5cee8e9c72e47ef4c19140ce932/README.md, https://huggingface.co/Hcompany/Holo4-27B-GGUF/raw/045834b6864fb5cee8e9c72e47ef4c19140ce932/LICENSE

### 一手证据

- https://huggingface.co/Hcompany/Holo4-27B-GGUF/raw/045834b6864fb5cee8e9c72e47ef4c19140ce932/README.md（获取于 2026-10-19T07:14:40Z；SHA-256：066e6b3fa8220001ebb98747364eccb95d0ea3dd736d5b9ba5d704f9092a098d）
- https://huggingface.co/api/models/Hcompany/Holo4-27B-GGUF/revision/045834b6864fb5cee8e9c72e47ef4c19140ce932（获取于 2026-10-19T07:14:36Z；SHA-256：5828a5282e7379d3712843d35f52f4cd82e2864871cef7d1df3128fdbf934d46）
- https://huggingface.co/Hcompany/Holo4-27B-GGUF/raw/045834b6864fb5cee8e9c72e47ef4c19140ce932/LICENSE（获取于 2026-10-18T16:11:12Z；SHA-256：41003d4a74749c0220e33dd415042164b5a1093ed401f36277234f772d22d3d0）
- https://huggingface.co/Hcompany/Holo4-27B-GGUF/raw/045834b6864fb5cee8e9c72e47ef4c19140ce932/README.md（获取于 2026-10-18T16:11:11Z；SHA-256：066e6b3fa8220001ebb98747364eccb95d0ea3dd736d5b9ba5d704f9092a098d）

---

## Holotron4 30B-A3B

H Company 的 Holo4 系列中基于 NemotronH Nano Omni 的计算机使用检查点；外部框架向其发送截图和工具结果，并执行其请求的点击、输入、代码和工具调用。

- 目录页面：https://awesomecua.com/resources/url-7638e3f688374cea2217/
- 原始来源：https://huggingface.co/Hcompany/Holotron4-30B-A3B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：GUI 定位、动作预测、工具集成
- 证据核查日期：2026-10-18T15:52:15Z
- ID：url:7638e3f688374cea2217

### 范围记录

The pinned Hub manifest lists 17 BF16 safetensors shards (about 33.0B parameters by the Hub count) with custom modeling code, and config.json declares the NemotronH_Nano_Omni_Reasoning_V3 architecture. The card says the model is built on NVIDIA Nemotron 3 Nano Omni and lists it in the Holo4 family beside the Qwen-based Holo4 checkpoints; its YAML names no base_model, so none is recorded. The card declares the NVIDIA Open Model Agreement for the weights (Hub license 'other'). OSWorld, OSWorld 2.0, AutomationBench, PinchBench and ALE scores on the card are publisher figures; the FreeCAD demo on the card shows Holo4-27B, a separate checkpoint. An FP8 repository is a separate release. No weights were downloaded or run.

- 完整记录 JSON：https://awesomecua.com/resources/url-7638e3f688374cea2217/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：other — https://huggingface.co/Hcompany/Holotron4-30B-A3B/raw/52184310f6c916e5e7d4b8f055af49fc41642574/README.md

### 一手证据

- https://huggingface.co/Hcompany/Holotron4-30B-A3B/raw/52184310f6c916e5e7d4b8f055af49fc41642574/README.md（获取于 2026-10-18T15:52:15Z；SHA-256：9095b7a5137876923d527f739c3013c3a12d84a7178b83502b7457058a8e081c）
- https://huggingface.co/api/models/Hcompany/Holotron4-30B-A3B/revision/52184310f6c916e5e7d4b8f055af49fc41642574（获取于 2026-10-18T15:51:48Z；SHA-256：cac950916e085d7206498a31f0b8d9cecd52090d6e04f6c2a34832589e080050）
- https://huggingface.co/Hcompany/Holotron4-30B-A3B/raw/52184310f6c916e5e7d4b8f055af49fc41642574/config.json（获取于 2026-10-18T15:51:48Z；SHA-256：b008470b6b727f11fd65a16f9e037553995b04621868e389b2480fed8ac908da）
- https://huggingface.co/Hcompany/Holotron4-30B-A3B/raw/52184310f6c916e5e7d4b8f055af49fc41642574/README.md（获取于 2026-10-18T15:52:15Z；SHA-256：9095b7a5137876923d527f739c3013c3a12d84a7178b83502b7457058a8e081c）

---

## Holotron4 30B-A3B FP8

H Company 基于 Nemotron 3 Nano Omni 构建的计算机使用模型 Holotron4-30B-A3B 的 FP8 版本；外部框架发送截图和工具结果，并执行其请求的点击、输入、代码和工具调用。

- 目录页面：https://awesomecua.com/resources/url-a72a105e755836154412/
- 原始来源：https://huggingface.co/Hcompany/Holotron4-30B-A3B-FP8
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：动作预测、工具集成、效率
- 证据核查日期：2026-10-19T06:18:46Z
- ID：url:a72a105e755836154412

### 范围记录

The card lists this repository as the FP8 checkpoint of Holotron4-30B-A3B within the Holo4 family, but its Hub metadata declares no base_model link. config.json declares NemotronH_Nano_Omni_Reasoning_V3 with compressed-tensors FP8 quantization of linear layers (per-channel weights, dynamic per-token activations), and the manifest lists 17 Safetensors shards. The card names no target platforms; its GUI scores are OSWorld and OSWorld 2.0, alongside MCP and terminal benchmarks. Those scores are publisher claims for Holotron4-30B-A3B. The card places the weights under the NVIDIA Open Model Agreement.

- 完整记录 JSON：https://awesomecua.com/resources/url-a72a105e755836154412/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：NVIDIA Open Model Agreement — https://huggingface.co/Hcompany/Holotron4-30B-A3B-FP8/raw/c2114d9636458189f132f9de5d912bcbc30403dd/README.md

- 权重审核：Publisher model-card declaration for these FP8 weights (NVIDIA Open Model Agreement, linked from the card); code and training-data terms are separate.
  来源：https://huggingface.co/Hcompany/Holotron4-30B-A3B-FP8/raw/c2114d9636458189f132f9de5d912bcbc30403dd/README.md

### 一手证据

- https://huggingface.co/Hcompany/Holotron4-30B-A3B-FP8/raw/c2114d9636458189f132f9de5d912bcbc30403dd/README.md（获取于 2026-10-19T06:18:46Z；SHA-256：a193d5b0c7f85a97361d4655240cfe549a244c31ac7f04befe14ae852806ac26）
- https://huggingface.co/api/models/Hcompany/Holotron4-30B-A3B-FP8/revision/c2114d9636458189f132f9de5d912bcbc30403dd（获取于 2026-10-19T06:18:45Z；SHA-256：f5f0b6f378377afdfd40274df0a2574d727037c74a6d6239ca5028bfe0bca4c5）
- https://huggingface.co/Hcompany/Holotron4-30B-A3B-FP8/raw/c2114d9636458189f132f9de5d912bcbc30403dd/config.json（获取于 2026-10-18T15:57:39Z；SHA-256：f538dcbf62b570a527f939db535bbdedd4c4aea0b125dbc6a27c1f3016d28632）
- https://huggingface.co/Hcompany/Holotron4-30B-A3B-FP8/raw/c2114d9636458189f132f9de5d912bcbc30403dd/README.md（获取于 2026-10-19T06:18:46Z；SHA-256：a193d5b0c7f85a97361d4655240cfe549a244c31ac7f04befe14ae852806ac26）

---

## InternVL

InternVL 开源多模态基础模型系列的官方仓库，支持高分辨率 GUI 定位和视觉推理。

- 目录页面：https://awesomecua.com/resources/github-opengvlab-internvl/
- 原始来源：https://github.com/OpenGVLab/InternVL
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、网页、桌面、Android
- 主题：界面理解、GUI 定位、视频
- 证据核查日期：2026-11-04T13:12:30Z
- ID：github:opengvlab/internvl

- 完整记录 JSON：https://awesomecua.com/resources/github-opengvlab-internvl/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/OpenGVLab/InternVL/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/OpenGVLab/InternVL/HEAD/README.md（获取于 2026-11-04T13:12:30Z；SHA-256：0d5338fba1508bf7ffc9ccb2479c852e20b195394376b3c648750706b1465e10）
- https://raw.githubusercontent.com/OpenGVLab/InternVL/HEAD/LICENSE（获取于 2026-11-04T13:41:37Z；SHA-256：8f03d25fbcffafa2254d4d1414bf2a38423a966006b4a6964ee21f728d610bff）

---

## Qwen3-VL / Qwen2.5-VL

Qwen-VL 视觉语言模型系列的官方仓库，支持原生视觉 GUI 定位、计算机使用和移动端导航。

- 目录页面：https://awesomecua.com/resources/github-qwenlm-qwen3-vl/
- 原始来源：https://github.com/QwenLM/Qwen3-VL
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、网页、桌面、Android
- 主题：GUI 定位、界面理解、动作预测、视频
- 证据核查日期：2026-11-04T13:12:32Z
- ID：github:qwenlm/qwen3-vl

- 完整记录 JSON：https://awesomecua.com/resources/github-qwenlm-qwen3-vl/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/QwenLM/Qwen3-VL/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/QwenLM/Qwen3-VL/HEAD/README.md（获取于 2026-11-04T13:12:32Z；SHA-256：fc21106258c51e0b91a652eef12f5925becb146ea8b8c79a4251ac2e89a2f1ac）
- https://raw.githubusercontent.com/QwenLM/Qwen3-VL/HEAD/LICENSE（获取于 2026-11-04T13:41:34Z；SHA-256：c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4）
- https://api.github.com/repos/QwenLM/Qwen2.5-VL（获取于 2026-10-18T11:06:42Z；SHA-256：16d1d3853a888a4f3cfbe891c9238ff2cb33c0f8eb93a110d864524dcb3cbf41）
- https://api.github.com/repos/QwenLM/Qwen3-VL（获取于 2026-10-18T11:05:59Z；SHA-256：16d1d3853a888a4f3cfbe891c9238ff2cb33c0f8eb93a110d864524dcb3cbf41）
- https://api.github.com/repos/QwenLM/Qwen2-VL（获取于 2026-10-18T11:06:43Z；SHA-256：16d1d3853a888a4f3cfbe891c9238ff2cb33c0f8eb93a110d864524dcb3cbf41）

---

## UGround

提供从截图中定位 GUI 元素的通用视觉定位代码、训练数据和权重，包括基于 Qwen2-VL 的 2B、7B 和 72B 版 UGround-V1，以及离线和在线评估套件。

- 目录页面：https://awesomecua.com/resources/github-osu-nlp-group-uground/
- 原始来源：https://github.com/OSU-NLP-Group/UGround
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：GUI 定位
- 证据核查日期：2026-10-16T06:36:00Z
- ID：github:osu-nlp-group/uground

- 完整记录 JSON：https://awesomecua.com/resources/github-osu-nlp-group-uground/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/OSU-NLP-Group/UGround/HEAD/LICENSE.txt
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/OSU-NLP-Group/UGround/HEAD/README.md（获取于 2026-10-16T06:36:00Z；SHA-256：72ca3f23114c3a08fefb724573acf10c9f0a1b3d4a50d811c98356264ecf6ffc）
- https://raw.githubusercontent.com/OSU-NLP-Group/UGround/HEAD/LICENSE.txt（获取于 2026-10-16T06:42:00Z；SHA-256：93b43d692b033b76129504448695bfe76ef22d18b11e51352bfab4b5622e5aaa）

---

## CogVLM

CogVLM 提供 CogVLM 视觉语言基础模型和 CogAgent GUI 智能体的官方推理与微调代码。

- 目录页面：https://awesomecua.com/resources/github-thudm-cogvlm/
- 原始来源：https://github.com/THUDM/CogVLM
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、网页、Android
- 主题：界面理解、GUI 定位
- 证据核查日期：2026-11-04T13:12:39Z
- ID：github:thudm/cogvlm

- 完整记录 JSON：https://awesomecua.com/resources/github-thudm-cogvlm/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/THUDM/CogVLM/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/THUDM/CogVLM/HEAD/README.md（获取于 2026-11-04T13:12:39Z；SHA-256：845d0c7f8f13501791a18b61b3f312bdac112273ff742eded3c926b777f0e002）
- https://raw.githubusercontent.com/THUDM/CogVLM/HEAD/LICENSE（获取于 2026-11-04T13:22:40Z；SHA-256：9a827651650bf66778303e003ccba1b1cd0cfcf4f9e2aa5ed77001a1ef5cde7c）

---

## GUI-Libra

GUI-Libra 提供原生 GUI 智能体的训练和评测流水线，采用动作感知监督和部分可验证的 RL。

- 目录页面：https://awesomecua.com/resources/github-gui-libra-gui-libra/
- 原始来源：https://github.com/GUI-Libra/GUI-Libra
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、网页、桌面、Android
- 主题：强化学习、GUI 定位、动作预测
- 证据核查日期：2026-11-04T13:12:16Z
- ID：github:gui-libra/gui-libra

- 完整记录 JSON：https://awesomecua.com/resources/github-gui-libra-gui-libra/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/GUI-Libra/GUI-Libra/HEAD/README.md（获取于 2026-11-04T13:12:16Z；SHA-256：f34c5bcf454368db37dde4bb2229fd14ae5e4a118684c6d7fbb6a25f9f246911）

---

## MiniCPM-GUIDance

随 GUICourse 发布的 MiniCPM-V 检查点，使用其 GUIEnv、GUIAct 和 GUIChat 数据微调；模型卡提示涵盖根据任务与操作历史生成下一操作，以及结合定位框进行截图对话。

- 目录页面：https://awesomecua.com/resources/url-73570e699421a5ad04eb/
- 原始来源：https://huggingface.co/RhapsodyAI/minicpm-guidance
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、Android
- 主题：GUI 定位、动作预测、界面理解
- 证据核查日期：2026-10-18T15:57:12Z
- ID：url:73570e699421a5ad04eb

### 范围记录

GUICourse's README announces this repository as the MiniCPM-GUI weights with inference code. The card's YAML lists GUIChat, GUIEnv and GUIAct and declares Apache-2.0; its prose gives action and grounding prompt templates and a batch-size-one inference example whose output marks an element with a box. config.json gives MiniCPMVForCausalLM; the base checkpoint remains unspecified in the card. The manifest holds one PyTorch weight file. Web and Android coverage follows from the training data; no checkpoint was loaded and no result was reproduced.

- 完整记录 JSON：https://awesomecua.com/resources/url-73570e699421a5ad04eb/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：Apache-2.0 — https://huggingface.co/RhapsodyAI/minicpm-guidance/raw/854aaf385ec56b8e738161b4aedb3eed5d28f9bc/README.md

- 权重审核：Publisher model-card declaration for the checkpoint; base-model, code and training-data terms are separate.
  来源：https://huggingface.co/RhapsodyAI/minicpm-guidance/raw/854aaf385ec56b8e738161b4aedb3eed5d28f9bc/README.md

### 一手证据

- https://huggingface.co/api/models/RhapsodyAI/minicpm-guidance（获取于 2026-10-18T15:57:12Z；SHA-256：034b80c1ef1d1e5832bf2c430a82c470980a7f5e8190ce9abc922445455d67b9）
- https://huggingface.co/RhapsodyAI/minicpm-guidance/raw/854aaf385ec56b8e738161b4aedb3eed5d28f9bc/README.md（获取于 2026-10-18T15:57:11Z；SHA-256：2dfe7d1252e18ad2f107e4d450440ca6217edfde26684c8763f57ec28790a7d2）
- https://huggingface.co/RhapsodyAI/minicpm-guidance/raw/854aaf385ec56b8e738161b4aedb3eed5d28f9bc/config.json（获取于 2026-10-18T15:57:11Z；SHA-256：4974d4b6f3eacca89a03a88ec790ff3982ddea01fbbc01e8c37b783521c56044）
- https://raw.githubusercontent.com/RUCBM/GUICourse/a6dd4c3f0445c8b568d2c4792934a65ee4454bef/README.md（获取于 2026-10-18T15:57:11Z；SHA-256：0968273442bfb9a6478fe78f8b9a6247a3bb8e6d028880939b432fd009961e98）
- https://huggingface.co/api/models/RhapsodyAI/minicpm-guidance（获取于 2026-10-18T15:57:12Z；SHA-256：034b80c1ef1d1e5832bf2c430a82c470980a7f5e8190ce9abc922445455d67b9）

---

## Qwen-GUI checkpoint

随 GUICourse 发布、在 GUIAct 和 GUIChat 数据上调优的 Qwen-VL 检查点；数据卡演示将其在 0 至 1000 坐标网格上返回的边界框与点绘制到输入截图上。

- 目录页面：https://awesomecua.com/resources/url-23bc63f93d3c31d74af3/
- 原始来源：https://huggingface.co/RhapsodyAI/qwen_vl_guidance
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、Android
- 主题：GUI 定位、动作预测、界面理解
- 证据核查日期：2026-10-18T15:43:24Z
- ID：url:23bc63f93d3c31d74af3

### 范围记录

GUICourse's README announces this repository as the Qwen-GUI weights. The card has no prose: its YAML lists GUIChat and GUIAct as datasets and declares Apache-2.0, and its only content is an inference script. config.json gives a QWenLMHeadModel with a 448-pixel visual encoder. The manifest holds one PyTorch weight file plus trainer state. Web and Android coverage follows from the training data; no checkpoint was loaded and no result was reproduced.

- 完整记录 JSON：https://awesomecua.com/resources/url-23bc63f93d3c31d74af3/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：Apache-2.0 — https://huggingface.co/RhapsodyAI/qwen_vl_guidance/raw/2b1a7c404a153d683a87314ddc03c806cfc96a1d/README.md

- 权重审核：Publisher model-card declaration for the checkpoint; base-model, code and training-data terms are separate.
  来源：https://huggingface.co/RhapsodyAI/qwen_vl_guidance/raw/2b1a7c404a153d683a87314ddc03c806cfc96a1d/README.md

### 一手证据

- https://huggingface.co/api/models/RhapsodyAI/qwen_vl_guidance（获取于 2026-10-18T15:43:24Z；SHA-256：c73d0b1d9c9a48d27771751fd5c151c25bc39e8003173438abb3499cd05ac581）
- https://huggingface.co/RhapsodyAI/qwen_vl_guidance/raw/2b1a7c404a153d683a87314ddc03c806cfc96a1d/README.md（获取于 2026-10-18T15:43:24Z；SHA-256：d995100b41eaa95f3476df60d95544c4932b2c25d9df7926d77a9fc2741022d6）
- https://huggingface.co/RhapsodyAI/qwen_vl_guidance/raw/2b1a7c404a153d683a87314ddc03c806cfc96a1d/config.json（获取于 2026-10-18T15:43:25Z；SHA-256：2c9878d68214797ea1ba0602a6360860d4862f4cf9f56b29cb27af781e6afab3）
- https://raw.githubusercontent.com/RUCBM/GUICourse/a6dd4c3f0445c8b568d2c4792934a65ee4454bef/README.md（获取于 2026-10-18T15:43:25Z；SHA-256：0968273442bfb9a6478fe78f8b9a6247a3bb8e6d028880939b432fd009961e98）
- https://huggingface.co/api/models/RhapsodyAI/qwen_vl_guidance（获取于 2026-10-18T15:43:24Z；SHA-256：c73d0b1d9c9a48d27771751fd5c151c25bc39e8003173438abb3499cd05ac581）

---

## Qwen/Qwen3-VL-8B-Instruct

Qwen3-VL-8B-Instruct 是视觉语言模型权重，模型卡介绍了它识别界面元素、调用工具并操作电脑和移动设备图形界面的能力。

- 目录页面：https://awesomecua.com/resources/url-90ae002dbf099d42fabb/
- 原始来源：https://huggingface.co/Qwen/Qwen3-VL-8B-Instruct
- 类型：模型
- 审核状态：已审核
- 范围：相关研究
- 运行环境：跨平台、桌面
- 主题：界面理解、GUI 定位、手机操作、工具集成
- 证据核查日期：2026-11-09T05:05:17Z
- ID：url:90ae002dbf099d42fabb

### 范围记录

The card declares an Apache 2.0 license and provides a Transformers loading example. The repository file list contains Safetensors weight shards and processor files.

- 完整记录 JSON：https://awesomecua.com/resources/url-90ae002dbf099d42fabb/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/Qwen/Qwen3-VL-8B-Instruct

### 一手证据

- https://huggingface.co/api/models/Qwen/Qwen3-VL-8B-Instruct（获取于 2026-11-09T05:05:17Z；SHA-256：e9b6d66b592dd37dbeca49474d1c59b4cadadd6a4a0496aceb05c3e072455972）
- https://huggingface.co/api/models/Qwen/Qwen3-VL-8B-Instruct（获取于 2026-11-09T05:05:17Z；SHA-256：e9b6d66b592dd37dbeca49474d1c59b4cadadd6a4a0496aceb05c3e072455972）

---

## Aria-UI

混合专家 GUI 定位模型，具有 3.9B 激活参数，可使用文本或图像与文本交错的历史记录，并发布了训练数据和 AndroidWorld 智能体。

- 目录页面：https://awesomecua.com/resources/github-ariaui-aria-ui/
- 原始来源：https://github.com/AriaUI/Aria-UI
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：GUI 定位
- 证据核查日期：2026-10-16T06:36:00Z
- ID：github:ariaui/aria-ui

- 完整记录 JSON：https://awesomecua.com/resources/github-ariaui-aria-ui/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/AriaUI/Aria-UI/HEAD/README.md（获取于 2026-10-16T06:36:00Z；SHA-256：a2a3c5ad115e4e2109b56686c9e0b073bcfec6d9f052a58bc92683af44933480）

---

## Gelato

Gelato-30B-A3B 的发布代码：在 Click-100k 上使用 GRPO 训练 GUI 点击定位模型，包含 EasyR1 配置、点击奖励、定位评估脚本与日志，以及由 GPT-5 规划的 OS-World 智能体框架。

- 目录页面：https://awesomecua.com/resources/github-mlfoundations-gelato/
- 原始来源：https://github.com/mlfoundations/Gelato
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：GUI 定位、强化学习、数据生成
- 证据核查日期：2026-10-18T15:54:59Z
- ID：github:mlfoundations/gelato

### 范围记录

There is no arXiv paper; the README's citation is a GitHub @misc entry. The README describes how Click-100k was filtered (OmniParser element checks, Qwen2.5-VL-7B difficulty and GTA1-7B-2507 alignment filters) and reports 63.88% on ScreenSpot-Pro, 69.15% on OS-World-G with refusal prompting, and 58.71 ± 0.66% automated OS-World success across three runs; none of these was reproduced. It also releases a UI-TARS-1.5-7B baseline trained with the same recipe as mlfoundations/Gelato-UI-TARS-1.5-7B, which has no model card. evaluation/os-world/gelato_agent.py is a modified GTA1.5 OSWorld agent: GPT-5 plans from screenshots and its tool calls become pyautogui commands, with click targets requested from a vLLM-served grounding model; it runs inside an OSWorld checkout. The repository has no license file.

- 完整记录 JSON：https://awesomecua.com/resources/github-mlfoundations-gelato/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 代码审核：The recursive tree at commit 2a8757d4 has no LICENSE file and the README states no license, so no code license is established.
  来源：https://api.github.com/repos/mlfoundations/Gelato/git/trees/2a8757d473a63d34f71b043192d08dad61d298ee?recursive=1

### 一手证据

- https://raw.githubusercontent.com/mlfoundations/Gelato/HEAD/README.md（获取于 2026-10-18T15:54:59Z；SHA-256：437eb06553ed6d63d871d18842906b26b6148db5b0a5489064736ef6f5f0cfcf）
- https://api.github.com/repos/mlfoundations/Gelato/git/trees/2a8757d473a63d34f71b043192d08dad61d298ee?recursive=1（获取于 2026-10-18T15:53:36Z；SHA-256：264ea1121a89f66087bdc945fa132b3ffa310ca6333dbc801ed0a443764e4e4c）
- https://raw.githubusercontent.com/mlfoundations/Gelato/2a8757d473a63d34f71b043192d08dad61d298ee/training_configs/README.md（获取于 2026-10-18T15:53:37Z；SHA-256：c2a6c7ebe068b732f3e2cf21ee085c1ca375e4c044e39a053bd34e74c0287669）
- https://raw.githubusercontent.com/mlfoundations/Gelato/2a8757d473a63d34f71b043192d08dad61d298ee/evaluation/os-world/gelato_agent.py（获取于 2026-10-18T15:53:37Z；SHA-256：060968a137ee7cd396722252742ef8f7a26e81504e1d36d5110c70a25f71d445）
- https://raw.githubusercontent.com/mlfoundations/Gelato/2a8757d473a63d34f71b043192d08dad61d298ee/README.md（获取于 2026-10-18T15:53:38Z；SHA-256：437eb06553ed6d63d871d18842906b26b6148db5b0a5489064736ef6f5f0cfcf）

---

## Gelato-30B-A3B

Qwen3-VL-30B-A3B-Instruct 检查点在 Click-100k 上使用 GRPO 训练，根据截图和元素描述返回一个归一化到 0–1000 范围的(x,y)点击坐标。

- 目录页面：https://awesomecua.com/resources/url-46502d87b2c13515790a/
- 原始来源：https://huggingface.co/mlfoundations/Gelato-30B-A3B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：GUI 定位、强化学习
- 证据核查日期：2026-10-18T15:54:59Z
- ID：url:46502d87b2c13515790a

### 范围记录

The card's example prompts for one (x,y) point and rescales it from a 0–1000 frame to pixels. The Hub manifest at revision 161e9288 lists 14 Safetensors shards; the API reports 31,070,754,032 BF16 parameters. The release README says the published weights are the step-84 checkpoint of a 100-step DAPO-style GRPO run and that all intermediate checkpoints are released, but the Hub shows only the main branch of this repository.

- 完整记录 JSON：https://awesomecua.com/resources/url-46502d87b2c13515790a/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：Apache-2.0 — https://huggingface.co/mlfoundations/Gelato-30B-A3B/raw/161e92880a1685a98caa5ef5de8813fe8a43cbb4/README.md

- 权重审核：Model-card metadata declaration for this checkpoint; the code repository has no license file and the Click-100k data terms are separate.
  来源：https://huggingface.co/mlfoundations/Gelato-30B-A3B/raw/161e92880a1685a98caa5ef5de8813fe8a43cbb4/README.md

### 一手证据

- https://huggingface.co/mlfoundations/Gelato-30B-A3B/raw/161e92880a1685a98caa5ef5de8813fe8a43cbb4/README.md（获取于 2026-10-18T15:54:59Z；SHA-256：ae96174873e2a52a206ea9b7e718609678ec15e5830f5eac1f52d325770fcd8b）
- https://huggingface.co/api/models/mlfoundations/Gelato-30B-A3B/revision/161e92880a1685a98caa5ef5de8813fe8a43cbb4（获取于 2026-10-18T15:53:38Z；SHA-256：89a8d65f413e2664c4355df9de84fc46bd9612d914df96affd05d68f88eb10e7）
- https://raw.githubusercontent.com/mlfoundations/Gelato/2a8757d473a63d34f71b043192d08dad61d298ee/README.md（获取于 2026-10-18T15:53:38Z；SHA-256：437eb06553ed6d63d871d18842906b26b6148db5b0a5489064736ef6f5f0cfcf）
- https://huggingface.co/mlfoundations/Gelato-30B-A3B/raw/161e92880a1685a98caa5ef5de8813fe8a43cbb4/README.md（获取于 2026-10-18T15:54:59Z；SHA-256：ae96174873e2a52a206ea9b7e718609678ec15e5830f5eac1f52d325770fcd8b）

---

## GUI-Actor 7B Qwen2-VL

由 Qwen2-VL-7B-Instruct 微调的 GUI-Actor 检查点，约有 8.4B 个 BF16 参数；其配置指定了 Qwen2-VL 类的指针变体，采用 MIT 许可证。

- 目录页面：https://awesomecua.com/resources/url-e3e5dd82a3102689c4ea/
- 原始来源：https://huggingface.co/microsoft/GUI-Actor-7B-Qwen2-VL
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：GUI 定位
- 证据核查日期：2026-10-16T06:50:49Z
- ID：url:e3e5dd82a3102689c4ea

- 完整记录 JSON：https://awesomecua.com/resources/url-e3e5dd82a3102689c4ea/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：mit — https://huggingface.co/microsoft/GUI-Actor-7B-Qwen2-VL

### 一手证据

- https://huggingface.co/api/models/microsoft/GUI-Actor-7B-Qwen2-VL（获取于 2026-10-16T06:50:49Z；SHA-256：c76d9811dc6152d1b33bec7f19e808c1882e86cca79bd3fea90075ac9df5c7e6）
- https://huggingface.co/api/models/microsoft/GUI-Actor-7B-Qwen2-VL（获取于 2026-10-16T06:50:49Z；SHA-256：c76d9811dc6152d1b33bec7f19e808c1882e86cca79bd3fea90075ac9df5c7e6）

---

## Holo3 35B-A3B

基于 Qwen3.5 的稀疏 GUI 动作检查点，用于导航和计算机使用流程。

- 目录页面：https://awesomecua.com/resources/url-a349aace3cfde25628a8/
- 原始来源：https://huggingface.co/Hcompany/Holo3-35B-A3B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、桌面、跨平台
- 主题：GUI 定位、规划、动作预测
- 证据核查日期：2026-10-17T04:07:19Z
- ID：url:a349aace3cfde25628a8

### 范围记录

Fourteen public safetensors shards are present. The card declares Apache-2.0 for this release and describes a 35B-total/3B-active MoE architecture. No unpublished enterprise benchmark or training corpus is added solely from its performance claims.

- 完整记录 JSON：https://awesomecua.com/resources/url-a349aace3cfde25628a8/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/Hcompany/Holo3-35B-A3B/raw/main/README.md

### 一手证据

- https://huggingface.co/Hcompany/Holo3-35B-A3B/raw/main/README.md（获取于 2026-10-17T04:07:19Z；SHA-256：0681f87b059110a4e5dff8955e9feca6c5ea118b326f729f9c0ed0fe49e42d03）
- https://huggingface.co/api/models/Hcompany/Holo3-35B-A3B（获取于 2026-10-17T04:07:18Z；SHA-256：bc5324dd6ceea9a0cc6bf0639b99d24cdd172af3c5d247bf923fdce1dc11f582）
- https://huggingface.co/Hcompany/Holo3-35B-A3B/raw/main/README.md（获取于 2026-10-17T04:07:19Z；SHA-256：0681f87b059110a4e5dff8955e9feca6c5ea118b326f729f9c0ed0fe49e42d03）

---

## Holo3.1 35B-A3B

H Company Holo3.1 系列的 35B-A3B 检查点，采用稀疏混合专家视觉语言架构，面向网页、桌面和移动端计算机使用，原生支持函数调用。

- 目录页面：https://awesomecua.com/resources/url-0c9ce9f220b2fdfd70b0/
- 原始来源：https://huggingface.co/Hcompany/Holo-3.1-35B-A3B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、桌面、跨平台
- 主题：GUI 定位、动作预测、手机操作、工具集成
- 证据核查日期：2026-10-18T15:44:27Z
- ID：url:0c9ce9f220b2fdfd70b0

### 范围记录

Hub API at revision 2bdb9285 lists 26 BF16 safetensors shards (about 35.1B parameters) in the Qwen3_5MoeForConditionalGeneration architecture; access is open. The card is written for the whole Holo3.1 family (0.8B, 4B, 9B and 35B-A3B) and names web, desktop and mobile without a mobile operating system. Its YAML base_model lists Qwen3.6-35B-A3B and three Qwen3.5 sizes while its prose says the Qwen 3.5 family, so base_model is unset. FP8, NVFP4 and GGUF quantizations are separate Hub repositories outside this record. Benchmark results appear only as images and are not recorded. The card declares Apache-2.0 for the weights.

- 完整记录 JSON：https://awesomecua.com/resources/url-0c9ce9f220b2fdfd70b0/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/Hcompany/Holo-3.1-35B-A3B/raw/2bdb92851a8cd9d72cdd891fdf38cfcc7fefae2c/README.md

### 一手证据

- https://huggingface.co/Hcompany/Holo-3.1-35B-A3B/raw/2bdb92851a8cd9d72cdd891fdf38cfcc7fefae2c/README.md（获取于 2026-10-18T15:44:27Z；SHA-256：d99bf15b6e5cb377b1b7a75f3cd8e2b0e07d4aa3323576c0e1477afe90712d1a）
- https://huggingface.co/api/models/Hcompany/Holo-3.1-35B-A3B/revision/2bdb92851a8cd9d72cdd891fdf38cfcc7fefae2c（获取于 2026-10-18T15:44:13Z；SHA-256：c21a7d4a5b4439f67cc6d15e45b1a8185726ad490307fd42f9c03ebce23492ff）
- https://huggingface.co/Hcompany/Holo-3.1-35B-A3B/raw/2bdb92851a8cd9d72cdd891fdf38cfcc7fefae2c/README.md（获取于 2026-10-18T15:44:27Z；SHA-256：d99bf15b6e5cb377b1b7a75f3cd8e2b0e07d4aa3323576c0e1477afe90712d1a）

---

## OmniParser v2 model bundle

屏幕解析模型权重包，包含图标区域检测器和图标描述模型，用于将截图转换为智能体可读取的界面元素。

- 目录页面：https://awesomecua.com/resources/url-e21ca7c859544dbf5fb6/
- 原始来源：https://huggingface.co/microsoft/OmniParser-v2.0
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：界面理解、GUI 定位
- 证据核查日期：2026-10-16T06:36:04Z
- ID：url:e21ca7c859544dbf5fb6

### 范围记录

The manifest contains icon_detect/model.pt, icon_detect_v3/model.pt and icon_caption/model.safetensors. Licenses differ by folder: original YOLOv8 detector AGPL-3.0; YOLOv9-E detector and Florence-2 captioner MIT. The card’s top-level MIT metadata must not cover the entire bundle. Components remain one resource; no binaries were executed.

- 完整记录 JSON：https://awesomecua.com/resources/url-e21ca7c859544dbf5fb6/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：Mixed by component: icon_detect = AGPL-3.0; icon_detect_v3 = MIT; icon_caption = MIT — https://huggingface.co/microsoft/OmniParser-v2.0/raw/main/README.md

- 权重审核：The top-level Hub metadata says MIT, but the same card and folder licenses distinguish the original detector from the new detector and captioner. Preserve one model-bundle identity with a mixed license declaration.
  来源：https://huggingface.co/microsoft/OmniParser-v2.0/raw/main/README.md, https://huggingface.co/microsoft/OmniParser-v2.0/raw/main/icon_detect/LICENSE, https://huggingface.co/microsoft/OmniParser-v2.0/raw/main/icon_detect_v3/LICENSE, https://huggingface.co/microsoft/OmniParser-v2.0/raw/main/icon_caption/LICENSE

### 一手证据

- https://raw.githubusercontent.com/microsoft/OmniParser/HEAD/README.md（获取于 2026-10-16T06:36:04Z；SHA-256：f4ebaafcc0ab0b9e9cc55cb587678e5c83a5bbd64469fb2cc52bc63843c5cc6d）
- https://huggingface.co/api/models/microsoft/OmniParser-v2.0（获取于 2026-10-17T04:03:41Z；SHA-256：1ea8af0cfd9cd716de8af8b78b2451470e1e1f22233a7286c5f40e1f496dc4be）
- https://huggingface.co/microsoft/OmniParser-v2.0/raw/main/README.md（获取于 2026-10-17T04:03:41Z；SHA-256：6ae154d65bfc2755703440be02acf63a37b741a1101b7c42b666da93a4ed2310）
- https://huggingface.co/microsoft/OmniParser-v2.0/raw/main/icon_detect/LICENSE（获取于 2026-10-17T04:09:13Z；SHA-256：4df3c306dddaaf4baffdff5ca820cc679ac8cd6dc263c6a74517783e42fa7a3b）
- https://huggingface.co/microsoft/OmniParser-v2.0/raw/main/icon_detect_v3/LICENSE（获取于 2026-10-17T04:06:57Z；SHA-256：646f8936b8ddcd14e13e578ff6857e368780b0d1a4f6066bee89211923a373e2）
- https://huggingface.co/microsoft/OmniParser-v2.0/raw/main/icon_caption/LICENSE（获取于 2026-10-17T04:09:13Z；SHA-256：d9a1b1e30d633d5732ea18e3cba9538d293ebc53e1a9e4e96ab739e0c5c4f1cb）

---

## OS-Genesis 4B AC

InternVL2-4B 检查点基于 OS-Genesis AndroidControl 轨迹微调；模型卡提示将截图和无障碍树与目标、操作历史结合，生成下一步思考与操作。

- 目录页面：https://awesomecua.com/resources/url-b1837823421bd08cb826/
- 原始来源：https://huggingface.co/OS-Copilot/OS-Genesis-4B-AC
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：手机操作、动作预测、模仿学习
- 证据核查日期：2026-10-18T16:04:12Z
- ID：url:b1837823421bd08cb826

### 范围记录

This is the 4B AndroidControl (AC) task-specific checkpoint; the card calls it a mobile action model, and the 7B and 8B AC checkpoints and the AndroidWorld (AW) and web variants are separate releases, with results scoped to each release. The card prose, its YAML base_model field and config.json agree on InternVL2-4B, whose language model is Phi-3-mini (Phi3ForCausalLM). The card and the OS-Genesis repository README both list it among the AC family models used for the AndroidControl benchmark. Two public Safetensors shards are present and the Hub reports 4,146,868,224 BF16 parameters. The card declares Apache-2.0 for the checkpoint. No checkpoint was loaded and no result was reproduced.

- 完整记录 JSON：https://awesomecua.com/resources/url-b1837823421bd08cb826/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：Apache-2.0 — https://huggingface.co/OS-Copilot/OS-Genesis-4B-AC/raw/c73c72530fb7a9d7e482fbb96ad23b118a47e8c3/README.md

- 权重审核：Publisher model-card declaration for the checkpoint; base-model, code and training-data terms are separate.
  来源：https://huggingface.co/OS-Copilot/OS-Genesis-4B-AC/raw/c73c72530fb7a9d7e482fbb96ad23b118a47e8c3/README.md

### 一手证据

- https://huggingface.co/OS-Copilot/OS-Genesis-4B-AC/raw/c73c72530fb7a9d7e482fbb96ad23b118a47e8c3/README.md（获取于 2026-10-18T16:04:12Z；SHA-256：db757573a6e4646207890032dffd6bc7592409063399b2dd8d1d0e706db18394）
- https://huggingface.co/api/models/OS-Copilot/OS-Genesis-4B-AC/revision/c73c72530fb7a9d7e482fbb96ad23b118a47e8c3（获取于 2026-10-18T16:03:42Z；SHA-256：212d8f3727374d3fb2f91de0381698199e05855d2206cf68498d36c22b213df4）
- https://huggingface.co/OS-Copilot/OS-Genesis-4B-AC/raw/c73c72530fb7a9d7e482fbb96ad23b118a47e8c3/config.json（获取于 2026-10-18T16:03:42Z；SHA-256：bda54194dc2fa23a880791f0a7ce2d78cc1be849d745c0af67bbf96cbbb05a8c）
- https://raw.githubusercontent.com/OS-Copilot/OS-Genesis/72128850dad4ca9ba642ee7399794b4fb8f5154d/README.md（获取于 2026-10-18T16:03:42Z；SHA-256：430e495ab250395d666854bd18b0fc29b819cd784cd7730215ef65e461834d0d）
- https://huggingface.co/OS-Copilot/OS-Genesis-4B-AC/raw/c73c72530fb7a9d7e482fbb96ad23b118a47e8c3/README.md（获取于 2026-10-18T16:04:12Z；SHA-256：db757573a6e4646207890032dffd6bc7592409063399b2dd8d1d0e706db18394）

---

## OS-Genesis 4B AW

InternVL2-4B 检查点基于 OS-Genesis AndroidWorld 轨迹微调；模型卡提示将截图和无障碍树与目标、操作历史结合，生成下一步思考与操作。

- 目录页面：https://awesomecua.com/resources/url-a2362e23fdcbc73763e6/
- 原始来源：https://huggingface.co/OS-Copilot/OS-Genesis-4B-AW
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：手机操作、动作预测、模仿学习
- 证据核查日期：2026-10-19T06:18:22Z
- ID：url:a2362e23fdcbc73763e6

### 范围记录

This is the 4B AndroidWorld (AW) task-specific checkpoint; the 7B and 8B AW checkpoints and the AndroidControl (AC) and web variants are separate releases, with results scoped to each release. The card prose, its YAML base_model field and config.json agree on InternVL2-4B, whose language model is Phi-3-mini (Phi3ForCausalLM). The card's table caption mentions the AndroidControl Benchmark, while its evaluation link and the OS-Genesis repository README place the AW checkpoints under AndroidWorld. Two public Safetensors shards are present and the Hub reports 4,146,868,224 BF16 parameters. The card declares Apache-2.0 for the checkpoint. No checkpoint was loaded and no result was reproduced.

- 完整记录 JSON：https://awesomecua.com/resources/url-a2362e23fdcbc73763e6/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：Apache-2.0 — https://huggingface.co/OS-Copilot/OS-Genesis-4B-AW/raw/004b6a2aced3cde9d57be11508f78d8178ed4d09/README.md

- 权重审核：Publisher model-card declaration for the checkpoint; base-model, code and training-data terms are separate.
  来源：https://huggingface.co/OS-Copilot/OS-Genesis-4B-AW/raw/004b6a2aced3cde9d57be11508f78d8178ed4d09/README.md

### 一手证据

- https://huggingface.co/OS-Copilot/OS-Genesis-4B-AW/raw/004b6a2aced3cde9d57be11508f78d8178ed4d09/README.md（获取于 2026-10-19T06:18:22Z；SHA-256：e362f6baabfa23d366d8fe27c0cf7277a47aeb1da9ba5f15c96ea0b2c0d49a63）
- https://huggingface.co/api/models/OS-Copilot/OS-Genesis-4B-AW/revision/004b6a2aced3cde9d57be11508f78d8178ed4d09（获取于 2026-10-19T06:18:22Z；SHA-256：a26e69689546a2e4ddee5460bbe2fa55679c5fd557098f7e679cdbe323a00015）
- https://huggingface.co/OS-Copilot/OS-Genesis-4B-AW/raw/004b6a2aced3cde9d57be11508f78d8178ed4d09/config.json（获取于 2026-10-18T15:54:46Z；SHA-256：bda54194dc2fa23a880791f0a7ce2d78cc1be849d745c0af67bbf96cbbb05a8c）
- https://raw.githubusercontent.com/OS-Copilot/OS-Genesis/72128850dad4ca9ba642ee7399794b4fb8f5154d/README.md（获取于 2026-10-18T15:54:47Z；SHA-256：430e495ab250395d666854bd18b0fc29b819cd784cd7730215ef65e461834d0d）
- https://huggingface.co/OS-Copilot/OS-Genesis-4B-AW/raw/004b6a2aced3cde9d57be11508f78d8178ed4d09/README.md（获取于 2026-10-19T06:18:22Z；SHA-256：e362f6baabfa23d366d8fe27c0cf7277a47aeb1da9ba5f15c96ea0b2c0d49a63）

---

## OS-Genesis 4B WA

面向 WebArena 的 InternVL2-4B 检查点，基于 OS-Genesis 逆向任务合成生成的网页轨迹训练，从指令、历史和页面预测下一步思考与操作。

- 目录页面：https://awesomecua.com/resources/url-807dadc7dc4ba995bbbe/
- 原始来源：https://huggingface.co/OS-Copilot/OS-Genesis-4B-WA
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、动作预测、模仿学习
- 证据核查日期：2026-10-18T16:02:38Z
- ID：url:807dadc7dc4ba995bbbe

### 范围记录

Hub API at revision 511f2ec2 lists two BF16 safetensors shards (about 4.15B parameters) in the InternVLChatModel architecture, with custom InternVL and Phi-3 modeling files; the repository is publicly accessible. The card declares Apache-2.0 and OpenGVLab/InternVL2-4B as the base, calls it a web action model, names the OS-Genesis web training file as its training data and points to WebArena evaluation code, although its family-table caption says AndroidControl. The OS-Genesis README lists it under Web. The card's example prompt combines a screenshot, an accessibility tree, the instruction and the action history. AndroidWorld and AndroidControl variants are separate releases, and no result is transferred to this checkpoint.

- 完整记录 JSON：https://awesomecua.com/resources/url-807dadc7dc4ba995bbbe/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/OS-Copilot/OS-Genesis-4B-WA/raw/511f2ec231a517e79d1f913524b9b652dfc5b98e/README.md

### 一手证据

- https://huggingface.co/OS-Copilot/OS-Genesis-4B-WA/raw/511f2ec231a517e79d1f913524b9b652dfc5b98e/README.md（获取于 2026-10-18T16:02:38Z；SHA-256：bcaeb91865427132f00c4fd2d9af33f9b808bdc3a15f3d479ee25a3453b340ea）
- https://huggingface.co/api/models/OS-Copilot/OS-Genesis-4B-WA/revision/511f2ec231a517e79d1f913524b9b652dfc5b98e（获取于 2026-10-18T16:02:18Z；SHA-256：b8957e2835af052bab25c3fa939601d3fd5fd3d59f48bc1807aadfd4c3ab3df5）
- https://raw.githubusercontent.com/OS-Copilot/OS-Genesis/72128850dad4ca9ba642ee7399794b4fb8f5154d/README.md（获取于 2026-10-18T16:02:18Z；SHA-256：430e495ab250395d666854bd18b0fc29b819cd784cd7730215ef65e461834d0d）
- https://huggingface.co/OS-Copilot/OS-Genesis-4B-WA/raw/511f2ec231a517e79d1f913524b9b652dfc5b98e/README.md（获取于 2026-10-18T16:02:38Z；SHA-256：bcaeb91865427132f00c4fd2d9af33f9b808bdc3a15f3d479ee25a3453b340ea）

---

## OS-Genesis 7B AC

面向 AndroidControl 的 Qwen2-VL 检查点，使用 OS-Genesis 反向任务合成生成的移动端轨迹训练。

- 目录页面：https://awesomecua.com/resources/url-80858580c1009eba0e98/
- 原始来源：https://huggingface.co/OS-Copilot/OS-Genesis-7B-AC
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：手机操作、动作预测、模仿学习
- 证据核查日期：2026-10-17T04:03:41Z
- ID：url:80858580c1009eba0e98

### 范围记录

Four public safetensors shards are present. The card declares Apache-2.0. This is the AC task-specific checkpoint; AndroidWorld and WebArena variants are separate releases.

- 完整记录 JSON：https://awesomecua.com/resources/url-80858580c1009eba0e98/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/OS-Copilot/OS-Genesis-7B-AC/raw/main/README.md

### 一手证据

- https://huggingface.co/OS-Copilot/OS-Genesis-7B-AC/raw/main/README.md（获取于 2026-10-17T04:03:41Z；SHA-256：62de4360ad62165bd4dc37d5897d6f5f88813956dff33bac63a24ded50cca118）
- https://huggingface.co/api/models/OS-Copilot/OS-Genesis-7B-AC（获取于 2026-10-17T04:03:41Z；SHA-256：c35278027cd0e36e2fbbba4861031eca2a52090f20b40fb5aa680b067bb13dac）
- https://huggingface.co/OS-Copilot/OS-Genesis-7B-AC/raw/main/README.md（获取于 2026-10-17T04:03:41Z；SHA-256：62de4360ad62165bd4dc37d5897d6f5f88813956dff33bac63a24ded50cca118）

---

## OS-Genesis 7B AW

面向 AndroidWorld 的 Qwen2-VL 检查点，基于 OS-Genesis 逆向任务合成生成的移动端轨迹训练，从指令、历史和屏幕预测下一步思考与操作。

- 目录页面：https://awesomecua.com/resources/url-7afa17db925828d9a035/
- 原始来源：https://huggingface.co/OS-Copilot/OS-Genesis-7B-AW
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：手机操作、动作预测、模仿学习
- 证据核查日期：2026-10-18T15:57:04Z
- ID：url:7afa17db925828d9a035

### 范围记录

Hub API at revision 069001de lists four BF16 safetensors shards (about 8.29B parameters) in the Qwen2VLForConditionalGeneration architecture; the repository is publicly accessible. The card declares Apache-2.0 and Qwen/Qwen2-VL-7B-Instruct as the base, and names the AW training file of the OS-Genesis mobile data as its training data. The OS-Genesis README lists this checkpoint under AndroidWorld, and the card points to its AndroidWorld evaluation code, but the card's family-table caption says AndroidControl. The card's example loads its processor from OS-Atlas-Base-7B. AndroidControl and WebArena variants are separate releases, and no result is transferred to this checkpoint.

- 完整记录 JSON：https://awesomecua.com/resources/url-7afa17db925828d9a035/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/OS-Copilot/OS-Genesis-7B-AW/raw/069001de84358b6a83a3f34638e37df485f49bd0/README.md

### 一手证据

- https://huggingface.co/OS-Copilot/OS-Genesis-7B-AW/raw/069001de84358b6a83a3f34638e37df485f49bd0/README.md（获取于 2026-10-18T15:57:04Z；SHA-256：d21cdbfe878c8e990e8baffca226b9c433ec69839273f8d22bc5c7692337e770）
- https://huggingface.co/api/models/OS-Copilot/OS-Genesis-7B-AW/revision/069001de84358b6a83a3f34638e37df485f49bd0（获取于 2026-10-18T15:56:45Z；SHA-256：f118fbcc0b4622cb7eaf9134f5bb578e74ced0d07be442e8b73307296ed7dc64）
- https://raw.githubusercontent.com/OS-Copilot/OS-Genesis/72128850dad4ca9ba642ee7399794b4fb8f5154d/README.md（获取于 2026-10-18T15:56:45Z；SHA-256：430e495ab250395d666854bd18b0fc29b819cd784cd7730215ef65e461834d0d）
- https://huggingface.co/OS-Copilot/OS-Genesis-7B-AW/raw/069001de84358b6a83a3f34638e37df485f49bd0/README.md（获取于 2026-10-18T15:57:04Z；SHA-256：d21cdbfe878c8e990e8baffca226b9c433ec69839273f8d22bc5c7692337e770）

---

## OS-Genesis 7B WA

面向 WebArena 的 Qwen2-VL-7B 检查点，基于 OS-Genesis 逆向任务合成生成的网页轨迹训练，从指令、历史和页面预测下一步思考与操作。

- 目录页面：https://awesomecua.com/resources/url-93c98e3b5aea945e0877/
- 原始来源：https://huggingface.co/OS-Copilot/OS-Genesis-7B-WA
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、动作预测、模仿学习
- 证据核查日期：2026-10-18T16:04:38Z
- ID：url:93c98e3b5aea945e0877

### 范围记录

Hub API at revision 710c529d lists four BF16 safetensors shards (about 8.29B parameters) in the Qwen2VLForConditionalGeneration architecture; the repository is publicly accessible. The card declares Apache-2.0 and Qwen/Qwen2-VL-7B-Instruct as the base, calls it a web action model, names the OS-Genesis web training file as its training data and points to WebArena evaluation code, although its family-table caption says AndroidControl. The OS-Genesis README lists it under Web. The card's example prompt combines a screenshot, an accessibility tree, the instruction and the action history, and loads its processor from OS-Atlas-Base-7B. AndroidWorld and AndroidControl variants are separate releases, and no result is transferred to this checkpoint.

- 完整记录 JSON：https://awesomecua.com/resources/url-93c98e3b5aea945e0877/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/OS-Copilot/OS-Genesis-7B-WA/raw/710c529da0975103edf7e2ad50c0f93fde690a84/README.md

### 一手证据

- https://huggingface.co/OS-Copilot/OS-Genesis-7B-WA/raw/710c529da0975103edf7e2ad50c0f93fde690a84/README.md（获取于 2026-10-18T16:04:38Z；SHA-256：6c35603768028607de9b32109cfe56455dc23612dd012a6f50393a380a7163a5）
- https://huggingface.co/api/models/OS-Copilot/OS-Genesis-7B-WA/revision/710c529da0975103edf7e2ad50c0f93fde690a84（获取于 2026-10-18T16:04:05Z；SHA-256：4d5370a7b91db042c71ed36c0178c2a556684813e34b85b3c04e7bc190830d68）
- https://raw.githubusercontent.com/OS-Copilot/OS-Genesis/72128850dad4ca9ba642ee7399794b4fb8f5154d/README.md（获取于 2026-10-18T16:04:24Z；SHA-256：430e495ab250395d666854bd18b0fc29b819cd784cd7730215ef65e461834d0d）
- https://huggingface.co/OS-Copilot/OS-Genesis-7B-WA/raw/710c529da0975103edf7e2ad50c0f93fde690a84/README.md（获取于 2026-10-18T16:04:38Z；SHA-256：6c35603768028607de9b32109cfe56455dc23612dd012a6f50393a380a7163a5）

---

## OS-Genesis 8B AC

面向 AndroidControl 的 InternVL2-8B 检查点，基于 OS-Genesis 移动端轨迹训练；模型卡以截图、无障碍树、目标和操作历史提示其生成下一步思考与操作。

- 目录页面：https://awesomecua.com/resources/url-2be7f81cdca0eb8566c6/
- 原始来源：https://huggingface.co/OS-Copilot/OS-Genesis-8B-AC
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：手机操作、动作预测、模仿学习
- 证据核查日期：2026-10-19T06:17:57Z
- ID：url:2be7f81cdca0eb8566c6

### 范围记录

This is the AC task-specific checkpoint; the 4B and 7B AC checkpoints and the AndroidWorld (AW) and web variants are separate releases whose results apply to those variants. The card prose and config.json name InternVL2-8B (InternLM2 language model) as the starting model, while the card's YAML base_model field says InternVL2-4B; the prose and configuration are followed. Four public Safetensors shards are present. The card declares Apache-2.0 for the checkpoint. No checkpoint was loaded and no result was reproduced.

- 完整记录 JSON：https://awesomecua.com/resources/url-2be7f81cdca0eb8566c6/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：Apache-2.0 — https://huggingface.co/OS-Copilot/OS-Genesis-8B-AC/raw/23c57d2ddd6104166f6831b538938d610e1ac14a/README.md

- 权重审核：Publisher model-card declaration for the checkpoint; base-model, code and training-data terms are separate.
  来源：https://huggingface.co/OS-Copilot/OS-Genesis-8B-AC/raw/23c57d2ddd6104166f6831b538938d610e1ac14a/README.md

### 一手证据

- https://huggingface.co/OS-Copilot/OS-Genesis-8B-AC/raw/23c57d2ddd6104166f6831b538938d610e1ac14a/README.md（获取于 2026-10-19T06:17:57Z；SHA-256：a95c10ea8df58998bd2043aa784b9f0f6c3b9cc7e2a57187bd40526761d7acba）
- https://huggingface.co/api/models/OS-Copilot/OS-Genesis-8B-AC/revision/23c57d2ddd6104166f6831b538938d610e1ac14a（获取于 2026-10-19T06:17:56Z；SHA-256：c437af293184a7482df050a54eb1766d89b437661cf77984d9b7f2006f6bcfed）
- https://huggingface.co/OS-Copilot/OS-Genesis-8B-AC/raw/23c57d2ddd6104166f6831b538938d610e1ac14a/config.json（获取于 2026-10-18T15:47:34Z；SHA-256：918ec82f37bd5bf98f1e2a01940943f4dc7b60b01751447e32324410597278d5）
- https://huggingface.co/OS-Copilot/OS-Genesis-8B-AC/raw/23c57d2ddd6104166f6831b538938d610e1ac14a/README.md（获取于 2026-10-19T06:17:57Z；SHA-256：a95c10ea8df58998bd2043aa784b9f0f6c3b9cc7e2a57187bd40526761d7acba）

---

## OS-Genesis 8B AW

面向 AndroidWorld 的 InternVL2-8B 检查点，基于 OS-Genesis 移动端轨迹训练；模型卡以截图、无障碍树、目标和操作历史提示其生成下一步思考与操作。

- 目录页面：https://awesomecua.com/resources/url-2eaf614de14193997f33/
- 原始来源：https://huggingface.co/OS-Copilot/OS-Genesis-8B-AW
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：手机操作、动作预测、模仿学习
- 证据核查日期：2026-10-18T15:49:09Z
- ID：url:2eaf614de14193997f33

### 范围记录

This is the AW task-specific checkpoint; the 4B and 7B AW checkpoints and the AndroidControl (AC) and web variants are separate releases whose results apply to those variants. The card prose and config.json name InternVL2-8B (InternLM2 language model) as the starting model, while the card's YAML base_model field says InternVL2-4B; the prose and configuration are followed. Four public Safetensors shards are present. The card declares Apache-2.0 for the checkpoint. No checkpoint was loaded and no result was reproduced.

- 完整记录 JSON：https://awesomecua.com/resources/url-2eaf614de14193997f33/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：Apache-2.0 — https://huggingface.co/OS-Copilot/OS-Genesis-8B-AW/raw/d0cd248ad68531db06ab178fc28e8aff1fbfc4fc/README.md

- 权重审核：Publisher model-card declaration for the checkpoint; base-model, code and training-data terms are separate.
  来源：https://huggingface.co/OS-Copilot/OS-Genesis-8B-AW/raw/d0cd248ad68531db06ab178fc28e8aff1fbfc4fc/README.md

### 一手证据

- https://huggingface.co/OS-Copilot/OS-Genesis-8B-AW/raw/d0cd248ad68531db06ab178fc28e8aff1fbfc4fc/README.md（获取于 2026-10-18T15:49:09Z；SHA-256：f0cc611dbfad9747eb40b847ea898dc5acd5e53a7012d4f0a233d00747041c8d）
- https://huggingface.co/api/models/OS-Copilot/OS-Genesis-8B-AW（获取于 2026-10-18T15:49:10Z；SHA-256：ecefebf79f90b77f135093ab69ab9a0c562ecac3de4c2dbd2be95b6d9fc0d15b）
- https://huggingface.co/OS-Copilot/OS-Genesis-8B-AW/raw/d0cd248ad68531db06ab178fc28e8aff1fbfc4fc/config.json（获取于 2026-10-18T15:49:10Z；SHA-256：918ec82f37bd5bf98f1e2a01940943f4dc7b60b01751447e32324410597278d5）
- https://huggingface.co/OS-Copilot/OS-Genesis-8B-AW/raw/d0cd248ad68531db06ab178fc28e8aff1fbfc4fc/README.md（获取于 2026-10-18T15:49:09Z；SHA-256：f0cc611dbfad9747eb40b847ea898dc5acd5e53a7012d4f0a233d00747041c8d）

---

## OS-Genesis 8B WA

面向 WebArena 的 InternVL2-8B 检查点，使用 OS-Genesis 逆向任务合成产生的网页轨迹训练；示例提示将截图、无障碍树与指令和动作历史配对。

- 目录页面：https://awesomecua.com/resources/url-f2c34526651f5f57cf98/
- 原始来源：https://huggingface.co/OS-Copilot/OS-Genesis-8B-WA
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、动作预测、模仿学习
- 证据核查日期：2026-10-18T16:15:54Z
- ID：url:f2c34526651f5f57cf98

### 范围记录

Hub API at revision d1ec7c7f lists four BF16 safetensors shards (about 8.08B parameters) in the InternVLChatModel architecture, with custom InternViT and InternLM2 modeling files; the repository is publicly accessible. The card prose and config.json name InternVL2-8B (InternLM2 language model) as the starting model, while the card's YAML base_model field says InternVL2-4B; the prose and configuration are followed. The card lists this checkpoint in its WA table with the OS-Genesis web training file and points to WebArena evaluation code, although its quick-start sentence calls it a mobile action model and its table caption says AndroidControl. The OS-Genesis README lists it under Web. The card declares Apache-2.0. The 4B and 7B WA checkpoints and the AndroidWorld and AndroidControl variants are separate releases, and no result is transferred to this checkpoint; no weights were loaded.

- 完整记录 JSON：https://awesomecua.com/resources/url-f2c34526651f5f57cf98/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/OS-Copilot/OS-Genesis-8B-WA/raw/d1ec7c7f7dd2478d1830e04a812fd216a479e34c/README.md

### 一手证据

- https://huggingface.co/OS-Copilot/OS-Genesis-8B-WA/raw/d1ec7c7f7dd2478d1830e04a812fd216a479e34c/README.md（获取于 2026-10-18T16:15:54Z；SHA-256：c966adef0998300a623921d0882bf155025da261357263cef3ed8c3ac165ed6e）
- https://huggingface.co/api/models/OS-Copilot/OS-Genesis-8B-WA/revision/d1ec7c7f7dd2478d1830e04a812fd216a479e34c（获取于 2026-10-18T16:15:55Z；SHA-256：27a4a4c781412908e220a274b39085507aed74fd56fca2471d9c2b3c7019da37）
- https://huggingface.co/OS-Copilot/OS-Genesis-8B-WA/raw/d1ec7c7f7dd2478d1830e04a812fd216a479e34c/config.json（获取于 2026-10-18T16:15:55Z；SHA-256：918ec82f37bd5bf98f1e2a01940943f4dc7b60b01751447e32324410597278d5）
- https://raw.githubusercontent.com/OS-Copilot/OS-Genesis/72128850dad4ca9ba642ee7399794b4fb8f5154d/README.md（获取于 2026-10-18T16:15:57Z；SHA-256：430e495ab250395d666854bd18b0fc29b819cd784cd7730215ef65e461834d0d）
- https://huggingface.co/OS-Copilot/OS-Genesis-8B-WA/raw/d1ec7c7f7dd2478d1830e04a812fd216a479e34c/README.md（获取于 2026-10-18T16:15:54Z；SHA-256：c966adef0998300a623921d0882bf155025da261357263cef3ed8c3ac165ed6e）

---

## Qwen2.5-VL-3B-Instruct

这是指令微调的视觉语言模型，可理解界面布局、定位点或边界框，并用于电脑和手机操作；模型卡报告了屏幕与移动智能体评测结果。

- 目录页面：https://awesomecua.com/resources/url-52ec96785d9c0ae8e039/
- 原始来源：https://huggingface.co/Qwen/Qwen2.5-VL-3B-Instruct
- 类型：模型
- 审核状态：已审核
- 范围：相关研究
- 运行环境：桌面、Android、网页、跨平台
- 主题：界面理解、GUI 定位、手机操作、评测
- 证据核查日期：2026-11-09T05:05:22Z
- ID：url:52ec96785d9c0ae8e039

### 范围记录

The repository contains model weights and configuration files. The card names the qwen-research license and provides Transformers usage instructions.

- 完整记录 JSON：https://awesomecua.com/resources/url-52ec96785d9c0ae8e039/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/models/Qwen/Qwen2.5-VL-3B-Instruct（获取于 2026-11-09T05:05:22Z；SHA-256：63145cf94c6a3272f9b9bf335aa402a05fe796a54fbf9790f80d7ac9293854ab）
- https://huggingface.co/api/models/Qwen/Qwen2.5-VL-3B-Instruct（获取于 2026-11-09T05:05:22Z；SHA-256：63145cf94c6a3272f9b9bf335aa402a05fe796a54fbf9790f80d7ac9293854ab）

---

## ScreenVLM

该模型将网页截图转换为结构化标记，其中包含界面元素的位置、类别标签和可见文本。

- 目录页面：https://awesomecua.com/resources/url-e3d85e557f8d53f8df64/
- 原始来源：https://huggingface.co/docling-project/ScreenVLM
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：界面理解、GUI 定位
- 证据核查日期：2026-11-09T19:58:08Z
- ID：url:e3d85e557f8d53f8df64

### 范围记录

The card describes a ScreenParse v2 checkpoint, a retained v1 branch, and inference examples. It declares an Apache 2.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-e3d85e557f8d53f8df64/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/docling-project/ScreenVLM

### 一手证据

- https://huggingface.co/api/models/docling-project/ScreenVLM（获取于 2026-11-09T19:58:08Z；SHA-256：32f485c020c27777b09d2698a0fbf7ae77712b13cb75ad4d7deecd1d8e6d9c37）
- https://huggingface.co/api/models/docling-project/ScreenVLM（获取于 2026-11-09T19:58:08Z；SHA-256：32f485c020c27777b09d2698a0fbf7ae77712b13cb75ad4d7deecd1d8e6d9c37）

---

## ShowUI-π

面向 GUI 拖拽操作的视觉语言动作模型及训练代码，提供模型检查点和连续动作评估数据的链接。

- 目录页面：https://awesomecua.com/resources/github-showlab-showui-pi/
- 原始来源：https://github.com/showlab/showui-pi
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：GUI 定位、自动化
- 证据核查日期：2026-10-16T11:09:28Z
- ID：github:showlab/showui-pi

- 完整记录 JSON：https://awesomecua.com/resources/github-showlab-showui-pi/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/showlab/showui-pi/HEAD/README.md（获取于 2026-10-16T11:09:28Z；SHA-256：88df552ccbe80efd7020905d77d526f4f9efe2d09a11fed2714b083988f9dcef）

---

## Aria-UI/Aria-UI-base

Aria-UI/Aria-UI-base 是 GUI 定位模型权重，可根据指令和界面图像输出目标坐标；模型卡介绍了结合历史输入的方式及推理示例。

- 目录页面：https://awesomecua.com/resources/url-2866edbea80fa34aa684/
- 原始来源：https://huggingface.co/Aria-UI/Aria-UI-base
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：Android、桌面
- 主题：GUI 定位、界面理解、交互历史
- 证据核查日期：2026-11-09T05:05:02Z
- ID：url:2866edbea80fa34aa684

### 范围记录

The repository contains sharded safetensors weights and model code. The card names rhymes-ai/Aria-Base-8K as its base model and declares Apache-2.0 licensing.

- 完整记录 JSON：https://awesomecua.com/resources/url-2866edbea80fa34aa684/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/Aria-UI/Aria-UI-base

### 一手证据

- https://huggingface.co/api/models/Aria-UI/Aria-UI-base（获取于 2026-11-09T05:05:02Z；SHA-256：3690c301c080841a1d4f5b38970d69b6d35c4ed1b55540e488b0a52b549aa40b）
- https://huggingface.co/api/models/Aria-UI/Aria-UI-base（获取于 2026-11-09T05:05:02Z；SHA-256：3690c301c080841a1d4f5b38970d69b6d35c4ed1b55540e488b0a52b549aa40b）

---

## AutoGLM Phone 9B Multilingual

面向 Open-AutoGLM 的 AutoGLM 手机智能体模型检查点多语言版本，同样由 GLM-4.1V-9B-Base 微调，约有 10.3B 个 BF16 参数。

- 目录页面：https://awesomecua.com/resources/url-d236e7ec7a2b0028950a/
- 原始来源：https://huggingface.co/zai-org/AutoGLM-Phone-9B-Multilingual
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：Android、iOS
- 主题：手机操作
- 证据核查日期：2026-10-16T06:50:49Z
- ID：url:d236e7ec7a2b0028950a

- 完整记录 JSON：https://awesomecua.com/resources/url-d236e7ec7a2b0028950a/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：mit — https://huggingface.co/zai-org/AutoGLM-Phone-9B-Multilingual

### 一手证据

- https://huggingface.co/api/models/zai-org/AutoGLM-Phone-9B-Multilingual（获取于 2026-10-16T06:50:49Z；SHA-256：d66bc86d9fb61f88d1456b36cb0c2c9ab5e178b55bc9d34f307b35733f9b90bc）
- https://huggingface.co/api/models/zai-org/AutoGLM-Phone-9B-Multilingual（获取于 2026-10-16T06:50:49Z；SHA-256：d66bc86d9fb61f88d1456b36cb0c2c9ab5e178b55bc9d34f307b35733f9b90bc）

---

## CogAgent

用于 GUI 理解与交互的视觉语言模型。

- 目录页面：https://awesomecua.com/resources/github-thudm-cogagent/
- 原始来源：https://github.com/THUDM/CogAgent
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：GUI 定位、界面理解
- 证据核查日期：2026-10-16T06:36:00Z
- ID：github:thudm/cogagent

- 完整记录 JSON：https://awesomecua.com/resources/github-thudm-cogagent/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/THUDM/CogAgent/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/THUDM/CogAgent/HEAD/README.md（获取于 2026-10-16T06:36:00Z；SHA-256：f025e4bc9d920ec982525394c69b87043aae87fbe719de4b9e973408a44211e2）
- https://raw.githubusercontent.com/THUDM/CogAgent/HEAD/LICENSE（获取于 2026-10-16T06:42:00Z；SHA-256：c6a77f53ba7933f07b95807e972e50259921344e777e52a6a8bc690373df2d74）

---

## CogVLM2

CogVLM2 发布支持视觉定位、文档阅读和 GUI 理解的高分辨率图像及视频视觉语言模型。

- 目录页面：https://awesomecua.com/resources/github-thudm-cogvlm2/
- 原始来源：https://github.com/THUDM/CogVLM2
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、网页、桌面
- 主题：界面理解、视频、GUI 定位
- 证据核查日期：2026-11-04T13:12:40Z
- ID：github:thudm/cogvlm2

- 完整记录 JSON：https://awesomecua.com/resources/github-thudm-cogvlm2/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/THUDM/CogVLM2/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/THUDM/CogVLM2/HEAD/README.md（获取于 2026-11-04T13:12:40Z；SHA-256：ac03b56804c539c2550c5ad6f90b35c04f3f15df8c91c583c81c3f3bd862bf9b）
- https://raw.githubusercontent.com/THUDM/CogVLM2/HEAD/LICENSE（获取于 2026-11-04T13:22:41Z；SHA-256：38c241871bdea2a35c5b724e543d8bf4229bc5efb8adb4420fb4620e70783d2a）

---

## cua-s1-forms

一个含 706,048 个参数的 GUI 表单动作评分模型，可并行评估各字段的候选操作。发布内容包括 safetensors 权重和配置文件。

- 目录页面：https://awesomecua.com/resources/url-721c94bd6f2f3edc35ba/
- 原始来源：https://huggingface.co/cua-ai/cua-s1-forms
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：动作预测、自动化、数据生成
- 证据核查日期：2026-11-09T05:05:07Z
- ID：url:721c94bd6f2f3edc35ba

### 范围记录

The card describes training on 10,000 synthetic form episodes and declares an MIT license. Loading requires the cua-s1 package; the repository supplies a safetensors file and JSON configuration.

- 完整记录 JSON：https://awesomecua.com/resources/url-721c94bd6f2f3edc35ba/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：mit — https://huggingface.co/cua-ai/cua-s1-forms

### 一手证据

- https://huggingface.co/api/models/cua-ai/cua-s1-forms（获取于 2026-11-09T05:05:07Z；SHA-256：09edd46976fa2fcede89193595a0b2e02c9726ab867413ac9b076990650fa1e2）
- https://huggingface.co/api/models/cua-ai/cua-s1-forms（获取于 2026-11-09T05:05:07Z；SHA-256：09edd46976fa2fcede89193595a0b2e02c9726ab867413ac9b076990650fa1e2）

---

## DeskMind Eyes

DeskMind Eyes 是紧凑的 4B GUI 视觉定位模型及训练方案，用于在桌面截图中定位点击目标。

- 目录页面：https://awesomecua.com/resources/github-deskmind-ai-eyes/
- 原始来源：https://github.com/deskmind-ai/eyes
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、macOS、网页
- 主题：GUI 定位、界面理解、效率
- 证据核查日期：2026-11-04T14:02:44Z
- ID：github:deskmind-ai/eyes

- 完整记录 JSON：https://awesomecua.com/resources/github-deskmind-ai-eyes/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/deskmind-ai/eyes/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/deskmind-ai/eyes/HEAD/README.md（获取于 2026-11-04T14:02:44Z；SHA-256：d9b8b801f17d3448df37a7be1187f32149bac72a3427bf22f04192feea1042c4）
- https://raw.githubusercontent.com/deskmind-ai/eyes/HEAD/LICENSE（获取于 2026-11-04T14:07:24Z；SHA-256：1ff13e6d4ef6873561edb424365c17c311cbe0807f4afa5d7dda46ab6c5c659d）

---

## Dreamer-7B

WebDreamer 模型检查点，根据截图和文字描述预测网页操作的后果。

- 目录页面：https://awesomecua.com/resources/url-e3c1a2a2d556e4728953/
- 原始来源：https://huggingface.co/osunlp/Dreamer-7B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：世界模型、规划
- 证据核查日期：2026-10-16T11:10:45Z
- ID：url:e3c1a2a2d556e4728953

- 完整记录 JSON：https://awesomecua.com/resources/url-e3c1a2a2d556e4728953/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/osunlp/Dreamer-7B/raw/main/README.md

### 一手证据

- https://huggingface.co/osunlp/Dreamer-7B/raw/main/README.md（获取于 2026-10-16T11:10:45Z；SHA-256：f15e05cc2718948e344bd1fb943402797ef2e3f2130a9ce2fd94d419210c0574）
- https://huggingface.co/osunlp/Dreamer-7B/raw/main/README.md（获取于 2026-10-16T11:10:45Z；SHA-256：f15e05cc2718948e344bd1fb943402797ef2e3f2130a9ce2fd94d419210c0574）

---

## Dreamer-7B-Classifieds

Dreamer-7B-Classifieds 是面向 Classifieds 网页领域的 WebDreamer 模型检查点，通过模拟候选操作的结果辅助规划。

- 目录页面：https://awesomecua.com/resources/url-b7ccf7acb2e9d8a11853/
- 原始来源：https://huggingface.co/osunlp/Dreamer-7B-Classifieds
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、世界模型、规划
- 证据核查日期：2026-11-09T05:05:05Z
- ID：url:b7ccf7acb2e9d8a11853

### 范围记录

The repository contains sharded safetensors weights and tokenizer files. The card names Qwen2-VL-7B as its base model and declares an Apache 2.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-b7ccf7acb2e9d8a11853/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/osunlp/Dreamer-7B-Classifieds

### 一手证据

- https://huggingface.co/api/models/osunlp/Dreamer-7B-Classifieds（获取于 2026-11-09T05:05:05Z；SHA-256：e2a0db461f7d647ab0255a9d1deb0d17f512477d1d37ed465412230f87c2ef76）
- https://huggingface.co/api/models/osunlp/Dreamer-7B-Classifieds（获取于 2026-11-09T05:05:05Z；SHA-256：e2a0db461f7d647ab0255a9d1deb0d17f512477d1d37ed465412230f87c2ef76）

---

## Dreamer-7B-Reddit

Dreamer-7B-Reddit 是 WebDreamer 的 Reddit 领域模型权重，可预测拟执行操作后的屏幕状态，辅助网页智能体规划。

- 目录页面：https://awesomecua.com/resources/url-dfa8047521d1f3b3aa54/
- 原始来源：https://huggingface.co/osunlp/Dreamer-7B-Reddit
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、规划、世界模型
- 证据核查日期：2026-11-09T05:05:01Z
- ID：url:dfa8047521d1f3b3aa54

### 范围记录

The repository lists safetensors weight shards and names Qwen/Qwen2-VL-7B as its base model. The card declares an Apache 2.0 license and shows a vLLM inference command.

- 完整记录 JSON：https://awesomecua.com/resources/url-dfa8047521d1f3b3aa54/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/osunlp/Dreamer-7B-Reddit

### 一手证据

- https://huggingface.co/api/models/osunlp/Dreamer-7B-Reddit（获取于 2026-11-09T05:05:01Z；SHA-256：0363a2b2b31601371452e4132e9f41e948bb192cde0b0e377a8b034090eadd87）
- https://huggingface.co/api/models/osunlp/Dreamer-7B-Reddit（获取于 2026-11-09T05:05:01Z；SHA-256：0363a2b2b31601371452e4132e9f41e948bb192cde0b0e377a8b034090eadd87）

---

## Dreamer-7B-Shopping

Dreamer-7B-Shopping 是面向购物网站的 WebDreamer 模型权重，通过根据截图预测候选网页动作的结果，辅助智能体规划。

- 目录页面：https://awesomecua.com/resources/url-3173abbb295c74d0e9ec/
- 原始来源：https://huggingface.co/osunlp/Dreamer-7B-Shopping
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：世界模型、规划、网页导航
- 证据核查日期：2026-11-09T05:05:22Z
- ID：url:3173abbb295c74d0e9ec

### 范围记录

The card names Qwen2-VL-7B as the base model, declares an Apache 2.0 license, and links the WebDreamer repository and paper.

- 完整记录 JSON：https://awesomecua.com/resources/url-3173abbb295c74d0e9ec/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/osunlp/Dreamer-7B-Shopping

### 一手证据

- https://huggingface.co/api/models/osunlp/Dreamer-7B-Shopping（获取于 2026-11-09T05:05:22Z；SHA-256：ffbcb1a16505809a96941c71cbd02364c347c48bc8ae6da412bae7a8326bf96e）
- https://huggingface.co/api/models/osunlp/Dreamer-7B-Shopping（获取于 2026-11-09T05:05:22Z；SHA-256：ffbcb1a16505809a96941c71cbd02364c347c48bc8ae6da412bae7a8326bf96e）

---

## Eagle

Eagle 是一个视觉语言模型家族，其中的 LocateAnything 定位组件可定位图形界面元素及其他视觉目标。

- 目录页面：https://awesomecua.com/resources/github-nvlabs-eagle/
- 原始来源：https://github.com/NVlabs/Eagle
- 类型：模型
- 审核状态：已审核
- 范围：相关研究
- 运行环境：unspecified
- 主题：GUI 定位、界面理解
- 证据核查日期：2026-11-09T19:57:04Z
- ID：github:nvlabs/eagle

### 范围记录

The repository links model collections and contains code and documentation for several Eagle variants and LocateAnything. The README labels the code license Apache 2.0 and the model license NVIDIA License.

- 完整记录 JSON：https://awesomecua.com/resources/github-nvlabs-eagle/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/NVlabs/Eagle/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/NVlabs/Eagle/HEAD/README.md（获取于 2026-11-09T19:57:04Z；SHA-256：22ca427d29d86db52b7e9d05bc7c20317c06f4ccd5437bfc8beb9d5e61d829a1）
- https://raw.githubusercontent.com/NVlabs/Eagle/HEAD/LICENSE（获取于 2026-11-09T14:20:50Z；SHA-256：c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4）

---

## EvoCUA

EvoCUA 项目提供计算机使用模型及训练资源。

- 目录页面：https://awesomecua.com/resources/github-meituan-evocua/
- 原始来源：https://github.com/meituan/EvoCUA
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：强化学习、规划
- 证据核查日期：2026-10-16T06:35:59Z
- ID：github:meituan/evocua

- 完整记录 JSON：https://awesomecua.com/resources/github-meituan-evocua/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/meituan/EvoCUA/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/meituan/EvoCUA/HEAD/README.md（获取于 2026-10-16T06:35:59Z；SHA-256：b00a072dfde61f774db6acf94fcde9bd32337b1b4f16a178998378d842bbbe4d）
- https://raw.githubusercontent.com/meituan/EvoCUA/HEAD/LICENSE（获取于 2026-10-16T06:42:00Z；SHA-256：a8d1d88a0f9cce3cdbff73b03a80dc5e5d69e3ba2443946c268815a550c9e0ec）

---

## Fara

Fara 是 Microsoft 的浏览器操作智能体模型，通过截图预测点击坐标执行操作，无需无障碍树；继 Fara-7B 之后，Fara1.5 提供 4B、9B 和 27B 版本。

- 目录页面：https://awesomecua.com/resources/github-microsoft-fara/
- 原始来源：https://github.com/microsoft/fara
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：规划、网页导航
- 证据核查日期：2026-10-16T06:36:00Z
- ID：github:microsoft/fara

- 完整记录 JSON：https://awesomecua.com/resources/github-microsoft-fara/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/microsoft/fara/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/microsoft/fara/HEAD/README.md（获取于 2026-10-16T06:36:00Z；SHA-256：ce11bdfe8354eb9c3b8a985dd5ddd21f88f94fb5fb9d00c9b01a76226f0b0a36）
- https://raw.githubusercontent.com/microsoft/fara/HEAD/LICENSE（获取于 2026-10-16T06:42:00Z；SHA-256：98a96c38494df4963951e32b81ec4effebe4c8a812ab8d9e7d185d59e86fe2fc）

---

## GroundNext-7B-V0

基于 Qwen2.5-VL-7B-Instruct 微调的 GroundNext GUI 定位检查点，先在 GroundCUA 桌面数据上进行 SFT，再进行 RLOO 训练；将截图和指令映射为 computer_use 点击调用。

- 目录页面：https://awesomecua.com/resources/url-174e10a319d62c338879/
- 原始来源：https://huggingface.co/ServiceNow/GroundNext-7B-V0
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、跨平台
- 主题：GUI 定位、强化学习
- 证据核查日期：2026-10-18T15:37:29Z
- ID：url:174e10a319d62c338879

### 范围记录

The card's model is trained on desktop data only and reports publisher-run results on desktop grounding benchmarks and on mobile and web benchmarks (MMBench-GUI, ScreenSpot-v2). Its limitations say the model currently supports mouse clicks only, while the repository's groundcua.py system prompt declares a full computer_use tool schema with keyboard, scroll and drag actions. A 3B GroundNext model appears in the card's OSWorld table, but ServiceNow has not published a 3B checkpoint on the Hub. The Hub manifest lists four Safetensors shards and an index, and the API reports a Qwen2_5_VLForConditionalGeneration config with 8,292,166,656 BF16 parameters (the card states 7.0B). Apache-2.0 is the card's weight declaration and is not extended to the base model or training data.

- 完整记录 JSON：https://awesomecua.com/resources/url-174e10a319d62c338879/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/ServiceNow/GroundNext-7B-V0/raw/1c8864c5e64d04897b5d577711fccfc8782b65c0/README.md

### 一手证据

- https://huggingface.co/ServiceNow/GroundNext-7B-V0/raw/1c8864c5e64d04897b5d577711fccfc8782b65c0/README.md（获取于 2026-10-18T15:37:29Z；SHA-256：c655e19cc92de2b5794f629b885c1b6cc235457e75c71d7f60c78ca434a6fe4f）
- https://huggingface.co/api/models/ServiceNow/GroundNext-7B-V0?expand%5B%5D=sha&expand%5B%5D=gated&expand%5B%5D=disabled&expand%5B%5D=cardData&expand%5B%5D=config&expand%5B%5D=safetensors&expand%5B%5D=siblings&expand%5B%5D=lastModified（获取于 2026-10-18T15:37:30Z；SHA-256：a43aea947bea033c19fd4a02f7a9881a728bd264745680f4efe99556fdfa7ee1）
- https://huggingface.co/ServiceNow/GroundNext-7B-V0/raw/1c8864c5e64d04897b5d577711fccfc8782b65c0/groundcua.py（获取于 2026-10-18T15:37:30Z；SHA-256：8a6fbdd818e027f730677a63c03f7a0e02e7f548b48618a38cef8e7202006cca）
- https://huggingface.co/ServiceNow/GroundNext-7B-V0/raw/1c8864c5e64d04897b5d577711fccfc8782b65c0/README.md（获取于 2026-10-18T15:37:29Z；SHA-256：c655e19cc92de2b5794f629b885c1b6cc235457e75c71d7f60c78ca434a6fe4f）

---

## GUI-Actor-3B-Qwen2.5-VL-LiteTrain

这是一个基于 Qwen2.5-VL-3B、配有注意力动作头的图形界面定位模型。输入截图和指令后，它预测点击位置。

- 目录页面：https://awesomecua.com/resources/url-5e0c3173aea8edd0f3b7/
- 原始来源：https://huggingface.co/qianhuiwu/GUI-Actor-3B-Qwen2.5-VL-LiteTrain
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：GUI 定位、动作预测
- 证据核查日期：2026-11-09T19:57:46Z
- ID：url:5e0c3173aea8edd0f3b7

### 范围记录

The repository contains model weight shards, processor files and training metadata. The card provides inference code using the GUI-Actor package and declares an MIT license.

- 完整记录 JSON：https://awesomecua.com/resources/url-5e0c3173aea8edd0f3b7/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：mit — https://huggingface.co/qianhuiwu/GUI-Actor-3B-Qwen2.5-VL-LiteTrain

### 一手证据

- https://huggingface.co/api/models/qianhuiwu/GUI-Actor-3B-Qwen2.5-VL-LiteTrain（获取于 2026-11-09T19:57:46Z；SHA-256：646a8deab78db5fbfda4348c54577c84845b170df87ddeb97d36f072fa103a8a）
- https://huggingface.co/api/models/qianhuiwu/GUI-Actor-3B-Qwen2.5-VL-LiteTrain（获取于 2026-11-09T19:57:46Z；SHA-256：646a8deab78db5fbfda4348c54577c84845b170df87ddeb97d36f072fa103a8a）

---

## GUI-Actor-7B-Qwen2.5-VL

基于 Qwen2.5-VL-7B 的界面定位模型，根据截图和指令寻找目标控件。其注意力动作头预测点击位置，模型卡展示推理代码。

- 目录页面：https://awesomecua.com/resources/url-3e58eecd59c404508757/
- 原始来源：https://huggingface.co/microsoft/GUI-Actor-7B-Qwen2.5-VL
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：GUI 定位、界面理解、动作预测
- 证据核查日期：2026-11-09T05:04:59Z
- ID：url:3e58eecd59c404508757

### 范围记录

The repository lists sharded safetensors weights, processor files, and tokenizer files. The card names Qwen2.5-VL-7B-Instruct as its base model and declares an MIT license.

- 完整记录 JSON：https://awesomecua.com/resources/url-3e58eecd59c404508757/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：mit — https://huggingface.co/microsoft/GUI-Actor-7B-Qwen2.5-VL

### 一手证据

- https://huggingface.co/api/models/microsoft/GUI-Actor-7B-Qwen2.5-VL（获取于 2026-11-09T05:04:59Z；SHA-256：26f23fbbfa2cd832eeab9f61440ae7db69c1d34b00d4442a04fd25e30f445538）
- https://huggingface.co/api/models/microsoft/GUI-Actor-7B-Qwen2.5-VL（获取于 2026-11-09T05:04:59Z；SHA-256：26f23fbbfa2cd832eeab9f61440ae7db69c1d34b00d4442a04fd25e30f445538）

---

## GUI-Actor-Verifier-2B

一款图形界面定位验证模型，判断截图中标记的位置是否符合指令，并可为候选操作位置评分。

- 目录页面：https://awesomecua.com/resources/url-9b653775f6b9270304d3/
- 原始来源：https://huggingface.co/microsoft/GUI-Actor-Verifier-2B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：GUI 定位、奖励模型
- 证据核查日期：2026-11-09T05:05:21Z
- ID：url:9b653775f6b9270304d3

### 范围记录

The repository lists model weights and tokenizer files. The card names UI-TARS-2B-SFT as its base model and declares an MIT license.

- 完整记录 JSON：https://awesomecua.com/resources/url-9b653775f6b9270304d3/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：mit — https://huggingface.co/microsoft/GUI-Actor-Verifier-2B

### 一手证据

- https://huggingface.co/api/models/microsoft/GUI-Actor-Verifier-2B（获取于 2026-11-09T05:05:21Z；SHA-256：170087cdb7fc29cf94daada957f2a8fcdc73efa0ee042f519674bddbd32311d4）
- https://huggingface.co/api/models/microsoft/GUI-Actor-Verifier-2B（获取于 2026-11-09T05:05:21Z；SHA-256：170087cdb7fc29cf94daada957f2a8fcdc73efa0ee042f519674bddbd32311d4）

---

## GUI-G2

GUI 定位模型，包含 3B 和 7B 两个版本；训练时使用高斯奖励衡量点击位置与元素中心的接近程度及区域覆盖情况，并按元素大小调整方差。

- 目录页面：https://awesomecua.com/resources/github-zju-real-gui-g2/
- 原始来源：https://github.com/ZJU-REAL/GUI-G2
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：GUI 定位
- 证据核查日期：2026-10-16T06:36:00Z
- ID：github:zju-real/gui-g2

- 完整记录 JSON：https://awesomecua.com/resources/github-zju-real-gui-g2/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/ZJU-REAL/GUI-G2/HEAD/README.md（获取于 2026-10-16T06:36:00Z；SHA-256：f9ecdf208ed4b7845ea4dbd1a7c936c016d11f7ec28f17e71338ab3c2f5b5c0d）

---

## GUI-R1

提供使用可验证奖励的 GUI 操作模型训练与评估代码，以及相关强化学习数据和检查点链接。

- 目录页面：https://awesomecua.com/resources/github-ritzz-ai-gui-r1/
- 原始来源：https://github.com/ritzz-ai/GUI-R1
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：强化学习、GUI 定位
- 证据核查日期：2026-10-16T10:43:11Z
- ID：github:ritzz-ai/gui-r1

- 完整记录 JSON：https://awesomecua.com/resources/github-ritzz-ai-gui-r1/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/ritzz-ai/GUI-R1/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/ritzz-ai/GUI-R1/HEAD/README.md（获取于 2026-10-16T10:43:11Z；SHA-256：94c7c78bede11dde727940f56592a04594c1c59438812dff47540bf53c1bed7d）
- https://raw.githubusercontent.com/ritzz-ai/GUI-R1/HEAD/LICENSE（获取于 2026-10-16T10:48:42Z；SHA-256：c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4）

---

## Holo1 3B

Holo1 3B 动作视觉语言模型由 Qwen2.5-VL-3B-Instruct 微调而成，可在 Surfer-H 浏览器智能体中担任策略模型、UI 定位器或答案验证器。

- 目录页面：https://awesomecua.com/resources/url-c491c446a71cac1def66/
- 原始来源：https://huggingface.co/Hcompany/Holo1-3B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、GUI 定位、规划
- 证据核查日期：2026-10-19T06:19:41Z
- ID：url:c491c446a71cac1def66

### 范围记录

The manifest lists two Safetensors shards (3,754,622,976 BF16 parameters per the Hub API) plus localization, navigation and ScreenSpot evaluation scripts. The card's license link and the LICENSE file put the weights under the H Product Research License Agreement, a non-commercial research license that also defers to the Qwen Research License for the base model; this is not generalized to other Holo1 sizes. The card's 89.7% WebVoyager figure is for Surfer-H with Holo1-3B, measured by the publisher. H's current models page lists later Holo generations and leaves Holo1 unlisted, leaving a family relation unrecorded.

- 完整记录 JSON：https://awesomecua.com/resources/url-c491c446a71cac1def66/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：H Product Research License Agreement — https://huggingface.co/Hcompany/Holo1-3B/raw/94334a5f2f6b491c2d6ea68cf0ecaf050d28a94d/LICENSE

- 权重审核：The card declares license 'other' and links the repository LICENSE, a custom non-commercial research agreement that defers to the Qwen Research License for base-model materials; code and training-data terms are separate.
  来源：https://huggingface.co/Hcompany/Holo1-3B/raw/94334a5f2f6b491c2d6ea68cf0ecaf050d28a94d/LICENSE

### 一手证据

- https://huggingface.co/Hcompany/Holo1-3B/raw/94334a5f2f6b491c2d6ea68cf0ecaf050d28a94d/README.md（获取于 2026-10-19T06:19:41Z；SHA-256：1f7d569373b23cfadf64b062afdcc84ff4c2e597d4ec25e96dc2db2a13a35c18）
- https://huggingface.co/api/models/Hcompany/Holo1-3B/revision/94334a5f2f6b491c2d6ea68cf0ecaf050d28a94d（获取于 2026-10-19T06:19:41Z；SHA-256：fca6cbe81ad520747c9f0911339be7604fb8e1a259f5afc132b01aad2d80b9a0）
- https://huggingface.co/Hcompany/Holo1-3B/raw/94334a5f2f6b491c2d6ea68cf0ecaf050d28a94d/config.json（获取于 2026-10-18T16:08:06Z；SHA-256：9e259a64de67f56b23a616e241b8cd130923d2a2759f294b6e1a2471465889f9）
- https://huggingface.co/Hcompany/Holo1-3B/raw/94334a5f2f6b491c2d6ea68cf0ecaf050d28a94d/LICENSE（获取于 2026-10-18T16:08:07Z；SHA-256：97a9be6c88b4d129c783ba8389ceabf47ad4a283edd441037904adcbe6b7557c）
- https://huggingface.co/Hcompany/Holo1-3B/raw/94334a5f2f6b491c2d6ea68cf0ecaf050d28a94d/README.md（获取于 2026-10-19T06:19:41Z；SHA-256：1f7d569373b23cfadf64b062afdcc84ff4c2e597d4ec25e96dc2db2a13a35c18）

---

## Holo1 7B

为 Surfer-H 网页智能体系统发布的基于 Qwen2.5-VL 的动作模型，可承担策略、界面定位和验证任务。

- 目录页面：https://awesomecua.com/resources/url-f35cfcbaeb79663eabeb/
- 原始来源：https://huggingface.co/Hcompany/Holo1-7B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、GUI 定位、规划
- 证据核查日期：2026-10-17T02:44:50Z
- ID：url:f35cfcbaeb79663eabeb

### 范围记录

Four public safetensors shards and example navigation/localization files are present. The model card declares Apache-2.0. Reported Surfer-H results depend on the assembled policy/localizer/validator configuration.

- 完整记录 JSON：https://awesomecua.com/resources/url-f35cfcbaeb79663eabeb/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/Hcompany/Holo1-7B/raw/main/README.md

### 一手证据

- https://huggingface.co/Hcompany/Holo1-7B/raw/main/README.md（获取于 2026-10-17T02:44:50Z；SHA-256：a7e185380bb02150d761651420cccc9c4a57f67c70a5dec3b7f85af63fb8773b）
- https://huggingface.co/api/models/Hcompany/Holo1-7B（获取于 2026-10-17T02:44:50Z；SHA-256：66076674ebbdcf9faeb408ebd137ac1283fb56b1011acd7037ebb73e09ba749d）
- https://huggingface.co/Hcompany/Holo1-7B/raw/main/README.md（获取于 2026-10-17T02:44:50Z；SHA-256：a7e185380bb02150d761651420cccc9c4a57f67c70a5dec3b7f85af63fb8773b）

---

## Holo1.5 72B

H Company 的 Holo1.5 系列 72B 模型，基于 Qwen2.5-VL-72B-Instruct 微调，用于网页、桌面和移动界面的 UI 元素定位及屏幕问答。

- 目录页面：https://awesomecua.com/resources/url-a8e086f155c278e45c55/
- 原始来源：https://huggingface.co/Hcompany/Holo1.5-72B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、桌面、跨平台
- 主题：GUI 定位、界面理解、强化学习
- 证据核查日期：2026-10-18T16:06:30Z
- ID：url:a8e086f155c278e45c55

### 范围记录

The card describes supervised fine-tuning followed by online reinforcement learning (GRPO) on proprietary, synthetic and open-source UI data, with inputs up to 3840 x 2160 pixels. It declares a non-commercial CC BY-NC 4.0 license for the 72B weights, while the 3B and 7B Holo1.5 checkpoints carry different terms, so this declaration is not generalized to the series. The manifest lists 31 Safetensors shards and the Hub reports 73,410,777,344 BF16 parameters. Localization and QA scores on the card are publisher claims.

- 完整记录 JSON：https://awesomecua.com/resources/url-a8e086f155c278e45c55/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：CC-BY-NC-4.0 — https://huggingface.co/Hcompany/Holo1.5-72B/raw/9860b387b56bbdc30785169ac4928de0c0fc0675/README.md

- 权重审核：Publisher model-card declaration for the 72B weights (non-commercial); the Qwen2.5-VL-72B-Instruct base license, code and training-data terms are separate.
  来源：https://huggingface.co/Hcompany/Holo1.5-72B/raw/9860b387b56bbdc30785169ac4928de0c0fc0675/README.md

### 一手证据

- https://huggingface.co/Hcompany/Holo1.5-72B/raw/9860b387b56bbdc30785169ac4928de0c0fc0675/README.md（获取于 2026-10-18T16:06:30Z；SHA-256：153747d67809932cf8bd4476741ae1b1421ffb7309a754219fc91ccc8632c3be）
- https://huggingface.co/api/models/Hcompany/Holo1.5-72B（获取于 2026-10-18T16:06:29Z；SHA-256：29fdc7d785278615785a8286c2971fc3bdb4dee9664bfc4a8d4dccf732f9335e）
- https://huggingface.co/Hcompany/Holo1.5-72B/raw/9860b387b56bbdc30785169ac4928de0c0fc0675/config.json（获取于 2026-10-18T16:06:30Z；SHA-256：b0c1c47d5317a857b28f9d5a11a833ba14d38c573db217fced296892c686e6e2）
- https://huggingface.co/Hcompany/Holo1.5-72B/raw/9860b387b56bbdc30785169ac4928de0c0fc0675/README.md（获取于 2026-10-18T16:06:30Z；SHA-256：153747d67809932cf8bd4476741ae1b1421ffb7309a754219fc91ccc8632c3be）

---

## Holo2 235B-A22B

Holo2 研究预览版检查点基于 Qwen3-VL-235B-A22B-Thinking 微调，是总参数 235B、激活参数 22B 的混合专家模型，用于网页、桌面和移动屏幕的 UI 定位与导航。

- 目录页面：https://awesomecua.com/resources/url-dad3d02b2f9603713287/
- 原始来源：https://huggingface.co/Hcompany/Holo2-235B-A22B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、桌面、跨平台
- 主题：GUI 定位、规划、动作预测、强化学习
- 证据核查日期：2026-10-18T16:11:14Z
- ID：url:dad3d02b2f9603713287

### 范围记录

Hub API at revision f7f85b14 lists 96 BF16 safetensors shards (about 235.7B parameters) in the Qwen3VLMoeForConditionalGeneration architecture; the repository is publicly accessible. H Company's models page calls this release a research preview. The card describes supervised fine-tuning followed by online GRPO on a mix of open-source, synthetic and human-annotated data, some of it proprietary, and reports publisher localization scores including an iterative 'agentic localization' mode. No weights were downloaded. The card declares conflicting licenses; see the license review.

- 完整记录 JSON：https://awesomecua.com/resources/url-dad3d02b2f9603713287/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：CC-BY-NC-4.0 — https://huggingface.co/Hcompany/Holo2-235B-A22B/raw/f7f85b14ffdeafba313a1198407b9e2722b0341d/README.md

- 权重审核：The card's YAML license field is cc-by-nc-4.0 and its size list gives Holo2-235B-A22B a research-only, non-commercial license, and H Company's models page lists the Holo2-235B-A22B preview under CC BY-NC 4.0; a 'License: Apache 2.0' line in the card's developer block conflicts with both and is not adopted. Code and training-data terms are separate.
  来源：https://huggingface.co/Hcompany/Holo2-235B-A22B/raw/f7f85b14ffdeafba313a1198407b9e2722b0341d/README.md, https://hcompany.ai/research/models

### 一手证据

- https://huggingface.co/Hcompany/Holo2-235B-A22B/raw/f7f85b14ffdeafba313a1198407b9e2722b0341d/README.md（获取于 2026-10-18T16:11:14Z；SHA-256：4f6f76d177f42044f840327a941b259dd84d46622e63c960c9b259fe2700d2ac）
- https://huggingface.co/api/models/Hcompany/Holo2-235B-A22B/revision/f7f85b14ffdeafba313a1198407b9e2722b0341d（获取于 2026-10-18T16:10:49Z；SHA-256：a106ad31bf308a787574abc132bf3e5201c41a348452e1de476952fd7206beae）
- https://huggingface.co/Hcompany/Holo2-235B-A22B/raw/f7f85b14ffdeafba313a1198407b9e2722b0341d/config.json（获取于 2026-10-18T16:10:49Z；SHA-256：c24d2cbea1eff6495a9b28b3bc604afa86d20d347ef8379ed76c6139c171218e）
- https://hcompany.ai/research/models（获取于 2026-10-18T16:10:28Z；SHA-256：ddfa335cd71d0a7a4e61640752b1b24830f951a72c175e88fd03bf00a5e783c8）
- https://huggingface.co/Hcompany/Holo2-235B-A22B/raw/f7f85b14ffdeafba313a1198407b9e2722b0341d/README.md（获取于 2026-10-18T16:11:14Z；SHA-256：4f6f76d177f42044f840327a941b259dd84d46622e63c960c9b259fe2700d2ac）

---

## Holo2 30B-A3B

Holo2 混合专家检查点基于 Qwen3-VL-30B-A3B-Thinking，经过监督训练和在线强化学习，用于网页、桌面和移动屏幕的 UI 元素定位与多步导航。

- 目录页面：https://awesomecua.com/resources/url-ed8d5883c240b78e329f/
- 原始来源：https://huggingface.co/Hcompany/Holo2-30B-A3B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、桌面、跨平台
- 主题：GUI 定位、规划、动作预测、强化学习
- 证据核查日期：2026-10-18T16:06:57Z
- ID：url:ed8d5883c240b78e329f

### 范围记录

Hub API at revision 81dfb86d lists 13 BF16 safetensors shards (about 31.07B parameters) and config.json declares Qwen3VLMoeForConditionalGeneration with 128 experts, 8 active per token; the repository is publicly accessible. The card YAML declares CC-BY-NC-4.0 and its size list marks the 30B-A3B as research-only and non-commercial, while a generic 'Apache 2.0' line in the shared family text applies to the 4B and 8B sizes. H Company's models page lists Holo2 at 4B, 8B and 30B-A3B under CC BY-NC 4.0. Navigation and localization scores on the card were measured by the publisher inside its Surfer 2 agent.

- 完整记录 JSON：https://awesomecua.com/resources/url-ed8d5883c240b78e329f/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：CC-BY-NC-4.0 — https://huggingface.co/Hcompany/Holo2-30B-A3B/raw/81dfb86d56aef36d2b1d53870328e97eb107cdc8/README.md

- 权重审核：The card YAML declares cc-by-nc-4.0 and the card marks Holo2-30B-A3B as research-only (non-commercial); its generic Apache 2.0 line covers the 4B and 8B sizes and is not applied to this checkpoint.
  来源：https://huggingface.co/Hcompany/Holo2-30B-A3B/raw/81dfb86d56aef36d2b1d53870328e97eb107cdc8/README.md

### 一手证据

- https://huggingface.co/Hcompany/Holo2-30B-A3B/raw/81dfb86d56aef36d2b1d53870328e97eb107cdc8/README.md（获取于 2026-10-18T16:06:57Z；SHA-256：1c6013e3162ce129946c156bd827cc7d21ab33355b997cc11825b25f68cc377c）
- https://huggingface.co/api/models/Hcompany/Holo2-30B-A3B/revision/81dfb86d56aef36d2b1d53870328e97eb107cdc8（获取于 2026-10-18T16:06:57Z；SHA-256：51245a56fc3139e759c2ad9fdd66c682021be18709e0917827822f5d9c7e5f06）
- https://huggingface.co/Hcompany/Holo2-30B-A3B/raw/81dfb86d56aef36d2b1d53870328e97eb107cdc8/config.json（获取于 2026-10-18T16:06:57Z；SHA-256：1503651c977346f2c5569e49a58e68dbd97e18540aafc55c6be6617dd56e7464）
- https://hcompany.ai/research/models（获取于 2026-10-18T16:06:57Z；SHA-256：ddfa335cd71d0a7a4e61640752b1b24830f951a72c175e88fd03bf00a5e783c8）
- https://huggingface.co/Hcompany/Holo2-30B-A3B/raw/81dfb86d56aef36d2b1d53870328e97eb107cdc8/README.md（获取于 2026-10-18T16:06:57Z；SHA-256：1c6013e3162ce129946c156bd827cc7d21ab33355b997cc11825b25f68cc377c）

---

## Holotron 3 Nano

H Company 基于 NVIDIA Nemotron 3 Nano Omni 后训练的计算机使用策略检查点，采用每个词元激活 30B 参数中 3B 的混合 Mamba-MoE 架构，面向低延迟智能体任务。

- 目录页面：https://awesomecua.com/resources/url-f39d67f7a4a6f869f39c/
- 原始来源：https://huggingface.co/Hcompany/Holotron-3-Nano
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、桌面
- 主题：GUI 定位、动作预测、效率
- 证据核查日期：2026-10-19T06:02:55Z
- ID：url:f39d67f7a4a6f869f39c

### 范围记录

Hub API at revision 525e05a4 lists seven safetensors shards (about 33.01B parameters, nearly all BF16) with custom modeling code, and config.json declares NemotronH_Nano_Omni_Reasoning_V3 with 128 routed experts, 6 active per token, and a 262,144-token position limit; the repository is publicly accessible. The card text names the NVIDIA Open Model License while its metadata says 'other' and no license file ships; H's models page lists the same license. The card fetches the RADIO vision code from nvidia/C-RADIOv2-H while the release post names C-RADIOv4, so no encoder version is recorded. OSWorld-Verified, ScreenSpot-Pro, OSWorld-G and internal enterprise scores in the release post are publisher figures.

- 完整记录 JSON：https://awesomecua.com/resources/url-f39d67f7a4a6f869f39c/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：NVIDIA Open Model License — https://huggingface.co/Hcompany/Holotron-3-Nano/raw/525e05a4b21747ea5c32b09a5969bfc425d5e95c/README.md

- 权重审核：Publisher model-card text names the NVIDIA Open Model License for this checkpoint, matching H's models page; the Hub value 'other' is not a license name.
  来源：https://huggingface.co/Hcompany/Holotron-3-Nano/raw/525e05a4b21747ea5c32b09a5969bfc425d5e95c/README.md, https://hcompany.ai/research/models

### 一手证据

- https://huggingface.co/Hcompany/Holotron-3-Nano/raw/525e05a4b21747ea5c32b09a5969bfc425d5e95c/README.md（获取于 2026-10-19T06:02:55Z；SHA-256：5cc77556ea6205641e21d666ddd9a714e5f4b317a6300ebc4af1b80e835f2730）
- https://huggingface.co/api/models/Hcompany/Holotron-3-Nano/revision/525e05a4b21747ea5c32b09a5969bfc425d5e95c（获取于 2026-10-19T06:02:55Z；SHA-256：2cf0bf25a4651598ffa97f1f8346995e1621d5b7c6e8d9e222da2ff5c65201e1）
- https://huggingface.co/Hcompany/Holotron-3-Nano/raw/525e05a4b21747ea5c32b09a5969bfc425d5e95c/config.json（获取于 2026-10-19T06:02:55Z；SHA-256：c35380544d8a4e0363423330906500bf0b542a65daba17af2047637efad8c6ff）
- https://hcompany.ai/research/models（获取于 2026-10-19T06:02:56Z；SHA-256：ddfa335cd71d0a7a4e61640752b1b24830f951a72c175e88fd03bf00a5e783c8）
- https://hcompany.ai/newsroom/holotron3（获取于 2026-10-19T06:02:56Z；SHA-256：f1a85322e0c82ee5b12cf3dbdd986ba2578330df80859a059beddd12f34b573e）
- https://huggingface.co/Hcompany/Holotron-3-Nano/raw/525e05a4b21747ea5c32b09a5969bfc425d5e95c/README.md（获取于 2026-10-19T06:02:55Z；SHA-256：5cc77556ea6205641e21d666ddd9a714e5f4b317a6300ebc4af1b80e835f2730）

---

## Holotron-12B

H Company 与 NVIDIA 的计算机使用策略检查点，基于 Nemotron Nano 12B v2 VL 使用定位和导航数据微调，采用混合 SSM 与注意力骨干以实现高吞吐量多图像推理。

- 目录页面：https://awesomecua.com/resources/url-6c16f91d8d79d7836283/
- 原始来源：https://huggingface.co/Hcompany/Holotron-12B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、桌面、跨平台
- 主题：GUI 定位、动作预测、网页导航、效率
- 证据核查日期：2026-10-18T15:55:28Z
- ID：url:6c16f91d8d79d7836283

### 范围记录

The manifest lists six Safetensors shards, about 13.2B BF16 parameters by the Hub count. The card names the NVIDIA Open Model License in its text but sets no license field and ships no license file; H's models page lists the same license and includes Holotron-12B among the lab's open checkpoints. The fine-tuning mixture is proprietary and not released. Throughput and WebVoyager figures are publisher measurements.

- 完整记录 JSON：https://awesomecua.com/resources/url-6c16f91d8d79d7836283/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：NVIDIA Open Model License — https://huggingface.co/Hcompany/Holotron-12B/raw/a68349a8cbee7570c86e85c5864a3481ab2f3520/README.md

- 权重审核：Publisher model-card text names the NVIDIA Open Model License for this checkpoint, matching H's models page; code and training-data terms are separate.
  来源：https://huggingface.co/Hcompany/Holotron-12B/raw/a68349a8cbee7570c86e85c5864a3481ab2f3520/README.md, https://hcompany.ai/research/models

### 一手证据

- https://huggingface.co/Hcompany/Holotron-12B/raw/a68349a8cbee7570c86e85c5864a3481ab2f3520/README.md（获取于 2026-10-18T15:55:28Z；SHA-256：92912de5e547c322760b307abb5e917b80bc100237e52e95089019ce42b9e985）
- https://huggingface.co/api/models/Hcompany/Holotron-12B（获取于 2026-10-18T15:55:18Z；SHA-256：e89d926da5f3eb86e379dc922b002273aa58c7eddcae5526a6307dd650ed4be2）
- https://huggingface.co/Hcompany/Holotron-12B/raw/a68349a8cbee7570c86e85c5864a3481ab2f3520/config.json（获取于 2026-10-18T15:55:18Z；SHA-256：c122cb7428978b26e1dcb19fdd1bab6db8c33dcb42fc380d505783b5b189594f）
- https://hcompany.ai/research/models（获取于 2026-10-18T15:55:18Z；SHA-256：ddfa335cd71d0a7a4e61640752b1b24830f951a72c175e88fd03bf00a5e783c8）

---

## InfiGUI-G1

InfiGUI-G1 是 3B 和 7B 规模的定位模型，使用 Adaptive Exploration Policy Optimization 训练，在自适应探索奖励下每轮采样多个候选答案。

- 目录页面：https://awesomecua.com/resources/github-infixai-infigui-g1/
- 原始来源：https://github.com/InfiXAI/InfiGUI-G1
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：GUI 定位
- 证据核查日期：2026-10-16T06:36:00Z
- ID：github:infixai/infigui-g1

- 完整记录 JSON：https://awesomecua.com/resources/github-infixai-infigui-g1/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/InfiXAI/InfiGUI-G1/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/InfiXAI/InfiGUI-G1/HEAD/README.md（获取于 2026-10-16T06:36:00Z；SHA-256：4b68c82a2dd0063a450bde34c8bffbd931565a91a2982a5b47be7e711815b284）
- https://raw.githubusercontent.com/InfiXAI/InfiGUI-G1/HEAD/LICENSE（获取于 2026-10-16T06:42:01Z；SHA-256：c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4）

---

## InfiGUI-G1-3B

基于 Qwen2.5-VL-3B-Instruct 的界面定位模型，通过自适应探索训练，根据指令和屏幕图像找出界面元素的位置。

- 目录页面：https://awesomecua.com/resources/url-3888a4042043fb547705/
- 原始来源：https://huggingface.co/InfiX-ai/InfiGUI-G1-3B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：GUI 定位、强化学习、界面理解
- 证据核查日期：2026-11-09T05:05:13Z
- ID：url:3888a4042043fb547705

### 范围记录

The repository provides model weights and an inference example using Transformers and qwen-vl-utils. The card declares an Apache-2.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-3888a4042043fb547705/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/InfiX-ai/InfiGUI-G1-3B

### 一手证据

- https://huggingface.co/api/models/InfiX-ai/InfiGUI-G1-3B（获取于 2026-11-09T05:05:13Z；SHA-256：a6ffc2328de51d27436848ff4f8ef8f52911a58784105c14d99c1919a98376a8）
- https://huggingface.co/api/models/InfiX-ai/InfiGUI-G1-3B（获取于 2026-11-09T05:05:13Z；SHA-256：a6ffc2328de51d27436848ff4f8ef8f52911a58784105c14d99c1919a98376a8）

---

## InfiGUI-R1

分两个阶段训练的 3B GUI 智能体：先从教师模型蒸馏空间推理能力，再通过奖励准确子目标的强化学习训练错误恢复能力。

- 目录页面：https://awesomecua.com/resources/github-reallm-labs-infigui-r1/
- 原始来源：https://github.com/Reallm-Labs/InfiGUI-R1
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：强化学习、规划
- 证据核查日期：2026-10-16T06:36:00Z
- ID：github:reallm-labs/infigui-r1

- 完整记录 JSON：https://awesomecua.com/resources/github-reallm-labs-infigui-r1/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/Reallm-Labs/InfiGUI-R1/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/Reallm-Labs/InfiGUI-R1/HEAD/README.md（获取于 2026-10-16T06:36:00Z；SHA-256：5fd1399c88bdf406e7689765ccf0599b3b7e0ddbed082fa92bffdd7b120bd41a）
- https://raw.githubusercontent.com/Reallm-Labs/InfiGUI-R1/HEAD/LICENSE（获取于 2026-10-16T06:42:01Z；SHA-256：c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4）

---

## microsoft/OmniParser

已发布的屏幕解析模型权重，可在截图中检测可操作区域并描述图标，为图形界面智能体提供结构化屏幕信息。

- 目录页面：https://awesomecua.com/resources/url-b5fb13515d7779218f5d/
- 原始来源：https://huggingface.co/microsoft/OmniParser
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、桌面
- 主题：界面理解、GUI 定位
- 证据核查日期：2026-11-09T05:05:02Z
- ID：url:b5fb13515d7779218f5d

### 范围记录

The card identifies fine-tuned YOLOv8 and BLIP-2 models and links the resource's paper. It states AGPL licensing for icon detection and MIT licensing for captioning models.

- 完整记录 JSON：https://awesomecua.com/resources/url-b5fb13515d7779218f5d/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：mit — https://huggingface.co/microsoft/OmniParser

### 一手证据

- https://huggingface.co/api/models/microsoft/OmniParser（获取于 2026-11-09T05:05:02Z；SHA-256：9fbd565c5f68b75aa994d8f971c0d4aa059a742a145cbc2325e08bf63fb68749）
- https://huggingface.co/api/models/microsoft/OmniParser（获取于 2026-11-09T05:05:02Z；SHA-256：9fbd565c5f68b75aa994d8f971c0d4aa059a742a145cbc2325e08bf63fb68749）

---

## OpAgent-32B

这是经过网页导航微调的视觉语言模型。它接收任务指令和网页截图，输出浏览器操作或最终答案。

- 目录页面：https://awesomecua.com/resources/url-875b417b3ef43021cd74/
- 原始来源：https://huggingface.co/codefuse-ai/OpAgent-32B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、动作预测、强化学习
- 证据核查日期：2026-11-09T19:56:06Z
- ID：url:875b417b3ef43021cd74

### 范围记录

The card names Qwen3-VL-32B-Thinking as the base model and describes supervised fine-tuning followed by online reinforcement learning. It includes a vLLM inference example and states an Apache-2.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-875b417b3ef43021cd74/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/codefuse-ai/OpAgent-32B

### 一手证据

- https://huggingface.co/api/models/codefuse-ai/OpAgent-32B（获取于 2026-11-09T19:56:06Z；SHA-256：c97f43a310d63999646c3855f5d4f0fdaf545248faff35da51f6f9e31b427cbf）
- https://huggingface.co/api/models/codefuse-ai/OpAgent-32B（获取于 2026-11-09T19:56:06Z；SHA-256：c97f43a310d63999646c3855f5d4f0fdaf545248faff35da51f6f9e31b427cbf）

---

## OS-Atlas Base 4B

OS-Atlas 基础检查点，约有 4.1B 个参数，由 InternVL2-4B 微调而来，通过自定义 InternVL 聊天模型代码在 Transformers 中加载。

- 目录页面：https://awesomecua.com/resources/url-30c831a1198b9bc2a0f5/
- 原始来源：https://huggingface.co/OS-Copilot/OS-Atlas-Base-4B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：GUI 定位
- 证据核查日期：2026-10-16T06:50:49Z
- ID：url:30c831a1198b9bc2a0f5

- 完整记录 JSON：https://awesomecua.com/resources/url-30c831a1198b9bc2a0f5/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/OS-Copilot/OS-Atlas-Base-4B

### 一手证据

- https://huggingface.co/api/models/OS-Copilot/OS-Atlas-Base-4B（获取于 2026-10-16T06:50:49Z；SHA-256：20c6679849cd81a871809aa7f96145855739c9170608dfa6ec3653e52bd795cb）
- https://huggingface.co/api/models/OS-Copilot/OS-Atlas-Base-4B（获取于 2026-10-16T06:50:49Z；SHA-256：20c6679849cd81a871809aa7f96145855739c9170608dfa6ec3653e52bd795cb）

---

## OS-Atlas Base 7B

OS-Atlas 基础检查点由 Qwen2-VL-7B-Instruct 微调而来，在 Transformers 中采用标准 Qwen2-VL 架构，约有 8.3B 个 BF16 参数。

- 目录页面：https://awesomecua.com/resources/url-82a30f45d9e855f423c7/
- 原始来源：https://huggingface.co/OS-Copilot/OS-Atlas-Base-7B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：GUI 定位
- 证据核查日期：2026-10-16T06:50:49Z
- ID：url:82a30f45d9e855f423c7

- 完整记录 JSON：https://awesomecua.com/resources/url-82a30f45d9e855f423c7/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/OS-Copilot/OS-Atlas-Base-7B

### 一手证据

- https://huggingface.co/api/models/OS-Copilot/OS-Atlas-Base-7B（获取于 2026-10-16T06:50:49Z；SHA-256：a3355c4f884490efe2dc31ad393b869349c35130cc37370dafa19f4f0f5016b7）
- https://huggingface.co/api/models/OS-Copilot/OS-Atlas-Base-7B（获取于 2026-10-16T06:50:49Z；SHA-256：a3355c4f884490efe2dc31ad393b869349c35130cc37370dafa19f4f0f5016b7）

---

## qianhuiwu/GUI-Actor-7B-Qwen2.5-VL-LiteTrain

基于 Qwen2.5-VL-7B-Instruct、配有注意力动作头的图形界面定位模型权重。其示例根据截图和指令预测点击位置。

- 目录页面：https://awesomecua.com/resources/url-fe85a6b4ffbdb303f382/
- 原始来源：https://huggingface.co/qianhuiwu/GUI-Actor-7B-Qwen2.5-VL-LiteTrain
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：GUI 定位、界面理解
- 证据核查日期：2026-11-09T19:58:09Z
- ID：url:fe85a6b4ffbdb303f382

### 范围记录

The repository contains safetensors weight shards and processor files. The card lists an MIT license and shows inference using the GUI-Actor code.

- 完整记录 JSON：https://awesomecua.com/resources/url-fe85a6b4ffbdb303f382/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：mit — https://huggingface.co/qianhuiwu/GUI-Actor-7B-Qwen2.5-VL-LiteTrain

### 一手证据

- https://huggingface.co/api/models/qianhuiwu/GUI-Actor-7B-Qwen2.5-VL-LiteTrain（获取于 2026-11-09T19:58:09Z；SHA-256：ce5b9c2d0e6bf3c3169a79fdc979cad3f06660af5e007481294b70023ac57050）
- https://huggingface.co/api/models/qianhuiwu/GUI-Actor-7B-Qwen2.5-VL-LiteTrain（获取于 2026-11-09T19:58:09Z；SHA-256：ce5b9c2d0e6bf3c3169a79fdc979cad3f06660af5e007481294b70023ac57050）

---

## Qwen2.5-VL-3B-UI-R1-E

Qwen2.5-VL-3B-UI-R1-E 发布 UI-R1-E-3B 模型，根据界面截图和指令预测点击坐标，并报告了移动端、桌面端和网页上的定位评测。

- 目录页面：https://awesomecua.com/resources/url-72f3737bb5194fd64852/
- 原始来源：https://huggingface.co/LZXzju/Qwen2.5-VL-3B-UI-R1-E
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、网页、桌面
- 主题：GUI 定位、动作预测、效率、评测
- 证据核查日期：2026-11-09T05:05:18Z
- ID：url:72f3737bb5194fd64852

### 范围记录

The repository lists weight shards and provides inference and coordinate-rescaling code. The card names Qwen/Qwen2.5-VL-3B-Instruct as its base model and declares an MIT license.

- 完整记录 JSON：https://awesomecua.com/resources/url-72f3737bb5194fd64852/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：mit — https://huggingface.co/LZXzju/Qwen2.5-VL-3B-UI-R1-E

### 一手证据

- https://huggingface.co/api/models/LZXzju/Qwen2.5-VL-3B-UI-R1-E（获取于 2026-11-09T05:05:18Z；SHA-256：28b879598f08749648e25abff6fb4507850b4991b216d1c914aab5061a9a61a8）
- https://huggingface.co/api/models/LZXzju/Qwen2.5-VL-3B-UI-R1-E（获取于 2026-11-09T05:05:18Z；SHA-256：28b879598f08749648e25abff6fb4507850b4991b216d1c914aab5061a9a61a8）

---

## Qwen3-VL-2B-Instruct

这是一个视觉语言模型；其模型卡描述了操作电脑和移动设备界面的视觉智能体能力，包括识别元素和使用工具。此仓库发布了模型权重。

- 目录页面：https://awesomecua.com/resources/url-c4d0846c44df2c0d4099/
- 原始来源：https://huggingface.co/Qwen/Qwen3-VL-2B-Instruct
- 类型：模型
- 审核状态：已审核
- 范围：相关研究
- 运行环境：跨平台、桌面
- 主题：界面理解、GUI 定位、手机操作、工具集成
- 证据核查日期：2026-11-09T19:56:26Z
- ID：url:c4d0846c44df2c0d4099

### 范围记录

The card includes a Transformers inference example and declares an Apache-2.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-c4d0846c44df2c0d4099/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/Qwen/Qwen3-VL-2B-Instruct

### 一手证据

- https://huggingface.co/api/models/Qwen/Qwen3-VL-2B-Instruct（获取于 2026-11-09T19:56:26Z；SHA-256：aa3efb4a85db9acd2e3ebbbd64bf69335004a35bb4716f4468180159d3ed8280）
- https://huggingface.co/api/models/Qwen/Qwen3-VL-2B-Instruct（获取于 2026-11-09T19:56:26Z；SHA-256：aa3efb4a85db9acd2e3ebbbd64bf69335004a35bb4716f4468180159d3ed8280）

---

## Qwen3-VL-32B-Instruct

Qwen3-VL-32B-Instruct 是 Qwen3-VL 视觉语言模型 32B 规模的指令微调（Instruct）版权重；模型卡介绍了它操作电脑和移动设备 GUI 的视觉智能体能力，包括识别界面元素和使用工具。

- 目录页面：https://awesomecua.com/resources/url-560a21b67220296ba009/
- 原始来源：https://huggingface.co/Qwen/Qwen3-VL-32B-Instruct
- 类型：模型
- 审核状态：已审核
- 范围：相关研究
- 运行环境：跨平台、桌面
- 主题：界面理解、自动化、工具集成
- 证据核查日期：2026-11-09T19:57:49Z
- ID：url:560a21b67220296ba009

### 范围记录

The card provides a Transformers loading example and lists Apache-2.0 as the license.

- 完整记录 JSON：https://awesomecua.com/resources/url-560a21b67220296ba009/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/Qwen/Qwen3-VL-32B-Instruct

### 一手证据

- https://huggingface.co/api/models/Qwen/Qwen3-VL-32B-Instruct（获取于 2026-11-09T19:57:49Z；SHA-256：aaa156892314896bcb41497dd293c6e5ff0c9bd0723cf005a78929d0161cf053）
- https://huggingface.co/api/models/Qwen/Qwen3-VL-32B-Instruct（获取于 2026-11-09T19:57:49Z；SHA-256：aaa156892314896bcb41497dd293c6e5ff0c9bd0723cf005a78929d0161cf053）

---

## Rex-Omni

Rex-Omni 是一款通用视觉感知模型，提供界面定位和指点模式。仓库包含推理示例、评测材料和微调代码。

- 目录页面：https://awesomecua.com/resources/github-idea-research-rex-omni/
- 原始来源：https://github.com/IDEA-Research/Rex-Omni
- 类型：模型
- 审核状态：已审核
- 范围：相关研究
- 运行环境：unspecified
- 主题：GUI 定位、界面理解
- 证据核查日期：2026-11-09T19:57:06Z
- ID：github:idea-research/rex-omni

### 范围记录

The README links model weights hosted on Hugging Face and documents Transformers and vLLM backends. GUI grounding and GUI pointing have separate tutorials.

- 完整记录 JSON：https://awesomecua.com/resources/github-idea-research-rex-omni/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/IDEA-Research/Rex-Omni/HEAD/README.md（获取于 2026-11-09T19:57:06Z；SHA-256：6ba787c341266c13b5042c036a03f56b81b9b3e85ae1ad991abfb2dbbb704d06）

---

## ScaleCUA (THUDM) GLM-4.6V-Flash OSWorld SFT

THUDM 的 ScaleCUA 发布 GLM-4.6V-Flash 监督训练检查点，作为 OSWorld 桌面计算机使用智能体在线强化学习的初始化起点。

- 目录页面：https://awesomecua.com/resources/url-f59c2dd51c1f5c570a28/
- 原始来源：https://huggingface.co/extreme1228/ScaleCUA-glm4.6v-osworld-sft
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：动作预测
- 证据核查日期：2026-10-19T06:05:00Z
- ID：url:f59c2dd51c1f5c570a28

### 范围记录

Hub API at revision b13810f3 lists five BF16 safetensors shards (about 10.29B parameters) in the Glm4vForConditionalGeneration architecture, plus args.json and training-state files under iter_0001838/; the repository is publicly accessible. The card calls this the SFT start point used to initialize online RL and names GLM-4.6V-Flash as its base without Hub base_model metadata, so base_model is unset. The card YAML declares license 'other' and its prose says the weights are released for research and inherit the base model's license; that license is not resolved here. The card reports no score for this checkpoint. The THUDM/SCALE-CUA README lists it among six SFT start-point checkpoints, each with a ModelScope mirror. This project is distinct from OpenGVLab/ScaleCUA.

- 完整记录 JSON：https://awesomecua.com/resources/url-f59c2dd51c1f5c570a28/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：other — https://huggingface.co/extreme1228/ScaleCUA-glm4.6v-osworld-sft/raw/b13810f35275021d1d70082b4d1071e941a2a857/README.md

### 一手证据

- https://huggingface.co/extreme1228/ScaleCUA-glm4.6v-osworld-sft/raw/b13810f35275021d1d70082b4d1071e941a2a857/README.md（获取于 2026-10-19T06:05:00Z；SHA-256：d4dbc07bbc6c5b548d198e324302a2c3a7f075f38c764da660c35ab2f5028286）
- https://huggingface.co/api/models/extreme1228/ScaleCUA-glm4.6v-osworld-sft/revision/b13810f35275021d1d70082b4d1071e941a2a857（获取于 2026-10-19T06:05:01Z；SHA-256：f27d3fcc8c98d68e9b29f2e43eac963322de6488bf35e5b9991bbbfd4bf05231）
- https://raw.githubusercontent.com/THUDM/SCALE-CUA/3929e2fe364623153f2caa94ead71dc1aea50fb0/README.md（获取于 2026-10-19T06:05:01Z；SHA-256：d4a68b00acc4becf2a25688520595babea9b694b56541e709f066413b5b80aea）
- https://huggingface.co/extreme1228/ScaleCUA-glm4.6v-osworld-sft/raw/b13810f35275021d1d70082b4d1071e941a2a857/README.md（获取于 2026-10-19T06:05:00Z；SHA-256：d4dbc07bbc6c5b548d198e324302a2c3a7f075f38c764da660c35ab2f5028286）

---

## ScaleCUA (THUDM) GLM-4.6V-Flash ScienceBoard SFT

THUDM ScaleCUA 的监督训练 GLM-4.6V-Flash 检查点，作为 ScienceBoard 计算机使用智能体在线强化学习的初始模型发布。

- 目录页面：https://awesomecua.com/resources/url-7fbde54a49250739baee/
- 原始来源：https://huggingface.co/extreme1228/ScaleCUA-glm4.6v-scienceboard-sft
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：动作预测、科学工作流
- 证据核查日期：2026-10-18T16:01:08Z
- ID：url:7fbde54a49250739baee

### 范围记录

Hub API at revision 2bcf77b8 lists five BF16 safetensors shards (about 10.29B parameters) in the Glm4vForConditionalGeneration architecture, plus training-state files under iter_0000494/; the repository is publicly accessible. The card calls this the SFT start point used to initialize online RL and names GLM-4.6V-Flash as its base without Hub base_model metadata, so base_model is unset. The card YAML declares license 'other' and its prose says the weights are released for research and inherit the base model's license; that license is not resolved here. The card reports no score for this checkpoint. The THUDM/SCALE-CUA README lists it among six SFT start-point checkpoints, each with a ModelScope mirror. This project is distinct from OpenGVLab/ScaleCUA.

- 完整记录 JSON：https://awesomecua.com/resources/url-7fbde54a49250739baee/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：other — https://huggingface.co/extreme1228/ScaleCUA-glm4.6v-scienceboard-sft/raw/2bcf77b8a30c161d9ed2e075276877275319d1ad/README.md

### 一手证据

- https://huggingface.co/extreme1228/ScaleCUA-glm4.6v-scienceboard-sft/raw/2bcf77b8a30c161d9ed2e075276877275319d1ad/README.md（获取于 2026-10-18T16:01:08Z；SHA-256：0e3266010e93daa32e8ba81ceca8d83771ecbbbd8cd409833d0aae518e6348db）
- https://huggingface.co/api/models/extreme1228/ScaleCUA-glm4.6v-scienceboard-sft/revision/2bcf77b8a30c161d9ed2e075276877275319d1ad（获取于 2026-10-18T16:00:48Z；SHA-256：4feef38e55602ab8eb6cbc2f1d8dcccc7d3d1cad0e91128570ca85e9e8caa177）
- https://raw.githubusercontent.com/THUDM/SCALE-CUA/3929e2fe364623153f2caa94ead71dc1aea50fb0/README.md（获取于 2026-10-18T16:00:48Z；SHA-256：d4a68b00acc4becf2a25688520595babea9b694b56541e709f066413b5b80aea）
- https://huggingface.co/extreme1228/ScaleCUA-glm4.6v-scienceboard-sft/raw/2bcf77b8a30c161d9ed2e075276877275319d1ad/README.md（获取于 2026-10-18T16:01:08Z；SHA-256：0e3266010e93daa32e8ba81ceca8d83771ecbbbd8cd409833d0aae518e6348db）

---

## ScaleCUA (THUDM) Qwen3-VL-8B OSWorld SFT

THUDM ScaleCUA 的监督训练 Qwen3-VL-8B 检查点，作为 OSWorld 桌面计算机使用智能体在线强化学习的初始模型发布。

- 目录页面：https://awesomecua.com/resources/url-50501b63a93c611d6e54/
- 原始来源：https://huggingface.co/extreme1228/ScaleCUA-qwen3-vl-osworld-sft
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：动作预测
- 证据核查日期：2026-10-18T15:57:54Z
- ID：url:50501b63a93c611d6e54

### 范围记录

Hub API at revision 406fe375 lists four BF16 safetensors shards (about 8.77B parameters) in the Qwen3VLForConditionalGeneration architecture, plus a training args.json; the repository is publicly accessible. The card calls this the SFT start point used to initialize online RL and names Qwen3-VL-8B as its base without Hub base_model metadata, so base_model is unset. The card YAML declares license 'other' and its prose says the weights are released for research and inherit the license of Qwen3-VL-8B; that license is not resolved here. The card reports no score for this checkpoint. The THUDM/SCALE-CUA README lists it among six SFT start-point checkpoints, each with a ModelScope mirror. This project is distinct from OpenGVLab/ScaleCUA.

- 完整记录 JSON：https://awesomecua.com/resources/url-50501b63a93c611d6e54/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：other — https://huggingface.co/extreme1228/ScaleCUA-qwen3-vl-osworld-sft/raw/406fe37598dc77b452bee1904c43411fbb6c5fad/README.md

### 一手证据

- https://huggingface.co/extreme1228/ScaleCUA-qwen3-vl-osworld-sft/raw/406fe37598dc77b452bee1904c43411fbb6c5fad/README.md（获取于 2026-10-18T15:57:54Z；SHA-256：db1c5b96ae888c47a475250884fdfb73f89f3e371ebc9a4fab1975008394493f）
- https://huggingface.co/api/models/extreme1228/ScaleCUA-qwen3-vl-osworld-sft/revision/406fe37598dc77b452bee1904c43411fbb6c5fad（获取于 2026-10-18T15:57:26Z；SHA-256：2dd5f21883e032c18c3a4af56d8772be57672e839367a6fb17c18282da7f170b）
- https://raw.githubusercontent.com/THUDM/SCALE-CUA/3929e2fe364623153f2caa94ead71dc1aea50fb0/README.md（获取于 2026-10-18T15:55:27Z；SHA-256：d4a68b00acc4becf2a25688520595babea9b694b56541e709f066413b5b80aea）
- https://huggingface.co/extreme1228/ScaleCUA-qwen3-vl-osworld-sft/raw/406fe37598dc77b452bee1904c43411fbb6c5fad/README.md（获取于 2026-10-18T15:57:54Z；SHA-256：db1c5b96ae888c47a475250884fdfb73f89f3e371ebc9a4fab1975008394493f）

---

## ScaleCUA (THUDM) Qwen3-VL-8B ScienceBoard SFT

THUDM ScaleCUA 的 Qwen3-VL-8B 监督学习检查点，作为其 ScienceBoard 计算机使用智能体在线 RL 训练的初始模型发布。

- 目录页面：https://awesomecua.com/resources/url-058cb7a92cba506f9739/
- 原始来源：https://huggingface.co/extreme1228/ScaleCUA-qwen3-vl-scienceboard-sft
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：动作预测、科学工作流
- 证据核查日期：2026-10-18T15:40:15Z
- ID：url:058cb7a92cba506f9739

### 范围记录

Hub API at revision 48c39bb3 lists four BF16 safetensors shards (about 8.77B parameters) in the Qwen3VLForConditionalGeneration architecture, plus a training-state file iter_0000494/common.pt; access is open. The card calls this the SFT start point used to initialize online RL and names Qwen3-VL-8B as its base without Hub base_model metadata, so base_model is unset. The card YAML declares license 'other' and its prose says the weights are released for research and inherit the base model's license; that license is not resolved here. The card reports no score for this checkpoint. The THUDM/SCALE-CUA README lists it among six SFT start-point checkpoints, each with a ModelScope mirror. This project is distinct from OpenGVLab/ScaleCUA.

- 完整记录 JSON：https://awesomecua.com/resources/url-058cb7a92cba506f9739/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：other — https://huggingface.co/extreme1228/ScaleCUA-qwen3-vl-scienceboard-sft/raw/48c39bb30e1920e02c440fc256f5bb4e1d44765b/README.md

### 一手证据

- https://huggingface.co/extreme1228/ScaleCUA-qwen3-vl-scienceboard-sft/raw/48c39bb30e1920e02c440fc256f5bb4e1d44765b/README.md（获取于 2026-10-18T15:40:15Z；SHA-256：30280bb114a38b1118a92fa575a0acca169bf833fe1a490080e275c92b6b286d）
- https://huggingface.co/api/models/extreme1228/ScaleCUA-qwen3-vl-scienceboard-sft/revision/48c39bb30e1920e02c440fc256f5bb4e1d44765b（获取于 2026-10-18T15:39:37Z；SHA-256：da5c9b828ce4c562b2dbb767829b64960d73d1c0d1161f17ef00dc652f0abb1e）
- https://raw.githubusercontent.com/THUDM/SCALE-CUA/3929e2fe364623153f2caa94ead71dc1aea50fb0/README.md（获取于 2026-10-18T15:39:37Z；SHA-256：d4a68b00acc4becf2a25688520595babea9b694b56541e709f066413b5b80aea）
- https://huggingface.co/extreme1228/ScaleCUA-qwen3-vl-scienceboard-sft/raw/48c39bb30e1920e02c440fc256f5bb4e1d44765b/README.md（获取于 2026-10-18T15:40:15Z；SHA-256：30280bb114a38b1118a92fa575a0acca169bf833fe1a490080e275c92b6b286d）

---

## ScaleCUA (THUDM) Qwen3.5-9B OSWorld SFT

THUDM 的 ScaleCUA 发布 Qwen3.5-9B 监督训练检查点，作为 OSWorld 计算机使用智能体在线强化学习的初始化起点。

- 目录页面：https://awesomecua.com/resources/url-9b7cc83c55fd75c5b867/
- 原始来源：https://huggingface.co/extreme1228/ScaleCUA-qwen3.5-osworld-sft
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：动作预测
- 证据核查日期：2026-10-18T16:08:23Z
- ID：url:9b7cc83c55fd75c5b867

### 范围记录

Hub API at revision ff2508f6 lists four BF16 safetensors shards (about 9.41B parameters) in the Qwen3_5ForConditionalGeneration architecture, plus a training-state file iter_0001940/common.pt; the repository is publicly accessible. The card calls this the SFT start point used to initialize online RL and names Qwen3.5-9B as its base without Hub base_model metadata, so base_model is unset. The card YAML declares license 'other' and its prose says the weights are released for research and inherit the base model's license; that license is not resolved here. The card reports no score for this checkpoint. The THUDM/SCALE-CUA README lists it among six SFT start-point checkpoints, each with a ModelScope mirror. This project is distinct from OpenGVLab/ScaleCUA.

- 完整记录 JSON：https://awesomecua.com/resources/url-9b7cc83c55fd75c5b867/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：other — https://huggingface.co/extreme1228/ScaleCUA-qwen3.5-osworld-sft/raw/ff2508f621e46efa7ec2d449a182ab9a9a0e9745/README.md

### 一手证据

- https://huggingface.co/extreme1228/ScaleCUA-qwen3.5-osworld-sft/raw/ff2508f621e46efa7ec2d449a182ab9a9a0e9745/README.md（获取于 2026-10-18T16:08:23Z；SHA-256：7589b02e03bcfaf31709ea6b8c0263d17b935b21042f6694dcfe5b66efbc6937）
- https://huggingface.co/api/models/extreme1228/ScaleCUA-qwen3.5-osworld-sft/revision/ff2508f621e46efa7ec2d449a182ab9a9a0e9745（获取于 2026-10-18T16:08:05Z；SHA-256：e0accb8f68bfa0886c16b9842f29b9076c2860d3f8745c766f864f098ffe71dd）
- https://raw.githubusercontent.com/THUDM/SCALE-CUA/3929e2fe364623153f2caa94ead71dc1aea50fb0/README.md（获取于 2026-10-18T16:08:05Z；SHA-256：d4a68b00acc4becf2a25688520595babea9b694b56541e709f066413b5b80aea）
- https://huggingface.co/extreme1228/ScaleCUA-qwen3.5-osworld-sft/raw/ff2508f621e46efa7ec2d449a182ab9a9a0e9745/README.md（获取于 2026-10-18T16:08:23Z；SHA-256：7589b02e03bcfaf31709ea6b8c0263d17b935b21042f6694dcfe5b66efbc6937）

---

## ScaleCUA (THUDM) Qwen3.5-9B ScienceBoard SFT

THUDM ScaleCUA 的监督训练 Qwen3.5-9B 检查点，作为 ScienceBoard 计算机使用智能体在线强化学习的初始模型发布。

- 目录页面：https://awesomecua.com/resources/url-af7a03e8199643c3508f/
- 原始来源：https://huggingface.co/extreme1228/ScaleCUA-qwen3.5-scienceboard-sft
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：动作预测、科学工作流
- 证据核查日期：2026-10-18T15:57:18Z
- ID：url:af7a03e8199643c3508f

### 范围记录

Hub API at revision f697d10e lists four BF16 safetensors shards (about 9.41B parameters) in the Qwen3_5ForConditionalGeneration architecture, plus a training-state file iter_0000494/common.pt; the repository is publicly accessible. The card calls this the SFT start point used to initialize online RL and names Qwen3.5-9B as its base without Hub base_model metadata, so base_model is unset. The card YAML declares license 'other' and its prose says the weights are released for research and inherit the base model's license; that license is not resolved here. The card reports no score for this checkpoint. The THUDM/SCALE-CUA README lists it among six SFT start-point checkpoints, each with a ModelScope mirror. This project is distinct from OpenGVLab/ScaleCUA.

- 完整记录 JSON：https://awesomecua.com/resources/url-af7a03e8199643c3508f/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：other — https://huggingface.co/extreme1228/ScaleCUA-qwen3.5-scienceboard-sft/raw/f697d10e7c30cbc7b88d677a81336210b80827d3/README.md

### 一手证据

- https://huggingface.co/extreme1228/ScaleCUA-qwen3.5-scienceboard-sft/raw/f697d10e7c30cbc7b88d677a81336210b80827d3/README.md（获取于 2026-10-18T15:57:18Z；SHA-256：45b91f7927b1a1e59754db4c6596268c82a114e0d900cd9b12cc6067ada2c4d2）
- https://huggingface.co/api/models/extreme1228/ScaleCUA-qwen3.5-scienceboard-sft/revision/f697d10e7c30cbc7b88d677a81336210b80827d3（获取于 2026-10-18T15:56:44Z；SHA-256：7a2980b96ce8865010151e5dac614a924ee0e59a17d893321ad73e1e708eecbd）
- https://raw.githubusercontent.com/THUDM/SCALE-CUA/3929e2fe364623153f2caa94ead71dc1aea50fb0/README.md（获取于 2026-10-18T15:56:44Z；SHA-256：d4a68b00acc4becf2a25688520595babea9b694b56541e709f066413b5b80aea）
- https://huggingface.co/extreme1228/ScaleCUA-qwen3.5-scienceboard-sft/raw/f697d10e7c30cbc7b88d677a81336210b80827d3/README.md（获取于 2026-10-18T15:57:18Z；SHA-256：45b91f7927b1a1e59754db4c6596268c82a114e0d900cd9b12cc6067ada2c4d2）

---

## ScreenParser

IBM Research 与 ETH Zurich 的 YOLO11-L UI 元素检测器，在网页截图中框选并标注 55 类元素；主检查点在 ScreenParse v2 上训练，v1 检测器保留于分支中。

- 目录页面：https://awesomecua.com/resources/url-8c0b15d51eb7b4156608/
- 原始来源：https://huggingface.co/docling-project/ScreenParser
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：界面理解
- 证据核查日期：2026-10-18T12:04:56Z
- ID：url:8c0b15d51eb7b4156608

### 范围记录

The model outputs boxes, class labels and confidences only, without element text; the card suggests OCR or a separate vision-language model for text. It is trained on rendered web screenshots, and the card warns that results may differ on native desktop or mobile screens. The main-branch Hub manifest holds one Ultralytics weight file, best.pt, and the card gives a 1280-pixel fine-tuning resolution. Apache-2.0 is the card's weight declaration; base-model and training-data terms are separate.

- 完整记录 JSON：https://awesomecua.com/resources/url-8c0b15d51eb7b4156608/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：Apache-2.0 — https://huggingface.co/docling-project/ScreenParser/raw/f029e565f1206577402e43206454522075be3f72/README.md

- 权重审核：Publisher model-card declaration for this checkpoint; base-model and training-data terms are separate.
  来源：https://huggingface.co/docling-project/ScreenParser/raw/f029e565f1206577402e43206454522075be3f72/README.md

### 一手证据

- https://huggingface.co/docling-project/ScreenParser/raw/f029e565f1206577402e43206454522075be3f72/README.md（获取于 2026-10-18T12:04:56Z；SHA-256：0889bc9a333b47c638fd1e0e437c89c0d76202d9a6fdc419479c5008d52e9aa6）
- https://huggingface.co/api/models/docling-project/ScreenParser（获取于 2026-10-18T12:04:56Z；SHA-256：be47c7821b642c03e5965e1ce4870b2b6f8240f8418c27469f1ced07293a4909）
- https://huggingface.co/docling-project/ScreenParser/raw/f029e565f1206577402e43206454522075be3f72/README.md（获取于 2026-10-18T12:04:56Z；SHA-256：0889bc9a333b47c638fd1e0e437c89c0d76202d9a6fdc419479c5008d52e9aa6）

---

## ShowUI 2B

由 Qwen2-VL-2B-Instruct 微调的 ShowUI 视觉语言操作模型检查点，以单个 PyTorch 权重文件按 MIT 许可证发布，并标记为适用于 GUI 智能体和计算机使用。

- 目录页面：https://awesomecua.com/resources/url-c0f39f7cf2cd9c18e8bd/
- 原始来源：https://huggingface.co/showlab/ShowUI-2B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：GUI 定位、效率
- 证据核查日期：2026-10-16T06:50:49Z
- ID：url:c0f39f7cf2cd9c18e8bd

- 完整记录 JSON：https://awesomecua.com/resources/url-c0f39f7cf2cd9c18e8bd/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：mit — https://huggingface.co/showlab/ShowUI-2B

### 一手证据

- https://huggingface.co/api/models/showlab/ShowUI-2B（获取于 2026-10-16T06:50:49Z；SHA-256：bb6d120d4795492a197e0a9e9df5c56b7baa8ac5c08182ce0f20f36c8b65783d）
- https://huggingface.co/api/models/showlab/ShowUI-2B（获取于 2026-10-16T06:50:49Z；SHA-256：bb6d120d4795492a197e0a9e9df5c56b7baa8ac5c08182ce0f20f36c8b65783d）

---

## ShowUI-π checkpoint

轻量级视觉操作模型检查点，根据截图和自然语言指令预测连续的 GUI 拖动轨迹。

- 目录页面：https://awesomecua.com/resources/url-f70aa7c95824a8729516/
- 原始来源：https://huggingface.co/showlab/ShowUI-pi
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：GUI 定位、动作预测
- 证据核查日期：2026-10-17T02:44:50Z
- ID：url:f70aa7c95824a8729516

### 范围记录

A model.safetensors file and policy pre/postprocessor configuration are publicly ungated. The card describes a SmolVLA-based GUI drag-and-drop model despite its generic robotics pipeline tag. No weight-license declaration or specific operating-system coverage is provided.

- 完整记录 JSON：https://awesomecua.com/resources/url-f70aa7c95824a8729516/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/showlab/ShowUI-pi/raw/main/README.md（获取于 2026-10-17T02:44:50Z；SHA-256：64993ab5dc8205e25bda2576055b7e252104c67d4e6eeecb33a1a9742415f67e）
- https://huggingface.co/api/models/showlab/ShowUI-pi（获取于 2026-10-17T02:44:50Z；SHA-256：ae12ece91946d79c5c6b578d6db07b5f095822be1ca3bc14bb3dc04a771bb010）

---

## UGround-V1-2B

UGround-V1-2B 基于 Qwen2-VL，用于定位界面截图中的目标元素；模型卡报告了移动端、桌面端和网页界面的评测。

- 目录页面：https://awesomecua.com/resources/url-fd2143b0da03ceedf25c/
- 原始来源：https://huggingface.co/osunlp/UGround-V1-2B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、网页、桌面
- 主题：GUI 定位、界面理解
- 证据核查日期：2026-11-09T05:04:59Z
- ID：url:fd2143b0da03ceedf25c

### 范围记录

The repository contains model weight files and links separate inference code and training data. The card declares an Apache-2.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-fd2143b0da03ceedf25c/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/osunlp/UGround-V1-2B

### 一手证据

- https://huggingface.co/api/models/osunlp/UGround-V1-2B（获取于 2026-11-09T05:04:59Z；SHA-256：9c09402997063985387f74a948f02c40e78a1a638fe66a1fd3eaeabaf2bbd923）
- https://huggingface.co/api/models/osunlp/UGround-V1-2B（获取于 2026-11-09T05:04:59Z；SHA-256：9c09402997063985387f74a948f02c40e78a1a638fe66a1fd3eaeabaf2bbd923）

---

## UI-AGILE

UI-AGILE 是在约 9k 个样本上使用连续奖励、简单思考奖励和基于裁剪的重采样进行 RL 训练的 GUI 智能体，另提供可插接的定位与选择分解式推理方法。

- 目录页面：https://awesomecua.com/resources/github-kdegroup-ui-agile/
- 原始来源：https://github.com/KDEGroup/UI-AGILE
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：GUI 定位、强化学习
- 证据核查日期：2026-10-16T06:36:00Z
- ID：github:kdegroup/ui-agile

- 完整记录 JSON：https://awesomecua.com/resources/github-kdegroup-ui-agile/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/KDEGroup/UI-AGILE/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/KDEGroup/UI-AGILE/HEAD/README.md（获取于 2026-10-16T06:36:00Z；SHA-256：eb2a2767741b53e5a6659ef4b0cc325ac18ffdc4222deef1d0e7671089fcaa39）
- https://raw.githubusercontent.com/KDEGroup/UI-AGILE/HEAD/LICENSE（获取于 2026-10-16T06:42:01Z；SHA-256：a145c4ec8fd43f59ebe97708b6ee4cef8112959036957eaa4739b8da9a297e8a）

---

## UI-AGILE checkpoint

已发布的 UI-AGILE 模型，用于 GUI 定位，推理时采用奖励塑形、基于裁剪的重采样和分解式选择。

- 目录页面：https://awesomecua.com/resources/url-b94e285c3f757e2d0f3a/
- 原始来源：https://huggingface.co/KDEGroup/UI-AGILE
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：GUI 定位、强化学习、效率
- 证据核查日期：2026-10-17T02:44:30Z
- ID：url:b94e285c3f757e2d0f3a

### 范围记录

Four safetensors shards and model/tokenizer files are public. The card declares MIT for these weights; the companion dataset has no declared license and is separate.

- 完整记录 JSON：https://awesomecua.com/resources/url-b94e285c3f757e2d0f3a/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：mit — https://huggingface.co/KDEGroup/UI-AGILE/raw/main/README.md

### 一手证据

- https://huggingface.co/KDEGroup/UI-AGILE/raw/main/README.md（获取于 2026-10-17T02:44:30Z；SHA-256：75aed1ebff7dd54ab1dc0112fe524a118d9e8845c2e079080d2bb7954f7ab36e）
- https://huggingface.co/api/models/KDEGroup/UI-AGILE（获取于 2026-10-17T02:44:29Z；SHA-256：a52032bb185885d47466f0bea26c15ccefeb8d6ff89f3bacc5eb4192c35d45f7）
- https://huggingface.co/datasets/KDEGroup/UI-AGILE-Data/raw/main/README.md（获取于 2026-10-17T02:43:19Z；SHA-256：ce35413bc1ef28338bc6fd9f132fa271a4f5e0bf23cecd7346f54adf0a964fd7）
- https://huggingface.co/KDEGroup/UI-AGILE/raw/main/README.md（获取于 2026-10-17T02:44:30Z；SHA-256：75aed1ebff7dd54ab1dc0112fe524a118d9e8845c2e079080d2bb7954f7ab36e）

---

## UI-R1

UI-R1 使用基于规则的强化学习预测 GUI 操作，发布了基于 Qwen2.5-VL-3B 训练的 UI-R1-3B、侧重效率的 UI-R1-E-3B 及训练数据。

- 目录页面：https://awesomecua.com/resources/github-lll6gg-ui-r1/
- 原始来源：https://github.com/lll6gg/UI-R1
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：强化学习、GUI 定位
- 证据核查日期：2026-10-16T06:36:00Z
- ID：github:lll6gg/ui-r1

- 完整记录 JSON：https://awesomecua.com/resources/github-lll6gg-ui-r1/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/lll6gg/UI-R1/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/lll6gg/UI-R1/HEAD/README.md（获取于 2026-10-16T06:36:00Z；SHA-256：f55ac6a0c50d298d46c5f7083a0879959fd7cd3c1d91496af295ebf2afcc13a3）
- https://raw.githubusercontent.com/lll6gg/UI-R1/HEAD/LICENSE（获取于 2026-10-16T06:42:01Z；SHA-256：c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4）

---

## AgentCPM-GUI

基于 MiniCPM-V 的 8B 端侧智能手机智能体，根据截图操作中文和英文应用，采用强化微调和紧凑的 JSON 操作空间训练。

- 目录页面：https://awesomecua.com/resources/github-openbmb-agentcpm-gui/
- 原始来源：https://github.com/OpenBMB/AgentCPM-GUI
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：GUI 定位、手机操作
- 证据核查日期：2026-10-16T06:36:00Z
- ID：github:openbmb/agentcpm-gui

- 完整记录 JSON：https://awesomecua.com/resources/github-openbmb-agentcpm-gui/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/OpenBMB/AgentCPM-GUI/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/OpenBMB/AgentCPM-GUI/HEAD/README.md（获取于 2026-10-16T06:36:00Z；SHA-256：2cf79e21b5438bf6a2e6bd450ba8c4d86404560dfb61836f7e300112ce74a59d）
- https://raw.githubusercontent.com/OpenBMB/AgentCPM-GUI/HEAD/LICENSE（获取于 2026-10-16T06:42:01Z；SHA-256：c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4）

---

## AgentCPM-GUI 8B checkpoint

基于 MiniCPM-V 的 8B 参数模型，读取智能手机截图，并为中文和英文 Android 应用任务预测精简动作。

- 目录页面：https://awesomecua.com/resources/url-8ef3985dce697e5feea9/
- 原始来源：https://huggingface.co/openbmb/AgentCPM-GUI
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：手机操作、GUI 定位、强化学习
- 证据核查日期：2026-10-17T02:03:33Z
- ID：url:8ef3985dce697e5feea9

### 范围记录

The Hub provides four safetensors shards and associated model files without gating. Weight metadata declares Apache-2.0, while the prose license section refers specifically to code; these scopes are kept distinct. The card describes Android-app operation, and the CAGUI evaluation data remains a separate existing catalog asset.

- 完整记录 JSON：https://awesomecua.com/resources/url-8ef3985dce697e5feea9/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/openbmb/AgentCPM-GUI/raw/main/README.md

### 一手证据

- https://huggingface.co/openbmb/AgentCPM-GUI/raw/main/README.md（获取于 2026-10-17T02:03:33Z；SHA-256：9016a68e833a7717c922d9363a6d6c56cc7cf6a7087543f5694507668fe9ab75）
- https://huggingface.co/api/models/openbmb/AgentCPM-GUI（获取于 2026-10-17T02:03:33Z；SHA-256：4d76c8cc19f1ff4c850ba6cc566d50bbd2355e10921a2214e38c921cedfeed4c）
- https://huggingface.co/openbmb/AgentCPM-GUI/raw/main/README.md（获取于 2026-10-17T02:03:33Z；SHA-256：9016a68e833a7717c922d9363a6d6c56cc7cf6a7087543f5694507668fe9ab75）

---

## AgentTrek-1.0-32B

利用 AgentTrek 轨迹合成项目、基于 Qwen2.5-32B-Instruct 微调的网页智能体模型，并发布模型权重。

- 目录页面：https://awesomecua.com/resources/url-c3ab0f006a880174e645/
- 原始来源：https://huggingface.co/xlangai/AgentTrek-1.0-32B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、模仿学习、数据生成
- 证据核查日期：2026-11-09T06:16:33Z
- ID：url:c3ab0f006a880174e645

### 范围记录

The repository contains sharded safetensors weights and tokenizer files. The card links to an evaluation script and declares an Apache-2.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-c3ab0f006a880174e645/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/xlangai/AgentTrek-1.0-32B

### 一手证据

- https://huggingface.co/api/models/xlangai/AgentTrek-1.0-32B（获取于 2026-11-09T06:16:33Z；SHA-256：6c6a672ccd0c8778180d2431b3ef745910341e5d940e7e7c1aa09174a4c4a8f9）
- https://huggingface.co/api/models/xlangai/AgentTrek-1.0-32B（获取于 2026-11-09T06:16:33Z；SHA-256：6c6a672ccd0c8778180d2431b3ef745910341e5d940e7e7c1aa09174a4c4a8f9）

---

## AndroidGen-GLM-4-9B

AndroidGen-GLM-4-9B 是一款已发布的模型，供智能体在无需人工标注交互数据的情况下跨 Android 应用执行任务。

- 目录页面：https://awesomecua.com/resources/url-66d842fe6552d3ca62a1/
- 原始来源：https://huggingface.co/THUDM/androidgen-glm-4-9b
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：手机操作、动作预测
- 证据核查日期：2026-11-09T19:57:39Z
- ID：url:66d842fe6552d3ca62a1

### 范围记录

The repository lists model weight shards and tokenizer files. The card names GLM-4-9B as its base model and points to the AndroidGen repository for inference code and requirements.

- 完整记录 JSON：https://awesomecua.com/resources/url-66d842fe6552d3ca62a1/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：other — https://huggingface.co/THUDM/androidgen-glm-4-9b

### 一手证据

- https://huggingface.co/api/models/THUDM/androidgen-glm-4-9b（获取于 2026-11-09T19:57:39Z；SHA-256：0b88c9823b6c5adc527daa666d9c4ab002f4ff0715611d0bb71f9dfe7602f2a3）
- https://huggingface.co/api/models/THUDM/androidgen-glm-4-9b（获取于 2026-11-09T19:57:39Z；SHA-256：0b88c9823b6c5adc527daa666d9c4ab002f4ff0715611d0bb71f9dfe7602f2a3）
- https://huggingface.co/api/models/THUDM/androidgen-glm-4-9b（获取于 2026-11-09T20:03:02Z；SHA-256：0b88c9823b6c5adc527daa666d9c4ab002f4ff0715611d0bb71f9dfe7602f2a3）
- https://huggingface.co/api/models/zai-org/androidgen-glm-4-9b（获取于 2026-11-09T20:03:02Z；SHA-256：0b88c9823b6c5adc527daa666d9c4ab002f4ff0715611d0bb71f9dfe7602f2a3）

---

## AndroidGen-Llama-3-70B

AndroidGen-Llama-3-70B 是一款已发布的模型，供智能体在消息、邮件和设置等 Android 应用中执行任务，无需人工标注的交互数据。

- 目录页面：https://awesomecua.com/resources/url-75e93dff049c046c586e/
- 原始来源：https://huggingface.co/THUDM/androidgen-llama-3-70b
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：手机操作、跨应用
- 证据核查日期：2026-11-09T19:57:47Z
- ID：url:75e93dff049c046c586e

### 范围记录

The repository lists model weight shards. The card names Llama-3-70B as its base model and directs readers to a separate GitHub page for inference requirements.

- 完整记录 JSON：https://awesomecua.com/resources/url-75e93dff049c046c586e/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：other — https://huggingface.co/THUDM/androidgen-llama-3-70b

### 一手证据

- https://huggingface.co/api/models/THUDM/androidgen-llama-3-70b（获取于 2026-11-09T19:57:47Z；SHA-256：60b8dee5bbbb8ff1a220b7986f30fc8f4188ee68a556aa1a849ac10a570afcd6）
- https://huggingface.co/api/models/THUDM/androidgen-llama-3-70b（获取于 2026-11-09T19:57:47Z；SHA-256：60b8dee5bbbb8ff1a220b7986f30fc8f4188ee68a556aa1a849ac10a570afcd6）
- https://huggingface.co/api/models/THUDM/androidgen-llama-3-70b（获取于 2026-11-09T20:03:06Z；SHA-256：60b8dee5bbbb8ff1a220b7986f30fc8f4188ee68a556aa1a849ac10a570afcd6）
- https://huggingface.co/api/models/zai-org/androidgen-llama-3-70b（获取于 2026-11-09T20:03:07Z；SHA-256：60b8dee5bbbb8ff1a220b7986f30fc8f4188ee68a556aa1a849ac10a570afcd6）

---

## Aria-UI context-aware checkpoint

利用交互上下文支持动态 Android 和桌面智能体任务中的定位的 Aria-UI 模型版本。

- 目录页面：https://awesomecua.com/resources/url-085b6811ddd6f797475d/
- 原始来源：https://huggingface.co/Aria-UI/Aria-UI-context-aware
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：Android、桌面
- 主题：GUI 定位、交互历史、动作预测
- 证据核查日期：2026-10-17T02:44:29Z
- ID：url:085b6811ddd6f797475d

### 范围记录

The Hub manifest exposes twelve safetensors shards and model code/configuration, but no README card or model-license declaration. The official repository explicitly announces this context-aware release separately from the base model. Code or base-model licenses are not inherited.

- 完整记录 JSON：https://awesomecua.com/resources/url-085b6811ddd6f797475d/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/models/Aria-UI/Aria-UI-context-aware（获取于 2026-10-17T02:44:29Z；SHA-256：183a8de8928b3b71b171a35149621de078aaf80b4ebde377a5dc3b5cd4a04a27）
- https://raw.githubusercontent.com/AriaUI/Aria-UI/HEAD/README.md（获取于 2026-10-16T06:36:00Z；SHA-256：a2a3c5ad115e4e2109b56686c9e0b073bcfec6d9f052a58bc92683af44933480）
- https://huggingface.co/api/models/Aria-UI/Aria-UI-context-aware（获取于 2026-10-17T02:44:29Z；SHA-256：183a8de8928b3b71b171a35149621de078aaf80b4ebde377a5dc3b5cd4a04a27）

---

## asil-qwen35-2b-rl

这是用于基于结构化状态和语义动作的应用控制方法的 ASIL 强化学习检查点，随附可加载的模型权重。

- 目录页面：https://awesomecua.com/resources/url-d740ec821c7c466db2bf/
- 原始来源：https://huggingface.co/sharryXR/asil-qwen35-2b-rl
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：动作预测、强化学习、工具集成
- 证据核查日期：2026-11-09T19:57:49Z
- ID：url:d740ec821c7c466db2bf

### 范围记录

The card names Qwen/Qwen3.5-2B as the base model and 320 training and 80 validation task prompts. It lists Apache-2.0 as the license.

- 完整记录 JSON：https://awesomecua.com/resources/url-d740ec821c7c466db2bf/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/sharryXR/asil-qwen35-2b-rl

### 一手证据

- https://huggingface.co/api/models/sharryXR/asil-qwen35-2b-rl（获取于 2026-11-09T19:57:49Z；SHA-256：960d9a3f3df26dd0b0d9c2b8573f734dd16c6e5dc0c069d58fbe04ea6ba6e759）
- https://huggingface.co/api/models/sharryXR/asil-qwen35-2b-rl（获取于 2026-11-09T19:57:49Z；SHA-256：960d9a3f3df26dd0b0d9c2b8573f734dd16c6e5dc0c069d58fbe04ea6ba6e759）

---

## asil-qwen35-9b-sft

这是用于基于结构化状态和语义动作的应用控制方法的 ASIL 监督微调检查点，随附可加载的模型权重。

- 目录页面：https://awesomecua.com/resources/url-9960d240939244c3edaa/
- 原始来源：https://huggingface.co/sharryXR/asil-qwen35-9b-sft
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：动作预测、模仿学习、工具集成
- 证据核查日期：2026-11-09T19:57:49Z
- ID：url:9960d240939244c3edaa

### 范围记录

The card names Qwen/Qwen3.5-9B as the base model and reports 2,886 training and 732 validation rows. It lists Apache-2.0 as the license.

- 完整记录 JSON：https://awesomecua.com/resources/url-9960d240939244c3edaa/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/sharryXR/asil-qwen35-9b-sft

### 一手证据

- https://huggingface.co/api/models/sharryXR/asil-qwen35-9b-sft（获取于 2026-11-09T19:57:49Z；SHA-256：fa17d9565392839288c1873e367addaff803a4b6c711df9c8083f83c46ba6d02）
- https://huggingface.co/api/models/sharryXR/asil-qwen35-9b-sft（获取于 2026-11-09T19:57:49Z；SHA-256：fa17d9565392839288c1873e367addaff803a4b6c711df9c8083f83c46ba6d02）

---

## AutoGLM Phone 9B

面向 Open-AutoGLM 的 AutoGLM 手机智能体模型检查点，由 GLM-4.1V-9B-Base 微调，约有 10.3B 个 BF16 参数，并带有中文标签。

- 目录页面：https://awesomecua.com/resources/url-c918d5c828a3c6cfbc5d/
- 原始来源：https://huggingface.co/zai-org/AutoGLM-Phone-9B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：Android、iOS
- 主题：手机操作
- 证据核查日期：2026-10-16T06:50:49Z
- ID：url:c918d5c828a3c6cfbc5d

- 完整记录 JSON：https://awesomecua.com/resources/url-c918d5c828a3c6cfbc5d/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：mit — https://huggingface.co/zai-org/AutoGLM-Phone-9B

### 一手证据

- https://huggingface.co/api/models/zai-org/AutoGLM-Phone-9B（获取于 2026-10-16T06:50:49Z；SHA-256：94b02fa7104849cedee8ddd1fa33e22d3039e05ae9dd03033805a000e3fed847）
- https://huggingface.co/api/models/zai-org/AutoGLM-Phone-9B（获取于 2026-10-16T06:50:49Z；SHA-256：94b02fa7104849cedee8ddd1fa33e22d3039e05ae9dd03033805a000e3fed847）

---

## AutoGUI-Qwen-v0.1

这是使用 AutoGUI-625k 数据训练、由 Qwen-VL-Chat 微调而来的界面视觉语言模型权重，用于理解图形界面。

- 目录页面：https://awesomecua.com/resources/url-7f1339af63d3f89bd0bf/
- 原始来源：https://huggingface.co/HongxinLi/AutoGUI-Qwen-v0.1
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：界面理解、GUI 定位
- 证据核查日期：2026-11-09T19:57:38Z
- ID：url:7f1339af63d3f89bd0bf

### 范围记录

The repository lists sharded safetensors weights and model code. The card leaves usage, evaluation and license details unspecified.

- 完整记录 JSON：https://awesomecua.com/resources/url-7f1339af63d3f89bd0bf/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/models/HongxinLi/AutoGUI-Qwen-v0.1（获取于 2026-11-09T19:57:38Z；SHA-256：99e63b39f81ea5511b16f9b96af40c5f66fc370c1e8606ea21a74603228141f0）
- https://huggingface.co/api/models/HongxinLi/AutoGUI-Qwen-v0.1（获取于 2026-11-09T19:57:38Z；SHA-256：99e63b39f81ea5511b16f9b96af40c5f66fc370c1e8606ea21a74603228141f0）

---

## blip-icon-captioning

blip-icon-captioning 是经过微调的 BLIP 模型检查点，可将 macOS 界面图标和元素转成简短的自然语言描述，供无障碍应用使用。

- 目录页面：https://awesomecua.com/resources/url-b4a01331e3e89e1bae9d/
- 原始来源：https://huggingface.co/MacPaw/blip-icon-captioning
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、macOS
- 主题：界面理解
- 证据核查日期：2026-11-09T19:57:13Z
- ID：url:b4a01331e3e89e1bae9d

### 范围记录

The card identifies Salesforce/blip-image-captioning-base as its base model and includes a Transformers inference example. The repository lists model.safetensors and processor and tokenizer configuration files. The card declares the MIT License.

- 完整记录 JSON：https://awesomecua.com/resources/url-b4a01331e3e89e1bae9d/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：mit — https://huggingface.co/MacPaw/blip-icon-captioning

### 一手证据

- https://huggingface.co/api/models/MacPaw/blip-icon-captioning（获取于 2026-11-09T19:57:13Z；SHA-256：1bc45c0b88f1ad9b5bdda5204145502d2e3d2782702f6e7c809499cb54b64d5b）
- https://huggingface.co/api/models/MacPaw/blip-icon-captioning（获取于 2026-11-09T19:57:13Z；SHA-256：1bc45c0b88f1ad9b5bdda5204145502d2e3d2782702f6e7c809499cb54b64d5b）
- https://huggingface.co/api/models/MacPaw/blip-icon-captioning（获取于 2026-11-09T20:02:52Z；SHA-256：1bc45c0b88f1ad9b5bdda5204145502d2e3d2782702f6e7c809499cb54b64d5b）
- https://huggingface.co/api/models/macpaw-research/blip-icon-captioning（获取于 2026-11-09T20:02:53Z；SHA-256：1bc45c0b88f1ad9b5bdda5204145502d2e3d2782702f6e7c809499cb54b64d5b）

---

## BlueLM-GUI

vivo AI Lab 发布的移动端 GUI 智能体研究成果，包括技术报告、基准数据和评估工具。

- 目录页面：https://awesomecua.com/resources/github-vivo-ai-lab-bluelm-gui/
- 原始来源：https://github.com/vivo-ai-lab/BlueLM-GUI
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：手机操作、强化学习
- 证据核查日期：2026-10-16T10:42:12Z
- ID：github:vivo-ai-lab/bluelm-gui

### 范围记录

The repository lists the agent as in-house. Public model weights were not established by this review; linked benchmark assets have their own access terms.

- 完整记录 JSON：https://awesomecua.com/resources/github-vivo-ai-lab-bluelm-gui/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/vivo-ai-lab/BlueLM-GUI/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/vivo-ai-lab/BlueLM-GUI/HEAD/README.md（获取于 2026-10-16T10:42:12Z；SHA-256：5f460f9b2a18315d07b8c48d78dcc764892d09d9250e95f5e591b5966fe59328）
- https://raw.githubusercontent.com/vivo-ai-lab/BlueLM-GUI/HEAD/LICENSE（获取于 2026-10-16T10:48:41Z；SHA-256：6036aa17e52be8051fc3c8ede37fc4d0b2bc2589518be7623566c75868612178）

---

## Captioner

Captioner 是面向图形界面的密集描述模型，发布内容包括模型检查点，并附有在线演示和参考服务端代码的链接。

- 目录页面：https://awesomecua.com/resources/url-4f98919eaf7a92e8faab/
- 原始来源：https://huggingface.co/Agent-Eval-Refine/Captioner
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：界面理解
- 证据核查日期：2026-11-09T19:57:13Z
- ID：url:4f98919eaf7a92e8faab

### 范围记录

The repository file list includes a PyTorch model file. The card provides no architecture or evaluation details.

- 完整记录 JSON：https://awesomecua.com/resources/url-4f98919eaf7a92e8faab/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/models/Agent-Eval-Refine/Captioner（获取于 2026-11-09T19:57:13Z；SHA-256：abaae5206fe3a9725c8c35d130bc5230b0ab89682d0f0a870922beddb4363a65）
- https://huggingface.co/api/models/Agent-Eval-Refine/Captioner（获取于 2026-11-09T19:57:13Z；SHA-256：abaae5206fe3a9725c8c35d130bc5230b0ab89682d0f0a870922beddb4363a65）

---

## CODA-PLANNER-TARS-32B

CODA-PLANNER-TARS-32B 是面向科学软件训练的图形界面智能体规划模型检查点，可在 ScienceBoard 中与专用执行模型配合使用。

- 目录页面：https://awesomecua.com/resources/url-cf16d0a4a05ea7270ffa/
- 原始来源：https://huggingface.co/OpenIXCLab/CODA-PLANNER-TARS-32B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：规划、强化学习、科学工作流、长任务
- 证据核查日期：2026-11-09T19:56:16Z
- ID：url:cf16d0a4a05ea7270ffa

### 范围记录

The repository contains model weight shards. Its instructions use vLLM and deploy UI-TARS-1.5-7B as the executor. The card declares Apache-2.0 for code and CC-BY-NC-4.0 for data.

- 完整记录 JSON：https://awesomecua.com/resources/url-cf16d0a4a05ea7270ffa/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/OpenIXCLab/CODA-PLANNER-TARS-32B

### 一手证据

- https://huggingface.co/api/models/OpenIXCLab/CODA-PLANNER-TARS-32B（获取于 2026-11-09T19:56:16Z；SHA-256：fa03e0cb8fd8c3729bd58dfc2a32afc609f5fa0be0b930011fa88ef07bb0f600）
- https://huggingface.co/api/models/OpenIXCLab/CODA-PLANNER-TARS-32B（获取于 2026-11-09T19:56:16Z；SHA-256：fa03e0cb8fd8c3729bd58dfc2a32afc609f5fa0be0b930011fa88ef07bb0f600）

---

## Code2World-8B checkpoint

已发布的 GUI 世界模型检查点，将截图和拟执行的操作转换为 HTML，以渲染预测的下一屏幕。

- 目录页面：https://awesomecua.com/resources/url-bc3deaf8eeecf569e73b/
- 原始来源：https://huggingface.co/GD-ML/Code2World
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：世界模型、界面理解
- 证据核查日期：2026-10-18T04:35:15Z
- ID：url:bc3deaf8eeecf569e73b

### 范围记录

Card identifies Code2World-8B and Qwen3-VL-8B-Instruct. Public files include four Safetensors shards, an index and rendering/prompt helper scripts. The GitHub adapter targets AndroidWorld. MIT is recorded as the weight declaration, without transferring it to the separate GitHub repository’s code or all training sources.

- 完整记录 JSON：https://awesomecua.com/resources/url-bc3deaf8eeecf569e73b/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：MIT — https://huggingface.co/GD-ML/Code2World/raw/3e48194a8228570164ecd510f9d83ac839e9e931/README.md

- 权重审核：Publisher model-card declaration for the checkpoint; code and training-data terms are separate.
  来源：https://huggingface.co/GD-ML/Code2World/raw/3e48194a8228570164ecd510f9d83ac839e9e931/README.md

### 一手证据

- https://huggingface.co/GD-ML/Code2World/raw/3e48194a8228570164ecd510f9d83ac839e9e931/README.md（获取于 2026-10-18T04:35:15Z；SHA-256：befc89b09d099b86bda891141bca32b4a13b650c64d9b74ca18a9431e76f6c06）
- https://huggingface.co/api/models/GD-ML/Code2World（获取于 2026-10-18T04:33:22Z；SHA-256：4c91d95f7533cb5550447c95bfb12d6064fd510ac01cba45ebb8d7fca305fdc9）
- https://raw.githubusercontent.com/AMAP-ML/Code2World/HEAD/readme.md（获取于 2026-10-18T04:27:14Z；SHA-256：26c14a14166d3b747454d1924ecdf6d96652ac857ae6ad488630dc843036a777）

---

## CogAgent 9B 20241220

基于 GLM-4V 的双语执行模型，利用截图、任务指令和操作历史预测 GUI 操作。

- 目录页面：https://awesomecua.com/resources/url-c5eb975c0d66f8a2954f/
- 原始来源：https://huggingface.co/zai-org/cogagent-9b-20241220
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Windows、macOS、跨平台
- 主题：GUI 定位、动作预测、界面理解
- 证据核查日期：2026-10-17T02:44:29Z
- ID：url:c5eb975c0d66f8a2954f

### 范围记录

The former THUDM model URL resolves to zai-org. Six public safetensors shards are present. Weights use the custom CogAgent License, including a registration requirement for commercial use. The card cites the 2023 CogAgent paper as previous work and links a later technical report; no claim that the old paper documents this 2024 checkpoint is asserted.

- 完整记录 JSON：https://awesomecua.com/resources/url-c5eb975c0d66f8a2954f/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：other — https://huggingface.co/zai-org/cogagent-9b-20241220/raw/main/README.md

### 一手证据

- https://huggingface.co/zai-org/cogagent-9b-20241220/raw/main/README.md（获取于 2026-10-17T02:44:29Z；SHA-256：de2c8e7a9792c3d129451ec813d458f83263460a5808cf87c45b04b260a376c9）
- https://huggingface.co/api/models/zai-org/cogagent-9b-20241220（获取于 2026-10-17T02:45:05Z；SHA-256：ae72fbc40f9c8afd52d1688b2233e5c915571de33618cfd1ffcb7f3fadfb4402）
- https://huggingface.co/api/models/THUDM/cogagent-9b-20241220（获取于 2026-10-17T02:44:29Z；SHA-256：ae72fbc40f9c8afd52d1688b2233e5c915571de33618cfd1ffcb7f3fadfb4402）
- https://huggingface.co/zai-org/cogagent-9b-20241220/raw/main/LICENSE（获取于 2026-10-17T02:45:20Z；SHA-256：c1ad1d99a8d46a00610db35d97c787d10b7e81661e48a1e389ae6cbb51a45630）
- https://huggingface.co/zai-org/cogagent-9b-20241220/raw/main/README.md（获取于 2026-10-17T02:44:29Z；SHA-256：de2c8e7a9792c3d129451ec813d458f83263460a5808cf87c45b04b260a376c9）
- https://huggingface.co/api/models/THUDM/cogagent-9b-20241220（获取于 2026-10-17T19:15:13Z；SHA-256：35bbe72f95711e042dab7a94bf2711e30a3da50190c7315178c37de5725cc1d9）
- https://huggingface.co/api/models/zai-org/cogagent-9b-20241220（获取于 2026-10-17T19:15:14Z；SHA-256：35bbe72f95711e042dab7a94bf2711e30a3da50190c7315178c37de5725cc1d9）

---

## cogagent-vqa-hf

这是面向单轮视觉对话的 CogAgent 检查点；模型卡还介绍了其 GUI 截图理解、坐标动作能力以及报告的 GUI 数据集结果。

- 目录页面：https://awesomecua.com/resources/url-64d0220e17b4e67485f3/
- 原始来源：https://huggingface.co/THUDM/cogagent-vqa-hf
- 类型：模型
- 审核状态：已审核
- 范围：相关研究
- 运行环境：跨平台、桌面、网页
- 主题：界面理解、动作预测、GUI 定位
- 证据核查日期：2026-11-09T19:57:49Z
- ID：url:64d0220e17b4e67485f3

### 范围记录

The repository contains model weight shards and model code. The card states Apache-2.0 metadata and additional terms for commercial use.

- 完整记录 JSON：https://awesomecua.com/resources/url-64d0220e17b4e67485f3/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/THUDM/cogagent-vqa-hf

### 一手证据

- https://huggingface.co/api/models/THUDM/cogagent-vqa-hf（获取于 2026-11-09T19:57:49Z；SHA-256：ed3760213e34cda7dd137adef4258fce7d4776a4c6aeae3546e84a3e1136716a）
- https://huggingface.co/api/models/THUDM/cogagent-vqa-hf（获取于 2026-11-09T19:57:49Z；SHA-256：ed3760213e34cda7dd137adef4258fce7d4776a4c6aeae3546e84a3e1136716a）
- https://huggingface.co/api/models/THUDM/cogagent-vqa-hf（获取于 2026-11-09T20:03:07Z；SHA-256：ed3760213e34cda7dd137adef4258fce7d4776a4c6aeae3546e84a3e1136716a）
- https://huggingface.co/api/models/zai-org/cogagent-vqa-hf（获取于 2026-11-09T20:03:08Z；SHA-256：ed3760213e34cda7dd137adef4258fce7d4776a4c6aeae3546e84a3e1136716a）

---

## ColorGUI-32B

ColorGUI-32B 是基于 Qwen3-VL-32B-Instruct 训练的移动界面动作模型，可根据屏幕截图和指令选择操作，供移动智能体运行环境使用。

- 目录页面：https://awesomecua.com/resources/url-38672ac9af2e25fbfb58/
- 原始来源：https://huggingface.co/MadeAgents/ColorGUI-32B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：手机操作、GUI 定位、动作预测、强化学习
- 证据核查日期：2026-11-09T05:04:58Z
- ID：url:38672ac9af2e25fbfb58

### 范围记录

The release includes model weight shards and tokenizer files. The card declares an Apache 2.0 license and links the ColorMobileAgent runtime.

- 完整记录 JSON：https://awesomecua.com/resources/url-38672ac9af2e25fbfb58/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/MadeAgents/ColorGUI-32B

### 一手证据

- https://huggingface.co/api/models/MadeAgents/ColorGUI-32B（获取于 2026-11-09T05:04:58Z；SHA-256：4ab52eec6daee8dbc7b075fc5f0d420786ef171ba91af6599961d59d2d20bda6）
- https://huggingface.co/api/models/MadeAgents/ColorGUI-32B（获取于 2026-11-09T05:04:58Z；SHA-256：4ab52eec6daee8dbc7b075fc5f0d420786ef171ba91af6599961d59d2d20bda6）

---

## ConClick-8B

一个 GUI 定位模型检查点，利用坐标和排序监督区分目标元素与干扰元素，以适配器及配套权重形式发布。

- 目录页面：https://awesomecua.com/resources/url-75cc3b45e7e44c422c4c/
- 原始来源：https://huggingface.co/ruotian/ConClick-8B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：GUI 定位、界面理解
- 证据核查日期：2026-11-09T19:57:09Z
- ID：url:75cc3b45e7e44c422c4c

### 范围记录

The card names Qwen/Qwen3-VL-8B-Instruct as the base model and lists a LoRA adapter, selection head, and visual-merger state. It declares an Apache-2.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-75cc3b45e7e44c422c4c/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/ruotian/ConClick-8B

### 一手证据

- https://huggingface.co/api/models/ruotian/ConClick-8B（获取于 2026-11-09T19:57:09Z；SHA-256：20029d7d91ad2f235788498ca5dbf35ff492ba062feedc2207bcd92d9cdb7abe）
- https://huggingface.co/api/models/ruotian/ConClick-8B（获取于 2026-11-09T19:57:09Z；SHA-256：20029d7d91ad2f235788498ca5dbf35ff492ba062feedc2207bcd92d9cdb7abe）

---

## cua-s1-forms-coreml

这款 CUA-S1-FORMS 的 Core ML 转换模型根据任务和界面元素文本，对表单的候选操作评分。它为 Apple 设备提供可移植和已编译的模型包。

- 目录页面：https://awesomecua.com/resources/url-f742ad40df2e5f109fc3/
- 原始来源：https://huggingface.co/FluidInference/cua-s1-forms-coreml
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、桌面、macOS、iOS
- 主题：动作预测、自动化、效率
- 证据核查日期：2026-11-09T19:56:06Z
- ID：url:f742ad40df2e5f109fc3

### 范围记录

The release includes FP16 packages, preprocessing code and conversion reports. The card targets iOS 17 and macOS 14 or newer and declares an MIT license.

- 完整记录 JSON：https://awesomecua.com/resources/url-f742ad40df2e5f109fc3/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：mit — https://huggingface.co/FluidInference/cua-s1-forms-coreml

### 一手证据

- https://huggingface.co/api/models/FluidInference/cua-s1-forms-coreml（获取于 2026-11-09T19:56:06Z；SHA-256：5e82b52f3b9e454c9b154d002d71304537a729e8d0f9b61362ad6f08f096668a）
- https://huggingface.co/api/models/FluidInference/cua-s1-forms-coreml（获取于 2026-11-09T19:56:06Z；SHA-256：5e82b52f3b9e454c9b154d002d71304537a729e8d0f9b61362ad6f08f096668a）

---

## DeskMind Eyes 4B

DeskMind Eyes 4B 根据元素描述和屏幕截图，为 Mac 应用输出点击位置。该版本提供合并后的模型权重，并报告界面定位评测结果。

- 目录页面：https://awesomecua.com/resources/url-0f9bf031c9ee17191cd1/
- 原始来源：https://huggingface.co/deskmind/eyes-4b
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、macOS
- 主题：GUI 定位、界面理解、评测
- 证据核查日期：2026-11-09T19:57:15Z
- ID：url:0f9bf031c9ee17191cd1

### 范围记录

The card lists BF16 weights on the main revision and an MLX 4-bit build on a separate revision. It says the published weights merge a LoRA trained from GUI-Owl-1.5-4B-Instruct and declares Apache-2.0.

- 完整记录 JSON：https://awesomecua.com/resources/url-0f9bf031c9ee17191cd1/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/deskmind/eyes-4b

### 一手证据

- https://huggingface.co/api/models/deskmind/eyes-4b（获取于 2026-11-09T19:57:15Z；SHA-256：10e51927c859fb5cc6a80ddcfc958ddaa3e31706cf6d5527b0f3157bb1e59d42）
- https://huggingface.co/api/models/deskmind/eyes-4b（获取于 2026-11-09T19:57:15Z；SHA-256：10e51927c859fb5cc6a80ddcfc958ddaa3e31706cf6d5527b0f3157bb1e59d42）

---

## ELAM-7B

这是一个基于汽车图形界面截图微调的模型，可为测试指令返回点击坐标，并在相关界面元素处判断预期结果。

- 目录页面：https://awesomecua.com/resources/url-057b43bab2e1e58fc58e/
- 原始来源：https://huggingface.co/sparks-solutions/ELAM-7B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：GUI 定位、评测、界面理解
- 证据核查日期：2026-11-09T19:56:36Z
- ID：url:057b43bab2e1e58fc58e

### 范围记录

The card reports training on 17,708 instructions and evaluations for 6,230 images. It identifies Molmo-7B-D-0924 as the base model and declares an Apache 2.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-057b43bab2e1e58fc58e/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/sparks-solutions/ELAM-7B

### 一手证据

- https://huggingface.co/api/models/sparks-solutions/ELAM-7B（获取于 2026-11-09T19:56:36Z；SHA-256：4fe9205253eb9bb21cdf49e0d6f1cc4c387f2393eb1372191adef72ee6db573a）
- https://huggingface.co/api/models/sparks-solutions/ELAM-7B（获取于 2026-11-09T19:56:36Z；SHA-256：4fe9205253eb9bb21cdf49e0d6f1cc4c387f2393eb1372191adef72ee6db573a）

---

## espetro/htlm-lfm2.5-350m

一个经过微调的 LFM2.5-350M 模型，可根据指令和带索引的网页元素选择点击、输入或选取操作，并提供用于浏览器推理的 GGUF 文件。

- 目录页面：https://awesomecua.com/resources/url-df38112df002157ce4b0/
- 原始来源：https://huggingface.co/espetro/htlm-lfm2.5-350m
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：动作预测、GUI 定位、网页导航、模仿学习
- 证据核查日期：2026-11-09T19:56:53Z
- ID：url:df38112df002157ce4b0

### 范围记录

The card says the model was fine-tuned with LoRA on Mind2Web and reports results on 408 held-out tasks. The listed repository file is a Q8 GGUF checkpoint; the card declares an Apache-2.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-df38112df002157ce4b0/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/espetro/htlm-lfm2.5-350m

### 一手证据

- https://huggingface.co/api/models/espetro/htlm-lfm2.5-350m（获取于 2026-11-09T19:56:53Z；SHA-256：2ab2ead4590483cdb9c7d792ba9344ca1aaeab3890ee67e54f9f77625801fbb9）
- https://huggingface.co/api/models/espetro/htlm-lfm2.5-350m（获取于 2026-11-09T19:56:53Z；SHA-256：2ab2ead4590483cdb9c7d792ba9344ca1aaeab3890ee67e54f9f77625801fbb9）

---

## EvoCUA 32B 20260105

较大的 EvoCUA 计算机使用智能体检查点，发布于 20260105，采用 Qwen3-VL 架构，约有 33B 个 BF16 参数，标注适用于 OSWorld 及英文和中文。

- 目录页面：https://awesomecua.com/resources/url-60a95f34072aeb2771cc/
- 原始来源：https://huggingface.co/meituan/EvoCUA-32B-20260105
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：强化学习、规划
- 证据核查日期：2026-10-16T06:50:49Z
- ID：url:60a95f34072aeb2771cc

- 完整记录 JSON：https://awesomecua.com/resources/url-60a95f34072aeb2771cc/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/meituan/EvoCUA-32B-20260105

### 一手证据

- https://huggingface.co/api/models/meituan/EvoCUA-32B-20260105（获取于 2026-10-16T06:50:49Z；SHA-256：f42d9537a05f2562b57e5d508f95c3d29a9107d06574318c5715c7da5fb2a86d）
- https://huggingface.co/api/models/meituan/EvoCUA-32B-20260105（获取于 2026-10-16T06:50:49Z；SHA-256：f42d9537a05f2562b57e5d508f95c3d29a9107d06574318c5715c7da5fb2a86d）

---

## EvoCUA 8B 20260105

EvoCUA 计算机使用智能体检查点，发布于 20260105，采用 Qwen3-VL 架构，约有 8.8B 个 BF16 参数，标注适用于 OSWorld 及英文和中文。

- 目录页面：https://awesomecua.com/resources/url-2a2682f86dcb8ebc9a80/
- 原始来源：https://huggingface.co/meituan/EvoCUA-8B-20260105
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：强化学习、规划
- 证据核查日期：2026-10-16T06:50:49Z
- ID：url:2a2682f86dcb8ebc9a80

- 完整记录 JSON：https://awesomecua.com/resources/url-2a2682f86dcb8ebc9a80/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/meituan/EvoCUA-8B-20260105

### 一手证据

- https://huggingface.co/api/models/meituan/EvoCUA-8B-20260105（获取于 2026-10-16T06:50:49Z；SHA-256：3fd1e50729e97746fec57c7d5da6f093d76fb9174e74c3f2c630fed5486fe995）
- https://huggingface.co/api/models/meituan/EvoCUA-8B-20260105（获取于 2026-10-16T06:50:49Z；SHA-256：3fd1e50729e97746fec57c7d5da6f093d76fb9174e74c3f2c630fed5486fe995）

---

## Fara 7B

微软的 Fara 检查点，采用 Qwen2.5-VL 架构的图文到文本模型，约有 8.3B 个 BF16 参数，使用英语，采用 MIT 许可证，并关联 arXiv 论文 2511.19663。

- 目录页面：https://awesomecua.com/resources/url-a4da77ee63f879cc8e63/
- 原始来源：https://huggingface.co/microsoft/Fara-7b
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：规划、网页导航
- 证据核查日期：2026-10-16T06:50:49Z
- ID：url:a4da77ee63f879cc8e63

- 完整记录 JSON：https://awesomecua.com/resources/url-a4da77ee63f879cc8e63/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：mit — https://huggingface.co/microsoft/Fara-7b

### 一手证据

- https://huggingface.co/api/models/microsoft/Fara-7b（获取于 2026-10-16T06:50:49Z；SHA-256：92bfa3c1f34e7e76a35f72389a3b3dd9fdab5fcff0569c9fc8aabe331c703f07）
- https://huggingface.co/api/models/microsoft/Fara-7b（获取于 2026-10-16T06:50:49Z；SHA-256：92bfa3c1f34e7e76a35f72389a3b3dd9fdab5fcff0569c9fc8aabe331c703f07）
- https://huggingface.co/api/models/microsoft/Fara-7B（获取于 2026-10-17T19:14:59Z；SHA-256：cd1f83cd2ebf30d45501d1a31ecbe3bcb2039928d580c750733d2edb49916398）
- https://huggingface.co/api/models/microsoft/Fara-7b（获取于 2026-10-17T19:15:00Z；SHA-256：cd1f83cd2ebf30d45501d1a31ecbe3bcb2039928d580c750733d2edb49916398）
- https://huggingface.co/api/models/microsoft/fara-7b（获取于 2026-10-17T19:15:01Z；SHA-256：cd1f83cd2ebf30d45501d1a31ecbe3bcb2039928d580c750733d2edb49916398）

---

## Ferret-UI

Ferret 模型家族中的屏幕理解研究。

- 目录页面：https://awesomecua.com/resources/github-apple-ml-ferret/
- 原始来源：https://github.com/apple/ml-ferret
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：Android、iOS
- 主题：界面理解、GUI 定位
- 证据核查日期：2026-10-16T06:40:52Z
- ID：github:apple/ml-ferret

### 范围记录

The repository has moved from apple/ml-ferret to apple-aiml-research/ml-ferret; evidence uses the dedicated ferretui component.

- 完整记录 JSON：https://awesomecua.com/resources/github-apple-ml-ferret/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/apple-aiml-research/ml-ferret/main/ferretui/README.md（获取于 2026-10-16T06:40:52Z；SHA-256：1973f702c08ca9637ce03bc28fc34188be05826e9d43f9992b08e804f474b1a1）

---

## GELab Zero 4B Preview

GELab-Zero 手机操作智能体的预览版检查点，由 Qwen3-VL-4B-Instruct 微调而来，约有 4.4B 个 BF16 参数；标记适用于英语和中文的 Android 场景，采用 Apache-2.0 许可证。

- 目录页面：https://awesomecua.com/resources/url-d7ad447ecd712c6d51b8/
- 原始来源：https://huggingface.co/stepfun-ai/GELab-Zero-4B-preview
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：手机操作
- 证据核查日期：2026-10-16T06:50:49Z
- ID：url:d7ad447ecd712c6d51b8

- 完整记录 JSON：https://awesomecua.com/resources/url-d7ad447ecd712c6d51b8/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/stepfun-ai/GELab-Zero-4B-preview

### 一手证据

- https://huggingface.co/api/models/stepfun-ai/GELab-Zero-4B-preview（获取于 2026-10-16T06:50:49Z；SHA-256：cd1efa947316f13967165ac906400170df6d28446804ba0763a49fc21a731e7e）
- https://huggingface.co/api/models/stepfun-ai/GELab-Zero-4B-preview（获取于 2026-10-16T06:50:49Z；SHA-256：cd1efa947316f13967165ac906400170df6d28446804ba0763a49fc21a731e7e）

---

## GLM-4.5V

这是一个已发布的视觉语言模型，文档将屏幕读取、图标识别、视觉元素定位和桌面操作辅助列为其支持的任务。

- 目录页面：https://awesomecua.com/resources/url-97cfbcd45f879ff71499/
- 原始来源：https://huggingface.co/zai-org/GLM-4.5V
- 类型：模型
- 审核状态：已审核
- 范围：相关研究
- 运行环境：桌面
- 主题：界面理解、GUI 定位
- 证据核查日期：2026-11-09T19:57:46Z
- ID：url:97cfbcd45f879ff71499

### 范围记录

The repository contains model weight shards, configuration and tokenizer files. The card declares an MIT license and gives usage examples for Transformers, SGLang and vLLM.

- 完整记录 JSON：https://awesomecua.com/resources/url-97cfbcd45f879ff71499/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：mit — https://huggingface.co/zai-org/GLM-4.5V

### 一手证据

- https://huggingface.co/api/models/zai-org/GLM-4.5V（获取于 2026-11-09T19:57:46Z；SHA-256：0109dcdce4f3a728e5c0c6ea22102d2cf4fea2480eb1407b8042c5516ea5a15a）
- https://huggingface.co/api/models/zai-org/GLM-4.5V（获取于 2026-11-09T19:57:46Z；SHA-256：0109dcdce4f3a728e5c0c6ea22102d2cf4fea2480eb1407b8042c5516ea5a15a）

---

## GLM-4.6V-FP8

这款 FP8 多模态模型检查点支持以屏幕截图作为输入调用工具，并能根据界面图像生成或修改前端代码。

- 目录页面：https://awesomecua.com/resources/url-2a99aab63fc1fe65610d/
- 原始来源：https://huggingface.co/zai-org/GLM-4.6V-FP8
- 类型：模型
- 审核状态：已审核
- 范围：相关研究
- 运行环境：unspecified
- 主题：界面理解、界面设计、工具集成
- 证据核查日期：2026-11-09T19:56:04Z
- ID：url:2a99aab63fc1fe65610d

### 范围记录

The repository contains model weight shards and a Transformers usage example. The card also names SGLang and vLLM serving options and declares an MIT license.

- 完整记录 JSON：https://awesomecua.com/resources/url-2a99aab63fc1fe65610d/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：mit — https://huggingface.co/zai-org/GLM-4.6V-FP8

### 一手证据

- https://huggingface.co/api/models/zai-org/GLM-4.6V-FP8（获取于 2026-11-09T19:56:04Z；SHA-256：03b42ee2dee21fa1f5cfda6b31f049514e6476f3e18a1d9fea1c24322accbf35）
- https://huggingface.co/api/models/zai-org/GLM-4.6V-FP8（获取于 2026-11-09T19:56:04Z；SHA-256：03b42ee2dee21fa1f5cfda6b31f049514e6476f3e18a1d9fea1c24322accbf35）

---

## GLM-V

Z.ai 的开源权重视觉语言模型仓库，包含 GLM-4.1V-Thinking、GLM-4.5V 和 GLM-4.6V，并提供移动端、PC 和网页 GUI 智能体提示样例及已发布的 VLM 奖励系统。

- 目录页面：https://awesomecua.com/resources/github-zai-org-glm-v/
- 原始来源：https://github.com/zai-org/GLM-V
- 类型：模型
- 审核状态：已审核
- 范围：相关研究
- 运行环境：跨平台、桌面、网页、Android
- 主题：GUI 定位、界面理解、奖励模型
- 证据核查日期：2026-10-18T11:09:25Z
- ID：github:zai-org/glm-v

### 范围记录

General-purpose vision-language model family; the README lists GUI agent operation (screen reading, icon recognition, desktop operation assistance) as one GLM-4.5V capability, so the record is adjacent. The inspected tree has examples/gui-agent prompt and output-handling code for GLM-4.1V and GLM-4.5V, and glmv_reward scripts named for AndroidWorld, OSWorld and WebVoyager. Checkpoints are hosted separately on Hugging Face and ModelScope. The README states (2026-09-02) that maintenance has ended and points to GLM-5 for newer models. github.com/THUDM/GLM-4.1V-Thinking resolves to the same repository 1010055053 and is recorded as a repository alias. The LICENSE file is Apache-2.0 text for repository code; checkpoint weights terms were not reviewed and stay unknown.

- 完整记录 JSON：https://awesomecua.com/resources/github-zai-org-glm-v/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/zai-org/GLM-V/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/zai-org/GLM-V/HEAD/README.md（获取于 2026-10-18T11:09:25Z；SHA-256：f518aecf28e2a4166b537a8db59797a67fd5e0d8b3d698751898d40b8aa3ad7d）
- https://api.github.com/repos/zai-org/GLM-V（获取于 2026-10-18T11:09:45Z；SHA-256：3caa5a1c6a030d8a7b358b8f475df74c1339ffea330ab761f4a72e0d0f8bd380）
- https://api.github.com/repos/zai-org/GLM-V/git/trees/main?recursive=1（获取于 2026-10-18T11:09:46Z；SHA-256：b37cec03ba134f0230c7711182f9f1920387f162506e59b64a90c0ed4b714c70）
- https://raw.githubusercontent.com/zai-org/GLM-V/HEAD/LICENSE（获取于 2026-10-18T11:09:52Z；SHA-256：086c6e7f5082b4640dfb03a892f32504f24afd247c702c38a3aae8c3474c54f0）
- https://raw.githubusercontent.com/zai-org/GLM-V/HEAD/LICENSE（获取于 2026-10-18T11:09:52Z；SHA-256：086c6e7f5082b4640dfb03a892f32504f24afd247c702c38a3aae8c3474c54f0）
- https://api.github.com/repos/THUDM/GLM-4.1V-Thinking（获取于 2026-10-18T11:09:53Z；SHA-256：3caa5a1c6a030d8a7b358b8f475df74c1339ffea330ab761f4a72e0d0f8bd380）
- https://api.github.com/repos/zai-org/GLM-V（获取于 2026-10-18T11:09:45Z；SHA-256：3caa5a1c6a030d8a7b358b8f475df74c1339ffea330ab761f4a72e0d0f8bd380）

---

## Go-Browse WebArena Qwen 7B

基于 Go-Browse WebArena 轨迹微调的 Qwen-2.5-7B-Instruct 检查点，用于执行网站任务。

- 目录页面：https://awesomecua.com/resources/url-db1b7b7efe3755ae5693/
- 原始来源：https://huggingface.co/apurvaga/go-browse-wa-qwen-7B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、模仿学习
- 证据核查日期：2026-10-17T02:44:50Z
- ID：url:db1b7b7efe3755ae5693

### 范围记录

Seven public safetensors shards and model/tokenizer files are present. The card links the official code and paper but declares no weight license. The code repository’s MIT license is not inherited by this checkpoint, and the separate NNetNav-trained comparison model is not treated as an alias.

- 完整记录 JSON：https://awesomecua.com/resources/url-db1b7b7efe3755ae5693/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/apurvaga/go-browse-wa-qwen-7B/raw/main/README.md（获取于 2026-10-17T02:44:50Z；SHA-256：470ef6f975990518f9622b259a6b8e5761b26dcd22985c248f1df2beb4aa2760）
- https://huggingface.co/api/models/apurvaga/go-browse-wa-qwen-7B（获取于 2026-10-17T02:44:50Z；SHA-256：d083bf53b20c6c6124f1df29a83ce783799d46a1ab5600d19d658729fc6d67bb）
- https://raw.githubusercontent.com/ApGa/Go-Browse/HEAD/README.md（获取于 2026-10-17T02:44:04Z；SHA-256：0d4b28c993ccb977c7910ff3fecb5de29db364a7a7ad55523c8e052c9bae2566）

---

## GroundAnything-VLM

GroundAnything-VLM 是一个自回归视觉定位模型检查点，可根据指代指令定位图像目标，包括图形界面元素。

- 目录页面：https://awesomecua.com/resources/url-a80a37148148aad731a9/
- 原始来源：https://huggingface.co/GroundingPI/GroundAnything-VLM
- 类型：模型
- 审核状态：已审核
- 范围：相关研究
- 运行环境：unspecified
- 主题：GUI 定位、界面理解
- 证据核查日期：2026-11-09T19:56:15Z
- ID：url:a80a37148148aad731a9

### 范围记录

The repository provides model weights and a serving recipe. The card says the project's contributions use Apache 2.0 terms while Kimi-derived material retains its upstream license.

- 完整记录 JSON：https://awesomecua.com/resources/url-a80a37148148aad731a9/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：other — https://huggingface.co/GroundingPI/GroundAnything-VLM

### 一手证据

- https://huggingface.co/api/models/GroundingPI/GroundAnything-VLM（获取于 2026-11-09T19:56:15Z；SHA-256：90330ba68f9e134e894e00af8ba172c39df762f11485d1e970ec540f158ef8dc）
- https://huggingface.co/api/models/GroundingPI/GroundAnything-VLM（获取于 2026-11-09T19:56:15Z；SHA-256：90330ba68f9e134e894e00af8ba172c39df762f11485d1e970ec540f158ef8dc）

---

## GroundGUI-8B

根据截图进行定位的模型检查点，在归一化坐标空间中输出单次点击位置。

- 目录页面：https://awesomecua.com/resources/url-de31b07ff24ab15d9bdf/
- 原始来源：https://huggingface.co/PrentisAI/GroundGUI-8B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、网页、跨平台
- 主题：GUI 定位、界面理解
- 证据核查日期：2026-10-17T01:48:10Z
- ID：url:de31b07ff24ab15d9bdf

### 范围记录

License declarations apply to this checkpoint separately from code and training data.

- 完整记录 JSON：https://awesomecua.com/resources/url-de31b07ff24ab15d9bdf/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/PrentisAI/GroundGUI-8B/raw/main/README.md

### 一手证据

- https://huggingface.co/PrentisAI/GroundGUI-8B/raw/main/README.md（获取于 2026-10-17T01:48:10Z；SHA-256：73a4690fab49d3b08ea9b0b1e44d62d5ec1802614f5cf22c37ed92dca49aa520）
- https://huggingface.co/api/models/PrentisAI/GroundGUI-8B（获取于 2026-10-17T01:49:48Z；SHA-256：8b680b9a63e654fe0b43754201d30c91714859578f294f4781e035280e862657）
- https://huggingface.co/PrentisAI/GroundGUI-8B/raw/main/README.md（获取于 2026-10-17T01:48:10Z；SHA-256：73a4690fab49d3b08ea9b0b1e44d62d5ec1802614f5cf22c37ed92dca49aa520）

---

## GTA1-7B

通过强化学习训练的 GUI 定位模型权重，根据截图和指令预测点击坐标；发布页提供推理示例和基准测试结果。

- 目录页面：https://awesomecua.com/resources/url-fa6761a4612fab664a7c/
- 原始来源：https://huggingface.co/Salesforce/GTA1-7B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Windows
- 主题：GUI 定位、强化学习、动作预测、评测
- 证据核查日期：2026-11-09T05:05:09Z
- ID：url:fa6761a4612fab664a7c

### 范围记录

The card declares an MIT license and shows vLLM-based inference code using the Salesforce/GTA1-7B checkpoint. It reports results on ScreenSpot, OSWorld, and WindowsAgentArena benchmarks.

- 完整记录 JSON：https://awesomecua.com/resources/url-fa6761a4612fab664a7c/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：mit — https://huggingface.co/Salesforce/GTA1-7B

### 一手证据

- https://huggingface.co/api/models/Salesforce/GTA1-7B（获取于 2026-11-09T05:05:09Z；SHA-256：73f8db102da38c690804633c5d9829a06d9c4c73d4a0cf8fdf234b91b90940f8）
- https://huggingface.co/api/models/Salesforce/GTA1-7B（获取于 2026-11-09T05:05:09Z；SHA-256：73f8db102da38c690804633c5d9829a06d9c4c73d4a0cf8fdf234b91b90940f8）

---

## GTA1-7B-2507

GTA1-7B-2507 是通过强化学习训练的界面定位模型，可在截图中找到文字描述的控件并返回点击坐标。

- 目录页面：https://awesomecua.com/resources/url-691c52679bb1d3521db7/
- 原始来源：https://huggingface.co/Salesforce/GTA1-7B-2507
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Windows
- 主题：GUI 定位、强化学习、评测
- 证据核查日期：2026-11-09T05:05:20Z
- ID：url:691c52679bb1d3521db7

### 范围记录

The card includes inference code using Qwen2.5-VL components and declares an Apache-2.0 license. It cites the GTA1 paper.

- 完整记录 JSON：https://awesomecua.com/resources/url-691c52679bb1d3521db7/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/Salesforce/GTA1-7B-2507

### 一手证据

- https://huggingface.co/api/models/Salesforce/GTA1-7B-2507（获取于 2026-11-09T05:05:20Z；SHA-256：3250e912d601fae99985da24b73dde65b523381edcaa1a728c48c43af3dff013）
- https://huggingface.co/api/models/Salesforce/GTA1-7B-2507（获取于 2026-11-09T05:05:20Z；SHA-256：3250e912d601fae99985da24b73dde65b523381edcaa1a728c48c43af3dff013）

---

## GUI-Actor 2B Qwen2-VL

GUI-Actor 元素定位检查点基于 Qwen2-VL-2B-Instruct，以注意力操作头根据截图上的指令提出排序后的点击点，不以文本输出坐标。

- 目录页面：https://awesomecua.com/resources/url-e42b286fd85b62bd7bb1/
- 原始来源：https://huggingface.co/microsoft/GUI-Actor-2B-Qwen2-VL
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：GUI 定位
- 证据核查日期：2026-10-18T12:04:10Z
- ID：url:e42b286fd85b62bd7bb1

### 范围记录

Hub API at revision 8f87b366 lists one BF16 safetensors file (about 2.23B parameters); the config names Qwen2VLForConditionalGenerationWithPointer, which loads through the GUI-Actor code. Access to the repository is open. The card says it was fine-tuned for GUI grounding on the cckevinn/GUI-Actor-Data dataset and reports 36.7 on ScreenSpot-Pro, 86.5 on ScreenSpot and 88.6 on ScreenSpot-v2 for this size; these are publisher measurements. The card declares MIT for the checkpoint.

- 完整记录 JSON：https://awesomecua.com/resources/url-e42b286fd85b62bd7bb1/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：mit — https://huggingface.co/microsoft/GUI-Actor-2B-Qwen2-VL/raw/8f87b366d004425a9823502553e2097c71116ece/README.md

### 一手证据

- https://huggingface.co/microsoft/GUI-Actor-2B-Qwen2-VL/raw/8f87b366d004425a9823502553e2097c71116ece/README.md（获取于 2026-10-18T12:04:10Z；SHA-256：8f872a9016aec48a245d0ac187f22a16f56fd8fc0d7f690b219d3ce0c5ab4413）
- https://huggingface.co/api/models/microsoft/GUI-Actor-2B-Qwen2-VL/revision/8f87b366d004425a9823502553e2097c71116ece（获取于 2026-10-18T12:04:10Z；SHA-256：1e94e0139ceb46ef70eef0c9b72f22ad623c2d99de41d42522606c0a2847a622）
- https://huggingface.co/microsoft/GUI-Actor-2B-Qwen2-VL/raw/8f87b366d004425a9823502553e2097c71116ece/README.md（获取于 2026-10-18T12:04:10Z；SHA-256：8f872a9016aec48a245d0ac187f22a16f56fd8fc0d7f690b219d3ce0c5ab4413）

---

## GUI-Actor 3B Qwen2.5-VL

GUI-Actor 元素定位检查点由 Qwen2.5-VL-3B-Instruct 微调而成，带注意力操作头，约有 3.8B 个 BF16 参数，配置指向 Qwen2.5-VL 类的指针变体，采用 MIT 许可。

- 目录页面：https://awesomecua.com/resources/url-0c400260635b7e4ab7c0/
- 原始来源：https://huggingface.co/microsoft/GUI-Actor-3B-Qwen2.5-VL
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：GUI 定位
- 证据核查日期：2026-10-18T12:01:43Z
- ID：url:0c400260635b7e4ab7c0

### 范围记录

The card's heading says GUI-Actor-7B with a Qwen2.5-VL-7B backbone, but its metadata, text and usage code name Qwen2.5-VL-3B-Instruct and this repository; the API reports 3,787,653,120 BF16 parameters and the Qwen2_5_VLForConditionalGenerationWithPointer class, which loads through the gui_actor package. The Hub manifest lists two Safetensors shards, an index and trainer_state.json. ScreenSpot results in the card are publisher-reported. MIT is the card's weight declaration; Qwen2.5-VL and training-data terms are separate.

- 完整记录 JSON：https://awesomecua.com/resources/url-0c400260635b7e4ab7c0/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：MIT — https://huggingface.co/microsoft/GUI-Actor-3B-Qwen2.5-VL/raw/5fb97348752cb3d50be9709f47d9ae6c99725949/README.md

- 权重审核：Publisher model-card declaration for this checkpoint; base-model and training-data terms are separate.
  来源：https://huggingface.co/microsoft/GUI-Actor-3B-Qwen2.5-VL/raw/5fb97348752cb3d50be9709f47d9ae6c99725949/README.md

### 一手证据

- https://huggingface.co/microsoft/GUI-Actor-3B-Qwen2.5-VL/raw/5fb97348752cb3d50be9709f47d9ae6c99725949/README.md（获取于 2026-10-18T12:01:43Z；SHA-256：44bd4da4738b849135cd0ec03f8c6ffe6d1bac113b649178b9cbcb3ba295f7c4）
- https://huggingface.co/api/models/microsoft/GUI-Actor-3B-Qwen2.5-VL（获取于 2026-10-18T12:01:43Z；SHA-256：f2a9b098a0b5f104c1692949849ee4f92f333b74c3cd51c51ed03847386f3464）
- https://huggingface.co/microsoft/GUI-Actor-3B-Qwen2.5-VL/raw/5fb97348752cb3d50be9709f47d9ae6c99725949/README.md（获取于 2026-10-18T12:01:43Z；SHA-256：44bd4da4738b849135cd0ec03f8c6ffe6d1bac113b649178b9cbcb3ba295f7c4）

---

## GUI-G1

GUI 定位训练代码，修改推理模板、奖励函数和 GRPO 目标函数，并附有模型发布链接。

- 目录页面：https://awesomecua.com/resources/github-yuqi-zhou-gui-g1/
- 原始来源：https://github.com/Yuqi-Zhou/GUI-G1
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：GUI 定位、强化学习
- 证据核查日期：2026-10-16T10:43:11Z
- ID：github:yuqi-zhou/gui-g1

### 范围记录

The README retains an older release-pending notice alongside a later checkpoint-release announcement. Check the linked model card for current weight availability and terms.

- 完整记录 JSON：https://awesomecua.com/resources/github-yuqi-zhou-gui-g1/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/Yuqi-Zhou/GUI-G1/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/Yuqi-Zhou/GUI-G1/HEAD/README.md（获取于 2026-10-16T10:43:11Z；SHA-256：2d64349b514c43fb9d0260247300412d33cadc2a029d8279a00cb2a12f26a25a）
- https://raw.githubusercontent.com/Yuqi-Zhou/GUI-G1/HEAD/LICENSE（获取于 2026-10-16T10:48:43Z；SHA-256：c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4）

---

## GUI-G1 3B v1

为 R1 式视觉定位实验发布的 Qwen2.5-VL-3B 检查点，根据截图和指令预测界面目标位置。

- 目录页面：https://awesomecua.com/resources/url-9dc9d8d3b9a4b32d6f4b/
- 原始来源：https://huggingface.co/Yuqi-Zhou/GUI-G1-3B-v1
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：GUI 定位、强化学习
- 证据核查日期：2026-10-17T02:44:30Z
- ID：url:9dc9d8d3b9a4b32d6f4b

### 范围记录

Two public safetensors shards and model/tokenizer configuration are present. The card declares MIT. Its inference example loads the v1 model but names a different 0.1K processor checkpoint.

- 完整记录 JSON：https://awesomecua.com/resources/url-9dc9d8d3b9a4b32d6f4b/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：mit — https://huggingface.co/Yuqi-Zhou/GUI-G1-3B-v1/raw/main/README.md

### 一手证据

- https://huggingface.co/Yuqi-Zhou/GUI-G1-3B-v1/raw/main/README.md（获取于 2026-10-17T02:44:30Z；SHA-256：b7a4628a4d65ae226b50086075f3977b8f69ad12d15238a194675875bb9113e8）
- https://huggingface.co/api/models/Yuqi-Zhou/GUI-G1-3B-v1（获取于 2026-10-17T02:44:30Z；SHA-256：2f4b2084ca9cfd67f0952ea8c578c87f3a5d721064b5de3a191d7489373125aa）
- https://huggingface.co/Yuqi-Zhou/GUI-G1-3B-v1/raw/main/README.md（获取于 2026-10-17T02:44:30Z；SHA-256：b7a4628a4d65ae226b50086075f3977b8f69ad12d15238a194675875bb9113e8）

---

## GUI-G2 3B

3B GUI-G2 定位检查点基于 Qwen2.5-VL-3B-Instruct，使用高斯点位和覆盖奖励微调，依据文本指令定位截图中的界面元素。

- 目录页面：https://awesomecua.com/resources/url-d80fa13b647c4020a755/
- 原始来源：https://huggingface.co/inclusionAI/GUI-G2-3B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：GUI 定位、强化学习、奖励模型
- 证据核查日期：2026-10-18T16:05:24Z
- ID：url:d80fa13b647c4020a755

### 范围记录

Hub API at revision 41325677 lists two BF16 safetensors shards (about 3.75B parameters) in the Qwen2_5_VLForConditionalGeneration architecture; the repository is publicly accessible. The card names Qwen2.5-VL-3B-Instruct as the base in prose but sets no base_model field. Its ScreenSpot-v2 table reports only the 7B release and says 3B grounding results are still to come, so no score is recorded here. The project README announces the 3B and 7B releases together. Apache-2.0 is the model-card weight declaration, not a code or training-data license.

- 完整记录 JSON：https://awesomecua.com/resources/url-d80fa13b647c4020a755/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/inclusionAI/GUI-G2-3B/raw/413256770087058c21662c05c13fa8c199a08fb4/README.md

### 一手证据

- https://huggingface.co/inclusionAI/GUI-G2-3B/raw/413256770087058c21662c05c13fa8c199a08fb4/README.md（获取于 2026-10-18T16:05:24Z；SHA-256：fa3f7d158e061ec2cc5bec0f2e70ce31401a9b7c4c9a0a60801e8e5a3809ada9）
- https://huggingface.co/api/models/inclusionAI/GUI-G2-3B/revision/413256770087058c21662c05c13fa8c199a08fb4（获取于 2026-10-18T16:04:21Z；SHA-256：cfdbdc73fa2cd8fdd0387d849f3d2a0cfa7d5fd794ea18e6672a7a2f91f08f2a）
- https://raw.githubusercontent.com/ZJU-REAL/GUI-G2/5c5c36581654364073385e37deca28f4d765aa94/README.md（获取于 2026-10-18T16:04:47Z；SHA-256：f9ecdf208ed4b7845ea4dbd1a7c936c016d11f7ec28f17e71338ab3c2f5b5c0d）
- https://huggingface.co/inclusionAI/GUI-G2-3B/raw/413256770087058c21662c05c13fa8c199a08fb4/README.md（获取于 2026-10-18T16:05:24Z；SHA-256：fa3f7d158e061ec2cc5bec0f2e70ce31401a9b7c4c9a0a60801e8e5a3809ada9）

---

## GUI-G2 7B

Qwen2.5-VL 定位检查点，使用高斯点奖励和覆盖奖励训练，奖励粒度随界面元素的大小调整。

- 目录页面：https://awesomecua.com/resources/url-90eea6f6d099a3297850/
- 原始来源：https://huggingface.co/inclusionAI/GUI-G2-7B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：GUI 定位、强化学习、奖励模型
- 证据核查日期：2026-10-17T02:44:29Z
- ID：url:90eea6f6d099a3297850

### 范围记录

The model card and four public safetensors shards establish this specific release. Apache-2.0 is declared for the model. The release targets element grounding; long-horizon task completion is a separate measure.

- 完整记录 JSON：https://awesomecua.com/resources/url-90eea6f6d099a3297850/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/inclusionAI/GUI-G2-7B/raw/main/README.md

### 一手证据

- https://huggingface.co/inclusionAI/GUI-G2-7B/raw/main/README.md（获取于 2026-10-17T02:44:29Z；SHA-256：cf53a868a010a20b165386edaaafed8918071c35a3babf1766fbb51f020cb4a1）
- https://huggingface.co/api/models/inclusionAI/GUI-G2-7B（获取于 2026-10-17T02:44:29Z；SHA-256：c1f11fea30d3a64445e983a011db4efb9515a4221ad770e3a5223699e665eebe）
- https://huggingface.co/inclusionAI/GUI-G2-7B/raw/main/README.md（获取于 2026-10-17T02:44:29Z；SHA-256：cf53a868a010a20b165386edaaafed8918071c35a3babf1766fbb51f020cb4a1）

---

## GUI-Owl 1.5 8B Instruct

8B GUI-Owl 1.5 原生 GUI 智能体模型的指令版，基于 Qwen3-VL，随 Mobile-Agent-v3.5 发布，用于桌面、移动端和浏览器控制，约有 8.8B 个 BF16 参数，采用 MIT 许可。

- 目录页面：https://awesomecua.com/resources/url-d01dfc6e5b5fcece7b41/
- 原始来源：https://huggingface.co/mPLUG/GUI-Owl-1.5-8B-Instruct
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、桌面、Android、网页
- 主题：动作预测、GUI 定位、规划、工具集成、记忆
- 证据核查日期：2026-10-18T12:00:37Z
- ID：url:d01dfc6e5b5fcece7b41

### 范围记录

The card describes instruct models as the variants for fast inference and edge deployment; the thinking 8B checkpoint is a separate repository. The Hub manifest lists four Safetensors shards and an index, and the API reports a Qwen3VLForConditionalGeneration config with 8,767,123,696 BF16 parameters. The card defers usage to a cookbook outside this repository and shows vLLM serving. Benchmark scores in the card are publisher-reported. MIT is the card's weight declaration and is not extended to Qwen3-VL or training data.

- 完整记录 JSON：https://awesomecua.com/resources/url-d01dfc6e5b5fcece7b41/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：MIT — https://huggingface.co/mPLUG/GUI-Owl-1.5-8B-Instruct/raw/06d5faecff74840bab2be2425e9c42667a5d04fc/README.md

- 权重审核：Publisher model-card declaration for this checkpoint; base-model and training-data terms are separate.
  来源：https://huggingface.co/mPLUG/GUI-Owl-1.5-8B-Instruct/raw/06d5faecff74840bab2be2425e9c42667a5d04fc/README.md

### 一手证据

- https://huggingface.co/mPLUG/GUI-Owl-1.5-8B-Instruct/raw/06d5faecff74840bab2be2425e9c42667a5d04fc/README.md（获取于 2026-10-18T12:00:37Z；SHA-256：8475893c60088555dec53ff30acab04533acbaa59a34ea95a15cb7fcf587c546）
- https://huggingface.co/api/models/mPLUG/GUI-Owl-1.5-8B-Instruct（获取于 2026-10-18T12:00:37Z；SHA-256：071c6e2a4a1b5c1f92bd16fe1ca5b56bce8005b95942a0f1f6a45a9c29d83a10）
- https://huggingface.co/mPLUG/GUI-Owl-1.5-8B-Instruct/raw/06d5faecff74840bab2be2425e9c42667a5d04fc/README.md（获取于 2026-10-18T12:00:37Z；SHA-256：8475893c60088555dec53ff30acab04533acbaa59a34ea95a15cb7fcf587c546）

---

## GUI-Owl 32B

Mobile-Agent-v3 项目的 32B GUI-Owl 检查点，基于 Qwen2.5-VL-32B-Instruct 微调，用于 GUI 定位和操作，可在 Mobile-Agent-v3 框架中充当专门智能体。

- 目录页面：https://awesomecua.com/resources/url-a92e7dfcdfdcacb2e634/
- 原始来源：https://huggingface.co/mPLUG/GUI-Owl-32B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：Android、桌面
- 主题：GUI 定位、动作预测、规划
- 证据核查日期：2026-10-18T16:07:56Z
- ID：url:a92e7dfcdfdcacb2e634

### 范围记录

This is the original GUI-Owl 32B release; the 7B checkpoint and the later GUI-Owl 1.5 generation are separate releases, with results and terms scoped to each release. The card recommends serving with vLLM and gives a tensor-parallel serving script. The manifest lists 18 Safetensors shards and the Hub reports 33,452,718,336 BF16 parameters. The card declares MIT for the checkpoint and marks its online demo as coming soon. Benchmark results on the card are publisher claims.

- 完整记录 JSON：https://awesomecua.com/resources/url-a92e7dfcdfdcacb2e634/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：MIT — https://huggingface.co/mPLUG/GUI-Owl-32B/raw/d22450d9b50c1b8cb33cf86423851152957bac64/README.md

- 权重审核：Publisher model-card declaration for the 32B checkpoint; the Qwen2.5-VL-32B-Instruct base license, code and training-data terms are separate.
  来源：https://huggingface.co/mPLUG/GUI-Owl-32B/raw/d22450d9b50c1b8cb33cf86423851152957bac64/README.md

### 一手证据

- https://huggingface.co/mPLUG/GUI-Owl-32B/raw/d22450d9b50c1b8cb33cf86423851152957bac64/README.md（获取于 2026-10-18T16:07:56Z；SHA-256：69f9d76257f3367bc0e040abd6829dc1c2e9e0f0a952c36041830d4c81a42899）
- https://huggingface.co/api/models/mPLUG/GUI-Owl-32B（获取于 2026-10-18T16:07:55Z；SHA-256：39ca8b14b55c5ae7a14435d00f1ead9364415bd4d1519570f760c79fd02b1598）
- https://huggingface.co/mPLUG/GUI-Owl-32B/raw/d22450d9b50c1b8cb33cf86423851152957bac64/config.json（获取于 2026-10-18T16:07:56Z；SHA-256：17e9a4504376618c295560c89a9f35c11a41093c8342cf289645e7434a106205）
- https://huggingface.co/mPLUG/GUI-Owl-32B/raw/d22450d9b50c1b8cb33cf86423851152957bac64/README.md（获取于 2026-10-18T16:07:56Z；SHA-256：69f9d76257f3367bc0e040abd6829dc1c2e9e0f0a952c36041830d4c81a42899）

---

## GUI-Owl 7B

随 Mobile-Agent-v3 发布的基于 Qwen2.5-VL 的 GUI 模型检查点，支持界面定位后的操作及其智能体框架中的专门角色。

- 目录页面：https://awesomecua.com/resources/url-aeb32973694f91ad9920/
- 原始来源：https://huggingface.co/mPLUG/GUI-Owl-7B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：Android、桌面
- 主题：GUI 定位、动作预测、规划
- 证据核查日期：2026-10-17T04:03:41Z
- ID：url:aeb32973694f91ad9920

### 范围记录

Five public safetensors shards are present. MIT is declared in this model card. This record identifies the original 7B release. The online demo is still marked forthcoming.

- 完整记录 JSON：https://awesomecua.com/resources/url-aeb32973694f91ad9920/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：mit — https://huggingface.co/mPLUG/GUI-Owl-7B/raw/main/README.md

### 一手证据

- https://huggingface.co/mPLUG/GUI-Owl-7B/raw/main/README.md（获取于 2026-10-17T04:03:41Z；SHA-256：a0e6dd76aee6f138c15f244f4e2e8ba650b8829295397fdbfa839a8edf852b57）
- https://huggingface.co/api/models/mPLUG/GUI-Owl-7B（获取于 2026-10-17T04:03:40Z；SHA-256：4822eab7fd35e583d52db7369d7d929d69dbde66b27c9da3d370cad9ec06ec89）
- https://huggingface.co/mPLUG/GUI-Owl-7B/raw/main/README.md（获取于 2026-10-17T04:03:41Z；SHA-256：a0e6dd76aee6f138c15f244f4e2e8ba650b8829295397fdbfa839a8edf852b57）

---

## GUI-Owl 7B Desktop-RL

Mobile-Agent-v3 的 GUI-Owl 7B 变体，针对 OSWorld 桌面使用进行强化学习调优，作为验证环境强化学习改进的研究检查点发布，生产用途不在其声明的用途范围内。

- 目录页面：https://awesomecua.com/resources/url-b01a78c76299196e3df1/
- 原始来源：https://huggingface.co/mPLUG/GUI-Owl-7B-Desktop-RL
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：强化学习、动作预测
- 证据核查日期：2026-10-18T16:00:10Z
- ID：url:b01a78c76299196e3df1

### 范围记录

The card calls this a variant of GUI-Owl that is RL-tuned for desktop environments and deployable the same way as GUI-Owl 7B, and says it is mainly meant for validating environment-RL improvements, with no guarantee for production use. The X-PLUG/MobileAgent README links it, in its 2025-09-16 news entry, as the OSWorld RL-tuned GUI-Owl checkpoint released alongside the OSWorld code. Hub metadata names Qwen/Qwen2.5-VL-7B-Instruct as base_model. The Hub API lists seven safetensors shards totalling 8,296,592,640 F32 parameters, and config.json, stored through Git LFS, declares Qwen2_5_VLForConditionalGeneration. The card reports no score for this checkpoint. MIT is the card's weight declaration and is not extended to Qwen2.5-VL or training data.

- 完整记录 JSON：https://awesomecua.com/resources/url-b01a78c76299196e3df1/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：mit — https://huggingface.co/mPLUG/GUI-Owl-7B-Desktop-RL/raw/87ba5f0335cf5ecfeebbda7e2c1222e66cd49e45/README.md

### 一手证据

- https://huggingface.co/mPLUG/GUI-Owl-7B-Desktop-RL/raw/87ba5f0335cf5ecfeebbda7e2c1222e66cd49e45/README.md（获取于 2026-10-18T16:00:10Z；SHA-256：f68fd27d748f7851d5719f639a082e7ffc50365f960233f7e9f50ffeeb5ed360）
- https://huggingface.co/api/models/mPLUG/GUI-Owl-7B-Desktop-RL/revision/87ba5f0335cf5ecfeebbda7e2c1222e66cd49e45（获取于 2026-10-18T15:59:24Z；SHA-256：ba81245c83a3fa94d4adc7bbba8faf06755ba6579410048a34ec4ee6396c5c2b）
- https://huggingface.co/mPLUG/GUI-Owl-7B-Desktop-RL/resolve/87ba5f0335cf5ecfeebbda7e2c1222e66cd49e45/config.json（获取于 2026-10-18T15:59:24Z；SHA-256：48286d8ef6956f70158ccf6345d837f07b1445b814054ef71b84f2d172a39c4b）
- https://raw.githubusercontent.com/X-PLUG/MobileAgent/11cea575561fb7800b5fb6b6cafa56f7a91de11f/README.md（获取于 2026-10-18T15:59:24Z；SHA-256：ca402ffd3b05f72a6d72f47de52c962f92e410749a77939044f3301d4330af16）
- https://huggingface.co/mPLUG/GUI-Owl-7B-Desktop-RL/raw/87ba5f0335cf5ecfeebbda7e2c1222e66cd49e45/README.md（获取于 2026-10-18T16:00:10Z；SHA-256：f68fd27d748f7851d5719f639a082e7ffc50365f960233f7e9f50ffeeb5ed360）

---

## GUI-R1 checkpoint bundle

单个 Hub 发布包包含 GUI-R1 3B 和 7B 动作模型检查点，均通过跨界面平台的强化学习训练。

- 目录页面：https://awesomecua.com/resources/url-61a5321db10fc8a312b9/
- 原始来源：https://huggingface.co/ritzzai/GUI-R1
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Windows、Linux、macOS、Android、网页
- 主题：GUI 定位、强化学习、动作预测
- 证据核查日期：2026-10-17T02:44:30Z
- ID：url:61a5321db10fc8a312b9

### 范围记录

The manifest contains two safetensors shards in GUI-R1-3B and four in GUI-R1-7B. Both are counted as one Hub resource. The model card declares MIT; this does not automatically apply to source training data or upstream base models.

- 完整记录 JSON：https://awesomecua.com/resources/url-61a5321db10fc8a312b9/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：mit — https://huggingface.co/ritzzai/GUI-R1/raw/main/README.md

### 一手证据

- https://huggingface.co/ritzzai/GUI-R1/raw/main/README.md（获取于 2026-10-17T02:44:30Z；SHA-256：7b14996d1a99675990cb2f3aeada2b2f9898f9daee46d3680988e16f6365abe3）
- https://huggingface.co/api/models/ritzzai/GUI-R1（获取于 2026-10-17T02:44:29Z；SHA-256：3eff86951de7c36dbd4af006ab3f1350213bdfea384494e59c8abc007793c979）
- https://raw.githubusercontent.com/ritzz-ai/GUI-R1/HEAD/README.md（获取于 2026-10-16T10:43:11Z；SHA-256：94c7c78bede11dde727940f56592a04594c1c59438812dff47540bf53c1bed7d）
- https://huggingface.co/ritzzai/GUI-R1/raw/main/README.md（获取于 2026-10-17T02:44:30Z；SHA-256：7b14996d1a99675990cb2f3aeada2b2f9898f9daee46d3680988e16f6365abe3）

---

## gWorld-8B

gWorld-8B 是已发布的移动端图形界面世界模型，根据当前截图和操作生成可渲染的 HTML，以预测操作后的屏幕。

- 目录页面：https://awesomecua.com/resources/url-78802d1a2fce25f20f85/
- 原始来源：https://huggingface.co/trillionlabs/gWorld-8B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：世界模型、界面理解、手机操作
- 证据核查日期：2026-11-09T19:56:48Z
- ID：url:78802d1a2fce25f20f85

### 范围记录

The card supplies vLLM inference code and names Qwen3-VL-8B-Instruct as the base model. It declares an Apache-2.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-78802d1a2fce25f20f85/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/trillionlabs/gWorld-8B

### 一手证据

- https://huggingface.co/api/models/trillionlabs/gWorld-8B（获取于 2026-11-09T19:56:48Z；SHA-256：88d2177ad0b5bfadffbe349b132907730d5dc55dfd8028eb2854f5c09756388a）
- https://huggingface.co/api/models/trillionlabs/gWorld-8B（获取于 2026-11-09T19:56:48Z；SHA-256：88d2177ad0b5bfadffbe349b132907730d5dc55dfd8028eb2854f5c09756388a）

---

## Holo1.5 3B

Holo1.5 系列最小检查点由 Qwen2.5-VL-3B-Instruct 经监督训练和 GRPO 微调，用于定位网页、桌面及移动屏幕中的界面元素并回答相关问题。

- 目录页面：https://awesomecua.com/resources/url-dc20a06c296207ac11a6/
- 原始来源：https://huggingface.co/Hcompany/Holo1.5-3B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、桌面、跨平台
- 主题：GUI 定位、界面理解
- 证据核查日期：2026-10-18T16:14:15Z
- ID：url:dc20a06c296207ac11a6

### 范围记录

Hub API at revision f10805d3 lists two BF16 safetensors shards (about 3.75B parameters) in the Qwen2_5_VLForConditionalGeneration architecture; the repository is publicly accessible. The card describes proprietary training data mixed from open-source, synthetic and human-annotated samples, leaving a specific training dataset unlinked; its localization and screen-QA scores are publisher-reported. Mobile is named without an operating system. The card's license field is 'other': it says the 3B size inherits Qwen's license and names the Qwen Research License, and the repository's LICENSE file is an H research agreement limited to non-commercial use. The 7B and 72B sizes carry different terms, and H Company's models page gives the family one CC BY-NC 4.0 label.

- 完整记录 JSON：https://awesomecua.com/resources/url-dc20a06c296207ac11a6/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：other — https://huggingface.co/Hcompany/Holo1.5-3B/raw/f10805d3a566ac2932ca17dfeeed91986ead01f8/README.md

### 一手证据

- https://huggingface.co/Hcompany/Holo1.5-3B/raw/f10805d3a566ac2932ca17dfeeed91986ead01f8/README.md（获取于 2026-10-18T16:14:15Z；SHA-256：13cc49f7c52e358d2ad34bff43e7c46c66c291928ff19a4e4c9a2aed6bf9c1a2）
- https://huggingface.co/api/models/Hcompany/Holo1.5-3B/revision/f10805d3a566ac2932ca17dfeeed91986ead01f8（获取于 2026-10-18T16:13:49Z；SHA-256：619580184acaa520e054f1844a17b0fc44bef8df2dafb9a47ad0dc3bac759223）
- https://huggingface.co/Hcompany/Holo1.5-3B/raw/f10805d3a566ac2932ca17dfeeed91986ead01f8/LICENSE（获取于 2026-10-18T16:13:21Z；SHA-256：f91e82dddcf31da795865d15dbe3e7bedd2a4170382df5191d672a2f357c4184）
- https://hcompany.ai/research/models（获取于 2026-10-18T16:10:28Z；SHA-256：ddfa335cd71d0a7a4e61640752b1b24830f951a72c175e88fd03bf00a5e783c8）
- https://huggingface.co/Hcompany/Holo1.5-3B/raw/f10805d3a566ac2932ca17dfeeed91986ead01f8/README.md（获取于 2026-10-18T16:14:15Z；SHA-256：13cc49f7c52e358d2ad34bff43e7c46c66c291928ff19a4e4c9a2aed6bf9c1a2）

---

## Holo1.5 7B

H Company 基于 Qwen2.5-VL-7B 的 Holo1.5 检查点，用于跨网页、桌面和移动界面定位元素并回答屏幕问题，先经监督微调，再经 GRPO 训练。

- 目录页面：https://awesomecua.com/resources/url-98e5813bceb30104d6c4/
- 原始来源：https://huggingface.co/Hcompany/Holo1.5-7B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、桌面、跨平台
- 主题：GUI 定位、界面理解
- 证据核查日期：2026-10-18T16:06:18Z
- ID：url:98e5813bceb30104d6c4

### 范围记录

Hub API at revision a1019821 lists four BF16 safetensors shards (about 8.29B parameters) in the Qwen2_5_VLForConditionalGeneration architecture; the repository is publicly accessible. The card names Qwen/Qwen2.5-VL-7B-Instruct as the base and describes proprietary training data mixed from open-source, synthetic and human-annotated samples, so no training dataset is linked. It declares Apache-2.0 for this 7B size only: the same card says the 3B size inherits Qwen's license and the 72B size is research-only. Mobile is named without an operating system.

- 完整记录 JSON：https://awesomecua.com/resources/url-98e5813bceb30104d6c4/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/Hcompany/Holo1.5-7B/raw/a1019821ea078820dc284e90214a397faceab2bf/README.md

### 一手证据

- https://huggingface.co/Hcompany/Holo1.5-7B/raw/a1019821ea078820dc284e90214a397faceab2bf/README.md（获取于 2026-10-18T16:06:18Z；SHA-256：2490cdabf0cf570660b75888f164d8041b46e1878ddaeb92cd9864b40bda7922）
- https://huggingface.co/api/models/Hcompany/Holo1.5-7B/revision/a1019821ea078820dc284e90214a397faceab2bf（获取于 2026-10-18T16:06:05Z；SHA-256：fae52db874701c3cb5f4894d8eb5db5859414f2d6709f9ec4add35f182a975db）
- https://huggingface.co/Hcompany/Holo1.5-7B/raw/a1019821ea078820dc284e90214a397faceab2bf/README.md（获取于 2026-10-18T16:06:18Z；SHA-256：2490cdabf0cf570660b75888f164d8041b46e1878ddaeb92cd9864b40bda7922）

---

## InfiGUI-G1 7B

GUI 定位模型检查点，使用自适应探索奖励和多个候选答案进行训练，以改善指令与界面元素的对应关系。

- 目录页面：https://awesomecua.com/resources/url-d70a755e3b2102f25f34/
- 原始来源：https://huggingface.co/InfiX-ai/InfiGUI-G1-7B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：GUI 定位、强化学习
- 证据核查日期：2026-10-17T02:44:29Z
- ID：url:d70a755e3b2102f25f34

### 范围记录

Four safetensors shards are public. The model card declares Apache-2.0 and identifies Qwen2.5-VL-7B-Instruct as its base. It is the G1 grounding checkpoint, distinct from the previously cataloged InfiGUI-R1 reasoning checkpoint; benchmark scores remain publisher claims.

- 完整记录 JSON：https://awesomecua.com/resources/url-d70a755e3b2102f25f34/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/InfiX-ai/InfiGUI-G1-7B/raw/main/README.md

### 一手证据

- https://huggingface.co/InfiX-ai/InfiGUI-G1-7B/raw/main/README.md（获取于 2026-10-17T02:44:29Z；SHA-256：253055f0f77266a64d2db5de8fd04c4202f4cda3be733dd1b00d8565116dd240）
- https://huggingface.co/api/models/InfiX-ai/InfiGUI-G1-7B（获取于 2026-10-17T02:44:29Z；SHA-256：10278eb0f1600557e432a0f8dde2c40cfffe12330ddb949b6a0fc02bfbc6c9ee）
- https://raw.githubusercontent.com/InfiXAI/InfiGUI-G1/HEAD/README.md（获取于 2026-10-16T06:36:00Z；SHA-256：4b68c82a2dd0063a450bde34c8bffbd931565a91a2982a5b47be7e711815b284）
- https://huggingface.co/InfiX-ai/InfiGUI-G1-7B/raw/main/README.md（获取于 2026-10-17T02:44:29Z；SHA-256：253055f0f77266a64d2db5de8fd04c4202f4cda3be733dd1b00d8565116dd240）

---

## InternVL3-38B

一个已发布的 InternVL3-38B 多模态检查点；其模型系列的说明文档记载了图形界面操作训练样本及图形界面定位评测。

- 目录页面：https://awesomecua.com/resources/url-b2a83cef835559f24351/
- 原始来源：https://huggingface.co/OpenGVLab/InternVL3-38B
- 类型：模型
- 审核状态：已审核
- 范围：相关研究
- 运行环境：unspecified
- 主题：GUI 定位、界面理解
- 证据核查日期：2026-11-09T19:57:41Z
- ID：url:b2a83cef835559f24351

### 范围记录

The repository lists safetensors weight shards and inference code. The card describes an InternViT vision component and a Qwen2.5 language component; it declares Apache-2.0 in its front matter.

- 完整记录 JSON：https://awesomecua.com/resources/url-b2a83cef835559f24351/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/OpenGVLab/InternVL3-38B

### 一手证据

- https://huggingface.co/api/models/OpenGVLab/InternVL3-38B（获取于 2026-11-09T19:57:41Z；SHA-256：3e7f8fe4342def3be29016047f1f757d423ec79cb6e6794230c13812cfade1fe）
- https://huggingface.co/api/models/OpenGVLab/InternVL3-38B（获取于 2026-11-09T19:57:41Z；SHA-256：3e7f8fe4342def3be29016047f1f757d423ec79cb6e6794230c13812cfade1fe）

---

## InternVL3-8B

这是一个 8B 多模态模型检查点；其发布资料除介绍更广泛的图像和视频任务外，还说明了图形界面操作训练数据与界面定位评估。

- 目录页面：https://awesomecua.com/resources/url-7c01d4caa44763019e36/
- 原始来源：https://huggingface.co/OpenGVLab/InternVL3-8B
- 类型：模型
- 审核状态：已审核
- 范围：相关研究
- 运行环境：unspecified
- 主题：GUI 定位、界面理解、工具集成
- 证据核查日期：2026-11-09T19:56:36Z
- ID：url:7c01d4caa44763019e36

### 范围记录

The card identifies OpenGVLab/InternVL3-8B-Instruct as its base model and declares an Apache 2.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-7c01d4caa44763019e36/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/OpenGVLab/InternVL3-8B

### 一手证据

- https://huggingface.co/api/models/OpenGVLab/InternVL3-8B（获取于 2026-11-09T19:56:36Z；SHA-256：1392304aae595359fa53b856313d44a39dd078fd6f6f60769afe19e3a2dab04a）
- https://huggingface.co/api/models/OpenGVLab/InternVL3-8B（获取于 2026-11-09T19:56:36Z；SHA-256：1392304aae595359fa53b856313d44a39dd078fd6f6f60769afe19e3a2dab04a）

---

## InternVL3-9B

一个已发布的多模态模型检查点，训练内容包含图形界面操作；其模型卡记录了图形界面定位及更广泛的视觉和语言任务。

- 目录页面：https://awesomecua.com/resources/url-1e3655e5a2b664102ac7/
- 原始来源：https://huggingface.co/OpenGVLab/InternVL3-9B
- 类型：模型
- 审核状态：已审核
- 范围：相关研究
- 运行环境：unspecified
- 主题：GUI 定位、界面理解、评测
- 证据核查日期：2026-11-09T19:57:41Z
- ID：url:1e3655e5a2b664102ac7

### 范围记录

The repository lists model weight shards, configuration, tokenizer and modeling files. The card declares an MIT license and identifies InternVL3-9B-Instruct as its fine-tuning base.

- 完整记录 JSON：https://awesomecua.com/resources/url-1e3655e5a2b664102ac7/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：mit — https://huggingface.co/OpenGVLab/InternVL3-9B

### 一手证据

- https://huggingface.co/api/models/OpenGVLab/InternVL3-9B（获取于 2026-11-09T19:57:41Z；SHA-256：8b8c470d820e017b8a5ec31954aadd4cbf81c2b58fa109b37f079515e0535052）
- https://huggingface.co/api/models/OpenGVLab/InternVL3-9B（获取于 2026-11-09T19:57:41Z；SHA-256：8b8c470d820e017b8a5ec31954aadd4cbf81c2b58fa109b37f079515e0535052）

---

## InternVL3_5-241B-A28B

这是已发布的 InternVL3.5 多模态模型权重；其系列说明涵盖图形界面交互、级联强化学习训练和自适应视觉分辨率。

- 目录页面：https://awesomecua.com/resources/url-c8d93b1c274acd679694/
- 原始来源：https://huggingface.co/OpenGVLab/InternVL3_5-241B-A28B
- 类型：模型
- 审核状态：已审核
- 范围：相关研究
- 运行环境：unspecified
- 主题：界面理解、强化学习、效率
- 证据核查日期：2026-11-09T19:57:38Z
- ID：url:c8d93b1c274acd679694

### 范围记录

The card links this checkpoint to the InternVL3.5 paper and describes a GitHub-format release. It declares an Apache-2.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-c8d93b1c274acd679694/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/OpenGVLab/InternVL3_5-241B-A28B

### 一手证据

- https://huggingface.co/api/models/OpenGVLab/InternVL3_5-241B-A28B（获取于 2026-11-09T19:57:38Z；SHA-256：74c8b78fb78103a0edbb95dc2bbf9662f8b8c8b595930c92d40d504f7c793384）
- https://huggingface.co/api/models/OpenGVLab/InternVL3_5-241B-A28B（获取于 2026-11-09T19:57:38Z；SHA-256：74c8b78fb78103a0edbb95dc2bbf9662f8b8c8b595930c92d40d504f7c793384）

---

## InternVL3_5-241B-A28B-HF

InternVL3_5-241B-A28B-HF 发布了 InternVL3.5 系列的 Transformers 格式多模态模型权重；其模型卡描述了图形界面交互和高效视觉推理能力。

- 目录页面：https://awesomecua.com/resources/url-7c6929dcffffe6553ea9/
- 原始来源：https://huggingface.co/OpenGVLab/InternVL3_5-241B-A28B-HF
- 类型：模型
- 审核状态：已审核
- 范围：相关研究
- 运行环境：unspecified
- 主题：界面理解、效率
- 证据核查日期：2026-11-09T19:56:21Z
- ID：url:7c6929dcffffe6553ea9

### 范围记录

The repository lists sharded safetensors weights and tokenizer files. The card declares an Apache-2.0 license and describes the Transformers format as distinct from the GitHub format.

- 完整记录 JSON：https://awesomecua.com/resources/url-7c6929dcffffe6553ea9/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/OpenGVLab/InternVL3_5-241B-A28B-HF

### 一手证据

- https://huggingface.co/api/models/OpenGVLab/InternVL3_5-241B-A28B-HF（获取于 2026-11-09T19:56:21Z；SHA-256：bc42847be9fcf10bb509fa66fc2a598fe7ab7e396836c9a10425d3e376dca117）
- https://huggingface.co/api/models/OpenGVLab/InternVL3_5-241B-A28B-HF（获取于 2026-11-09T19:56:21Z；SHA-256：bc42847be9fcf10bb509fa66fc2a598fe7ab7e396836c9a10425d3e376dca117）

---

## InternVL3_5-38B-HF

这是 InternVL3.5 多模态模型家族的 HF 格式 38B 检查点；模型卡将图形界面交互列为其能力之一，并介绍了分阶段训练和推理。

- 目录页面：https://awesomecua.com/resources/url-099960c12bbdd80f73cb/
- 原始来源：https://huggingface.co/OpenGVLab/InternVL3_5-38B-HF
- 类型：模型
- 审核状态：已审核
- 范围：相关研究
- 运行环境：unspecified
- 主题：界面理解、强化学习
- 证据核查日期：2026-11-09T19:57:37Z
- ID：url:099960c12bbdd80f73cb

### 范围记录

The card declares an Apache-2.0 license and describes HF and GitHub checkpoint formats. It links the InternVL3.5 paper and states that model weights and code are released.

- 完整记录 JSON：https://awesomecua.com/resources/url-099960c12bbdd80f73cb/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/OpenGVLab/InternVL3_5-38B-HF

### 一手证据

- https://huggingface.co/api/models/OpenGVLab/InternVL3_5-38B-HF（获取于 2026-11-09T19:57:37Z；SHA-256：35e171ad3dde46b3fd290a9a2321fd41ed73170b6a7814abfd3b05c7eed7f69c）
- https://huggingface.co/api/models/OpenGVLab/InternVL3_5-38B-HF（获取于 2026-11-09T19:57:37Z；SHA-256：35e171ad3dde46b3fd290a9a2321fd41ed73170b6a7814abfd3b05c7eed7f69c）

---

## InternVL3_5-8B

这是 InternVL3.5 系列中的一个 8B 多模态模型检查点；模型卡在介绍更广泛的视觉推理和推理效率工作时，也说明了其图形界面交互能力。

- 目录页面：https://awesomecua.com/resources/url-7f7d17a0873e6ffda2b9/
- 原始来源：https://huggingface.co/OpenGVLab/InternVL3_5-8B
- 类型：模型
- 审核状态：已审核
- 范围：相关研究
- 运行环境：unspecified
- 主题：界面理解、强化学习、效率
- 证据核查日期：2026-11-09T19:56:36Z
- ID：url:7f7d17a0873e6ffda2b9

### 范围记录

The card identifies the checkpoint as a fine-tune of OpenGVLab/InternVL3_5-8B-MPO and declares an Apache 2.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-7f7d17a0873e6ffda2b9/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/OpenGVLab/InternVL3_5-8B

### 一手证据

- https://huggingface.co/api/models/OpenGVLab/InternVL3_5-8B（获取于 2026-11-09T19:56:36Z；SHA-256：d4d7fdbe1e2cd25bb90fe8cddcad4e8e4ded944c1f614eac01ea28c9c2d55d32）
- https://huggingface.co/api/models/OpenGVLab/InternVL3_5-8B（获取于 2026-11-09T19:56:36Z；SHA-256：d4d7fdbe1e2cd25bb90fe8cddcad4e8e4ded944c1f614eac01ea28c9c2d55d32）

---

## Jedi-3B-1080p

基于 Qwen2.5-VL-3B 的计算机使用定位模型，提供从界面图像预测鼠标操作坐标的示例。

- 目录页面：https://awesomecua.com/resources/url-2f2e38f240a36f31b631/
- 原始来源：https://huggingface.co/xlangai/Jedi-3B-1080p
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：GUI 定位、动作预测
- 证据核查日期：2026-11-09T05:05:20Z
- ID：url:2f2e38f240a36f31b631

### 范围记录

The repository lists sharded model weights and processor files. The card recommends vLLM, links sample code, and declares an Apache-2.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-2f2e38f240a36f31b631/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/xlangai/Jedi-3B-1080p

### 一手证据

- https://huggingface.co/api/models/xlangai/Jedi-3B-1080p（获取于 2026-11-09T05:05:20Z；SHA-256：e6be8defd47d47b532d41f0e1ef317c5621bb335ef7e18283043f8d2aa3ffc6c）
- https://huggingface.co/api/models/xlangai/Jedi-3B-1080p（获取于 2026-11-09T05:05:20Z；SHA-256：e6be8defd47d47b532d41f0e1ef317c5621bb335ef7e18283043f8d2aa3ffc6c）

---

## Jedi-7B-1080p

用于计算机界面定位研究的模型检查点，以 Qwen2.5-VL-7B-Instruct 为基础；仓库包含分片权重和分词器文件。

- 目录页面：https://awesomecua.com/resources/url-75dee6afef81a56ba4b2/
- 原始来源：https://huggingface.co/xlangai/Jedi-7B-1080p
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：GUI 定位、界面理解
- 证据核查日期：2026-11-09T06:16:36Z
- ID：url:75dee6afef81a56ba4b2

### 范围记录

The card declares an Apache-2.0 license and links the paper, project page, and code repository. The supplied file list includes four safetensors weight shards.

- 完整记录 JSON：https://awesomecua.com/resources/url-75dee6afef81a56ba4b2/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/xlangai/Jedi-7B-1080p

### 一手证据

- https://huggingface.co/api/models/xlangai/Jedi-7B-1080p（获取于 2026-11-09T06:16:36Z；SHA-256：4b71801086c90cb8eb483a1bae937ce492b4c6a13a95a5db8d3e7772476882b8）
- https://huggingface.co/api/models/xlangai/Jedi-7B-1080p（获取于 2026-11-09T06:16:36Z；SHA-256：4b71801086c90cb8eb483a1bae937ce492b4c6a13a95a5db8d3e7772476882b8）

---

## jiamingzz/lgwm

一组图形界面世界模型权重，用于预测操作后的屏幕表征并核查实际界面变化，另附独立的危害评分头。

- 目录页面：https://awesomecua.com/resources/url-512cd7335068b2c17859/
- 原始来源：https://huggingface.co/jiamingzz/lgwm
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：世界模型、状态追踪、安全与防护
- 证据核查日期：2026-11-09T19:56:42Z
- ID：url:512cd7335068b2c17859

### 范围记录

The release contains world model weights and a linear harm head. Usage calls the companion code with before and after screenshots and an action JSON file. The card declares an Apache 2.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-512cd7335068b2c17859/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/jiamingzz/lgwm

### 一手证据

- https://huggingface.co/api/models/jiamingzz/lgwm（获取于 2026-11-09T19:56:42Z；SHA-256：5db5aa06ea538ead2a48496221efe361892b3affe7efb4148260e29308a2016c）
- https://huggingface.co/api/models/jiamingzz/lgwm（获取于 2026-11-09T19:56:42Z；SHA-256：5db5aa06ea538ead2a48496221efe361892b3affe7efb4148260e29308a2016c）

---

## KDEGroup/UI-AGILE-3B

发布的 UI-AGILE 图形界面定位模型；其方法在训练中使用奖励设计和裁剪重采样，在推理时分解图像以定位目标。

- 目录页面：https://awesomecua.com/resources/url-642671eabef44827b7de/
- 原始来源：https://huggingface.co/KDEGroup/UI-AGILE-3B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：GUI 定位、强化学习、效率
- 证据核查日期：2026-11-09T05:05:17Z
- ID：url:642671eabef44827b7de

### 范围记录

The repository contains weight shards, configuration files, and evaluation files. The card declares an MIT license and links the project paper and data.

- 完整记录 JSON：https://awesomecua.com/resources/url-642671eabef44827b7de/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：mit — https://huggingface.co/KDEGroup/UI-AGILE-3B

### 一手证据

- https://huggingface.co/api/models/KDEGroup/UI-AGILE-3B（获取于 2026-11-09T05:05:17Z；SHA-256：ec0be6049411b31a494ebcbda012b512b04e7c88f1e7a1fd94c31b5251fb5ebc）
- https://huggingface.co/api/models/KDEGroup/UI-AGILE-3B（获取于 2026-11-09T05:05:17Z；SHA-256：ec0be6049411b31a494ebcbda012b512b04e7c88f1e7a1fd94c31b5251fb5ebc）

---

## kev-0.6b-browser-use

kev-0.6b-browser-use 是一个 0.6B 参数的浏览器决策模型，可根据任务目标为候选页面元素评分，并选择点击、输入或选择操作。

- 目录页面：https://awesomecua.com/resources/url-3c55f225a1f66a6261ac/
- 原始来源：https://huggingface.co/arbazsiddiqui/kev-0.6b-browser-use
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：动作预测、GUI 定位、网页导航
- 证据核查日期：2026-11-09T19:57:35Z
- ID：url:3c55f225a1f66a6261ac

### 范围记录

The release includes a LoRA adapter and pointer head for the Kev base model. The card declares an Apache-2.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-3c55f225a1f66a6261ac/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/arbazsiddiqui/kev-0.6b-browser-use

### 一手证据

- https://huggingface.co/api/models/arbazsiddiqui/kev-0.6b-browser-use（获取于 2026-11-09T19:57:35Z；SHA-256：2ef9c22749a81e177eee2ff79037fedc02fe233e26c8eadc7abe9946c7197908）
- https://huggingface.co/api/models/arbazsiddiqui/kev-0.6b-browser-use（获取于 2026-11-09T19:57:35Z；SHA-256：2ef9c22749a81e177eee2ff79037fedc02fe233e26c8eadc7abe9946c7197908）

---

## kev-0.6b-browser-use-ONNX

一个兼容 WebGPU 的 ONNX 浏览器操作模型，可根据目标和候选页面元素选择元素及操作，并提供用于 JavaScript 的 4 位导出版本。

- 目录页面：https://awesomecua.com/resources/url-295e0be27996e41738f8/
- 原始来源：https://huggingface.co/arbazsiddiqui/kev-0.6b-browser-use-ONNX
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：动作预测、GUI 定位、网页导航
- 证据核查日期：2026-11-09T19:57:36Z
- ID：url:295e0be27996e41738f8

### 范围记录

The card lists a 348 MB ONNX model and usage through open-jev and Transformers.js. It says the export derives from a browser-action fine-tune and declares Apache-2.0 for the adapter and head.

- 完整记录 JSON：https://awesomecua.com/resources/url-295e0be27996e41738f8/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/arbazsiddiqui/kev-0.6b-browser-use-ONNX

### 一手证据

- https://huggingface.co/api/models/arbazsiddiqui/kev-0.6b-browser-use-ONNX（获取于 2026-11-09T19:57:36Z；SHA-256：6a869c8c7712713082ab101d23fa11596ccaa00af55093dba90221252ba616e2）
- https://huggingface.co/api/models/arbazsiddiqui/kev-0.6b-browser-use-ONNX（获取于 2026-11-09T19:57:36Z；SHA-256：6a869c8c7712713082ab101d23fa11596ccaa00af55093dba90221252ba616e2）

---

## Kimi-VL-A3B-Thinking-2506

具备高分辨率图像输入能力并发布权重的多模态推理模型。作者报告了它在 ScreenSpot-Pro、ScreenSpot-V2 和 OSWorld-G 上的 GUI 定位评估。

- 目录页面：https://awesomecua.com/resources/url-fb5921fec3f7c313ab5b/
- 原始来源：https://huggingface.co/moonshotai/Kimi-VL-A3B-Thinking-2506
- 类型：模型
- 审核状态：已审核
- 范围：相关研究
- 运行环境：桌面
- 主题：GUI 定位、界面理解、评测
- 证据核查日期：2026-11-09T05:05:07Z
- ID：url:fb5921fec3f7c313ab5b

### 范围记录

The repository lists sharded safetensors weights and custom model and processor code. The card provides vLLM and Transformers inference examples and declares an MIT license.

- 完整记录 JSON：https://awesomecua.com/resources/url-fb5921fec3f7c313ab5b/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：mit — https://huggingface.co/moonshotai/Kimi-VL-A3B-Thinking-2506

### 一手证据

- https://huggingface.co/api/models/moonshotai/Kimi-VL-A3B-Thinking-2506（获取于 2026-11-09T05:05:07Z；SHA-256：b1d82ad7857a66051290c6675225d56f00e906d3784934b43d95d2ad31c5a7d2）
- https://huggingface.co/api/models/moonshotai/Kimi-VL-A3B-Thinking-2506（获取于 2026-11-09T05:05:07Z；SHA-256：b1d82ad7857a66051290c6675225d56f00e906d3784934b43d95d2ad31c5a7d2）

---

## lumos_unified_ground_iterative-13B

这是已发布的 Lumos 定位模块检查点，使用网页智能体任务以及问答、多模态和数学任务进行微调。

- 目录页面：https://awesomecua.com/resources/url-b0b2cd616f8c30b4b09d/
- 原始来源：https://huggingface.co/ai2lumos/lumos_unified_ground_iterative-13B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、GUI 定位、规划
- 证据核查日期：2026-11-09T19:56:15Z
- ID：url:b0b2cd616f8c30b4b09d

### 范围记录

The card links its training dataset and states an Apache-2.0 license. The repository file list includes sharded model weights and tokenizer files.

- 完整记录 JSON：https://awesomecua.com/resources/url-b0b2cd616f8c30b4b09d/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/ai2lumos/lumos_unified_ground_iterative-13B

### 一手证据

- https://huggingface.co/api/models/ai2lumos/lumos_unified_ground_iterative-13B（获取于 2026-11-09T19:56:15Z；SHA-256：4e8ec057586b93571f89a1a79e2723e0c01be313d8daa8e967aa7d881fb6e817）
- https://huggingface.co/api/models/ai2lumos/lumos_unified_ground_iterative-13B（获取于 2026-11-09T19:56:15Z；SHA-256：4e8ec057586b93571f89a1a79e2723e0c01be313d8daa8e967aa7d881fb6e817）

---

## lumos_web_agent_ground_iterative

这是一个采用 Lumos-Iterative 训练形式、针对网页智能体任务微调并发布的 Lumos 定位模型权重，供模块化智能体的定位模块使用。

- 目录页面：https://awesomecua.com/resources/url-246241a0b6219513cb7f/
- 原始来源：https://huggingface.co/ai2lumos/lumos_web_agent_ground_iterative
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：GUI 定位、网页导航
- 证据核查日期：2026-11-09T19:56:22Z
- ID：url:246241a0b6219513cb7f

### 范围记录

The card links a training dataset and names the Agent Lumos paper. The repository lists model weight shards and tokenizer files under an Apache-2.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-246241a0b6219513cb7f/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/ai2lumos/lumos_web_agent_ground_iterative

### 一手证据

- https://huggingface.co/api/models/ai2lumos/lumos_web_agent_ground_iterative（获取于 2026-11-09T19:56:22Z；SHA-256：5491efbb166aafea807c7f73e498adfcf84aa8df19c3329c6d8197594b94200d）
- https://huggingface.co/api/models/ai2lumos/lumos_web_agent_ground_iterative（获取于 2026-11-09T19:56:22Z；SHA-256：5491efbb166aafea807c7f73e498adfcf84aa8df19c3329c6d8197594b94200d）

---

## lumos_web_agent_ground_iterative-13B

Lumos 发布的检查点用于在迭代式架构中定位网页智能体的操作，该架构将规划、定位与执行分开。

- 目录页面：https://awesomecua.com/resources/url-dca5b0d8449331bbede4/
- 原始来源：https://huggingface.co/ai2lumos/lumos_web_agent_ground_iterative-13B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：GUI 定位、网页导航
- 证据核查日期：2026-11-09T19:56:33Z
- ID：url:dca5b0d8449331bbede4

### 范围记录

The repository lists PyTorch weight shards and tokenizer files. The card declares an Apache-2.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-dca5b0d8449331bbede4/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/ai2lumos/lumos_web_agent_ground_iterative-13B

### 一手证据

- https://huggingface.co/api/models/ai2lumos/lumos_web_agent_ground_iterative-13B（获取于 2026-11-09T19:56:33Z；SHA-256：33c2d15ee87497ad35d3fedd5e92951d9f3ddb8d2d06dd0d244a01727fd57e18）
- https://huggingface.co/api/models/ai2lumos/lumos_web_agent_ground_iterative-13B（获取于 2026-11-09T19:56:33Z；SHA-256：33c2d15ee87497ad35d3fedd5e92951d9f3ddb8d2d06dd0d244a01727fd57e18）

---

## lumos_web_agent_plan_iterative

一款针对网页智能体任务微调的 Lumos 规划模块模型检查点，以模型权重形式发布，并另有单独列出的训练数据集。

- 目录页面：https://awesomecua.com/resources/url-e35db30fee209ef9b57d/
- 原始来源：https://huggingface.co/ai2lumos/lumos_web_agent_plan_iterative
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：规划、网页导航
- 证据核查日期：2026-11-09T19:57:55Z
- ID：url:e35db30fee209ef9b57d

### 范围记录

The repository lists model weight shards and tokenizer files. The card declares Apache-2.0 licensing.

- 完整记录 JSON：https://awesomecua.com/resources/url-e35db30fee209ef9b57d/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/ai2lumos/lumos_web_agent_plan_iterative

### 一手证据

- https://huggingface.co/api/models/ai2lumos/lumos_web_agent_plan_iterative（获取于 2026-11-09T19:57:55Z；SHA-256：28067c7dad6cd2bedd632dd109c50daf52cbaece36d7f4a035e93a5ff3d72500）
- https://huggingface.co/api/models/ai2lumos/lumos_web_agent_plan_iterative（获取于 2026-11-09T19:57:55Z；SHA-256：28067c7dad6cd2bedd632dd109c50daf52cbaece36d7f4a035e93a5ff3d72500）

---

## lumos_web_agent_plan_iterative-13B

Lumos 发布的检查点用于在迭代式架构中规划网页智能体任务，该架构将规划、定位与执行分开。

- 目录页面：https://awesomecua.com/resources/url-7e7de336b1d8a2adce2c/
- 原始来源：https://huggingface.co/ai2lumos/lumos_web_agent_plan_iterative-13B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：规划、网页导航
- 证据核查日期：2026-11-09T19:56:33Z
- ID：url:7e7de336b1d8a2adce2c

### 范围记录

The repository lists PyTorch weight shards and tokenizer files. The card declares an Apache-2.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-7e7de336b1d8a2adce2c/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/ai2lumos/lumos_web_agent_plan_iterative-13B

### 一手证据

- https://huggingface.co/api/models/ai2lumos/lumos_web_agent_plan_iterative-13B（获取于 2026-11-09T19:56:33Z；SHA-256：51bd7543bd920fad97689e79e105f95e7ace2f03f8a5d70d4a3422025c1d05c2）
- https://huggingface.co/api/models/ai2lumos/lumos_web_agent_plan_iterative-13B（获取于 2026-11-09T19:56:33Z；SHA-256：51bd7543bd920fad97689e79e105f95e7ace2f03f8a5d70d4a3422025c1d05c2）

---

## Magma-8B

Magma-8B 是已发布的多模态智能体模型检查点；模型卡展示了界面导航与机器人操作任务，并介绍其视频数据训练方式。

- 目录页面：https://awesomecua.com/resources/url-d3247ff0ff9a1f6bc247/
- 原始来源：https://huggingface.co/microsoft/Magma-8B
- 类型：模型
- 审核状态：已审核
- 范围：相关研究
- 运行环境：unspecified
- 主题：界面理解、动作预测、视频
- 证据核查日期：2026-11-09T05:04:59Z
- ID：url:d3247ff0ff9a1f6bc247

### 范围记录

The repository includes sharded safetensors weights and custom model and processor code. The model card declares an MIT license.

- 完整记录 JSON：https://awesomecua.com/resources/url-d3247ff0ff9a1f6bc247/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：mit — https://huggingface.co/microsoft/Magma-8B

### 一手证据

- https://huggingface.co/api/models/microsoft/Magma-8B（获取于 2026-11-09T05:04:59Z；SHA-256：04adb6a009e93762c09d151efc1294b09bd556fc0c1f18cd0896cf7891134d79）
- https://huggingface.co/api/models/microsoft/Magma-8B（获取于 2026-11-09T05:04:59Z；SHA-256：04adb6a009e93762c09d151efc1294b09bd556fc0c1f18cd0896cf7891134d79）

---

## Magma-R1

Magma-R1 是基于精选 AndroidControl 样本训练并公开发布的 GUI 智能体模型。随附文档介绍了操作与定位评测，以及基于奖励的训练方法。

- 目录页面：https://awesomecua.com/resources/url-e5e74846aeaa8398673e/
- 原始来源：https://huggingface.co/batwBMW/Magma-R1
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：GUI 定位、动作预测、强化学习、评测
- 证据核查日期：2026-11-09T19:55:45Z
- ID：url:e5e74846aeaa8398673e

### 范围记录

The repository contains model weight shards and configuration files. Its README also contains project-wide benchmark and evaluation instructions, and declares an MIT license.

- 完整记录 JSON：https://awesomecua.com/resources/url-e5e74846aeaa8398673e/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：mit — https://huggingface.co/batwBMW/Magma-R1

### 一手证据

- https://huggingface.co/api/models/batwBMW/Magma-R1（获取于 2026-11-09T19:55:45Z；SHA-256：af950099ba18be0dce84b727bb80596c6673b46286a808c6fb7a7700b4cbb44e）
- https://huggingface.co/api/models/batwBMW/Magma-R1（获取于 2026-11-09T19:55:45Z；SHA-256：af950099ba18be0dce84b727bb80596c6673b46286a808c6fb7a7700b4cbb44e）
- https://huggingface.co/api/models/batwBMW/Magma-R1（获取于 2026-11-09T20:02:27Z；SHA-256：af950099ba18be0dce84b727bb80596c6673b46286a808c6fb7a7700b4cbb44e）
- https://huggingface.co/api/models/batwBMW/Magma-R1-4B-AndroidControl（获取于 2026-11-09T20:02:27Z；SHA-256：af950099ba18be0dce84b727bb80596c6673b46286a808c6fb7a7700b4cbb44e）

---

## MAI-UI 2B

采用 Qwen3-VL 架构的 2B MAI-UI 检查点，所属 GUI 智能体系列的训练数据在移动端导航和定位之外，还包含智能体与用户交互及 MCP 工具调用。

- 目录页面：https://awesomecua.com/resources/url-4b6d61ff2c1d6c8e1a23/
- 原始来源：https://huggingface.co/Tongyi-MAI/MAI-UI-2B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：GUI 定位、手机操作、工具集成
- 证据核查日期：2026-10-18T16:01:02Z
- ID：url:4b6d61ff2c1d6c8e1a23

### 范围记录

The manifest lists a single model.safetensors file and the card declares Apache-2.0. The card text and benchmark figures describe the whole 2B-to-235B-A22B family; the project README announces this 2B release together with the 8B. The family figures remain unassigned to this checkpoint. No scores were reproduced and no weights were loaded.

- 完整记录 JSON：https://awesomecua.com/resources/url-4b6d61ff2c1d6c8e1a23/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：Apache-2.0 — https://huggingface.co/Tongyi-MAI/MAI-UI-2B/raw/503050934809558c8dfd2ddedaf9621fa74ac2de/README.md

- 权重审核：Publisher model-card declaration for the 2B checkpoint; code and training-data terms are separate.
  来源：https://huggingface.co/Tongyi-MAI/MAI-UI-2B/raw/503050934809558c8dfd2ddedaf9621fa74ac2de/README.md

### 一手证据

- https://huggingface.co/Tongyi-MAI/MAI-UI-2B/raw/503050934809558c8dfd2ddedaf9621fa74ac2de/README.md（获取于 2026-10-18T16:01:02Z；SHA-256：81731cb409cf6cd4af6121161ec6ba5d2862eb147e898ed57ac8bc974f008b3f）
- https://huggingface.co/api/models/Tongyi-MAI/MAI-UI-2B（获取于 2026-10-18T16:01:01Z；SHA-256：f7448a53766079b6d5f842b11def5b6d6b85ca1968cb7738dad558a24e935afa）
- https://huggingface.co/Tongyi-MAI/MAI-UI-2B/raw/503050934809558c8dfd2ddedaf9621fa74ac2de/config.json（获取于 2026-10-18T16:01:03Z；SHA-256：c4e0154f8df18ff6573e8ee9f1ba00cf5503ae585e446aa9fbd4c579f65f06bd）
- https://raw.githubusercontent.com/Tongyi-MAI/MAI-UI/3deabf1d1fcf31964511929938b7c9485589b29c/README.md（获取于 2026-10-18T16:01:04Z；SHA-256：a77375cc0c52ea48cb913ea046b2255fb3fc4666380beea7b29fa7c3fea7629f）
- https://huggingface.co/Tongyi-MAI/MAI-UI-2B/raw/503050934809558c8dfd2ddedaf9621fa74ac2de/README.md（获取于 2026-10-18T16:01:02Z；SHA-256：81731cb409cf6cd4af6121161ec6ba5d2862eb147e898ed57ac8bc974f008b3f）

---

## MAI-UI 8B

已发布的 MAI-UI 模型检查点，结合移动端 GUI 操作、智能体与用户交互，以及面向工具使用的导航能力。

- 目录页面：https://awesomecua.com/resources/url-00b1a3abf9bcb424b264/
- 原始来源：https://huggingface.co/Tongyi-MAI/MAI-UI-8B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：GUI 定位、手机操作、工具集成
- 证据核查日期：2026-10-17T04:07:19Z
- ID：url:00b1a3abf9bcb424b264

### 范围记录

Four public safetensors shards are present and Apache-2.0 is declared. The card presents family-wide results and device-cloud architecture.

- 完整记录 JSON：https://awesomecua.com/resources/url-00b1a3abf9bcb424b264/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/Tongyi-MAI/MAI-UI-8B/raw/main/README.md

### 一手证据

- https://huggingface.co/Tongyi-MAI/MAI-UI-8B/raw/main/README.md（获取于 2026-10-17T04:07:19Z；SHA-256：a1087d2a0dde6e7ba6d79db546ee6360a5ffd95ffbc3add1478eedec603a4187）
- https://huggingface.co/api/models/Tongyi-MAI/MAI-UI-8B（获取于 2026-10-17T04:07:18Z；SHA-256：349e6d5753fa94a47feb4b2fc53ecd6b9188b645a0cffabef92fd1aa0976ecad）
- https://huggingface.co/Tongyi-MAI/MAI-UI-8B/raw/main/README.md（获取于 2026-10-17T04:07:19Z；SHA-256：a1087d2a0dde6e7ba6d79db546ee6360a5ffd95ffbc3add1478eedec603a4187）

---

## Mano-CUA-2.0-4B

一个已发布的图形界面操作模型，接收桌面截图和任务上下文，生成点击、输入、滚动及启动应用等结构化操作。

- 目录页面：https://awesomecua.com/resources/url-1b08ff264bbf2f8a10a3/
- 原始来源：https://huggingface.co/Mininglamp-2718/Mano-CUA-2.0-4B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、macOS
- 主题：动作预测、GUI 定位、规划、界面理解
- 证据核查日期：2026-11-09T19:58:06Z
- ID：url:1b08ff264bbf2f8a10a3

### 范围记录

The card identifies this as the full-precision checkpoint based on Qwen3-VL-4B and provides a Transformers inference example. It declares an Apache 2.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-1b08ff264bbf2f8a10a3/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/Mininglamp-2718/Mano-CUA-2.0-4B

### 一手证据

- https://huggingface.co/api/models/Mininglamp-2718/Mano-CUA-2.0-4B（获取于 2026-11-09T19:58:06Z；SHA-256：fa18eac0c82feadd1d87cbac554a661b9efc07f3d891fadcf45f1dd4414cf24e）
- https://huggingface.co/api/models/Mininglamp-2718/Mano-CUA-2.0-4B（获取于 2026-11-09T19:58:06Z；SHA-256：fa18eac0c82feadd1d87cbac554a661b9efc07f3d891fadcf45f1dd4414cf24e）

---

## microsoft/Phi-Ground-Any

这款视觉模型经过微调，可根据图像和指令输出点击位置。模型卡说明了图像缩放和坐标换算方法。

- 目录页面：https://awesomecua.com/resources/url-21687e3bf1eb78f2bcda/
- 原始来源：https://huggingface.co/microsoft/Phi-Ground-Any
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：GUI 定位、界面理解
- 证据核查日期：2026-11-09T05:05:14Z
- ID：url:21687e3bf1eb78f2bcda

### 范围记录

The card names Phi-3.5-vision-instruct as the base model and declares an MIT license. The repository file list includes model weight shards.

- 完整记录 JSON：https://awesomecua.com/resources/url-21687e3bf1eb78f2bcda/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：mit — https://huggingface.co/microsoft/Phi-Ground-Any

### 一手证据

- https://huggingface.co/api/models/microsoft/Phi-Ground-Any（获取于 2026-11-09T05:05:14Z；SHA-256：5653ffbdfbb6489f77ec9fe090cda813366c6262179fa11e9491f9379a9de834）
- https://huggingface.co/api/models/microsoft/Phi-Ground-Any（获取于 2026-11-09T05:05:14Z；SHA-256：5653ffbdfbb6489f77ec9fe090cda813366c6262179fa11e9491f9379a9de834）

---

## MirrorGuard checkpoint

Qwen2.5-VL-7B-Instruct 微调模型读取指令、历史、截图及计算机使用智能体的思路；安全时原样返回，有风险时改写或拒绝。

- 目录页面：https://awesomecua.com/resources/url-5f4264af210fb2686870/
- 原始来源：https://huggingface.co/WhitzardAgent/MirrorGuard
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Linux
- 主题：安全与防护
- 证据核查日期：2026-10-19T06:50:28Z
- ID：url:5f4264af210fb2686870

### 范围记录

The card gives the system prompt, a vLLM serving command and training settings (LLaMA-Factory 'full' tags, 6 epochs, learning rate 1e-5). The WhitzardAgent/MirrorGuard code README describes this checkpoint as the final VLM trained on reasoning-correction data from its MirrorWorld pipeline and deploys it as a runtime corrector in its agent examples. The card's GitHub link (github.com/bmz-q-q/MirrorGuard) returns 404. The manifest lists four Safetensors shards and an index.

- 完整记录 JSON：https://awesomecua.com/resources/url-5f4264af210fb2686870/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 权重审核：The card's metadata declares license 'other' and its License section points to a LICENSE file at github.com/bmz-q-q/MirrorGuard, which returns 404; the MIT license of the WhitzardAgent/MirrorGuard code is not transferred to the weights.
  来源：https://huggingface.co/WhitzardAgent/MirrorGuard/raw/ea5025874aa1d8a32cabec9d2c05b5634db34c14/README.md

### 一手证据

- https://huggingface.co/WhitzardAgent/MirrorGuard/raw/ea5025874aa1d8a32cabec9d2c05b5634db34c14/README.md（获取于 2026-10-19T06:50:28Z；SHA-256：477c263651059d4926f1bdc24daf09d43514853afd69a2286f7df1ce66743e36）
- https://huggingface.co/api/models/WhitzardAgent/MirrorGuard/revision/ea5025874aa1d8a32cabec9d2c05b5634db34c14（获取于 2026-10-19T06:50:29Z；SHA-256：18d2ac4e60be47c04e0fa32dfea16699913196b9ec9bc52a84e889b11aaa0eea）
- https://huggingface.co/WhitzardAgent/MirrorGuard/raw/ea5025874aa1d8a32cabec9d2c05b5634db34c14/config.json（获取于 2026-10-19T06:50:29Z；SHA-256：0657beb7641fb2b71666de6760616f429fa4ed39e7b8d8989686ac1a4f2ee1fd）
- https://raw.githubusercontent.com/WhitzardAgent/MirrorGuard/9c5fb812a126493c75b6adda757af3b680a24708/README.md（获取于 2026-10-19T06:50:26Z；SHA-256：90ab7463e9d9c4d6c5e3b60acf385486ca1d9f09455aea0450b167406cfdf728）
- https://huggingface.co/WhitzardAgent/MirrorGuard/raw/ea5025874aa1d8a32cabec9d2c05b5634db34c14/README.md（获取于 2026-10-19T06:50:28Z；SHA-256：477c263651059d4926f1bdc24daf09d43514853afd69a2286f7df1ce66743e36）

---

## MobileRL 9B checkpoint

MobileRL 项目发布的基于 GLM-4.1V 的移动端操作模型检查点，用于 Android 交互。

- 目录页面：https://awesomecua.com/resources/url-d5667c854845c77b9f5b/
- 原始来源：https://huggingface.co/xuyifan/MobileRL-9B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：强化学习、手机操作
- 证据核查日期：2026-10-17T04:03:40Z
- ID：url:d5667c854845c77b9f5b

### 范围记录

Five public safetensors shards are present. The short card declares Apache-2.0 and a GLM-4.1V-9B base. The official project confirms the checkpoint and Android targets, and distinguishes MobileRL bounding-box actions from coordinate-format alternatives.

- 完整记录 JSON：https://awesomecua.com/resources/url-d5667c854845c77b9f5b/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/xuyifan/MobileRL-9B

### 一手证据

- https://huggingface.co/api/models/xuyifan/MobileRL-9B（获取于 2026-10-17T04:03:40Z；SHA-256：a00f13f5a86f2de7eb9c866cc4d08b958d21b2ac30dc3b9e1662e4bb336b7cb3）
- https://huggingface.co/xuyifan/MobileRL-9B/raw/main/README.md（获取于 2026-10-17T04:03:41Z；SHA-256：5c2d5eb247958f1af0646cbac831ecfbc7f839baa236a0d733075592da81f58e）
- https://raw.githubusercontent.com/THUDM/MobileRL/HEAD/README.md（获取于 2026-10-16T06:36:04Z；SHA-256：752fad8ebd8b8eda03648329a6fc2585e5bcb2b96875b8aa2ce7d9f3fff78153）
- https://huggingface.co/api/models/xuyifan/MobileRL-9B（获取于 2026-10-17T04:03:40Z；SHA-256：a00f13f5a86f2de7eb9c866cc4d08b958d21b2ac30dc3b9e1662e4bb336b7cb3）

---

## MolmoPoint-GUI-8B

图形界面定位模型，接收单张屏幕截图和类似指令的查询，使用专门的指向标记输出目标位置的点。

- 目录页面：https://awesomecua.com/resources/url-beb2ca7cdaefbef42ee6/
- 原始来源：https://huggingface.co/allenai/MolmoPoint-GUI-8B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：GUI 定位、界面理解
- 证据核查日期：2026-11-09T05:05:03Z
- ID：url:beb2ca7cdaefbef42ee6

### 范围记录

The repository contains sharded model weights and an inference example using Transformers. The card names MolmoPoint-8B as its base model and declares Apache 2.0 licensing.

- 完整记录 JSON：https://awesomecua.com/resources/url-beb2ca7cdaefbef42ee6/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/allenai/MolmoPoint-GUI-8B

### 一手证据

- https://huggingface.co/api/models/allenai/MolmoPoint-GUI-8B（获取于 2026-11-09T05:05:03Z；SHA-256：ff04c8e9013cc35ca89cf5f8a3e9735da6bc049b44ae2243065fabcf3c765de5）
- https://huggingface.co/api/models/allenai/MolmoPoint-GUI-8B（获取于 2026-11-09T05:05:03Z；SHA-256：ff04c8e9013cc35ca89cf5f8a3e9735da6bc049b44ae2243065fabcf3c765de5）

---

## mPLUG/ToolCUA-8B

ToolCUA-8B 是已发布的计算机操作模型，经过训练可在执行任务时交替使用桌面 GUI 操作和结构化工具调用。

- 目录页面：https://awesomecua.com/resources/url-44b65e07d7a869d37dc6/
- 原始来源：https://huggingface.co/mPLUG/ToolCUA-8B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：工具集成、动作预测、强化学习、效率
- 证据核查日期：2026-11-09T19:57:06Z
- ID：url:44b65e07d7a869d37dc6

### 范围记录

The card names Qwen/Qwen3-VL-8B-Instruct as the base model and provides vLLM serving instructions. The repository lists sharded safetensors weights and processor and tokenizer files. The card declares an MIT license.

- 完整记录 JSON：https://awesomecua.com/resources/url-44b65e07d7a869d37dc6/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：mit — https://huggingface.co/mPLUG/ToolCUA-8B

### 一手证据

- https://huggingface.co/api/models/mPLUG/ToolCUA-8B（获取于 2026-11-09T19:57:06Z；SHA-256：7c297c5277fc01db2f396c027a6cf6597715c7247dcdf022794f97d023e6cf48）
- https://huggingface.co/api/models/mPLUG/ToolCUA-8B（获取于 2026-11-09T19:57:06Z；SHA-256：7c297c5277fc01db2f396c027a6cf6597715c7247dcdf022794f97d023e6cf48）

---

## OpenCUA-7B-exl2

OpenCUA-7B-exl2 是 4.5bpw 量化的 OpenCUA-7B 模型权重，可根据屏幕截图生成电脑操作并定位界面目标。

- 目录页面：https://awesomecua.com/resources/url-76f3981d219bb87b4eea/
- 原始来源：https://huggingface.co/sujitvasanth/OpenCUA-7B-exl2
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、桌面、Windows、macOS、Linux
- 主题：动作预测、GUI 定位、界面理解
- 证据核查日期：2026-11-09T05:05:00Z
- ID：url:76f3981d219bb87b4eea

### 范围记录

The repository lists a safetensors weight file and sample inference code. The card calls for exllamav2, names Qwen/Qwen2.5-VL-7B-Instruct as a base model, and declares an MIT license.

- 完整记录 JSON：https://awesomecua.com/resources/url-76f3981d219bb87b4eea/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：mit — https://huggingface.co/sujitvasanth/OpenCUA-7B-exl2

### 一手证据

- https://huggingface.co/api/models/sujitvasanth/OpenCUA-7B-exl2（获取于 2026-11-09T05:05:00Z；SHA-256：138ce37b7d0b725626dc1e035434e4fd3e3fabba4408c1681b46ebd068574417）
- https://huggingface.co/api/models/sujitvasanth/OpenCUA-7B-exl2（获取于 2026-11-09T05:05:00Z；SHA-256：138ce37b7d0b725626dc1e035434e4fd3e3fabba4408c1681b46ebd068574417）

---

## OpenMobile-2 27B

基于 Qwen3.6-27B 的移动端智能体模型检查点，用于 GUI 及应用原生工具交互。

- 目录页面：https://awesomecua.com/resources/url-1611de0e6d606165d12d/
- 原始来源：https://huggingface.co/OpenMobile-2/OpenMobile-2-27B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：Android、网页
- 主题：手机操作、工具集成
- 证据核查日期：2026-10-17T01:48:51Z
- ID：url:1611de0e6d606165d12d

### 范围记录

License declarations apply to this checkpoint separately from code and training data.

- 完整记录 JSON：https://awesomecua.com/resources/url-1611de0e6d606165d12d/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/OpenMobile-2/OpenMobile-2-27B/raw/main/README.md

### 一手证据

- https://huggingface.co/OpenMobile-2/OpenMobile-2-27B/raw/main/README.md（获取于 2026-10-17T01:48:51Z；SHA-256：ba760ab75e997941dabf0845b34e5fb83daeb83a5cfa16b13929477cfc61a31c）
- https://huggingface.co/api/models/OpenMobile-2/OpenMobile-2-27B（获取于 2026-10-17T01:49:48Z；SHA-256：c7e388efe1ecfd415b7b5af7f296e62646a0a1380037f1e57ad1a43c26463b9a）
- https://os-copilot.github.io/OpenMobile2-Home/（获取于 2026-10-17T01:46:06Z；SHA-256：9b385e9f6aa2f7169f616a76887df3b76df605cb2bea071d99ee7ca3f9b659cc）
- https://huggingface.co/OpenMobile-2/OpenMobile-2-27B/raw/main/README.md（获取于 2026-10-17T01:48:51Z；SHA-256：ba760ab75e997941dabf0845b34e5fb83daeb83a5cfa16b13929477cfc61a31c）
- https://huggingface.co/api/models/OpenMobile-2/OpenMobile-27B（获取于 2026-10-17T19:15:11Z；SHA-256：f669181b7f1b92bbbcb8ab71f0d15d8c3cf93b3665d73d20e9b9f0dc3a36e158）
- https://huggingface.co/api/models/OpenMobile-2/OpenMobile-2-27B（获取于 2026-10-17T19:15:12Z；SHA-256：f669181b7f1b92bbbcb8ab71f0d15d8c3cf93b3665d73d20e9b9f0dc3a36e158）

---

## OpenMobile-8B

采用 Qwen3-VL 架构的移动端智能体检查点，随 OpenMobile 发布并在其合成 Android 轨迹上微调；代码 README 使用 vLLM 提供 AndroidWorld 评估服务。

- 目录页面：https://awesomecua.com/resources/url-6616228d4f267363458e/
- 原始来源：https://huggingface.co/cckevinn/OpenMobile-8B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：手机操作、动作预测、模仿学习
- 证据核查日期：2026-10-19T06:53:33Z
- ID：url:6616228d4f267363458e

### 范围记录

The Hub model card (README.md) is empty, so identity and purpose come from the OpenMobile code README, which links this repository as the model, lists fine-tuned checkpoints based on OpenMobile data, and uses OpenMobile-8B as the example model for AndroidWorld evaluation. The project page reports AndroidWorld, AndroidLab and MobileWorld results for its Qwen3-VL-8B variant. No base-model ID is declared on the Hub. The manifest lists four Safetensors shards and an index.

- 完整记录 JSON：https://awesomecua.com/resources/url-6616228d4f267363458e/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 权重审核：The Hub card is empty and declares no license; the code README's Apache-2.0 covers the code and says other released artifacts may have their own terms.
  来源：https://huggingface.co/api/models/cckevinn/OpenMobile-8B/revision/0cd9fc56c7f359ebe62ae273b731f3213fd62b40

### 一手证据

- https://raw.githubusercontent.com/njucckevin/OpenMobile-Code/faca68f386aff7277cdf494c84693c51090229c6/README.md（获取于 2026-10-19T06:53:33Z；SHA-256：8594e32aab90e0fdbaf436997e4082884423b6d3298f46247dcf0820e0499080）
- https://huggingface.co/api/models/cckevinn/OpenMobile-8B/revision/0cd9fc56c7f359ebe62ae273b731f3213fd62b40（获取于 2026-10-19T06:53:37Z；SHA-256：07751fda41e98eccbb1e9d439b4fcc93a15580948fa81afa18b439d9143859c0）
- https://huggingface.co/cckevinn/OpenMobile-8B/raw/0cd9fc56c7f359ebe62ae273b731f3213fd62b40/config.json（获取于 2026-10-19T06:53:38Z；SHA-256：50902136bf6856d8935a6fd84aa9bdb4eedf6ef260d9143421943f5800001fd0）
- https://njucckevin.github.io/openmobile/（获取于 2026-10-19T06:53:36Z；SHA-256：b37f01ef9fcffa0eef1f6c5c317a333e6f14210dfda54843fdaba2f88331b864）

---

## OpenWebVoyager/OpenWebVoyager-IL

一个基于 Idefics2 的多模态网页智能体模型检查点，使用网页智能体框架采集的轨迹进行模仿学习训练。

- 目录页面：https://awesomecua.com/resources/url-725f9a8225f0f9c40d93/
- 原始来源：https://huggingface.co/OpenWebVoyager/OpenWebVoyager-IL
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：模仿学习、网页导航、动作预测
- 证据核查日期：2026-11-09T19:56:53Z
- ID：url:725f9a8225f0f9c40d93

### 范围记录

The repository lists sharded safetensors weights and tokenizer and processor files. The card declares an Apache-2.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-725f9a8225f0f9c40d93/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/OpenWebVoyager/OpenWebVoyager-IL

### 一手证据

- https://huggingface.co/api/models/OpenWebVoyager/OpenWebVoyager-IL（获取于 2026-11-09T19:56:53Z；SHA-256：ad75f6ecf95bd512e863068761e16587b21ba7f103270c565126ca8e44e99ea4）
- https://huggingface.co/api/models/OpenWebVoyager/OpenWebVoyager-IL（获取于 2026-11-09T19:56:53Z；SHA-256：ad75f6ecf95bd512e863068761e16587b21ba7f103270c565126ca8e44e99ea4）

---

## OTA-v1

OTA-v1 是经过微调的浏览器智能体权重，旨在规划浏览器操作、使用工具，并在多步骤网页任务中保持上下文。

- 目录页面：https://awesomecua.com/resources/url-404c719910f8f4a37149/
- 原始来源：https://huggingface.co/OTA-AI/OTA-v1
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、规划、工具集成、状态追踪
- 证据核查日期：2026-11-09T19:56:21Z
- ID：url:404c719910f8f4a37149

### 范围记录

The repository lists safetensors and GGUF weights, tokenizer files and configuration. The card provides a Transformers loading example and declares an Apache-2.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-404c719910f8f4a37149/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/OTA-AI/OTA-v1

### 一手证据

- https://huggingface.co/api/models/OTA-AI/OTA-v1（获取于 2026-11-09T19:56:21Z；SHA-256：f3166ac1dec80a0a39e0674a768a060ac82c3f5539467c998f057780ea960d3a）
- https://huggingface.co/api/models/OTA-AI/OTA-v1（获取于 2026-11-09T19:56:21Z；SHA-256：f3166ac1dec80a0a39e0674a768a060ac82c3f5539467c998f057780ea960d3a）

---

## PAE LLaVA 7B

PAE 自主任务提议与策略学习系统发布的 LLaVA 检查点，用于视觉浏览器交互。

- 目录页面：https://awesomecua.com/resources/url-5d61c1b5fc8dd650518d/
- 原始来源：https://huggingface.co/yifeizhou/pae-llava-7b
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、强化学习
- 证据核查日期：2026-10-17T02:02:28Z
- ID：url:5d61c1b5fc8dd650518d

### 范围记录

The model is publicly ungated and has seven safetensors shards plus tokenizer and configuration files. Its card declares CC-BY-NC-4.0 for this model. This weight declaration does not settle the separate PAE dataset or code licensing questions.

- 完整记录 JSON：https://awesomecua.com/resources/url-5d61c1b5fc8dd650518d/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：cc-by-nc-4.0 — https://huggingface.co/yifeizhou/pae-llava-7b/raw/main/README.md

### 一手证据

- https://huggingface.co/yifeizhou/pae-llava-7b/raw/main/README.md（获取于 2026-10-17T02:02:28Z；SHA-256：c0994582f81415c9b0d37e4e5018752e48e511178c4b3898c207a042992db845）
- https://huggingface.co/api/models/yifeizhou/pae-llava-7b（获取于 2026-10-17T02:02:28Z；SHA-256：1b76d2aebbe15954eff2b8859b884ec6504f8b67ed0b1045d8b3a83c0d132d3a）
- https://raw.githubusercontent.com/amazon-science/PAE/HEAD/README.md（获取于 2026-10-17T02:02:06Z；SHA-256：3e5f24b3175afeba8635dacc7b66eba1ce89fea49996a20281ff2df5a41f1e24）
- https://huggingface.co/yifeizhou/pae-llava-7b/raw/main/README.md（获取于 2026-10-17T02:02:28Z；SHA-256：c0994582f81415c9b0d37e4e5018752e48e511178c4b3898c207a042992db845）

---

## PC-Agent-E checkpoint

基于 PC-Agent-E 轨迹微调的计算机使用模型检查点；模型卡说明其起始模型为 Qwen2.5-VL-72B-Instruct。

- 目录页面：https://awesomecua.com/resources/url-04aa7569d183379d615c/
- 原始来源：https://huggingface.co/henryhe0123/PC-Agent-E
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Windows、Linux
- 主题：动作预测、模仿学习
- 证据核查日期：2026-10-18T04:35:19Z
- ID：url:04aa7569d183379d615c

### 范围记录

Public manifest lists 31 Safetensors shards and their index. The card prose names Qwen2.5-VL-72B-Instruct while its YAML base_model field self-references PC-Agent-E; no base-model relationship is imported from that inconsistent metadata. The model-card MIT declaration is recorded for weights only.

- 完整记录 JSON：https://awesomecua.com/resources/url-04aa7569d183379d615c/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：MIT — https://huggingface.co/henryhe0123/PC-Agent-E/raw/568ab45861d5dab041e158d47211c6f53ba343f2/README.md

- 权重审核：Publisher model-card declaration for the checkpoint; code and training-data terms are separate.
  来源：https://huggingface.co/henryhe0123/PC-Agent-E/raw/568ab45861d5dab041e158d47211c6f53ba343f2/README.md

### 一手证据

- https://huggingface.co/henryhe0123/PC-Agent-E/raw/568ab45861d5dab041e158d47211c6f53ba343f2/README.md（获取于 2026-10-18T04:35:19Z；SHA-256：feb41002efff5ef30fe06f9891efbe954e0d046c0379f7c8ca72b5d8a8a304be）
- https://huggingface.co/api/models/henryhe0123/PC-Agent-E（获取于 2026-10-18T04:33:21Z；SHA-256：f81a6cea4234e65f8bab390a18487e65dd0b0cb62f0a9458c658ff07e8a7b5f7）
- https://raw.githubusercontent.com/GAIR-NLP/PC-Agent-E/HEAD/README.md（获取于 2026-10-18T04:27:13Z；SHA-256：3ffb8c843c6acb8c2d5bbba11ba49d6b36cd566553a89974b6252a2bfd289d5d）

---

## Phi-Ground checkpoint

Microsoft Phi-Ground GUI 定位模型检查点，由 Phi-3.5-vision-instruct 微调，以 2 个 PyTorch 权重分片发布，附自定义 Phi-3-V 配置和处理代码，采用 MIT 许可证。

- 目录页面：https://awesomecua.com/resources/url-cee45b940d5fbff3ccca/
- 原始来源：https://huggingface.co/microsoft/Phi-Ground
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：GUI 定位
- 证据核查日期：2026-10-16T06:50:49Z
- ID：url:cee45b940d5fbff3ccca

- 完整记录 JSON：https://awesomecua.com/resources/url-cee45b940d5fbff3ccca/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：mit — https://huggingface.co/microsoft/Phi-Ground

### 一手证据

- https://huggingface.co/api/models/microsoft/Phi-Ground（获取于 2026-10-16T06:50:49Z；SHA-256：ce8e0ebc3d4c2642bfb6a1d807176eae4c14b52fbc6f221b3c234a9d55e0d362）
- https://huggingface.co/api/models/microsoft/Phi-Ground（获取于 2026-10-16T06:50:49Z；SHA-256：ce8e0ebc3d4c2642bfb6a1d807176eae4c14b52fbc6f221b3c234a9d55e0d362）

---

## Pix2Struct

Pix2Struct 提供官方训练和推理代码，用于跨网页和移动端 UI 任务的截图解析视觉语言预训练。

- 目录页面：https://awesomecua.com/resources/github-google-research-pix2struct/
- 原始来源：https://github.com/google-research/pix2struct
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、Android
- 主题：界面理解、GUI 定位
- 证据核查日期：2026-11-04T13:12:16Z
- ID：github:google-research/pix2struct

- 完整记录 JSON：https://awesomecua.com/resources/github-google-research-pix2struct/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/google-research/pix2struct/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/google-research/pix2struct/HEAD/README.md（获取于 2026-11-04T13:12:16Z；SHA-256：ca99e7ffd4a4286e1eec2651d5733e0d9630e2e1f042caa93c22ce0eec465fa5）
- https://raw.githubusercontent.com/google-research/pix2struct/HEAD/LICENSE（获取于 2026-11-04T13:22:40Z；SHA-256：58d1e17ffe5109a7ae296caafcadfdbe6a7d176f0bc4ab01e12a689b0499d8bd）

---

## Plan-and-Act Actor 70B

来自 Plan-and-Act 网页智能体框架、基于 Llama-3.3-70B-Instruct 的执行器检查点，可将高层计划转化为浏览器动作。

- 目录页面：https://awesomecua.com/resources/url-8a284d122d7dcf23479d/
- 原始来源：https://huggingface.co/xTRam1/plan-and-act-actor-70b
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：规划、动作预测、网页导航
- 证据核查日期：2026-10-17T02:05:41Z
- ID：url:8a284d122d7dcf23479d

- 完整记录 JSON：https://awesomecua.com/resources/url-8a284d122d7dcf23479d/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：mit — https://huggingface.co/xTRam1/plan-and-act-actor-70b

### 一手证据

- https://huggingface.co/api/models/xTRam1/plan-and-act-actor-70b（获取于 2026-10-17T02:05:41Z；SHA-256：a68db8fbf587c35e17526b0fbeb34649e6a03611e61d8be2f4cd36756e7356dd）
- https://huggingface.co/api/models/xTRam1/plan-and-act-actor-70b（获取于 2026-10-17T02:05:41Z；SHA-256：a68db8fbf587c35e17526b0fbeb34649e6a03611e61d8be2f4cd36756e7356dd）

---

## Plan-and-Act Planner 70B

Plan-and-Act 的规划器组件，生成结构化的高层计划，由执行器将其转化为网页操作。

- 目录页面：https://awesomecua.com/resources/url-3932d69c6b6f9b2a7ba8/
- 原始来源：https://huggingface.co/xTRam1/plan-and-act-planner-70b
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：规划、网页导航、长任务
- 证据核查日期：2026-10-17T02:02:28Z
- ID：url:3932d69c6b6f9b2a7ba8

### 范围记录

The Hub manifest contains 17 safetensors shards and tokenizer/configuration files. Card metadata declares MIT and Llama-3.3-70B-Instruct as the base, but retains template comments asking the publisher to update those fields if needed. These are recorded as publisher declarations, without claiming they override upstream model terms.

- 完整记录 JSON：https://awesomecua.com/resources/url-3932d69c6b6f9b2a7ba8/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：mit — https://huggingface.co/xTRam1/plan-and-act-planner-70b/raw/main/README.md

- 权重审核：The model card declares MIT in its metadata header (license: mit), beside a template comment asking the publisher to update it if needed. It is recorded as the publisher's declaration and does not override the Llama-3.3-70B-Instruct base model terms.
  来源：https://huggingface.co/xTRam1/plan-and-act-planner-70b/raw/main/README.md

### 一手证据

- https://huggingface.co/xTRam1/plan-and-act-planner-70b/raw/main/README.md（获取于 2026-10-17T02:02:28Z；SHA-256：4ef2d84d2b5d9d2972907e6135ea49f1ef088beaf6ef6042dc7d8fb4297a9a3a）
- https://huggingface.co/api/models/xTRam1/plan-and-act-planner-70b（获取于 2026-10-17T02:02:28Z；SHA-256：d2f757790ded81244e7c9b9e7350ec9fdc304609e387a95c7918db705bda535c）
- https://raw.githubusercontent.com/SqueezeAILab/plan-and-act/HEAD/README.md（获取于 2026-10-17T02:02:06Z；SHA-256：feee31aa4d0801cb364578099a13e4f9cdcaa4eb5fbf4312b3fc3f8edd479a14）

---

## POINTS-GUI

POINTS-GUI-G-8B GUI 定位模型，以不具备原生定位能力的 POINTS-1.5 为基础，通过统一坐标、过滤噪声和加入困难样例的数据流程训练。

- 目录页面：https://awesomecua.com/resources/github-tencent-points-gui/
- 原始来源：https://github.com/Tencent/POINTS-GUI
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：GUI 定位
- 证据核查日期：2026-10-16T06:36:00Z
- ID：github:tencent/points-gui

- 完整记录 JSON：https://awesomecua.com/resources/github-tencent-points-gui/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/Tencent/POINTS-GUI/HEAD/README.md（获取于 2026-10-16T06:36:00Z；SHA-256：9f851237932688c15d261c016d51ff5ae80c43c5d0b4eaccac0b48d941118d80）

---

## POINTS-GUI-G 8B

专门用于界面定位的模型检查点，返回截图中指定元素的归一化点坐标。

- 目录页面：https://awesomecua.com/resources/url-cc931199bda2bdf1f5f7/
- 原始来源：https://huggingface.co/tencent/POINTS-GUI-G
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、桌面、跨平台
- 主题：GUI 定位、界面理解
- 证据核查日期：2026-10-17T02:03:33Z
- ID：url:cc931199bda2bdf1f5f7

### 范围记录

Four safetensors shards and model code/configuration are public and ungated. The card declares license other without specifying a named weight license. This release is the grounding model; the same card says the end-to-end GUI agent model is still under development. No end-to-end agent capability is inferred from grounding scores.

- 完整记录 JSON：https://awesomecua.com/resources/url-cc931199bda2bdf1f5f7/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：other — https://huggingface.co/tencent/POINTS-GUI-G/raw/main/README.md

### 一手证据

- https://huggingface.co/tencent/POINTS-GUI-G/raw/main/README.md（获取于 2026-10-17T02:03:33Z；SHA-256：ac679d3cfdda8754e945d127935c9ed9030e6c9d0c9872f6224909ab2abe5c3f）
- https://huggingface.co/api/models/tencent/POINTS-GUI-G（获取于 2026-10-17T02:03:33Z；SHA-256：3b97405c0a7f50298cf31a4933d31da356363c2ba5ecfaf73144cedeebc44db2）
- https://raw.githubusercontent.com/Tencent/POINTS-GUI/HEAD/README.md（获取于 2026-10-16T06:36:00Z；SHA-256：9f851237932688c15d261c016d51ff5ae80c43c5d0b4eaccac0b48d941118d80）
- https://huggingface.co/tencent/POINTS-GUI-G/raw/main/README.md（获取于 2026-10-17T02:03:33Z；SHA-256：ac679d3cfdda8754e945d127935c9ed9030e6c9d0c9872f6224909ab2abe5c3f）

---

## Qwen2-VL-72B-Instruct-AWQ

Qwen2-VL-72B-Instruct-AWQ 发布了视觉指令模型的量化权重。其模型卡介绍了该模型如何与移动设备集成，并依据图像和文字执行操作。

- 目录页面：https://awesomecua.com/resources/url-1f488d7ef1c703f97a8a/
- 原始来源：https://huggingface.co/Qwen/Qwen2-VL-72B-Instruct-AWQ
- 类型：模型
- 审核状态：已审核
- 范围：相关研究
- 运行环境：unspecified
- 主题：手机操作、界面理解
- 证据核查日期：2026-11-09T19:56:02Z
- ID：url:1f488d7ef1c703f97a8a

### 范围记录

The repository lists safetensors weight shards and a Tongyi Qianwen license. The card gives a Transformers loading example and reports vision benchmark and inference-speed results.

- 完整记录 JSON：https://awesomecua.com/resources/url-1f488d7ef1c703f97a8a/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：other — https://huggingface.co/Qwen/Qwen2-VL-72B-Instruct-AWQ

### 一手证据

- https://huggingface.co/api/models/Qwen/Qwen2-VL-72B-Instruct-AWQ（获取于 2026-11-09T19:56:02Z；SHA-256：a9c0013cb0a0e6ca022426ae0a400a9903d856c70012383cb720551224a9b0b0）
- https://huggingface.co/api/models/Qwen/Qwen2-VL-72B-Instruct-AWQ（获取于 2026-11-09T19:56:02Z；SHA-256：a9c0013cb0a0e6ca022426ae0a400a9903d856c70012383cb720551224a9b0b0）

---

## Qwen2.5-VL-7B-Instruct

Qwen2.5-VL-7B-Instruct 发布视觉语言模型权重；模型卡介绍其电脑和手机操作能力，并报告屏幕定位及移动智能体基准结果。

- 目录页面：https://awesomecua.com/resources/url-557edb1d63e8fcfdee12/
- 原始来源：https://huggingface.co/Qwen/Qwen2.5-VL-7B-Instruct
- 类型：模型
- 审核状态：已审核
- 范围：相关研究
- 运行环境：跨平台
- 主题：界面理解、GUI 定位、手机操作、评测
- 证据核查日期：2026-11-09T06:16:33Z
- ID：url:557edb1d63e8fcfdee12

### 范围记录

The repository contains sharded safetensors weights and processor and tokenizer files. The card gives Transformers inference examples and declares the Apache 2.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-557edb1d63e8fcfdee12/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/Qwen/Qwen2.5-VL-7B-Instruct

### 一手证据

- https://huggingface.co/api/models/Qwen/Qwen2.5-VL-7B-Instruct（获取于 2026-11-09T06:16:33Z；SHA-256：59cd17c2cb9b93c463d1debbf33996f42dbfa2de60587a4dee3911ba581a38fe）
- https://huggingface.co/api/models/Qwen/Qwen2.5-VL-7B-Instruct（获取于 2026-11-09T06:16:33Z；SHA-256：59cd17c2cb9b93c463d1debbf33996f42dbfa2de60587a4dee3911ba581a38fe）

---

## Qwen2.5-VL-7B-Instruct-AWQ

这是指令微调的 7B Qwen2.5-VL 模型的 AWQ 版本。模型卡描述了其对界面图像的理解、视觉定位以及电脑和手机操作能力。

- 目录页面：https://awesomecua.com/resources/url-06c351d14bee24bc3f01/
- 原始来源：https://huggingface.co/Qwen/Qwen2.5-VL-7B-Instruct-AWQ
- 类型：模型
- 审核状态：已审核
- 范围：相关研究
- 运行环境：跨平台
- 主题：界面理解、GUI 定位、手机操作、工具集成
- 证据核查日期：2026-11-09T19:56:41Z
- ID：url:06c351d14bee24bc3f01

### 范围记录

The release includes model weights and a Transformers usage example. The card declares an Apache-2.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-06c351d14bee24bc3f01/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/Qwen/Qwen2.5-VL-7B-Instruct-AWQ

### 一手证据

- https://huggingface.co/api/models/Qwen/Qwen2.5-VL-7B-Instruct-AWQ（获取于 2026-11-09T19:56:41Z；SHA-256：0bd4c33bb3b06ddd39d22c69a306df62b7925aa9b1c2c61aec7e83b62ddf0327）
- https://huggingface.co/api/models/Qwen/Qwen2.5-VL-7B-Instruct-AWQ（获取于 2026-11-09T19:56:41Z；SHA-256：0bd4c33bb3b06ddd39d22c69a306df62b7925aa9b1c2c61aec7e83b62ddf0327）

---

## Qwen3-8B-FormFactory-GRPO-LoRA

Qwen3-8B-FormFactory-GRPO-LoRA 是用于 Qwen3-8B 的浏览器表单填写适配器，通过监督初始化和真实浏览器执行中的在线 GRPO 训练。

- 目录页面：https://awesomecua.com/resources/url-4a3799bd1b6db15afffe/
- 原始来源：https://huggingface.co/billyenrizky/Qwen3-8B-FormFactory-GRPO-LoRA
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、强化学习、自动化
- 证据核查日期：2026-11-09T19:57:07Z
- ID：url:4a3799bd1b6db15afffe

### 范围记录

The release includes a PEFT adapter and loading example for Qwen/Qwen3-8B. The card declares Apache-2.0 and reports validation and test rewards on 124 held-out FormFactory tasks.

- 完整记录 JSON：https://awesomecua.com/resources/url-4a3799bd1b6db15afffe/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/billyenrizky/Qwen3-8B-FormFactory-GRPO-LoRA

### 一手证据

- https://huggingface.co/api/models/billyenrizky/Qwen3-8B-FormFactory-GRPO-LoRA（获取于 2026-11-09T19:57:07Z；SHA-256：2e35c05a777801f70a511aea7ca07e4581c108f79e04748554bf60af6508da06）
- https://huggingface.co/api/models/billyenrizky/Qwen3-8B-FormFactory-GRPO-LoRA（获取于 2026-11-09T19:57:07Z；SHA-256：2e35c05a777801f70a511aea7ca07e4581c108f79e04748554bf60af6508da06）

---

## Qwen3-8B-FormFactory-SFT-LoRA

一个 Qwen3-8B LoRA 适配器，使用 992 条示范数据针对 FormFactory 网页表单填写任务进行微调，并提供通过 PEFT 加载的说明。

- 目录页面：https://awesomecua.com/resources/url-994d4cf27b0931fb53e3/
- 原始来源：https://huggingface.co/billyenrizky/Qwen3-8B-FormFactory-SFT-LoRA
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、模仿学习
- 证据核查日期：2026-11-09T19:57:37Z
- ID：url:994d4cf27b0931fb53e3

### 范围记录

The repository contains adapter weights and configuration files. The card names Qwen/Qwen3-8B as the base model and declares an Apache-2.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-994d4cf27b0931fb53e3/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/billyenrizky/Qwen3-8B-FormFactory-SFT-LoRA

### 一手证据

- https://huggingface.co/api/models/billyenrizky/Qwen3-8B-FormFactory-SFT-LoRA（获取于 2026-11-09T19:57:37Z；SHA-256：ebe47e5105423baceefe3a8333ab138044de981e0272c31ea39f08eb1e8b048f）
- https://huggingface.co/api/models/billyenrizky/Qwen3-8B-FormFactory-SFT-LoRA（获取于 2026-11-09T19:57:37Z；SHA-256：ebe47e5105423baceefe3a8333ab138044de981e0272c31ea39f08eb1e8b048f）

---

## Qwen3-VL-235B-A22B-Thinking

这是已发布的 Qwen3-VL 视觉语言模型权重；模型卡描述了其电脑和移动端图形界面交互能力，包括识别界面元素、调用工具和完成任务。

- 目录页面：https://awesomecua.com/resources/url-b8702b4ca9ceac2ca3ee/
- 原始来源：https://huggingface.co/Qwen/Qwen3-VL-235B-A22B-Thinking
- 类型：模型
- 审核状态：已审核
- 范围：相关研究
- 运行环境：桌面、Android、iOS、跨平台
- 主题：界面理解、GUI 定位、手机操作、工具集成
- 证据核查日期：2026-11-09T19:56:49Z
- ID：url:b8702b4ca9ceac2ca3ee

### 范围记录

The card provides a Transformers loading example and declares an Apache-2.0 license. The listed neighboring papers are separate publications.

- 完整记录 JSON：https://awesomecua.com/resources/url-b8702b4ca9ceac2ca3ee/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/Qwen/Qwen3-VL-235B-A22B-Thinking

### 一手证据

- https://huggingface.co/api/models/Qwen/Qwen3-VL-235B-A22B-Thinking（获取于 2026-11-09T19:56:49Z；SHA-256：41c314d48b73369382877fe3670622f7586769d5931389ea4ebf310d24c73e23）
- https://huggingface.co/api/models/Qwen/Qwen3-VL-235B-A22B-Thinking（获取于 2026-11-09T19:56:49Z；SHA-256：41c314d48b73369382877fe3670622f7586769d5931389ea4ebf310d24c73e23）

---

## Qwen3-VL-2B-Thinking

Qwen3-VL-2B-Thinking 是 Qwen3-VL 视觉语言模型 2B 规模的推理（Thinking）版权重；模型卡介绍了它操作电脑和移动设备 GUI 的视觉智能体能力，包括识别界面元素和使用工具。

- 目录页面：https://awesomecua.com/resources/url-24013b35fccf6b504bc5/
- 原始来源：https://huggingface.co/Qwen/Qwen3-VL-2B-Thinking
- 类型：模型
- 审核状态：已审核
- 范围：相关研究
- 运行环境：跨平台、桌面
- 主题：界面理解、自动化、工具集成
- 证据核查日期：2026-11-09T19:57:49Z
- ID：url:24013b35fccf6b504bc5

### 范围记录

The card provides Transformers and ModelScope usage examples and lists Apache-2.0 as the license.

- 完整记录 JSON：https://awesomecua.com/resources/url-24013b35fccf6b504bc5/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/Qwen/Qwen3-VL-2B-Thinking

### 一手证据

- https://huggingface.co/api/models/Qwen/Qwen3-VL-2B-Thinking（获取于 2026-11-09T19:57:49Z；SHA-256：f7a266334fe9b3b7cbf4eb02d77d286177253d64472882808ed1835f409b5dd8）
- https://huggingface.co/api/models/Qwen/Qwen3-VL-2B-Thinking（获取于 2026-11-09T19:57:49Z；SHA-256：f7a266334fe9b3b7cbf4eb02d77d286177253d64472882808ed1835f409b5dd8）

---

## Qwen3-VL-32B-Thinking

Qwen3-VL-32B-Thinking 是视觉语言模型权重；其模型卡描述了识别界面元素并使用工具完成电脑和移动设备图形界面任务的能力。

- 目录页面：https://awesomecua.com/resources/url-ecf889aadea335aa5e25/
- 原始来源：https://huggingface.co/Qwen/Qwen3-VL-32B-Thinking
- 类型：模型
- 审核状态：已审核
- 范围：相关研究
- 运行环境：桌面、跨平台
- 主题：界面理解、GUI 定位、手机操作、工具集成
- 证据核查日期：2026-11-09T19:56:21Z
- ID：url:ecf889aadea335aa5e25

### 范围记录

The repository lists sharded safetensors weights, tokenizer files and preprocessing configuration. The card declares an Apache-2.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-ecf889aadea335aa5e25/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/Qwen/Qwen3-VL-32B-Thinking

### 一手证据

- https://huggingface.co/api/models/Qwen/Qwen3-VL-32B-Thinking（获取于 2026-11-09T19:56:21Z；SHA-256：329de228cd1f3af86a45214f1e13d9b6ba1c41f01bff2ab7113451c9da40e55a）
- https://huggingface.co/api/models/Qwen/Qwen3-VL-32B-Thinking（获取于 2026-11-09T19:56:21Z；SHA-256：329de228cd1f3af86a45214f1e13d9b6ba1c41f01bff2ab7113451c9da40e55a）

---

## Qwen3-VL-4B-Thinking

一个视觉语言模型检查点，其模型卡描述了面向电脑和移动设备界面的视觉智能体操作，包括元素识别和工具调用。

- 目录页面：https://awesomecua.com/resources/url-b5690e43822ef84015c5/
- 原始来源：https://huggingface.co/Qwen/Qwen3-VL-4B-Thinking
- 类型：模型
- 审核状态：已审核
- 范围：相关研究
- 运行环境：跨平台、桌面
- 主题：界面理解、手机操作、工具集成
- 证据核查日期：2026-11-09T19:57:41Z
- ID：url:b5690e43822ef84015c5

### 范围记录

The repository lists model weight shards, tokenizer and preprocessing files. The card declares an Apache-2.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-b5690e43822ef84015c5/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/Qwen/Qwen3-VL-4B-Thinking

### 一手证据

- https://huggingface.co/api/models/Qwen/Qwen3-VL-4B-Thinking（获取于 2026-11-09T19:57:41Z；SHA-256：3f1439b5deb5ad3ddf9d6f1abbc7e38ed5b1cec8cf9ffe4207e739f3097bd281）
- https://huggingface.co/api/models/Qwen/Qwen3-VL-4B-Thinking（获取于 2026-11-09T19:57:41Z；SHA-256：3f1439b5deb5ad3ddf9d6f1abbc7e38ed5b1cec8cf9ffe4207e739f3097bd281）

---

## Qwen3-VL-8B-Thinking

通用视觉语言模型权重；其视觉智能体能力包括识别电脑与移动端界面元素，并调用工具完成任务。

- 目录页面：https://awesomecua.com/resources/url-d1305a893a47ac03d0de/
- 原始来源：https://huggingface.co/Qwen/Qwen3-VL-8B-Thinking
- 类型：模型
- 审核状态：已审核
- 范围：相关研究
- 运行环境：跨平台、桌面
- 主题：界面理解、手机操作、工具集成
- 证据核查日期：2026-11-09T05:05:19Z
- ID：url:d1305a893a47ac03d0de

### 范围记录

The card provides Transformers and ModelScope usage examples and declares Apache-2.0. Its GUI capability is one part of a broader multimodal release.

- 完整记录 JSON：https://awesomecua.com/resources/url-d1305a893a47ac03d0de/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/Qwen/Qwen3-VL-8B-Thinking

### 一手证据

- https://huggingface.co/api/models/Qwen/Qwen3-VL-8B-Thinking（获取于 2026-11-09T05:05:19Z；SHA-256：2aec0c847702f66e9297839816bd758a3e7c349f1541ad8d9386a69244a0a9df）
- https://huggingface.co/api/models/Qwen/Qwen3-VL-8B-Thinking（获取于 2026-11-09T05:05:19Z；SHA-256：2aec0c847702f66e9297839816bd758a3e7c349f1541ad8d9386a69244a0a9df）

---

## Qwen3.5-4B-Browser-Agent-SFT-FP8

一个基于浏览器智能体轨迹和结构化操作微调的 FP8 Qwen3.5-4B 检查点。模型卡提供 vLLM 服务配置，并报告 BrowseWebApp-Bench v2 的结果。

- 目录页面：https://awesomecua.com/resources/url-6eda678ca03ea2b10d2d/
- 原始来源：https://huggingface.co/visnia-ai/Qwen3.5-4B-Browser-Agent-SFT-FP8
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、模仿学习、动作预测、效率
- 证据核查日期：2026-11-09T19:57:41Z
- ID：url:6eda678ca03ea2b10d2d

### 范围记录

The release contains merged, post-training FP8 model weights. The card says it uses Qwen/Qwen3.5-4B as its base, LoRA supervised fine-tuning and 3.3k successful executor trajectories; it declares Apache-2.0.

- 完整记录 JSON：https://awesomecua.com/resources/url-6eda678ca03ea2b10d2d/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/visnia-ai/Qwen3.5-4B-Browser-Agent-SFT-FP8

### 一手证据

- https://huggingface.co/api/models/visnia-ai/Qwen3.5-4B-Browser-Agent-SFT-FP8（获取于 2026-11-09T19:57:41Z；SHA-256：ce1d91476215c5367fb4f584a2c0712cb4df7363782e0629a223a9f1a38a00b7）
- https://huggingface.co/api/models/visnia-ai/Qwen3.5-4B-Browser-Agent-SFT-FP8（获取于 2026-11-09T19:57:41Z；SHA-256：ce1d91476215c5367fb4f584a2c0712cb4df7363782e0629a223a9f1a38a00b7）

---

## S1-Accurate-LoRA

这个用于桌面智能体决策模型的 LoRA 适配器，在较快模型无法确定下一步时，根据窗口截图从候选操作中选择动作和目标元素。

- 目录页面：https://awesomecua.com/resources/url-d34be9d27efef6c1b37a/
- 原始来源：https://huggingface.co/elidot007/S1-Accurate-LoRA
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Windows
- 主题：动作预测、GUI 定位、界面理解、状态追踪
- 证据核查日期：2026-11-09T19:58:08Z
- ID：url:d34be9d27efef6c1b37a

### 范围记录

The card provides instructions to merge the adapter with OneJev-4B and serve it through qev. It reports evaluation on desktop, browser and mobile test sets and declares Apache-2.0 licensing.

- 完整记录 JSON：https://awesomecua.com/resources/url-d34be9d27efef6c1b37a/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/elidot007/S1-Accurate-LoRA

### 一手证据

- https://huggingface.co/api/models/elidot007/S1-Accurate-LoRA（获取于 2026-11-09T19:58:08Z；SHA-256：880e1ec62497543e4a985c7dd07fc4522fd312e10b613bddfecef1ec8efc8030）
- https://huggingface.co/api/models/elidot007/S1-Accurate-LoRA（获取于 2026-11-09T19:58:08Z；SHA-256：880e1ec62497543e4a985c7dd07fc4522fd312e10b613bddfecef1ec8efc8030）

---

## S1-Fast

S1-Fast 根据 Windows UI Automation 快照和视觉词元，通过一次编码器运算预测桌面操作、目标元素和步骤状态。

- 目录页面：https://awesomecua.com/resources/url-51fd7f79dff766278d83/
- 原始来源：https://huggingface.co/elidot007/S1-Fast
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Windows
- 主题：动作预测、GUI 定位、效率、状态追踪
- 证据核查日期：2026-11-09T19:56:15Z
- ID：url:51fd7f79dff766278d83

### 范围记录

The release includes model weights, configuration, tokenizer, calibration and step-gate files. It was initialized from mmBERT-base; the optional SigLIP2 image tower is separate. The card declares Apache-2.0.

- 完整记录 JSON：https://awesomecua.com/resources/url-51fd7f79dff766278d83/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/elidot007/S1-Fast

### 一手证据

- https://huggingface.co/api/models/elidot007/S1-Fast（获取于 2026-11-09T19:56:15Z；SHA-256：c8a27232ad121fcc7dda918795fca6e17d7b2321e3f9dd041c366259ecfddfac）
- https://huggingface.co/api/models/elidot007/S1-Fast（获取于 2026-11-09T19:56:15Z；SHA-256：c8a27232ad121fcc7dda918795fca6e17d7b2321e3f9dd041c366259ecfddfac）

---

## Salesforce/GTA1-32B

这款 32B GUI 定位模型通过 GRPO 训练，根据任务和屏幕截图生成操作；模型卡报告了定位及桌面智能体基准结果。

- 目录页面：https://awesomecua.com/resources/url-5288515eb50aef1e84a2/
- 原始来源：https://huggingface.co/Salesforce/GTA1-32B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Windows
- 主题：GUI 定位、强化学习、动作预测、评测
- 证据核查日期：2026-11-09T05:05:01Z
- ID：url:5288515eb50aef1e84a2

### 范围记录

The repository lists weight shards and custom model and processor code. The card includes inference and serving examples and declares an MIT license.

- 完整记录 JSON：https://awesomecua.com/resources/url-5288515eb50aef1e84a2/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：mit — https://huggingface.co/Salesforce/GTA1-32B

### 一手证据

- https://huggingface.co/api/models/Salesforce/GTA1-32B（获取于 2026-11-09T05:05:01Z；SHA-256：54c85b5f2d788df434d7d7a9201a11261a97c81a8059a3e9f6ebed467cd77c12）
- https://huggingface.co/api/models/Salesforce/GTA1-32B（获取于 2026-11-09T05:05:01Z；SHA-256：54c85b5f2d788df434d7d7a9201a11261a97c81a8059a3e9f6ebed467cd77c12）

---

## ScaleCUA (THUDM) GLM-4.6V-Flash OSWorld

THUDM ScaleCUA 的 GLM-4.6V-Flash 计算机使用智能体检查点，以监督训练模型为起点，经在线强化学习用于 OSWorld 桌面任务，并通过兼容 OpenAI 的端点提供服务。

- 目录页面：https://awesomecua.com/resources/url-77c708f5cff2d4c95e90/
- 原始来源：https://huggingface.co/extreme1228/ScaleCUA-glm4.6v-osworld
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：强化学习、动作预测
- 证据核查日期：2026-10-18T15:55:21Z
- ID：url:77c708f5cff2d4c95e90

### 范围记录

Hub API at revision f877281f lists five BF16 safetensors shards (about 10.29B parameters) in the Glm4vForConditionalGeneration architecture; the repository is publicly accessible. The card calls this the online-RL (RLVR) checkpoint and names extreme1228/ScaleCUA-glm4.6v-osworld-sft as its start point, which is also its Hub base_model. The card and the THUDM/SCALE-CUA README report 66.5% on OSWorld as a publisher figure. The card YAML declares license 'other' and its prose says the weights are released for research and inherit the license of GLM-4.6V-Flash; that license is not resolved here. The card gives no parameter size label. This project is distinct from OpenGVLab/ScaleCUA.

- 完整记录 JSON：https://awesomecua.com/resources/url-77c708f5cff2d4c95e90/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：other — https://huggingface.co/extreme1228/ScaleCUA-glm4.6v-osworld/raw/f877281fc6f326fd43271163ea21b028db8eaa22/README.md

### 一手证据

- https://huggingface.co/extreme1228/ScaleCUA-glm4.6v-osworld/raw/f877281fc6f326fd43271163ea21b028db8eaa22/README.md（获取于 2026-10-18T15:55:21Z；SHA-256：782c7a503f05c95537f8a2d4a75ca4fc7f078ec5a76dbbcb58aee98cf5a70b0f）
- https://huggingface.co/api/models/extreme1228/ScaleCUA-glm4.6v-osworld/revision/f877281fc6f326fd43271163ea21b028db8eaa22（获取于 2026-10-18T15:54:54Z；SHA-256：c06e2f6cb5ce247bf67db276869d4409225968201d0c4565b2ceeef7c19b66a3）
- https://raw.githubusercontent.com/THUDM/SCALE-CUA/3929e2fe364623153f2caa94ead71dc1aea50fb0/README.md（获取于 2026-10-18T15:54:54Z；SHA-256：d4a68b00acc4becf2a25688520595babea9b694b56541e709f066413b5b80aea）
- https://huggingface.co/extreme1228/ScaleCUA-glm4.6v-osworld/raw/f877281fc6f326fd43271163ea21b028db8eaa22/README.md（获取于 2026-10-18T15:55:21Z；SHA-256：782c7a503f05c95537f8a2d4a75ca4fc7f078ec5a76dbbcb58aee98cf5a70b0f）

---

## ScaleCUA (THUDM) GLM-4.6V-Flash ScienceBoard

THUDM ScaleCUA 的 GLM-4.6V-Flash 计算机使用智能体检查点，从已发布的监督训练模型出发，经在线强化学习用于 ScienceBoard 科学软件任务。

- 目录页面：https://awesomecua.com/resources/url-4bcb6a451d6f4d25343c/
- 原始来源：https://huggingface.co/extreme1228/ScaleCUA-glm4.6v-scienceboard
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：强化学习、动作预测、科学工作流
- 证据核查日期：2026-10-18T15:56:10Z
- ID：url:4bcb6a451d6f4d25343c

### 范围记录

Hub API at revision 3b089b66 lists five BF16 safetensors shards (about 10.29B parameters) in the Glm4vForConditionalGeneration architecture; the repository is publicly accessible. The card calls this the online-RL (RLVR) checkpoint and names extreme1228/ScaleCUA-glm4.6v-scienceboard-sft as its start point, which is also its Hub base_model. The card and the THUDM/SCALE-CUA README report 49.4% on ScienceBoard as a publisher figure. The card YAML declares license 'other' and its prose says the weights are released for research and inherit the license of GLM-4.6V-Flash; that license is not resolved here. The card states no parameter size, so no label is recorded. This project is distinct from OpenGVLab/ScaleCUA.

- 完整记录 JSON：https://awesomecua.com/resources/url-4bcb6a451d6f4d25343c/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：other — https://huggingface.co/extreme1228/ScaleCUA-glm4.6v-scienceboard/raw/3b089b66c9d0ffd3e56477fce32b31ab5ad56361/README.md

### 一手证据

- https://huggingface.co/extreme1228/ScaleCUA-glm4.6v-scienceboard/raw/3b089b66c9d0ffd3e56477fce32b31ab5ad56361/README.md（获取于 2026-10-18T15:56:10Z；SHA-256：e02cf943e5a41f954173add4922ecab70e9737a0b1b64aa3a401f20d877a0e46）
- https://huggingface.co/api/models/extreme1228/ScaleCUA-glm4.6v-scienceboard/revision/3b089b66c9d0ffd3e56477fce32b31ab5ad56361（获取于 2026-10-18T15:55:27Z；SHA-256：ce5f0216e60abd678633ad918497e4dd6d3d6332bdc0e196ef9b1627c1466c78）
- https://raw.githubusercontent.com/THUDM/SCALE-CUA/3929e2fe364623153f2caa94ead71dc1aea50fb0/README.md（获取于 2026-10-18T15:55:27Z；SHA-256：d4a68b00acc4becf2a25688520595babea9b694b56541e709f066413b5b80aea）
- https://huggingface.co/extreme1228/ScaleCUA-glm4.6v-scienceboard/raw/3b089b66c9d0ffd3e56477fce32b31ab5ad56361/README.md（获取于 2026-10-18T15:56:10Z；SHA-256：e02cf943e5a41f954173add4922ecab70e9737a0b1b64aa3a401f20d877a0e46）

---

## ScaleCUA (THUDM) Qwen3-VL-8B OSWorld

THUDM ScaleCUA 的 Qwen3-VL-8B 计算机使用智能体检查点，从已发布的 SFT 初始模型出发经在线 RL 训练，用于 OSWorld 桌面任务。

- 目录页面：https://awesomecua.com/resources/url-1807bdb33fc352a97240/
- 原始来源：https://huggingface.co/extreme1228/ScaleCUA-qwen3-vl-osworld
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：强化学习、动作预测
- 证据核查日期：2026-10-18T15:43:12Z
- ID：url:1807bdb33fc352a97240

### 范围记录

Hub API at revision d27cdab2 lists four BF16 safetensors shards (about 8.77B parameters) in the Qwen3VLForConditionalGeneration architecture; access is open. The card calls this the online-RL (RLVR) checkpoint and names extreme1228/ScaleCUA-qwen3-vl-osworld-sft as its start point, which is also its Hub base_model. The card and the THUDM/SCALE-CUA README report 67.7% on OSWorld; this is a publisher figure. The card YAML declares license 'other' and its prose says the weights are released for research and inherit the license of Qwen3-VL-8B; that license is not resolved here. This project is distinct from OpenGVLab/ScaleCUA.

- 完整记录 JSON：https://awesomecua.com/resources/url-1807bdb33fc352a97240/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：other — https://huggingface.co/extreme1228/ScaleCUA-qwen3-vl-osworld/raw/d27cdab2d500f323af27c0c9fdcf123f40c83d42/README.md

### 一手证据

- https://huggingface.co/extreme1228/ScaleCUA-qwen3-vl-osworld/raw/d27cdab2d500f323af27c0c9fdcf123f40c83d42/README.md（获取于 2026-10-18T15:43:12Z；SHA-256：7f1fb5e0229ec526c6f75baa9331864d49442200a19ea7888fe4f4d69eead546）
- https://huggingface.co/api/models/extreme1228/ScaleCUA-qwen3-vl-osworld/revision/d27cdab2d500f323af27c0c9fdcf123f40c83d42（获取于 2026-10-18T15:42:53Z；SHA-256：39802e7890517c83ddd53b16c3e1196c1cde03d85803d64fa8e49ce48c659838）
- https://raw.githubusercontent.com/THUDM/SCALE-CUA/3929e2fe364623153f2caa94ead71dc1aea50fb0/README.md（获取于 2026-10-18T15:41:39Z；SHA-256：d4a68b00acc4becf2a25688520595babea9b694b56541e709f066413b5b80aea）
- https://huggingface.co/extreme1228/ScaleCUA-qwen3-vl-osworld/raw/d27cdab2d500f323af27c0c9fdcf123f40c83d42/README.md（获取于 2026-10-18T15:43:12Z；SHA-256：7f1fb5e0229ec526c6f75baa9331864d49442200a19ea7888fe4f4d69eead546）

---

## ScaleCUA (THUDM) Qwen3-VL-8B ScienceBoard

THUDM ScaleCUA 的 Qwen3-VL-8B 计算机使用智能体检查点，以监督训练模型为起点，经在线强化学习用于 ScienceBoard 科学软件任务，并通过兼容 OpenAI 的端点提供服务。

- 目录页面：https://awesomecua.com/resources/url-73c169c32b5765688376/
- 原始来源：https://huggingface.co/extreme1228/ScaleCUA-qwen3-vl-scienceboard
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：强化学习、动作预测、科学工作流
- 证据核查日期：2026-10-18T15:49:59Z
- ID：url:73c169c32b5765688376

### 范围记录

Hub API at revision 13947f05 lists four BF16 safetensors shards (about 8.77B parameters) in the Qwen3VLForConditionalGeneration architecture; the repository is publicly accessible. The card calls this the online-RL (RLVR) checkpoint and names extreme1228/ScaleCUA-qwen3-vl-scienceboard-sft as its start point, which is also its Hub base_model. The card and the THUDM/SCALE-CUA README report 51.9% on ScienceBoard as a publisher figure. The card YAML declares license 'other' and its prose says the weights are released for research and inherit the license of Qwen3-VL-8B; that license is not resolved here. This project is distinct from OpenGVLab/ScaleCUA.

- 完整记录 JSON：https://awesomecua.com/resources/url-73c169c32b5765688376/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：other — https://huggingface.co/extreme1228/ScaleCUA-qwen3-vl-scienceboard/raw/13947f05bff0742e09784310b6c68ae39bff67e5/README.md

### 一手证据

- https://huggingface.co/extreme1228/ScaleCUA-qwen3-vl-scienceboard/raw/13947f05bff0742e09784310b6c68ae39bff67e5/README.md（获取于 2026-10-18T15:49:59Z；SHA-256：7c299ac74c20235bb4f501ba6543503cc3c117c0b0c4e8121b72bd6f4050f970）
- https://huggingface.co/api/models/extreme1228/ScaleCUA-qwen3-vl-scienceboard/revision/13947f05bff0742e09784310b6c68ae39bff67e5（获取于 2026-10-18T15:49:22Z；SHA-256：df0d6a684c4d7ae8657744b285a5e8a30f31fe7f369b771b52f3a15f53cf0b1e）
- https://raw.githubusercontent.com/THUDM/SCALE-CUA/3929e2fe364623153f2caa94ead71dc1aea50fb0/README.md（获取于 2026-10-18T15:49:22Z；SHA-256：d4a68b00acc4becf2a25688520595babea9b694b56541e709f066413b5b80aea）
- https://huggingface.co/extreme1228/ScaleCUA-qwen3-vl-scienceboard/raw/13947f05bff0742e09784310b6c68ae39bff67e5/README.md（获取于 2026-10-18T15:49:59Z；SHA-256：7c299ac74c20235bb4f501ba6543503cc3c117c0b0c4e8121b72bd6f4050f970）

---

## ScaleCUA (THUDM) Qwen3.5-9B OSWorld

THUDM ScaleCUA 的 Qwen3.5-9B 计算机使用智能体检查点，从 SFT 初始模型出发经在线 RL 训练，用于 OSWorld 桌面任务，可通过兼容 OpenAI 的端点提供服务。

- 目录页面：https://awesomecua.com/resources/url-0919e695670c5740a123/
- 原始来源：https://huggingface.co/extreme1228/ScaleCUA-qwen3.5-osworld
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：强化学习、动作预测
- 证据核查日期：2026-10-18T15:41:57Z
- ID：url:0919e695670c5740a123

### 范围记录

Hub API at revision 2ad1314b lists four BF16 safetensors shards (about 9.41B parameters) in the Qwen3_5ForConditionalGeneration architecture; access is open. The card calls this the online-RL (RLVR) checkpoint and names extreme1228/ScaleCUA-qwen3.5-osworld-sft as its start point, which is also its Hub base_model. The card and the THUDM/SCALE-CUA README report 68.7% on OSWorld; this is a publisher figure. The card YAML declares license 'other' and its prose says the weights are released for research and inherit the license of Qwen3.5-9B; that license is not resolved here. This project is distinct from OpenGVLab/ScaleCUA.

- 完整记录 JSON：https://awesomecua.com/resources/url-0919e695670c5740a123/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：other — https://huggingface.co/extreme1228/ScaleCUA-qwen3.5-osworld/raw/2ad1314b6076591e35f299b2efed214e2454deab/README.md

### 一手证据

- https://huggingface.co/extreme1228/ScaleCUA-qwen3.5-osworld/raw/2ad1314b6076591e35f299b2efed214e2454deab/README.md（获取于 2026-10-18T15:41:57Z；SHA-256：8dbec1da9f5dddb73561021af5f386e0c456e6b9ea8b6d422aa60df5f57abd44）
- https://huggingface.co/api/models/extreme1228/ScaleCUA-qwen3.5-osworld/revision/2ad1314b6076591e35f299b2efed214e2454deab（获取于 2026-10-18T15:41:39Z；SHA-256：38f67b1b143810cd843f99f047fd3310b26b0084948a8d6b3dc31999ce20ab74）
- https://raw.githubusercontent.com/THUDM/SCALE-CUA/3929e2fe364623153f2caa94ead71dc1aea50fb0/README.md（获取于 2026-10-18T15:41:39Z；SHA-256：d4a68b00acc4becf2a25688520595babea9b694b56541e709f066413b5b80aea）
- https://huggingface.co/extreme1228/ScaleCUA-qwen3.5-osworld/raw/2ad1314b6076591e35f299b2efed214e2454deab/README.md（获取于 2026-10-18T15:41:57Z；SHA-256：8dbec1da9f5dddb73561021af5f386e0c456e6b9ea8b6d422aa60df5f57abd44）

---

## ScaleCUA (THUDM) Qwen3.5-9B ScienceBoard

THUDM 的 ScaleCUA 基于 Qwen3.5-9B 的计算机使用智能体检查点，从 SFT 起点经在线强化学习训练，面向 ScienceBoard 科学软件任务，并通过兼容 OpenAI 的端点提供服务。

- 目录页面：https://awesomecua.com/resources/url-d2d07c09a1c92e5f4a43/
- 原始来源：https://huggingface.co/extreme1228/ScaleCUA-qwen3.5-scienceboard
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：强化学习、动作预测、科学工作流
- 证据核查日期：2026-10-19T06:02:06Z
- ID：url:d2d07c09a1c92e5f4a43

### 范围记录

Hub API at revision ca2bc686 lists four BF16 safetensors shards (about 9.41B parameters) in the Qwen3_5ForConditionalGeneration architecture; the repository is publicly accessible. The card calls this the online-RL (RLVR) checkpoint and names extreme1228/ScaleCUA-qwen3.5-scienceboard-sft as its start point, which is also its Hub base_model. The card and the THUDM/SCALE-CUA README report 54.0% on ScienceBoard as a publisher figure. The card YAML declares license 'other' and its prose says the weights are released for research and inherit the license of Qwen3.5-9B; that license is not resolved here. This project is distinct from OpenGVLab/ScaleCUA.

- 完整记录 JSON：https://awesomecua.com/resources/url-d2d07c09a1c92e5f4a43/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：other — https://huggingface.co/extreme1228/ScaleCUA-qwen3.5-scienceboard/raw/ca2bc686c6d428fde67b114e002dd69e4eeb59b5/README.md

### 一手证据

- https://huggingface.co/extreme1228/ScaleCUA-qwen3.5-scienceboard/raw/ca2bc686c6d428fde67b114e002dd69e4eeb59b5/README.md（获取于 2026-10-19T06:02:06Z；SHA-256：9a3e1927afa4a12c03721c4dbd96550f61e653cd098cc9841e6462cd891b4d3d）
- https://huggingface.co/api/models/extreme1228/ScaleCUA-qwen3.5-scienceboard/revision/ca2bc686c6d428fde67b114e002dd69e4eeb59b5（获取于 2026-10-19T06:02:06Z；SHA-256：1bfdc228a5e9b8b0b9bc676d77f11b18ae866c936316496ab8793b94dbc53c90）
- https://huggingface.co/extreme1228/ScaleCUA-qwen3.5-scienceboard/raw/ca2bc686c6d428fde67b114e002dd69e4eeb59b5/config.json（获取于 2026-10-19T06:02:06Z；SHA-256：19a077d2064ea10c90fb9936730cc621134b53e89c406187c2d6b6a2983739bb）
- https://raw.githubusercontent.com/THUDM/SCALE-CUA/3929e2fe364623153f2caa94ead71dc1aea50fb0/README.md（获取于 2026-10-19T06:02:06Z；SHA-256：d4a68b00acc4becf2a25688520595babea9b694b56541e709f066413b5b80aea）
- https://huggingface.co/extreme1228/ScaleCUA-qwen3.5-scienceboard/raw/ca2bc686c6d428fde67b114e002dd69e4eeb59b5/README.md（获取于 2026-10-19T06:02:06Z；SHA-256：9a3e1927afa4a12c03721c4dbd96550f61e653cd098cc9841e6462cd891b4d3d）

---

## SCOPE-SFT-9B

一个基于 Qwen3.5-9B 的计算机操作模型，使用桌面任务示范和安全应对轨迹训练，并报告了任务完成和攻击规避评估结果。

- 目录页面：https://awesomecua.com/resources/url-389202404e2653f59838/
- 原始来源：https://huggingface.co/k4ng/SCOPE-SFT-9B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：安全与防护、模仿学习、自动化
- 证据核查日期：2026-11-09T19:57:37Z
- ID：url:389202404e2653f59838

### 范围记录

The release contains model weights and gives a vLLM serving command. The card identifies SATraj-OS as its training data and names OSWorld and OS-BLIND as evaluation benchmarks.

- 完整记录 JSON：https://awesomecua.com/resources/url-389202404e2653f59838/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/k4ng/SCOPE-SFT-9B

### 一手证据

- https://huggingface.co/api/models/k4ng/SCOPE-SFT-9B（获取于 2026-11-09T19:57:37Z；SHA-256：482eef9011c68bb222e6d73f9fe671622e06ded9f54211de94421898875eef46）
- https://huggingface.co/api/models/k4ng/SCOPE-SFT-9B（获取于 2026-11-09T19:57:37Z；SHA-256：482eef9011c68bb222e6d73f9fe671622e06ded9f54211de94421898875eef46）

---

## Seg2Click Qwen2.5-VL 3B

基于 Qwen2.5-VL-3B 的 Seg2Click 检查点，配有自定义操作掩码解码器。

- 目录页面：https://awesomecua.com/resources/url-23ad240757185c6f7eac/
- 原始来源：https://huggingface.co/jcwang0602/Seg2Click-Qwen2.5-VL-3B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：GUI 定位
- 证据核查日期：2026-10-17T01:48:10Z
- ID：url:23ad240757185c6f7eac

### 范围记录

License declarations apply to this checkpoint separately from code and training data. The checkpoint includes a merged backbone and mask decoder; mask-to-click inference requires those components beyond a generic text-generation pipeline. The card names the Qwen Research license, unlike the Apache-2.0 declarations on the Qwen3.5 variants.

- 完整记录 JSON：https://awesomecua.com/resources/url-23ad240757185c6f7eac/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：other — https://huggingface.co/jcwang0602/Seg2Click-Qwen2.5-VL-3B/raw/main/README.md

### 一手证据

- https://huggingface.co/jcwang0602/Seg2Click-Qwen2.5-VL-3B/raw/main/README.md（获取于 2026-10-17T01:48:10Z；SHA-256：399895cd711d703ff4e016417ca14d13b76988c5625ff120e7083991eb0bd8f2）
- https://huggingface.co/api/models/jcwang0602/Seg2Click-Qwen2.5-VL-3B（获取于 2026-10-17T01:49:48Z；SHA-256：c580cb5bd811285944337c4ebb461fa498bba09e6082b70e120ceb83e302fcce）
- https://huggingface.co/jcwang0602/Seg2Click-Qwen2.5-VL-3B/raw/main/README.md（获取于 2026-10-17T01:48:10Z；SHA-256：399895cd711d703ff4e016417ca14d13b76988c5625ff120e7083991eb0bd8f2）

---

## Seg2Click Qwen3.5 0.8B

紧凑的 Seg2Click 检查点，包含合并后的 Qwen3.5 主干模型和动作掩码解码器。

- 目录页面：https://awesomecua.com/resources/url-7405463ba56f9a41e79a/
- 原始来源：https://huggingface.co/jcwang0602/Seg2Click-Qwen3.5-0.8B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：GUI 定位
- 证据核查日期：2026-10-17T01:48:10Z
- ID：url:7405463ba56f9a41e79a

### 范围记录

License declarations apply to this checkpoint separately from code and training data. The checkpoint includes a merged backbone and mask decoder; mask-to-click inference requires those components beyond a generic text-generation pipeline.

- 完整记录 JSON：https://awesomecua.com/resources/url-7405463ba56f9a41e79a/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/jcwang0602/Seg2Click-Qwen3.5-0.8B/raw/main/README.md

### 一手证据

- https://huggingface.co/jcwang0602/Seg2Click-Qwen3.5-0.8B/raw/main/README.md（获取于 2026-10-17T01:48:10Z；SHA-256：8130a68ede5391bd158ce2cc49c36c5f8c8ebf22b897db6f68e27babbbc66965）
- https://huggingface.co/api/models/jcwang0602/Seg2Click-Qwen3.5-0.8B（获取于 2026-10-17T01:49:48Z；SHA-256：6bd2608de2715e3d76a0c9e9b8fd7540372bfd2f9864db0445d8e548c9afb518）
- https://huggingface.co/jcwang0602/Seg2Click-Qwen3.5-0.8B/raw/main/README.md（获取于 2026-10-17T01:48:10Z；SHA-256：8130a68ede5391bd158ce2cc49c36c5f8c8ebf22b897db6f68e27babbbc66965）

---

## Seg2Click Qwen3.5 2B

使用 2B Qwen3.5 骨干模型预测掩码并选择界面点击位置的 Seg2Click 检查点。

- 目录页面：https://awesomecua.com/resources/url-fec1c5aa8fd93cb78923/
- 原始来源：https://huggingface.co/jcwang0602/Seg2Click-Qwen3.5-2B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：GUI 定位
- 证据核查日期：2026-10-17T01:48:10Z
- ID：url:fec1c5aa8fd93cb78923

### 范围记录

License declarations apply to this checkpoint separately from code and training data. The checkpoint includes a merged backbone and mask decoder; mask-to-click inference requires those components beyond a generic text-generation pipeline.

- 完整记录 JSON：https://awesomecua.com/resources/url-fec1c5aa8fd93cb78923/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/jcwang0602/Seg2Click-Qwen3.5-2B/raw/main/README.md

### 一手证据

- https://huggingface.co/jcwang0602/Seg2Click-Qwen3.5-2B/raw/main/README.md（获取于 2026-10-17T01:48:10Z；SHA-256：08d14b9dc3010365e543cbb6707b67c5d792118451bbc2d0b70f1f0280cb20e1）
- https://huggingface.co/api/models/jcwang0602/Seg2Click-Qwen3.5-2B（获取于 2026-10-17T01:49:48Z；SHA-256：7b3242c3943537b6a26d8650a78c45044dce06a031ca2ce8bc67d5e482a332ce）
- https://huggingface.co/jcwang0602/Seg2Click-Qwen3.5-2B/raw/main/README.md（获取于 2026-10-17T01:48:10Z；SHA-256：08d14b9dc3010365e543cbb6707b67c5d792118451bbc2d0b70f1f0280cb20e1）

---

## Seg2Click Qwen3.5 4B

Seg2Click 检查点，以 4B 参数的 Qwen3.5 为骨干模型，预测像素级操作掩码。

- 目录页面：https://awesomecua.com/resources/url-29588aa5651b5839c045/
- 原始来源：https://huggingface.co/jcwang0602/Seg2Click-Qwen3.5-4B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：GUI 定位
- 证据核查日期：2026-10-17T01:48:10Z
- ID：url:29588aa5651b5839c045

### 范围记录

License declarations apply to this checkpoint separately from code and training data. The checkpoint includes a merged backbone and mask decoder; mask-to-click inference requires those components beyond a generic text-generation pipeline.

- 完整记录 JSON：https://awesomecua.com/resources/url-29588aa5651b5839c045/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/jcwang0602/Seg2Click-Qwen3.5-4B/raw/main/README.md

### 一手证据

- https://huggingface.co/jcwang0602/Seg2Click-Qwen3.5-4B/raw/main/README.md（获取于 2026-10-17T01:48:10Z；SHA-256：98409c81aeba5c9261075ab720204842465041f7df3aee833b28a8e5d4347c56）
- https://huggingface.co/api/models/jcwang0602/Seg2Click-Qwen3.5-4B（获取于 2026-10-17T01:49:48Z；SHA-256：8c94e2115879f474e122cffafe4d14a4e898d832fe094d7f0fffcdba4a14f9d9）
- https://huggingface.co/jcwang0602/Seg2Click-Qwen3.5-4B/raw/main/README.md（获取于 2026-10-17T01:48:10Z；SHA-256：98409c81aeba5c9261075ab720204842465041f7df3aee833b28a8e5d4347c56）

---

## Seg2Click Qwen3.5 9B

Seg2Click 检查点，将 9B Qwen3.5 主干模型与有效 GUI 点击区域解码器结合。

- 目录页面：https://awesomecua.com/resources/url-826f3753905c5c43bf46/
- 原始来源：https://huggingface.co/jcwang0602/Seg2Click-Qwen3.5-9B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：GUI 定位
- 证据核查日期：2026-10-17T01:48:10Z
- ID：url:826f3753905c5c43bf46

### 范围记录

License declarations apply to this checkpoint separately from code and training data. The checkpoint includes a merged backbone and mask decoder; mask-to-click inference requires those components beyond a generic text-generation pipeline.

- 完整记录 JSON：https://awesomecua.com/resources/url-826f3753905c5c43bf46/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/jcwang0602/Seg2Click-Qwen3.5-9B/raw/main/README.md

### 一手证据

- https://huggingface.co/jcwang0602/Seg2Click-Qwen3.5-9B/raw/main/README.md（获取于 2026-10-17T01:48:10Z；SHA-256：feeb30bda7f86e10d87bdc1b0148d0632aba6df1676931a3d6c65cbdf197df3e）
- https://huggingface.co/api/models/jcwang0602/Seg2Click-Qwen3.5-9B（获取于 2026-10-17T01:49:48Z；SHA-256：f215590b7a7b510085f7f99a8c236816604d4c11a8f5ae544b4ee75771dd4f82）
- https://huggingface.co/jcwang0602/Seg2Click-Qwen3.5-9B/raw/main/README.md（获取于 2026-10-17T01:48:10Z；SHA-256：feeb30bda7f86e10d87bdc1b0148d0632aba6df1676931a3d6c65cbdf197df3e）

---

## sharryXR/asil-qwen35-2b-sft

这是为结构化应用状态与语义动作研究发布的 ASIL Qwen3.5-2B SFT 检查点，包含可加载的模型和分词器文件。

- 目录页面：https://awesomecua.com/resources/url-d59976834d3d0d3a1809/
- 原始来源：https://huggingface.co/sharryXR/asil-qwen35-2b-sft
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：动作预测、工具集成
- 证据核查日期：2026-11-09T19:57:06Z
- ID：url:d59976834d3d0d3a1809

### 范围记录

The card names Qwen/Qwen3.5-2B as the base model and reports 2,330 training and 594 validation rows. The repository includes model weights, configuration, tokenizer files, checksums, and checkpoint metadata. The declared license is Apache 2.0.

- 完整记录 JSON：https://awesomecua.com/resources/url-d59976834d3d0d3a1809/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/sharryXR/asil-qwen35-2b-sft

### 一手证据

- https://huggingface.co/api/models/sharryXR/asil-qwen35-2b-sft（获取于 2026-11-09T19:57:06Z；SHA-256：02789997790d246eda7199e8dfd13a9c626805a94db4bf4ebc2bbd31a20025f9）
- https://huggingface.co/api/models/sharryXR/asil-qwen35-2b-sft（获取于 2026-11-09T19:57:06Z；SHA-256：02789997790d246eda7199e8dfd13a9c626805a94db4bf4ebc2bbd31a20025f9）

---

## ShowUI-Narrator

一款已发布的 2B 模型，用于描述 GUI 截图和视频中的用户操作；其处理流程会检测光标并处理裁剪后的画面。

- 目录页面：https://awesomecua.com/resources/url-6b9389a144cbe70c894d/
- 原始来源：https://huggingface.co/FRank62Wu/ShowUI-Narrator
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：界面理解、视频、动作预测
- 证据核查日期：2026-11-09T06:16:32Z
- ID：url:6b9389a144cbe70c894d

### 范围记录

The card provides model and processor loading examples, screenshot and video processing code, and a separate link to a cursor detector checkpoint. It lists Qwen/Qwen2-VL-2B-Instruct and showlab/ShowUI-2B as base models and declares Apache-2.0.

- 完整记录 JSON：https://awesomecua.com/resources/url-6b9389a144cbe70c894d/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/FRank62Wu/ShowUI-Narrator

### 一手证据

- https://huggingface.co/api/models/FRank62Wu/ShowUI-Narrator（获取于 2026-11-09T06:16:32Z；SHA-256：809581664699bbb638837634c51d78b69be88cc5b74aad6b0824bfcdd66a3eb8）
- https://huggingface.co/api/models/FRank62Wu/ShowUI-Narrator（获取于 2026-11-09T06:16:32Z；SHA-256：809581664699bbb638837634c51d78b69be88cc5b74aad6b0824bfcdd66a3eb8）

---

## SpiritSight-Agent-26B

用于跨平台界面导航的 26B 视觉模型，仓库提供模型权重及推理脚本，底座模型为 InternVL2。

- 目录页面：https://awesomecua.com/resources/url-55be07e942393d43132f/
- 原始来源：https://huggingface.co/SenseLLM/SpiritSight-Agent-26B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：手机操作、GUI 定位、界面理解
- 证据核查日期：2026-11-09T05:04:59Z
- ID：url:55be07e942393d43132f

### 范围记录

The repository lists sharded checkpoint files, model and tokenizer code, requirements, and infer_SSAgent-26B.py. The card names InternVL2-26B as the base model and declares an Apache 2.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-55be07e942393d43132f/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/SenseLLM/SpiritSight-Agent-26B

### 一手证据

- https://huggingface.co/api/models/SenseLLM/SpiritSight-Agent-26B（获取于 2026-11-09T05:04:59Z；SHA-256：ddd7f759b411f95e5272e2d0d0ecb9aaf3436506145e6dfdd874c13cca4e646b）
- https://huggingface.co/api/models/SenseLLM/SpiritSight-Agent-26B（获取于 2026-11-09T05:04:59Z；SHA-256：ddd7f759b411f95e5272e2d0d0ecb9aaf3436506145e6dfdd874c13cca4e646b）

---

## SpiritSight-Agent-2B

这是用于跨平台界面导航的 2B 视觉 GUI 智能体检查点，附有推理脚本和基础模型信息。

- 目录页面：https://awesomecua.com/resources/url-37570eed422d326bfa5a/
- 原始来源：https://huggingface.co/SenseLLM/SpiritSight-Agent-2B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：界面理解、GUI 定位、动作预测
- 证据核查日期：2026-11-09T05:05:19Z
- ID：url:37570eed422d326bfa5a

### 范围记录

The card names OpenGVLab/InternVL2-2B as the base model and provides a requirements file and inference command. It declares Apache-2.0 in card metadata and lists the checkpoint under an InternVL license link.

- 完整记录 JSON：https://awesomecua.com/resources/url-37570eed422d326bfa5a/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/SenseLLM/SpiritSight-Agent-2B

### 一手证据

- https://huggingface.co/api/models/SenseLLM/SpiritSight-Agent-2B（获取于 2026-11-09T05:05:19Z；SHA-256：bb228dcc21284ec9cfad3bcfbd7722d05515717cc3358c263a348d8de7468e88）
- https://huggingface.co/api/models/SenseLLM/SpiritSight-Agent-2B（获取于 2026-11-09T05:05:19Z；SHA-256：bb228dcc21284ec9cfad3bcfbd7722d05515717cc3358c263a348d8de7468e88）

---

## STEVE-R1-7B-SFT

STEVE-R1-7B-SFT 是使用逐步验证数据训练的计算机使用模型检查点，面向桌面任务，并在 Windows 和 Ubuntu 环境中评估。

- 目录页面：https://awesomecua.com/resources/url-666844c28be1138b0e37/
- 原始来源：https://huggingface.co/Fanbin/STEVE-R1-7B-SFT
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Windows、Linux
- 主题：动作预测、模仿学习、交互历史
- 证据核查日期：2026-11-09T05:05:07Z
- ID：url:666844c28be1138b0e37

### 范围记录

The repository lists sharded model weights and tokenizer files. The card declares an Apache-2.0 license and links to evaluation trajectories.

- 完整记录 JSON：https://awesomecua.com/resources/url-666844c28be1138b0e37/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/Fanbin/STEVE-R1-7B-SFT

### 一手证据

- https://huggingface.co/api/models/Fanbin/STEVE-R1-7B-SFT（获取于 2026-11-09T05:05:07Z；SHA-256：8656133cd96812a3e238db1209af076b4af6f94ae92f831ef2c4671d3d98bb27）
- https://huggingface.co/api/models/Fanbin/STEVE-R1-7B-SFT（获取于 2026-11-09T05:05:07Z；SHA-256：8656133cd96812a3e238db1209af076b4af6f94ae92f831ef2c4671d3d98bb27）

---

## THUDM/cogagent-chat-hf

CogAgent 的对话模型权重，可解读图形界面截图并提出计划、下一步操作和坐标。模型卡描述了它在网页、桌面和移动界面中的用途。

- 目录页面：https://awesomecua.com/resources/url-5726382dc813f040f829/
- 原始来源：https://huggingface.co/THUDM/cogagent-chat-hf
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、网页、桌面
- 主题：界面理解、GUI 定位、动作预测、规划
- 证据核查日期：2026-11-09T19:58:09Z
- ID：url:5726382dc813f040f829

### 范围记录

The repository contains safetensors weight shards and model code. The card says model weights are free for academic research and commercial use requires registration under a model license.

- 完整记录 JSON：https://awesomecua.com/resources/url-5726382dc813f040f829/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/THUDM/cogagent-chat-hf

### 一手证据

- https://huggingface.co/api/models/THUDM/cogagent-chat-hf（获取于 2026-11-09T19:58:09Z；SHA-256：cc325baca7fac28f5cbbb1233eeec9329dc529a880aca6c1ed7ee367a563149b）
- https://huggingface.co/api/models/THUDM/cogagent-chat-hf（获取于 2026-11-09T19:58:09Z；SHA-256：cc325baca7fac28f5cbbb1233eeec9329dc529a880aca6c1ed7ee367a563149b）
- https://huggingface.co/api/models/THUDM/cogagent-chat-hf（获取于 2026-11-09T20:03:14Z；SHA-256：cc325baca7fac28f5cbbb1233eeec9329dc529a880aca6c1ed7ee367a563149b）
- https://huggingface.co/api/models/zai-org/cogagent-chat-hf（获取于 2026-11-09T20:03:14Z；SHA-256：cc325baca7fac28f5cbbb1233eeec9329dc529a880aca6c1ed7ee367a563149b）

---

## UGround V1 7B

由 Qwen2-VL-7B 微调的 UGround-V1 检查点，采用标准 Qwen2-VL 架构，约有 8.3B 个 BF16 参数；以 safetensors 和 PyTorch 文件提供，采用 Apache-2.0 许可证。

- 目录页面：https://awesomecua.com/resources/url-e554295a7f3f5c9ad0d6/
- 原始来源：https://huggingface.co/osunlp/UGround-V1-7B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：GUI 定位
- 证据核查日期：2026-10-16T06:50:49Z
- ID：url:e554295a7f3f5c9ad0d6

- 完整记录 JSON：https://awesomecua.com/resources/url-e554295a7f3f5c9ad0d6/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/osunlp/UGround-V1-7B

### 一手证据

- https://huggingface.co/api/models/osunlp/UGround-V1-7B（获取于 2026-10-16T06:50:49Z；SHA-256：080c9245276e9ffe5911551a66acd7e91b478f85b96c795d6079465d92580f18）
- https://huggingface.co/api/models/osunlp/UGround-V1-7B（获取于 2026-10-16T06:50:49Z；SHA-256：080c9245276e9ffe5911551a66acd7e91b478f85b96c795d6079465d92580f18）

---

## UGround-V1-72B

UGround-V1-72B 基于 Qwen2-VL，用于定位 GUI 截图中的目标；项目发布了模型权重，并报告了移动端、桌面端和网页界面的评估结果。

- 目录页面：https://awesomecua.com/resources/url-7ea46aa7d2d4470bb1f8/
- 原始来源：https://huggingface.co/osunlp/UGround-V1-72B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、网页、桌面
- 主题：GUI 定位、界面理解、评测
- 证据核查日期：2026-11-09T05:05:04Z
- ID：url:7ea46aa7d2d4470bb1f8

### 范围记录

The repository lists sharded safetensors weights and tokenizer files. Its card links to the UGround code repository and specifies the Tongyi Qianwen license.

- 完整记录 JSON：https://awesomecua.com/resources/url-7ea46aa7d2d4470bb1f8/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：other — https://huggingface.co/osunlp/UGround-V1-72B

### 一手证据

- https://huggingface.co/api/models/osunlp/UGround-V1-72B（获取于 2026-11-09T05:05:04Z；SHA-256：e0f71e62a25d8a2067823be2f2ed42d7cc35bc98665e97cacde4b48f6677b20d）
- https://huggingface.co/api/models/osunlp/UGround-V1-72B（获取于 2026-11-09T05:05:04Z；SHA-256：e0f71e62a25d8a2067823be2f2ed42d7cc35bc98665e97cacde4b48f6677b20d）

---

## UI-Act model

2023 年的 GUI 智能体模型：文本条件编码器—解码器 Transformer 通过卷积编码器读取全屏截图，按 4 像素网格预测左键点击，并在 GNOME Calculator 上演示。

- 目录页面：https://awesomecua.com/resources/github-tobiasnorlund-ui-act-model/
- 原始来源：https://github.com/TobiasNorlund/UI-Act-model
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Linux
- 主题：模仿学习、动作预测
- 证据核查日期：2026-10-18T15:58:37Z
- ID：github:tobiasnorlund/ui-act-model

### 范围记录

The demo model has 1.8M parameters and was trained from scratch by behavioural cloning to compute simple additions and subtractions of up to two-digit numbers in an open GNOME Calculator window on Ubuntu at 1920x1080; the README says it is brittle to new backgrounds, resolutions or other windows. In the demo runner each step grabs the full screen with PIL ImageGrab, resizes it to the configured 1024x576 input, and clicks the predicted position with pyautogui until the model predicts end. Neither the trained checkpoint (run.py expects data/gnome_calculator_model/epoch=14-step=1875.ckpt) nor the demonstration recordings (the data module reads screen.mp4 and events.jsonl under data/screen_recordings/) are in the repository; the README instead offers a VirtualBox VM image, whose HTTP HEAD response on 2026-10-18 reported 23,411,565,568 bytes, last modified 2023-10-11. The README's demo-video URL uses the path TobiasNorlund/UI-Act, a name that the GitHub API now resolves to a different repository (ID 993359793; this one is 702482392). There is no LICENSE file and the GitHub API reports no license. Nothing was run.

- 完整记录 JSON：https://awesomecua.com/resources/github-tobiasnorlund-ui-act-model/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 代码审核：The README names no license, the repository tree at d591416c has no LICENSE file, and the GitHub API reports no license.
  来源：https://raw.githubusercontent.com/TobiasNorlund/UI-Act-model/d591416c7203578c2daca748f4c441c6d0b27cfe/README.md

### 一手证据

- https://raw.githubusercontent.com/TobiasNorlund/UI-Act-model/d591416c7203578c2daca748f4c441c6d0b27cfe/README.md（获取于 2026-10-18T15:58:37Z；SHA-256：6b28fe66bb23f8cdc49643a3c3f054bf41be6f0cbf50ce445c3f87d68a8d27d5）
- https://raw.githubusercontent.com/TobiasNorlund/UI-Act-model/d591416c7203578c2daca748f4c441c6d0b27cfe/ui_act/tasks/gnome_calculator/run.py（获取于 2026-10-18T15:58:17Z；SHA-256：c0258669f916d3ad22c580fee4d1d078a8085be07c409675ca2790cc8198bd1f）
- https://raw.githubusercontent.com/TobiasNorlund/UI-Act-model/d591416c7203578c2daca748f4c441c6d0b27cfe/ui_act/model.py（获取于 2026-10-18T15:58:18Z；SHA-256：433eac64661a471176012dc0a1956ba63cb38a23dcd64956b9ffc17511388fbd）
- https://raw.githubusercontent.com/TobiasNorlund/UI-Act-model/d591416c7203578c2daca748f4c441c6d0b27cfe/ui_act/tasks/gnome_calculator/data.py（获取于 2026-10-18T15:58:18Z；SHA-256：7fdd36de702b677d760fb7fe9767d84ceb2a4c9bf44af68118f4b7ade6d4c977）
- https://raw.githubusercontent.com/TobiasNorlund/UI-Act-model/d591416c7203578c2daca748f4c441c6d0b27cfe/data/gnome_calculator_model/model_config.json（获取于 2026-10-18T15:58:18Z；SHA-256：cd1a070afc47753b786eab78a678082b42902d6810f1c99bf3303c7ec72f6ddd）

---

## UI-Genie Agent 3B

基于 Qwen2.5-VL-3B 的移动端 GUI 操作模型，使用 AndroidControl、AMEX、AndroidLab 和 UI-Genie 合成轨迹微调，预测应用启动、点击、滑动、输入和系统按键操作。

- 目录页面：https://awesomecua.com/resources/url-43d811a5957d8effb7ed/
- 原始来源：https://huggingface.co/HanXiao1999/UI-Genie-Agent-3B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：手机操作、模仿学习、动作预测
- 证据核查日期：2026-10-18T15:58:45Z
- ID：url:43d811a5957d8effb7ed

### 范围记录

The manifest lists two Safetensors shards. Unlike the 7B card, this card declares no license and the Hub repository has no license file, so the weights license stays unknown; the GitHub README's MIT statement is not applied to the weights. The card's action table accepts coordinate or Set-of-Mark targets. AndroidControl and AndroidLab scores are publisher claims.

- 完整记录 JSON：https://awesomecua.com/resources/url-43d811a5957d8effb7ed/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 权重审核：The model card declares no license in its metadata or text and the Hub file list has no license file, so no weights grant is established; the GitHub README's MIT statement concerns the project repository, not these weights.
  来源：https://huggingface.co/HanXiao1999/UI-Genie-Agent-3B/raw/c309a7e87d3f10b2a21e6510eb5d5995e9bda168/README.md, https://huggingface.co/api/models/HanXiao1999/UI-Genie-Agent-3B

### 一手证据

- https://huggingface.co/HanXiao1999/UI-Genie-Agent-3B/raw/c309a7e87d3f10b2a21e6510eb5d5995e9bda168/README.md（获取于 2026-10-18T15:58:45Z；SHA-256：6883ee5efc983d8f50f700e0ac2e22f62e8e5b489044299868a672bb6d1a334b）
- https://huggingface.co/api/models/HanXiao1999/UI-Genie-Agent-3B（获取于 2026-10-18T15:58:45Z；SHA-256：550364016847496bb210e625d6cc867939065a1b8b5543a9f53ef784e74f9cff）
- https://huggingface.co/HanXiao1999/UI-Genie-Agent-3B/raw/c309a7e87d3f10b2a21e6510eb5d5995e9bda168/config.json（获取于 2026-10-18T15:58:45Z；SHA-256：71f575aa0582eddbdbb5e231685c8f6868e9acaefa333ea448eb0e9389f3a900）
- https://raw.githubusercontent.com/Euphoria16/UI-Genie/f00ad4e85a98f3975f50071213a91ced3474b32c/README.md（获取于 2026-10-18T15:58:46Z；SHA-256：e08569bd9d8a6ff44537d4fe69243ddfeb8a41ae5c9f87ef84af50a67c64c726）

---

## UI-Genie Agent 7B

基于 Qwen2.5-VL 的移动端动作模型，使用现有轨迹和 UI-Genie 框架生成的奖励引导合成轨迹训练。

- 目录页面：https://awesomecua.com/resources/url-6d959b58bd4a2e98e417/
- 原始来源：https://huggingface.co/HanXiao1999/UI-Genie-Agent-7B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：手机操作、模仿学习、动作预测
- 证据核查日期：2026-10-17T04:03:41Z
- ID：url:6d959b58bd4a2e98e417

### 范围记录

Four public safetensors shards are present and the card declares MIT. Its training-data metadata/link uses UI-Genie-Agent-5k while prose labels it 16k; no precise training-set relationship or count is asserted across those inconsistent references. Larger announced models are not counted as released.

- 完整记录 JSON：https://awesomecua.com/resources/url-6d959b58bd4a2e98e417/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：mit — https://huggingface.co/HanXiao1999/UI-Genie-Agent-7B/raw/main/README.md

### 一手证据

- https://huggingface.co/HanXiao1999/UI-Genie-Agent-7B/raw/main/README.md（获取于 2026-10-17T04:03:41Z；SHA-256：3d4e2deda3e8ecc2e6bbba732c01a84dee2443bb7132ef1aeae444f001d23d69）
- https://huggingface.co/api/models/HanXiao1999/UI-Genie-Agent-7B（获取于 2026-10-17T04:03:41Z；SHA-256：20e47378595ed007766a135c37fe6709d8853a780ecd5ef56792f0b88c05aeff）
- https://huggingface.co/HanXiao1999/UI-Genie-Agent-7B/raw/main/README.md（获取于 2026-10-17T04:03:41Z；SHA-256：3d4e2deda3e8ecc2e6bbba732c01a84dee2443bb7132ef1aeae444f001d23d69）

---

## UI-Ins-32B

用于根据指令定位界面元素的 GUI 定位模型检查点；训练结合多样化指令表述和强化学习。

- 目录页面：https://awesomecua.com/resources/url-4fada3187f0d1d1efbe5/
- 原始来源：https://huggingface.co/Tongyi-MiA/UI-Ins-32B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：GUI 定位、强化学习、界面理解
- 证据核查日期：2026-11-09T05:05:15Z
- ID：url:4fada3187f0d1d1efbe5

### 范围记录

The repository contains safetensors checkpoint shards. The card names Qwen/Qwen2.5-VL-32B-Instruct as the base model and declares a CC-BY-NC-SA 4.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-4fada3187f0d1d1efbe5/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：cc-by-nc-sa-4.0 — https://huggingface.co/Tongyi-MiA/UI-Ins-32B

### 一手证据

- https://huggingface.co/api/models/Tongyi-MiA/UI-Ins-32B（获取于 2026-11-09T05:05:15Z；SHA-256：12966d31a45db818cdc985afd62e882c51aa9c9417b8acef4db8103aef1daff3）
- https://huggingface.co/api/models/Tongyi-MiA/UI-Ins-32B（获取于 2026-11-09T05:05:15Z；SHA-256：12966d31a45db818cdc985afd62e882c51aa9c9417b8acef4db8103aef1daff3）

---

## UI-Ins-7B

UI-Ins-7B 是界面定位模型，通过多样化指令和强化学习训练，为智能体操作定位界面元素。

- 目录页面：https://awesomecua.com/resources/url-62cf0bee7a14cfbc84a0/
- 原始来源：https://huggingface.co/Tongyi-MiA/UI-Ins-7B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：GUI 定位、强化学习、手机操作
- 证据核查日期：2026-11-09T05:05:20Z
- ID：url:62cf0bee7a14cfbc84a0

### 范围记录

The card names Qwen2.5-VL-7B-Instruct as its base model and declares a CC-BY-NC-SA 4.0 license. Its sample inference script sets MODEL_PATH to the base model.

- 完整记录 JSON：https://awesomecua.com/resources/url-62cf0bee7a14cfbc84a0/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：cc-by-nc-sa-4.0 — https://huggingface.co/Tongyi-MiA/UI-Ins-7B

### 一手证据

- https://huggingface.co/api/models/Tongyi-MiA/UI-Ins-7B（获取于 2026-11-09T05:05:20Z；SHA-256：703462c6568726d6a0b8c8ebb528a8e0b2adefd62066f5d901fc569474f90a89）
- https://huggingface.co/api/models/Tongyi-MiA/UI-Ins-7B（获取于 2026-11-09T05:05:20Z；SHA-256：703462c6568726d6a0b8c8ebb528a8e0b2adefd62066f5d901fc569474f90a89）

---

## UI-R1 3B

通过强化学习训练、用于预测 GUI 操作的 Qwen2.5-VL 检查点，并在移动端、桌面端和网页端定位任务上进行评估。

- 目录页面：https://awesomecua.com/resources/url-f13474d7aa734a30624d/
- 原始来源：https://huggingface.co/LZXzju/Qwen2.5-VL-3B-UI-R1
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、桌面、Android
- 主题：GUI 定位、强化学习、动作预测
- 证据核查日期：2026-10-17T02:03:33Z
- ID：url:f13474d7aa734a30624d

### 范围记录

Two safetensors shards and tokenizer/configuration files are publicly ungated. The model card declares MIT; upstream base-model terms are separate. The mutable card compares v1, v2 and UI-R1-E results with incomplete commit pinning; this record identifies the Hub release.

- 完整记录 JSON：https://awesomecua.com/resources/url-f13474d7aa734a30624d/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：mit — https://huggingface.co/LZXzju/Qwen2.5-VL-3B-UI-R1/raw/main/README.md

### 一手证据

- https://huggingface.co/LZXzju/Qwen2.5-VL-3B-UI-R1/raw/main/README.md（获取于 2026-10-17T02:03:33Z；SHA-256：620fbee20a6002bbc13562030ce4988d41ef17b0c033ec6872d83741f597adb8）
- https://huggingface.co/api/models/LZXzju/Qwen2.5-VL-3B-UI-R1（获取于 2026-10-17T02:03:33Z；SHA-256：6a206702a1a4faef428460e07f52aaf8fd1f1a144d711d807ca42479b248f697）
- https://raw.githubusercontent.com/lll6gg/UI-R1/HEAD/README.md（获取于 2026-10-16T06:36:00Z；SHA-256：f55ac6a0c50d298d46c5f7083a0879959fd7cd3c1d91496af295ebf2afcc13a3）
- https://huggingface.co/LZXzju/Qwen2.5-VL-3B-UI-R1/raw/main/README.md（获取于 2026-10-17T02:03:33Z；SHA-256：620fbee20a6002bbc13562030ce4988d41ef17b0c033ec6872d83741f597adb8）

---

## UI-S1 7B

采用半在线强化学习训练的移动端 GUI 检查点，利用离线轨迹改进多轮操作预测。

- 目录页面：https://awesomecua.com/resources/url-1c4ee99a9a55ae71a7ac/
- 原始来源：https://huggingface.co/mPLUG/UI-S1-7B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：强化学习、手机操作、动作预测
- 证据核查日期：2026-10-17T04:03:41Z
- ID：url:1c4ee99a9a55ae71a7ac

### 范围记录

Four public safetensors shards are present. The card declares Apache-2.0 for the weights. The project publishes only a portion of its training data.

- 完整记录 JSON：https://awesomecua.com/resources/url-1c4ee99a9a55ae71a7ac/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/mPLUG/UI-S1-7B/raw/main/README.md

### 一手证据

- https://huggingface.co/mPLUG/UI-S1-7B/raw/main/README.md（获取于 2026-10-17T04:03:41Z；SHA-256：341abd3833131080682b27fe0b79e310d7cf9465602b77b8e399e45200552d61）
- https://huggingface.co/api/models/mPLUG/UI-S1-7B（获取于 2026-10-17T04:03:40Z；SHA-256：d0c25fa2fad8372ffc8b51b63701c7e5548cca08a612c0081c4c317f9532894d）
- https://raw.githubusercontent.com/X-PLUG/MobileAgent/HEAD/UI-S1/README.md（获取于 2026-10-17T04:06:57Z；SHA-256：f668c890a5a87953a243715d0d47367c23f0c99b524d80f48bbdde8163f3e942）
- https://huggingface.co/mPLUG/UI-S1-7B/raw/main/README.md（获取于 2026-10-17T04:03:41Z；SHA-256：341abd3833131080682b27fe0b79e310d7cf9465602b77b8e399e45200552d61）

---

## UI-TARS 7B SFT

7B SFT 版 UI-TARS 检查点采用 Qwen2-VL 架构，以 FP32 存储，是用于网页、移动端和桌面的原生 GUI 智能体模型，可感知屏幕、定位元素并执行多步操作。

- 目录页面：https://awesomecua.com/resources/url-dbd880ec31b412487945/
- 原始来源：https://huggingface.co/ByteDance-Seed/UI-TARS-7B-SFT
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、网页、桌面、Android
- 主题：GUI 定位、界面理解、动作预测
- 证据核查日期：2026-10-18T11:34:11Z
- ID：url:dbd880ec31b412487945

### 范围记录

Hub API at revision 3434901a lists seven F32 safetensors shards (about 8.29B parameters) in the Qwen2VLForConditionalGeneration architecture; access is open. The card declares Apache-2.0 for the checkpoint. The card's sibling links use the earlier bytedance-research namespace. Its card reports 17.7 on OSWorld with a 15-step budget and 33.0 on AndroidWorld for this checkpoint.

- 完整记录 JSON：https://awesomecua.com/resources/url-dbd880ec31b412487945/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/ByteDance-Seed/UI-TARS-7B-SFT/raw/3434901a9dd04dd3625617d839a5724fe5e2db20/README.md

### 一手证据

- https://huggingface.co/ByteDance-Seed/UI-TARS-7B-SFT/raw/3434901a9dd04dd3625617d839a5724fe5e2db20/README.md（获取于 2026-10-18T11:34:11Z；SHA-256：4a0e03cea82f6d539b7d618e5df4648232c108dda3d0321a6adbbf29dd4db00e）
- https://huggingface.co/api/models/ByteDance-Seed/UI-TARS-7B-SFT（获取于 2026-10-18T11:34:12Z；SHA-256：593a8f425ecb4c6302873bbb7bda9dec0c66bcb973860d8919a1b4ed6709f2a6）
- https://huggingface.co/ByteDance-Seed/UI-TARS-7B-SFT/raw/3434901a9dd04dd3625617d839a5724fe5e2db20/README.md（获取于 2026-10-18T11:34:11Z；SHA-256：4a0e03cea82f6d539b7d618e5df4648232c108dda3d0321a6adbbf29dd4db00e）

---

## UI-Venus

UI-Venus 是 GUI 智能体模型系列；其中 9B 和 27B 规模的 UI-Venus-2 以单个端到端智能体操作移动端、网页和桌面端，并通过基于关键点的多评审任务验证进行训练。

- 目录页面：https://awesomecua.com/resources/github-inclusionai-ui-venus/
- 原始来源：https://github.com/inclusionAI/UI-Venus
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：GUI 定位、规划
- 证据核查日期：2026-10-16T06:35:59Z
- ID：github:inclusionai/ui-venus

- 完整记录 JSON：https://awesomecua.com/resources/github-inclusionai-ui-venus/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/inclusionAI/UI-Venus/HEAD/README.md（获取于 2026-10-16T06:35:59Z；SHA-256：5703c892aaf99d250bf59edf52d359560a80d443f2be13c7aa76af0c1a7f1d67）

---

## UI-Venus 2 9B

UI-Venus 2 是基于 Qwen3.5-9B 微调的 GUI 智能体检查点，采用 Qwen3.5 多模态架构，约有 9.4B 个 BF16 参数，可通过 Transformers 加载以执行图文到文本任务。

- 目录页面：https://awesomecua.com/resources/url-611df37e5f3caa6befd7/
- 原始来源：https://huggingface.co/inclusionAI/UI-Venus-2-9b
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：GUI 定位、规划
- 证据核查日期：2026-10-16T06:50:49Z
- ID：url:611df37e5f3caa6befd7

- 完整记录 JSON：https://awesomecua.com/resources/url-611df37e5f3caa6befd7/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/models/inclusionAI/UI-Venus-2-9b（获取于 2026-10-16T06:50:49Z；SHA-256：0097be2c0e5c3f3c8aace10de835b0d7c1075531cc7823287c3f5488aebaea08）
- https://huggingface.co/api/models/inclusionAI/UI-Venus-2-9b（获取于 2026-10-16T06:50:49Z；SHA-256：0097be2c0e5c3f3c8aace10de835b0d7c1075531cc7823287c3f5488aebaea08）
- https://huggingface.co/api/models/inclusionAI/UI-Venus-2-9B（获取于 2026-10-17T19:15:02Z；SHA-256：3ec7929329e8e1b09f31dee4a3e67128d68cddc95220a5944f4cd6102dae327e）
- https://huggingface.co/api/models/inclusionAI/UI-Venus-2-9b（获取于 2026-10-17T19:15:03Z；SHA-256：3ec7929329e8e1b09f31dee4a3e67128d68cddc95220a5944f4cd6102dae327e）

---

## UI2Code_N

一个将界面截图转换为代码、并支持迭代式界面编辑与完善的视觉语言模型。模型卡提供了从截图生成 HTML 的推理示例。

- 目录页面：https://awesomecua.com/resources/url-b04608609a8c392d110b/
- 原始来源：https://huggingface.co/zai-org/UI2Code_N
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：界面理解、界面设计、强化学习
- 证据核查日期：2026-11-09T19:57:58Z
- ID：url:b04608609a8c392d110b

### 范围记录

The card identifies GLM-4.1V-9B-Base as the backbone and gives a Transformers inference example. It declares an MIT license.

- 完整记录 JSON：https://awesomecua.com/resources/url-b04608609a8c392d110b/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：mit — https://huggingface.co/zai-org/UI2Code_N

### 一手证据

- https://huggingface.co/api/models/zai-org/UI2Code_N（获取于 2026-11-09T19:57:58Z；SHA-256：3fa7d59a5d97b05001ceea60c62e8bfc0d34355b5ec0d0b490d58ebe3bfbc30e）
- https://huggingface.co/api/models/zai-org/UI2Code_N（获取于 2026-11-09T19:57:58Z；SHA-256：3fa7d59a5d97b05001ceea60c62e8bfc0d34355b5ec0d0b490d58ebe3bfbc30e）

---

## UIX-Qwen2

使用 MultiUI 训练的视觉语言检查点，用于理解文本密集的网页及执行界面任务。

- 目录页面：https://awesomecua.com/resources/url-54997a3c67e54abdf319/
- 原始来源：https://huggingface.co/neulab/UIX-Qwen2
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：界面理解、GUI 定位
- 证据核查日期：2026-10-17T04:03:41Z
- ID：url:54997a3c67e54abdf319

### 范围记录

Four public safetensors shards are present. The model card declares odc-by, a data-oriented license designation; it is preserved as a publisher declaration rather than replaced with the code or base-model license. No independent legal scope or evaluation result is asserted.

- 完整记录 JSON：https://awesomecua.com/resources/url-54997a3c67e54abdf319/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：odc-by — https://huggingface.co/neulab/UIX-Qwen2/raw/main/README.md

### 一手证据

- https://huggingface.co/neulab/UIX-Qwen2/raw/main/README.md（获取于 2026-10-17T04:03:41Z；SHA-256：91f90e329b76c2ded26a62c41f648a73e685116aa732c86c201592e46a941c44）
- https://huggingface.co/api/models/neulab/UIX-Qwen2（获取于 2026-10-17T04:03:40Z；SHA-256：19bd4d126f3ccb4cb3049125d384c76964bd3169c051369ac0c7b64cef9f48b4）
- https://raw.githubusercontent.com/neulab/multiui/HEAD/README.md（获取于 2026-10-16T06:36:01Z；SHA-256：fe0c03fe73529a29788d559103c4aed48dca6ed9ba3bfd5f151f902fa8858b38）
- https://huggingface.co/neulab/UIX-Qwen2/raw/main/README.md（获取于 2026-10-17T04:03:41Z；SHA-256：91f90e329b76c2ded26a62c41f648a73e685116aa732c86c201592e46a941c44）

---

## UIX-Qwen2-Mind2Web

UIX-Qwen2 在 Mind2Web 训练集上进一步微调；MultiUI 论文评估其根据截图、任务和先前操作预测下一步网页操作的能力。

- 目录页面：https://awesomecua.com/resources/url-592e434848a1514efef0/
- 原始来源：https://huggingface.co/neulab/UIX-Qwen2-Mind2Web
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、动作预测、GUI 定位
- 证据核查日期：2026-10-18T16:06:26Z
- ID：url:592e434848a1514efef0

### 范围记录

Hub API at revision cf1654a2 lists four root BF16 safetensors shards (about 8.03B parameters) whose config declares LlavaQwenForCausalLM with the google/siglip-so400m-patch14-384 vision tower; the repository is publicly accessible. It also keeps two intermediate training folders, checkpoint-565 and checkpoint-1130, each with its own weight shards plus scheduler, RNG and trainer state. The MultiUI README lists this repository as UIX-Qwen2-M2W on Qwen2-7B-Instruct. The paper marks -M2W models as further fine-tuned on the Mind2Web training set and reports publisher figures for step success rate and element accuracy for UIX-Qwen2-M2W on the cross-task, cross-website and cross-domain splits. The card declares odc-by, a data-oriented designation kept as the publisher's weight declaration; base-model terms are not resolved.

- 完整记录 JSON：https://awesomecua.com/resources/url-592e434848a1514efef0/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：odc-by — https://huggingface.co/neulab/UIX-Qwen2-Mind2Web/raw/cf1654a2df366e87c4ec80009bb958395afe3c35/README.md

### 一手证据

- https://huggingface.co/neulab/UIX-Qwen2-Mind2Web/raw/cf1654a2df366e87c4ec80009bb958395afe3c35/README.md（获取于 2026-10-18T16:06:26Z；SHA-256：62dc9d53441e2075355c39922ba4d158e488658c11950c3748676d1afdf287fa）
- https://huggingface.co/api/models/neulab/UIX-Qwen2-Mind2Web/revision/cf1654a2df366e87c4ec80009bb958395afe3c35（获取于 2026-10-18T16:05:53Z；SHA-256：ab55b10ee9e1daedda116e1ecd3dfa5fa6d37b2f0c62403c79c64dd57e1d9cd3）
- https://raw.githubusercontent.com/neulab/MultiUI/e261d8ad3d329a8b6e719cfd4f6a6d8e6df3cede/README.md（获取于 2026-10-18T16:02:59Z；SHA-256：fe0c03fe73529a29788d559103c4aed48dca6ed9ba3bfd5f151f902fa8858b38）
- https://arxiv.org/html/2410.13824v3（获取于 2026-10-18T16:03:00Z；SHA-256：383ada0c47d09acea6b865ed67571c9540b2d602bd6b0ea8ad3130121efd190c）
- https://huggingface.co/neulab/UIX-Qwen2-Mind2Web/raw/cf1654a2df366e87c4ec80009bb958395afe3c35/config.json（获取于 2026-10-18T16:06:17Z；SHA-256：5deaf05d45d21acaca2d43d129ffadfbda840902167dbaa83a86004d133f2c20）
- https://huggingface.co/neulab/UIX-Qwen2-Mind2Web/raw/cf1654a2df366e87c4ec80009bb958395afe3c35/README.md（获取于 2026-10-18T16:06:26Z；SHA-256：62dc9d53441e2075355c39922ba4d158e488658c11950c3748676d1afdf287fa）

---

## V-Droid-8B-0323

这款用于 V-Droid Android 图形界面智能体的验证模型根据设备描述和任务为候选动作评分，帮助选择下一步手机操作。

- 目录页面：https://awesomecua.com/resources/url-82adab61eb515398da48/
- 原始来源：https://huggingface.co/V-Droid/V-Droid-8B-0323
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：手机操作、动作预测、奖励模型、效率
- 证据核查日期：2026-11-09T19:57:04Z
- ID：url:82adab61eb515398da48

### 范围记录

The repository listing includes adapter weights and a value-head file. The card says the model was fine-tuned from Llama-3.1-8B-4bit and declares Apache-2.0.

- 完整记录 JSON：https://awesomecua.com/resources/url-82adab61eb515398da48/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/V-Droid/V-Droid-8B-0323

### 一手证据

- https://huggingface.co/api/models/V-Droid/V-Droid-8B-0323（获取于 2026-11-09T19:57:04Z；SHA-256：0be9596c50a0c542ab8c9f5649204c5cd1ef4b8af119df5950a56828aee48e80）
- https://huggingface.co/api/models/V-Droid/V-Droid-8B-0323（获取于 2026-11-09T19:57:04Z；SHA-256：0be9596c50a0c542ab8c9f5649204c5cd1ef4b8af119df5950a56828aee48e80）

---

## VeriOS-Agent-32B

VeriOS-Agent-32B 是以 Qwen2.5-VL-32B 为初始模型的提问式操作系统智能体检查点，发布了用于 VeriOS 论文所述交互方法的模型权重。

- 目录页面：https://awesomecua.com/resources/url-97040677a731edfedc2d/
- 原始来源：https://huggingface.co/wuuuuuz/VeriOS-Agent-32B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：人机协作、安全与防护、动作预测
- 证据核查日期：2026-11-09T05:04:58Z
- ID：url:97040677a731edfedc2d

### 范围记录

The repository contains sharded safetensors weights, a model index and tokenizer files. The card names Qwen2.5-VL-32B as the initial model.

- 完整记录 JSON：https://awesomecua.com/resources/url-97040677a731edfedc2d/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/models/wuuuuuz/VeriOS-Agent-32B（获取于 2026-11-09T05:04:58Z；SHA-256：b83a1bb40de44e1b7d5a9cf14278f261d26d9b7cfdc6451bf7322da4c9f4c83c）
- https://huggingface.co/api/models/wuuuuuz/VeriOS-Agent-32B（获取于 2026-11-09T05:04:58Z；SHA-256：b83a1bb40de44e1b7d5a9cf14278f261d26d9b7cfdc6451bf7322da4c9f4c83c）

---

## Vision-ml

Vision-ml 在移动应用弹窗截图中定位关闭控件，并返回用于自动化操作的屏幕坐标；仓库包含预测代码和预训练模型。

- 目录页面：https://awesomecua.com/resources/github-meituan-dianping-vision/
- 原始来源：https://github.com/Meituan-Dianping/vision
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：GUI 定位、界面理解、自动化
- 证据核查日期：2026-11-09T19:56:59Z
- ID：github:meituan-dianping/vision

### 范围记录

The README describes Python-script and web-server prediction paths, training images and model-training instructions.

- 完整记录 JSON：https://awesomecua.com/resources/github-meituan-dianping-vision/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/Meituan-Dianping/vision/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/Meituan-Dianping/vision/HEAD/README.md（获取于 2026-11-09T19:56:59Z；SHA-256：77ad6833898d2a344431067fe8f69d3b4b8855aea0deccb6737fff240b7d15a1）
- https://raw.githubusercontent.com/Meituan-Dianping/vision/HEAD/LICENSE（获取于 2026-11-09T14:20:49Z；SHA-256：344f21123f798b47f16cb7b67c7d4bdb06d920f21d78bc2a2e729eaf4c65cb30）

---

## WebJudge 7B

视觉轨迹评判模型，保留选定的中间截图，以评估网页智能体是否完成任务。

- 目录页面：https://awesomecua.com/resources/url-772161f06c2b3d4978b5/
- 原始来源：https://huggingface.co/osunlp/WebJudge-7B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、奖励模型、网页导航
- 证据核查日期：2026-10-17T04:03:41Z
- ID：url:772161f06c2b3d4978b5

### 范围记录

Four public safetensors shards are present. Apache-2.0 is declared for the weights. This is an evaluator checkpoint; human-agreement rates measure agreement with human labels.

- 完整记录 JSON：https://awesomecua.com/resources/url-772161f06c2b3d4978b5/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/osunlp/WebJudge-7B/raw/main/README.md

### 一手证据

- https://huggingface.co/osunlp/WebJudge-7B/raw/main/README.md（获取于 2026-10-17T04:03:41Z；SHA-256：425f11651cdae09997c1b038cdc9c091778c35a51b8de88140fc6dc935b8bb64）
- https://huggingface.co/api/models/osunlp/WebJudge-7B（获取于 2026-10-17T04:03:41Z；SHA-256：2eebc1f909263be946057306b41d733e29f0f32337dae02da4e989b5477cf31f）
- https://huggingface.co/osunlp/WebJudge-7B/raw/main/README.md（获取于 2026-10-17T04:03:41Z；SHA-256：425f11651cdae09997c1b038cdc9c091778c35a51b8de88140fc6dc935b8bb64）

---

## WebRL-GLM-4-9B

基于 GLM 的 WebRL 模型，可在五个 WebArena 网站执行浏览器任务；模型卡报告了 WebArena-Lite 的评测结果。

- 目录页面：https://awesomecua.com/resources/url-f979ca583090405aadee/
- 原始来源：https://huggingface.co/THUDM/webrl-glm-4-9b
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、强化学习、评测
- 证据核查日期：2026-11-09T05:05:20Z
- ID：url:f979ca583090405aadee

### 范围记录

The repository lists sharded safetensors weights, a tokenizer and model configuration files. The card names THUDM/glm-4-9b as its base model and declares its license as other.

- 完整记录 JSON：https://awesomecua.com/resources/url-f979ca583090405aadee/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：other — https://huggingface.co/THUDM/webrl-glm-4-9b

### 一手证据

- https://huggingface.co/api/models/THUDM/webrl-glm-4-9b（获取于 2026-11-09T05:05:20Z；SHA-256：a3abddb0b1c0cf3547eed2198b116474845f4453cefc96a975e8841f884e98b3）
- https://huggingface.co/api/models/THUDM/webrl-glm-4-9b（获取于 2026-11-09T05:05:20Z；SHA-256：a3abddb0b1c0cf3547eed2198b116474845f4453cefc96a975e8841f884e98b3）
- https://huggingface.co/api/models/THUDM/webrl-glm-4-9b（获取于 2026-11-09T05:26:16Z；SHA-256：a3abddb0b1c0cf3547eed2198b116474845f4453cefc96a975e8841f884e98b3）
- https://huggingface.co/api/models/zai-org/webrl-glm-4-9b（获取于 2026-11-09T05:26:16Z；SHA-256：a3abddb0b1c0cf3547eed2198b116474845f4453cefc96a975e8841f884e98b3）

---

## webrl-llama-3.1-70b

基于 Llama-3.1-70B 发布的 WebRL 网页操作模型，面向五个 WebArena 网站。模型卡报告了 WebArena-Lite 结果，并指向推理要求。

- 目录页面：https://awesomecua.com/resources/url-5371bf588e7790a66ff0/
- 原始来源：https://huggingface.co/THUDM/webrl-llama-3.1-70b
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、强化学习、评测
- 证据核查日期：2026-11-09T05:05:10Z
- ID：url:5371bf588e7790a66ff0

### 范围记录

The repository lists model weight shards and configuration files. The card identifies meta/Llama-3.1-70B as its base model and marks its license as 'other'.

- 完整记录 JSON：https://awesomecua.com/resources/url-5371bf588e7790a66ff0/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：other — https://huggingface.co/THUDM/webrl-llama-3.1-70b

### 一手证据

- https://huggingface.co/api/models/THUDM/webrl-llama-3.1-70b（获取于 2026-11-09T05:05:10Z；SHA-256：eff7730dcf823e681c21b2c468cf6bc063cea98c79dd1102c63d18f097d4f9c0）
- https://huggingface.co/api/models/THUDM/webrl-llama-3.1-70b（获取于 2026-11-09T05:05:10Z；SHA-256：eff7730dcf823e681c21b2c468cf6bc063cea98c79dd1102c63d18f097d4f9c0）
- https://huggingface.co/api/models/THUDM/webrl-llama-3.1-70b（获取于 2026-11-09T05:25:54Z；SHA-256：eff7730dcf823e681c21b2c468cf6bc063cea98c79dd1102c63d18f097d4f9c0）
- https://huggingface.co/api/models/zai-org/webrl-llama-3.1-70b（获取于 2026-11-09T05:25:54Z；SHA-256：eff7730dcf823e681c21b2c468cf6bc063cea98c79dd1102c63d18f097d4f9c0）

---

## WebThinker-QwQ-32B

WebThinker-QwQ-32B 是一款已发布的推理模型，可在撰写研究报告时搜索和浏览网页。模型卡介绍了利用推理轨迹生成的偏好数据进行训练的方法。

- 目录页面：https://awesomecua.com/resources/url-e058cc2487a805f976fd/
- 原始来源：https://huggingface.co/lixiaoxi45/WebThinker-QwQ-32B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、规划、强化学习
- 证据核查日期：2026-11-09T19:57:08Z
- ID：url:e058cc2487a805f976fd

### 范围记录

The repository lists model weight shards and tokenizer files. The card declares an Apache 2.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-e058cc2487a805f976fd/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/lixiaoxi45/WebThinker-QwQ-32B

### 一手证据

- https://huggingface.co/api/models/lixiaoxi45/WebThinker-QwQ-32B（获取于 2026-11-09T19:57:08Z；SHA-256：003ae8270255674f17dd313e0848741da5729127e3cae19c80b0c86c20815be5）
- https://huggingface.co/api/models/lixiaoxi45/WebThinker-QwQ-32B（获取于 2026-11-09T19:57:08Z；SHA-256：003ae8270255674f17dd313e0848741da5729127e3cae19c80b0c86c20815be5）

---

## WebThinker-R1-32B

用于网页研究的推理模型权重，通过交互式点击搜索和浏览页面，并利用收集的信息起草报告。

- 目录页面：https://awesomecua.com/resources/url-8076f65dc82b4dcea18c/
- 原始来源：https://huggingface.co/lixiaoxi45/WebThinker-R1-32B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、规划、强化学习
- 证据核查日期：2026-11-09T19:58:04Z
- ID：url:8076f65dc82b4dcea18c

### 范围记录

The card identifies this as a 32B parameter model and declares an Apache License 2.0 release. It cites the WebThinker paper.

- 完整记录 JSON：https://awesomecua.com/resources/url-8076f65dc82b4dcea18c/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/lixiaoxi45/WebThinker-R1-32B

### 一手证据

- https://huggingface.co/api/models/lixiaoxi45/WebThinker-R1-32B（获取于 2026-11-09T19:58:04Z；SHA-256：07ce80c79e7b3cbd7e779c72a039d8e6daa9ea9b591250f640fb27b88ac9c4a0）
- https://huggingface.co/api/models/lixiaoxi45/WebThinker-R1-32B（获取于 2026-11-09T19:58:04Z；SHA-256：07ce80c79e7b3cbd7e779c72a039d8e6daa9ea9b591250f640fb27b88ac9c4a0）

---

## WebThinker-R1-7B

一款已发布的 7B 推理模型，用于网页研究，可搜索网页、通过交互元素浏览页面，并撰写报告。

- 目录页面：https://awesomecua.com/resources/url-564c980a531e7204447c/
- 原始来源：https://huggingface.co/lixiaoxi45/WebThinker-R1-7B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、规划、强化学习
- 证据核查日期：2026-11-09T19:56:28Z
- ID：url:564c980a531e7204447c

### 范围记录

The repository lists model weight shards and tokenizer files. The card describes iterative online DPO training and declares an Apache 2.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-564c980a531e7204447c/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/lixiaoxi45/WebThinker-R1-7B

### 一手证据

- https://huggingface.co/api/models/lixiaoxi45/WebThinker-R1-7B（获取于 2026-11-09T19:56:28Z；SHA-256：f1948fa6be3295da60b0174956f8e6da7bcd78ccacc6d28d15f91c78f9d85a22）
- https://huggingface.co/api/models/lixiaoxi45/WebThinker-R1-7B（获取于 2026-11-09T19:56:28Z；SHA-256：f1948fa6be3295da60b0174956f8e6da7bcd78ccacc6d28d15f91c78f9d85a22）

---

## yolov11l-ui-elements-detection

一个 YOLO11 微调模型，可在 macOS 应用截图中定位五类界面元素，以支持生成无障碍元数据。

- 目录页面：https://awesomecua.com/resources/url-5d824526d56f179d3d51/
- 原始来源：https://huggingface.co/MacPaw/yolov11l-ui-elements-detection
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、macOS
- 主题：GUI 定位、界面理解
- 证据核查日期：2026-11-09T19:57:37Z
- ID：url:5d824526d56f179d3d51

### 范围记录

The release contains a .pt checkpoint and lists Screen2AX-Element as its training dataset. The card declares an AGPL-3.0 license and shows inference with Ultralytics.

- 完整记录 JSON：https://awesomecua.com/resources/url-5d824526d56f179d3d51/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：agpl-3.0 — https://huggingface.co/MacPaw/yolov11l-ui-elements-detection

### 一手证据

- https://huggingface.co/api/models/MacPaw/yolov11l-ui-elements-detection（获取于 2026-11-09T19:57:37Z；SHA-256：43b55afc25cc24dd456ff3bb2f6c155489612594deb94c7764f1e8e9b2e8ef7c）
- https://huggingface.co/api/models/MacPaw/yolov11l-ui-elements-detection（获取于 2026-11-09T19:57:37Z；SHA-256：43b55afc25cc24dd456ff3bb2f6c155489612594deb94c7764f1e8e9b2e8ef7c）
- https://huggingface.co/api/models/MacPaw/yolov11l-ui-elements-detection（获取于 2026-11-09T20:02:59Z；SHA-256：43b55afc25cc24dd456ff3bb2f6c155489612594deb94c7764f1e8e9b2e8ef7c）
- https://huggingface.co/api/models/macpaw-research/yolov11l-ui-elements-detection（获取于 2026-11-09T20:03:00Z；SHA-256：43b55afc25cc24dd456ff3bb2f6c155489612594deb94c7764f1e8e9b2e8ef7c）

---

## ZeroGUI-AndroidLab-7B

ZeroGUI-AndroidLab-7B 是 GUI 智能体模型权重，其训练流程会生成界面任务、依据截图估计奖励，并通过在线强化学习持续适应。

- 目录页面：https://awesomecua.com/resources/url-f75cab7180d8f5264606/
- 原始来源：https://huggingface.co/OpenGVLab/ZeroGUI-AndroidLab-7B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：强化学习、数据生成、奖励模型
- 证据核查日期：2026-11-09T05:05:18Z
- ID：url:f75cab7180d8f5264606

### 范围记录

The repository lists model weight shards and names ByteDance-Seed/UI-TARS-7B-DPO as its base model. The card declares an Apache-2.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-f75cab7180d8f5264606/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/OpenGVLab/ZeroGUI-AndroidLab-7B

### 一手证据

- https://huggingface.co/api/models/OpenGVLab/ZeroGUI-AndroidLab-7B（获取于 2026-11-09T05:05:18Z；SHA-256：5b91439037344829e9cf208738938ada2540b956e262252464758752090af141）
- https://huggingface.co/api/models/OpenGVLab/ZeroGUI-AndroidLab-7B（获取于 2026-11-09T05:05:18Z；SHA-256：5b91439037344829e9cf208738938ada2540b956e262252464758752090af141）

---

## ZeroGUI-OSWorld-7B

ZeroGUI 的 GUI 智能体检查点；其训练使用生成的界面任务，并根据交互轨迹截图估计奖励。

- 目录页面：https://awesomecua.com/resources/url-6ea345c7ba56049476e8/
- 原始来源：https://huggingface.co/OpenGVLab/ZeroGUI-OSWorld-7B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：强化学习、数据生成、奖励模型
- 证据核查日期：2026-11-09T05:05:16Z
- ID：url:6ea345c7ba56049476e8

### 范围记录

The repository contains safetensors weight shards and tokenizer files. The card names ByteDance-Seed/UI-TARS-7B-DPO as its base model and declares an Apache-2.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-6ea345c7ba56049476e8/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/OpenGVLab/ZeroGUI-OSWorld-7B

### 一手证据

- https://huggingface.co/api/models/OpenGVLab/ZeroGUI-OSWorld-7B（获取于 2026-11-09T05:05:16Z；SHA-256：709c47498a1731a5a85d987023ff2eff18fe42d1792796527bdb7c554a8719b9）
- https://huggingface.co/api/models/OpenGVLab/ZeroGUI-OSWorld-7B（获取于 2026-11-09T05:05:16Z；SHA-256：709c47498a1731a5a85d987023ff2eff18fe42d1792796527bdb7c554a8719b9）

---

## ZHEN-04/CaptchaAgent

ZHEN-04/CaptchaAgent 是一款在交互式 CAPTCHA 轨迹上训练的 9B 计算机操作策略模型。它将截图映射为工具调用，并提供 SFT 和强化学习检查点。

- 目录页面：https://awesomecua.com/resources/url-fb67af38dce972b398c3/
- 原始来源：https://huggingface.co/ZHEN-04/CaptchaAgent
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：动作预测、界面理解、强化学习、安全与防护
- 证据核查日期：2026-11-09T19:55:52Z
- ID：url:fb67af38dce972b398c3

### 范围记录

The page lists full bf16 weights, tokenizers, processors, and chat templates in SFT and RL subfolders. Access is manually gated under CC-BY-NC-4.0 terms.

- 完整记录 JSON：https://awesomecua.com/resources/url-fb67af38dce972b398c3/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：cc-by-nc-4.0 — https://huggingface.co/ZHEN-04/CaptchaAgent

### 一手证据

- https://huggingface.co/api/models/ZHEN-04/CaptchaAgent（获取于 2026-11-09T19:55:52Z；SHA-256：52fa568b43b85f62b3b377f5ec8baffc5da1d14fefd415941f3f2d593527a64f）
- https://huggingface.co/api/models/ZHEN-04/CaptchaAgent（获取于 2026-11-09T19:55:52Z；SHA-256：52fa568b43b85f62b3b377f5ec8baffc5da1d14fefd415941f3f2d593527a64f）

---

## ZonUI-3B checkpoint

基于 Qwen2.5-VL-3B 的 GUI 定位模型检查点，根据桌面端、移动端和网页截图及文本指令预测点击位置。

- 目录页面：https://awesomecua.com/resources/url-c8c046847f829fea4821/
- 原始来源：https://huggingface.co/zonghanHZH/ZonUI-3B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、桌面、网页
- 主题：GUI 定位、界面理解、效率
- 证据核查日期：2026-10-18T04:35:16Z
- ID：url:c8c046847f829fea4821

### 范围记录

The Hub manifest lists four-part PyTorch and Safetensors files as alternative representations of one checkpoint, plus configuration/tokenizer files. The card’s example rescales predicted locations through the resized image dimensions. Apache-2.0 is the model-card weight declaration; the separate code repository has no project-level license in the inspected tree.

- 完整记录 JSON：https://awesomecua.com/resources/url-c8c046847f829fea4821/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：Apache-2.0 — https://huggingface.co/zonghanHZH/ZonUI-3B/raw/07212ea7724a69400422571e0f6e053212e66fe6/README.md

- 权重审核：Publisher model-card declaration for the checkpoint; code and training-data terms are separate.
  来源：https://huggingface.co/zonghanHZH/ZonUI-3B/raw/07212ea7724a69400422571e0f6e053212e66fe6/README.md

### 一手证据

- https://huggingface.co/zonghanHZH/ZonUI-3B/raw/07212ea7724a69400422571e0f6e053212e66fe6/README.md（获取于 2026-10-18T04:35:16Z；SHA-256：0dcd557508c07c9569e642a0319e71162b50c7ac6a0449564760ac2d6fffb089）
- https://huggingface.co/api/models/zonghanHZH/ZonUI-3B（获取于 2026-10-18T04:33:22Z；SHA-256：c419027b878ed7ebebd91f89a7395506d2f2aa8e1745918833cf1bac9e0a054e）
- https://raw.githubusercontent.com/Han1018/ZonUI-3B/HEAD/README.md（获取于 2026-10-18T04:27:14Z；SHA-256：9918231748808ea1af93b559b0a511f1f9687689766a09b43c7726f14f27248b）
- https://api.github.com/repos/Han1018/ZonUI-3B（获取于 2026-10-17T15:37:02Z；SHA-256：7e3e63c1f2b38daaf4bb222b51fa5ae6594a0185e618723371e044bee6f05f7d）
- https://api.github.com/repos/Han1018/ZonUI-3B/git/trees/main?recursive=1（获取于 2026-10-18T04:25:20Z；SHA-256：d4c1500dbaceba738565d766e7b7453abbb6c0b12edaa34e5600d351214bfe4f）

---

## ACT-1

Adept 于 2022 年推出的 action transformer，曾通过演示视频展示 Chrome 扩展读取网页的自定义渲染结果，并点击、输入、滚动 UI 元素以完成文字请求。

- 目录页面：https://awesomecua.com/resources/url-f885d17601171253d25e/
- 原始来源：https://www.adept.ai/blog/act-1
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、动作预测
- 证据核查日期：2026-10-20T04:02:47Z
- ID：url:f885d17601171253d25e

### 范围记录

Announced by the Adept Team on 14 September 2022. The post shows sped-up demo videos only (a Salesforce workflow, spreadsheet work, tasks spanning several tools, looking up information online, and correcting a mistake after one piece of human feedback) and promises a later technical post. It names no weights, API, training data or benchmark results. The live page answers HTTP 403 to scripts (Cloudflare challenge), so the reviewed receipt is the 14 August 2025 Wayback capture.

- 完整记录 JSON：https://awesomecua.com/resources/url-f885d17601171253d25e/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://web.archive.org/web/20250814162158id_/https://www.adept.ai/blog/act-1（获取于 2026-10-20T04:02:47Z；SHA-256：2ae4f05ccf826141f5c315c977ebf6a058737f0760f55eb5f0125894d0b27fa0）

---

## ARPO UI-TARS-1.5-7B checkpoint

基于 UI-TARS-1.5-7B、使用 ARPO 在 OSWorld 桌面任务上训练的检查点。

- 目录页面：https://awesomecua.com/resources/url-db6fc5f29f186d13991c/
- 原始来源：https://huggingface.co/Fanbin/ARPO_UITARS1.5_7B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Linux
- 主题：强化学习、动作预测
- 证据核查日期：2026-10-18T04:27:12Z
- ID：url:db6fc5f29f186d13991c

### 范围记录

The public Hub manifest lists four Safetensors shards, an index and configuration/tokenizer files. No weight license is declared, despite Apache-2.0 being established for the separate code repository.

- 完整记录 JSON：https://awesomecua.com/resources/url-db6fc5f29f186d13991c/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 权重审核：The inspected model card contains no checkpoint-license declaration. The code repository Apache license is not transferred to weights.
  来源：https://huggingface.co/Fanbin/ARPO_UITARS1.5_7B/raw/2c5604d86c529843ef346698edcf33b170c1e817/README.md

### 一手证据

- https://raw.githubusercontent.com/JIA-Lab-research/ARPO/HEAD/README.md（获取于 2026-10-18T04:27:12Z；SHA-256：839b2de0e0c614fe8d2df4782d0f6a6e7d33f5c60d8020c9d4a01c61d533f39e）
- https://huggingface.co/api/models/Fanbin/ARPO_UITARS1.5_7B（获取于 2026-10-18T04:33:21Z；SHA-256：6e19a5339c4e52ca3753cce26ac2034883b96f5cb26383a4b41bc87a5fbf5bf6）
- https://huggingface.co/Fanbin/ARPO_UITARS1.5_7B/raw/2c5604d86c529843ef346698edcf33b170c1e817/README.md（获取于 2026-10-18T04:35:16Z；SHA-256：b6957fad37a7995e9dde4c7d4a4e0f6e2153b85354b2d234587c2a94ff95d0bd）

---

## browserground

browserground 是紧凑的 Qwen3-VL-2B LoRA 视觉 UI 定位模型，将截图和文本目标映射为边界框 JSON。

- 目录页面：https://awesomecua.com/resources/github-renezander030-browserground/
- 原始来源：https://github.com/renezander030/browserground
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、桌面
- 主题：GUI 定位、界面理解、效率
- 证据核查日期：2026-11-04T16:10:36Z
- ID：github:renezander030/browserground

- 完整记录 JSON：https://awesomecua.com/resources/github-renezander030-browserground/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/renezander030/browserground/HEAD/README.md（获取于 2026-11-04T16:10:36Z；SHA-256：d8e153a44312b17fb6e4e3b1aaa7089cfb46f64a87e2e9fd90dc187d4e640608）

---

## BU-30B-A3B-Preview

Browser Use 的开源权重浏览器智能体模型，由 Qwen3-VL-30B-A3B-Instruct 微调而成，共 30B 参数、激活 3B 参数，可通过 BU Cloud 或 vLLM 充当 browser-use 库的 LLM。

- 目录页面：https://awesomecua.com/resources/url-2c4b53bc04f33578e9b8/
- 原始来源：https://huggingface.co/browser-use/bu-30b-a3b-preview
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航
- 证据核查日期：2026-10-18T11:36:28Z
- ID：url:2c4b53bc04f33578e9b8

### 范围记录

A preview release. The Hub API at revision 28f795cd lists 13 BF16 safetensors shards (31,070,754,032 parameters) in the Qwen3VLMoeForConditionalGeneration architecture; access is open. The card gives a 65,536-token context and quickstarts for BU Cloud (API key) and a local vLLM server, but no benchmark results, training data or training method, so its capability claims were not checked. The card metadata declares no license. The repository's LICENSE is a modified MIT text that withholds all rights from anyone whose company or employer has global consolidated annual revenue above US$1 million (measured for the preceding month), and points them to a commercial license or the hosted service instead.

- 完整记录 JSON：https://awesomecua.com/resources/url-2c4b53bc04f33578e9b8/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：Modified MIT License (Browser Use, revenue-restricted) — https://huggingface.co/browser-use/bu-30b-a3b-preview/raw/28f795cd9ec73aedf2970a8914bbbf0d18accd82/LICENSE

- 权重审核：The card metadata has no license field. The repository LICENSE is a custom modified MIT text with a revenue restriction, so it is recorded verbatim by name rather than as SPDX MIT.
  来源：https://huggingface.co/browser-use/bu-30b-a3b-preview/raw/28f795cd9ec73aedf2970a8914bbbf0d18accd82/LICENSE

### 一手证据

- https://huggingface.co/browser-use/bu-30b-a3b-preview/raw/28f795cd9ec73aedf2970a8914bbbf0d18accd82/README.md（获取于 2026-10-18T11:36:28Z；SHA-256：a500e70f875f4204c7711df18b46a7e9171c2ac7e3f7569dd0826cf11f4d2587）
- https://huggingface.co/api/models/browser-use/bu-30b-a3b-preview（获取于 2026-10-18T11:36:30Z；SHA-256：48085eded704d2a53bc4439b3a904d5c4146bd3b29903fcaf55f34d0b24d0a9b）
- https://huggingface.co/browser-use/bu-30b-a3b-preview/raw/28f795cd9ec73aedf2970a8914bbbf0d18accd82/LICENSE（获取于 2026-10-18T11:36:30Z；SHA-256：26272dfb472cc79cdc667dd962b8876b8087297ee7cc9737291b428eb3bfc32e）

---

## Claude 3.7 Sonnet

Claude 3.7 Sonnet 提供可选的扩展思考模式；Anthropic 介绍了其鼠标和键盘操作能力，并报告了 OSWorld 评估结果。

- 目录页面：https://awesomecua.com/resources/url-63264f7cd4510d96e486/
- 原始来源：https://www.anthropic.com/research/visible-extended-thinking
- 类型：模型
- 审核状态：已审核
- 范围：相关研究
- 运行环境：桌面
- 主题：评测
- 证据核查日期：2026-11-09T06:16:38Z
- ID：url:63264f7cd4510d96e486

### 范围记录

The article says developers can set a thinking budget and describes longer computer-use runs. It also describes a screen-pixel and button-control game experiment.

- 完整记录 JSON：https://awesomecua.com/resources/url-63264f7cd4510d96e486/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://www.anthropic.com/research/visible-extended-thinking（获取于 2026-11-09T06:16:38Z；SHA-256：6281ff5790e8d6b3fb014cbc888054bbf4c6f6c49b7caa00061c0ffd0e0db8b3）

---

## Claude Computer Use

Claude 提供的工具能力，支持基于截图与计算机交互。

- 目录页面：https://awesomecua.com/resources/url-57f17b7d0c18b2d7c8bf/
- 原始来源：https://docs.anthropic.com/en/docs/agents-and-tools/tool-use/computer-use-tool
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：规划、GUI 定位
- 证据核查日期：2026-10-16T06:38:27Z
- ID：url:57f17b7d0c18b2d7c8bf

- 完整记录 JSON：https://awesomecua.com/resources/url-57f17b7d0c18b2d7c8bf/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://docs.anthropic.com/en/docs/agents-and-tools/tool-use/computer-use-tool（获取于 2026-10-16T06:38:27Z；SHA-256：de16b4fd611982cfaa160cb0fbdc1b0f0559b90983e452964527704a6de4e72d）

---

## Claude Opus 5

Claude Opus 5 是通用模型；发布页报告了它在 OSWorld 2.0 电脑操作评测中的表现，并介绍了浏览器和业务任务中的智能体应用。

- 目录页面：https://awesomecua.com/resources/url-c34a327604b5be4a7c98/
- 原始来源：https://www.anthropic.com/news/claude-opus-5
- 类型：模型
- 审核状态：已审核
- 范围：相关研究
- 运行环境：桌面、网页
- 主题：评测、自动化、产业
- 证据核查日期：2026-11-09T06:16:32Z
- ID：url:c34a327604b5be4a7c98

### 范围记录

The release page presents OSWorld 2.0 results as Anthropic's claims and includes customer reports about browser-based checking and workflow automation.

- 完整记录 JSON：https://awesomecua.com/resources/url-c34a327604b5be4a7c98/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://www.anthropic.com/news/claude-opus-5（获取于 2026-11-09T06:16:32Z；SHA-256：1bd93f18baf22edcdac06587e18f6d3e369a18cd37fad64fdd0e09286967982b）

---

## Claude Sonnet 4.5

Claude Sonnet 4.5 是通过 API 提供的通用模型。Anthropic 报告了其在 OSWorld 上的计算机使用表现，并展示了浏览器任务。

- 目录页面：https://awesomecua.com/resources/url-18816edf464a073a0120/
- 原始来源：https://www.anthropic.com/news/claude-sonnet-4-5
- 类型：模型
- 审核状态：已审核
- 范围：相关研究
- 运行环境：跨平台、网页、桌面
- 主题：评测、网页导航、界面理解
- 证据核查日期：2026-11-09T05:05:11Z
- ID：url:18816edf464a073a0120

### 范围记录

The page says developers can access the model as claude-sonnet-4-5 through the Claude API. Its computer-use result and browser demonstration are publisher reports.

- 完整记录 JSON：https://awesomecua.com/resources/url-18816edf464a073a0120/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://www.anthropic.com/news/claude-sonnet-4-5（获取于 2026-11-09T05:05:11Z；SHA-256：59443a1408f6f5f4930888cefb8a19bf954457cc6f2edd6c05101373c67977f3）

---

## Claude Sonnet 4.6

通用模型；发布说明介绍其通过视觉观察、鼠标和键盘操作电脑，并报告 OSWorld 评估及提示注入测试。

- 目录页面：https://awesomecua.com/resources/url-c4a45eed67ee9087aae3/
- 原始来源：https://www.anthropic.com/news/claude-sonnet-4-6
- 类型：模型
- 审核状态：已审核
- 范围：相关研究
- 运行环境：跨平台、桌面、网页
- 主题：自动化、评测、安全与防护
- 证据核查日期：2026-11-09T05:05:17Z
- ID：url:c4a45eed67ee9087aae3

### 范围记录

Anthropic says the model is available through its platform and describes OSWorld-Verified as its computer-use evaluation. The page also discusses navigating spreadsheets and multi-step web forms.

- 完整记录 JSON：https://awesomecua.com/resources/url-c4a45eed67ee9087aae3/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://www.anthropic.com/news/claude-sonnet-4-6（获取于 2026-11-09T05:05:17Z；SHA-256：581d5cc0335db4ff2f729d78ad7ad2999f462e828f417f91d4e406d6a64b6f98）

---

## CombatVLA

CombatVLA 是用于实时控制 3D 动作角色扮演 PC 游戏战斗的视觉语言动作模型和动作跟踪器。

- 目录页面：https://awesomecua.com/resources/github-chenvoid-combatvla/
- 原始来源：https://github.com/ChenVoid/CombatVLA
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Windows
- 主题：动作预测、视频、效率
- 证据核查日期：2026-11-04T13:12:10Z
- ID：github:chenvoid/combatvla

- 完整记录 JSON：https://awesomecua.com/resources/github-chenvoid-combatvla/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/ChenVoid/CombatVLA/HEAD/README.md（获取于 2026-11-04T13:12:10Z；SHA-256：d398c8cec4d5e0625b71ecac6eb484a63d5ff077e57dbfaaa8704def6899e698）

---

## ConClick

ConClick 是通过坐标监督和目标干扰项排序训练的 GUI 定位模型；ReClick 推理方法会重新检查候选屏幕区域，再确定点击位置。

- 目录页面：https://awesomecua.com/resources/github-zhangruotian-conclick/
- 原始来源：https://github.com/zhangruotian/ConClick
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：GUI 定位、界面理解、动作预测
- 证据核查日期：2026-11-09T06:16:34Z
- ID：github:zhangruotian/conclick

### 范围记录

The repository contains training, inference and evaluation scripts and links the released ConClick-8B checkpoint and ConClick-Data dataset. The README specifies Python 3.12, an NVIDIA GPU and Apache-2.0 code licensing.

- 完整记录 JSON：https://awesomecua.com/resources/github-zhangruotian-conclick/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/zhangruotian/ConClick/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/zhangruotian/ConClick/HEAD/README.md（获取于 2026-11-09T06:16:34Z；SHA-256：595327cf11b726cba987f4016b92036769373cce48a0ea1d4b9e18471a40953e）
- https://raw.githubusercontent.com/zhangruotian/ConClick/HEAD/LICENSE（获取于 2026-11-09T06:13:38Z；SHA-256：cfe6fe1994b4e2203788d7e7d85cea664802fa2d67b10cf574d4d95eb5c75e67）

---

## DiMo-GUI

利用模态感知的视觉推理和测试时计算扩展开展 GUI 定位研究。

- 目录页面：https://awesomecua.com/resources/github-vivo-dimo-gui/
- 原始来源：https://github.com/vivo/DiMo-GUI
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：GUI 定位、效率
- 证据核查日期：2026-10-16T06:36:01Z
- ID：github:vivo/dimo-gui

- 完整记录 JSON：https://awesomecua.com/resources/github-vivo-dimo-gui/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/vivo/DiMo-GUI/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/vivo/DiMo-GUI/HEAD/readme.md（获取于 2026-10-16T06:36:01Z；SHA-256：4f578ecd5cbba12797586892a9190e480291bd267a180f0ce56847764eaac524）
- https://raw.githubusercontent.com/vivo/DiMo-GUI/HEAD/LICENSE（获取于 2026-10-16T06:42:01Z；SHA-256：d1a708ddcd4afc4e40a5d66f2d56835a12d815515ab6a61578e541ed2c0483bb）

---

## Fintor/Fintor-GUI-S2

Fintor-GUI-S2 是基于 UI-TARS-7B-DPO、使用 OS-Copilot 数据微调的界面定位模型。模型卡报告了 ScreenSpot Pro 和 v2 评测。

- 目录页面：https://awesomecua.com/resources/url-0b3bb9fac5b0ba9777b8/
- 原始来源：https://huggingface.co/Fintor/Fintor-GUI-S2
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：GUI 定位、界面理解、评测
- 证据核查日期：2026-11-09T05:05:17Z
- ID：url:0b3bb9fac5b0ba9777b8

### 范围记录

The card says training used SFT and LoRA and declares an Apache 2.0 license. The repository file list contains Safetensors weight shards and processor files.

- 完整记录 JSON：https://awesomecua.com/resources/url-0b3bb9fac5b0ba9777b8/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/Fintor/Fintor-GUI-S2

### 一手证据

- https://huggingface.co/api/models/Fintor/Fintor-GUI-S2（获取于 2026-11-09T05:05:17Z；SHA-256：d3c82db971b3898d72b9d1ad17792d457c555bef11e83c2a26ad3e4017d7129e）
- https://huggingface.co/api/models/Fintor/Fintor-GUI-S2（获取于 2026-11-09T05:05:17Z；SHA-256：d3c82db971b3898d72b9d1ad17792d457c555bef11e83c2a26ad3e4017d7129e）

---

## Fuyu-8B

Adept 的纯解码器多模态基础模型将图像块直接输入 Transformer，供数字智能体、UI 问答和屏幕定位研究使用。

- 目录页面：https://awesomecua.com/resources/url-c6e1ffa1f4c6561c3b22/
- 原始来源：https://huggingface.co/adept/fuyu-8b
- 类型：模型
- 审核状态：已审核
- 范围：相关研究
- 运行环境：unspecified
- 主题：界面理解、GUI 定位
- 证据核查日期：2026-10-19T07:15:27Z
- ID：url:c6e1ffa1f4c6561c3b22

### 范围记录

Adjacent: a general image-and-text base model whose card says it was designed for digital agents, UI-based questions and fine-grained localization on screen images, and lists computer control among research uses. The card calls it a raw base model that needs fine-tuning and reports VQAv2, OKVQA, COCO Captions and AI2D scores; GUI or agent evaluation, target platform and training data remain unspecified. Adept's blog post is its only linked description; no paper is linked. The manifest lists two Safetensors shards (9,408,238,592 BF16 parameters per the Hub API). CC BY-NC 4.0 is the card's weights declaration.

- 完整记录 JSON：https://awesomecua.com/resources/url-c6e1ffa1f4c6561c3b22/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：cc-by-nc-4.0 — https://huggingface.co/adept/fuyu-8b/raw/f41defefdb89be0d28cac19d94ce216e37cb6be5/README.md

### 一手证据

- https://huggingface.co/adept/fuyu-8b/raw/f41defefdb89be0d28cac19d94ce216e37cb6be5/README.md（获取于 2026-10-19T07:15:27Z；SHA-256：8f8beb8b0174e9b661ef5bc795e0342747d0069a590b41167e636172c177c6ff）
- https://huggingface.co/api/models/adept/fuyu-8b/revision/f41defefdb89be0d28cac19d94ce216e37cb6be5（获取于 2026-10-19T07:15:26Z；SHA-256：ae28118b1737267db5c334db7f0b492bc5187ac5b975549158c63d392d8acd2e）
- https://huggingface.co/adept/fuyu-8b/raw/f41defefdb89be0d28cac19d94ce216e37cb6be5/config.json（获取于 2026-10-18T16:12:44Z；SHA-256：cbf11fcb3e60c985b5f5ab8a8e277b17e2910c3060285609dbfbf2354689c8ff）
- https://huggingface.co/adept/fuyu-8b/raw/f41defefdb89be0d28cac19d94ce216e37cb6be5/README.md（获取于 2026-10-18T16:12:42Z；SHA-256：8f8beb8b0174e9b661ef5bc795e0342747d0069a590b41167e636172c177c6ff）

---

## GELab Zero

开放式移动 GUI 智能体技术栈，结合可在消费级硬件上运行的 4B 模型、本地多设备基础设施、MCP 服务器和 AndroidDaily 基准任务。

- 目录页面：https://awesomecua.com/resources/github-stepfun-ai-gelab-zero/
- 原始来源：https://github.com/stepfun-ai/gelab-zero
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：手机操作
- 证据核查日期：2026-10-16T06:36:01Z
- ID：github:stepfun-ai/gelab-zero

- 完整记录 JSON：https://awesomecua.com/resources/github-stepfun-ai-gelab-zero/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/stepfun-ai/gelab-zero/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/stepfun-ai/gelab-zero/HEAD/README.md（获取于 2026-10-16T06:36:01Z；SHA-256：462e2b627989a969f7e859e22040a83d38e7c3eac12305d844563b0925f8a787）
- https://raw.githubusercontent.com/stepfun-ai/gelab-zero/HEAD/LICENSE（获取于 2026-10-16T06:42:01Z；SHA-256：08095ca875809a84572af7129caef5d4f4b052cc32ced7bdeb010fca125e07f0）

---

## Gemini 2.5 Computer Use

Google DeepMind 预览模型基于 Gemini 2.5 Pro，经过 UI 控制后训练，通过 Gemini API 的 computer_use 工具，依据截图和近期操作记录返回浏览器及移动端操作。

- 目录页面：https://awesomecua.com/resources/url-44827a16f49e65ba8fb3/
- 原始来源：https://blog.google/innovation-and-ai/models-and-research/google-deepmind/gemini-computer-use-model/
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、Android
- 主题：网页导航、动作预测、安全与防护
- 证据核查日期：2026-10-18T11:07:00Z
- ID：url:44827a16f49e65ba8fb3

### 范围记录

Launch post and model card dated 7 October 2025. The model card says the model is based on Gemini 2.5 Pro (06-2025) with post-training for UI control, is primarily optimized for web browsers, shows promise on mobile UI control and is not yet optimized for OS-level control; its stated knowledge cutoff is January 2025. Benchmark figures on Online-Mind2Web, WebVoyager and AndroidWorld mix self-reported, Browserbase-run and Google-run evaluations. The post states that versions of the model power Project Mariner and the Firebase Testing Agent. This record covers the dated preview release; the Gemini API computer-use capability is recorded separately.

- 完整记录 JSON：https://awesomecua.com/resources/url-44827a16f49e65ba8fb3/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://blog.google/innovation-and-ai/models-and-research/google-deepmind/gemini-computer-use-model/（获取于 2026-10-18T11:07:00Z；SHA-256：f9481fadf315ecb8e33b7140c3d8d0f917d5b85578bd151c58ccb337617f5694）
- https://storage.googleapis.com/deepmind-media/Model-Cards/Gemini-2-5-Computer-Use-Model-Card.pdf（获取于 2026-10-18T11:07:02Z；SHA-256：b3f56bc303fcffdc7eb76903843f273565a8eb3a686686cd55195fa2816cc39d）

---

## Gemini Computer Use

Gemini Computer Use 是根据截图生成界面操作的 Gemini 能力。

- 目录页面：https://awesomecua.com/resources/url-879d4e3e75e83582bde6/
- 原始来源：https://ai.google.dev/gemini-api/docs/computer-use
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：规划、GUI 定位
- 证据核查日期：2026-10-16T06:38:27Z
- ID：url:879d4e3e75e83582bde6

- 完整记录 JSON：https://awesomecua.com/resources/url-879d4e3e75e83582bde6/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://ai.google.dev/gemini-api/docs/computer-use（获取于 2026-10-16T06:38:27Z；SHA-256：e7062cfb4c0948d3a2274843f9f493f34cb40dfd634371408086df6141a0e036）

---

## GPA-GUI-Detector

GPA-GUI-Detector 是 YOLO 模型，可在界面截图中定位按钮、图标等可交互元素，并输出边界框供自动化流程使用。

- 目录页面：https://awesomecua.com/resources/url-87f28e117d95985d5177/
- 原始来源：https://huggingface.co/Salesforce/GPA-GUI-Detector
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：界面理解、GUI 定位
- 证据核查日期：2026-11-09T05:05:18Z
- ID：url:87f28e117d95985d5177

### 范围记录

The release provides model.pt and examples using Ultralytics and OmniParser. The card declares an MIT license.

- 完整记录 JSON：https://awesomecua.com/resources/url-87f28e117d95985d5177/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：mit — https://huggingface.co/Salesforce/GPA-GUI-Detector

### 一手证据

- https://huggingface.co/api/models/Salesforce/GPA-GUI-Detector（获取于 2026-11-09T05:05:18Z；SHA-256：a21e0ffb0cfc81e8b286ddec02d510261a16fc33eea73dd50aa881dd39e33f65）
- https://huggingface.co/api/models/Salesforce/GPA-GUI-Detector（获取于 2026-11-09T05:05:18Z；SHA-256：a21e0ffb0cfc81e8b286ddec02d510261a16fc33eea73dd50aa881dd39e33f65）

---

## GroundAnything

GroundAnything 是一个 4B 并行解码扩散定位模型，用于低延迟视觉坐标定位。

- 目录页面：https://awesomecua.com/resources/github-groundingpi-groundanything/
- 原始来源：https://github.com/groundingpi/GroundAnything
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、桌面、网页、Android
- 主题：GUI 定位、界面理解、效率
- 证据核查日期：2026-11-04T14:20:13Z
- ID：github:groundingpi/groundanything

- 完整记录 JSON：https://awesomecua.com/resources/github-groundingpi-groundanything/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/groundingpi/GroundAnything/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/groundingpi/GroundAnything/HEAD/README.md（获取于 2026-11-04T14:20:13Z；SHA-256：0ecc01454adad40a97ab0cbe37554e995cc9ba9076f2cd5bf33bb97744c46dac）
- https://raw.githubusercontent.com/groundingpi/GroundAnything/HEAD/LICENSE（获取于 2026-11-04T14:23:47Z；SHA-256：c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4）

---

## GroundingPI

GroundingPI 是一个 4B 视觉定位基础模型，统一了边界框检测、指代表达和点定位。

- 目录页面：https://awesomecua.com/resources/github-groundingpi-groundingpi/
- 原始来源：https://github.com/groundingpi/GroundingPI
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、桌面、网页、Android
- 主题：GUI 定位、界面理解、动作预测
- 证据核查日期：2026-11-04T14:20:13Z
- ID：github:groundingpi/groundingpi

- 完整记录 JSON：https://awesomecua.com/resources/github-groundingpi-groundingpi/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/groundingpi/GroundingPI/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/groundingpi/GroundingPI/HEAD/README.md（获取于 2026-11-04T14:20:13Z；SHA-256：65367d8d12e665dad4a2510a14a1e8740fbfe4080baa1911b976ff461be9bcf8）
- https://raw.githubusercontent.com/groundingpi/GroundingPI/HEAD/LICENSE（获取于 2026-11-04T14:23:47Z；SHA-256：c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4）

---

## GUI-AIMA

GUI-AIMA 将内在的多模态注意力头与上下文锚点对齐，以更高的数据效率完成视觉 GUI 元素定位。

- 目录页面：https://awesomecua.com/resources/github-sjz5202-gui-aima/
- 原始来源：https://github.com/sjz5202/GUI-AIMA
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、网页、桌面、Android
- 主题：GUI 定位、界面理解
- 证据核查日期：2026-11-04T13:12:36Z
- ID：github:sjz5202/gui-aima

- 完整记录 JSON：https://awesomecua.com/resources/github-sjz5202-gui-aima/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/sjz5202/GUI-AIMA/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/sjz5202/GUI-AIMA/HEAD/README.md（获取于 2026-11-04T13:12:36Z；SHA-256：46a4cb589fb2fdccae60ae3078e4a1d19f9804238b0e3884bc7f056b6ab88b34）
- https://raw.githubusercontent.com/sjz5202/GUI-AIMA/HEAD/LICENSE（获取于 2026-11-04T13:22:43Z；SHA-256：43070e2d4e532684de521b885f385d0841030efa2b1a20bafb76133a5e1379c1）

---

## GUI-Libra 3B

GUI-Libra 检查点基于 Qwen2.5-VL-3B-Instruct 微调，约有 40.7 亿 BF16 参数，将截图、任务和操作历史转化为<think>推理块及带 point_2d 坐标的 JSON 操作。

- 目录页面：https://awesomecua.com/resources/url-ae8e3fa5a67a608804f8/
- 原始来源：https://huggingface.co/GUI-Libra/GUI-Libra-3B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、Android
- 主题：GUI 定位、动作预测、网页导航、手机操作、强化学习
- 证据核查日期：2026-10-18T15:56:14Z
- ID：url:ae8e3fa5a67a608804f8

### 范围记录

The Hub manifest at revision 98ec8af3 lists 2 Safetensors shards with an index plus configuration and tokenizer files. The card's usage section serves the checkpoint through vLLM as an OpenAI-compatible endpoint and prompts it with a GUI action list (Click, Select, Write, KeyboardPress, Scroll). Its vllm serve command names GUI-Libra-4B, while its Python example names GUI-Libra-3B. The paper link and the web and Android evaluation targets come from the official GitHub README, which the card links. Apache-2.0 is the card's weight declaration; the code repository's license and the training data's terms are separate.

- 完整记录 JSON：https://awesomecua.com/resources/url-ae8e3fa5a67a608804f8/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：Apache-2.0 — https://huggingface.co/GUI-Libra/GUI-Libra-3B/raw/98ec8af3939dbfa87e9e39082c7edbb1c1e7ee1f/README.md

- 权重审核：Model-card metadata declaration (license: apache-2.0) for this checkpoint; the code repository's license and the training data's terms are separate.
  来源：https://huggingface.co/GUI-Libra/GUI-Libra-3B/raw/98ec8af3939dbfa87e9e39082c7edbb1c1e7ee1f/README.md

### 一手证据

- https://huggingface.co/GUI-Libra/GUI-Libra-3B/raw/98ec8af3939dbfa87e9e39082c7edbb1c1e7ee1f/README.md（获取于 2026-10-18T15:56:14Z；SHA-256：e678c8bb953de37182a69d60aa8c8fd7c9dd273fcd9cee457e8d2447b4b9feab）
- https://huggingface.co/api/models/GUI-Libra/GUI-Libra-3B/revision/98ec8af3939dbfa87e9e39082c7edbb1c1e7ee1f（获取于 2026-10-18T15:55:30Z；SHA-256：2cae2eed1c4d3c6551b737d48d7cfaad1c87413292530753c0ea80a8a1877755）
- https://raw.githubusercontent.com/GUI-Libra/GUI-Libra/f3e9c78e5c6435d0fb39210191ce1ad284361120/README.md（获取于 2026-10-18T15:55:29Z；SHA-256：f34c5bcf454368db37dde4bb2229fd14ae5e4a118684c6d7fbb6a25f9f246911）
- https://huggingface.co/GUI-Libra/GUI-Libra-3B/raw/98ec8af3939dbfa87e9e39082c7edbb1c1e7ee1f/README.md（获取于 2026-10-18T15:56:14Z；SHA-256：e678c8bb953de37182a69d60aa8c8fd7c9dd273fcd9cee457e8d2447b4b9feab）

---

## GUI-Libra 4B

GUI-Libra 检查点基于 Qwen3-VL-4B-Instruct 微调，约有 48.3 亿 BF16 参数，将截图、任务和操作历史转化为<thinking>推理块及带 point_2d 坐标的 JSON 操作。

- 目录页面：https://awesomecua.com/resources/url-9082bb5effe5d1a1cada/
- 原始来源：https://huggingface.co/GUI-Libra/GUI-Libra-4B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、Android
- 主题：GUI 定位、动作预测、网页导航、手机操作、强化学习
- 证据核查日期：2026-10-18T15:56:14Z
- ID：url:9082bb5effe5d1a1cada

### 范围记录

The Hub manifest at revision 35fc6d34 lists 2 Safetensors shards with an index plus configuration and tokenizer files. The card's usage section serves the checkpoint through vLLM as an OpenAI-compatible endpoint and prompts it with a GUI action list (Click, Select, Write, KeyboardPress, Scroll). The paper link and the web and Android evaluation targets come from the official GitHub README, which the card links. Apache-2.0 is the card's weight declaration; the code repository's license and the training data's terms are separate.

- 完整记录 JSON：https://awesomecua.com/resources/url-9082bb5effe5d1a1cada/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：Apache-2.0 — https://huggingface.co/GUI-Libra/GUI-Libra-4B/raw/35fc6d34d1ffce801baefb0b693c5be13c4399eb/README.md

- 权重审核：Model-card metadata declaration (license: apache-2.0) for this checkpoint; the code repository's license and the training data's terms are separate.
  来源：https://huggingface.co/GUI-Libra/GUI-Libra-4B/raw/35fc6d34d1ffce801baefb0b693c5be13c4399eb/README.md

### 一手证据

- https://huggingface.co/GUI-Libra/GUI-Libra-4B/raw/35fc6d34d1ffce801baefb0b693c5be13c4399eb/README.md（获取于 2026-10-18T15:56:14Z；SHA-256：f79b3b1b6b75a04fd41d8475bf76f1ad3bafa21a4bf85519f87709b7788d3308）
- https://huggingface.co/api/models/GUI-Libra/GUI-Libra-4B/revision/35fc6d34d1ffce801baefb0b693c5be13c4399eb（获取于 2026-10-18T15:55:30Z；SHA-256：0a1b2bbd4ddab8a2b23af66e43053ffca379d14d29168de8e7510f5df0495dda）
- https://raw.githubusercontent.com/GUI-Libra/GUI-Libra/f3e9c78e5c6435d0fb39210191ce1ad284361120/README.md（获取于 2026-10-18T15:55:29Z；SHA-256：f34c5bcf454368db37dde4bb2229fd14ae5e4a118684c6d7fbb6a25f9f246911）
- https://huggingface.co/GUI-Libra/GUI-Libra-4B/raw/35fc6d34d1ffce801baefb0b693c5be13c4399eb/README.md（获取于 2026-10-18T15:56:14Z；SHA-256：f79b3b1b6b75a04fd41d8475bf76f1ad3bafa21a4bf85519f87709b7788d3308）

---

## GUI-Libra 7B

GUI-Libra 检查点基于 Qwen2.5-VL-7B-Instruct 微调，约有 82.9 亿 BF16 参数，将截图、任务和操作历史转化为<think>推理块及带 point_2d 坐标的 JSON 操作。

- 目录页面：https://awesomecua.com/resources/url-f52794224f9541fd9eb3/
- 原始来源：https://huggingface.co/GUI-Libra/GUI-Libra-7B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、Android
- 主题：GUI 定位、动作预测、网页导航、手机操作、强化学习
- 证据核查日期：2026-10-18T15:56:14Z
- ID：url:f52794224f9541fd9eb3

### 范围记录

The Hub manifest at revision 0355b647 lists 4 Safetensors shards with an index plus configuration and tokenizer files. The card's usage section serves the checkpoint through vLLM as an OpenAI-compatible endpoint and prompts it with a GUI action list (Click, Select, Write, KeyboardPress, Scroll). Its vllm serve command names GUI-Libra-4B, while its Python example names GUI-Libra-7B. The paper link and the web and Android evaluation targets come from the official GitHub README, which the card links. Apache-2.0 is the card's weight declaration; the code repository's license and the training data's terms are separate.

- 完整记录 JSON：https://awesomecua.com/resources/url-f52794224f9541fd9eb3/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：Apache-2.0 — https://huggingface.co/GUI-Libra/GUI-Libra-7B/raw/0355b647f41136c65bd6c7f6705fba8e5a2e250a/README.md

- 权重审核：Model-card metadata declaration (license: apache-2.0) for this checkpoint; the code repository's license and the training data's terms are separate.
  来源：https://huggingface.co/GUI-Libra/GUI-Libra-7B/raw/0355b647f41136c65bd6c7f6705fba8e5a2e250a/README.md

### 一手证据

- https://huggingface.co/GUI-Libra/GUI-Libra-7B/raw/0355b647f41136c65bd6c7f6705fba8e5a2e250a/README.md（获取于 2026-10-18T15:56:14Z；SHA-256：93e22f5ded472a60c66b812bd9a5c07ae93634c68195b4c9d36fca2dbc780f8d）
- https://huggingface.co/api/models/GUI-Libra/GUI-Libra-7B/revision/0355b647f41136c65bd6c7f6705fba8e5a2e250a（获取于 2026-10-18T15:55:30Z；SHA-256：3e6048b720e7dc0e10a88eb5b34804a8e063cfa255813281157bce9dbe7981fc）
- https://raw.githubusercontent.com/GUI-Libra/GUI-Libra/f3e9c78e5c6435d0fb39210191ce1ad284361120/README.md（获取于 2026-10-18T15:55:29Z；SHA-256：f34c5bcf454368db37dde4bb2229fd14ae5e4a118684c6d7fbb6a25f9f246911）
- https://huggingface.co/GUI-Libra/GUI-Libra-7B/raw/0355b647f41136c65bd6c7f6705fba8e5a2e250a/README.md（获取于 2026-10-18T15:56:14Z；SHA-256：93e22f5ded472a60c66b812bd9a5c07ae93634c68195b4c9d36fca2dbc780f8d）

---

## GUI-Libra 8B

GUI-Libra 检查点基于 Qwen3-VL-8B-Instruct 微调，约有 87.7 亿 BF16 参数，将截图、任务和操作历史转化为<thinking>推理块及带 point_2d 坐标的 JSON 操作。

- 目录页面：https://awesomecua.com/resources/url-6694391b0cf50389d2e9/
- 原始来源：https://huggingface.co/GUI-Libra/GUI-Libra-8B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、Android
- 主题：GUI 定位、动作预测、网页导航、手机操作、强化学习
- 证据核查日期：2026-10-18T15:56:14Z
- ID：url:6694391b0cf50389d2e9

### 范围记录

The Hub manifest at revision 15ee285b lists 4 Safetensors shards with an index plus configuration and tokenizer files. The card's usage section serves the checkpoint through vLLM as an OpenAI-compatible endpoint and prompts it with a GUI action list (Click, Select, Write, KeyboardPress, Scroll). The paper link and the web and Android evaluation targets come from the official GitHub README, which the card links. Apache-2.0 is the card's weight declaration; the code repository's license and the training data's terms are separate.

- 完整记录 JSON：https://awesomecua.com/resources/url-6694391b0cf50389d2e9/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：Apache-2.0 — https://huggingface.co/GUI-Libra/GUI-Libra-8B/raw/15ee285bc1e279eee1b7ea5e953b7dd823e6dbd3/README.md

- 权重审核：Model-card metadata declaration (license: apache-2.0) for this checkpoint; the code repository's license and the training data's terms are separate.
  来源：https://huggingface.co/GUI-Libra/GUI-Libra-8B/raw/15ee285bc1e279eee1b7ea5e953b7dd823e6dbd3/README.md

### 一手证据

- https://huggingface.co/GUI-Libra/GUI-Libra-8B/raw/15ee285bc1e279eee1b7ea5e953b7dd823e6dbd3/README.md（获取于 2026-10-18T15:56:14Z；SHA-256：3167bb98de26f8706db1cde493ebbc04031c48d7946b122552a60d8aa772469d）
- https://huggingface.co/api/models/GUI-Libra/GUI-Libra-8B/revision/15ee285bc1e279eee1b7ea5e953b7dd823e6dbd3（获取于 2026-10-18T15:55:31Z；SHA-256：8a17da30a39508a921bbe7be37ee686ad8517582667cc905785393291c94e78f）
- https://raw.githubusercontent.com/GUI-Libra/GUI-Libra/f3e9c78e5c6435d0fb39210191ce1ad284361120/README.md（获取于 2026-10-18T15:55:29Z；SHA-256：f34c5bcf454368db37dde4bb2229fd14ae5e4a118684c6d7fbb6a25f9f246911）
- https://huggingface.co/GUI-Libra/GUI-Libra-8B/raw/15ee285bc1e279eee1b7ea5e953b7dd823e6dbd3/README.md（获取于 2026-10-18T15:56:14Z；SHA-256：3167bb98de26f8706db1cde493ebbc04031c48d7946b122552a60d8aa772469d）

---

## GUI-Owl 1.5 2B Instruct

GUI-Owl 1.5 原生 GUI 智能体系列中最小的指令版检查点，基于 Qwen3-VL，出自 Mobile-Agent-v3.5，面向桌面、移动端和浏览器任务，可独立使用或担任框架中的一个角色。

- 目录页面：https://awesomecua.com/resources/url-0b94b29f2afbfe8a3abb/
- 原始来源：https://huggingface.co/mPLUG/GUI-Owl-1.5-2B-Instruct
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、桌面、Android、网页
- 主题：动作预测、GUI 定位、工具集成
- 证据核查日期：2026-10-18T12:04:43Z
- ID：url:0b94b29f2afbfe8a3abb

### 范围记录

Hub API at revision 528ceaec lists one BF16 safetensors file (about 2.13B parameters) in the Qwen3VLForConditionalGeneration architecture; access is open. The card is written for the whole GUI-Owl 1.5 family (instruct and thinking variants from 2B to 32B) and links the X-PLUG/MobileAgent repository; its tool/MCP, memory and multi-agent claims are family-level. For this checkpoint the card reports 43.5 on OSWorld-Verified, 67.9 on AndroidWorld, 33.0 on OSWorld-MCP, 31.3 on Mobile-World and 25.8 on WindowsAA; these are publisher measurements. The card declares MIT for the checkpoint; it gives no Hub base_model metadata.

- 完整记录 JSON：https://awesomecua.com/resources/url-0b94b29f2afbfe8a3abb/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：mit — https://huggingface.co/mPLUG/GUI-Owl-1.5-2B-Instruct/raw/528ceaec795bbfbe6103bd79e03db849feadfb24/README.md

### 一手证据

- https://huggingface.co/mPLUG/GUI-Owl-1.5-2B-Instruct/raw/528ceaec795bbfbe6103bd79e03db849feadfb24/README.md（获取于 2026-10-18T12:04:43Z；SHA-256：8520a786d7a9d411e45466c2b7e7786d062ec03f2778acecc4a45991a803d8d8）
- https://huggingface.co/api/models/mPLUG/GUI-Owl-1.5-2B-Instruct/revision/528ceaec795bbfbe6103bd79e03db849feadfb24（获取于 2026-10-18T12:04:43Z；SHA-256：e4255782c39b634789d8bf608acb5d87360fda8ff3f107fb065f465af98fb5c3）
- https://huggingface.co/mPLUG/GUI-Owl-1.5-2B-Instruct/raw/528ceaec795bbfbe6103bd79e03db849feadfb24/README.md（获取于 2026-10-18T12:04:43Z；SHA-256：8520a786d7a9d411e45466c2b7e7786d062ec03f2778acecc4a45991a803d8d8）

---

## GUI-Owl 1.5 32B Instruct

GUI-Owl 1.5 的 32B 指令版原生 GUI 智能体模型，基于 Qwen3-VL，随 Mobile-Agent-v3.5 发布，用于桌面、移动端和浏览器操作；采用 MIT 许可，约有 33.4B 个 BF16 参数。

- 目录页面：https://awesomecua.com/resources/url-6a943fb3667791b6cdb4/
- 原始来源：https://huggingface.co/mPLUG/GUI-Owl-1.5-32B-Instruct
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、桌面、Android、网页
- 主题：动作预测、GUI 定位、规划、工具集成、记忆
- 证据核查日期：2026-10-18T12:14:46Z
- ID：url:6a943fb3667791b6cdb4

### 范围记录

The card lists 2B, 4B, 8B and 32B instruct and 8B and 32B thinking variants; the 32B thinking checkpoint is a separate repository. The Hub manifest lists 14 Safetensors shards and an index, and the API reports a Qwen3VLForConditionalGeneration config with 33,357,390,064 BF16 parameters. The card defers usage to a cookbook outside this repository and shows vLLM serving. Benchmark scores in the card are publisher-reported. MIT is the card's weight declaration and is not extended to Qwen3-VL or training data.

- 完整记录 JSON：https://awesomecua.com/resources/url-6a943fb3667791b6cdb4/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：MIT — https://huggingface.co/mPLUG/GUI-Owl-1.5-32B-Instruct/raw/6154cc22f19e7375994707986c1bd459e29621ac/README.md

- 权重审核：Publisher model-card declaration for this checkpoint; base-model and training-data terms are separate.
  来源：https://huggingface.co/mPLUG/GUI-Owl-1.5-32B-Instruct/raw/6154cc22f19e7375994707986c1bd459e29621ac/README.md

### 一手证据

- https://huggingface.co/mPLUG/GUI-Owl-1.5-32B-Instruct/raw/6154cc22f19e7375994707986c1bd459e29621ac/README.md（获取于 2026-10-18T12:14:46Z；SHA-256：8520a786d7a9d411e45466c2b7e7786d062ec03f2778acecc4a45991a803d8d8）
- https://huggingface.co/api/models/mPLUG/GUI-Owl-1.5-32B-Instruct（获取于 2026-10-18T12:14:45Z；SHA-256：b5fe375afd055e9139544f53bd58f72568fdab2fb0c4d70bea1d247ec4f8c4bc）
- https://huggingface.co/mPLUG/GUI-Owl-1.5-32B-Instruct/raw/6154cc22f19e7375994707986c1bd459e29621ac/README.md（获取于 2026-10-18T12:14:46Z；SHA-256：8520a786d7a9d411e45466c2b7e7786d062ec03f2778acecc4a45991a803d8d8）

---

## GUI-Owl 1.5 32B Think

GUI-Owl 1.5 的 32B 思考版原生 GUI 智能体模型，基于 Qwen3-VL，随 Mobile-Agent-v3.5 发布，用于桌面、移动端和浏览器操作；采用 MIT 许可，约有 33.4B 个 BF16 参数。

- 目录页面：https://awesomecua.com/resources/url-e0e4712ee701f652bf31/
- 原始来源：https://huggingface.co/mPLUG/GUI-Owl-1.5-32B-Think
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、桌面、Android、网页
- 主题：动作预测、GUI 定位、规划、工具集成、记忆
- 证据核查日期：2026-10-18T15:33:29Z
- ID：url:e0e4712ee701f652bf31

### 范围记录

The card's tables label this checkpoint GUI-Owl-1.5-32B-Thinking and describe the thinking models as the larger variants for tasks that need planning and reflection; the 32B instruct checkpoint is a separate repository. The Hub manifest lists 14 Safetensors shards and an index, and the API reports a Qwen3VLForConditionalGeneration config with 33,357,390,064 BF16 parameters. The card defers usage to a cookbook outside this repository and shows vLLM serving. Benchmark scores in the card are publisher-reported. MIT is the card's weight declaration and is not extended to Qwen3-VL or training data.

- 完整记录 JSON：https://awesomecua.com/resources/url-e0e4712ee701f652bf31/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：MIT — https://huggingface.co/mPLUG/GUI-Owl-1.5-32B-Think/raw/6635d0e256809902add2e091050c7f00b6c25c93/README.md

- 权重审核：Publisher model-card declaration for this checkpoint; base-model and training-data terms are separate.
  来源：https://huggingface.co/mPLUG/GUI-Owl-1.5-32B-Think/raw/6635d0e256809902add2e091050c7f00b6c25c93/README.md

### 一手证据

- https://huggingface.co/mPLUG/GUI-Owl-1.5-32B-Think/raw/6635d0e256809902add2e091050c7f00b6c25c93/README.md（获取于 2026-10-18T15:33:29Z；SHA-256：e4b496b2caf26ba3b60fc2b7de500f23c897f0d6d440e58f75e445ddac5ce83b）
- https://huggingface.co/api/models/mPLUG/GUI-Owl-1.5-32B-Think（获取于 2026-10-18T15:33:29Z；SHA-256：22db276232ececb495d4dae07cc15c7f253387ea10b05b1095f33c256284a60b）
- https://huggingface.co/mPLUG/GUI-Owl-1.5-32B-Think/raw/6635d0e256809902add2e091050c7f00b6c25c93/README.md（获取于 2026-10-18T15:33:29Z；SHA-256：e4b496b2caf26ba3b60fc2b7de500f23c897f0d6d440e58f75e445ddac5ce83b）

---

## GUI-Owl 1.5 4B Instruct

GUI-Owl 1.5 的 4B 指令版检查点，属于基于 Qwen3-VL 的 Mobile-Agent-v3.5 原生 GUI 智能体系列，用于桌面、移动端和浏览器任务，可独立使用或在该框架中承担角色。

- 目录页面：https://awesomecua.com/resources/url-17a0422036ebea8d4e93/
- 原始来源：https://huggingface.co/mPLUG/GUI-Owl-1.5-4B-Instruct
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、桌面、Android、网页
- 主题：动作预测、GUI 定位、工具集成
- 证据核查日期：2026-10-18T12:24:13Z
- ID：url:17a0422036ebea8d4e93

### 范围记录

Hub API at revision 3f061c2c lists two BF16 safetensors shards plus an index (about 4.44B parameters) in the Qwen3VLForConditionalGeneration architecture; access is open. The card is written for the whole GUI-Owl 1.5 family (instruct and thinking variants from 2B to 32B) and links the X-PLUG/MobileAgent repository; its tool/MCP, memory and multi-agent claims are family-level. For this checkpoint the card reports 48.2 on OSWorld-Verified, 69.8 on AndroidWorld, 31.7 on OSWorld-MCP, 32.3 on Mobile-World and 29.4 on WindowsAA; these are publisher measurements. The card declares MIT for the checkpoint; it gives no Hub base_model metadata.

- 完整记录 JSON：https://awesomecua.com/resources/url-17a0422036ebea8d4e93/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：mit — https://huggingface.co/mPLUG/GUI-Owl-1.5-4B-Instruct/raw/3f061c2c562cc860c42bf32542a70e07a7ff4840/README.md

### 一手证据

- https://huggingface.co/mPLUG/GUI-Owl-1.5-4B-Instruct/raw/3f061c2c562cc860c42bf32542a70e07a7ff4840/README.md（获取于 2026-10-18T12:24:13Z；SHA-256：e4b496b2caf26ba3b60fc2b7de500f23c897f0d6d440e58f75e445ddac5ce83b）
- https://huggingface.co/api/models/mPLUG/GUI-Owl-1.5-4B-Instruct/revision/3f061c2c562cc860c42bf32542a70e07a7ff4840（获取于 2026-10-18T12:23:34Z；SHA-256：7e0bd9e15849ccca8d1acd05f5e097400cbc93172e12d7bb06d21bdeed4c8390）
- https://huggingface.co/mPLUG/GUI-Owl-1.5-4B-Instruct/raw/3f061c2c562cc860c42bf32542a70e07a7ff4840/README.md（获取于 2026-10-18T12:24:13Z；SHA-256：e4b496b2caf26ba3b60fc2b7de500f23c897f0d6d440e58f75e445ddac5ce83b）

---

## GUI-Owl 1.5 8B Think

8B GUI-Owl 1.5 原生 GUI 智能体模型的推理版，基于 Qwen3-VL，随 Mobile-Agent-v3.5 发布，用于桌面、移动端和浏览器控制，约有 8.8B 个 BF16 参数，采用 MIT 许可。

- 目录页面：https://awesomecua.com/resources/url-374138c6e18c9f1dd44a/
- 原始来源：https://huggingface.co/mPLUG/GUI-Owl-1.5-8B-Think
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、桌面、Android、网页
- 主题：动作预测、GUI 定位、规划、工具集成、记忆
- 证据核查日期：2026-10-18T11:59:13Z
- ID：url:374138c6e18c9f1dd44a

### 范围记录

The card's tables label this checkpoint GUI-Owl-1.5-8B-Thinking and describe the thinking models as the variants for planning and reflection; the instruct 8B checkpoint is a separate repository. The Hub manifest lists four Safetensors shards and an index, and the API reports a Qwen3VLForConditionalGeneration config with 8,767,123,696 BF16 parameters. The card defers usage to a cookbook outside this repository and shows vLLM serving. Benchmark scores in the card are publisher-reported. MIT is the card's weight declaration and is not extended to Qwen3-VL or training data.

- 完整记录 JSON：https://awesomecua.com/resources/url-374138c6e18c9f1dd44a/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：MIT — https://huggingface.co/mPLUG/GUI-Owl-1.5-8B-Think/raw/afe3707fc84caebc4d7046118b34493ecf8bb060/README.md

- 权重审核：Publisher model-card declaration for this checkpoint; base-model and training-data terms are separate.
  来源：https://huggingface.co/mPLUG/GUI-Owl-1.5-8B-Think/raw/afe3707fc84caebc4d7046118b34493ecf8bb060/README.md

### 一手证据

- https://huggingface.co/mPLUG/GUI-Owl-1.5-8B-Think/raw/afe3707fc84caebc4d7046118b34493ecf8bb060/README.md（获取于 2026-10-18T11:59:13Z；SHA-256：8520a786d7a9d411e45466c2b7e7786d062ec03f2778acecc4a45991a803d8d8）
- https://huggingface.co/api/models/mPLUG/GUI-Owl-1.5-8B-Think（获取于 2026-10-18T11:59:13Z；SHA-256：5c42caedff1aa1b8f34f6628a0ce95bac5dc7240b99a8567ba885d6b42922434）
- https://huggingface.co/mPLUG/GUI-Owl-1.5-8B-Think/raw/afe3707fc84caebc4d7046118b34493ecf8bb060/README.md（获取于 2026-10-18T11:59:13Z；SHA-256：8520a786d7a9d411e45466c2b7e7786d062ec03f2778acecc4a45991a803d8d8）

---

## GUI-Spotlight

GUI-Spotlight 是一种通过图像思考的 GUI 视觉定位模型，可在高分辨率屏幕上反复裁剪并细化关注区域。

- 目录页面：https://awesomecua.com/resources/github-bin123apple-gui-spotlight/
- 原始来源：https://github.com/bin123apple/GUI_Spotlight
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、桌面、网页、Android
- 主题：GUI 定位、界面理解
- 证据核查日期：2026-11-04T14:02:35Z
- ID：github:bin123apple/gui_spotlight

- 完整记录 JSON：https://awesomecua.com/resources/github-bin123apple-gui-spotlight/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/bin123apple/GUI_Spotlight/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/bin123apple/GUI_Spotlight/HEAD/README.md（获取于 2026-11-04T14:02:35Z；SHA-256：9beec1999aa27cc05918cb3f3e092a0f3155418bcfd8ecdefd2ffddbcae39cc5）
- https://raw.githubusercontent.com/bin123apple/GUI_Spotlight/HEAD/LICENSE（获取于 2026-11-04T14:07:23Z；SHA-256：13ffcb890d9bf315bc89617d32a4a4fb6e82738fcb5e0d24d99d7a4975ae4e07）

---

## GUI-Vid

GUI-Vid 是基于 GUI-World 重新训练的视频语言模型，用于理解视频中的图形界面。

- 目录页面：https://awesomecua.com/resources/url-579b1c0ceac633eeb328/
- 原始来源：https://huggingface.co/ONE-Lab/GUI-Vid
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：界面理解、视频
- 证据核查日期：2026-11-09T05:05:09Z
- ID：url:579b1c0ceac633eeb328

### 范围记录

The repository contains a checkpoint file, ckpt_latest.pth. The card declares a CC-BY-4.0 license and links to the GUI-World repository for usage guidance.

- 完整记录 JSON：https://awesomecua.com/resources/url-579b1c0ceac633eeb328/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：cc-by-4.0 — https://huggingface.co/ONE-Lab/GUI-Vid

### 一手证据

- https://huggingface.co/api/models/ONE-Lab/GUI-Vid（获取于 2026-11-09T05:05:09Z；SHA-256：8ed81411b0b92e25898ac9d1f3ec3ec7bb0f07dc7691db56e9c7f666833e5236）
- https://huggingface.co/api/models/ONE-Lab/GUI-Vid（获取于 2026-11-09T05:05:09Z；SHA-256：8ed81411b0b92e25898ac9d1f3ec3ec7bb0f07dc7691db56e9c7f666833e5236）
- https://huggingface.co/api/models/shuaishuaicdp/GUI-Vid（获取于 2026-11-09T05:26:45Z；SHA-256：8ed81411b0b92e25898ac9d1f3ec3ec7bb0f07dc7691db56e9c7f666833e5236）
- https://huggingface.co/api/models/ONE-Lab/GUI-Vid（获取于 2026-11-09T05:26:45Z；SHA-256：8ed81411b0b92e25898ac9d1f3ec3ec7bb0f07dc7691db56e9c7f666833e5236）

---

## gWorld (GuiWorld)

gWorld 是开放权重的 8B/32B 移动端 GUI 世界模型，通过生成可渲染的网页代码预测下一步屏幕状态。

- 目录页面：https://awesomecua.com/resources/github-trillion-labs-gworld/
- 原始来源：https://github.com/trillion-labs/gWorld
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：世界模型、手机操作、动作预测
- 证据核查日期：2026-11-04T14:41:44Z
- ID：github:trillion-labs/gworld

- 完整记录 JSON：https://awesomecua.com/resources/github-trillion-labs-gworld/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/trillion-labs/gWorld/HEAD/README.md（获取于 2026-11-04T14:41:44Z；SHA-256：f5ae4cdd0c25f724765729c5a9e860906e730d8c395b9c3fff65af8b14ae0803）

---

## HobbyLM-1B Computer Use

一款设备端 LoRA 适配器，根据英文请求和 Mac 状态生成单步操作，由配套应用执行；仓库还提供训练代码和评测记录。

- 目录页面：https://awesomecua.com/resources/url-12470a40c8f82ef0294a/
- 原始来源：https://huggingface.co/Hobbylm/hobbylm-1B-computer-use
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、macOS
- 主题：动作预测、自动化、状态追踪
- 证据核查日期：2026-11-09T05:05:20Z
- ID：url:12470a40c8f82ef0294a

### 范围记录

The repository lists adapter weights, app code, training data, and evaluation files. The card names HobbyLM-1B Instruct as its base model, uses Apple MLX, and declares an Apache-2.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-12470a40c8f82ef0294a/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/Hobbylm/hobbylm-1B-computer-use

### 一手证据

- https://huggingface.co/api/models/Hobbylm/hobbylm-1B-computer-use（获取于 2026-11-09T05:05:20Z；SHA-256：9f0e1701741e7e211d3a754c76cbb157f5412b240dd269b63b3b525758d72451）
- https://huggingface.co/api/models/Hobbylm/hobbylm-1B-computer-use（获取于 2026-11-09T05:05:20Z；SHA-256：9f0e1701741e7e211d3a754c76cbb157f5412b240dd269b63b3b525758d72451）

---

## Holo Model Family

H 计算机使用模型系列及各发布版本的访问方式。

- 目录页面：https://awesomecua.com/resources/url-c0bd07d82ce25ad1d99d/
- 原始来源：https://hcompany.ai/research/models
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：规划、GUI 定位
- 证据核查日期：2026-10-16T06:38:27Z
- ID：url:c0bd07d82ce25ad1d99d

- 完整记录 JSON：https://awesomecua.com/resources/url-c0bd07d82ce25ad1d99d/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://hcompany.ai/research/models（获取于 2026-10-16T06:38:27Z；SHA-256：84ce0fd682367a6dac5cc5abc39d5c877556024bbf6ffdad30f76fc2ec08523f）

---

## Holo-3.1-35B-A3B-FP8

Holo3.1 视觉语言模型系列的 FP8 权重，用于计算机使用智能体。模型卡介绍网页、桌面和移动任务，并链接部署指南。

- 目录页面：https://awesomecua.com/resources/url-566bd1469811983951f3/
- 原始来源：https://huggingface.co/Hcompany/Holo-3.1-35B-A3B-FP8
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、网页、桌面
- 主题：动作预测、GUI 定位、手机操作、网页导航
- 证据核查日期：2026-11-09T05:05:07Z
- ID：url:566bd1469811983951f3

### 范围记录

The repository lists sharded safetensors weights, configuration and processor files. The card names Qwen 3.5 family base models and declares an Apache 2.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-566bd1469811983951f3/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/Hcompany/Holo-3.1-35B-A3B-FP8

### 一手证据

- https://huggingface.co/api/models/Hcompany/Holo-3.1-35B-A3B-FP8（获取于 2026-11-09T05:05:07Z；SHA-256：fc6409237ca18993f31b0f8b2f06b1134e0aab9adb41fdc75a79ecf9640e8e1b）
- https://huggingface.co/api/models/Hcompany/Holo-3.1-35B-A3B-FP8（获取于 2026-11-09T05:05:07Z；SHA-256：fc6409237ca18993f31b0f8b2f06b1134e0aab9adb41fdc75a79ecf9640e8e1b）

---

## Holo-3.1-35B-A3B-GGUF

Holo3.1 的量化视觉语言模型检查点，面向网页、桌面和移动界面的计算机使用智能体，支持界面定位与函数调用。

- 目录页面：https://awesomecua.com/resources/url-ee3a18b51eb44d94a94b/
- 原始来源：https://huggingface.co/Hcompany/Holo-3.1-35B-A3B-GGUF
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、网页、桌面
- 主题：GUI 定位、手机操作、工具集成
- 证据核查日期：2026-11-09T05:05:19Z
- ID：url:ee3a18b51eb44d94a94b

### 范围记录

The card lists BF16, FP8, NVFP4, and Q4 GGUF variants for Holo3.1-35B-A3B. It declares an Apache 2.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-ee3a18b51eb44d94a94b/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/Hcompany/Holo-3.1-35B-A3B-GGUF

### 一手证据

- https://huggingface.co/api/models/Hcompany/Holo-3.1-35B-A3B-GGUF（获取于 2026-11-09T05:05:19Z；SHA-256：ca4497b6c786b1fde2f3a37aa3af70c1f169c458bdc87908d7cc206e788d6ce8）
- https://huggingface.co/api/models/Hcompany/Holo-3.1-35B-A3B-GGUF（获取于 2026-11-09T05:05:19Z；SHA-256：ca4497b6c786b1fde2f3a37aa3af70c1f169c458bdc87908d7cc206e788d6ce8）

---

## Holo-3.1-35B-A3B-NVFP4

Holo-3.1-35B-A3B-NVFP4 是面向网页、桌面和移动端任务的量化计算机使用视觉语言模型权重，支持函数调用。

- 目录页面：https://awesomecua.com/resources/url-aeffabf23c16f8cf2139/
- 原始来源：https://huggingface.co/Hcompany/Holo-3.1-35B-A3B-NVFP4
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、网页、桌面
- 主题：网页导航、手机操作、GUI 定位、工具集成
- 证据核查日期：2026-11-09T05:05:05Z
- ID：url:aeffabf23c16f8cf2139

### 范围记录

The card says the NVFP4 W4A16 weights were made with NVIDIA Model-Optimizer and tested with vLLM. It declares Apache 2.0 licensing.

- 完整记录 JSON：https://awesomecua.com/resources/url-aeffabf23c16f8cf2139/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/Hcompany/Holo-3.1-35B-A3B-NVFP4

### 一手证据

- https://huggingface.co/api/models/Hcompany/Holo-3.1-35B-A3B-NVFP4（获取于 2026-11-09T05:05:05Z；SHA-256：c3c77ec3402045790703b25448dfee1ffe4bb99cb465e972e9c0afe76067fff3）
- https://huggingface.co/api/models/Hcompany/Holo-3.1-35B-A3B-NVFP4（获取于 2026-11-09T05:05:05Z；SHA-256：c3c77ec3402045790703b25448dfee1ffe4bb99cb465e972e9c0afe76067fff3）

---

## Holo2 4B

基于 Qwen3-VL 的检查点，用于在网页、桌面和移动端界面中导航及执行多步 GUI 操作。

- 目录页面：https://awesomecua.com/resources/url-16a51d9e725ad5a5c629/
- 原始来源：https://huggingface.co/Hcompany/Holo2-4B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、桌面、跨平台
- 主题：GUI 定位、规划、动作预测
- 证据核查日期：2026-10-17T04:07:19Z
- ID：url:16a51d9e725ad5a5c629

### 范围记录

Two public safetensors shards are present and this 4B model card declares Apache-2.0. The same card assigns different terms to the 30B family member, so the 4B declaration is not generalized to the family.

- 完整记录 JSON：https://awesomecua.com/resources/url-16a51d9e725ad5a5c629/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/Hcompany/Holo2-4B/raw/main/README.md

### 一手证据

- https://huggingface.co/Hcompany/Holo2-4B/raw/main/README.md（获取于 2026-10-17T04:07:19Z；SHA-256：32232445026dc93113beb6b23d3e43da44d6288a67501f8f0023a78a43efb100）
- https://huggingface.co/api/models/Hcompany/Holo2-4B（获取于 2026-10-17T04:07:18Z；SHA-256：bb870c78f3075002ae42a7d1f392fda048fa31a58c865290b2a9b4a1137c6dd3）
- https://huggingface.co/Hcompany/Holo2-4B/raw/main/README.md（获取于 2026-10-17T04:07:19Z；SHA-256：32232445026dc93113beb6b23d3e43da44d6288a67501f8f0023a78a43efb100）

---

## Holo2 8B

Holo2 检查点基于 Qwen3-VL-8B-Thinking，经过监督训练和在线强化学习，用于在网页、桌面和移动界面中定位 UI 元素及执行多步导航。

- 目录页面：https://awesomecua.com/resources/url-38942453b2b7018c0d01/
- 原始来源：https://huggingface.co/Hcompany/Holo2-8B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、桌面、跨平台
- 主题：GUI 定位、规划、动作预测、强化学习
- 证据核查日期：2026-10-18T15:47:52Z
- ID：url:38942453b2b7018c0d01

### 范围记录

The manifest lists four Safetensors shards. The card declares Apache-2.0 for the 4B and 8B sizes but research-only, non-commercial terms for Holo2-30B-A3B, so this declaration is not generalized to the family. The navigation and localization scores on the card were measured by the publisher inside its Surfer 2 agent.

- 完整记录 JSON：https://awesomecua.com/resources/url-38942453b2b7018c0d01/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：Apache-2.0 — https://huggingface.co/Hcompany/Holo2-8B/raw/09cd3b45966f61c8c5ae4bc1424151c682ccc5c8/README.md

- 权重审核：Publisher model-card declaration for the 8B checkpoint; other family sizes, code and training-data terms are separate.
  来源：https://huggingface.co/Hcompany/Holo2-8B/raw/09cd3b45966f61c8c5ae4bc1424151c682ccc5c8/README.md

### 一手证据

- https://huggingface.co/Hcompany/Holo2-8B/raw/09cd3b45966f61c8c5ae4bc1424151c682ccc5c8/README.md（获取于 2026-10-18T15:47:52Z；SHA-256：938f9ed77534e28e978c3c6ee515d6c8fbddda9571d9c2be5c76f9cdd5fc3ac4）
- https://huggingface.co/api/models/Hcompany/Holo2-8B（获取于 2026-10-18T15:47:52Z；SHA-256：6ddb8e359f1fc09d25092eefafd6fe90c746caf135ddf5d0f785dadb840cac97）
- https://huggingface.co/Hcompany/Holo2-8B/raw/09cd3b45966f61c8c5ae4bc1424151c682ccc5c8/config.json（获取于 2026-10-18T15:47:52Z；SHA-256：caa3330852b71c95f7b8a6dda596ede5cf8edfc81b13b4970506092bae854a0f）
- https://huggingface.co/Hcompany/Holo2-8B/raw/09cd3b45966f61c8c5ae4bc1424151c682ccc5c8/README.md（获取于 2026-10-18T15:47:52Z；SHA-256：938f9ed77534e28e978c3c6ee515d6c8fbddda9571d9c2be5c76f9cdd5fc3ac4）

---

## Holo3

Holo3 是面向计算机使用的模型系列，使用合成导航数据和企业工作流程训练。发布方报告了桌面基准测试结果，并提供推理服务和开放权重。

- 目录页面：https://awesomecua.com/resources/url-a03c649e4b14e293e2dd/
- 原始来源：https://hcompany.ai/holo3
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、网页
- 主题：自动化、产业、强化学习、工作流
- 证据核查日期：2026-11-09T05:04:58Z
- ID：url:a03c649e4b14e293e2dd

### 范围记录

The page says Holo3-35B-A3B weights are available on Hugging Face under the Apache2 license. It says all models are available through an inference API.

- 完整记录 JSON：https://awesomecua.com/resources/url-a03c649e4b14e293e2dd/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://hcompany.ai/holo3（获取于 2026-11-09T05:04:58Z；SHA-256：06c345c806f02d24d403572193c43c68cf56766e7abc555cae5fc538fc90274d）

---

## Holo3.1 0.8B

H Company 的 Holo3.1 视觉语言模型系列中最小的检查点，面向网页、桌面和移动端计算机使用智能体，并为智能体框架提供原生函数调用。

- 目录页面：https://awesomecua.com/resources/url-df84f6a103123387b0dd/
- 原始来源：https://huggingface.co/Hcompany/Holo-3.1-0.8B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、桌面、跨平台
- 主题：GUI 定位、动作预测、手机操作、工具集成
- 证据核查日期：2026-10-18T16:21:33Z
- ID：url:df84f6a103123387b0dd

### 范围记录

Hub API at revision 72da4c53 lists one BF16 safetensors file in the Qwen3_5ForConditionalGeneration architecture; the Hub's safetensors metadata counts about 1.11B parameters against the publisher's 0.8B label. The repository is publicly accessible. The card is shared by the whole Holo3.1 family (0.8B, 4B, 9B and 35B-A3B) and names web, desktop and mobile without a mobile operating system. Its YAML base_model lists Qwen3.6-35B-A3B and three Qwen3.5 sizes while its prose says the Qwen 3.5 family, so base_model is unset. H Company's models page lists Holo3.1 at 0.8B, 4B, 9B and 35B-A3B under Apache 2.0, and the card declares Apache-2.0 for the weights.

- 完整记录 JSON：https://awesomecua.com/resources/url-df84f6a103123387b0dd/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/Hcompany/Holo-3.1-0.8B/raw/72da4c53b351eb60e10a7022279019633c479292/README.md

### 一手证据

- https://huggingface.co/Hcompany/Holo-3.1-0.8B/raw/72da4c53b351eb60e10a7022279019633c479292/README.md（获取于 2026-10-18T16:21:33Z；SHA-256：d99bf15b6e5cb377b1b7a75f3cd8e2b0e07d4aa3323576c0e1477afe90712d1a）
- https://huggingface.co/api/models/Hcompany/Holo-3.1-0.8B/revision/72da4c53b351eb60e10a7022279019633c479292（获取于 2026-10-18T16:21:12Z；SHA-256：db1665371386f7fd8bb07753b3e8478a07c55af8b32ac2eb9b7d371dcc140f73）
- https://hcompany.ai/research/models（获取于 2026-10-18T16:10:28Z；SHA-256：ddfa335cd71d0a7a4e61640752b1b24830f951a72c175e88fd03bf00a5e783c8）
- https://huggingface.co/Hcompany/Holo-3.1-0.8B/raw/72da4c53b351eb60e10a7022279019633c479292/README.md（获取于 2026-10-18T16:21:33Z；SHA-256：d99bf15b6e5cb377b1b7a75f3cd8e2b0e07d4aa3323576c0e1477afe90712d1a）

---

## Holo3.1 4B

H Company 的 Holo3.1 系列 4B 检查点，采用稠密 Qwen3.5 架构，是面向网页、桌面和移动端计算机使用智能体、原生支持函数调用的视觉语言模型。

- 目录页面：https://awesomecua.com/resources/url-90b24afa7bb8b2181205/
- 原始来源：https://huggingface.co/Hcompany/Holo-3.1-4B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、桌面、跨平台
- 主题：GUI 定位、动作预测、手机操作、工具集成
- 证据核查日期：2026-10-18T16:02:24Z
- ID：url:90b24afa7bb8b2181205

### 范围记录

Hub API at revision 8c88265a lists two BF16 safetensors shards (about 5.17B parameters, including the vision encoder) in the dense Qwen3_5ForConditionalGeneration architecture; the repository is publicly accessible. The card is shared by the whole Holo3.1 family (0.8B, 4B, 9B and 35B-A3B) and names web, desktop and mobile without a mobile operating system. Its YAML base_model lists Qwen3.6-35B-A3B and three Qwen3.5 sizes and its prose says the Qwen 3.5 family, so base_model is unset. The card lists quantized releases only for the 35B-A3B size. The card declares Apache-2.0 for the weights.

- 完整记录 JSON：https://awesomecua.com/resources/url-90b24afa7bb8b2181205/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/Hcompany/Holo-3.1-4B/raw/8c88265a5a159bfd1492db9243733dd2e6e04a6e/README.md

### 一手证据

- https://huggingface.co/Hcompany/Holo-3.1-4B/raw/8c88265a5a159bfd1492db9243733dd2e6e04a6e/README.md（获取于 2026-10-18T16:02:24Z；SHA-256：059de62841a8ca6c8d2c32f1210ecf58cd8efc8755c2795000d8d87afe49ad5e）
- https://huggingface.co/api/models/Hcompany/Holo-3.1-4B/revision/8c88265a5a159bfd1492db9243733dd2e6e04a6e（获取于 2026-10-18T16:02:03Z；SHA-256：50190a160f8c380aabc1bd4bc2738f357b2bb84e7efbee9a82fca403da13a306）
- https://huggingface.co/Hcompany/Holo-3.1-4B/raw/8c88265a5a159bfd1492db9243733dd2e6e04a6e/README.md（获取于 2026-10-18T16:02:24Z；SHA-256：059de62841a8ca6c8d2c32f1210ecf58cd8efc8755c2795000d8d87afe49ad5e）

---

## Holo3.1 9B

H Company 的 Holo3.1 系列 9B 视觉语言模型检查点，面向网页、桌面和移动端计算机使用智能体，原生支持供智能体框架使用的函数调用。

- 目录页面：https://awesomecua.com/resources/url-4e9e46b2c7a0a21e130d/
- 原始来源：https://huggingface.co/Hcompany/Holo-3.1-9B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、桌面、跨平台
- 主题：GUI 定位、动作预测、手机操作、工具集成
- 证据核查日期：2026-10-18T15:59:40Z
- ID：url:4e9e46b2c7a0a21e130d

### 范围记录

Hub API at revision bcd6a36a lists four BF16 safetensors shards (about 9.41B parameters) in the Qwen3_5ForConditionalGeneration architecture; the repository is publicly accessible. The card is shared by the whole Holo3.1 family (0.8B, 4B, 9B and 35B-A3B) and names web, desktop and mobile without a mobile operating system. Its YAML base_model lists Qwen3.6-35B-A3B and three Qwen3.5 sizes while its prose says the Qwen 3.5 family, so base_model is unset. H Company's models page lists Holo3.1 at 0.8B, 4B, 9B and 35B-A3B under Apache 2.0, and the card declares Apache-2.0 for the weights.

- 完整记录 JSON：https://awesomecua.com/resources/url-4e9e46b2c7a0a21e130d/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/Hcompany/Holo-3.1-9B/raw/bcd6a36af9f100f57cba28e2bf6481ac3feedf33/README.md

### 一手证据

- https://huggingface.co/Hcompany/Holo-3.1-9B/raw/bcd6a36af9f100f57cba28e2bf6481ac3feedf33/README.md（获取于 2026-10-18T15:59:40Z；SHA-256：ce1c6c5fa2863e9aac7816be0e14fdbcbfc097787c548259d252fbab489bead2）
- https://huggingface.co/api/models/Hcompany/Holo-3.1-9B/revision/bcd6a36af9f100f57cba28e2bf6481ac3feedf33（获取于 2026-10-18T15:58:50Z；SHA-256：8e62bd9b79c31d2d63f42a9c9ee39d6be9902abb31e56617efa91c293e505f91）
- https://hcompany.ai/research/models（获取于 2026-10-18T15:59:32Z；SHA-256：ddfa335cd71d0a7a4e61640752b1b24830f951a72c175e88fd03bf00a5e783c8）
- https://huggingface.co/Hcompany/Holo-3.1-9B/raw/bcd6a36af9f100f57cba28e2bf6481ac3feedf33/README.md（获取于 2026-10-18T15:59:40Z；SHA-256：ce1c6c5fa2863e9aac7816be0e14fdbcbfc097787c548259d252fbab489bead2）

---

## HTLM

HTLM 是在 Mind2Web 上微调的紧凑型 350M 浏览器智能体模型，用于在设备端和浏览器内快速预测 DOM 动作。

- 目录页面：https://awesomecua.com/resources/github-espetro-htlm/
- 原始来源：https://github.com/espetro/HTLM
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、动作预测、效率
- 证据核查日期：2026-11-04T14:02:47Z
- ID：github:espetro/htlm

- 完整记录 JSON：https://awesomecua.com/resources/github-espetro-htlm/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/espetro/HTLM/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/espetro/HTLM/HEAD/README.md（获取于 2026-11-04T14:02:47Z；SHA-256：4ad3f8e9ff8ec550408684f13c7791448a02dcc347bc4cb773ef5f642a89fad8）
- https://raw.githubusercontent.com/espetro/HTLM/HEAD/LICENSE（获取于 2026-11-04T14:07:24Z；SHA-256：2806f9c1240c6bad712ef53fb49d810605345290fc261b85984cca211ec5ce16）

---

## inclusionAI/UI-Venus-Navi-7B

基于 Qwen2.5-VL 发布的界面智能体模型，结合截图和先前操作，预测图形界面导航动作及目标元素位置。

- 目录页面：https://awesomecua.com/resources/url-6d36e088ada02184c6bc/
- 原始来源：https://huggingface.co/inclusionAI/UI-Venus-Navi-7B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、Android、桌面
- 主题：GUI 定位、手机操作、强化学习、动作预测
- 证据核查日期：2026-11-09T05:05:17Z
- ID：url:6d36e088ada02184c6bc

### 范围记录

The repository includes model weight shards and a Transformers inference example. The card names reinforcement fine-tuning and declares an Apache 2.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-6d36e088ada02184c6bc/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/inclusionAI/UI-Venus-Navi-7B

### 一手证据

- https://huggingface.co/api/models/inclusionAI/UI-Venus-Navi-7B（获取于 2026-11-09T05:05:17Z；SHA-256：b18b0a8cfa580610699a62cb81ae3eab759f5c02e368c1d808b97bc9efb1c119）
- https://huggingface.co/api/models/inclusionAI/UI-Venus-Navi-7B（获取于 2026-11-09T05:05:17Z；SHA-256：b18b0a8cfa580610699a62cb81ae3eab759f5c02e368c1d808b97bc9efb1c119）

---

## Indeed-UI

面向桌面、移动端和浏览器界面的 GUI 定位模型；仓库提供 ScreenSpot-Pro 评估与放大脚本。

- 目录页面：https://awesomecua.com/resources/github-intelligence-indeed-indeed-ui/
- 原始来源：https://github.com/intelligence-indeed/Indeed-UI
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、桌面、网页
- 主题：GUI 定位、评测、界面理解
- 证据核查日期：2026-11-09T05:05:15Z
- ID：github:intelligence-indeed/indeed-ui

### 范围记录

The README links to an Indeed-UI-32B checkpoint on ModelScope. Evaluation requires local model and ScreenSpot-Pro dataset paths; the README shows an Apache-2.0 license badge.

- 完整记录 JSON：https://awesomecua.com/resources/github-intelligence-indeed-indeed-ui/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/intelligence-indeed/Indeed-UI/HEAD/README.md（获取于 2026-11-09T05:05:15Z；SHA-256：53c56f90c3480d32b821fc1d752529fa5e8d01085f584312126a2cd74a54b7bf）

---

## InfiGUI-R1 3B

采用 Actor2Reasoner 流程训练的 Qwen2.5-VL 检查点，将界面定位与规划、恢复推理相结合。

- 目录页面：https://awesomecua.com/resources/url-35b9879a351cc3b3d7d5/
- 原始来源：https://huggingface.co/InfiX-ai/InfiGUI-R1-3B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、桌面、Android
- 主题：GUI 定位、强化学习、自我反思
- 证据核查日期：2026-10-17T02:05:41Z
- ID：url:35b9879a351cc3b3d7d5

### 范围记录

The official Hub API resolves the former Reallm-Labs model namespace to InfiX-ai. Two safetensors shards and model/tokenizer files are public and ungated. The card declares Apache-2.0 for this checkpoint; base-model terms remain separate. Its older loading example still uses the prior namespace.

- 完整记录 JSON：https://awesomecua.com/resources/url-35b9879a351cc3b3d7d5/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/InfiX-ai/InfiGUI-R1-3B/raw/main/README.md

### 一手证据

- https://huggingface.co/InfiX-ai/InfiGUI-R1-3B/raw/main/README.md（获取于 2026-10-17T02:05:41Z；SHA-256：73496fb30838ba9ea291bb6d1e14004ac3318ac03a1ae7b5d6044e0dc14fd46f）
- https://huggingface.co/api/models/InfiX-ai/InfiGUI-R1-3B（获取于 2026-10-17T02:05:41Z；SHA-256：213a5181a3516cf15d5f7b746986bc1e36cd6579acabd8aa1c2fb16a23a51ee0）
- https://huggingface.co/api/models/Reallm-Labs/InfiGUI-R1-3B（获取于 2026-10-17T02:03:33Z；SHA-256：213a5181a3516cf15d5f7b746986bc1e36cd6579acabd8aa1c2fb16a23a51ee0）
- https://raw.githubusercontent.com/Reallm-Labs/InfiGUI-R1/HEAD/README.md（获取于 2026-10-16T06:36:00Z；SHA-256：5fd1399c88bdf406e7689765ccf0599b3b7e0ddbed082fa92bffdd7b120bd41a）
- https://huggingface.co/InfiX-ai/InfiGUI-R1-3B/raw/main/README.md（获取于 2026-10-17T02:05:41Z；SHA-256：73496fb30838ba9ea291bb6d1e14004ac3318ac03a1ae7b5d6044e0dc14fd46f）
- https://huggingface.co/api/models/Reallm-Labs/InfiGUI-R1-3B（获取于 2026-10-17T19:15:15Z；SHA-256：213a5181a3516cf15d5f7b746986bc1e36cd6579acabd8aa1c2fb16a23a51ee0）
- https://huggingface.co/api/models/InfiX-ai/InfiGUI-R1-3B（获取于 2026-10-17T19:15:16Z；SHA-256：213a5181a3516cf15d5f7b746986bc1e36cd6579acabd8aa1c2fb16a23a51ee0）

---

## jadechoghari/Ferret-UI-Llama8b

Ferret-UI 的 Llama-3-8B 版本，可理解界面截图、回答选定区域的问题，并用边界框定位界面元素。

- 目录页面：https://awesomecua.com/resources/url-4b66957b9799a9e3decc/
- 原始来源：https://huggingface.co/jadechoghari/Ferret-UI-Llama8b
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：GUI 定位、界面理解
- 证据核查日期：2026-11-09T05:05:02Z
- ID：url:4b66957b9799a9e3decc

### 范围记录

The repository file list contains sharded safetensors weights, configuration files and inference code. The card includes examples for region questions and grounding prompts.

- 完整记录 JSON：https://awesomecua.com/resources/url-4b66957b9799a9e3decc/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/models/jadechoghari/Ferret-UI-Llama8b（获取于 2026-11-09T05:05:02Z；SHA-256：818e7ab08f611536bd20dbfd2e3fb3aba6a5fd01d64c34ab6c9069390646d85c）
- https://huggingface.co/api/models/jadechoghari/Ferret-UI-Llama8b（获取于 2026-11-09T05:05:02Z；SHA-256：818e7ab08f611536bd20dbfd2e3fb3aba6a5fd01d64c34ab6c9069390646d85c）

---

## kev-browser-use

kev-browser-use 是紧凑的 0.6B System-One 动作模型，在 Mind2Web 上微调，用于低延迟地选择浏览器元素。

- 目录页面：https://awesomecua.com/resources/github-arbazsiddiqui-kev-browser-use/
- 原始来源：https://github.com/arbazsiddiqui/kev-browser-use
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、动作预测、效率
- 证据核查日期：2026-11-04T14:41:48Z
- ID：github:arbazsiddiqui/kev-browser-use

- 完整记录 JSON：https://awesomecua.com/resources/github-arbazsiddiqui-kev-browser-use/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/arbazsiddiqui/kev-browser-use/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/arbazsiddiqui/kev-browser-use/HEAD/README.md（获取于 2026-11-04T14:41:48Z；SHA-256：daab246d4be8471a7603c12d52d19b4a1c1ddb27870d657efa1facc50d88c92d）
- https://raw.githubusercontent.com/arbazsiddiqui/kev-browser-use/HEAD/LICENSE（获取于 2026-11-04T14:45:11Z；SHA-256：cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30）

---

## Kimi-VL

Moonshot AI 的开源权重 MoE 视觉语言模型，具有 28 亿激活的 LLM 参数和原生分辨率编码器；README 报告了用于操作系统智能体的 OSWorld、ScreenSpot-Pro 和 OSWorld-G 结果。

- 目录页面：https://awesomecua.com/resources/github-moonshotai-kimi-vl/
- 原始来源：https://github.com/MoonshotAI/Kimi-VL
- 类型：模型
- 审核状态：已审核
- 范围：相关研究
- 运行环境：桌面
- 主题：GUI 定位、界面理解
- 证据核查日期：2026-10-18T11:14:16Z
- ID：github:moonshotai/kimi-vl

### 范围记录

General-purpose vision-language model family (Kimi-VL-A3B-Instruct, Kimi-VL-A3B-Thinking and Kimi-VL-A3B-Thinking-2506 on Hugging Face); OS-agent interaction and GUI grounding are reported benchmark capabilities, so the record is adjacent. The inspected tree holds only the README, the technical-report PDF, requirements.txt and LICENSE; it offers documentation rather than a GUI-agent harness or evaluator. The MIT LICENSE file applies to this repository; checkpoint cards declare their own weights terms, which were not reviewed. Weights collection: https://huggingface.co/collections/moonshotai/kimi-vl-a3b-67f67b6ac91d3b03d382dd85. The repository file listing was inspected at Git object 41d5ef072bc5.

- 完整记录 JSON：https://awesomecua.com/resources/github-moonshotai-kimi-vl/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/MoonshotAI/Kimi-VL/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 代码审核：Reviewed repository LICENSE: the MIT license text with typographic quotation marks; it covers this repository, not the separately hosted checkpoints.
  来源：https://raw.githubusercontent.com/MoonshotAI/Kimi-VL/HEAD/LICENSE

### 一手证据

- https://raw.githubusercontent.com/MoonshotAI/Kimi-VL/HEAD/README.md（获取于 2026-10-18T11:14:16Z；SHA-256：6efabbe27d40d6180d1ab11eee51a8709b5400343cead682786e1aaee89926f4）
- https://api.github.com/repos/MoonshotAI/Kimi-VL（获取于 2026-10-18T11:14:17Z；SHA-256：1e4456ecef6609ac5f6a053cd4c337bf98c92ec65d183ac6b046e9a73799929a）
- https://api.github.com/repos/MoonshotAI/Kimi-VL/git/trees/main?recursive=1（获取于 2026-10-18T11:14:18Z；SHA-256：0d00b2a3db74a2b2ac0b6148bb376fb107c1b9598a993220c874ece627e5c7ec）
- https://raw.githubusercontent.com/MoonshotAI/Kimi-VL/HEAD/LICENSE（获取于 2026-10-18T11:14:18Z；SHA-256：f0c89806155f93f4ea5cb9e81ef70aad1a7729240132df9706db9584024547db）

---

## KV-Ground 8B (BaseGuiOwl1.5 0315)

基于 GUI-Owl-1.5-8B-Instruct，经清洗和合成的高分辨率数据进行 SFT 与 GRPO 后训练的 GUI 元素定位检查点，用于在大型截图中定位元素。

- 目录页面：https://awesomecua.com/resources/url-461125e2d6ac2f030f6b/
- 原始来源：https://huggingface.co/vocaela/KV-Ground-8B-BaseGuiOwl1.5-0315
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、跨平台
- 主题：GUI 定位、强化学习、数据生成
- 证据核查日期：2026-10-18T11:15:53Z
- ID：url:461125e2d6ac2f030f6b

### 范围记录

The Hub repository holds four safetensors shards in the Qwen3-VL architecture inherited from its base. The card, by Kingsware and Vocaela AI, declares CC BY-NC-SA 4.0 for this checkpoint (non-commercial, share-alike). The base model mPLUG/GUI-Owl-1.5-8B-Instruct is not an active catalog record, so no variant relation is recorded. Card scores (73.2 on ScreenSpot-Pro without zoom-in, 80.5 with it) are publisher measurements with the publisher's own prompt setup; the card has no training-data release. Smaller 4B siblings from the same publisher are separate Hub repositories.

- 完整记录 JSON：https://awesomecua.com/resources/url-461125e2d6ac2f030f6b/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：cc-by-nc-sa-4.0 — https://huggingface.co/vocaela/KV-Ground-8B-BaseGuiOwl1.5-0315/raw/main/README.md

### 一手证据

- https://huggingface.co/vocaela/KV-Ground-8B-BaseGuiOwl1.5-0315/raw/main/README.md（获取于 2026-10-18T11:15:53Z；SHA-256：e10fdbfe36ec84b4bd940bea40e11820f37a6b0f92e319eb1045b868553c0431）
- https://huggingface.co/api/models/vocaela/KV-Ground-8B-BaseGuiOwl1.5-0315（获取于 2026-10-18T11:15:54Z；SHA-256：01bcd8906eefdb60bd77dc340c4a254b228734d0830ad2bdd9cd5c9377759145）
- https://huggingface.co/vocaela/KV-Ground-8B-BaseGuiOwl1.5-0315/raw/main/README.md（获取于 2026-10-18T11:15:53Z；SHA-256：e10fdbfe36ec84b4bd940bea40e11820f37a6b0f92e319eb1045b868553c0431）

---

## KV-Ground-4B-BaseGuiOwl1.5-0228

用于在高分辨率界面图像中定位目标的 4B 视觉语言模型，以 GUI-Owl-1.5-4B-Instruct 为基础，经过监督微调和基于奖励的后训练。

- 目录页面：https://awesomecua.com/resources/url-709d8b51bbc8d257318f/
- 原始来源：https://huggingface.co/vocaela/KV-Ground-4B-BaseGuiOwl1.5-0228
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：GUI 定位、界面理解、强化学习
- 证据核查日期：2026-11-09T06:16:33Z
- ID：url:709d8b51bbc8d257318f

### 范围记录

The repository contains sharded safetensors weights and tokenizer files. The card declares a CC BY-NC-SA 4.0 license and points to separate evaluation code.

- 完整记录 JSON：https://awesomecua.com/resources/url-709d8b51bbc8d257318f/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：cc-by-nc-sa-4.0 — https://huggingface.co/vocaela/KV-Ground-4B-BaseGuiOwl1.5-0228

### 一手证据

- https://huggingface.co/api/models/vocaela/KV-Ground-4B-BaseGuiOwl1.5-0228（获取于 2026-11-09T06:16:33Z；SHA-256：1d8b01966bddfaead27daf01fcb049ad1731149599187be92b9ba71f9baf94d0）
- https://huggingface.co/api/models/vocaela/KV-Ground-4B-BaseGuiOwl1.5-0228（获取于 2026-11-09T06:16:33Z；SHA-256：1d8b01966bddfaead27daf01fcb049ad1731149599187be92b9ba71f9baf94d0）

---

## KV-Ground-4B-BaseQw3vl

这款 4B 界面定位模型接收高分辨率截图和文字指令，基于 Qwen3-VL-4B-Instruct 经监督训练及基于奖励的训练得到。

- 目录页面：https://awesomecua.com/resources/url-969eb56a53187cda74c7/
- 原始来源：https://huggingface.co/vocaela/KV-Ground-4B-BaseQw3vl
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：GUI 定位、界面理解、强化学习
- 证据核查日期：2026-11-09T05:05:00Z
- ID：url:969eb56a53187cda74c7

### 范围记录

The card declares a CC BY-NC-SA 4.0 license and points to evaluation code in the kv-ground repository. The file list includes two safetensors weight shards.

- 完整记录 JSON：https://awesomecua.com/resources/url-969eb56a53187cda74c7/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：cc-by-nc-sa-4.0 — https://huggingface.co/vocaela/KV-Ground-4B-BaseQw3vl

### 一手证据

- https://huggingface.co/api/models/vocaela/KV-Ground-4B-BaseQw3vl（获取于 2026-11-09T05:05:00Z；SHA-256：b41afdcedc410f0c62bb513ab5f3536a5f8ca02dad49bbe327ad917a177bd35d）
- https://huggingface.co/api/models/vocaela/KV-Ground-4B-BaseQw3vl（获取于 2026-11-09T05:05:00Z；SHA-256：b41afdcedc410f0c62bb513ab5f3536a5f8ca02dad49bbe327ad917a177bd35d）

---

## Laya-Android

Laya-Android 是用于 Android GUI 动作选择的紧凑型 322M 设备端决策模型。

- 目录页面：https://awesomecua.com/resources/github-byun11-laya-android/
- 原始来源：https://github.com/Byun11/laya-android
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：手机操作、动作预测、效率
- 证据核查日期：2026-11-04T14:20:16Z
- ID：github:byun11/laya-android

- 完整记录 JSON：https://awesomecua.com/resources/github-byun11-laya-android/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/Byun11/laya-android/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/Byun11/laya-android/HEAD/README.md（获取于 2026-11-04T14:20:16Z；SHA-256：a1e8e42f00cdad617bc11a04939d3d6269158f473c088da58e8f4cf33b34838c）
- https://raw.githubusercontent.com/Byun11/laya-android/HEAD/LICENSE（获取于 2026-11-04T14:23:48Z；SHA-256：a6cba85bc92e0cff7a450b1d873c0eaa2e9fc96bf472df0247a26bec77bf3ff9）

---

## laya-browser

基于 322M 参数 laya 编码器微调的非生成式浏览器智能体策略；单次前向计算读取页面文本和可交互元素列表，选出下一步操作及目标元素。

- 目录页面：https://awesomecua.com/resources/url-c5b0e2eab771f62792fb/
- 原始来源：https://huggingface.co/cklxx/laya-browser
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、动作预测、效率
- 证据核查日期：2026-10-18T12:13:54Z
- ID：url:c5b0e2eab771f62792fb

### 范围记录

Built as the per-step decision head of the jev-ultrafast browser agent. The remote code builds each request from the page URL, title, up to 1,200 characters of page text, the interactive elements with their roles and the last ten actions; it takes no screenshot, and a separate local LLM writes the text that TYPE_TEXT enters. The repository also ships a jev-ultrafast-compatible server, evaluation suites, training pipeline code, a harness patch and result logs. The card reports 11 to 14 of 54 multi-step tasks on held-out real sites for version v19s and 22 to 27 ms per decision on one RTX 4070 Ti SUPER; these are publisher measurements. The card metadata declares Apache-2.0 and says the training datasets keep their own licenses.

- 完整记录 JSON：https://awesomecua.com/resources/url-c5b0e2eab771f62792fb/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/cklxx/laya-browser/raw/645cf366a2ae35f1086e8c20eff48f909bb49206/README.md

### 一手证据

- https://huggingface.co/cklxx/laya-browser/raw/645cf366a2ae35f1086e8c20eff48f909bb49206/README.md（获取于 2026-10-18T12:13:54Z；SHA-256：09dd7dc3675472a53ee8ab2996ae28ba7831e384503d889947b9811959f540e2）
- https://huggingface.co/api/models/cklxx/laya-browser/revision/645cf366a2ae35f1086e8c20eff48f909bb49206（获取于 2026-10-18T12:13:55Z；SHA-256：cf1089fa62e9a7f942c4bf071708d47d72b712ab9a99b5ba930341df5169e2ac）
- https://huggingface.co/cklxx/laya-browser/raw/645cf366a2ae35f1086e8c20eff48f909bb49206/modeling_laya_browser.py（获取于 2026-10-18T12:13:55Z；SHA-256：d084f8720ee4a738efc3cee6e0cef78ab983af8cf17939957af2c2265fdd99d1）
- https://huggingface.co/cklxx/laya-browser/raw/645cf366a2ae35f1086e8c20eff48f909bb49206/README.md（获取于 2026-10-18T12:13:54Z；SHA-256：09dd7dc3675472a53ee8ab2996ae28ba7831e384503d889947b9811959f540e2）

---

## Llama-3-8B-Web

基于 WebLINX 网页交互和对话微调的 Llama 3 8B 指令模型检查点，根据文本形式的状态表示预测浏览器动作。

- 目录页面：https://awesomecua.com/resources/url-7c3e8c4ba52428584079/
- 原始来源：https://huggingface.co/McGill-NLP/Llama-3-8B-Web
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、模仿学习、动作预测
- 证据核查日期：2026-10-17T12:34:10Z
- ID：url:7c3e8c4ba52428584079

### 范围记录

The ungated Hub manifest includes model.safetensors, pytorch_model.bin, config and tokenizer files; the two weight formats represent the same checkpoint. The card describes an approximately 24K-example curated WebLINX training subset and evaluates dialogue-guided web navigation. Predictions still require parsing and execution in an external browser environment. The retained weight license is the Meta Llama 3 Community License Agreement, not WebLlama code MIT. No weights were downloaded, model used, or agreement accepted.

- 完整记录 JSON：https://awesomecua.com/resources/url-7c3e8c4ba52428584079/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：Meta Llama 3 Community License Agreement — https://huggingface.co/McGill-NLP/Llama-3-8B-Web/raw/main/META_LLAMA_3_COMMUNITY_LICENSE_AGREEMENT.txt

- 权重审核：Weight license text and card declaration are retained separately from framework code licensing.
  来源：https://huggingface.co/McGill-NLP/Llama-3-8B-Web/raw/main/META_LLAMA_3_COMMUNITY_LICENSE_AGREEMENT.txt, https://huggingface.co/McGill-NLP/Llama-3-8B-Web/raw/main/README.md

### 一手证据

- https://huggingface.co/McGill-NLP/Llama-3-8B-Web/raw/main/README.md（获取于 2026-10-17T12:34:10Z；SHA-256：1a445c7894c65c9a7c4247dba446c206c13ac2ecdc129ce93a0de943f2984a18）
- https://huggingface.co/api/models/McGill-NLP/Llama-3-8B-Web（获取于 2026-10-17T12:34:10Z；SHA-256：69fe17825db0d5f32ccaa84b67fabfa10018e1410da0c70ec0ea9509703feba2）
- https://huggingface.co/McGill-NLP/Llama-3-8B-Web/raw/main/META_LLAMA_3_COMMUNITY_LICENSE_AGREEMENT.txt（获取于 2026-10-17T12:36:55Z；SHA-256：6bcca341999ab474e2973116128177b77f97cd64028eeace224035358ce6474f）

---

## Llama8b-NNetNav-WA

基于 WebArena 探索轨迹训练的 Llama 模型，可根据任务指令选择浏览器操作并完成网页导航。

- 目录页面：https://awesomecua.com/resources/url-c9d2a9288a568db12bd1/
- 原始来源：https://huggingface.co/stanfordnlp/llama8b-nnetnav-wa
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、动作预测、模仿学习、评测
- 证据核查日期：2026-11-09T05:05:20Z
- ID：url:c9d2a9288a568db12bd1

### 范围记录

The release lists model weights and tokenizer files. The card names meta-llama/Llama-3.1-8B-Instruct as the base model and declares an Apache-2.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-c9d2a9288a568db12bd1/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/stanfordnlp/llama8b-nnetnav-wa

### 一手证据

- https://huggingface.co/api/models/stanfordnlp/llama8b-nnetnav-wa（获取于 2026-11-09T05:05:20Z；SHA-256：631a6fa1e212047dd672cd03b340e842272fa16d1802c7ee22e987c7fba2018a）
- https://huggingface.co/api/models/stanfordnlp/llama8b-nnetnav-wa（获取于 2026-11-09T05:05:20Z；SHA-256：631a6fa1e212047dd672cd03b340e842272fa16d1802c7ee22e987c7fba2018a）

---

## Magma

微软的多模态智能体基础模型，在 UI、机器人和视频数据上以 Set-of-Mark 和 Trace-of-Mark 目标预训练，可微调用于网页和移动端 UI 导航。

- 目录页面：https://awesomecua.com/resources/github-microsoft-magma/
- 原始来源：https://github.com/microsoft/Magma
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：GUI 定位、规划、手机操作
- 证据核查日期：2026-10-17T17:18:21Z
- ID：github:microsoft/magma

- 完整记录 JSON：https://awesomecua.com/resources/github-microsoft-magma/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/microsoft/Magma/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/microsoft/Magma/HEAD/README.md（获取于 2026-10-17T17:18:21Z；SHA-256：8aaf8feff6e1d5a533c01afd8afc0cfc0700f0c1c73ba47949b56c11fb8ab5be）
- https://raw.githubusercontent.com/microsoft/Magma/HEAD/LICENSE（获取于 2026-10-17T17:18:56Z；SHA-256：c2cfccb812fe482101a8f04597dfc5a9991a6b2748266c47ac91b6a5aae15383）

---

## Mano-P

Mano-P 是针对边缘设备优化的开源 GUI 视觉语言动作模型，已在 OSWorld 和 Mind2Web 上接受评测。

- 目录页面：https://awesomecua.com/resources/github-mininglamp-ai-mano-p/
- 原始来源：https://github.com/Mininglamp-AI/Mano-P
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、桌面、网页、Android
- 主题：GUI 定位、动作预测、效率
- 证据核查日期：2026-11-04T14:02:40Z
- ID：github:mininglamp-ai/mano-p

- 完整记录 JSON：https://awesomecua.com/resources/github-mininglamp-ai-mano-p/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/Mininglamp-AI/Mano-P/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/Mininglamp-AI/Mano-P/HEAD/README.md（获取于 2026-11-04T14:02:40Z；SHA-256：1c778701e5304c663970e6ec21cfba2d090ba3579faa428fef5b1183df30b4c9）
- https://raw.githubusercontent.com/Mininglamp-AI/Mano-P/HEAD/LICENSE（获取于 2026-11-04T14:07:24Z；SHA-256：583a43ea83ecccb3844708314c171032e9fd514fd4c6d2415a8bed7d924af3c2）

---

## Milo-Pointer

Milo-Pointer 使用设备端 149M 文本编码器，为移动端手机智能体提供快速的第一层路由和动作选择。

- 目录页面：https://awesomecua.com/resources/github-chayworks-milo-pointer/
- 原始来源：https://github.com/chayworks/milo-pointer
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：手机操作、效率、GUI 定位
- 证据核查日期：2026-11-04T14:20:16Z
- ID：github:chayworks/milo-pointer

- 完整记录 JSON：https://awesomecua.com/resources/github-chayworks-milo-pointer/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/chayworks/milo-pointer/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/chayworks/milo-pointer/HEAD/README.md（获取于 2026-11-04T14:20:16Z；SHA-256：eb4014518622cc0da35b9466383b6168b2b9deaf5789e80396b0d47610b18752）
- https://raw.githubusercontent.com/chayworks/milo-pointer/HEAD/LICENSE（获取于 2026-11-04T14:23:48Z；SHA-256：cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30）

---

## MiniMax M3

MiniMax M3 是多模态模型；发布页面介绍了其根据视觉输入操作电脑桌面，以及通过 MiniMax Code 完成跨应用任务的能力。

- 目录页面：https://awesomecua.com/resources/url-50089323623ee780a426/
- 原始来源：https://www.minimaxi.com/blog/minimax-m3
- 类型：模型
- 审核状态：已审核
- 范围：相关研究
- 运行环境：桌面
- 主题：界面理解、跨应用、自动化
- 证据核查日期：2026-11-09T06:16:39Z
- ID：url:50089323623ee780a426

### 范围记录

The page says M3 is available through MiniMax Code, a token plan, and an API. It says model weights were planned for a later release.

- 完整记录 JSON：https://awesomecua.com/resources/url-50089323623ee780a426/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://www.minimaxi.com/blog/minimax-m3（获取于 2026-11-09T06:16:39Z；SHA-256：871aabe31c323df2b04af880a266acddab10ad082b929ad1715176d095339b7c）

---

## MM-Eureka

MM-Eureka 提供基于 OpenRLHF 和 InternVL 的规则驱动多模态强化学习代码、模型和数据集。

- 目录页面：https://awesomecua.com/resources/github-modalminds-mm-eureka/
- 原始来源：https://github.com/ModalMinds/MM-EUREKA
- 类型：模型
- 审核状态：已审核
- 范围：相关研究
- 运行环境：unspecified
- 主题：强化学习、界面理解
- 证据核查日期：2026-11-04T13:12:26Z
- ID：github:modalminds/mm-eureka

- 完整记录 JSON：https://awesomecua.com/resources/github-modalminds-mm-eureka/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/ModalMinds/MM-EUREKA/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/ModalMinds/MM-EUREKA/HEAD/README.md（获取于 2026-11-04T13:12:26Z；SHA-256：db5b32aa61f24b12f77b672b151d087390750f983d62eaf9b6b1bff33cae0b23）
- https://raw.githubusercontent.com/ModalMinds/MM-EUREKA/HEAD/LICENSE（获取于 2026-11-04T13:41:37Z；SHA-256：43070e2d4e532684de521b885f385d0841030efa2b1a20bafb76133a5e1379c1）

---

## MobileVLM

MobileVLM 是在 Mobile3M UI 转换图上预训练的视觉语言模型，用于理解移动端 UI 的屏幕内及跨屏幕关系。

- 目录页面：https://awesomecua.com/resources/github-xiaomi-mobilevlm/
- 原始来源：https://github.com/XiaoMi/mobilevlm
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：界面理解、手机操作、动作预测
- 证据核查日期：2026-11-04T13:12:45Z
- ID：github:xiaomi/mobilevlm

- 完整记录 JSON：https://awesomecua.com/resources/github-xiaomi-mobilevlm/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/XiaoMi/mobilevlm/HEAD/README.md（获取于 2026-11-04T13:12:45Z；SHA-256：e8a92a783b6b65cacedf105e5ede583668f8774f2a81a2005dc6897da6fa88ef）

---

## MP-GUI

MP-GUI 提供多模态感知训练和评测代码，结合图形、文本和空间专家进行 GUI 理解。

- 目录页面：https://awesomecua.com/resources/github-bigtaige-mp-gui/
- 原始来源：https://github.com/BigTaige/MP-GUI
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：Android、桌面
- 主题：界面理解、GUI 定位
- 证据核查日期：2026-11-04T13:12:08Z
- ID：github:bigtaige/mp-gui

- 完整记录 JSON：https://awesomecua.com/resources/github-bigtaige-mp-gui/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/BigTaige/MP-GUI/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/BigTaige/MP-GUI/HEAD/README.md（获取于 2026-11-04T13:12:08Z；SHA-256：d6253125be06f3ab7f0fe96ca9dfc94559be5f7fab722b8e9e75e9cdfa2a102f）
- https://raw.githubusercontent.com/BigTaige/MP-GUI/HEAD/LICENSE（获取于 2026-11-04T13:22:42Z；SHA-256：5b1b6bd7af109e87cdde9905738be3747cad8a199609ac3ce7889aab59bd7f8f）

---

## Muse-Glimmer-30B-GUI-Grounding-Fast

基于 Muse-Glimmer-30B 的 LoRA 适配器，根据截图和指令输出界面元素的边界框，示例涵盖桌面、移动端和网页界面。

- 目录页面：https://awesomecua.com/resources/url-7645072fe9580fa9993a/
- 原始来源：https://huggingface.co/lemuralabs/Muse-Glimmer-30B-GUI-Grounding-Fast
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、桌面、Windows、macOS、Android、iOS、网页
- 主题：GUI 定位、效率、界面理解
- 证据核查日期：2026-11-09T05:05:21Z
- ID：url:7645072fe9580fa9993a

### 范围记录

The repository lists adapter configuration and weight files. The card says it uses the Muse-Glimmer-30B base model, describes GUI grounding training data, and declares an Apache-2.0 license.

- 完整记录 JSON：https://awesomecua.com/resources/url-7645072fe9580fa9993a/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/lemuralabs/Muse-Glimmer-30B-GUI-Grounding-Fast

### 一手证据

- https://huggingface.co/api/models/lemuralabs/Muse-Glimmer-30B-GUI-Grounding-Fast（获取于 2026-11-09T05:05:21Z；SHA-256：e8c4160e992a1ec22112341ed4b69762d49779460489e10a7d9a511fcae54558）
- https://huggingface.co/api/models/lemuralabs/Muse-Glimmer-30B-GUI-Grounding-Fast（获取于 2026-11-09T05:05:21Z；SHA-256：e8c4160e992a1ec22112341ed4b69762d49779460489e10a7d9a511fcae54558）

---

## omniparser-finetuned

omniparser-finetuned 发布用于界面解析的 Florence-2 图标描述模型权重，训练数据包含图标标签和截图裁剪。

- 目录页面：https://awesomecua.com/resources/url-e2b79e8d1c6a28c65bff/
- 原始来源：https://huggingface.co/Proteus-Computer-Use/omniparser-finetuned
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、网页
- 主题：界面理解、GUI 定位
- 证据核查日期：2026-11-09T05:05:06Z
- ID：url:e2b79e8d1c6a28c65bff

### 范围记录

The card supplies a Transformers inference example and describes Font Awesome icons, Google Maps screenshot anchors and hard negatives. It declares an MIT license.

- 完整记录 JSON：https://awesomecua.com/resources/url-e2b79e8d1c6a28c65bff/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：mit — https://huggingface.co/Proteus-Computer-Use/omniparser-finetuned

### 一手证据

- https://huggingface.co/api/models/Proteus-Computer-Use/omniparser-finetuned（获取于 2026-11-09T05:05:06Z；SHA-256：031ae002e2b7e7aba726379e23fd732def1869acf97646837df875087474a902）
- https://huggingface.co/api/models/Proteus-Computer-Use/omniparser-finetuned（获取于 2026-11-09T05:05:06Z；SHA-256：031ae002e2b7e7aba726379e23fd732def1869acf97646837df875087474a902）

---

## OneJev

OneJev 是基于 Qwen 的多模态 System-One 决策模型，可返回不同类型动作选项的校准概率。

- 目录页面：https://awesomecua.com/resources/github-omnijev-onejev/
- 原始来源：https://github.com/OmniJev/OneJev
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、网页、桌面、Android
- 主题：动作预测、效率
- 证据核查日期：2026-11-04T14:41:48Z
- ID：github:omnijev/onejev

- 完整记录 JSON：https://awesomecua.com/resources/github-omnijev-onejev/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/OmniJev/OneJev/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/OmniJev/OneJev/HEAD/README.md（获取于 2026-11-04T14:41:48Z；SHA-256：93f7ac68c4a05fa8e551d89f068d4546458b1bd4e7cd634eb5949bf2c3c6eb62）
- https://raw.githubusercontent.com/OmniJev/OneJev/HEAD/LICENSE（获取于 2026-11-04T14:45:10Z；SHA-256：cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30）

---

## OpenAI CUA

随 Operator 研究预览版推出的计算机使用模型。

- 目录页面：https://awesomecua.com/resources/url-74eeb7c9fb20674fe6e2/
- 原始来源：https://openai.com/index/computer-using-agent/
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、桌面
- 主题：规划、GUI 定位
- 证据核查日期：2026-10-16T06:38:27Z
- ID：url:74eeb7c9fb20674fe6e2

- 完整记录 JSON：https://awesomecua.com/resources/url-74eeb7c9fb20674fe6e2/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://openai.com/index/computer-using-agent/（获取于 2026-10-16T06:38:27Z；SHA-256：14f573af0c4ea3e5922b8831b7f03724936963e293d7c0aaa3fccbb71dbb0cfa）

---

## OpenCSG-Qwen2.5-7B-GUI

这是一款面向 AutoHub 插件的浏览器自动化模型，可根据自然语言请求执行网页操作和信息检索。

- 目录页面：https://awesomecua.com/resources/url-2462fb9d529bac7fa896/
- 原始来源：https://huggingface.co/opencsg/OpenCSG-Qwen2.5-7B-GUI
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：自动化、网页导航
- 证据核查日期：2026-11-09T05:05:00Z
- ID：url:2462fb9d529bac7fa896

### 范围记录

The card names Qwen2.5-VL-7B-Instruct as its base model and declares an Apache-2.0 license. The repository file list includes model weight shards.

- 完整记录 JSON：https://awesomecua.com/resources/url-2462fb9d529bac7fa896/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/opencsg/OpenCSG-Qwen2.5-7B-GUI

### 一手证据

- https://huggingface.co/api/models/opencsg/OpenCSG-Qwen2.5-7B-GUI（获取于 2026-11-09T05:05:00Z；SHA-256：22fb385a2884521c0d7b02f5b67ef19ed4e099d84d095584b6b046e80734fece）
- https://huggingface.co/api/models/opencsg/OpenCSG-Qwen2.5-7B-GUI（获取于 2026-11-09T05:05:00Z；SHA-256：22fb385a2884521c0d7b02f5b67ef19ed4e099d84d095584b6b046e80734fece）

---

## OpenCUA 32B

基于 Qwen2.5-VL 的计算机使用模型检查点，结合截图历史、规划和经界面定位的可执行操作。

- 目录页面：https://awesomecua.com/resources/url-ad7f176848fd84de64e2/
- 原始来源：https://huggingface.co/xlangai/OpenCUA-32B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Linux、Windows、macOS
- 主题：GUI 定位、规划、自我反思
- 证据核查日期：2026-10-17T02:44:29Z
- ID：url:ad7f176848fd84de64e2

### 范围记录

The public manifest contains 64 safetensors shards. The card declares MIT for this model and names its Qwen2.5-VL base; upstream terms remain separate. This is the 32B release, distinct from the existing 72B preview. Family-level and 72B benchmark scores apply to separate releases from this 32B model.

- 完整记录 JSON：https://awesomecua.com/resources/url-ad7f176848fd84de64e2/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：mit — https://huggingface.co/xlangai/OpenCUA-32B/raw/main/README.md

### 一手证据

- https://huggingface.co/xlangai/OpenCUA-32B/raw/main/README.md（获取于 2026-10-17T02:44:29Z；SHA-256：151217eb96e4ab22a47c98766052e5cfd76497a2a9197cc125c0237f3fbc59f6）
- https://huggingface.co/api/models/xlangai/OpenCUA-32B（获取于 2026-10-17T02:44:29Z；SHA-256：a3be2e1a6cd39ee89809baa9504813c4a6a9a03bbd916e82924cc0f89cb5da33）
- https://huggingface.co/xlangai/OpenCUA-32B/raw/main/README.md（获取于 2026-10-17T02:44:29Z；SHA-256：151217eb96e4ab22a47c98766052e5cfd76497a2a9197cc125c0237f3fbc59f6）

---

## OpenCUA 72B

基于 Qwen2.5-VL 的计算机使用检查点，结合截图历史和反思推理来预测可执行的桌面操作。

- 目录页面：https://awesomecua.com/resources/url-4a0b1692589594745a3c/
- 原始来源：https://huggingface.co/xlangai/OpenCUA-72B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Linux、Windows、macOS
- 主题：GUI 定位、规划、动作预测、自我反思
- 证据核查日期：2026-10-17T09:14:12Z
- ID：url:4a0b1692589594745a3c

### 范围记录

The former OpenCUA-72B-preview API redirects to the canonical xlangai/OpenCUA-72B repository. The public manifest lists 82 safetensors weight shards plus an index and custom model/tokenizer code. The card declares MIT for the released model and describes absolute coordinates after smart resizing.

- 完整记录 JSON：https://awesomecua.com/resources/url-4a0b1692589594745a3c/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：mit — https://huggingface.co/xlangai/OpenCUA-72B/raw/main/README.md

- 权重审核：Publisher model card explicitly declares MIT for the released model; other code and training-data scopes are not generalized.
  来源：https://huggingface.co/xlangai/OpenCUA-72B/raw/main/README.md

### 一手证据

- https://huggingface.co/xlangai/OpenCUA-72B/raw/main/README.md（获取于 2026-10-17T09:14:12Z；SHA-256：ebe551af1008a2307d16cf68715fc1861f8c501c4981660dbe08f691cf73d787）
- https://huggingface.co/api/models/xlangai/OpenCUA-72B（获取于 2026-10-17T09:14:12Z；SHA-256：ff0ee40df2f44a2b3aa1b8117c31752013a40fdb6a85d66cdc596e096583ac5d）
- https://huggingface.co/api/models/xlangai/OpenCUA-72B-preview（获取于 2026-10-17T09:15:35Z；SHA-256：ff0ee40df2f44a2b3aa1b8117c31752013a40fdb6a85d66cdc596e096583ac5d）
- https://huggingface.co/api/models/xlangai/OpenCUA-72B-preview（获取于 2026-10-17T19:15:04Z；SHA-256：ff0ee40df2f44a2b3aa1b8117c31752013a40fdb6a85d66cdc596e096583ac5d）
- https://huggingface.co/api/models/xlangai/OpenCUA-72B（获取于 2026-10-17T19:15:05Z；SHA-256：ff0ee40df2f44a2b3aa1b8117c31752013a40fdb6a85d66cdc596e096583ac5d）

---

## OpenCUA-7B

基于 Qwen2.5-VL 的计算机使用模型，结合截图、指令和近期屏幕历史生成桌面操作。

- 目录页面：https://awesomecua.com/resources/url-2803eda78cff23fb63cc/
- 原始来源：https://huggingface.co/xlangai/OpenCUA-7B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Linux、Windows、macOS
- 主题：动作预测、GUI 定位、交互历史、规划
- 证据核查日期：2026-11-09T05:05:20Z
- ID：url:2803eda78cff23fb63cc

### 范围记录

The repository lists sharded model weights and custom configuration, modeling, processing and tokenization files. The card recommends vLLM with remote code enabled and declares an MIT license.

- 完整记录 JSON：https://awesomecua.com/resources/url-2803eda78cff23fb63cc/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：mit — https://huggingface.co/xlangai/OpenCUA-7B

### 一手证据

- https://huggingface.co/api/models/xlangai/OpenCUA-7B（获取于 2026-11-09T05:05:20Z；SHA-256：fadf1f823e27a9ea4f114d6fc1371ebf71e4d2ab909f828cdafc9d073ce1cf5d）
- https://huggingface.co/api/models/xlangai/OpenCUA-7B（获取于 2026-11-09T05:05:20Z；SHA-256：fadf1f823e27a9ea4f114d6fc1371ebf71e4d2ab909f828cdafc9d073ce1cf5d）

---

## OpenJev

1.7B、4B 和 8B 决策模型可单次回答类型化问题并给出校准概率；使用浏览器智能体步骤和通用决策数据训练，用于选择网页智能体的下一步操作及元素。

- 目录页面：https://awesomecua.com/resources/github-alanhuangyoo-openjev/
- 原始来源：https://github.com/alanhuangyoo/OpenJev
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：动作预测、网页导航、效率
- 证据核查日期：2026-10-18T16:16:18Z
- ID：github:alanhuangyoo/openjev

### 范围记录

Models and code for an open replacement of a hosted System One decision API. A Qwen3 or Qwen3.5 backbone without its vocabulary head scores each option with a pointer head, so one pass answers every question in a request; a local server exposes POST /v1/systemone. Browser steps arrive as page text, numbered elements and recent actions, and the model chooses an operation (click, type, DONE and others) and a target element. The repository holds the wev package (data conversion for Mind2Web, NNetNav and WebChain, training, calibration, export, serving), teacher-collection scripts, the OpenJev-Bench browser-lane client (2,346 frozen steps stored in the Hub dataset alanhuangya/OpenJev-Data), locked results and the paper source; the paper is a Zenodo deposit (doi 10.5281/zenodo.22941164) with no catalog record. The models also answer general decisions such as triage and routing. Results are publisher-reported, and live-website numbers use an LLM judge.

- 完整记录 JSON：https://awesomecua.com/resources/github-alanhuangyoo-openjev/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/alanhuangyoo/OpenJev/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/alanhuangya/OpenJev-4B/raw/368713247ad2a50d56542b4d812823626eb504e7/README.md

- 权重审核：All three Hub model cards declare apache-2.0 (OpenJev-4B at 3687132, OpenJev-8B at 32bc7cb, OpenJev-1.7B at 7418ae8). This covers the released weights only; the README warns that parts of the training data are research-only or subject to a model provider's terms.
  来源：https://huggingface.co/alanhuangya/OpenJev-4B/raw/368713247ad2a50d56542b4d812823626eb504e7/README.md, https://huggingface.co/alanhuangya/OpenJev-8B/raw/32bc7cb98f8fc0c0b517d440d1b97de521eb3315/README.md, https://huggingface.co/alanhuangya/OpenJev-1.7B/raw/7418ae8b6e3b6a6507a8a58729ae491cd1c732d9/README.md

### 一手证据

- https://raw.githubusercontent.com/alanhuangyoo/OpenJev/HEAD/README.md（获取于 2026-10-18T16:16:18Z；SHA-256：c5dee060aab4f95fd80d8d3b463b336e67fbea6f42df31e6f334942335523ebe）
- https://raw.githubusercontent.com/alanhuangyoo/OpenJev/da6a68fb9195958cc0a6cdb7b35587acec436a65/wev/model.py（获取于 2026-10-18T16:15:40Z；SHA-256：f7e09479e92b5cc321adc2f6f5116b79cd99c3348fc2ffe55e32b6829c9d08d8）
- https://raw.githubusercontent.com/alanhuangyoo/OpenJev/da6a68fb9195958cc0a6cdb7b35587acec436a65/wev/serve.py（获取于 2026-10-18T16:15:40Z；SHA-256：43c32fdd4dc7f0ba95373efde8af01f294271c3375cf0b2a163f3c16fe1f3bf8）
- https://raw.githubusercontent.com/alanhuangyoo/OpenJev/da6a68fb9195958cc0a6cdb7b35587acec436a65/scripts/wev_bench.py（获取于 2026-10-18T16:15:41Z；SHA-256：3b1ad4252bca15a371971c966f2b6bf449cb84d5e17e9fa1e731126610fc319b）
- https://raw.githubusercontent.com/alanhuangyoo/OpenJev/da6a68fb9195958cc0a6cdb7b35587acec436a65/wev/mind2web.py（获取于 2026-10-18T16:15:41Z；SHA-256：80e3a7862829bee82d1af0db8acb17ac22afea5f348bf48dd49e8ad02f060f89）
- https://huggingface.co/alanhuangya/OpenJev-4B/raw/368713247ad2a50d56542b4d812823626eb504e7/README.md（获取于 2026-10-18T16:15:41Z；SHA-256：41e6569e5cb51644144ad39ee6d60915fabef9cc9e8fe04b66dff1f0aee27f44）
- https://huggingface.co/alanhuangya/OpenJev-8B/raw/32bc7cb98f8fc0c0b517d440d1b97de521eb3315/README.md（获取于 2026-10-18T16:15:41Z；SHA-256：d306d34c702cc349375f9052fd60a915392142476d944a27a463d478fe5f6fc7）
- https://huggingface.co/alanhuangya/OpenJev-1.7B/raw/7418ae8b6e3b6a6507a8a58729ae491cd1c732d9/README.md（获取于 2026-10-18T16:15:41Z；SHA-256：0744b90308c2aa923b80a697eabc36c78a44437ec350e225a881719a9d622f66）
- https://raw.githubusercontent.com/alanhuangyoo/OpenJev/HEAD/LICENSE（获取于 2026-10-18T16:16:36Z；SHA-256：6b08bb37982c233aa12bcbdf19106da12f3f4fcf800773ea42e28ebeddd34fb8）

---

## OpenMobile-2 9B

基于 OpenMobile-Data-v2 训练的移动智能体模型检查点，用于根据截图执行操作和调用应用原生工具。

- 目录页面：https://awesomecua.com/resources/url-d35224f787e7ec21ce36/
- 原始来源：https://huggingface.co/OpenMobile-2/OpenMobile-2-9B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：Android、网页
- 主题：手机操作、工具集成
- 证据核查日期：2026-10-17T01:48:51Z
- ID：url:d35224f787e7ec21ce36

### 范围记录

License declarations apply to this checkpoint separately from code and training data.

- 完整记录 JSON：https://awesomecua.com/resources/url-d35224f787e7ec21ce36/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/OpenMobile-2/OpenMobile-2-9B/raw/main/README.md

### 一手证据

- https://huggingface.co/OpenMobile-2/OpenMobile-2-9B/raw/main/README.md（获取于 2026-10-17T01:48:51Z；SHA-256：09c59e6b35a5fe1eea528595f326546269ea8a2a75aa404f1f7950b9de5f30d1）
- https://huggingface.co/api/models/OpenMobile-2/OpenMobile-2-9B（获取于 2026-10-17T01:49:48Z；SHA-256：1aab6befd309e54ba71676670039b4098362974ce0ce89b25872f137d50c103f）
- https://os-copilot.github.io/OpenMobile2-Home/（获取于 2026-10-17T01:46:06Z；SHA-256：9b385e9f6aa2f7169f616a76887df3b76df605cb2bea071d99ee7ca3f9b659cc）
- https://huggingface.co/OpenMobile-2/OpenMobile-2-9B/raw/main/README.md（获取于 2026-10-17T01:48:51Z；SHA-256：09c59e6b35a5fe1eea528595f326546269ea8a2a75aa404f1f7950b9de5f30d1）

---

## Orienter

Orienter 结合应用背景与检测器，在扩展现实界面截图中定位可交互元素；发布内容包括代码和模型权重。

- 目录页面：https://awesomecua.com/resources/url-758f048c78e5c184333c/
- 原始来源：https://huggingface.co/stereoid/Orienter
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：GUI 定位、界面理解、评测
- 证据核查日期：2026-11-09T06:16:33Z
- ID：url:758f048c78e5c184333c

### 范围记录

The repository includes selected evaluation ground truth and excludes dataset images. Full inference requires external image assets, provider access, and a CUDA environment.

- 完整记录 JSON：https://awesomecua.com/resources/url-758f048c78e5c184333c/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/models/stereoid/Orienter（获取于 2026-11-09T06:16:33Z；SHA-256：62976d0af1c4902ddf9e11e3acffd0407d6ae05f34d6434ebd20323bf972ca4a）
- https://huggingface.co/api/models/stereoid/Orienter（获取于 2026-11-09T06:16:33Z；SHA-256：62976d0af1c4902ddf9e11e3acffd0407d6ae05f34d6434ebd20323bf972ca4a）

---

## OS-Atlas Pro 7B

OS-Atlas 操作检查点由 OS-Atlas-Base-7B 微调而成，采用 Qwen2-VL 架构，读取截图、任务及历史记录后输出思路和下一步基础或自定义 GUI 操作。

- 目录页面：https://awesomecua.com/resources/url-9c5e0c8f6784bedeb153/
- 原始来源：https://huggingface.co/OS-Copilot/OS-Atlas-Pro-7B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：动作预测、GUI 定位
- 证据核查日期：2026-10-18T12:03:55Z
- ID：url:9c5e0c8f6784bedeb153

### 范围记录

Hub API at revision 6c0135de lists four BF16 safetensors shards (about 8.29B parameters) in the Qwen2VLForConditionalGeneration architecture; access is open. The card says the checkpoint is fine-tuned from OS-Atlas-Base-7B and is the Pro model of the paper's Section 5.4, while the Hub base_model metadata names Qwen/Qwen2-VL-7B-Instruct. The card's inference example loads weights from local paths; this Hub ID is absent from the example. The card declares Apache-2.0 for the checkpoint.

- 完整记录 JSON：https://awesomecua.com/resources/url-9c5e0c8f6784bedeb153/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/OS-Copilot/OS-Atlas-Pro-7B/raw/6c0135de0627db98533ac4b47ae71fa17cf21c48/README.md

### 一手证据

- https://huggingface.co/OS-Copilot/OS-Atlas-Pro-7B/raw/6c0135de0627db98533ac4b47ae71fa17cf21c48/README.md（获取于 2026-10-18T12:03:55Z；SHA-256：44a33feb0172449e12f3b54b26073acf90af66a64c598768040fd6de32a44e6f）
- https://huggingface.co/api/models/OS-Copilot/OS-Atlas-Pro-7B/revision/6c0135de0627db98533ac4b47ae71fa17cf21c48（获取于 2026-10-18T12:03:55Z；SHA-256：8fe182b06e327e37d5b655239aa4e87ce634612e0da9bf6739c6bc94c1bc1ea1）
- https://huggingface.co/OS-Copilot/OS-Atlas-Pro-7B/raw/6c0135de0627db98533ac4b47ae71fa17cf21c48/README.md（获取于 2026-10-18T12:03:55Z；SHA-256：44a33feb0172449e12f3b54b26073acf90af66a64c598768040fd6de32a44e6f）

---

## Phi-Ground

微软在涵盖数据收集到模型训练的 GUI 定位训练实证研究中开发的模型，以 Phi-Ground-4B-7C 发布，并附评估代码。

- 目录页面：https://awesomecua.com/resources/github-microsoft-phi-ground/
- 原始来源：https://github.com/microsoft/Phi-Ground
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：GUI 定位
- 证据核查日期：2026-10-16T06:36:00Z
- ID：github:microsoft/phi-ground

- 完整记录 JSON：https://awesomecua.com/resources/github-microsoft-phi-ground/record.json

### 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/microsoft/Phi-Ground/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/microsoft/Phi-Ground/HEAD/README.md（获取于 2026-10-16T06:36:00Z；SHA-256：a0609394a736dc495d077cd57a2945b018123e5b3f9514d7d5bafb9e690aeae2）
- https://raw.githubusercontent.com/microsoft/Phi-Ground/HEAD/LICENSE（获取于 2026-10-16T06:42:00Z；SHA-256：c2cfccb812fe482101a8f04597dfc5a9991a6b2748266c47ac91b6a5aae15383）

---

## Pix2Struct base (pretrained)

Pix2Struct 基础规模的预训练检查点，采用 Transformers 格式，通过将遮挡的网页截图解析为简化 HTML 进行学习，仅作为微调起点发布。

- 目录页面：https://awesomecua.com/resources/url-bb1440d051c68455a72e/
- 原始来源：https://huggingface.co/google/pix2struct-base
- 类型：模型
- 审核状态：已审核
- 范围：相关研究
- 运行环境：网页
- 主题：界面理解
- 证据核查日期：2026-10-18T16:07:20Z
- ID：url:bb1440d051c68455a72e

### 范围记录

Adjacent: a general visual-language pretraining checkpoint with broader scope than agent or UI-specific fine-tuning. The card calls it the pretrained version of Pix2Struct for fine-tuning only, quotes the paper abstract, shows the T5X-to-Transformers conversion script, and says the weights were contributed by the Pix2Struct authors and added to Hugging Face by Younes Belkada. Hub API at revision 4605659e lists model.safetensors and pytorch_model.bin in the Pix2StructForConditionalGeneration architecture, with 282,285,696 F32 parameters reported for the safetensors file; the repository is publicly accessible. The card leaves scores and a link to the Pix2Struct code repository absent, leaving a family relation unrecorded. The card declares Apache-2.0 for the checkpoint; no pretraining data is part of this release.

- 完整记录 JSON：https://awesomecua.com/resources/url-bb1440d051c68455a72e/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/google/pix2struct-base/raw/4605659ec5d82c985955ebdea8210f32fe54a682/README.md

### 一手证据

- https://huggingface.co/google/pix2struct-base/raw/4605659ec5d82c985955ebdea8210f32fe54a682/README.md（获取于 2026-10-18T16:07:20Z；SHA-256：4250a18c9308f7bb6a1734dc60537e2711e8589b46fe807bfa57b212cbb2a25e）
- https://huggingface.co/api/models/google/pix2struct-base/revision/4605659ec5d82c985955ebdea8210f32fe54a682（获取于 2026-10-18T16:07:04Z；SHA-256：bb1962674cf165e80a32f358c4bc2b79714eaa0eb0b79145174e4dbf17d2bad2）
- https://huggingface.co/google/pix2struct-base/raw/4605659ec5d82c985955ebdea8210f32fe54a682/README.md（获取于 2026-10-18T16:07:20Z；SHA-256：4250a18c9308f7bb6a1734dc60537e2711e8589b46fe807bfa57b212cbb2a25e）

---

## Pix2Struct Screen2Words base

Pix2Struct 基础尺寸检查点在 Screen2Words 上微调，生成移动端 UI 截图的简短功能概述，由 Google 原始版本转换为 Transformers 格式。

- 目录页面：https://awesomecua.com/resources/url-1cf7f8b4b2a1eb9c6547/
- 原始来源：https://huggingface.co/google/pix2struct-screen2words-base
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：界面理解
- 证据核查日期：2026-10-18T12:05:32Z
- ID：url:1cf7f8b4b2a1eb9c6547

### 范围记录

Hub API at revision 17514729 lists one pytorch_model.bin with tokenizer and processor files in the Pix2StructForConditionalGeneration architecture; access is open. The card says the T5X checkpoint was contributed by the Pix2Struct authors and added to Hugging Face by Younes Belkada, and it reuses the generic Pix2Struct description with usage deferred to the pix2struct-textcaps-base card; it gives no Screen2Words scores. The card does not link a code repository, so no family relation is recorded. The card declares Apache-2.0 for the checkpoint.

- 完整记录 JSON：https://awesomecua.com/resources/url-1cf7f8b4b2a1eb9c6547/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/google/pix2struct-screen2words-base/raw/175147296b4f48000fdd37fc83e1334674cdaa47/README.md

### 一手证据

- https://huggingface.co/google/pix2struct-screen2words-base/raw/175147296b4f48000fdd37fc83e1334674cdaa47/README.md（获取于 2026-10-18T12:05:32Z；SHA-256：d0e7a6212944d78629b8cff07fa563cc71abeef37adff33551ea1ee685f6004c）
- https://huggingface.co/api/models/google/pix2struct-screen2words-base/revision/175147296b4f48000fdd37fc83e1334674cdaa47（获取于 2026-10-18T12:05:32Z；SHA-256：79b7a950e057181b26b7c54d72514286a9c0fe8a1791d3ecf5a0ed38c240ec82）
- https://huggingface.co/google/pix2struct-screen2words-base/raw/175147296b4f48000fdd37fc83e1334674cdaa47/README.md（获取于 2026-10-18T12:05:32Z；SHA-256：d0e7a6212944d78629b8cff07fa563cc71abeef37adff33551ea1ee685f6004c）

---

## Pix2Struct Screen2Words large

Pix2Struct 大尺寸检查点在 Screen2Words 上微调，生成移动端 UI 截图的简短功能概述，由 Google 原始版本转换为 Transformers 格式。

- 目录页面：https://awesomecua.com/resources/url-6c3e04249787a3de7cbc/
- 原始来源：https://huggingface.co/google/pix2struct-screen2words-large
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：界面理解
- 证据核查日期：2026-10-18T12:05:48Z
- ID：url:6c3e04249787a3de7cbc

### 范围记录

Hub API at revision a77a669b lists one pytorch_model.bin with tokenizer and processor files in the Pix2StructForConditionalGeneration architecture; access is open. The card says the T5X checkpoint was contributed by the Pix2Struct authors and added to Hugging Face by Younes Belkada, and it reuses the generic Pix2Struct description with usage deferred to the pix2struct-textcaps-base card; it gives no Screen2Words scores. The card does not link a code repository, so no family relation is recorded. The card declares Apache-2.0 for the checkpoint.

- 完整记录 JSON：https://awesomecua.com/resources/url-6c3e04249787a3de7cbc/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/google/pix2struct-screen2words-large/raw/a77a669b01e9dae3df5be815c5dcc2025385c24f/README.md

### 一手证据

- https://huggingface.co/google/pix2struct-screen2words-large/raw/a77a669b01e9dae3df5be815c5dcc2025385c24f/README.md（获取于 2026-10-18T12:05:48Z；SHA-256：794bdeb5b631c32f402988542f206679216c91df1e5baff6f062f5eafaaed13a）
- https://huggingface.co/api/models/google/pix2struct-screen2words-large/revision/a77a669b01e9dae3df5be815c5dcc2025385c24f（获取于 2026-10-18T12:05:48Z；SHA-256：fd94ef9cd3eabee84e08e7f1581b2b9feb88404345dfd8567172695ce33caafb）
- https://huggingface.co/google/pix2struct-screen2words-large/raw/a77a669b01e9dae3df5be815c5dcc2025385c24f/README.md（获取于 2026-10-18T12:05:48Z；SHA-256：794bdeb5b631c32f402988542f206679216c91df1e5baff6f062f5eafaaed13a）

---

## PTA-1

AskUI 基于 Florence-2-base 的定位模型，约有 2.7 亿参数，可根据元素描述返回其在截图中的边界框，面向低延迟的本地计算机和手机自动化。

- 目录页面：https://awesomecua.com/resources/url-303e1926b8ff4f60e006/
- 原始来源：https://huggingface.co/AskUI/PTA-1
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、桌面
- 主题：GUI 定位、效率
- 证据核查日期：2026-10-18T15:50:29Z
- ID：url:303e1926b8ff4f60e006

### 范围记录

Inference uses Florence-2's <OPEN_VOCABULARY_DETECTION> task prompt with the element description and the repository's remote code. The card calls its evaluation a first version on 999 samples (333 each from three datasets) scored by click success, marks datasets whose training splits the model saw, and attributes part of its score to data bias; no result was reproduced. MIT is declared on the card for the weights; Florence-2's own terms and the training data's terms are separate.

- 完整记录 JSON：https://awesomecua.com/resources/url-303e1926b8ff4f60e006/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：MIT — https://huggingface.co/AskUI/PTA-1/raw/cf9877cde0d7c75b60b4d699f359922a848ee3ec/README.md

- 权重审核：Publisher model-card declaration for the checkpoint; base-model, code and training-data terms are separate.
  来源：https://huggingface.co/AskUI/PTA-1/raw/cf9877cde0d7c75b60b4d699f359922a848ee3ec/README.md

### 一手证据

- https://huggingface.co/AskUI/PTA-1/raw/cf9877cde0d7c75b60b4d699f359922a848ee3ec/README.md（获取于 2026-10-18T15:50:29Z；SHA-256：f20016443dcaf6018668ebb0acf7e40105f12fdf28acf370663c8b9b005f9d61）
- https://huggingface.co/api/models/AskUI/PTA-1（获取于 2026-10-18T15:50:30Z；SHA-256：a51d649a22372d609874dc6a512645770f2e785919f1dab23df5ec2476b75ec6）
- https://huggingface.co/AskUI/PTA-1/raw/cf9877cde0d7c75b60b4d699f359922a848ee3ec/config.json（获取于 2026-10-18T15:50:30Z；SHA-256：74c60cc3088daaed377d9399c3a68577c424394ab4e03ced000bfd28d752938e）
- https://huggingface.co/AskUI/PTA-1/raw/cf9877cde0d7c75b60b4d699f359922a848ee3ec/README.md（获取于 2026-10-18T15:50:29Z；SHA-256：f20016443dcaf6018668ebb0acf7e40105f12fdf28acf370663c8b9b005f9d61）

---

## Qwen-CUA

Qwen-CUA 是基于截图生成经界面定位的键盘和鼠标操作的计算机使用模型，发布内容包括模型权重和浏览器参考运行环境。

- 目录页面：https://awesomecua.com/resources/url-a886fea306211d527701/
- 原始来源：https://huggingface.co/xlangai/Qwen-CUA
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、桌面
- 主题：GUI 定位、动作预测、界面理解、网页导航
- 证据核查日期：2026-11-09T05:05:09Z
- ID：url:a886fea306211d527701

### 范围记录

The card describes BF16 safetensors weights of approximately 807 GB, multi-GPU serving examples and an Apache-2.0 license. The reference demo uses isolated Chromium sessions.

- 完整记录 JSON：https://awesomecua.com/resources/url-a886fea306211d527701/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/xlangai/Qwen-CUA

### 一手证据

- https://huggingface.co/api/models/xlangai/Qwen-CUA（获取于 2026-11-09T05:05:09Z；SHA-256：f57511b3463e74efccc48680aa95ea99a25211f9447d0563197ed9bd251c28f9）
- https://huggingface.co/api/models/xlangai/Qwen-CUA（获取于 2026-11-09T05:05:09Z；SHA-256：f57511b3463e74efccc48680aa95ea99a25211f9447d0563197ed9bd251c28f9）

---

## Qwen2.5-VL

通用视觉语言模型系列；发布说明将电脑和手机操作列为视觉智能体能力，同时介绍图像与视频理解。

- 目录页面：https://awesomecua.com/resources/url-4bece2c969edcdfc2e8d/
- 原始来源：https://qwenlm.github.io/blog/qwen2.5-vl
- 类型：模型
- 审核状态：已审核
- 范围：相关研究
- 运行环境：跨平台
- 主题：界面理解、动作预测、手机操作
- 证据核查日期：2026-11-09T05:05:15Z
- ID：url:4bece2c969edcdfc2e8d

### 范围记录

The page says base and instruction-tuned models in 3B, 7B, and 72B sizes are available through Hugging Face and ModelScope.

- 完整记录 JSON：https://awesomecua.com/resources/url-4bece2c969edcdfc2e8d/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://qwenlm.github.io/blog/qwen2.5-vl（获取于 2026-11-09T05:05:15Z；SHA-256：7b00824500da48251647448b615d83a0b62c2f5387fa8d569aedc5ec82810c3f）

---

## ScaleCUA 7B

基于 Qwen2.5-VL 的计算机使用模型检查点，支持在桌面、移动端和网页界面上以直接定位和智能体操作模式运行。

- 目录页面：https://awesomecua.com/resources/url-ff7b1873a3eead89607a/
- 原始来源：https://huggingface.co/OpenGVLab/ScaleCUA-7B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、桌面、Android、Linux
- 主题：GUI 定位、动作预测、规划
- 证据核查日期：2026-10-17T02:45:20Z
- ID：url:ff7b1873a3eead89607a

### 范围记录

Four public safetensors shards and model/tokenizer configuration are present. The card declares Apache-2.0. The model card’s Paper link points to the code repository; the arXiv association uses the repository’s explicit citation.

- 完整记录 JSON：https://awesomecua.com/resources/url-ff7b1873a3eead89607a/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/OpenGVLab/ScaleCUA-7B/raw/main/README.md

### 一手证据

- https://huggingface.co/OpenGVLab/ScaleCUA-7B/raw/main/README.md（获取于 2026-10-17T02:45:20Z；SHA-256：e45116466b8b9ef3e93992a1efca8fa5b921a8b041297933210c9f552767ffb8）
- https://huggingface.co/api/models/OpenGVLab/ScaleCUA-7B（获取于 2026-10-17T02:45:19Z；SHA-256：bad2617fd64633212a30b78d99fb053a662378ab50b42722a04af4104ac2248f）
- https://raw.githubusercontent.com/OpenGVLab/ScaleCUA/HEAD/README.md（获取于 2026-10-17T01:54:55Z；SHA-256：0538701c860afedd5d63c3839039699d8e5a14977d5c339b187ed13ad666c8fa）
- https://huggingface.co/OpenGVLab/ScaleCUA-7B/raw/main/README.md（获取于 2026-10-17T02:45:20Z；SHA-256：e45116466b8b9ef3e93992a1efca8fa5b921a8b041297933210c9f552767ffb8）

---

## SeeClick checkpoint

已发布的 SeeClick 视觉定位模型检查点，将界面截图和指代指令映射到点或边界框。

- 目录页面：https://awesomecua.com/resources/url-cfea8a0949472a637990/
- 原始来源：https://huggingface.co/cckevinn/SeeClick
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、桌面、Android、iOS
- 主题：GUI 定位
- 证据核查日期：2026-10-17T02:05:52Z
- ID：url:cfea8a0949472a637990

### 范围记录

The public ungated Hub manifest contains ten safetensors shards and model configuration/code but no README model card or explicit weight-license field. The official repository identifies the checkpoint and says incorporated checkpoints follow their original licenses, without resolving a specific standalone weight license. No source or model code was executed.

- 完整记录 JSON：https://awesomecua.com/resources/url-cfea8a0949472a637990/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/models/cckevinn/SeeClick（获取于 2026-10-17T02:05:52Z；SHA-256：bc9f7c36f3e7c4515fa4982b0dd921a9038ff082cb6b283572d6390ef651c2a9）
- https://raw.githubusercontent.com/njucckevin/SeeClick/HEAD/readme.md（获取于 2026-10-16T06:36:00Z；SHA-256：c4112415bec58fc77f9a1e8fa98f8d602c5d382747579dfda9f866900c55995c）
- https://huggingface.co/api/models/cckevinn/SeeClick（获取于 2026-10-17T02:05:52Z；SHA-256：bc9f7c36f3e7c4515fa4982b0dd921a9038ff082cb6b283572d6390ef651c2a9）

---

## Seed1.5-VL

ByteDance Seed 通过 API 提供的视觉语言基础模型；仓库中的示例指南包含计算机和移动端 GUI 智能体提示，支持点击、拖动、快捷键、输入和滚动。

- 目录页面：https://awesomecua.com/resources/github-bytedance-seed-seed1-5-vl/
- 原始来源：https://github.com/ByteDance-Seed/Seed1.5-VL
- 类型：模型
- 审核状态：已审核
- 范围：相关研究
- 运行环境：桌面、跨平台
- 主题：GUI 定位、动作预测、界面理解
- 证据核查日期：2026-10-18T11:12:25Z
- ID：github:bytedance-seed/seed1.5-vl

### 范围记录

General-purpose vision-language model; the README lists GUI control and gameplay among agent-centric abilities, so the record is adjacent. The README names Volcano Engine model ID doubao-1-5-thinking-vision-pro-250428 and offers cookbooks that call that API; it does not state a weights release, and none is assumed. The inspected tree contains GUI/prompt.py (computer-use, mobile-use and grounding prompts), GUI/action_parser.py and GUI/gui.ipynb, plus grounding, 3D, video and long-CoT notebooks and a copy of the technical report. Apache-2.0 applies to the cookbook repository, not to the hosted model.

- 完整记录 JSON：https://awesomecua.com/resources/github-bytedance-seed-seed1-5-vl/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/ByteDance-Seed/Seed1.5-VL/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/ByteDance-Seed/Seed1.5-VL/HEAD/README.md（获取于 2026-10-18T11:12:25Z；SHA-256：07ca02ac02fcec6d7c5206024c351d21067f272aa6383aa61673ae7201bde8c2）
- https://api.github.com/repos/ByteDance-Seed/Seed1.5-VL（获取于 2026-10-18T11:12:27Z；SHA-256：101377cb1818d8b65f597b94bf8a360a634658bacd9dffd4c1e607f12ce26092）
- https://api.github.com/repos/ByteDance-Seed/Seed1.5-VL/git/trees/main?recursive=1（获取于 2026-10-18T11:12:27Z；SHA-256：6d9d8ca54ec7862d83c8431bcc2b8bbeb854f4c798a56195f51271bfd0cb6224）
- https://raw.githubusercontent.com/ByteDance-Seed/Seed1.5-VL/HEAD/GUI/prompt.py（获取于 2026-10-18T11:12:28Z；SHA-256：e216a099fb09f4a89a4b345d663afa27c00ff2e10e4893df42cad64d60cba8ef）
- https://raw.githubusercontent.com/ByteDance-Seed/Seed1.5-VL/HEAD/LICENSE（获取于 2026-10-18T11:12:28Z；SHA-256：43070e2d4e532684de521b885f385d0841030efa2b1a20bafb76133a5e1379c1）
- https://raw.githubusercontent.com/ByteDance-Seed/Seed1.5-VL/HEAD/LICENSE（获取于 2026-10-18T11:12:28Z；SHA-256：43070e2d4e532684de521b885f385d0841030efa2b1a20bafb76133a5e1379c1）

---

## SpiritSight-Agent 8B base

基于 InternVL2 的视觉 GUI 检查点，供定位和界面导航使用；发布方建议对基础版本进行针对任务的微调。

- 目录页面：https://awesomecua.com/resources/url-52b7de0e43b1afc9c226/
- 原始来源：https://huggingface.co/SenseLLM/SpiritSight-Agent-8B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：GUI 定位、界面理解
- 证据核查日期：2026-10-17T02:02:28Z
- ID：url:52b7de0e43b1afc9c226

### 范围记录

The Hub manifest exposes four safetensors shards under SpiritSight-Agent-8B-base. The card declares Apache-2.0 and separately links InternVL terms in its model table. This is the published base checkpoint; benchmark-specific fine-tuning is discussed separately. No model code was executed.

- 完整记录 JSON：https://awesomecua.com/resources/url-52b7de0e43b1afc9c226/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/SenseLLM/SpiritSight-Agent-8B/raw/main/README.md

### 一手证据

- https://huggingface.co/SenseLLM/SpiritSight-Agent-8B/raw/main/README.md（获取于 2026-10-17T02:02:28Z；SHA-256：916bde91ff00aba22ff13ed3d8b4ca679bc8c198632f1d3bc9469660287cb5d3）
- https://huggingface.co/api/models/SenseLLM/SpiritSight-Agent-8B（获取于 2026-10-17T02:02:28Z；SHA-256：cc2564a3b2011a06f435e16b95cbf1e22072fd39e76fba844657773541586b37）
- https://huggingface.co/SenseLLM/SpiritSight-Agent-8B/raw/main/README.md（获取于 2026-10-17T02:02:28Z；SHA-256：916bde91ff00aba22ff13ed3d8b4ca679bc8c198632f1d3bc9469660287cb5d3）

---

## Textual Foresight

Textual Foresight 通过预测移动端 UI 动作所产生的未来屏幕状态的文本描述，预训练 UI 表征。

- 目录页面：https://awesomecua.com/resources/github-aburns4-textualforesight/
- 原始来源：https://github.com/aburns4/textualforesight
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：界面理解、动作预测、世界模型
- 证据核查日期：2026-11-04T13:12:04Z
- ID：github:aburns4/textualforesight

- 完整记录 JSON：https://awesomecua.com/resources/github-aburns4-textualforesight/record.json

### 许可证信息

- 代码：BSD-3-Clause — https://raw.githubusercontent.com/aburns4/textualforesight/HEAD/LICENSE.txt
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/aburns4/textualforesight/HEAD/README.md（获取于 2026-11-04T13:12:04Z；SHA-256：1ce27542d1e6e9c883279b659758bdf534a446b97e2207bdea069a09999606a3）
- https://raw.githubusercontent.com/aburns4/textualforesight/HEAD/LICENSE.txt（获取于 2026-11-04T13:22:45Z；SHA-256：5aca00bff81e12a65992c7f2ecfece6ba7a923193c7a1d33a1b60f657e8cf11a）

---

## UI-TARS 2B SFT

原始发布版本中较小的 2B SFT 版 UI-TARS 原生 GUI 智能体模型检查点，采用 Qwen2-VL 架构，以 FP32 存储，可感知屏幕、定位元素并执行 GUI 操作。

- 目录页面：https://awesomecua.com/resources/url-bd9f8174e5503055c0bd/
- 原始来源：https://huggingface.co/ByteDance-Seed/UI-TARS-2B-SFT
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、网页、桌面、Android
- 主题：GUI 定位、界面理解、动作预测
- 证据核查日期：2026-10-18T11:34:22Z
- ID：url:bd9f8174e5503055c0bd

### 范围记录

Hub API at revision f366a1db lists two F32 safetensors shards (about 2.44B parameters) in the Qwen2VLForConditionalGeneration architecture; access is open. The card declares Apache-2.0 for the checkpoint. The card's sibling links use the earlier bytedance-research namespace. The card's online agent table has no 2B row, and its sibling links also name a GGUF conversion that this record does not cover.

- 完整记录 JSON：https://awesomecua.com/resources/url-bd9f8174e5503055c0bd/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/ByteDance-Seed/UI-TARS-2B-SFT/raw/f366a1db3e7f29635f5b236d6a71dea367a0a700/README.md

### 一手证据

- https://huggingface.co/ByteDance-Seed/UI-TARS-2B-SFT/raw/f366a1db3e7f29635f5b236d6a71dea367a0a700/README.md（获取于 2026-10-18T11:34:22Z；SHA-256：4830ae0aa6b32597f9fac19addf31d61cad22b2e415d58e1995805857d69c62d）
- https://huggingface.co/api/models/ByteDance-Seed/UI-TARS-2B-SFT（获取于 2026-10-18T11:34:23Z；SHA-256：677fccdec48ab2ca045ae66bcbe46ded963dfd1c9c3b47d0a43d32254e5f590e）
- https://huggingface.co/ByteDance-Seed/UI-TARS-2B-SFT/raw/f366a1db3e7f29635f5b236d6a71dea367a0a700/README.md（获取于 2026-10-18T11:34:22Z；SHA-256：4830ae0aa6b32597f9fac19addf31d61cad22b2e415d58e1995805857d69c62d）

---

## UI-TARS 72B DPO

模型卡标记为推荐的 72B DPO 版 UI-TARS 检查点，采用 Qwen2-VL 架构，是用于网页、移动端和桌面的原生 GUI 智能体模型，可感知屏幕、定位元素并执行多步操作。

- 目录页面：https://awesomecua.com/resources/url-0447e1fb83a794507aa2/
- 原始来源：https://huggingface.co/ByteDance-Seed/UI-TARS-72B-DPO
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、网页、桌面、Android
- 主题：GUI 定位、界面理解、动作预测
- 证据核查日期：2026-10-18T11:34:13Z
- ID：url:0447e1fb83a794507aa2

### 范围记录

Hub API at revision 43a70a29 lists 31 BF16 safetensors shards (about 73.4B parameters) in the Qwen2VLForConditionalGeneration architecture; access is open. The card declares Apache-2.0 for the checkpoint. The card's sibling links use the earlier bytedance-research namespace. Its card reports 22.7 on OSWorld with a 15-step budget and 24.6 with 50 steps for this checkpoint.

- 完整记录 JSON：https://awesomecua.com/resources/url-0447e1fb83a794507aa2/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/ByteDance-Seed/UI-TARS-72B-DPO/raw/43a70a29275e7d1569bb3f3dda5be4a2ff976d5f/README.md

### 一手证据

- https://huggingface.co/ByteDance-Seed/UI-TARS-72B-DPO/raw/43a70a29275e7d1569bb3f3dda5be4a2ff976d5f/README.md（获取于 2026-10-18T11:34:13Z；SHA-256：153f5c4f95261750b82701e1be952f30a12b14409c898ddf1535a6439b8c0850）
- https://huggingface.co/api/models/ByteDance-Seed/UI-TARS-72B-DPO（获取于 2026-10-18T11:34:14Z；SHA-256：25e3b62ab6c1c4f63fe30f5c940ba7f0d90b0bf24e76c4e6966b82d4a2c4bdbd）
- https://huggingface.co/ByteDance-Seed/UI-TARS-72B-DPO/raw/43a70a29275e7d1569bb3f3dda5be4a2ff976d5f/README.md（获取于 2026-10-18T11:34:13Z；SHA-256：153f5c4f95261750b82701e1be952f30a12b14409c898ddf1535a6439b8c0850）

---

## UI-TARS 72B SFT

72B SFT 版 UI-TARS 检查点采用 Qwen2-VL 架构，以 FP32 存储，是用于网页、移动端和桌面的原生 GUI 智能体模型，可感知屏幕、定位元素并执行多步操作。

- 目录页面：https://awesomecua.com/resources/url-fdb901523979ed1e831b/
- 原始来源：https://huggingface.co/ByteDance-Seed/UI-TARS-72B-SFT
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、网页、桌面、Android
- 主题：GUI 定位、界面理解、动作预测
- 证据核查日期：2026-10-18T12:03:25Z
- ID：url:fdb901523979ed1e831b

### 范围记录

Hub API at revision 8e7a0310 lists 64 F32 safetensors shards (about 73.4B parameters) in the Qwen2VLForConditionalGeneration architecture; access is open. The card declares Apache-2.0 for the checkpoint. The card's sibling links use the earlier bytedance-research namespace. Its card reports 18.8 on OSWorld with a 15-step budget and 46.6 on AndroidWorld for this checkpoint.

- 完整记录 JSON：https://awesomecua.com/resources/url-fdb901523979ed1e831b/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/ByteDance-Seed/UI-TARS-72B-SFT/raw/8e7a03104915dee7bdbae5ea6e5a80264b316f9e/README.md

### 一手证据

- https://huggingface.co/ByteDance-Seed/UI-TARS-72B-SFT/raw/8e7a03104915dee7bdbae5ea6e5a80264b316f9e/README.md（获取于 2026-10-18T12:03:25Z；SHA-256：c85c8ecb15f8b6909fc8f46cd9394987b08116bf61e01f3a1808da6708a8798e）
- https://huggingface.co/api/models/ByteDance-Seed/UI-TARS-72B-SFT/revision/8e7a03104915dee7bdbae5ea6e5a80264b316f9e（获取于 2026-10-18T12:03:24Z；SHA-256：5a45bef8bcbee831d5a1ece2d6cfc674ceed2e978d991215308ef2f06b173e8b）
- https://huggingface.co/ByteDance-Seed/UI-TARS-72B-SFT/raw/8e7a03104915dee7bdbae5ea6e5a80264b316f9e/README.md（获取于 2026-10-18T12:03:25Z；SHA-256：c85c8ecb15f8b6909fc8f46cd9394987b08116bf61e01f3a1808da6708a8798e）

---

## UI-TARS 7B DPO

标记为推荐的 7B DPO 版 UI-TARS 检查点，采用 Qwen2-VL 架构，是用于网页、移动端和桌面的原生 GUI 智能体模型，可感知屏幕、定位元素并执行多步操作。

- 目录页面：https://awesomecua.com/resources/url-a8b43a1f2bebd998f612/
- 原始来源：https://huggingface.co/ByteDance-Seed/UI-TARS-7B-DPO
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、网页、桌面、Android
- 主题：GUI 定位、界面理解、动作预测
- 证据核查日期：2026-10-18T11:31:46Z
- ID：url:a8b43a1f2bebd998f612

### 范围记录

Hub API at revision 727b0df3 lists four BF16 safetensors shards (about 8.29B parameters) in the Qwen2VLForConditionalGeneration architecture; access is open. The card declares Apache-2.0 for the checkpoint. The card's sibling links use the earlier bytedance-research namespace. Its card reports 18.7 on OSWorld with a 15-step budget for this checkpoint.

- 完整记录 JSON：https://awesomecua.com/resources/url-a8b43a1f2bebd998f612/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/ByteDance-Seed/UI-TARS-7B-DPO/raw/727b0df39207dafc6cf211a61f29d84b7659c39c/README.md

### 一手证据

- https://huggingface.co/ByteDance-Seed/UI-TARS-7B-DPO/raw/727b0df39207dafc6cf211a61f29d84b7659c39c/README.md（获取于 2026-10-18T11:31:46Z；SHA-256：f66e5528903bccdc2f3f7fe88aa7c4d5f38c19d1d0cdb0c4cba6fad4353b979e）
- https://huggingface.co/api/models/ByteDance-Seed/UI-TARS-7B-DPO（获取于 2026-10-18T11:31:46Z；SHA-256：9f6cd8ef805710e84cd86b9cef72ce48c1338e3f6519e0fd0eeb04e76200f9f5）
- https://huggingface.co/ByteDance-Seed/UI-TARS-7B-DPO/raw/727b0df39207dafc6cf211a61f29d84b7659c39c/README.md（获取于 2026-10-18T11:31:46Z；SHA-256：f66e5528903bccdc2f3f7fe88aa7c4d5f38c19d1d0cdb0c4cba6fad4353b979e）

---

## UI-Venus-Navi-72B

基于 Qwen2.5-VL 的界面模型检查点，通过截图定位界面元素并预测导航操作，采用强化微调训练。

- 目录页面：https://awesomecua.com/resources/url-80ec6c9a43360adbbc6b/
- 原始来源：https://huggingface.co/inclusionAI/UI-Venus-Navi-72B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：Android、跨平台
- 主题：GUI 定位、手机操作、强化学习、动作预测
- 证据核查日期：2026-11-09T05:04:57Z
- ID：url:80ec6c9a43360adbbc6b

### 范围记录

The repository contains model weight shards and an inference example. The card specifies transformers==4.49.0 and qwen-vl-utils and declares Apache-2.0 licensing.

- 完整记录 JSON：https://awesomecua.com/resources/url-80ec6c9a43360adbbc6b/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/inclusionAI/UI-Venus-Navi-72B

### 一手证据

- https://huggingface.co/api/models/inclusionAI/UI-Venus-Navi-72B（获取于 2026-11-09T05:04:57Z；SHA-256：0e19ffd8829289410a825613838f492cdce98f2f04024bd9fbc817946f19d41c）
- https://huggingface.co/api/models/inclusionAI/UI-Venus-Navi-72B（获取于 2026-11-09T05:04:57Z；SHA-256：0e19ffd8829289410a825613838f492cdce98f2f04024bd9fbc817946f19d41c）

---

## VGA (Vision GUI Assistant)

Vision GUI Assistant（VGA）提供以图像为中心的微调代码和数据集，以减少视觉语言 GUI 定位中的幻觉。

- 目录页面：https://awesomecua.com/resources/github-linziyang1999-vision-gui-assistant/
- 原始来源：https://github.com/Linziyang1999/Vision-GUI-assistant
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、网页、桌面、Android
- 主题：界面理解、GUI 定位
- 证据核查日期：2026-11-04T13:12:21Z
- ID：github:linziyang1999/vision-gui-assistant

- 完整记录 JSON：https://awesomecua.com/resources/github-linziyang1999-vision-gui-assistant/record.json

### 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/Linziyang1999/Vision-GUI-assistant/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://raw.githubusercontent.com/Linziyang1999/Vision-GUI-assistant/HEAD/README.md（获取于 2026-11-04T13:12:21Z；SHA-256：90f65410bf548ea8f1798b6c9ff662c5e6f73ac8442e457d9b91f49d57fd954b）
- https://raw.githubusercontent.com/Linziyang1999/Vision-GUI-assistant/HEAD/LICENSE（获取于 2026-11-04T13:22:42Z；SHA-256：c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4）

---

## WebRL Llama 3.1 8B

WebRL 浏览器策略模型检查点，用于在 WebArena 的 5 个网站环境中执行操作。

- 目录页面：https://awesomecua.com/resources/url-a6ee20fea67438d91e06/
- 原始来源：https://huggingface.co/zai-org/webrl-llama-3.1-8b
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、强化学习
- 证据核查日期：2026-10-17T02:05:40Z
- ID：url:a6ee20fea67438d91e06

### 范围记录

The official Hub API resolves the former THUDM namespace to zai-org. Seven safetensors shards and configuration/tokenizer files are public and ungated. The card marks the weight license as other without naming complete terms, so no permissive weight license is inferred. The card’s evaluation prose also names GLM-4 despite the Llama checkpoint identity; no score is imported.

- 完整记录 JSON：https://awesomecua.com/resources/url-a6ee20fea67438d91e06/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：other — https://huggingface.co/zai-org/webrl-llama-3.1-8b/raw/main/README.md

### 一手证据

- https://huggingface.co/zai-org/webrl-llama-3.1-8b/raw/main/README.md（获取于 2026-10-17T02:05:40Z；SHA-256：4712446382f106a115a317d0ec6273a975545386b9cedf56946a96a56479dc9f）
- https://huggingface.co/api/models/zai-org/webrl-llama-3.1-8b（获取于 2026-10-17T02:05:40Z；SHA-256：6523b7f198d8debec2f3074190812955c6251590b61f8a6ea1bbb681b8ea128f）
- https://huggingface.co/api/models/THUDM/webrl-llama-3.1-8b（获取于 2026-10-17T02:02:28Z；SHA-256：6523b7f198d8debec2f3074190812955c6251590b61f8a6ea1bbb681b8ea128f）
- https://huggingface.co/zai-org/webrl-llama-3.1-8b/raw/main/README.md（获取于 2026-10-17T02:05:40Z；SHA-256：4712446382f106a115a317d0ec6273a975545386b9cedf56946a96a56479dc9f）
- https://huggingface.co/api/models/THUDM/webrl-llama-3.1-8b（获取于 2026-10-17T19:15:06Z；SHA-256：96621f060dddec91453d8c2b451b3793a34b34810d82c7cd13ce4cb05ca90a76）
- https://huggingface.co/api/models/zai-org/webrl-llama-3.1-8b（获取于 2026-10-17T19:15:06Z；SHA-256：96621f060dddec91453d8c2b451b3793a34b34810d82c7cd13ce4cb05ca90a76）

---

## WebRL outcome reward model 8B

WebRL 在策略训练期间用于给浏览器轨迹评分的结果监督模型检查点。

- 目录页面：https://awesomecua.com/resources/url-d1e85aeb6d96859c109d/
- 原始来源：https://huggingface.co/zai-org/webrl-orm-llama-3.1-8b
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：奖励模型、强化学习、网页导航
- 证据核查日期：2026-10-17T02:05:40Z
- ID：url:d1e85aeb6d96859c109d

### 范围记录

The official API resolves the former THUDM namespace to zai-org and lists four safetensors shards. No model card or weight-license declaration is present in the inspected manifest. The official WebRL README identifies this as its outcome-supervised reward model, a training component.

- 完整记录 JSON：https://awesomecua.com/resources/url-d1e85aeb6d96859c109d/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/models/zai-org/webrl-orm-llama-3.1-8b（获取于 2026-10-17T02:05:40Z；SHA-256：8bafcdf63fe484b6005ca7082da1310459f8c87d4c011e84293a3cc8fca6ae9e）
- https://huggingface.co/api/models/THUDM/webrl-orm-llama-3.1-8b（获取于 2026-10-17T02:02:29Z；SHA-256：8bafcdf63fe484b6005ca7082da1310459f8c87d4c011e84293a3cc8fca6ae9e）
- https://raw.githubusercontent.com/THUDM/WebRL/HEAD/README.md（获取于 2026-10-17T02:02:06Z；SHA-256：eb217b96c54c3c2ccfd3a27255c6fd740df40c2d6743ae811858339bf7f740b0）
- https://huggingface.co/api/models/zai-org/webrl-orm-llama-3.1-8b（获取于 2026-10-17T02:05:40Z；SHA-256：8bafcdf63fe484b6005ca7082da1310459f8c87d4c011e84293a3cc8fca6ae9e）

---

## WebShepherd 3B

Web-Shepherd 集合中公开的文本过程奖励模型检查点，依据任务检查清单为网页智能体的决策评分。

- 目录页面：https://awesomecua.com/resources/url-72f7fe0211c6551b945f/
- 原始来源：https://huggingface.co/LangAGI-Lab/WebShepherd_3B
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：奖励模型、网页导航
- 证据核查日期：2026-10-17T02:45:20Z
- ID：url:72f7fe0211c6551b945f

### 范围记录

The official project-linked collection identifies this public 3B checkpoint. The README uses a separate unavailable WebShepherd/web-shepherd-base URL. Two safetensors shards and a Qwen2 causal-language-model configuration are present. No model card or weight license is published in the inspected manifest.

- 完整记录 JSON：https://awesomecua.com/resources/url-72f7fe0211c6551b945f/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

### 一手证据

- https://huggingface.co/api/models/LangAGI-Lab/WebShepherd_3B（获取于 2026-10-17T02:45:20Z；SHA-256：6f28e86a99b286a575c5e7f8d24d6901655971e9a091493950b59948f4b9ad9b）
- https://huggingface.co/api/collections/LangAGI-Lab/web-shepherd-advancing-prms-for-reinforcing-web-agents-682b4f4ad607fc27c4dc49e8（获取于 2026-10-17T02:45:05Z；SHA-256：647d9e7bdad5fe2c03a8cfcd34d93f3b2bf7c1553b517a4a843bc0113fa47456）
- https://raw.githubusercontent.com/kyle8581/Web-Shepherd/HEAD/README.md（获取于 2026-10-17T02:44:04Z；SHA-256：07431058d8b9a71b80e75b7a74a40a8346c1503eec240628459cc4d4e2f0802f）
- https://huggingface.co/LangAGI-Lab/WebShepherd_3B/raw/main/config.json（获取于 2026-10-17T02:49:45Z；SHA-256：252ed290ec84ffd8fa686fb72df68afe7bbd8c19b80538c0b318db60cd107d09）
- https://huggingface.co/api/models/LangAGI-Lab/WebShepherd_3B（获取于 2026-10-17T02:45:20Z；SHA-256：6f28e86a99b286a575c5e7f8d24d6901655971e9a091493950b59948f4b9ad9b）

---

## WebVIA-Agent

WebVIA 推出的基于 GLM-4.1V-9B 的网页探索智能体，读取页面截图和 DOM 树，选择点击、输入或选择操作，以遍历交互式 UI 状态，服务于 UI 到代码转换。

- 目录页面：https://awesomecua.com/resources/url-62724cba1b5814215cf7/
- 原始来源：https://huggingface.co/zai-org/WebVIA-Agent
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、数据生成、界面设计
- 证据核查日期：2026-10-18T12:16:11Z
- ID：url:62724cba1b5814215cf7

### 范围记录

In the linked code repository, the agent launcher sends the page's DOM tree with element IDs and a screenshot to a configurable OpenAI-compatible endpoint and parses click[id], enter[id][text] and select[id][text] actions from the reply, so this checkpoint is served separately. Hub API at revision d6ee0ce1 lists four BF16 safetensors shards (about 10.29B parameters) in the Glm4vForConditionalGeneration architecture; access is open. GitHub reports no license for the code repository. The card declares MIT for the checkpoint.

- 完整记录 JSON：https://awesomecua.com/resources/url-62724cba1b5814215cf7/record.json

### 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：mit — https://huggingface.co/zai-org/WebVIA-Agent/raw/d6ee0ce156bc194a4f9ddcd1c4827544321c9db2/README.md

### 一手证据

- https://huggingface.co/zai-org/WebVIA-Agent/raw/d6ee0ce156bc194a4f9ddcd1c4827544321c9db2/README.md（获取于 2026-10-18T12:16:11Z；SHA-256：1b2a79a5d45c3e3524b624e04dc3dce1a4d53d8bcd76da3151ba5a92ea9fba49）
- https://huggingface.co/api/models/zai-org/WebVIA-Agent/revision/d6ee0ce156bc194a4f9ddcd1c4827544321c9db2（获取于 2026-10-18T12:16:12Z；SHA-256：5d7f0dce7579dc1d4c6fe3a82568cec7187c8ef5ee70e27e1b8482ba574f246a）
- https://raw.githubusercontent.com/zheny2751-dotcom/WebVIA/1b228001e8b24f0cab8d9e00a9f6e7ae521d6c67/code/agent/start_agent.py（获取于 2026-10-18T12:16:12Z；SHA-256：79b219bd4a415a6bac297acf2aefb786d0789e8daad386c6ed6cf831be0a77a1）
- https://huggingface.co/zai-org/WebVIA-Agent/raw/d6ee0ce156bc194a4f9ddcd1c4827544321c9db2/README.md（获取于 2026-10-18T12:16:11Z；SHA-256：1b2a79a5d45c3e3524b624e04dc3dce1a4d53d8bcd76da3151ba5a92ea9fba49）
