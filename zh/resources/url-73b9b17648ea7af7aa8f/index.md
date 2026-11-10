---
title: "SATraj-OS · 数据集 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/url-73b9b17648ea7af7aa8f/
updated: 2026-10-18
type: dataset
lang: zh-CN
---

# SATraj-OS

桌面计算机使用轨迹包含逐步截图及成功、安全和攻击标签，分为能力运行、安全完成与拒绝运行，以及源自 RiOSWorld 的旧版安全归档。

- 目录页面：https://awesomecua.com/zh/resources/url-73b9b17648ea7af7aa8f/
- English：https://awesomecua.com/resources/url-73b9b17648ea7af7aa8f/index.md
- 原始来源：https://huggingface.co/datasets/AI45Research/SATraj-OS
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：数据生成、安全与防护、模仿学习
- 证据核查日期：2026-10-18T11:15:59Z
- ID：url:73b9b17648ea7af7aa8f

## 范围记录

The ungated Hub repository (revision 74deb768) publishes trajectories.jsonl files with zipped or tarred step screenshots in three configs: Capability (tasks from SCOPE-Gen), Safety-v2 (safe completions and refusals on attack-injected Capability tasks) and a legacy Safety archive generated through RiOSWorld rollouts that keeps risky outcomes. Each record has chat-format messages whose assistant turns hold an action description and a coordinate action, plus success, safety, reward and attack fields. The card declares Apache-2.0 for the data; screenshots show third-party desktop applications whose own terms are not addressed. Thunderbird and VLC capability files are present outside the capability config. The Safactory report (arXiv 2605.06230, v2) describes SATraj-OS as produced with its OSGym environment and reports 10,496 trajectories and 158,196 steps. That paper is not yet in the retained archive, so no paper relation is recorded.

- 完整记录 JSON：https://awesomecua.com/resources/url-73b9b17648ea7af7aa8f/record.json

## 结构化规格

- 格式：JSONL, ZIP image archives, tar.gz image archives
- 模态：screenshots, instructions, actions, action descriptions
- 数据划分：capability/train, safety/train, safety_v2/train
- 监督信号：computer-use trajectories, task-success labels, safety-outcome labels, safe-refusal examples

### 数量记录

- 4,344 条轨迹 — Capability set（来源报告；来源：https://huggingface.co/datasets/AI45Research/SATraj-OS/raw/main/README.md）
- 68,140 个交互步骤 — Capability set（来源报告；来源：https://huggingface.co/datasets/AI45Research/SATraj-OS/raw/main/README.md）
- 541 条轨迹 — Safety-v2 set（来源报告；来源：https://huggingface.co/datasets/AI45Research/SATraj-OS/raw/main/README.md）
- 3,486 个交互步骤 — Safety-v2 set（来源报告；来源：https://huggingface.co/datasets/AI45Research/SATraj-OS/raw/main/README.md）
- 6,152 条轨迹 — legacy Safety archive（来源报告；来源：https://huggingface.co/datasets/AI45Research/SATraj-OS/raw/main/README.md）
- 88,496 个交互步骤 — legacy Safety archive（来源报告；来源：https://huggingface.co/datasets/AI45Research/SATraj-OS/raw/main/README.md）

Counts are publisher-reported on the card. The card's headline 4,885 trajectories and 71,626 steps cover Capability plus Safety-v2 only. The Safactory report's 10,496 trajectories match Capability plus the legacy Safety archive, but its 158,196 steps do not equal the card's step totals for those sets. A trajectory is a multi-step episode; screenshot counts use a different unit.

## 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/AI45Research/SATraj-OS/raw/main/README.md
- 文档：未记录
- 权重：未记录

## 一手证据

- https://huggingface.co/datasets/AI45Research/SATraj-OS/raw/main/README.md（获取于 2026-10-18T11:15:59Z；SHA-256：2e23775770af343f07319036f671ad5561ec387fcbcc2f7ea9199bf90494d977）
- https://huggingface.co/api/datasets/AI45Research/SATraj-OS（获取于 2026-10-18T11:16:00Z；SHA-256：9afd95cd02de90cb4fab79a80810f5858409128e23a19b6913b79571ea5766f5）
- https://arxiv.org/html/2605.06230v2（获取于 2026-10-18T11:16:01Z；SHA-256：f2b9696b13f7052a31f460675dd19e406485816dd284892378c2e281ec3d3d16）
- https://huggingface.co/datasets/AI45Research/SATraj-OS/raw/main/README.md（获取于 2026-10-18T11:15:59Z；SHA-256：2e23775770af343f07319036f671ad5561ec387fcbcc2f7ea9199bf90494d977）
