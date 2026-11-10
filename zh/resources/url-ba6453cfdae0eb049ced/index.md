---
title: "Plan-and-Act training data · 数据集 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/url-ba6453cfdae0eb049ced/
updated: 2026-10-17
type: dataset
lang: zh-CN
---

# Plan-and-Act training data

面向 WebArena-Lite 和 WebVoyager 的规划器与操作执行器训练样例，包含按模型处理的文件和原始轨迹标注。

- 目录页面：https://awesomecua.com/zh/resources/url-ba6453cfdae0eb049ced/
- English：https://awesomecua.com/resources/url-ba6453cfdae0eb049ced/index.md
- 原始来源：https://huggingface.co/datasets/xTRam1/plan-and-act-data
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：规划、网页导航、数据生成
- 证据核查日期：2026-10-17T02:02:29Z
- ID：url:ba6453cfdae0eb049ced

## 范围记录

The public manifest exposes JSON/JSONL data for planner and actor roles, including train and validation variants. The card declares MIT. Its loading examples use a different Hub repository identifier and omit the data/ prefix for one file; the inspected xTRam1 manifest records the file layout.

- 完整记录 JSON：https://awesomecua.com/resources/url-ba6453cfdae0eb049ced/record.json

## 结构化规格

- 格式：JSON, JSONL
- 模态：text, plans, actions
- 数据划分：train (QwQ-32B files), validation (QwQ-32B files)
- 监督信号：high-level plans, action execution

### 数量记录

未记录数量。

The release contains planner and actor files for two web environments. No sample count is inferred from the package-file manifest. Card loading examples have repository/path inconsistencies.

## 许可证信息

- 代码：未记录
- 数据：mit — https://huggingface.co/datasets/xTRam1/plan-and-act-data/raw/main/README.md
- 文档：未记录
- 权重：未记录

## 一手证据

- https://huggingface.co/datasets/xTRam1/plan-and-act-data/raw/main/README.md（获取于 2026-10-17T02:02:29Z；SHA-256：2ec8f4a03b8331bdd2ba8d6f6800d6dea9d955cfd9e7c1d2168ecb64deb25448）
- https://huggingface.co/api/datasets/xTRam1/plan-and-act-data（获取于 2026-10-17T02:02:28Z；SHA-256：a98f98b7d4ceb81b00f217983ff271257f2f1e7d2c1a09836b872b2350d79ae9）
- https://huggingface.co/datasets/xTRam1/plan-and-act-data/raw/main/README.md（获取于 2026-10-17T02:02:29Z；SHA-256：2ec8f4a03b8331bdd2ba8d6f6800d6dea9d955cfd9e7c1d2168ecb64deb25448）
