# AutomotiveUI-Bench-4K

车载信息娱乐屏幕的离线测试集，含来自 15 个品牌的 998 张照片和截图，以及 4,208 条英文标注，用于定位 UI 元素并判断预期结果通过或失败。

- 目录页面：https://awesomecua.com/zh/resources/url-e80e9cf4f565f9ab2abf/
- English：https://awesomecua.com/resources/url-e80e9cf4f565f9ab2abf/index.md
- 原始来源：https://huggingface.co/datasets/sparks-solutions/AutomotiveUI-Bench-4K
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：GUI 定位、评测、界面理解、产业
- 证据核查日期：2026-10-19T07:49:42Z
- ID：url:e80e9cf4f565f9ab2abf

## 范围记录

Sparks Solutions publishes one ungated test split of 22 Parquet shards at revision d760810c. The card describes mostly photographs of in-vehicle infotainment displays plus some direct screenshots such as Android Auto; its per-brand image counts cover 13 car brands, Apple CarPlay and Google Android Auto and sum to 998. No catalog platform facet fits infotainment systems, so the environment is unspecified. Each annotation pairs a bounding box with either an imperative test action or an expected-result statement labeled passed or failed; UI text is German or English and annotations are English. The card's example code runs the publisher's ELAM-7B model, and its results table is publisher-reported. The card cites arXiv 2505.05895 (Ernhofer et al., 2025). CC-BY-4.0 is the card's data declaration.

- 完整记录 JSON：https://awesomecua.com/resources/url-e80e9cf4f565f9ab2abf/record.json

## 结构化规格

- 动作 / 输出：point or bounding box for the referenced UI element, passed or failed verdict for expected results
- 评测方式：The card's scoring script counts a grounding hit when the predicted point, or the center of a predicted box, lies inside the annotated box, and scores expected-result verdicts against the passed or failed labels, overall and by UI language.
- 侧重：grounding infotainment UI elements from test-action commands, judging expected-result statements as passed or failed
- 观测：photographs and screenshots of in-vehicle infotainment displays, English test-action or expected-result text
- 任务设置：离线

### 数量记录

- 4,208 条标注 — test split, the only split, at revision d760810c（来源报告；来源：https://huggingface.co/datasets/sparks-solutions/AutomotiveUI-Bench-4K/raw/d760810c47bed006d88ee70dad7248056fdec223/README.md）
- 998 张图像 — images in the release（来源报告；来源：https://huggingface.co/datasets/sparks-solutions/AutomotiveUI-Bench-4K/raw/d760810c47bed006d88ee70dad7248056fdec223/README.md）
- 2,269 条标注 — Test Action rows in the test split, from the Hub dataset viewer's column statistics（计算得出）（来源：https://datasets-server.huggingface.co/statistics?dataset=sparks-solutions/AutomotiveUI-Bench-4K&config=default&split=test）
- 1,939 条标注 — Expected Result rows in the test split (1,375 passed, 564 failed), from the Hub dataset viewer's column statistics（计算得出）（来源：https://datasets-server.huggingface.co/statistics?dataset=sparks-solutions/AutomotiveUI-Bench-4K&config=default&split=test）

Image and annotation totals are the card's. The class split comes from the Hub dataset viewer's statistics for the test split, whose 4,208 rows match the card; the language column is the UI language (2,220 German and 1,988 English rows).

## 许可证信息

- 代码：未记录
- 数据：cc-by-4.0 — https://huggingface.co/datasets/sparks-solutions/AutomotiveUI-Bench-4K/raw/d760810c47bed006d88ee70dad7248056fdec223/README.md
- 文档：未记录
- 权重：未记录

## 一手证据

- https://huggingface.co/datasets/sparks-solutions/AutomotiveUI-Bench-4K/raw/d760810c47bed006d88ee70dad7248056fdec223/README.md（获取于 2026-10-19T07:49:42Z；SHA-256：5fa723cda0c5a9982158a1a716fad26242dd3e560365d149cb268d7aa1761dd7）
- https://huggingface.co/api/datasets/sparks-solutions/AutomotiveUI-Bench-4K/revision/d760810c47bed006d88ee70dad7248056fdec223（获取于 2026-10-19T07:49:43Z；SHA-256：864ae1e85c8348b194569e78e9ac1defc9c928016ab4f0d0e49895d8e99c0130）
- https://datasets-server.huggingface.co/statistics?dataset=sparks-solutions/AutomotiveUI-Bench-4K&config=default&split=test（获取于 2026-10-19T07:50:08Z；SHA-256：ae3164aa48bcf6a05f6f6c0dd6d43e463b97a1dc5562b60460f4e787f7841d44）
- https://huggingface.co/datasets/sparks-solutions/AutomotiveUI-Bench-4K/raw/d760810c47bed006d88ee70dad7248056fdec223/README.md（获取于 2026-10-19T07:49:42Z；SHA-256：5fa723cda0c5a9982158a1a716fad26242dd3e560365d149cb268d7aa1761dd7）
