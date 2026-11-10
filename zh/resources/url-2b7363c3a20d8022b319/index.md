---
title: "MemGUI-Bench agent trajectories · 数据集 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/url-2b7363c3a20d8022b319/
updated: 2026-10-19
type: dataset
lang: zh-CN
---

# MemGUI-Bench agent trajectories

MemGUI-Bench 移动 GUI 智能体及模型的运行记录按智能体打包为 ZIP，包含逐步截图、操作日志和评估输出，并提供供排行榜查看器使用的压缩轨迹预览。

- 目录页面：https://awesomecua.com/zh/resources/url-2b7363c3a20d8022b319/
- English：https://awesomecua.com/resources/url-2b7363c3a20d8022b319/index.md
- 原始来源：https://huggingface.co/datasets/lgy0404/memgui-bench-trajs
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：评测、记忆
- 证据核查日期：2026-10-19T07:05:19Z
- ID：url:2b7363c3a20d8022b319

## 范围记录

The card says each attempt holds step screenshots, a log.json action sequence, evaluation_summary.json and final_decision.json, and action visualizations. The MemGUI-Bench README asks submitters to add a gzip JSON preview and MP4 under site/trajs/ through Hub pull requests. Archive names identify the agent or model, such as M3A, T3A, Mobile-Agent-E, Agent-S2, GUI-Owl-7B and several API models. The card's usage section shows an older run.py interface. The card's apache-2.0 declaration does not settle rights to app screenshots.

- 完整记录 JSON：https://awesomecua.com/resources/url-2b7363c3a20d8022b319/record.json

## 结构化规格

- 格式：ZIP archives, gzip JSON, MP4
- 模态：screenshots, action logs, evaluation results, video previews
- 数据划分：未记录
- 监督信号：agent execution trajectories with LLM-judged outcomes

### 数量记录

- 14 个按智能体划分的 ZIP 归档 — Hub manifest at revision 4525fc5（计算得出）（来源：https://huggingface.co/api/datasets/lgy0404/memgui-bench-trajs/revision/4525fc5b11cf0033cc31cafa78beb2237df6890a）
- 19 个 gzip JSON 轨迹预览包 — site/trajs/ in the Hub manifest at revision 4525fc5（计算得出）（来源：https://huggingface.co/api/datasets/lgy0404/memgui-bench-trajs/revision/4525fc5b11cf0033cc31cafa78beb2237df6890a）

Archives and preview bundles are different packagings and overlap in the agents they cover; neither is a trajectory or task count. site/trajs/index.json lists only 9 of the 19 preview bundles.

## 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/lgy0404/memgui-bench-trajs/raw/4525fc5b11cf0033cc31cafa78beb2237df6890a/README.md
- 文档：未记录
- 权重：未记录

## 一手证据

- https://huggingface.co/datasets/lgy0404/memgui-bench-trajs/raw/4525fc5b11cf0033cc31cafa78beb2237df6890a/README.md（获取于 2026-10-19T07:05:19Z；SHA-256：62d58168fbb7a1a7fd895627d839a4b37d0c46f9d2914c2888ea2356cc012735）
- https://huggingface.co/api/datasets/lgy0404/memgui-bench-trajs/revision/4525fc5b11cf0033cc31cafa78beb2237df6890a（获取于 2026-10-19T07:05:19Z；SHA-256：36b39075a426e792530250753c3befd3136b963e65b67e230ed1deedca9b1296）
- https://huggingface.co/datasets/lgy0404/memgui-bench-trajs/raw/4525fc5b11cf0033cc31cafa78beb2237df6890a/site/trajs/index.json（获取于 2026-10-19T07:05:21Z；SHA-256：d7889d1a5f6da09930ce70b128e304d61b08768c27bc0500cb9f8863b314a866）
- https://raw.githubusercontent.com/lgy0404/MemGUI-Bench/3fb01b6cc0d13e287c67f488c76f449df7d65558/README.md（获取于 2026-10-19T07:05:14Z；SHA-256：fab1bf3b766c2e59e46515dd60cf71b040986690b169bfcc0d35c6e9bc0f58fb）
- https://huggingface.co/datasets/lgy0404/memgui-bench-trajs/raw/4525fc5b11cf0033cc31cafa78beb2237df6890a/README.md（获取于 2026-10-19T07:05:19Z；SHA-256：62d58168fbb7a1a7fd895627d839a4b37d0c46f9d2914c2888ea2356cc012735）
