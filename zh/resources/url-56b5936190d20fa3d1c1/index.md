---
title: "Mind2Web bbox eval (MultiUI) · 数据集 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/url-56b5936190d20fa3d1c1/
updated: 2026-10-18
type: dataset
lang: zh-CN
---

# Mind2Web bbox eval (MultiUI)

Mind2Web 步骤经 MultiUI 作者重新打包为 JPEG 截图及逐步 JSONL 查询和候选元素框，用于 MultiUI 基于截图的 Mind2Web 操作评估。

- 目录页面：https://awesomecua.com/zh/resources/url-56b5936190d20fa3d1c1/
- English：https://awesomecua.com/resources/url-56b5936190d20fa3d1c1/index.md
- 原始来源：https://huggingface.co/datasets/neulab/Mind2Web_bbox_eval
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、动作预测、评测
- 证据核查日期：2026-10-18T16:03:54Z
- ID：url:56b5936190d20fa3d1c1

## 范围记录

The Hub API at revision b089ea88 lists two ZIP archives (about 6.25 GB and 14.4 GB) beside a card that declares ODC-By; the repository is publicly accessible. The card only names this the Mind2Web evaluation set for the MultiUI paper. The MultiUI README calls it its processed Mind2Web evaluation dataset, places it under its Mind2Web-SeeAct offline-experiment directory and runs eval_m2w.py on test_task, test_website or test_domain. Archive contents were read from their ZIP central directories and one sample query: each step folder, named by Mind2Web annotation and action IDs, holds a queries.jsonl with the task, previous actions, target operation and positive and negative candidate elements with bounding boxes, plus JPEG images. The archive named for ground-truth crops also has a train split; the paper's Appendix H says screenshots are randomly cropped around the target element. Mind2Web's own data terms are not resolved here; ODC-By is the card declaration.

- 完整记录 JSON：https://awesomecua.com/resources/url-56b5936190d20fa3d1c1/record.json

## 结构化规格

- 格式：ZIP archives, JSONL, JPEG
- 模态：screenshots, task instructions, previous actions, target operations, candidate elements with bounding boxes
- 数据划分：train, test_task, test_website, test_domain
- 监督信号：next-action prediction on Mind2Web steps, candidate-element bounding boxes

### 数量记录

未记录数量。

Counts were taken with a script from the archives' ZIP central directories at revision b089ea88 and have no retained receipt, so they are kept here rather than as count observations. bbox_generate_gt_crop_offline_data_-1choices.zip: 16,715 step folders with one JPEG each (train 7,357; test_task 2,093; test_website 1,370; test_domain 5,895). offline_data_-1choices.zip: 9,364 step folders with 27,967 JPEGs, test splits only (test_task 2,093; test_website 1,373; test_domain 5,898). Step folders and tasks are different units; distinct annotation IDs per split are train 1,009, test_task 252, test_website 177 and test_domain 912, with the same test counts in both archives.

## 许可证信息

- 代码：未记录
- 数据：odc-by — https://huggingface.co/datasets/neulab/Mind2Web_bbox_eval/raw/b089ea88cd2cabc44c10d62f7e99a896a4aeaf2d/README.md
- 文档：未记录
- 权重：未记录

## 一手证据

- https://huggingface.co/datasets/neulab/Mind2Web_bbox_eval/raw/b089ea88cd2cabc44c10d62f7e99a896a4aeaf2d/README.md（获取于 2026-10-18T16:03:54Z；SHA-256：ef5fe8c440d4670845bb315570bff678673ea2fa3953871fb60f0e82c67df970）
- https://huggingface.co/api/datasets/neulab/Mind2Web_bbox_eval/revision/b089ea88cd2cabc44c10d62f7e99a896a4aeaf2d（获取于 2026-10-18T16:02:59Z；SHA-256：e662d712439d9cfc547fc2b1834051c194eff072e3947281a3588281662f49ab）
- https://huggingface.co/api/datasets/neulab/Mind2Web_bbox_eval/tree/b089ea88cd2cabc44c10d62f7e99a896a4aeaf2d（获取于 2026-10-18T16:02:59Z；SHA-256：b623f067568ec9fa36b4caed1b7de98a01d0d4197945ce42de078d32be508698）
- https://raw.githubusercontent.com/neulab/MultiUI/e261d8ad3d329a8b6e719cfd4f6a6d8e6df3cede/README.md（获取于 2026-10-18T16:02:59Z；SHA-256：fe0c03fe73529a29788d559103c4aed48dca6ed9ba3bfd5f151f902fa8858b38）
- https://arxiv.org/html/2410.13824v3（获取于 2026-10-18T16:03:00Z；SHA-256：383ada0c47d09acea6b865ed67571c9540b2d602bd6b0ea8ad3130121efd190c）
- https://huggingface.co/datasets/neulab/Mind2Web_bbox_eval/raw/b089ea88cd2cabc44c10d62f7e99a896a4aeaf2d/README.md（获取于 2026-10-18T16:03:54Z；SHA-256：ef5fe8c440d4670845bb315570bff678673ea2fa3953871fb60f0e82c67df970）
