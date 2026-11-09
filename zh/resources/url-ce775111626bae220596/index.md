# OSWorld VirtualBox Ubuntu image

托管 OSWorld 的 Ubuntu 虚拟机归档，供其 VirtualBox 提供程序在 x86 主机上下载并通过 VBoxManage 导入；仓库没有数据卡或许可声明。

- 目录页面：https://awesomecua.com/zh/resources/url-ce775111626bae220596/
- English：https://awesomecua.com/resources/url-ce775111626bae220596/index.md
- 原始来源：https://huggingface.co/datasets/xlangai/ubuntu_x86_virtualbox
- 类型：基础设施
- 审核状态：已审核
- 范围：相关研究
- 运行环境：桌面、Linux
- 主题：沙箱、评测
- 证据核查日期：2026-10-18T15:37:25Z
- ID：url:ce775111626bae220596

## 范围记录

Adjacent: an environment image that the curated OSWorld benchmark boots when run with VirtualBox; this asset is an image release. At revision c4e80049 the repository holds only Ubuntu.zip (12,395,902,743 bytes) and .gitattributes; there is no dataset card, so it names no paper and declares no license, and every license slot stays unknown. At OSWorld commit b138d348 the VirtualBox provider downloads this archive on x86 hosts, extracts it and imports Ubuntu/Ubuntu.ovf from the extracted files with VBoxManage, supports only Ubuntu tasks, and refuses macOS hosts. The name is editorial, taken from that provider.

- 完整记录 JSON：https://awesomecua.com/resources/url-ce775111626bae220596/record.json

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/xlang-ai/OSWorld/b138d348256078fa634fc3b73567a7337c793e6b/desktop_env/providers/virtualbox/manager.py（获取于 2026-10-18T15:37:25Z；SHA-256：2c355dd1192f616492db66606235ad85c289d4803ecde02bcff5fafad553724c）
- https://huggingface.co/api/datasets/xlangai/ubuntu_x86_virtualbox（获取于 2026-10-18T15:37:25Z；SHA-256：644415a48604c773f9c8609b3aadca548d249a9ff125abb28f89da5fd0a5efad）
- https://huggingface.co/api/datasets/xlangai/ubuntu_x86_virtualbox/tree/c4e8004908e84c58e2d7e9d799121486803ca2ac（获取于 2026-10-18T15:37:25Z；SHA-256：34e5ac9fcc430391b8550f22bcb9185b6fd8febbb6c573351c6310d25ee7386c）
