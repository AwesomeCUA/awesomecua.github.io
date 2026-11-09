# showdown-clicks

General Agents 的离线点击基准：557 次 macOS 截图上的人工左键点击，分别配有指令和有效点击位置边界框，以预测点是否落框评分。

- 目录页面：https://awesomecua.com/zh/resources/url-863cc1744cd5d40418be/
- English：https://awesomecua.com/resources/url-863cc1744cd5d40418be/index.md
- 原始来源：https://huggingface.co/datasets/generalagents/showdown-clicks
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：macOS、桌面
- 主题：GUI 定位、评测
- 证据核查日期：2026-10-18T11:14:39Z
- ID：url:863cc1744cd5d40418be

## 范围记录

The card describes showdown-clicks as part of General Agents' showdown suite and a 5,679-click collection recorded in late 2024, of which only the 557-click showdown-clicks-dev subset is released; the remainder is not public. Screenshots range from 1280x800 to 1680x1050. The card's results table includes the publisher's own ace-control models. The card declares MIT and notes that screenshots may contain third-party content.

- 完整记录 JSON：https://awesomecua.com/resources/url-863cc1744cd5d40418be/record.json

## 结构化规格

- 动作 / 输出：single left-click coordinate
- 评测方式：A prediction counts as correct when the predicted click point falls inside the annotated bounding box of viable click locations; the card reports accuracy with bootstrapped 95% confidence intervals and latency.
- 侧重：instruction-conditioned click grounding, low-level desktop control
- 观测：macOS screenshots
- 任务设置：offline

### 数量记录

- 557 annotated clicks — showdown-clicks-dev/data.csv (dev split)（计算得出；来源：https://huggingface.co/datasets/generalagents/showdown-clicks/raw/main/showdown-clicks-dev/data.csv）
- 5,679 left clicks — full showdown-clicks collection described by the card; not released（来源报告；来源：https://huggingface.co/datasets/generalagents/showdown-clicks/raw/main/README.md）

The released CSV has 557 rows with unique IDs and screenshots, and columns for instruction, bounding box and image size. Only the dev subset is public, so scores on the full collection cannot be reproduced from the release.

## 许可证信息

- 代码：未记录
- 数据：mit — https://huggingface.co/datasets/generalagents/showdown-clicks/raw/main/README.md
- 文档：未记录
- 权重：未记录

## 一手证据

- https://huggingface.co/datasets/generalagents/showdown-clicks/raw/main/README.md（获取于 2026-10-18T11:14:39Z；SHA-256：14d46319e7abf54616df512b8bbc7d6d62347e9b1a36e21a61aa2c4667e909a4）
- https://huggingface.co/api/datasets/generalagents/showdown-clicks（获取于 2026-10-18T11:14:40Z；SHA-256：b1a8a685e2bca74891afc030decdb65fc46d2f0a2d2842df1df24faa2999c678）
- https://huggingface.co/datasets/generalagents/showdown-clicks/raw/main/showdown-clicks-dev/data.csv（获取于 2026-10-18T11:14:41Z；SHA-256：c13a190cdc2157438ec505778dfa21ebbce1b9f518d06b8d3ebb31737aeb5312）
- https://huggingface.co/datasets/generalagents/showdown-clicks/raw/main/README.md（获取于 2026-10-18T11:14:39Z；SHA-256：14d46319e7abf54616df512b8bbc7d6d62347e9b1a36e21a61aa2c4667e909a4）
