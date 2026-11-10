---
title: "Uni-GUI-OpenMobile · 数据集 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/url-66a0adb854eff694965d/
updated: 2026-10-18
type: dataset
lang: zh-CN
---

# Uni-GUI-OpenMobile

UI-MOPD 训练数据中通过 AndroidWorld 在 19 款开源应用上采集的 Android 轨迹：共 2,640 项任务，含逐步截图、推理轨迹和归一化的点击、滑动、输入及回答操作。

- 目录页面：https://awesomecua.com/zh/resources/url-66a0adb854eff694965d/
- English：https://awesomecua.com/resources/url-66a0adb854eff694965d/index.md
- 原始来源：https://huggingface.co/datasets/UI-MOPD/Uni-GUI-OpenMobile
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：数据生成、手机操作、模仿学习
- 证据核查日期：2026-10-18T12:34:20Z
- ID：url:66a0adb854eff694965d

## 范围记录

The UI-MOPD paper's Uni-GUI combines self-collected trajectories with cleaned public OpenCUA and OpenMobile (arxiv:2604.15093) trajectories, and its composition table lists a mobile OpenMobile part of about 2.7K trajectories and 35K steps; this repository's name and 2,640 trajectories match that part, though its card describes the data only as collected on open-source apps via AndroidWorld and reports about 25.9K steps. Episode IDs carry split1 to split4 prefixes. Every folder also has a result.json (a sampled one holds the goal and raw per-step model responses with tool calls), and 1,913 folders have a metadata.json. Apache-2.0 is the card's declaration and does not settle rights to the upstream trajectories or app content.

- 完整记录 JSON：https://awesomecua.com/resources/url-66a0adb854eff694965d/record.json

## 结构化规格

- 格式：per-trajectory folders with task.json, result.json and PNG screenshots
- 模态：screenshots, task queries, reasoning traces, actions
- 数据划分：未记录
- 监督信号：agent trajectories cleaned and normalized for supervised training, structured reasoning traces, normalized mobile actions

### 数量记录

- 2,640 条轨迹 — Uni-GUI-OpenMobile card statistics（来源报告；来源：https://huggingface.co/datasets/UI-MOPD/Uni-GUI-OpenMobile/raw/774eb20f97724bf64faa9e66b1572f05b1688e38/README.md）
- ≈ 25,900 步 — Uni-GUI-OpenMobile card statistics（来源报告；来源：https://huggingface.co/datasets/UI-MOPD/Uni-GUI-OpenMobile/raw/774eb20f97724bf64faa9e66b1572f05b1688e38/README.md）
- 19 个开源 Android 应用 — Uni-GUI-OpenMobile card statistics（来源报告；来源：https://huggingface.co/datasets/UI-MOPD/Uni-GUI-OpenMobile/raw/774eb20f97724bf64faa9e66b1572f05b1688e38/README.md）
- 2,640 个 task.json 轨迹文件 — Hub manifest at revision 774eb20f（计算得出）（来源：https://huggingface.co/api/datasets/UI-MOPD/Uni-GUI-OpenMobile/revision/774eb20f97724bf64faa9e66b1572f05b1688e38）
- 34,344 个 PNG 截图文件 — Hub manifest at revision 774eb20f（计算得出）（来源：https://huggingface.co/api/datasets/UI-MOPD/Uni-GUI-OpenMobile/revision/774eb20f97724bf64faa9e66b1572f05b1688e38）

Trajectories, steps, apps and files are different units and are counted separately. The task.json count from the manifest matches the card's trajectory count, and the card's per-app counts sum to 2,640 trajectories. Screenshot files were counted from the manifest. Coordinates are normalized to [0, 1000] on a 1080x2400 screen. No train/test split is declared; the split1 to split4 episode prefixes (727, 603, 793 and 517 trajectories) are not documented as splits.

## 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/UI-MOPD/Uni-GUI-OpenMobile/raw/774eb20f97724bf64faa9e66b1572f05b1688e38/README.md
- 文档：未记录
- 权重：未记录

## 一手证据

- https://huggingface.co/datasets/UI-MOPD/Uni-GUI-OpenMobile/raw/774eb20f97724bf64faa9e66b1572f05b1688e38/README.md（获取于 2026-10-18T12:34:20Z；SHA-256：3ac1e8c3b57cf43297a1b4487a621fc8920c0983d62ffa13e468d3a5a3dfcf72）
- https://huggingface.co/api/datasets/UI-MOPD/Uni-GUI-OpenMobile/revision/774eb20f97724bf64faa9e66b1572f05b1688e38（获取于 2026-10-18T12:33:58Z；SHA-256：78a2b80c6ad0d44016c7858c47b6871f4de3cfb880dd18ffff446629b0efd1ae）
- https://arxiv.org/html/2607.04425v1（获取于 2026-10-18T12:32:02Z；SHA-256：7fc33cf335f41716d5030d562cd6b53323a32f81551caa130afa43043509511b）
- https://huggingface.co/datasets/UI-MOPD/Uni-GUI-OpenMobile/raw/774eb20f97724bf64faa9e66b1572f05b1688e38/split1_1004_ExpenseAddMultipleFromGallery/result.json（获取于 2026-10-18T12:33:58Z；SHA-256：cd0e9164c57baa4e9d2dc1854337fed09e961cf710ee3a69d52fe1623cca6f9e）
- https://huggingface.co/datasets/UI-MOPD/Uni-GUI-OpenMobile/raw/774eb20f97724bf64faa9e66b1572f05b1688e38/README.md（获取于 2026-10-18T12:34:20Z；SHA-256：3ac1e8c3b57cf43297a1b4487a621fc8920c0983d62ffa13e468d3a5a3dfcf72）
