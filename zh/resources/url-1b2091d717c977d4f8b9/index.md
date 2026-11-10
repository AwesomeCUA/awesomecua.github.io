---
title: "AMEX dataset release · 数据集 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/url-1b2091d717c977d4f8b9/
updated: 2026-10-19
type: dataset
lang: zh-CN
---

# AMEX dataset release

AMEX 官方 Hub 数据包含 Android 应用截图及交互元素定位、屏幕与元素功能标注，以及配有逐步 GUI 操作链的指令。

- 目录页面：https://awesomecua.com/zh/resources/url-1b2091d717c977d4f8b9/
- English：https://awesomecua.com/resources/url-1b2091d717c977d4f8b9/index.md
- 原始来源：https://huggingface.co/datasets/Yuxiang007/AMEX
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：GUI 定位、界面理解、手机操作
- 证据核查日期：2026-10-19T06:22:26Z
- ID：url:1b2091d717c977d4f8b9

## 范围记录

The card calls this the official dataset repository of the AMEX paper. The full release sits under AMEX/ as element_anno.zip, instruction_anno.zip and a screenshot archive split into eight 10 GiB parts plus a final zip (about 93.5 GB together); a sample/ folder holds one episode's five screenshots with its annotations. The card adds publisher figures for ScreenSpot mobile-subset and AndroidControl beyond the arXiv paper. The AMEX project page links both this dataset and the AMEX-codebase training-code repository, which the catalog holds as the AMEX record github:yuxiangchai/amex-codebase; this release is recorded as its component. CC-BY-4.0 is the card's data declaration; that repository's Apache-2.0 code license is separate.

- 完整记录 JSON：https://awesomecua.com/resources/url-1b2091d717c977d4f8b9/record.json

## 结构化规格

- 格式：split ZIP archives, JSON, PNG
- 模态：screenshots, element bounding boxes, functionality descriptions, instructions, actions
- 数据划分：未记录
- 监督信号：interactive-element grounding, screen and element functionality descriptions, instructions with stepwise GUI-action chains

### 数量记录

- > 104,000 张截图 — AMEX collection described in the arXiv v1 abstract（来源报告；来源：https://arxiv.org/abs/2407.17490v1）
- 3,046 个指令回合 — AMEX/instruction_anno.zip at revision 17196b29 (one JSON file per episode, unique episode_id)（计算得出）（来源：https://huggingface.co/datasets/Yuxiang007/AMEX/resolve/17196b29c88dd48a7fb90ef9131bc5c7bf39f26e/AMEX/instruction_anno.zip）
- 38,709 个动作步骤 — steps lists of the 3,046 instruction episodes in AMEX/instruction_anno.zip at revision 17196b29（计算得出）（来源：https://huggingface.co/datasets/Yuxiang007/AMEX/resolve/17196b29c88dd48a7fb90ef9131bc5c7bf39f26e/AMEX/instruction_anno.zip）

Episode and step counts were computed with a script from the instruction archive; the screenshot figure is the paper's reported scale. Each step records the action type, touch and lift coordinates, typed text, package name and screenshot path. No train/test split is published.

## 许可证信息

- 代码：未记录
- 数据：cc-by-4.0 — https://huggingface.co/datasets/Yuxiang007/AMEX/raw/17196b29c88dd48a7fb90ef9131bc5c7bf39f26e/README.md
- 文档：未记录
- 权重：未记录

## 一手证据

- https://huggingface.co/datasets/Yuxiang007/AMEX/raw/17196b29c88dd48a7fb90ef9131bc5c7bf39f26e/README.md（获取于 2026-10-19T06:22:26Z；SHA-256：dbae95ce714b90305b09b8b7a9dd8d01c277f1f6a6d265f8210e9f6bab6a2192）
- https://huggingface.co/api/datasets/Yuxiang007/AMEX/revision/17196b29c88dd48a7fb90ef9131bc5c7bf39f26e（获取于 2026-10-18T15:51:37Z；SHA-256：dad2a3226a7c3c2f74998be09f4e989a82bd91cf21b1cbd22211d807cfa91d97）
- https://huggingface.co/datasets/Yuxiang007/AMEX/resolve/17196b29c88dd48a7fb90ef9131bc5c7bf39f26e/AMEX/instruction_anno.zip（获取于 2026-10-18T15:51:38Z；SHA-256：673d89f1fee1b3be6ec8c3c380e24768265c04f0ece87d852ff185b05daa585a）
- https://arxiv.org/abs/2407.17490v1（获取于 2026-10-18T15:51:39Z；SHA-256：0b19217aee442587ec75e7d691d4645f6d6125e82edf0c08ee5670a1a64ddfd8）
- https://yxchai.com/AMEX/（获取于 2026-10-19T06:21:55Z；SHA-256：4aab61e6a95ab6b6598fb64b8e55d787cd49b5c4f242d15372aed2dd312f97aa）
- https://huggingface.co/datasets/Yuxiang007/AMEX/raw/17196b29c88dd48a7fb90ef9131bc5c7bf39f26e/README.md（获取于 2026-10-19T06:22:26Z；SHA-256：dbae95ce714b90305b09b8b7a9dd8d01c277f1f6a6d265f8210e9f6bab6a2192）
