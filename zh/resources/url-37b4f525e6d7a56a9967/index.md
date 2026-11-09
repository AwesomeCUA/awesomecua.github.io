# GuideBench

GUIDE 基准发布的数据：来自 10 款应用的新手口述屏幕录像的标注片段，用于预测用户行为状态、短期意图，以及是否提供帮助和如何帮助。

- 目录页面：https://awesomecua.com/zh/resources/url-37b4f525e6d7a56a9967/
- English：https://awesomecua.com/resources/url-37b4f525e6d7a56a9967/index.md
- 原始来源：https://huggingface.co/datasets/kixlab/GuideBench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、网页
- 主题：评测、人机协作、视频、界面理解
- 证据核查日期：2026-10-19T06:04:35Z
- ID：url:37b4f525e6d7a56a9967

## 范围记录

Formerly published as saelyne/GuideBench; the Hub API redirects that name to this repository with the same object ID. Access is gated with automatic approval. The Hub manifest at revision 783caa86 holds three annotation JSON files (one per task), 40 task-description Markdown files, 120 think-aloud transcription JSON files and two CSV files under videos/; no video files are hosted in the repository. The project page lists Photoshop, GIMP, Figma, Canva, PowerPoint, Google Slides, Premiere Pro, CapCut, Google Sheets and Excel without naming operating systems; the environment facets follow from those applications. Models are evaluated on video snippets without the narrations. CC-BY-4.0 is the Hub data declaration.

- 完整记录 JSON：https://awesomecua.com/resources/url-37b4f525e6d7a56a9967/record.json

## 结构化规格

- 动作 / 输出：未记录
- 评测方式：Accuracy on 9-way behavior-state classification, 4-way multiple-choice intent prediction, and help prediction split into a binary help-need decision and a 4-way multiple-choice help-content question.
- 侧重：user behavior state detection, short-term intent prediction, help need and help content prediction
- 观测：screen-recording video segments
- 任务设置：offline

### 数量记录

- 120 demonstrations — GUIDE screen recordings（来源报告；来源：https://guide-bench.github.io）
- 67.5 hours of screen recordings — GUIDE screen recordings（来源报告；来源：https://guide-bench.github.io）
- 54 novice users — GUIDE participants（来源报告；来源：https://guide-bench.github.io）
- 10 applications — GUIDE software coverage（来源报告；来源：https://guide-bench.github.io）
- 40 open-ended tasks — GUIDE task design（来源报告；来源：https://guide-bench.github.io）
- 120 transcription files — Hub manifest at revision 783caa86 (transcriptions/)（计算得出；来源：https://huggingface.co/api/datasets/kixlab/GuideBench/revision/783caa868dc3a929ef99702731a1e0b27add48f1）
- 40 task-description files — Hub manifest at revision 783caa86 (tasks/)（计算得出；来源：https://huggingface.co/api/datasets/kixlab/GuideBench/revision/783caa868dc3a929ef99702731a1e0b27add48f1）

Demonstration, hour, user, application and task counts are the project page's figures; file counts come from the Hub manifest. The access gate leaves segment counts per task uncomputed from the annotation files.

## 许可证信息

- 代码：未记录
- 数据：cc-by-4.0 — https://huggingface.co/datasets/kixlab/GuideBench
- 文档：未记录
- 权重：未记录

## 一手证据

- https://huggingface.co/api/datasets/kixlab/GuideBench/revision/783caa868dc3a929ef99702731a1e0b27add48f1（获取于 2026-10-19T06:04:35Z；SHA-256：d1e2fedc00dbf1c9531cd5cc676f900f149690a2e08655f8d93c56d5abd8d389）
- https://guide-bench.github.io（获取于 2026-10-19T06:04:26Z；SHA-256：0a3441b26d204655fe737e7b3738a61ebb8c67fd0977e26042cad59f24352c14）
- https://huggingface.co/api/datasets/kixlab/GuideBench/revision/783caa868dc3a929ef99702731a1e0b27add48f1（获取于 2026-10-19T06:04:35Z；SHA-256：d1e2fedc00dbf1c9531cd5cc676f900f149690a2e08655f8d93c56d5abd8d389）
- https://huggingface.co/api/datasets/saelyne/GuideBench（获取于 2026-10-19T06:03:50Z；SHA-256：d1e2fedc00dbf1c9531cd5cc676f900f149690a2e08655f8d93c56d5abd8d389）
- https://huggingface.co/api/datasets/kixlab/GuideBench（获取于 2026-10-19T06:03:50Z；SHA-256：d1e2fedc00dbf1c9531cd5cc676f900f149690a2e08655f8d93c56d5abd8d389）
