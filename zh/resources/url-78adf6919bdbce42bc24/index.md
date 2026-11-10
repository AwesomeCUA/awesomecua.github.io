---
title: "VideoCUA · 数据集 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/url-78adf6919bdbce42bc24/
updated: 2026-10-18
type: dataset
lang: zh-CN
---

# VideoCUA

CUA-Suite 的专家桌面操作演示：涵盖 87 款应用约 10,000 项任务，提供 30 fps 屏幕录像及精确到毫秒的鼠标和键盘操作日志。

- 目录页面：https://awesomecua.com/zh/resources/url-78adf6919bdbce42bc24/
- English：https://awesomecua.com/resources/url-78adf6919bdbce42bc24/index.md
- 原始来源：https://huggingface.co/datasets/ServiceNow/VideoCUA
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：视频、录制、模仿学习、动作预测、数据生成
- 证据核查日期：2026-10-18T15:36:02Z
- ID：url:78adf6919bdbce42bc24

## 范围记录

At revision 6ecc530d raw_data/ holds one ZIP archive per application, 87 in total and about 26.1 GB. The card describes each archive as task folders with an action_log.json (instruction, platform and timestamped actions) and a 1920x1080 MP4 recording with its metadata; each action carries a groundcua_id that the card says identifies the matching annotated GroundCUA screenshot. Frame extraction into trajectories and LLM-written chain-of-thought steps come from a pipeline in the GroundCUA GitHub repository; this release holds raw recordings and logs as source material. The card names no operating system. The card's metadata declares MIT; its linked LICENSE file is absent from the repository. Task, hour and frame figures are publisher-reported.

- 完整记录 JSON：https://awesomecua.com/resources/url-78adf6919bdbce42bc24/record.json

## 结构化规格

- 格式：ZIP archives of MP4 video and JSON
- 模态：screen recordings, action logs, instructions
- 数据划分：未记录
- 监督信号：human expert task demonstrations, timestamped mouse and keyboard actions, task instructions

### 数量记录

- ≈ 10,000 个任务 — VideoCUA corpus as stated on the card（来源报告；来源：https://huggingface.co/datasets/ServiceNow/VideoCUA/raw/6ecc530df848f916bf0d195c66823ef8363abb93/README.md）
- ≈ 55 小时屏幕录像（30 fps） — VideoCUA corpus as stated on the card（来源报告；来源：https://huggingface.co/datasets/ServiceNow/VideoCUA/raw/6ecc530df848f916bf0d195c66823ef8363abb93/README.md）
- ≈ 6,000,000 帧视频画面 — VideoCUA corpus as stated on the card（来源报告；来源：https://huggingface.co/datasets/ServiceNow/VideoCUA/raw/6ecc530df848f916bf0d195c66823ef8363abb93/README.md）
- 87 个按应用划分的 ZIP 归档 — raw_data/ at revision 6ecc530d（计算得出）（来源：https://huggingface.co/api/datasets/ServiceNow/VideoCUA/tree/6ecc530df848f916bf0d195c66823ef8363abb93/raw_data）

Tasks, hours, frames and archives are different units and are counted separately. The archive count is computed from the Hub tree listing; the card also reports 87 applications. No train/test split is declared.

## 许可证信息

- 代码：未记录
- 数据：mit — https://huggingface.co/datasets/ServiceNow/VideoCUA/raw/6ecc530df848f916bf0d195c66823ef8363abb93/README.md
- 文档：未记录
- 权重：未记录

## 一手证据

- https://huggingface.co/datasets/ServiceNow/VideoCUA/raw/6ecc530df848f916bf0d195c66823ef8363abb93/README.md（获取于 2026-10-18T15:36:02Z；SHA-256：41b871f55b233cc8424ff55fa4294a66fd2f88fe1dbce9dea924fd651ae1b778）
- https://huggingface.co/api/datasets/ServiceNow/VideoCUA?expand%5B%5D=sha&expand%5B%5D=gated&expand%5B%5D=disabled&expand%5B%5D=cardData&expand%5B%5D=lastModified（获取于 2026-10-18T15:36:02Z；SHA-256：75b4545d65bfb6a101a4624859802a4384e74eba85aacbf6d3f4e395d22ae3d3）
- https://huggingface.co/api/datasets/ServiceNow/VideoCUA/tree/6ecc530df848f916bf0d195c66823ef8363abb93/raw_data（获取于 2026-10-18T15:36:02Z；SHA-256：fdc432015122390eb89b397ab7031b429ace6d56599ae37ef27a809abb05f254）
- https://huggingface.co/api/datasets/ServiceNow/VideoCUA/tree/6ecc530df848f916bf0d195c66823ef8363abb93（获取于 2026-10-18T15:36:03Z；SHA-256：32ffe76e0b63cd91c5b8f44af39630fc390e725061974acc55514d9b1232e87f）
- https://huggingface.co/datasets/ServiceNow/VideoCUA/raw/6ecc530df848f916bf0d195c66823ef8363abb93/README.md（获取于 2026-10-18T15:36:02Z；SHA-256：41b871f55b233cc8424ff55fa4294a66fd2f88fe1dbce9dea924fd651ae1b778）
