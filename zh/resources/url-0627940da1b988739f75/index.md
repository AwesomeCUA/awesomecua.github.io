---
title: "GUI-Net-Mini · 数据集 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/url-0627940da1b988739f75/
updated: 2026-10-18
type: dataset
lang: zh-CN
---

# GUI-Net-Mini

TongUI 训练混合数据：约 143K 条来自 WikiHow、Baidu Experience 和 GUI 视频的样本，加上重新处理的 AITW、AMEX、GUIAct、Mind2Web、MiniWoB 和 ShowUI 数据，以带截图的定位和导航 JSON 提供。

- 目录页面：https://awesomecua.com/zh/resources/url-0627940da1b988739f75/
- English：https://awesomecua.com/resources/url-0627940da1b988739f75/index.md
- 原始来源：https://huggingface.co/datasets/Bofeee5675/GUI-Net-Mini
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android、网页、桌面
- 主题：数据生成、GUI 定位、模仿学习
- 证据核查日期：2026-10-18T15:46:31Z
- ID：url:0627940da1b988739f75

## 范围记录

The card is titled TongUI-143K. The TongUI training docs list this repository beside GUI-Net-1M as 143k TongUI-collected samples plus about 240k from previous work, used for scaling experiments, and their default 3B configuration, which they say reproduces the paper's results, names 13 datasets whose dataset_info.json files are exactly this repository's 13 annotation files. A streaming script over those files counts 143,856 records in the three TongUI-collected files (WikiHow, Baidu Experience, GUI video) and 379,517 in the ten files reprocessed from AITW, AMEX, GUIAct, Mind2Web, MiniWoB and ShowUI; the card's 237K 'Other' figure matches the 237,564 records in eight of those ten, leaving out the AMEX element and ShowUI web grounding files (141,953 records). Records are LLaMA-Factory conversations: coordinate-prediction grounding turns, or navigation steps with a thought and a JSON action in a smartphone, computer or website action space depending on the file. Screenshots come as 24 split ZIP parts (about 254 GB in the manifest). Apache-2.0 is the card's declaration; the reprocessed datasets and the tutorial and video content keep their own terms.

- 完整记录 JSON：https://awesomecua.com/resources/url-0627940da1b988739f75/record.json

## 结构化规格

- 格式：LLaMA-Factory JSON conversations, multipart ZIP image archive
- 模态：screenshots, instructions, reasoning traces, actions
- 数据划分：training collection
- 监督信号：GUI grounding coordinates, GUI navigation steps with thoughts and actions

### 数量记录

- ≈ 143,000 个训练样本 — TongUI-collected part, card table（来源报告；来源：https://huggingface.co/datasets/Bofeee5675/GUI-Net-Mini/raw/7c1ed0cd8fea76d5eba868114d2d6374d4370a12/README.md）
- ≈ 237,000 个训练样本 — data from other sources, card table（来源报告；来源：https://huggingface.co/datasets/Bofeee5675/GUI-Net-Mini/raw/7c1ed0cd8fea76d5eba868114d2d6374d4370a12/README.md）
- 13 个 JSON 标注文件 — Hub manifest at revision 7c1ed0cd（计算得出）（来源：https://huggingface.co/api/datasets/Bofeee5675/GUI-Net-Mini/revision/7c1ed0cd8fea76d5eba868114d2d6374d4370a12）
- 24 个拆分 ZIP 图像归档分卷 — Hub manifest at revision 7c1ed0cd（计算得出）（来源：https://huggingface.co/api/datasets/Bofeee5675/GUI-Net-Mini/revision/7c1ed0cd8fea76d5eba868114d2d6374d4370a12）

The card states numbers without a unit; the training docs call them training data. Record counts computed by streaming the 13 annotation files are in the record notes; the card's two figures and the file counts are different populations and units and are counted separately. No validation or test split is published.

## 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/Bofeee5675/GUI-Net-Mini/raw/7c1ed0cd8fea76d5eba868114d2d6374d4370a12/README.md
- 文档：未记录
- 权重：未记录

## 一手证据

- https://huggingface.co/datasets/Bofeee5675/GUI-Net-Mini/raw/7c1ed0cd8fea76d5eba868114d2d6374d4370a12/README.md（获取于 2026-10-18T15:46:31Z；SHA-256：5559391b26a6541363ea50de16b1c91b3958c18b2668020ccd5daff3b33e5626）
- https://huggingface.co/api/datasets/Bofeee5675/GUI-Net-Mini/revision/7c1ed0cd8fea76d5eba868114d2d6374d4370a12（获取于 2026-10-18T15:46:29Z；SHA-256：c9a580a8e25cc011273aa2f7ea10a6045f10787897c51eed50dd172ea1c3cad7）
- https://raw.githubusercontent.com/TongUI-agent/TongUI-agent/82631b583180cdc870b4774d2495dd94f1558c46/docs/train.md（获取于 2026-10-18T15:46:29Z；SHA-256：b51acb70c95d079ccbe1de0a685ad7c8a4b3b5bed11e6162e6f7c2f60d78805e）
- https://raw.githubusercontent.com/TongUI-agent/TongUI-agent/82631b583180cdc870b4774d2495dd94f1558c46/data/dataset_info.json（获取于 2026-10-18T15:46:29Z；SHA-256：1287032d17f24bf89313569bd210811675a78d0b2fce73824502d23b16f06ad4）
- https://huggingface.co/datasets/Bofeee5675/GUI-Net-Mini/raw/7c1ed0cd8fea76d5eba868114d2d6374d4370a12/README.md（获取于 2026-10-18T15:46:31Z；SHA-256：5559391b26a6541363ea50de16b1c91b3958c18b2668020ccd5daff3b33e5626）
