---
title: "Mind2Web · 评测基准 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/github-osu-nlp-group-mind2web/
updated: 2026-10-18
type: benchmark
lang: zh-CN
---

# Mind2Web

提供用于通用网页导航研究的人类演示和任务。

- 目录页面：https://awesomecua.com/zh/resources/github-osu-nlp-group-mind2web/
- English：https://awesomecua.com/resources/github-osu-nlp-group-mind2web/index.md
- 原始来源：https://github.com/OSU-NLP-Group/Mind2Web
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航
- 证据核查日期：2026-10-16T06:35:57Z
- ID：github:osu-nlp-group/mind2web

- 完整记录 JSON：https://awesomecua.com/resources/github-osu-nlp-group-mind2web/record.json

## 结构化规格

- 动作 / 输出：CLICK, TYPE, SELECT
- 评测方式：Offline candidate and action evaluation against recorded demonstrations; the repository distinguishes macro from micro averaging.
- 侧重：web action prediction, generalization to unseen sites and domains
- 观测：task instructions, HTML, recorded action history
- 任务设置：离线

### 数量记录

- 1,009 个任务实例 — train split（来源报告；来源：https://raw.githubusercontent.com/OSU-NLP-Group/Mind2Web/HEAD/README.md）
- 252 个任务实例 — cross-task test split（来源报告；来源：https://raw.githubusercontent.com/OSU-NLP-Group/Mind2Web/HEAD/README.md）
- 177 个任务实例 — cross-website test split（来源报告；来源：https://raw.githubusercontent.com/OSU-NLP-Group/Mind2Web/HEAD/README.md）
- 912 个任务实例 — cross-domain test split（来源报告；来源：https://raw.githubusercontent.com/OSU-NLP-Group/Mind2Web/HEAD/README.md）

These are reported split inventories. Original Mind2Web, Multimodal-Mind2Web, and Online-Mind2Web have different inputs/protocols. The authors require macro-average metrics for comparison with the paper; test archives remain upstream.

## 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/OSU-NLP-Group/Mind2Web/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/OSU-NLP-Group/Mind2Web/HEAD/README.md（获取于 2026-10-16T06:35:57Z；SHA-256：157dbd840264ea29f958c0b7383d63783845c573b3e19a1f39b773be22e0b32d）
- https://raw.githubusercontent.com/OSU-NLP-Group/Mind2Web/HEAD/README.md（获取于 2026-10-16T06:35:57Z；SHA-256：157dbd840264ea29f958c0b7383d63783845c573b3e19a1f39b773be22e0b32d）
- https://raw.githubusercontent.com/OSU-NLP-Group/Mind2Web/HEAD/LICENSE（获取于 2026-10-16T06:41:57Z；SHA-256：953ff47dbbc0c0563d1ec2d245b06d1206f2f38c4ed2f0da728e027ae2e5a973）
