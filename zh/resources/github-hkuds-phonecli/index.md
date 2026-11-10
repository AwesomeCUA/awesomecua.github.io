---
title: "PhoneCLI · 框架 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/github-hkuds-phonecli/
updated: 2026-10-18
type: framework
lang: zh-CN
---

# PhoneCLI

移动智能体框架将应用爬取为 YAML 屏幕地图，通过 iOS 上的 WebDriverAgent 或 Android 上的 ADB 重放编译后的导航命令，并在遇到未知屏幕时回退至 VLM。

- 目录页面：https://awesomecua.com/zh/resources/github-hkuds-phonecli/
- English：https://awesomecua.com/resources/github-hkuds-phonecli/index.md
- 原始来源：https://github.com/HKUDS/PhoneCLI
- 类型：框架
- 审核状态：已审核
- 范围：核心
- 运行环境：iOS、Android
- 主题：手机操作、效率、工作流
- 证据核查日期：2026-10-18T11:56:14Z
- ID：github:hkuds/phonecli

## 范围记录

Formerly published as HKUDS/OpenPhone; that address now resolves to this repository. phonecli/ is the iOS harness (WebDriverAgent) with prebuilt app maps, and phonecli_android/ runs the AndroidLab suite with compiled maps and a pure-VLM baseline. The repository also holds OpenPhone-3B training and synthetic-data pipelines and vLLM serving scripts; the weights and dataset are separate Hugging Face releases outside this repository record. Its evaluation replaces AndroidLab's rule-based checks with an LLM judge. The LICENSE names AndroidLab's author as a copyright holder.

- 完整记录 JSON：https://awesomecua.com/resources/github-hkuds-phonecli/record.json

## 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/HKUDS/PhoneCLI/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/HKUDS/PhoneCLI/HEAD/README.md（获取于 2026-10-18T11:56:14Z；SHA-256：58366c59652c9f03af0b31b094672b10992a82cd0cc63cd2e5884a41f3d8be3c）
- https://raw.githubusercontent.com/HKUDS/PhoneCLI/5adabd19fb56a4849f018f1d516d44d2ce39f3d7/phonecli/README.md（获取于 2026-10-18T11:55:50Z；SHA-256：921f8d53f52ce87cfc18f26391f4265cfe6ffc57cba8ecbd57702d7eb5a50737）
- https://raw.githubusercontent.com/HKUDS/PhoneCLI/5adabd19fb56a4849f018f1d516d44d2ce39f3d7/phonecli_android/README.md（获取于 2026-10-18T11:55:50Z；SHA-256：e6e30de3c3011fff356386bcfda3dd17c4de65d959a5ed5c3d30223e11e2fdcc）
- https://raw.githubusercontent.com/HKUDS/PhoneCLI/5adabd19fb56a4849f018f1d516d44d2ce39f3d7/LICENSE（获取于 2026-10-18T11:55:51Z；SHA-256：b8874bd1ffe72567d69a3f9fd5c8490694e2904cc3e7a9b07673bd58730be278）
- https://raw.githubusercontent.com/HKUDS/PhoneCLI/HEAD/LICENSE（获取于 2026-10-18T11:56:35Z；SHA-256：b8874bd1ffe72567d69a3f9fd5c8490694e2904cc3e7a9b07673bd58730be278）
- https://api.github.com/repos/HKUDS/OpenPhone（获取于 2026-10-18T11:55:36Z；SHA-256：7a27d023f3576d7c12cdbe428f920469539fde6419cfcbe52a0cb1e9ba8e89a7）
- https://api.github.com/repos/HKUDS/PhoneCLI（获取于 2026-10-18T11:55:37Z；SHA-256：7a27d023f3576d7c12cdbe428f920469539fde6419cfcbe52a0cb1e9ba8e89a7）
