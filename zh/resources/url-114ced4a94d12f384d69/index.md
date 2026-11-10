---
title: "Mobile-R1 trajectory sample · 数据集 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/url-114ced4a94d12f384d69/
updated: 2026-10-19
type: dataset
lang: zh-CN
---

# Mobile-R1 trajectory sample

Mobile-R1 中文 Android 应用标注轨迹的开放样本：1,007 个任务的各步骤将截图与思路、子任务及点击、滑动、输入或打开等 mobile_use 动作配对。

- 目录页面：https://awesomecua.com/zh/resources/url-114ced4a94d12f384d69/
- English：https://awesomecua.com/resources/url-114ced4a94d12f384d69/index.md
- 原始来源：https://huggingface.co/datasets/Mobile-R1/Mobile-R1
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：手机操作、模仿学习
- 证据核查日期：2026-10-19T06:56:13Z
- ID：url:114ced4a94d12f384d69

## 范围记录

The card describes this release as an open-sourced sample: the full Mobile-R1 dataset has 24,521 manually annotated instances from 4,635 trajectories, of which 1,007 trajectories on 28 applications are published. Instructions, thoughts and subtasks are in Chinese. Each data.jsonl row carries the app name, instruction, system prompt, screen size and a step list whose entries hold an image filename, thought, subtask, a mobile_use function call and the full model-style response. The card's apache-2.0 declaration covers this release and does not settle rights to the app screenshots.

- 完整记录 JSON：https://awesomecua.com/resources/url-114ced4a94d12f384d69/record.json

## 结构化规格

- 格式：JSONL, PNG images
- 模态：screenshots, instructions, thoughts, subtask descriptions, actions
- 数据划分：未记录
- 监督信号：manually annotated trajectories

### 数量记录

- 1,007 条轨迹 — Mobile-R1 Hub release (card statistics)（来源报告；来源：https://huggingface.co/datasets/Mobile-R1/Mobile-R1/raw/c3904f0fdad03a3a4191492880312bda5ad36516/README.md）
- 28 个应用 — Mobile-R1 Hub release (card statistics)（来源报告；来源：https://huggingface.co/datasets/Mobile-R1/Mobile-R1/raw/c3904f0fdad03a3a4191492880312bda5ad36516/README.md）
- 3,924 个样本（步骤） — Mobile-R1 Hub release (card statistics)（来源报告；来源：https://huggingface.co/datasets/Mobile-R1/Mobile-R1/raw/c3904f0fdad03a3a4191492880312bda5ad36516/README.md）
- 1,007 行 data.jsonl 数据 — Mobile-R1 Hub release at revision c3904f0（计算得出）（来源：https://huggingface.co/datasets/Mobile-R1/Mobile-R1/resolve/c3904f0fdad03a3a4191492880312bda5ad36516/data.jsonl）
- 3,899 条轨迹步骤条目 — Mobile-R1 Hub release at revision c3904f0（计算得出）（来源：https://huggingface.co/datasets/Mobile-R1/Mobile-R1/resolve/c3904f0fdad03a3a4191492880312bda5ad36516/data.jsonl）
- 3,924 个位于 images/ 下的 PNG 文件 — Mobile-R1 Hub release at revision c3904f0（计算得出）（来源：https://huggingface.co/api/datasets/Mobile-R1/Mobile-R1/revision/c3904f0fdad03a3a4191492880312bda5ad36516）

Counts use different units; these counts are reported separately. The card's 3,924 samples equal the number of PNG files in the manifest, but data.jsonl references 3,899 distinct images, all present, leaving 25 files unreferenced. The rows use 30 non-empty app_name strings, including variant spellings of the same app (B站 and 哔哩哔哩), plus 5 rows with an empty name; the card reports 28 applications. No train/test split is declared.

## 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/Mobile-R1/Mobile-R1/raw/c3904f0fdad03a3a4191492880312bda5ad36516/README.md
- 文档：未记录
- 权重：未记录

## 一手证据

- https://huggingface.co/datasets/Mobile-R1/Mobile-R1/raw/c3904f0fdad03a3a4191492880312bda5ad36516/README.md（获取于 2026-10-19T06:56:13Z；SHA-256：c92e2343802f3b669e2efd1818ee48080c1eb992fc44237d564a5853b08fd625）
- https://huggingface.co/api/datasets/Mobile-R1/Mobile-R1/revision/c3904f0fdad03a3a4191492880312bda5ad36516（获取于 2026-10-19T06:56:14Z；SHA-256：3379e01e9e163c27700a3c11a8647cef1311faad72f740a58d8255ab2342ed98）
- https://huggingface.co/datasets/Mobile-R1/Mobile-R1/resolve/c3904f0fdad03a3a4191492880312bda5ad36516/data.jsonl（获取于 2026-10-19T06:56:15Z；SHA-256：a5af20573ee10ee858ab6b464cc7ed27b964cd6c967993b3711967c3069ebce3）
- https://huggingface.co/datasets/Mobile-R1/Mobile-R1/raw/c3904f0fdad03a3a4191492880312bda5ad36516/README.md（获取于 2026-10-19T06:56:13Z；SHA-256：c92e2343802f3b669e2efd1818ee48080c1eb992fc44237d564a5853b08fd625）
