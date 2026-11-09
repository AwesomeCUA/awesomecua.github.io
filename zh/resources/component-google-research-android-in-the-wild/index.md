# Android in the Wild

Android 任务的人类操作演示，包含截图和触摸操作。

- 目录页面：https://awesomecua.com/zh/resources/component-google-research-android-in-the-wild/
- English：https://awesomecua.com/resources/component-google-research-android-in-the-wild/index.md
- 原始来源：https://github.com/google-research/google-research/tree/master/android_in_the_wild
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：数据生成、手机操作
- 证据核查日期：2026-10-16T06:38:29Z
- ID：component:google-research/android_in_the_wild

- 完整记录 JSON：https://awesomecua.com/resources/component-google-research-android-in-the-wild/record.json

## 结构化规格

- 格式：GZIP-compressed TFRecord
- 模态：screenshots, instructions, actions
- 数据划分：未记录
- 监督信号：interaction trajectories, action prediction

### 数量记录

- 715,142 episodes — sum of the five published AitW subsets（来源报告；来源：https://raw.githubusercontent.com/google-research/google-research/master/android_in_the_wild/README.md）
- 5,689,993 action examples — sum of the five published AitW subsets（来源报告；来源：https://raw.githubusercontent.com/google-research/google-research/master/android_in_the_wild/README.md）

Episodes and action examples are different units. The collection combines multi-step subsets and hindsight-labeled single-step tasks; preserve subset and split choices.

## 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/google-research/google-research/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/google-research/google-research/master/android_in_the_wild/README.md（获取于 2026-10-16T06:38:29Z；SHA-256：6d8964c95db41dada1d5867e50a5ec61f6cb90595965d0e72e010b8e4a12dcb2）
- https://raw.githubusercontent.com/google-research/google-research/HEAD/LICENSE（获取于 2026-10-16T06:42:06Z；SHA-256：cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30）
