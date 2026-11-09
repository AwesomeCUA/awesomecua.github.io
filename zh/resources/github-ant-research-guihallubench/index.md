# GUIHalluBench

将模型列出的界面元素边界框和描述与人工标注比对，衡量其解析 1,000 张英文和 1,000 张中文截图时的幻觉。

- 目录页面：https://awesomecua.com/zh/resources/github-ant-research-guihallubench/
- English：https://awesomecua.com/resources/github-ant-research-guihallubench/index.md
- 原始来源：https://github.com/ant-research/GUIHalluBench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：评测、鲁棒性
- 证据核查日期：2026-10-16T06:40:51Z
- ID：github:ant-research/guihallubench

- 完整记录 JSON：https://awesomecua.com/resources/github-ant-research-guihallubench/record.json

## 结构化规格

- 动作 / 输出：list of UI element boxes [x1,y1,x2,y2] and text descriptions
- 评测方式：Metrics use greedy one-to-one matching in descending IoU order, then micro precision/recall/F1 and lowercased difflib.SequenceMatcher description similarity on matched pairs. Actual metrics.py accepts IoU >= 0.5 at its default threshold; README prose says > 0.5. Predictions align to annotations by image_path; callers must supply complete prediction coverage.
- 侧重：GUI page-element detection, element-description consistency
- 观测：page screenshot
- 任务设置：offline

### 数量记录

- 1,000 page-annotation entries — English annotation subset reported by README（来源报告；来源：https://raw.githubusercontent.com/ant-research/GUIHalluBench/HEAD/README.md）
- 1,000 page-annotation entries — Chinese annotation subset reported by README（来源报告；来源：https://raw.githubusercontent.com/ant-research/GUIHalluBench/HEAD/README.md）

Each annotation entry represents a page. README illustrates num_samples=4796 as example output; the corpus count remains unspecified. Public tree contains both annotation JSON files and an images.tar.gz Git-LFS pointer. LEGAL.md only governs comment-language precedence, not a code/data license grant; both slots remain unknown. No benchmark run was performed.

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://github.com/ant-research/GUIHalluBench（获取于 2026-10-16T06:40:51Z；SHA-256：51df9dbcf52f46e4774207f2e6ad84dc8a6d117cdab6f77a38e9897ded1d0963）
- https://raw.githubusercontent.com/ant-research/GUIHalluBench/HEAD/README.md（获取于 2026-10-16T06:35:59Z；SHA-256：d9c476d6960a4ef99e20d4c3b5d35a63f3ae5e61fc20e9dea00b11e64b74c9e9）
- https://raw.githubusercontent.com/ant-research/GUIHalluBench/HEAD/src/metrics.py（获取于 2026-10-17T14:21:09Z；SHA-256：f36707dfcd3e83fc9d7f57b50d0c27007801e5029cc1ac255e000560ecf778fc）
- https://api.github.com/repos/ant-research/GUIHalluBench/git/trees/master?recursive=1（获取于 2026-10-17T14:14:07Z；SHA-256：c0896bc90d515b7bd8fe86b062aeb199bd47570e6eca8474986f5b1ef1d98dbd）
- https://raw.githubusercontent.com/ant-research/GUIHalluBench/HEAD/LEGAL.md（获取于 2026-10-17T14:21:09Z；SHA-256：adba50d9794b9ef3f7ec8cbc680f7f1fa3fbf9df0ac8d1f9b9ccab6d941bc11b）
- https://raw.githubusercontent.com/ant-research/GUIHalluBench/HEAD/.gitattributes（获取于 2026-10-17T14:34:56Z；SHA-256：8f35fa75be42a7a53e4f96de1b62be84962d2cf1beb8b23dfcfaecfaea4a6b90）
