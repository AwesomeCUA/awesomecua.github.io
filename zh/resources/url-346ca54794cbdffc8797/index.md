---
title: "OSWorld Ubuntu VM images · 基础设施 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/url-346ca54794cbdffc8797/
updated: 2026-10-18
type: infrastructure
lang: zh-CN
---

# OSWorld Ubuntu VM images

托管 OSWorld 预构建的 Ubuntu 虚拟机：含 x86 和 arm64 版 VMware 归档及 QEMU qcow2 归档，供 OSWorld 的 VMware 和 Docker 提供程序首次运行时下载。

- 目录页面：https://awesomecua.com/zh/resources/url-346ca54794cbdffc8797/
- English：https://awesomecua.com/resources/url-346ca54794cbdffc8797/index.md
- 原始来源：https://huggingface.co/datasets/xlangai/ubuntu_osworld
- 类型：基础设施
- 审核状态：已审核
- 范围：相关研究
- 运行环境：桌面、Linux
- 主题：沙箱、评测
- 证据核查日期：2026-10-18T12:18:42Z
- ID：url:346ca54794cbdffc8797

## 范围记录

Adjacent: environment images that the curated OSWorld benchmark boots; this asset is an image release. At revision a5d9c3ea the manifest holds Ubuntu-x86.zip, Ubuntu-arm.zip and Ubuntu.qcow2.zip (about 12 GB each), two further qcow2 images (Ubuntu_claude.qcow2 and Ubuntu_claude2.qcow2, about 23.7 GB each) left undescribed by the card, and aliyun_config.sh. OSWorld's VMware provider picks the x86 or arm64 archive by host architecture, and its Docker provider fetches Ubuntu.qcow2.zip. The card also mentions task examples in evaluation_examples.zip, which the manifest does not contain. Apache-2.0 is the card's metadata declaration and does not relicense Ubuntu or bundled applications.

- 完整记录 JSON：https://awesomecua.com/resources/url-346ca54794cbdffc8797/record.json

## 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/xlangai/ubuntu_osworld/raw/a5d9c3eaae98eebf6e3a0beb84e7e47cf72ae133/README.md
- 文档：未记录
- 权重：未记录

## 一手证据

- https://huggingface.co/datasets/xlangai/ubuntu_osworld/raw/a5d9c3eaae98eebf6e3a0beb84e7e47cf72ae133/README.md（获取于 2026-10-18T12:18:42Z；SHA-256：0fa1943315f1acba9100333ebbae47d45ca7847fe37d8be60e79cb4d116b40d3）
- https://huggingface.co/api/datasets/xlangai/ubuntu_osworld（获取于 2026-10-18T12:18:42Z；SHA-256：9dbfc4c8700370f5f1246007c7b7f2090e25e1c3ab310947e44cb641f2dd8c42）
- https://huggingface.co/api/datasets/xlangai/ubuntu_osworld/tree/a5d9c3eaae98eebf6e3a0beb84e7e47cf72ae133（获取于 2026-10-18T12:18:42Z；SHA-256：733d3b45084e5cec853a4cb6313ab3d7ce93982606be1f6c61ef724de11f4981）
- https://raw.githubusercontent.com/xlang-ai/OSWorld/b138d348256078fa634fc3b73567a7337c793e6b/desktop_env/providers/vmware/manager.py（获取于 2026-10-18T12:18:43Z；SHA-256：ada6bed8d1923969833b2835b832df825d8c7be092648cee98c0a7eefc447f9a）
- https://raw.githubusercontent.com/xlang-ai/OSWorld/b138d348256078fa634fc3b73567a7337c793e6b/desktop_env/providers/docker/manager.py（获取于 2026-10-18T12:18:43Z；SHA-256：3580c99cdefd711bf7d1093aeb2719e58ddad387358ff7938eb0700d3c5d03fa）
- https://huggingface.co/datasets/xlangai/ubuntu_osworld/raw/a5d9c3eaae98eebf6e3a0beb84e7e47cf72ae133/README.md（获取于 2026-10-18T12:18:42Z；SHA-256：0fa1943315f1acba9100333ebbae47d45ca7847fe37d8be60e79cb4d116b40d3）
