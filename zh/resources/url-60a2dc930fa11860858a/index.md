# Learning to Contextualize Web Pages for Enhanced Decision Making by LLM Agents

训练独立语言模型，将冗长网页观察改写为供 LLM 网页智能体使用的聚焦描述，并保留能让多个 LLM 预测正确下一步动作的训练目标。

- 目录页面：https://awesomecua.com/zh/resources/url-60a2dc930fa11860858a/
- English：https://awesomecua.com/resources/url-60a2dc930fa11860858a/index.md
- 原始来源：https://openreview.net/forum?id=3Gzz7ZQLiz
- 类型：论文
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、界面理解、动作预测
- 证据核查日期：2026-10-19T07:24:24Z
- ID：url:60a2dc930fa11860858a

## 范围记录

Reviewed against the ICLR 2025 proceedings page and PDF; the OpenReview forum lists it as an ICLR 2025 Poster. LCoW's contextualization module reads the task, previous actions and a raw page observation such as an accessibility tree, and is retrained each iteration by supervised fine-tuning on the sampled rewrites that let several LLM agents recover the ground-truth action in successful trajectories. Appendix B fine-tunes Phi-3-mini-Instruct for WebShop and Llama-3.1-8B-Instruct for WorkArena and WebArena. WebShop and WorkArena are the main benchmarks; a 165-task WebArena subset tests generalization to unseen task types. The same paper is posted on arXiv as 2503.10689 with the comment "Accepted to ICLR 2025". The paper points to lcowiclr2025.github.io for code.

- 完整记录 JSON：https://awesomecua.com/resources/url-60a2dc930fa11860858a/record.json

## 作者

Dongjun Lee, Juyong Lee, Kyuyoung Kim, Jihoon Tack, Jinwoo Shin, Yee Whye Teh, Kimin Lee

## 引用文件

- BibTeX：https://awesomecua.com/resources/url-60a2dc930fa11860858a/citation.bib
- CSL JSON：https://awesomecua.com/resources/url-60a2dc930fa11860858a/citation.csl.json

## 发表记录

- 标题：Learning to Contextualize Web Pages for Enhanced Decision Making by LLM Agents
- 作者：Dongjun Lee, Juyong Lee, Kyuyoung Kim, Jihoon Tack, Jinwoo Shin, Yee Whye Teh, Kimin Lee
- 发表日期：2025-05-01
- 发表来源：https://openreview.net/forum?id=3Gzz7ZQLiz
- 发表版 BibTeX：https://awesomecua.com/resources/url-60a2dc930fa11860858a/publication-citation.bib
- 发表版 CSL JSON：https://awesomecua.com/resources/url-60a2dc930fa11860858a/publication-citation.csl.json
- 发表于：International Conference on Learning Representations 2025 (ICLR 2025)
- 卷：2025
- 页码：81039-81072
- 日期来源：Publisher citation_publication_date metadata on the ICLR proceedings page states 2025-05-01; precision=day.
- 版本对应依据：Same work: the ICLR 2025 proceedings page and PDF carry the same title, seven authors and abstract as OpenReview note 3Gzz7ZQLiz (venue ICLR 2025 Poster), which was read in a browser because openreview.net answers automated clients with a challenge page. An arXiv preprint, 2503.10689, carries the same title, the same seven authors and the comment "Accepted to ICLR 2025".
- 来源备注：The proceedings page and PDF byline list the same seven authors in the same order. The record URL is the OpenReview forum; the proceedings page and PDF are the retained receipts. No DOI is given.
- 发表证据：https://proceedings.iclr.cc/paper_files/paper/2025/hash/c995a913bc20ca39ce2231b8973be90a-Abstract-Conference.html, https://proceedings.iclr.cc/paper_files/paper/2025/file/c995a913bc20ca39ce2231b8973be90a-Paper-Conference.pdf

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://proceedings.iclr.cc/paper_files/paper/2025/hash/c995a913bc20ca39ce2231b8973be90a-Abstract-Conference.html（获取于 2026-10-19T07:24:24Z；SHA-256：2f882b8d48b21d0343ed7c6e07e9117d2b95fe250ef01cd51d8590eeba5bc9f8）
- https://proceedings.iclr.cc/paper_files/paper/2025/file/c995a913bc20ca39ce2231b8973be90a-Paper-Conference.pdf（获取于 2026-10-19T07:20:22Z；SHA-256：5689819e3e2604077a9afb9f98aa41cb7e2d22f13701446dd5c1a53be9b9d7b6）
- https://proceedings.iclr.cc/paper_files/paper/2025/hash/c995a913bc20ca39ce2231b8973be90a-Abstract-Conference.html（获取于 2026-10-19T07:24:24Z；SHA-256：2f882b8d48b21d0343ed7c6e07e9117d2b95fe250ef01cd51d8590eeba5bc9f8）
- https://proceedings.iclr.cc/paper_files/paper/2025/file/c995a913bc20ca39ce2231b8973be90a-Paper-Conference.pdf（获取于 2026-10-19T07:20:22Z；SHA-256：5689819e3e2604077a9afb9f98aa41cb7e2d22f13701446dd5c1a53be9b9d7b6）
