---
title: "Mind2Web data · 数据集 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/url-380a6eedcb4de7778e88/
updated: 2026-10-18
type: dataset
lang: zh-CN
---

# Mind2Web data

Mind2Web 众包网页任务演示的 Hub 发布版：训练集 JSON 包含原始与清洗后的 HTML、候选元素和 CLICK/TYPE/SELECT 步骤，另有受密码保护的三个测试集归档。

- 目录页面：https://awesomecua.com/zh/resources/url-380a6eedcb4de7778e88/
- English：https://awesomecua.com/resources/url-380a6eedcb4de7778e88/index.md
- 原始来源：https://huggingface.co/datasets/osunlp/Mind2Web
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、动作预测、数据生成
- 证据核查日期：2026-10-18T11:38:06Z
- ID：url:380a6eedcb4de7778e88

## 范围记录

This is the Hub data release, distinct from the code and benchmark repository github:osu-nlp-group/mind2web. The Hub API at revision 17ece8eb reports an ungated repository holding 11 train JSON shards, test.zip and scores_all_data.pkl. The card declares CC BY 4.0 for the data; the code repository's MIT license is not applied to it. Multimodal-Mind2Web (paired screenshots) and the raw trace dump are separate releases outside this record.

- 完整记录 JSON：https://awesomecua.com/resources/url-380a6eedcb4de7778e88/record.json

## 结构化规格

- 格式：JSON, password-protected ZIP (test splits)
- 模态：task descriptions, raw HTML, cleaned HTML, candidate elements, actions
- 数据划分：train, test_task, test_website, test_domain
- 监督信号：crowdsourced action sequences, ground-truth target elements

### 数量记录

- > 2,000 个任务 — full Mind2Web collection（来源报告；来源：https://huggingface.co/datasets/osunlp/Mind2Web/raw/17ece8eb89862368edc0cc806acee6fca5163474/README.md）
- 137 个网站 — full Mind2Web collection（来源报告；来源：https://huggingface.co/datasets/osunlp/Mind2Web/raw/17ece8eb89862368edc0cc806acee6fca5163474/README.md）
- 31 个领域 — full Mind2Web collection（来源报告；来源：https://huggingface.co/datasets/osunlp/Mind2Web/raw/17ece8eb89862368edc0cc806acee6fca5163474/README.md）
- 1,009 个任务实例 — train split（来源报告；来源：https://huggingface.co/datasets/osunlp/Mind2Web/raw/17ece8eb89862368edc0cc806acee6fca5163474/README.md）
- 252 个任务实例 — cross-task test split (test_task)（来源报告；来源：https://huggingface.co/datasets/osunlp/Mind2Web/raw/17ece8eb89862368edc0cc806acee6fca5163474/README.md）
- 177 个任务实例 — cross-website test split (test_website)（来源报告；来源：https://huggingface.co/datasets/osunlp/Mind2Web/raw/17ece8eb89862368edc0cc806acee6fca5163474/README.md）
- 912 个任务实例 — cross-domain test split (test_domain)（来源报告；来源：https://raw.githubusercontent.com/OSU-NLP-Group/Mind2Web/HEAD/README.md）

Each instance is one task with its multi-step action sequence; step counts use a different unit. The card prints the cross-domain size as '9,12'; the repository README gives 912. The test splits are released only as a ZIP whose password the README publishes, with a request not to redistribute the unzipped files. scores_all_data.pkl holds candidate-ranking outputs of a tuned DeBERTa-v3-base model, not annotations.

## 许可证信息

- 代码：未记录
- 数据：cc-by-4.0 — https://huggingface.co/datasets/osunlp/Mind2Web/raw/17ece8eb89862368edc0cc806acee6fca5163474/README.md
- 文档：未记录
- 权重：未记录

## 一手证据

- https://huggingface.co/datasets/osunlp/Mind2Web/raw/17ece8eb89862368edc0cc806acee6fca5163474/README.md（获取于 2026-10-18T11:38:06Z；SHA-256：d2da20abbf17ac82f874d78ced28ceaaf3b15466011d3674deaa2c4597862a4a）
- https://huggingface.co/api/datasets/osunlp/Mind2Web（获取于 2026-10-18T11:38:07Z；SHA-256：25fcf0a0ee9c1c89b33cdae0ebe7ffd5721e4685fe4b74377184be983bd1f597）
- https://raw.githubusercontent.com/OSU-NLP-Group/Mind2Web/HEAD/README.md（获取于 2026-10-18T11:38:07Z；SHA-256：157dbd840264ea29f958c0b7383d63783845c573b3e19a1f39b773be22e0b32d）
- https://huggingface.co/datasets/osunlp/Mind2Web/raw/17ece8eb89862368edc0cc806acee6fca5163474/README.md（获取于 2026-10-18T11:38:06Z；SHA-256：d2da20abbf17ac82f874d78ced28ceaaf3b15466011d3674deaa2c4597862a4a）
