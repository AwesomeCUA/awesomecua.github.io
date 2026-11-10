---
title: "GUI-Xplore · 数据集 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/url-f56dbd8bfac8b0545e07/
updated: 2026-10-18
type: dataset
lang: zh-CN
---

# GUI-Xplore

按 Android 应用整理的探索视频，含截图与操作序列、视图层级，以及应用概览、页面分析、操作回忆、序列验证等五类任务的问答对。

- 目录页面：https://awesomecua.com/zh/resources/url-f56dbd8bfac8b0545e07/
- English：https://awesomecua.com/resources/url-f56dbd8bfac8b0545e07/index.md
- 原始来源：https://huggingface.co/datasets/9211sun/GUI-Xplore
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：视频、手机操作、界面理解、数据生成
- 证据核查日期：2026-10-18T12:29:45Z
- ID：url:f56dbd8bfac8b0545e07

## 范围记录

The paper's arXiv HTML links github.com/921112343/GUI-Xplore, whose README names this Hub dataset as the release; the paper link comes from the repository README. View-hierarchy files use Android uiautomator classes and Android package names, and the paper describes collection with DroidBot and crowd workers on cloud mobile devices. The card's summary line gives 32,569 QA pairs while its split table totals 35,316. The repository README lists the Xplore-Agent model, checkpoints and evaluation scripts as not yet released. Data license is CC-BY-4.0 per card metadata; it does not settle rights in third-party app content.

- 完整记录 JSON：https://awesomecua.com/resources/url-f56dbd8bfac8b0545e07/record.json

## 结构化规格

- 格式：MP4, PNG, JPEG, XML, JSON, CSV
- 模态：exploration videos, screenshots, view hierarchies, actions, question-answer pairs
- 数据划分：auto, manual_train, manual_test
- 监督信号：exploration recordings, question-answer annotations, action sequences

### 数量记录

- 312 个应用 — all splits (207 auto, 85 manual_train, 20 manual_test)（来源报告；来源：https://huggingface.co/datasets/9211sun/GUI-Xplore/raw/ebac33a0fb368e005af499b5594db4278f49d3da/README.md）
- 34,367 张截图 — all splits（来源报告；来源：https://huggingface.co/datasets/9211sun/GUI-Xplore/raw/ebac33a0fb368e005af499b5594db4278f49d3da/README.md）
- 41,293 个动作 — all splits（来源报告；来源：https://huggingface.co/datasets/9211sun/GUI-Xplore/raw/ebac33a0fb368e005af499b5594db4278f49d3da/README.md）
- 15,934 个问答样本 — auto split（来源报告；来源：https://huggingface.co/datasets/9211sun/GUI-Xplore/raw/ebac33a0fb368e005af499b5594db4278f49d3da/README.md）
- 16,744 个问答样本 — manual_train split（来源报告；来源：https://huggingface.co/datasets/9211sun/GUI-Xplore/raw/ebac33a0fb368e005af499b5594db4278f49d3da/README.md）
- 2,638 个问答样本 — manual_test split（来源报告；来源：https://huggingface.co/datasets/9211sun/GUI-Xplore/raw/ebac33a0fb368e005af499b5594db4278f49d3da/README.md）
- > 115 小时探索视频 — all apps（来源报告；来源：https://huggingface.co/datasets/9211sun/GUI-Xplore/raw/ebac33a0fb368e005af499b5594db4278f49d3da/README.md）
- 312 段 MP4 探索视频 — files at Hub revision ebac33a0 (207 auto, 85 manual_train, 20 manual_test)（计算得出）（来源：https://huggingface.co/api/datasets/9211sun/GUI-Xplore/revision/ebac33a0fb368e005af499b5594db4278f49d3da）

Reported counts come from the card's split table. A script over the 15 QA JSON files at revision ebac33a0 counted 15,934 auto, 16,744 manual_train and 2,634 manual_test entries (35,312 in total), so the card's manual_test figure is four higher than the released files. Apps, screenshots, actions, QA samples and video hours are different units and are counted separately.

## 许可证信息

- 代码：未记录
- 数据：cc-by-4.0 — https://huggingface.co/datasets/9211sun/GUI-Xplore/raw/ebac33a0fb368e005af499b5594db4278f49d3da/README.md
- 文档：未记录
- 权重：未记录

## 一手证据

- https://huggingface.co/datasets/9211sun/GUI-Xplore/raw/ebac33a0fb368e005af499b5594db4278f49d3da/README.md（获取于 2026-10-18T12:29:45Z；SHA-256：3a143538ccdd7ed4ec28974153b43cf44ab2f16dee46e7f74c6fb64e7ac458da）
- https://huggingface.co/api/datasets/9211sun/GUI-Xplore/revision/ebac33a0fb368e005af499b5594db4278f49d3da（获取于 2026-10-18T12:28:52Z；SHA-256：e2346ed137224f040c012a47d46f613facf449ec418a9ecbfecf97c0254d2fa3）
- https://raw.githubusercontent.com/921112343/GUI-Xplore/3e87e22264a587a3b4ff093a0b7e35d76d1cc554/README.md（获取于 2026-10-18T12:28:51Z；SHA-256：596648200fb473192bbab00f7b7e01680ec169c67d6a7ebf7978f299f1f4983d）
- https://arxiv.org/html/2503.17709v1（获取于 2026-10-18T12:29:10Z；SHA-256：b7d8ea43f0db8c7b2432cee39e8bfb262c9c4bfd8a7290c0b50427d8eb1ac3fd）
- https://huggingface.co/datasets/9211sun/GUI-Xplore/raw/ebac33a0fb368e005af499b5594db4278f49d3da/manual_test/data/vh/com_android_documentsui/vh_1724467408.9856646.xml（获取于 2026-10-18T12:28:52Z；SHA-256：03b665dfc0b49e1721676ce9ffc63532c3b1589304fe6f63ac59f690ab61f76e）
- https://huggingface.co/datasets/9211sun/GUI-Xplore/raw/ebac33a0fb368e005af499b5594db4278f49d3da/README.md（获取于 2026-10-18T12:29:45Z；SHA-256：3a143538ccdd7ed4ec28974153b43cf44ab2f16dee46e7f74c6fb64e7ac458da）
