---
title: "AndroidArena · 评测基准 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/github-androidarenaagent-androidarena/
updated: 2026-10-17
type: benchmark
lang: zh-CN
---

# AndroidArena

用于评估语言模型驱动的智能体的 Android 环境。

- 目录页面：https://awesomecua.com/zh/resources/github-androidarenaagent-androidarena/
- English：https://awesomecua.com/resources/github-androidarenaagent-androidarena/index.md
- 原始来源：https://github.com/AndroidArenaAgent/AndroidArena
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：评测、手机操作
- 证据核查日期：2026-10-16T06:35:58Z
- ID：github:androidarenaagent/androidarena

- 完整记录 JSON：https://awesomecua.com/resources/github-androidarenaagent-androidarena/record.json

## 结构化规格

- 动作 / 输出：app launch/stop, click/double-click/long-click, text input, swipe/drag and Android navigation, finish
- 评测方式：The released evaluator compares trajectories with reference actions using longest-common-subsequence-based task reward and completion. Its reversed redundancy metric is the reference/predicted action-length ratio (with 1e-6 denominator smoothing), multiplied by the LLM success flag. LLM success judgments and instruction-constraint checks are separate metrics. Complete annotated action sequences are pending release; reference-dependent evaluation currently has limited coverage.
- 侧重：multi-step Android tasks, cross-app workflows and instruction constraints
- 观测：UI hierarchy text, screenshots, combined text/image observations
- 任务设置：交互式

### 数量记录

未记录数量。

README states that task instructions are released but annotated action sequences, apart from the calendar example, will come later. Environment setup targets Android API 33 with uiautomator2 and manual Google-account setup. Public task YAML and evaluator code exist. No task total is derived from app YAML file counts. Code and data licenses remain unknown.

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/AndroidArenaAgent/AndroidArena/HEAD/README.md（获取于 2026-10-16T06:35:58Z；SHA-256：206bd0dc5220cf754cffc97767cce6a3cd27660ef050a569366bef2331241c60）
- https://raw.githubusercontent.com/AndroidArenaAgent/AndroidArena/HEAD/android_env2/README.md（获取于 2026-10-17T14:21:10Z；SHA-256：a1e7dc0c5facae030c2cf19aad6511996e7e1198d8d6619268d10c29a1b57bcf）
- https://api.github.com/repos/AndroidArenaAgent/AndroidArena/git/trees/main?recursive=1（获取于 2026-10-17T14:14:05Z；SHA-256：edc03388b67143644db4a412e4c888f8c796068daff29f63615f0b6a3a04262a）
- https://raw.githubusercontent.com/AndroidArenaAgent/AndroidArena/HEAD/android_env2/observation.py（获取于 2026-10-17T14:24:52Z；SHA-256：cfa9d272c85398f54c18d6e7445d680009e8c16d128962235d899592d3094c2f）
- https://raw.githubusercontent.com/AndroidArenaAgent/AndroidArena/HEAD/android_env2/actions.py（获取于 2026-10-17T14:24:53Z；SHA-256：d25f2edf9202f59615341b62fc6046ac23a6f4cb072a6038ac562506cbdc891c）
- https://raw.githubusercontent.com/AndroidArenaAgent/AndroidArena/HEAD/run_evaluator.py（获取于 2026-10-17T14:21:10Z；SHA-256：257c42e980a0b14bd74bfcc381a0ecbef2b538c0f1cc1a94d22925efe354fb8e）
