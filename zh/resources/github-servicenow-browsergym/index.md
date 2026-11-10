# BrowserGym

为浏览器智能体任务和基准环境提供统一接口。

- 目录页面：https://awesomecua.com/zh/resources/github-servicenow-browsergym/
- English：https://awesomecua.com/resources/github-servicenow-browsergym/index.md
- 原始来源：https://github.com/ServiceNow/BrowserGym
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测
- 证据核查日期：2026-10-16T06:35:57Z
- ID：github:servicenow/browsergym

- 完整记录 JSON：https://awesomecua.com/resources/github-servicenow-browsergym/record.json

## 结构化规格

- 动作 / 输出：element-ID actions, coordinate mouse and keyboard actions, tab/navigation/scroll operations, Python/Playwright action mode
- 评测方式：Gymnasium reset/step interface delegates reward, completion, messages and task info to each adapter’s validate() method. There is no universal BrowserGym success metric or shared task total; retain benchmark/adapter version and action subset for comparisons.
- 侧重：shared browser-agent evaluation interface, benchmark adapters with separate task definitions
- 观测：browser screenshot, DOM snapshot, accessibility tree, tab/URL state, previous action and its error, chat messages and task goal
- 任务设置：混合

### 数量记录

未记录数量。

A framework with interactive browser adapters and a static WebLINX evaluation integration, so the profile setting is mixed. README-listed integrations are components of this framework; their tasks and datasets are separate inventories. Core requires Playwright/Chromium; individual benchmarks have their own setup, credentials, licenses and validation rules. Apache-2.0 covers repository code only. No browser tasks or third-party project code were executed.

## 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/ServiceNow/BrowserGym/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/ServiceNow/BrowserGym/HEAD/README.md（获取于 2026-10-16T06:35:57Z；SHA-256：7b685115ef822989fac9093518d16c46f0202736d005eed56e7f9fc36b43f3ee）
- https://raw.githubusercontent.com/ServiceNow/BrowserGym/HEAD/browsergym/core/src/browsergym/core/env.py（获取于 2026-10-17T14:22:05Z；SHA-256：867cc6efdfead356839fef8a26b492502b8b5e3d165d1b3c17d24aaeec268d63）
- https://raw.githubusercontent.com/ServiceNow/BrowserGym/HEAD/docs/src/core/action_space.rst（获取于 2026-10-17T14:21:11Z；SHA-256：c4bbe6b7d0cb36a5d5effab1aa5568301cead97fe4015273e1b82c667da3823a）
- https://api.github.com/repos/ServiceNow/BrowserGym/git/trees/main?recursive=1（获取于 2026-10-17T14:14:08Z；SHA-256：418efbe8c65ad7ebab61d3a066339876c820a9c957506eb456b8078ab352f6bf）
- https://raw.githubusercontent.com/ServiceNow/BrowserGym/HEAD/LICENSE（获取于 2026-10-16T06:41:57Z；SHA-256：b192c58991e8ff585cc574615d40e74185404d4b96c1109d423071ab1367344b）
