---
title: "Harden Vanilla Puppeteer · 工具 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/github-prescience-data-harden-puppeteer/
updated: 2026-11-10
type: tool
lang: zh-CN
---

# Harden Vanilla Puppeteer

一组 patch-package 补丁，修改 Puppeteer 核心文件，使页面调用在隔离环境中执行，并从错误堆栈和配置文件名中去除 Puppeteer 字样，以降低自动化检测率。

- 目录页面：https://awesomecua.com/zh/resources/github-prescience-data-harden-puppeteer/
- English：https://awesomecua.com/resources/github-prescience-data-harden-puppeteer/index.md
- 原始来源：https://github.com/prescience-data/harden-puppeteer
- 类型：工具
- 审核状态：已审核
- 范围：相关研究
- 运行环境：网页
- 主题：网页导航、自动化
- 证据核查日期：2026-11-10T06:29:29Z
- ID：github:prescience-data/harden-puppeteer

## 范围记录

Patches cover Puppeteer 1.19.0, 2.1.1, 5.2.1, 5.3.1 and 7.0.1 and Puppeteer Core 5.3.1, plus a universal srcdoc patch in ./src. Scripts injected with page.evaluateOnNewDocument() still run in the main world.

- 完整记录 JSON：https://awesomecua.com/resources/github-prescience-data-harden-puppeteer/record.json

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/prescience-data/harden-puppeteer/ead46b8eefee34709d91c17a5dbe928e9d959356/README.md（获取于 2026-11-10T06:29:29Z；SHA-256：eda340fdd66a38f6cf7bc83d63efc5d453be2b9b6b89814b8eaafa6c58bc4cda）
