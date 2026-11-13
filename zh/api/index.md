---
title: "AwesomeCUA 静态数据 API"
url: https://awesomecua.com/zh/api/
updated: 2026-11-13
type: documentation
lang: zh-CN
---

# AwesomeCUA 静态数据 API

供智能体与脚本读取的版本化 JSON 和 CSV 文件：已审阅的资源与论文、分类、近期变更，以及明确标注的待审候选。随每个目录快照重新生成，无需密钥或账号。

基础 URL：`https://awesomecua.com/api/v1/` · 版本 1.0.0 · 快照 2026-11-13T08:23:46Z · [API 索引](https://awesomecua.com/api/v1/index.json) · [JSON Schema](https://awesomecua.com/api/v1/schema.json) · [Markdown 版本（英文）](https://awesomecua.com/api/index.md)

## 端点

| JSON | CSV | 条目数 | 大小 | 内容 |
| --- | --- | --- | --- | --- |
| [resources.json](https://awesomecua.com/api/v1/resources.json) | [resources.csv](https://awesomecua.com/api/v1/resources.csv) | 3,629 | 2.6 MiB | 论文以外的已审阅资源：模型、数据集、评测基准、智能体、框架、基础设施、工具、产品、发布者与学习资源。 |
| [papers.json](https://awesomecua.com/api/v1/papers.json) | [papers.csv](https://awesomecua.com/api/v1/papers.csv) | 1,718 | 1.6 MiB | 已审阅的研究论文与综述，含作者、记录的发表日期、arXiv 版本与引用文件。 |
| [categories.json](https://awesomecua.com/api/v1/categories.json) | [categories.csv](https://awesomecua.com/api/v1/categories.csv) | 47 | 16 KiB | 资源类型与研究主题，附已审阅数量，以及对应页面、Markdown 与数据的链接。 |
| [changes.json](https://awesomecua.com/api/v1/changes.json) | [changes.csv](https://awesomecua.com/api/v1/changes.csv) | 7,509 | 2.5 MiB | 快照前 30 天内的目录事件：编辑审阅、新增书目记录与范围排除。 |
| [candidates.json](https://awesomecua.com/api/v1/candidates.json) | [candidates.csv](https://awesomecua.com/api/v1/candidates.csv) | 1,406 | 688 KiB | 待审阅记录，逐条标注：等待相关性审阅的书目记录，以及等待审阅的已发现标识。 |

## 标识

每个条目都保留目录 `id`，资源改名后 `id` 不变。`url` 是原始来源，`page_url` 是目录页面。页面的 Markdown 版本、完整记录和（论文的）引用文件位于 `page_url` 下的固定路径，在 `links` 中逐个列出，例如 `{page_url}record.json`。

## 版本

`version` 是 API 格式版本：主版本号变化表示字段有不兼容的改动，次版本号只增加字段。`generated_at` 是快照中最新的数据记录时间（UTC），同一源提交生成的所有文件取值相同。`catalog_sha256` 是源目录的指纹。

## 审阅状态

`resources.json` 和 `papers.json` 只含已审阅记录，`categories.json` 中的计数也只统计已审阅记录，每条都对照一手来源审阅过。`candidates.json` 中的记录均为待审阅状态，并逐条注明。

## 许可证

代码、数据、权重和文档的许可证分别声明；`null` 表示未记录许可证。目录注释与这些文件采用 MIT 许可证；所链接的资源保留各自的条款。

## 缓存与 CORS

文件为静态文件，由 GitHub Pages 提供，带 `Access-Control-Allow-Origin: *`、`ETag` 和 `Last-Modified`，浏览器可以跨域读取，客户端可以发送条件请求。重新导入前先比较 `generated_at` 或 `catalog_sha256`。

## CSV

每个 CSV 中一行对应一个 JSON 条目，每行都重复 `version` 和 `generated_at`。列表用 `; ` 连接，值内的空白合并为单个空格。

## 示例

```
curl -s https://awesomecua.com/api/v1/resources.json | jq -r '.items[] | select(.kind == "benchmark") | .name'
```

```
python3 -c "import json, urllib.request; d = json.load(urllib.request.urlopen('https://awesomecua.com/api/v1/papers.json')); print(d['generated_at'], d['count'])"
```

## 批量数据

API 是目录的索引。如需含完整证据的全部记录，请使用[目录 JSONL](https://awesomecua.com/downloads/catalog.jsonl)、[SQLite 数据库](https://awesomecua.com/downloads/catalog.sqlite)或[数据下载页](https://awesomecua.com/zh/data/)；待审阅的 GitHub 仓库见[候选观察记录](https://awesomecua.com/downloads/github-candidates.jsonl)。
