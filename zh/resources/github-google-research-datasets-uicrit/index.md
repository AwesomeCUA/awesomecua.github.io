---
title: "UICrit · 数据集 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/github-google-research-datasets-uicrit/
updated: 2026-10-17
type: dataset
lang: zh-CN
---

# UICrit

包含区域坐标和 RICO 屏幕引用的移动端界面评语及质量评分，并提供一个由 3 名标注者参与、规模大于原论文数据集的版本。

- 目录页面：https://awesomecua.com/zh/resources/github-google-research-datasets-uicrit/
- English：https://awesomecua.com/resources/github-google-research-datasets-uicrit/index.md
- 原始来源：https://github.com/google-research-datasets/uicrit
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：界面理解、界面设计、评测
- 证据核查日期：2026-10-17T02:02:45Z
- ID：github:google-research-datasets/uicrit

## 范围记录

The published CSV contains critique text, normalized boxes, ratings and RICO IDs; screenshots are referenced through RICO. The README explicitly licenses the work CC-BY-4.0. Its current 1,000-screen, 11,344-critique release differs from the original paper population. The README cites an ACM DOI. Its README establishes mobile interfaces without naming an operating system.

- 完整记录 JSON：https://awesomecua.com/resources/github-google-research-datasets-uicrit/record.json

## 结构化规格

- 格式：CSV
- 模态：text, bounding boxes, quality ratings
- 数据划分：未记录
- 监督信号：design critique, region localization, quality rating

### 数量记录

- 1,000 个移动端 UI 界面 — current three-annotator release（来源报告；来源：https://raw.githubusercontent.com/google-research-datasets/uicrit/HEAD/README.md）
- 11,344 条设计评论 — current three-annotator release（来源报告；来源：https://raw.githubusercontent.com/google-research-datasets/uicrit/HEAD/README.md）

Publisher-reported current release, separate from the smaller original-paper population. Screenshot pixels are obtained through referenced RICO IDs.

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/google-research-datasets/uicrit/HEAD/README.md（获取于 2026-10-17T02:02:45Z；SHA-256：345ff7003120f146016741099dd57b9b1a9ffc54ce1fc90f4d16d61e31d379e6）
- https://api.github.com/repos/google-research-datasets/uicrit（获取于 2026-10-17T02:02:45Z；SHA-256：5579bbbc622a2f9fa1f77b509c1ece17af023b8c14b53aa48dcc41288a5852f2）
- https://api.github.com/repos/google-research-datasets/uicrit/contents（获取于 2026-10-17T02:02:45Z；SHA-256：8e790a53de8c40aa14f9e49aebf42b077e6a172a6841f38c7c6851af57b0617a）
