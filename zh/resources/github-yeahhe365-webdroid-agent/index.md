---
title: "WebDroid Agent · 智能体 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/github-yeahhe365-webdroid-agent/
updated: 2026-10-18
type: agent
lang: zh-CN
---

# WebDroid Agent

在浏览器中运行的 Android 手机智能体，经 WebUSB/WebADB 连接设备，将截图及 uiautomator 文本树发送给兼容 OpenAI 或 Gemini 的视觉模型，再通过 ADB 执行其 JSON 操作。

- 目录页面：https://awesomecua.com/zh/resources/github-yeahhe365-webdroid-agent/
- English：https://awesomecua.com/resources/github-yeahhe365-webdroid-agent/index.md
- 原始来源：https://github.com/yeahhe365/WebDroid-Agent
- 类型：智能体
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：手机操作、人机协作、自动化
- 证据核查日期：2026-10-18T15:43:22Z
- ID：github:yeahhe365/webdroid-agent

## 范围记录

A React app that runs entirely in a Chromium browser (WebUSB through Tango/WebADB), or in Docker with a local proxy for model requests; the browser is the controller and the operated surface is a USB-connected Android device. Each step captures screencap output and, best effort, a compressed uiautomator dump of visible text, IDs, clickable state and bounds (src/lib/contextBuilder.ts); actions use pixel or 0-1000 normalized coordinates and become adb input, am start and keyboard-broadcast commands (src/adapters/inputCommands.ts). Sensitive taps can require confirmation, take_over hands control back to the user and type_secret sends the model only a secret ID; an unrestricted mode skips these checks. README.md is in Chinese and README.en-US.md is the English version. The repository was renamed from yeahhe365/webadb-autoglm (same repository ID 1244747615).

- 完整记录 JSON：https://awesomecua.com/resources/github-yeahhe365-webdroid-agent/record.json

## 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/yeahhe365/WebDroid-Agent/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/yeahhe365/WebDroid-Agent/HEAD/README.md（获取于 2026-10-18T15:43:22Z；SHA-256：4c7962c0068b1dd7e483ddef9c5db7b7c872727ef0c2ac160f1d6359a5db9d06）
- https://api.github.com/repos/yeahhe365/WebDroid-Agent（获取于 2026-10-18T15:43:23Z；SHA-256：9fd700009d98c4d7e5713d6a37f0b52bc2cd0b6edf3373c49f3578e30027c1dd）
- https://api.github.com/repos/yeahhe365/WebDroid-Agent/git/trees/6ef50805d0f4509d7222dd269d8e329ab95ec902?recursive=1（获取于 2026-10-18T15:43:25Z；SHA-256：7111603f8db433834ef0b39f43bcd7b2f0a585932de6603256458a48aa757ad7）
- https://raw.githubusercontent.com/yeahhe365/WebDroid-Agent/6ef50805d0f4509d7222dd269d8e329ab95ec902/README.en-US.md（获取于 2026-10-18T15:43:25Z；SHA-256：c29b70a96212cfd22008c0d1c7b55da94a2c01e407861e67be09e7a28f8df859）
- https://raw.githubusercontent.com/yeahhe365/WebDroid-Agent/6ef50805d0f4509d7222dd269d8e329ab95ec902/src/lib/contextBuilder.ts（获取于 2026-10-18T15:43:25Z；SHA-256：cbff4bef5fe7b8015830e8b96da7cc724716c575e9c99840b03d16d536b89da0）
- https://raw.githubusercontent.com/yeahhe365/WebDroid-Agent/6ef50805d0f4509d7222dd269d8e329ab95ec902/src/adapters/inputCommands.ts（获取于 2026-10-18T15:43:26Z；SHA-256：d230898643e76658658013ed915124d85a7b16167901885b271d5f2dd42e7110）
- https://raw.githubusercontent.com/yeahhe365/WebDroid-Agent/6ef50805d0f4509d7222dd269d8e329ab95ec902/LICENSE（获取于 2026-10-18T15:43:28Z；SHA-256：e8f924156a6cc9479b17cb02a420d180f58d1532d170c30fc120c197dfcf06b6）
- https://raw.githubusercontent.com/yeahhe365/WebDroid-Agent/HEAD/LICENSE（获取于 2026-10-18T15:44:10Z；SHA-256：e8f924156a6cc9479b17cb02a420d180f58d1532d170c30fc120c197dfcf06b6）
- https://api.github.com/repos/yeahhe365/webadb-autoglm（获取于 2026-10-18T15:43:24Z；SHA-256：9fd700009d98c4d7e5713d6a37f0b52bc2cd0b6edf3373c49f3578e30027c1dd）
- https://api.github.com/repos/yeahhe365/WebDroid-Agent（获取于 2026-10-18T15:43:23Z；SHA-256：9fd700009d98c4d7e5713d6a37f0b52bc2cd0b6edf3373c49f3578e30027c1dd）
