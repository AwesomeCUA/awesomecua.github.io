---
title: "OSWorld Windows VM images · 基础设施 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/url-232a1698849e2fea425c/
updated: 2026-10-18
type: infrastructure
lang: zh-CN
---

# OSWorld Windows VM images

托管 OSWorld 预构建的 Windows 10 虚拟机：含 VMware 和 QEMU qcow2 归档，供 OSWorld 的 VMware 和 Docker 提供程序首次运行 Windows 任务时下载。

- 目录页面：https://awesomecua.com/zh/resources/url-232a1698849e2fea425c/
- English：https://awesomecua.com/resources/url-232a1698849e2fea425c/index.md
- 原始来源：https://huggingface.co/datasets/xlangai/windows_osworld
- 类型：基础设施
- 审核状态：已审核
- 范围：相关研究
- 运行环境：桌面、Windows
- 主题：沙箱、评测
- 证据核查日期：2026-10-18T15:35:23Z
- ID：url:232a1698849e2fea425c

## 范围记录

Adjacent: environment images that the curated OSWorld benchmark boots for its Windows tasks; this asset is an image release. At revision 6afc3324 the manifest holds Windows-x86.zip (about 26.2 GB) and Windows-10-x64.qcow2.zip (about 27.7 GB), plus two unpacked qcow2 images, Windows 10 x64.qcow2 and Windows 10 x64 - copy.qcow2 (about 49.2 GB each), left undescribed by the card. At OSWorld commit b138d348 the VMware provider downloads Windows-x86.zip for Windows tasks on x86 hosts and the Docker provider downloads Windows-10-x64.qcow2.zip; the VirtualBox provider supports only Ubuntu. The card is a generic OSWorld card: its mention of task examples in evaluation_examples.zip and of VirtualBox and arm64 snapshots does not match this manifest. Apache-2.0 is the card's metadata declaration and does not relicense Windows or bundled applications.

- 完整记录 JSON：https://awesomecua.com/resources/url-232a1698849e2fea425c/record.json

## 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/xlangai/windows_osworld/raw/6afc332468ea0646441e3901a06d8eb7ef7d831a/README.md
- 文档：未记录
- 权重：未记录

## 一手证据

- https://huggingface.co/datasets/xlangai/windows_osworld/raw/6afc332468ea0646441e3901a06d8eb7ef7d831a/README.md（获取于 2026-10-18T15:35:23Z；SHA-256：0fa1943315f1acba9100333ebbae47d45ca7847fe37d8be60e79cb4d116b40d3）
- https://huggingface.co/api/datasets/xlangai/windows_osworld（获取于 2026-10-18T15:35:24Z；SHA-256：88dce09ec83b718ffc52f94d6986ed3201feb3f664a7c4695badd39fda1da330）
- https://huggingface.co/api/datasets/xlangai/windows_osworld/tree/6afc332468ea0646441e3901a06d8eb7ef7d831a（获取于 2026-10-18T15:35:24Z；SHA-256：50730e58abc4cac896d0fc3ec52adea3a5a3e8bcb5ebb2ad6fce9e0f3cc75c10）
- https://raw.githubusercontent.com/xlang-ai/OSWorld/b138d348256078fa634fc3b73567a7337c793e6b/desktop_env/providers/vmware/manager.py（获取于 2026-10-18T15:35:24Z；SHA-256：ada6bed8d1923969833b2835b832df825d8c7be092648cee98c0a7eefc447f9a）
- https://raw.githubusercontent.com/xlang-ai/OSWorld/b138d348256078fa634fc3b73567a7337c793e6b/desktop_env/providers/docker/manager.py（获取于 2026-10-18T15:35:25Z；SHA-256：3580c99cdefd711bf7d1093aeb2719e58ddad387358ff7938eb0700d3c5d03fa）
- https://raw.githubusercontent.com/xlang-ai/OSWorld/b138d348256078fa634fc3b73567a7337c793e6b/desktop_env/providers/virtualbox/manager.py（获取于 2026-10-18T15:35:58Z；SHA-256：2c355dd1192f616492db66606235ad85c289d4803ecde02bcff5fafad553724c）
- https://huggingface.co/datasets/xlangai/windows_osworld/raw/6afc332468ea0646441e3901a06d8eb7ef7d831a/README.md（获取于 2026-10-18T15:35:23Z；SHA-256：0fa1943315f1acba9100333ebbae47d45ca7847fe37d8be60e79cb4d116b40d3）
