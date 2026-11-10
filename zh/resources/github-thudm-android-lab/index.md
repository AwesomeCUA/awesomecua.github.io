---
title: "AndroidLab · 评测基准 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/github-thudm-android-lab/
updated: 2026-10-17
type: benchmark
lang: zh-CN
---

# AndroidLab

可复现的 Android 基准，在预设虚拟设备上的 9 个应用中包含 138 项任务，可在 Mac 上通过 AVD 或在 Linux 上通过 Docker 运行，并与 Android Instruct 训练集一同发布。

- 目录页面：https://awesomecua.com/zh/resources/github-thudm-android-lab/
- English：https://awesomecua.com/resources/github-thudm-android-lab/index.md
- 原始来源：https://github.com/THUDM/Android-Lab
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：评测、手机操作
- 证据核查日期：2026-10-16T06:35:58Z
- ID：github:thudm/android-lab

- 完整记录 JSON：https://awesomecua.com/resources/github-thudm-android-lab/record.json

## 结构化规格

- 动作 / 输出：Android operations through the agent framework
- 评测方式：The evaluation pipeline produces success, subgoal success, reversed redundancy, and reasonable-operation metrics; result generation requires a configured judge model.
- 侧重：Android task completion, subgoal completion, operation efficiency
- 观测：UI XML, set-of-marks views
- 任务设置：交互式

### 数量记录

- 138 个任务 — benchmark task collection（来源报告；来源：https://raw.githubusercontent.com/THUDM/Android-Lab/HEAD/README.md）
- 9 个应用 — benchmark application set（来源报告；来源：https://raw.githubusercontent.com/THUDM/Android-Lab/HEAD/README.md）

The benchmark uses predefined virtual-device images and apps chosen to work without network/login requirements. XML and SoM modes should be reported separately. These counts concern evaluation tasks; Android Instruct is a separately released training set.

## 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/THUDM/Android-Lab/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/THUDM/Android-Lab/HEAD/README.md（获取于 2026-10-16T06:35:58Z；SHA-256：340680a9a7833d103234b8367195deebd29bfec7e25ebc50c2dc04fc3627e55b）
- https://raw.githubusercontent.com/THUDM/Android-Lab/HEAD/README.md（获取于 2026-10-16T06:35:58Z；SHA-256：340680a9a7833d103234b8367195deebd29bfec7e25ebc50c2dc04fc3627e55b）
- https://raw.githubusercontent.com/THUDM/Android-Lab/HEAD/LICENSE（获取于 2026-10-16T06:41:58Z；SHA-256：1bbbee919161337e2456c587c6be809214406482cd9f1292a9eb62428f6961f3）
