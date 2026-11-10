---
title: "GUI-Odyssey — original OpenGVLab release · 数据集 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/url-5f7e55313246edf727bf/
updated: 2026-10-18
type: dataset
lang: zh-CN
---

# GUI-Odyssey — original OpenGVLab release

GUI Odyssey 原始 Hub 上传版：六台模拟设备上的 7,735 段跨应用 Android 导航轨迹，含逐步截图、操作和四个数据划分文件；数据卡说明其已由新版取代。

- 目录页面：https://awesomecua.com/zh/resources/url-5f7e55313246edf727bf/
- English：https://awesomecua.com/resources/url-5f7e55313246edf727bf/index.md
- 原始来源：https://huggingface.co/datasets/OpenGVLab/GUI-Odyssey
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：手机操作、跨应用、数据生成
- 证据核查日期：2026-10-18T12:08:12Z
- ID：url:5f7e55313246edf727bf

## 范围记录

The card now asks users to switch to the newer hflqf88888/GUIOdyssey release, which reports a different episode total; this record keeps the earlier OpenGVLab upload, whose card still links the GUI-Odyssey repository and paper. Hub API at revision 71e0e7e2: open access, with all_anno.json, 7,735 annotation JSON files, four split files and screenshot folders; its sibling list stops at 100,000 entries. A paginated Hub tree listing at the same revision counted 118,791 PNG files in 100 screenshot folders; zipped copies of annotations and screenshots sit under zips/. The card declares CC-BY-4.0 for the data.

- 完整记录 JSON：https://awesomecua.com/resources/url-5f7e55313246edf727bf/record.json

## 结构化规格

- 格式：JSON annotations, PNG screenshots, zip archives
- 模态：screenshots, instructions, actions, click and scroll coordinates, device metadata
- 数据划分：random, task, device, app
- 监督信号：cross-app trajectories, action grounding

### 数量记录

- 7,735 个回合 — original OpenGVLab/GUI-Odyssey release（来源报告；来源：https://huggingface.co/datasets/OpenGVLab/GUI-Odyssey/raw/71e0e7e2d169c642e7a99c264d82ffecadf67889/README.md）
- 7,735 个标注 JSON 文件 — annotations/ at revision 71e0e7e2（计算得出）（来源：https://huggingface.co/api/datasets/OpenGVLab/GUI-Odyssey/revision/71e0e7e2d169c642e7a99c264d82ffecadf67889）

Each annotation file is one episode keyed by episode_id, with device, task (category, apps, meta-task, instruction) and per-step screenshot, action, info and ps fields; actions are CLICK, SCROLL, LONG_PRESS, TYPE, COMPLETE, IMPOSSIBLE, HOME and BACK, with coordinates normalized to 0-1000. Each split file lists train and test episode IDs.

## 许可证信息

- 代码：未记录
- 数据：cc-by-4.0 — https://huggingface.co/datasets/OpenGVLab/GUI-Odyssey/raw/71e0e7e2d169c642e7a99c264d82ffecadf67889/README.md
- 文档：未记录
- 权重：未记录

## 一手证据

- https://huggingface.co/datasets/OpenGVLab/GUI-Odyssey/raw/71e0e7e2d169c642e7a99c264d82ffecadf67889/README.md（获取于 2026-10-18T12:08:12Z；SHA-256：e881ff64f9657889838715ff44588c4963a41b7b389d527da88214626fd8159a）
- https://huggingface.co/api/datasets/OpenGVLab/GUI-Odyssey/revision/71e0e7e2d169c642e7a99c264d82ffecadf67889（获取于 2026-10-18T12:08:13Z；SHA-256：4a8355cb0fb25eb47234f7ed6eace6abf12e462768f7f9240f81577a58811c4e）
- https://huggingface.co/datasets/OpenGVLab/GUI-Odyssey/raw/71e0e7e2d169c642e7a99c264d82ffecadf67889/README.md（获取于 2026-10-18T12:08:12Z；SHA-256：e881ff64f9657889838715ff44588c4963a41b7b389d527da88214626fd8159a）
