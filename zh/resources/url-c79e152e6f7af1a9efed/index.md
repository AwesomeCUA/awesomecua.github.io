# ScreenSpot-Pro data

用于评估基于指令的 GUI 定位的高分辨率专业界面截图及目标标注。

- 目录页面：https://awesomecua.com/zh/resources/url-c79e152e6f7af1a9efed/
- English：https://awesomecua.com/resources/url-c79e152e6f7af1a9efed/index.md
- 原始来源：https://huggingface.co/datasets/likaixin/ScreenSpot-Pro
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Windows、macOS、Linux
- 主题：GUI 定位、评测
- 证据核查日期：2026-10-16T11:35:55Z
- ID：url:c79e152e6f7af1a9efed

## 范围记录

This is the benchmark data asset, distinct from its evaluation-code repository. Target counts and unique image counts are different units.

- 完整记录 JSON：https://awesomecua.com/resources/url-c79e152e6f7af1a9efed/record.json

## 结构化规格

- 格式：JSON annotations, screen images
- 模态：high-resolution screenshots, instructions, bounding boxes
- 数据划分：未记录
- 监督信号：GUI grounding

### 数量记录

- 1,581 条目标标注 — sum of icon/text counts in the published card table（计算得出）（来源：https://huggingface.co/datasets/likaixin/ScreenSpot-Pro/raw/main/README.md）

Counts describe target annotations; unique screenshots and expanded language/style variants use different units. The evaluation code can reuse a target across configurations.

## 许可证信息

- 代码：未记录
- 数据：mit — https://huggingface.co/datasets/likaixin/ScreenSpot-Pro/raw/main/README.md
- 文档：未记录
- 权重：未记录

## 一手证据

- https://huggingface.co/datasets/likaixin/ScreenSpot-Pro/raw/main/README.md（获取于 2026-10-16T11:35:55Z；SHA-256：76ae2231564fe84af029f8625c02d9cd7fb6cf85c5f8af1b2a2593e2107719d9）
- https://raw.githubusercontent.com/likaixin2000/ScreenSpot-Pro-GUI-Grounding/HEAD/eval_screenspot_pro.py（获取于 2026-10-16T11:38:05Z；SHA-256：a77c859775b33591b5619e8520c94702a53a1f9a29ada93e66744dbe23afe9dc）
- https://export.arxiv.org/api/query?search_query=%28ti%3A%22computer+use%22+OR+ti%3A%22computer-use%22+OR+ti%3A%22GUI+agent%22+OR+ti%3A%22GUI+agents%22+OR+ti%3A%22GUI+grounding%22+OR+ti%3A%22web+agents%22+OR+ti%3A%22browser+agent%22%29+AND+submittedDate%3A%5B200001010000+TO+202610160636%5D&start=700&max_results=100&sortBy=submittedDate&sortOrder=descending（获取于 2026-10-16T06:36:54Z；SHA-256：4953a8e0f029016aef668bce98cec4d2873a7ae49c1fe33c4311fa5eb8d24089）
- https://gui-agent.github.io/grounding-leaderboard/（获取于 2026-10-18T04:27:10Z；SHA-256：2f7f635dee3c593b40efc61246c082ab1d76f7ce78f84a1d4b6391d30fa4e8fd）
- https://huggingface.co/datasets/likaixin/ScreenSpot-Pro/raw/main/README.md（获取于 2026-10-16T11:35:55Z；SHA-256：76ae2231564fe84af029f8625c02d9cd7fb6cf85c5f8af1b2a2593e2107719d9）
