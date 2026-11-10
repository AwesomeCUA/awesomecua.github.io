---
title: "Aguvis stage 2 trajectory data · 数据集 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/url-b5e2127e07f692d516b9/
updated: 2026-10-18
type: dataset
lang: zh-CN
---

# Aguvis stage 2 trajectory data

Aguvis 第二阶段的界面轨迹数据集，用于在定位预训练后学习操作序列、规划和推理。

- 目录页面：https://awesomecua.com/zh/resources/url-b5e2127e07f692d516b9/
- English：https://awesomecua.com/resources/url-b5e2127e07f692d516b9/index.md
- 原始来源：https://huggingface.co/datasets/xlangai/aguvis-stage2
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：规划、数据生成
- 证据核查日期：2026-10-17T02:03:33Z
- ID：url:b5e2127e07f692d516b9

## 范围记录

The manifest contains trajectory annotations and archives associated with mobile, desktop and web sources. The card declares Apache-2.0. This stage has a different training purpose and files from the grounding release. No archive or training sample was downloaded.

- 完整记录 JSON：https://awesomecua.com/resources/url-b5e2127e07f692d516b9/record.json

## 结构化规格

- 格式：JSON annotations, ZIP image packages, multipart TAR image packages
- 模态：GUI screenshots, natural-language instructions, action trajectories
- 数据划分：training
- 监督信号：GUI trajectory supervised fine-tuning, planning and reasoning with inner monologue

### 数量记录

未记录数量。

Stage 2 trajectory release, Hub revision bd6f1ed4, is distinct from Stage 1 grounding. The public manifest lists source-specific JSON levels and image ZIP/multipart TAR packages. The training recipe uses all rows for some inputs and random:33% for others; several l2 paths occur twice while the manifest also contains l3 files. Recipe rows/levels are neither independent datasets nor disjoint train/test splits. No example/action/trajectory count is inferred. Apache-2.0 is the card declaration, with separate underlying source terms.

## 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/xlangai/aguvis-stage2/raw/main/README.md
- 文档：未记录
- 权重：未记录

## 一手证据

- https://huggingface.co/datasets/xlangai/aguvis-stage2/raw/main/README.md（获取于 2026-10-17T02:03:33Z；SHA-256：550293f00905615e19e63ac896818f9875dad38fea0ffe196c6302a29719aa72）
- https://huggingface.co/api/datasets/xlangai/aguvis-stage2（获取于 2026-10-17T02:03:33Z；SHA-256：f030264a7a8c7485dc7cf15ca554d84450cc492d2ac90e5965810a0207ef370b）
- https://raw.githubusercontent.com/xlang-ai/aguvis/HEAD/README.md（获取于 2026-10-16T06:36:00Z；SHA-256：2dd9f36b818c1b7b6bd772ba8575f6c0ebab6d9e0d307edcc2f196f3e4ba502e）
- https://raw.githubusercontent.com/xlang-ai/aguvis/HEAD/data/stage2.yaml（获取于 2026-10-17T14:21:11Z；SHA-256：8c1b39e9d16067018ce845fd4e996f34e2b47346c342b2ba26b030f4a5338b66）
- https://huggingface.co/datasets/xlangai/aguvis-stage2/raw/main/README.md（获取于 2026-10-17T02:03:33Z；SHA-256：550293f00905615e19e63ac896818f9875dad38fea0ffe196c6302a29719aa72）
