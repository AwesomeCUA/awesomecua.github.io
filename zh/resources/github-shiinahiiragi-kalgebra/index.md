---
title: "kalgebra-kai · 基础设施 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/github-shiinahiiragi-kalgebra/
updated: 2026-10-18
type: infrastructure
lang: zh-CN
---

# kalgebra-kai

ScienceBoard 改造的 KAlgebra 版本，内置本地 HTTP 服务器，可报告变量与已绘制的 2D、3D 函数，也可切换标签页或添加计算和绘图，供基准检查数学任务。

- 目录页面：https://awesomecua.com/zh/resources/github-shiinahiiragi-kalgebra/
- English：https://awesomecua.com/resources/github-shiinahiiragi-kalgebra/index.md
- 原始来源：https://github.com/ShiinaHiiragi/kalgebra
- 类型：基础设施
- 审核状态：已审核
- 范围：相关研究
- 运行环境：桌面、Linux
- 主题：科学工作流、评测、状态追踪
- 证据核查日期：2026-10-18T12:15:00Z
- ID：github:shiinahiiragi/kalgebra

## 范围记录

GitHub reports this repository as a fork of KDE/kalgebra. The ScienceBoard README lists it among its modified applications as "a recompilation copy of KAlgebra". The Debian control file at commit e3f962b names the package kalgebra-kai (version 1.1) and describes it as a modified KAlgebra that supports a local server. main.cpp starts that server on the port given as the first argument (default 8000) with /version, /vars, /func/2d and /func/3d status routes and /tab, /add/calc, /add/2d and /add/3d operation routes. manual.md holds the maintainer's Qt 6.5 build and .deb packaging steps. Everything except the server additions is upstream KAlgebra code.

- 完整记录 JSON：https://awesomecua.com/resources/github-shiinahiiragi-kalgebra/record.json

## 许可证信息

- 代码：GPL-2.0 — https://raw.githubusercontent.com/ShiinaHiiragi/kalgebra/HEAD/COPYING
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/ShiinaHiiragi/kalgebra/HEAD/manual.md（获取于 2026-10-18T12:15:00Z；SHA-256：839185dfc18e63fefccf598d1b4a6c34f7cdc5590887e76bdcf76220b861c23f）
- https://raw.githubusercontent.com/OS-Copilot/ScienceBoard/21b5eb0f1d00898f7de9e84c3d33a87c2f2b3c3e/README.md（获取于 2026-10-18T12:10:16Z；SHA-256：4c3fe93aa740dbf4a279a246ddd836f2590a2a36f39b820abe166e38cb484577）
- https://api.github.com/repos/ShiinaHiiragi/kalgebra/git/trees/e3f962b95447d3b76244edbc2048a8c98e2022b7?recursive=1（获取于 2026-10-18T12:14:42Z；SHA-256：908d20a13d858d218e8a32ddd18ec62427a94d2f835af76bdf95cf280d673213）
- https://raw.githubusercontent.com/ShiinaHiiragi/kalgebra/e3f962b95447d3b76244edbc2048a8c98e2022b7/src/control（获取于 2026-10-18T12:14:45Z；SHA-256：c5d41b60d9578a98c3bcd3d53bb9786bc02fd35b35c2a10c569fb8cdcdcd7622）
- https://raw.githubusercontent.com/ShiinaHiiragi/kalgebra/e3f962b95447d3b76244edbc2048a8c98e2022b7/src/main.cpp（获取于 2026-10-18T12:14:45Z；SHA-256：701ca41ac449ab2f88a06f7812ce382e88ea814037c99ddc82ad78e3ba03985a）
- https://raw.githubusercontent.com/ShiinaHiiragi/kalgebra/HEAD/COPYING（获取于 2026-10-18T12:15:13Z；SHA-256：8177f97513213526df2cf6184d8ff986c675afb514d4e68a404010521b880643）
