# ScreenQA

基于 35,000 张 Rico 移动端截图的约 86,000 组人工编写问答对，另有 ScreenQA Short 和 ComplexQA 变体，用于评测屏幕内容理解。

- 目录页面：https://awesomecua.com/zh/resources/github-google-research-datasets-screen-qa/
- English：https://awesomecua.com/resources/github-google-research-datasets-screen-qa/index.md
- 原始来源：https://github.com/google-research-datasets/screen_qa
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：界面理解
- 证据核查日期：2026-10-16T06:36:01Z
- ID：github:google-research-datasets/screen_qa

- 完整记录 JSON：https://awesomecua.com/resources/github-google-research-datasets-screen-qa/record.json

## 结构化规格

- 格式：JSON
- 模态：questions, answers, screen references, bounding boxes
- 数据划分：train, validation, test
- 监督信号：screen question answering, answer grounding

### 数量记录

- 68,951 question-answer pairs — original ScreenQA train split（来源报告；来源：https://raw.githubusercontent.com/google-research-datasets/screen_qa/HEAD/README.md）
- 8,614 question-answer pairs — original ScreenQA validation split（来源报告；来源：https://raw.githubusercontent.com/google-research-datasets/screen_qa/HEAD/README.md）
- 8,419 question-answer pairs — original ScreenQA test split（来源报告；来源：https://raw.githubusercontent.com/google-research-datasets/screen_qa/HEAD/README.md）

All questions for a given screenshot share one split. ScreenQA Short reuses the same questions/screens; ComplexQA is a separate extension. ScreenQA Short reuses the same questions and screens; ComplexQA is a separate extension.

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/google-research-datasets/screen_qa/HEAD/README.md（获取于 2026-10-16T06:36:01Z；SHA-256：7d1bfe7d6eddd5d3fc4c33d4814de3cabf7a6b6fd3d3f85ba4c2b33036bf8867）
