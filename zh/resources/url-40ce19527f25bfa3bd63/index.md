---
title: "GUI-World data · 数据集 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/url-40ce19527f25bfa3bd63/
updated: 2026-10-18
type: dataset
lang: zh-CN
---

# GUI-World data

GUI-World 的 Hub 发布版，收录 Android、iOS、网站、软件、多应用和 XR 六类场景的 GUI 录屏视频，以及面向 GUI 视频问答的训练与基准标注 JSONL。

- 目录页面：https://awesomecua.com/zh/resources/url-40ce19527f25bfa3bd63/
- English：https://awesomecua.com/resources/url-40ce19527f25bfa3bd63/index.md
- 原始来源：https://huggingface.co/datasets/ONE-Lab/GUI-World
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、Android、iOS、网页
- 主题：视频、界面理解、评测
- 证据核查日期：2026-10-18T11:41:24Z
- ID：url:40ce19527f25bfa3bd63

## 范围记录

This is the Hub data release; the repository record github:dongping-chen/gui-world covers the evaluation and GUI-Vid code and case studies, and its README calls this dataset the canonical train and test release. The Hub API at revision 7901fa3f reports an ungated repository with 12 annotation JSONL files (benchmark and train for each scenario) and 12,379 MP4 or MOV video files in per-scenario folders. The card has no license metadata field; its License section states CC BY 4.0. The GUI-Vid checkpoint is a separate Hub model.

- 完整记录 JSON：https://awesomecua.com/resources/url-40ce19527f25bfa3bd63/record.json

## 结构化规格

- 格式：MP4 and MOV video files, JSONL annotations
- 模态：screen-recording videos, text annotations
- 数据划分：train, benchmark
- 监督信号：GUI-oriented question-answer annotations

### 数量记录

- 12,379 个视频文件 — MP4 and MOV files in the Hub manifest at revision 7901fa3f（计算得出）（来源：https://huggingface.co/api/datasets/ONE-Lab/GUI-World）
- 12 个标注文件 — JSONL files under Annotation/benchmark and Annotation/train at revision 7901fa3f（计算得出）（来源：https://huggingface.co/api/datasets/ONE-Lab/GUI-World）
- 6 个 GUI 场景类别 — dataset taxonomy（来源报告；来源：https://huggingface.co/datasets/ONE-Lab/GUI-World/raw/7901fa3f0b9e36afa87d24ff9ecd48037c7fd6a0/README.md）
- 8 种问题类型 — dataset taxonomy（来源报告；来源：https://huggingface.co/datasets/ONE-Lab/GUI-World/raw/7901fa3f0b9e36afa87d24ff9ecd48037c7fd6a0/README.md）

Video files were counted from the Hub file manifest; video, question and annotation counts use different units.

## 许可证信息

- 代码：未记录
- 数据：CC-BY-4.0 — https://huggingface.co/datasets/ONE-Lab/GUI-World/raw/7901fa3f0b9e36afa87d24ff9ecd48037c7fd6a0/README.md
- 文档：未记录
- 权重：未记录

- 数据审核：The card states that the work is licensed under CC BY 4.0. The declaration is recorded in prose because enrich only extracts card metadata.
  来源：https://huggingface.co/datasets/ONE-Lab/GUI-World/raw/7901fa3f0b9e36afa87d24ff9ecd48037c7fd6a0/README.md

## 一手证据

- https://huggingface.co/datasets/ONE-Lab/GUI-World/raw/7901fa3f0b9e36afa87d24ff9ecd48037c7fd6a0/README.md（获取于 2026-10-18T11:41:24Z；SHA-256：d2dd5886bce90f6eaee880719c79a6ede6ec0eaa08da32d7610bde656b8dc9ed）
- https://huggingface.co/api/datasets/ONE-Lab/GUI-World（获取于 2026-10-18T11:41:24Z；SHA-256：dfb9a575c567a2fe97640cd1f1f73c8fa6ba970c392f335791f1ed857f504a89）
- https://raw.githubusercontent.com/Dongping-Chen/GUI-World/master/Readme.md（获取于 2026-10-18T11:41:24Z；SHA-256：905bf69ce80c866377841474cefe08f85ec4ef552cdd9ffeb2fb1531e07370b6）
