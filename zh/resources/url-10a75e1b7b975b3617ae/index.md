---
title: "PSAI computer-use dataset · 数据集 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/url-10a75e1b7b975b3617ae/
updated: 2026-10-18
type: dataset
lang: zh-CN
---

# PSAI computer-use dataset

收录 3,167 项浏览器和桌面任务的人类操作记录，每项含屏幕视频、输入事件和推理步骤，部分任务另有截图或 DOM 快照。

- 目录页面：https://awesomecua.com/zh/resources/url-10a75e1b7b975b3617ae/
- English：https://awesomecua.com/resources/url-10a75e1b7b975b3617ae/index.md
- 原始来源：https://huggingface.co/datasets/anaisleila/computer-use-data-psai
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、桌面、Windows、macOS
- 主题：数据生成、录制、视频
- 证据核查日期：2026-10-18T12:12:10Z
- ID：url:10a75e1b7b975b3617ae

## 范围记录

Released by Paradigm Shift AI. The card reports 2,220 browser and 947 computer tasks over 294 websites and 173 applications, labels most tasks cross-platform with a few Windows or macOS tasks, and says human vendors performed the tasks under signed release agreements but that recordings may contain personal information. Hub API at revision 0e1b7c63: not gated, 16 parquet shards, 3,167 MP4 videos and 1,766 DOM-snapshot zips; there is no LICENSE file in the repository. The card metadata declares MIT for the data.

- 完整记录 JSON：https://awesomecua.com/resources/url-10a75e1b7b975b3617ae/record.json

## 结构化规格

- 格式：Parquet, MP4, zip archives, JSON strings
- 模态：screen videos, screenshots, DOM snapshots, keyboard and mouse events, task metadata
- 数据划分：train
- 监督信号：human computer-use demonstrations, reasoning steps

### 数量记录

- 3,167 个任务 — unique completed tasks in the train split（来源报告；来源：https://huggingface.co/datasets/anaisleila/computer-use-data-psai/raw/0e1b7c63072833ba58b89dcfcc0cbac45107b0f4/README.md）
- 3,267 行 — train split rows, including 100 duplicate rows（来源报告；来源：https://huggingface.co/datasets/anaisleila/computer-use-data-psai/raw/0e1b7c63072833ba58b89dcfcc0cbac45107b0f4/README.md）
- 14,740 张截图 — images embedded in the parquet files, covering 1,349 tasks（来源报告；来源：https://huggingface.co/datasets/anaisleila/computer-use-data-psai/raw/0e1b7c63072833ba58b89dcfcc0cbac45107b0f4/README.md）
- 3,167 个视频文件 — videos/*.mp4 at revision 0e1b7c63（计算得出）（来源：https://huggingface.co/api/datasets/anaisleila/computer-use-data-psai/revision/0e1b7c63072833ba58b89dcfcc0cbac45107b0f4）
- 1,766 个 DOM 快照归档 — dom_snaps/*.zip at revision 0e1b7c63（计算得出）（来源：https://huggingface.co/api/datasets/anaisleila/computer-use-data-psai/revision/0e1b7c63072833ba58b89dcfcc0cbac45107b0f4）

Rows carry task name, category (browser or computer task), sub-categories, application or website, difficulty, OS label, login requirement, completion time, screenshots, video and DOM file paths, event JSON, reasoning steps and system metadata. Tasks share template IDs across vendors. Deduplicate on unique_data_id.

## 许可证信息

- 代码：未记录
- 数据：mit — https://huggingface.co/datasets/anaisleila/computer-use-data-psai/raw/0e1b7c63072833ba58b89dcfcc0cbac45107b0f4/README.md
- 文档：未记录
- 权重：未记录

## 一手证据

- https://huggingface.co/datasets/anaisleila/computer-use-data-psai/raw/0e1b7c63072833ba58b89dcfcc0cbac45107b0f4/README.md（获取于 2026-10-18T12:12:10Z；SHA-256：599cec3395df4562f867d0262183df8fc0bd6c2c3e871d518298772e4498c94e）
- https://huggingface.co/api/datasets/anaisleila/computer-use-data-psai/revision/0e1b7c63072833ba58b89dcfcc0cbac45107b0f4（获取于 2026-10-18T12:12:10Z；SHA-256：4b2708de50c2368246883bc0d62919cef0c6843c2172c5ec708d168a0670eaf7）
- https://huggingface.co/datasets/anaisleila/computer-use-data-psai/raw/0e1b7c63072833ba58b89dcfcc0cbac45107b0f4/README.md（获取于 2026-10-18T12:12:10Z；SHA-256：599cec3395df4562f867d0262183df8fc0bd6c2c3e871d518298772e4498c94e）
