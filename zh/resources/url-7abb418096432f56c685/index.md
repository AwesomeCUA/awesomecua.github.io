# ScreenSpot

ScreenSpot 是 GUI 定位测试集，包含来自 iOS、Android、macOS、Windows 和网页界面的 1,272 条截图指令，每条均标注目标元素的边界框。

- 目录页面：https://awesomecua.com/zh/resources/url-7abb418096432f56c685/
- English：https://awesomecua.com/resources/url-7abb418096432f56c685/index.md
- 原始来源：https://huggingface.co/datasets/rootsautomation/ScreenSpot
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台
- 主题：GUI 定位、评测
- 证据核查日期：2026-10-16T06:38:26Z
- ID：url:7abb418096432f56c685

- 完整记录 JSON：https://awesomecua.com/resources/url-7abb418096432f56c685/record.json

## 结构化规格

- 动作 / 输出：predicted click point; a predicted box is reduced to its center
- 评测方式：The SeeClick evaluator scores whether the predicted point falls inside the target box, with platform and text/icon breakdowns. The Hub packaging uses xyxy boxes, whereas the original evaluator reads xywh and converts it; adapt the loader to the chosen release.
- 侧重：single-step GUI element grounding
- 观测：screenshot, English instruction
- 任务设置：offline

### 数量记录

- 1,272 instruction–target examples — Hub test split at 0be08781; row count distinct from unique screenshots（来源报告；来源：https://huggingface.co/datasets/bevaya/ScreenSpot/raw/0be08781e2e188582f6131625ae1598d443b4d5d/README.md）

Offline, zero-shot evaluation across mobile, desktop, and web. The card explicitly excludes training use in its intended-use description. Public API reports ungated Parquet files and canonical Hub id bevaya/ScreenSpot; the catalog identity is preserved. Apache-2.0 is the Hub data declaration. No runtime or underlying screenshot rights audit was performed.

## 许可证信息

- 代码：未记录
- 数据：apache-2.0 — https://huggingface.co/datasets/rootsautomation/ScreenSpot
- 文档：未记录
- 权重：未记录

## 一手证据

- https://huggingface.co/api/datasets/rootsautomation/ScreenSpot（获取于 2026-10-16T06:38:26Z；SHA-256：9e2d2a2c076032225911ae1032b548eafa6331ea81a2779632610f0f1c82dfd9）
- https://huggingface.co/datasets/bevaya/ScreenSpot/raw/0be08781e2e188582f6131625ae1598d443b4d5d/README.md（获取于 2026-10-17T14:10:00Z；SHA-256：5ab2240c064502f75a6726311e10e7724ab7055347697f883b15a6ee8e7d00a6）
- https://raw.githubusercontent.com/njucckevin/SeeClick/HEAD/pretrain/screenspot_test.py（获取于 2026-10-17T14:22:04Z；SHA-256：eb72113eefd4868114f8a8105eba2d3385da9034a5b3a4860661e03ae7dcae15）
- https://huggingface.co/api/datasets/rootsautomation/ScreenSpot（获取于 2026-10-16T06:38:26Z；SHA-256：9e2d2a2c076032225911ae1032b548eafa6331ea81a2779632610f0f1c82dfd9）
- https://huggingface.co/api/datasets/bevaya/ScreenSpot（获取于 2026-10-17T19:14:56Z；SHA-256：af0c4babeff84158ff196b54bf47242923bbf502d2805a1dd4eb52dba44be89c）
- https://huggingface.co/api/datasets/rootsautomation/ScreenSpot（获取于 2026-10-17T19:14:56Z；SHA-256：af0c4babeff84158ff196b54bf47242923bbf502d2805a1dd4eb52dba44be89c）
