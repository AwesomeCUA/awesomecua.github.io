# BrowseComp

OpenAI 的 1,266 题浏览智能体基准，要求跨多个网站持续搜索和导航，给出简短且可核验的答案，并由模型裁判评分。

- 目录页面：https://awesomecua.com/zh/resources/component-openai-simple-evals-browsecomp/
- English：https://awesomecua.com/resources/component-openai-simple-evals-browsecomp/index.md
- 原始来源：https://github.com/openai/simple-evals/blob/main/browsecomp_eval.py
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航、长任务
- 证据核查日期：2026-10-18T11:08:09Z
- ID：component:openai/simple-evals/browsecomp

## 范围记录

This record covers the BrowseComp reference implementation and question set that OpenAI publishes in simple-evals. The catalog's client received HTTP 403 from the launch page (https://openai.com/index/browsecomp/). The paper (arXiv 2504.12516) is not in the retained archive and no curated receipt cites its arXiv ID, so it is not linked yet. The simple-evals README says updates for new models have ended and the repository continues to host the BrowseComp reference implementation. The README lists BrowseComp next to an MIT License link, but this record does not treat that as a declaration for the question data, so the data license stays unknown. The derivative BrowseComp-Plus uses fixed-corpus retrieval and is a separate resource; this record covers BrowseComp.

- 完整记录 JSON：https://awesomecua.com/resources/component-openai-simple-evals-browsecomp/record.json

## 结构化规格

- 动作 / 输出：未记录
- 评测方式：A grader model extracts the final answer from the response and judges it correct or incorrect against the decrypted reference answer; accuracy is the share judged correct. The reference implementation sends each question to any sampler and does not prescribe browsing tools or an action space.
- 侧重：open-web information seeking, persistent multi-site search
- 观测：未记录
- 任务设置：交互式

### 数量记录

- 1,266 个问题 — browse_comp_test_set.csv（计算得出）（来源：https://openaipublic.blob.core.windows.net/simple-evals/browse_comp_test_set.csv）

The count is the number of data rows in the released CSV, whose problem and answer fields are XOR-encrypted with a per-row canary and carry a problem_topic label. Results depend on the agent's browsing tools, the grader model and the number of repeats; record these with a score.

## 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/openai/simple-evals/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 代码审核：The simple-evals LICENSE is the standard MIT text and covers the evaluation code; the question CSV is hosted separately and has no data-license declaration in the inspected sources.
  来源：https://raw.githubusercontent.com/openai/simple-evals/HEAD/LICENSE

## 一手证据

- https://raw.githubusercontent.com/openai/simple-evals/HEAD/browsecomp_eval.py（获取于 2026-10-18T11:08:09Z；SHA-256：0bfb33cfdf5fa0e0d7da48068cc86c5a22acc755979be4a2b46f8a821cc44b74）
- https://openaipublic.blob.core.windows.net/simple-evals/browse_comp_test_set.csv（获取于 2026-10-18T11:08:29Z；SHA-256：7b24471cd5b3eb2a46830a14802b5c029ea62f488ff75a0f88af7923d1454abf）
- https://raw.githubusercontent.com/openai/simple-evals/HEAD/README.md（获取于 2026-10-18T11:08:34Z；SHA-256：d9647c4a0e34cd9b2b528ff6986141734aac6f5f2f18a068eeadb2af0b29786f）
- https://raw.githubusercontent.com/openai/simple-evals/HEAD/LICENSE（获取于 2026-10-18T11:08:35Z；SHA-256：d831db55645e47ca8e491c5a0e37f1ee744d7b10bf5aa8d50146c795ac0176c0）
- https://raw.githubusercontent.com/openai/simple-evals/HEAD/LICENSE（获取于 2026-10-18T11:08:35Z；SHA-256：d831db55645e47ca8e491c5a0e37f1ee744d7b10bf5aa8d50146c795ac0176c0）
