---
title: "AwesomeCUA：Agents 与 RAG 使用指南"
url: https://awesomecua.com/zh/agents/
updated: 2026-11-14
type: page
lang: zh-CN
---

# 把完整目录交给你的 Agent

一行克隆，本地检索，将可追溯的资源记录接入 RAG 和 Agent。完整目录无需账号或 API Key。

[AGENTS.md](https://awesomecua.com/AGENTS.md) · [English](https://awesomecua.com/zh/agents/)

## 1. 克隆完整数据

```
git clone https://github.com/reacher-z/Awesome-CUA.git
cd Awesome-CUA
git rev-parse HEAD
```

直接读取 data/catalog.jsonl，或使用以下 Python 3.11+ 命令。检索和导出只需标准库，无需模型服务或安装依赖。保存 Git commit，便于复核所使用的数据快照。

[版本化数据快照](https://github.com/reacher-z/Awesome-CUA/releases)提供可重复使用的完整数据 ZIP。校验 SHA256SUMS，并保留 release-manifest.json 中的源提交与目录指纹。数据包包含目录、RAG、引用和专题子集；以下仓库 CLI 命令需要克隆源代码后运行。

## 2. 先检索，再深入阅读

```
python3 scripts/catalog.py search "grounding" --kind model --status curated --json
python3 scripts/catalog.py search --kind dataset --environment android --status curated --limit 0 --json
python3 scripts/catalog.py search --kind paper --status curated --topic reinforcement-learning --limit 0 --json
```

检索按关键词进行 AND 匹配。没有结果时可尝试别名；--limit 0 返回全部匹配项。审阅状态、平台和主题标签反映目录已经核实的范围。

### 用稳定 ID 读取记录

```
python3 scripts/catalog.py get arxiv:2404.07972 --json
python3 scripts/catalog.py get arxiv:2404.07972 --related --json
```

按方向整理资料时，可先打开[主题目录](https://awesomecua.com/zh/topics/)。对应的[JSON 清单](https://awesomecua.com/downloads/topics.json)提供精确的已审阅资源 ID、完整记录子集、引用和文件指纹。下载的 records.jsonl 可作为 export_rag.py --input 的输入，构建专题检索库。

精确查询返回完整原记录。关联查询补充双向的已审阅关系与来源。未知 ID 和已排除 ID 会返回不同的非零退出码。

### 用已记录的仓库旧名检索

```
python3 scripts/catalog.py get github:mnotgod96/appagent --json
python3 scripts/catalog.py search "https://github.com/mnotgod96/AppAgent" --json
```

以上命令返回 AppAgent 的规范记录，关联查询和检索库更新应使用返回的 id。[仓库身份记录](https://awesomecua.com/downloads/repository-aliases.json)通过成对的官方 API 收据，将旧名与当前名称绑定到同一个 GitHub 数字仓库 ID。这些是带日期的身份依据。目录和 RAG 记录均保留别名及其证据。

每条资源页面都有 record.json，可直接通过 HTTP 读取。范围排除项会返回明确的 excluded 决定，而非有效资源记录。 [JSON 示例](https://awesomecua.com/resources/arxiv-2404-07972/record.json).

## 3. 接入 RAG

```
python3 scripts/export_rag.py --output dist/rag-documents.jsonl
python3 scripts/export_rag.py --include-metadata --output dist/rag-all-records.jsonl
python3 scripts/catalog.py build
```

将 text 字段用于检索，并完整保留 metadata。使用 id 作为稳定的更新键。建议先使用已审阅导出；完整导出还包含相关性待审阅的论文。SQLite 会生成到 dist/catalog.sqlite。

| 字段 | 用途 |
| --- | --- |
| `id`<br>`metadata.resource_id` | 稳定的资源标识 |
| `text` | 标题、原创注释、上下文和来源链接 |
| `metadata.review_status`<br>`metadata.scope` | 用于筛选，并说明证据边界 |
| `metadata.citation_url`<br>`metadata.source_url` | 目录固定链接与一手来源；已知时指向记录的 arXiv 版本 |
| `metadata.evidence`<br>`metadata.last_verified_at` | 来源收据、指纹和核验日期 |
| `metadata.licenses`<br>`metadata.relations` | 分开的许可范围及已审阅关联 |
| `metadata.record_sha256` | 检测规范化后的原始资源 JSON 对象是否发生变化 |

直接读取 catalog.jsonl 或 record.json 时，原记录使用 url 和 details.arxiv_snapshot；上表中的 metadata 引用链接与记录指纹由 RAG 导出器生成。 [目录与 RAG 字段对照](https://github.com/reacher-z/Awesome-CUA/blob/main/docs/query-guide.md#catalog-and-rag-field-mapping)。

## 4. 导出论文引用

```
python3 scripts/export_citations.py --format bibtex --output dist/citations.bib
python3 scripts/export_citations.py --format csl-json --output dist/citations.csl.json
python3 scripts/export_citations.py --id arxiv:2404.07972 --format bibtex
```

默认导出已审阅论文与综述；添加 --include-metadata 可包含全部当前书目。未知的会议和标识不会被猜测补全，首次提交日期与版本更新时间分别保留。每篇论文页面也提供独立 BibTeX 和 CSL JSON 下载。

### 选择正式出版版

```
python3 scripts/export_citations.py --edition publication --format bibtex --output dist/publication-citations.bib
```

这会选择具有出版信息的已审阅条目。出版版使用自己的题名、作者、会议／期刊和日期；默认 arXiv 引用仍保留原预印本版本。只有出版来源的条目在两种模式下使用同一出版记录。仅知年或月的日期保持原精度。

[Publication BibTeX](https://awesomecua.com/downloads/publication-citations.bib) · [Publication CSL JSON](https://awesomecua.com/downloads/publication-citations.csl.json) · [出版来源记录](https://awesomecua.com/downloads/publications.jsonl)

## 直接下载

[打开数据中心](https://awesomecua.com/zh/data/) · [完整下载清单](https://awesomecua.com/downloads/manifest.json)

清单为每个主要导出记录数量、单位、范围、文件大小和 SHA-256。入库前校验文件指纹，并随检索快照保存 catalog_sha256。

- [完整目录](https://awesomecua.com/downloads/catalog.jsonl) — 全部当前资源及完整来源记录。
- [SQLite 数据库](https://awesomecua.com/downloads/catalog.sqlite) — 资源、标签、关联关系与全文搜索。
- [已审阅检索文档](https://awesomecua.com/downloads/rag-documents.jsonl) — 每项已审阅资源对应一份文档，保留引用与来源。
- [全部检索文档](https://awesomecua.com/downloads/rag-all-records.jsonl) — 包含论文元数据条目，并保留其待审阅状态。
- [已审阅论文引用 · BibTeX](https://awesomecua.com/downloads/citations.bib) — 保留原作者、日期和记录的论文版本。
- [已审阅论文引用 · CSL JSON](https://awesomecua.com/downloads/citations.csl.json) — 用于文献管理工具的结构化书目。
- [RAG 导出清单](https://awesomecua.com/downloads/rag-manifest.json) — 文档数量、SHA-256 指纹与原始目录指纹。

## 让回答保留证据

“已审核”表示已对照一手来源审核。“元数据已核验”表示已核对书目身份。回答时引用一手来源和目录链接，保留日期、版本与未知字段。论文、代码、数据集和权重可能属于同一项目的不同资源。

元数据条目可能尚待初审，也可能是在阅读来源后暂缓收录。已记录的暂缓原因见[覆盖台账](https://awesomecua.com/downloads/coverage.json)；暂缓条目仍不进入已审阅检索导出。

导出内容是目录元数据和原创注释。论文全文、模型权重和训练样本由原发布方提供；代码、数据、权重和文档许可分别记录。

## 更新与核对

更新到新的 Git commit，或获取新的导出清单。用 record_sha256 比较变更，并对照完整目录和排除台账处理消失的 ID；范围审阅后的排除项不应继续留在检索结果中。发现流程计划每八小时执行一次，实际执行结果和缺口公开记录在更新页。

[扫描进展](https://awesomecua.com/zh/updates/) · [覆盖台账](https://awesomecua.com/zh/coverage/) · [审阅方法](https://awesomecua.com/zh/about/)
