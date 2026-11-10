---
title: "WebHarbor · 评测基准 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/github-aiming-lab-webharbor/
updated: 2026-11-10
type: benchmark
lang: zh-CN
---

# WebHarbor

WebHarbor 将 153 个真实网站做成基于 Docker 的本地镜像，包含登录和数据库，并提供 3,518 个带验证器的任务，用于评估和强化学习训练 GUI 网页智能体，另有控制面实现亚秒级站点重置。

- 目录页面：https://awesomecua.com/zh/resources/github-aiming-lab-webharbor/
- English：https://awesomecua.com/resources/github-aiming-lab-webharbor/index.md
- 原始来源：https://github.com/aiming-lab/WebHarbor
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：沙箱、评测、网页导航、强化学习
- 证据核查日期：2026-11-10T06:29:27Z
- ID：github:aiming-lab/webharbor

## 范围记录

Prebuilt images on Docker Hub (about 20 GB for all sites); tasks are in Harbor format on Hugging Face with train, test and WebVoyager splits, and harnesses for browser-use, OpenCode and OpenWebRL are in harbor/. The authors report a 75.8 average for WebHarbor-4B on WebVoyager and Online-Mind2Web.

- 完整记录 JSON：https://awesomecua.com/resources/github-aiming-lab-webharbor/record.json

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/aiming-lab/WebHarbor/db506e3a28d8829a8295a2bb5f06c299e1db47f6/README.md（获取于 2026-11-10T06:29:27Z；SHA-256：850d1ffba550f7e2d776d69009cd2ea3aed05acf3b3bdc4d798facc41ef19080）
