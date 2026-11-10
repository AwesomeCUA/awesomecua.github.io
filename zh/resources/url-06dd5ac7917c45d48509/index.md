---
title: "Aguvis stage 1 grounding data · 数据集 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/url-06dd5ac7917c45d48509/
updated: 2026-10-18
type: dataset
lang: zh-CN
---

# Aguvis stage 1 grounding data

Aguvis 第一阶段训练数据集，汇集多个界面数据源的 GUI 元素定位标注和图像归档。

- 目录页面：https://awesomecua.com/zh/resources/url-06dd5ac7917c45d48509/
- English：https://awesomecua.com/resources/url-06dd5ac7917c45d48509/index.md
- 原始来源：https://huggingface.co/datasets/xlangai/aguvis-stage1
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：GUI 定位、数据生成
- 证据核查日期：2026-10-17T02:03:33Z
- ID：url:06dd5ac7917c45d48509

## 范围记录

The manifest contains grounding JSON annotations and packaged images. The card declares Apache-2.0, which is recorded for this release without overriding source-dataset rights. This first-stage grounding collection is distinct from the project’s second-stage trajectory collection. No archive or training sample was downloaded.

- 完整记录 JSON：https://awesomecua.com/resources/url-06dd5ac7917c45d48509/record.json

## 结构化规格

- 格式：JSON annotations, ZIP image packages, multipart TAR image packages
- 模态：GUI screenshots, grounding annotations
- 数据划分：training
- 监督信号：GUI grounding supervised fine-tuning

### 数量记录

未记录数量。

Stage 1 grounding release, Hub revision 5d11f8f5. JSON annotations and ZIP/multipart TAR image packages are publicly listed. The official training configuration groups web, desktop and mobile inputs and selects all rows of its configured inputs. The config names omniact.json while the Hub manifest lists omniact_fix.json, so local paths need reconciliation. No sample total is inferred from names such as webui350k. Apache-2.0 is the release card declaration; upstream source rights remain separate.

## 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/xlangai/aguvis-stage1/raw/main/README.md
- 文档：未记录
- 权重：未记录

## 一手证据

- https://huggingface.co/datasets/xlangai/aguvis-stage1/raw/main/README.md（获取于 2026-10-17T02:03:33Z；SHA-256：38bda302cf741b9d2b2394b53d157b3c19d8a73e3704c01ed2f9a27c374feb77）
- https://huggingface.co/api/datasets/xlangai/aguvis-stage1（获取于 2026-10-17T02:03:33Z；SHA-256：cb3b8ec88d811d946df3cbf38ef555db5a10d1124668765710c380e9b1988b06）
- https://raw.githubusercontent.com/xlang-ai/aguvis/HEAD/README.md（获取于 2026-10-16T06:36:00Z；SHA-256：2dd9f36b818c1b7b6bd772ba8575f6c0ebab6d9e0d307edcc2f196f3e4ba502e）
- https://raw.githubusercontent.com/xlang-ai/aguvis/HEAD/data/stage1.yaml（获取于 2026-10-17T14:21:11Z；SHA-256：f6a9e55c5d48469e2c8f7799d917d25e7a758036f71c7c045fa92c35057d20da）
- https://huggingface.co/datasets/xlangai/aguvis-stage1/raw/main/README.md（获取于 2026-10-17T02:03:33Z；SHA-256：38bda302cf741b9d2b2394b53d157b3c19d8a73e3704c01ed2f9a27c374feb77）
