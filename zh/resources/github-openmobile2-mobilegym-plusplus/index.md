---
title: "MobileGym++ / MobileGym++ Bench · 评测基准 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/github-openmobile2-mobilegym-plusplus/
updated: 2026-10-17
type: benchmark
lang: zh-CN
---

# MobileGym++ / MobileGym++ Bench

基于浏览器渲染的移动端模拟环境，应用状态可重置，并为纯 GUI 智能体和 GUI 加工具智能体提供共用任务集。

- 目录页面：https://awesomecua.com/zh/resources/github-openmobile2-mobilegym-plusplus/
- English：https://awesomecua.com/resources/github-openmobile2-mobilegym-plusplus/index.md
- 原始来源：https://github.com/OpenMobile2/MobileGym-plusplus
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：手机操作、评测、跨应用、工具集成
- 证据核查日期：2026-10-17T01:48:10Z
- ID：github:openmobile2/mobilegym-plusplus

## 范围记录

These clients simulate named commercial applications. The code and simulator data have distinct license files. No benchmark run was performed. The README describes a phone that runs in the browser, and the Android-emulator playground is a separate OpenMobile2 release, so the platform facet is web.

- 完整记录 JSON：https://awesomecua.com/resources/github-openmobile2-mobilegym-plusplus/record.json

## 结构化规格

- 动作 / 输出：GUI gestures, foreground-app tool calls in hybrid mode
- 评测方式：Programmatic checkers inspect changes in application state; both modes share task definitions and initial states.
- 侧重：task completion, cross-application workflows, GUI and app-native tool comparison
- 观测：screenshots
- 任务设置：交互式

### 数量记录

- 215 个任务定义 — official.json（计算得出）（来源：https://raw.githubusercontent.com/OpenMobile2/MobileGym-plusplus/HEAD/bench_env/benchmark/official.json）
- 63 个模拟客户端 — complete simulator installation（来源报告；来源：https://raw.githubusercontent.com/OpenMobile2/MobileGym-plusplus/HEAD/README.md）
- 35 个模拟客户端 — new clients in this release（来源报告；来源：https://raw.githubusercontent.com/OpenMobile2/MobileGym-plusplus/HEAD/README.md）

The task count was checked against unique task_id values in the published manifest. The 35 new clients are a subset of 63 total clients. This simulator runs in a browser; Android-emulator apps are a separate part of OpenMobile-2.

## 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/OpenMobile2/MobileGym-plusplus/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/OpenMobile2/MobileGym-plusplus/HEAD/README.md（获取于 2026-10-17T01:48:10Z；SHA-256：d9f850ec196e715650e679cb81515adaa64ddc5a60a882bfe97b0f6a098ddc83）
- https://os-copilot.github.io/OpenMobile2-Home/（获取于 2026-10-17T01:46:06Z；SHA-256：9b385e9f6aa2f7169f616a76887df3b76df605cb2bea071d99ee7ca3f9b659cc）
- https://raw.githubusercontent.com/OpenMobile2/MobileGym-plusplus/HEAD/bench_env/benchmark/official.json（获取于 2026-10-17T01:50:11Z；SHA-256：35c1641b349201c68917fbe4c4036814487678e9588d9b1c903af26917800316）
- https://raw.githubusercontent.com/OpenMobile2/MobileGym-plusplus/HEAD/LICENSE（获取于 2026-10-17T01:52:51Z；SHA-256：7618cd7de039c264759ca8ca0b9130c6de63a4536dcf436baedd4cfbf639073e）
