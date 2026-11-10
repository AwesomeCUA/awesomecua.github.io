---
title: "UGround V1 Data · 数据集 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/url-c4898ad1bfc049926a63/
updated: 2026-10-16
type: dataset
lang: zh-CN
---

# UGround V1 Data

UGround 的受限访问网页定位训练数据，分为 Web-Hybrid 和 Web-Direct 子集；边界框版本的坐标归一化至 0-999。

- 目录页面：https://awesomecua.com/zh/resources/url-c4898ad1bfc049926a63/
- English：https://awesomecua.com/resources/url-c4898ad1bfc049926a63/index.md
- 原始来源：https://huggingface.co/datasets/osunlp/UGround-V1-Data
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：GUI 定位、数据生成
- 证据核查日期：2026-10-16T06:38:26Z
- ID：url:c4898ad1bfc049926a63

- 完整记录 JSON：https://awesomecua.com/resources/url-c4898ad1bfc049926a63/record.json

## 结构化规格

- 格式：Parquet shards
- 模态：GUI screenshots, natural-language grounding descriptions
- 数据划分：未记录
- 监督信号：GUI visual-grounding training for the UGround-V1 family

### 数量记录

未记录数量。

Public API revision 33325877 lists Parquet assets but gated=auto; the pinned raw card returned HTTP 401 and no access was requested. Official README identifies this as V1 training data; the API excerpt also announces a Web-Hybrid bounding-box variant with coordinates normalized to [0,999]. The public API excerpt documents a Web-Hybrid bounding-box variant; shard schemas and a release-wide point/bbox count remain unspecified. No train/test partition, example total, or unrestricted downloadability is claimed. Preserve the recorded CC-BY-NC-SA-4.0 data declaration separately from model/code terms.

## 许可证信息

- 代码：未记录
- 数据：cc-by-nc-sa-4.0 — https://huggingface.co/datasets/osunlp/UGround-V1-Data
- 文档：未记录
- 权重：未记录

## 一手证据

- https://huggingface.co/api/datasets/osunlp/UGround-V1-Data（获取于 2026-10-16T06:38:26Z；SHA-256：0342862bd7857dd21e389ee5d351375dfea722cad4725c8e33271efc93e009f6）
- https://raw.githubusercontent.com/OSU-NLP-Group/UGround/HEAD/README.md（获取于 2026-10-16T06:36:00Z；SHA-256：72ca3f23114c3a08fefb724573acf10c9f0a1b3d4a50d811c98356264ecf6ffc）
- https://huggingface.co/api/datasets/osunlp/UGround-V1-Data（获取于 2026-10-16T06:38:26Z；SHA-256：0342862bd7857dd21e389ee5d351375dfea722cad4725c8e33271efc93e009f6）
