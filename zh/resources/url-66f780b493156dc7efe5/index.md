---
title: "Multimodal-Mind2Web · 数据集 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/url-66f780b493156dc7efe5/
updated: 2026-10-18
type: dataset
lang: zh-CN
---

# Multimodal-Mind2Web

Mind2Web 操作步骤与对应网页截图对齐，附原始及清理后的 HTML、候选元素和目标操作，包含训练集及按任务、网站和域名划分的留出测试集。

- 目录页面：https://awesomecua.com/zh/resources/url-66f780b493156dc7efe5/
- English：https://awesomecua.com/resources/url-66f780b493156dc7efe5/index.md
- 原始来源：https://huggingface.co/datasets/osunlp/Multimodal-Mind2Web
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、动作预测、评测
- 证据核查日期：2026-10-18T16:02:04Z
- ID：url:66f780b493156dc7efe5

## 范围记录

Each row is one action step with the page state before the action; tasks are distinct annotation IDs. The card says the three test splits were human-verified for element visibility and rendering, while the train split may contain badly rendered screenshots. Its test task counts (177, 142 and 694) are lower than the 252, 177 and 912 task instances that the Mind2Web README lists for the cross-task, cross-website and cross-domain test sets. The card points to the SeeAct repository and paper and declares OpenRAIL, recorded as stated; terms for the underlying website content were not assessed.

- 完整记录 JSON：https://awesomecua.com/resources/url-66f780b493156dc7efe5/record.json

## 结构化规格

- 格式：Parquet
- 模态：webpage screenshots, raw and cleaned HTML, task descriptions, action histories
- 数据划分：train, test_task, test_website, test_domain
- 监督信号：target operation per step (CLICK, TYPE or SELECT with value), positive and negative candidate elements

### 数量记录

- 7,775 个动作步骤 — train split（来源报告；来源：https://huggingface.co/datasets/osunlp/Multimodal-Mind2Web/raw/1b4c6a8cf9f77b7a5e0d641959935c80c4a05889/README.md）
- 1,009 个任务 — train split（来源报告；来源：https://huggingface.co/datasets/osunlp/Multimodal-Mind2Web/raw/1b4c6a8cf9f77b7a5e0d641959935c80c4a05889/README.md）
- 1,339 个动作步骤 — test_task split（来源报告；来源：https://huggingface.co/datasets/osunlp/Multimodal-Mind2Web/raw/1b4c6a8cf9f77b7a5e0d641959935c80c4a05889/README.md）
- 177 个任务 — test_task split（来源报告；来源：https://huggingface.co/datasets/osunlp/Multimodal-Mind2Web/raw/1b4c6a8cf9f77b7a5e0d641959935c80c4a05889/README.md）
- 1,019 个动作步骤 — test_website split（来源报告；来源：https://huggingface.co/datasets/osunlp/Multimodal-Mind2Web/raw/1b4c6a8cf9f77b7a5e0d641959935c80c4a05889/README.md）
- 142 个任务 — test_website split（来源报告；来源：https://huggingface.co/datasets/osunlp/Multimodal-Mind2Web/raw/1b4c6a8cf9f77b7a5e0d641959935c80c4a05889/README.md）
- 4,060 个动作步骤 — test_domain split（来源报告；来源：https://huggingface.co/datasets/osunlp/Multimodal-Mind2Web/raw/1b4c6a8cf9f77b7a5e0d641959935c80c4a05889/README.md）
- 694 个任务 — test_domain split（来源报告；来源：https://huggingface.co/datasets/osunlp/Multimodal-Mind2Web/raw/1b4c6a8cf9f77b7a5e0d641959935c80c4a05889/README.md）

Action steps and tasks are different units; the split sizes are the card's figures, and a column read of the Parquet files at this revision gave the same step and task counts.

## 许可证信息

- 代码：未记录
- 数据：openrail — https://huggingface.co/datasets/osunlp/Multimodal-Mind2Web
- 文档：未记录
- 权重：未记录

## 一手证据

- https://huggingface.co/api/datasets/osunlp/Multimodal-Mind2Web（获取于 2026-10-18T16:02:04Z；SHA-256：261ab42b94fc347c2581445f61ed158ffdfd201f192c51ded49fe9fe1b298503）
- https://huggingface.co/datasets/osunlp/Multimodal-Mind2Web/raw/1b4c6a8cf9f77b7a5e0d641959935c80c4a05889/README.md（获取于 2026-10-18T16:02:04Z；SHA-256：8bb1e02777556f3f679c4610be9e5572b3cb218a89b98d6f75a4fc1b82fa06dd）
- https://raw.githubusercontent.com/OSU-NLP-Group/Mind2Web/33bd95caeee7bba22dd08ecc935845e15c5e5dc7/README.md（获取于 2026-10-18T16:02:15Z；SHA-256：157dbd840264ea29f958c0b7383d63783845c573b3e19a1f39b773be22e0b32d）
- https://huggingface.co/api/datasets/osunlp/Multimodal-Mind2Web（获取于 2026-10-18T16:02:04Z；SHA-256：261ab42b94fc347c2581445f61ed158ffdfd201f192c51ded49fe9fe1b298503）
