# GTA1 cleaned grounding dataset

GTA1 仓库关联的清洗版 GUI 定位训练数据，主要来自 Aria-UI 和 OS-Atlas；目标框与 OmniParser 检测元素存在差异的样本已被剔除。

- 目录页面：https://awesomecua.com/zh/resources/url-d46306ac1d0a0cce573a/
- English：https://awesomecua.com/resources/url-d46306ac1d0a0cce573a/index.md
- 原始来源：https://huggingface.co/datasets/HelloKKMe/grounding_dataset
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、网页
- 主题：GUI 定位、数据生成
- 证据核查日期：2026-10-18T12:28:59Z
- ID：url:d46306ac1d0a0cce573a

## 范围记录

Hub revision 5c0836a5 lists the card, inp.json and ten split image archive parts (image.part.aa to image.part.aj); the repository is not gated and has no card metadata. The card describes desktop and web grounding sources and names no paper; the GTA1 repository README links this repository as GTA1's training data and cleaned dataset, which supports the paper relation. Salesforce later published a separate grounding release with a different field schema and more source datasets; this record covers only this upload. The license comes from the GTA1 README.

- 完整记录 JSON：https://awesomecua.com/resources/url-d46306ac1d0a0cce573a/record.json

## 结构化规格

- 格式：JSON (inp.json), split binary image archive
- 模态：GUI screenshots, bounding-box annotations
- 数据划分：training
- 监督信号：instruction-to-bounding-box GUI grounding, OmniParser IoU filtering of annotated boxes

### 数量记录

未记录数量。

The Hub API lists inp.json (767,769,533 bytes) and ten image archive parts (208,677,206,554 bytes in total); an example count is unrecorded. The filtering step and its OmniParser IoU criterion come from the card and the GTA1 preprocessing code; the card notes that the filter can occasionally remove correct samples and puts such cases below 3% of the data.

## 许可证信息

- 代码：未记录
- 数据：CC-BY-NC-SA-4.0 — https://raw.githubusercontent.com/Yan98/GTA1/81f0c4c2997cf6ad696d42f47c5480f4c856b73a/README.md
- 文档：未记录
- 权重：未记录

- 数据审核：The GTA1 repository README, which links this Hub repository as GTA1's training and cleaned dataset, states under License that the dataset follows CC BY-NC-SA 4.0 for non-commercial use only. The Hub card declares no license; upstream source images keep their own terms.
  来源：https://raw.githubusercontent.com/Yan98/GTA1/81f0c4c2997cf6ad696d42f47c5480f4c856b73a/README.md

## 一手证据

- https://huggingface.co/datasets/HelloKKMe/grounding_dataset/raw/5c0836a55b4000d8dbf431bbe10c80d2f0d42fb1/README.md（获取于 2026-10-18T12:28:59Z；SHA-256：cae816e6d5696a1122f836235b70a326a7d66a389d078cc48588cf20bd64a518）
- https://huggingface.co/api/datasets/HelloKKMe/grounding_dataset/revision/5c0836a55b4000d8dbf431bbe10c80d2f0d42fb1（获取于 2026-10-18T12:27:44Z；SHA-256：74797aa594a98347ac080d446950094ac34076c749e39a6c99ab1a2751896c7f）
- https://raw.githubusercontent.com/Yan98/GTA1/81f0c4c2997cf6ad696d42f47c5480f4c856b73a/README.md（获取于 2026-10-18T12:27:44Z；SHA-256：16c633cc2e6e457a37f33b410a93c639edf7b55bb2b590e08f20734da7564951）
