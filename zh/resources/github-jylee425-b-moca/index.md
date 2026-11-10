# B-MoCA

B-MoCA 是涵盖不同界面配置的移动设备控制基准。

- 目录页面：https://awesomecua.com/zh/resources/github-jylee425-b-moca/
- English：https://awesomecua.com/resources/github-jylee425-b-moca/index.md
- 原始来源：https://github.com/jylee425/b-moca
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：评测、鲁棒性
- 证据核查日期：2026-10-16T06:35:58Z
- ID：github:jylee425/b-moca

- 完整记录 JSON：https://awesomecua.com/resources/github-jylee425-b-moca/record.json

## 结构化规格

- 动作 / 输出：normalized touch/lift coordinate pairs for tap or swipe
- 评测方式：Task success is detected using Appium; positive task reward terminates the episode. Environment variants change device/locale/wallpaper/DPI/dark mode and are loaded as snapshots. The numeric action interface is (touch_y, touch_x, lift_y, lift_x); wrapper/tanh transformations must be kept with the evaluated agent.
- 侧重：Android control across visual/device variation, generalization across environment snapshots
- 观测：screenshot pixels, XML view hierarchy, goal instruction
- 任务设置：交互式

### 数量记录

- 131 个任务定义文件 — asset/tasks/**/*.textproto in retained release/ver.3 tree; source-file inventory distinct from the paper test-task total（计算得出）（来源：https://api.github.com/repos/jylee425/b-moca/git/trees/release/ver.3?recursive=1）
- 35 行环境配置数据 — environments_train.csv, retained release/ver.3 snapshot（计算得出）（来源：https://raw.githubusercontent.com/jylee425/b-moca/HEAD/asset/environments/config/environments_train.csv）
- 10 行环境配置数据 — environments_test.csv, retained release/ver.3 snapshot（计算得出）（来源：https://raw.githubusercontent.com/jylee425/b-moca/HEAD/asset/environments/config/environments_test.csv）

Current source inventory differs in grain from published experiment subsets: 131 definitions and 35/10 configuration rows are separate counts. Setup requires Android API 29, Appium, external app versions and generated AVD snapshots. No apps/snapshots were downloaded or run. Apache-2.0 covers the code.

## 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/jylee425/b-moca/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/jylee425/b-moca/HEAD/readme.md（获取于 2026-10-16T06:35:58Z；SHA-256：bd1354c8008d7d79d4883c0c037b7918392f86fab61391b39b52e507b04672ce）
- https://api.github.com/repos/jylee425/b-moca/git/trees/release/ver.3?recursive=1（获取于 2026-10-17T14:14:05Z；SHA-256：06ba40a5e0d5fb52e7bf5e5df636cb8e8bbbc56a8308dc6d528012489f7650ee）
- https://raw.githubusercontent.com/jylee425/b-moca/HEAD/bmoca/environment/coordinator.py（获取于 2026-10-17T14:24:53Z；SHA-256：34bc0c23949732e0a8091e334d59d2d41cae49a82cde850247aa0e6d739d2464）
- https://raw.githubusercontent.com/jylee425/b-moca/HEAD/bmoca/environment/environment.py（获取于 2026-10-17T14:21:10Z；SHA-256：d866af344c0cff5255b813576f2e9e9c5c2964e6809058b39e2b5180af71d946）
- https://raw.githubusercontent.com/jylee425/b-moca/HEAD/asset/environments/config/environments_train.csv（获取于 2026-10-17T14:23:14Z；SHA-256：c278cc28f8a0667b7fdc6ba638704cfbe43783cd496181231c45c865087543f3）
- https://raw.githubusercontent.com/jylee425/b-moca/HEAD/asset/environments/config/environments_test.csv（获取于 2026-10-17T14:23:15Z；SHA-256：4b92933fe4f4f66e71a694b579940db11bedd5ea8f153752a44e633825b06fa3）
- https://raw.githubusercontent.com/jylee425/b-moca/HEAD/LICENSE（获取于 2026-10-16T06:41:58Z；SHA-256：cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30）
- https://api.github.com/repos/gimme1dollar/b-moca（获取于 2026-10-17T14:14:03Z；SHA-256：9d4706306b04960f0eb4298887496961efdee6b7d41445e82abcac489d63779f）
- https://api.github.com/repos/jylee425/b-moca（获取于 2026-10-17T14:14:04Z；SHA-256：9d4706306b04960f0eb4298887496961efdee6b7d41445e82abcac489d63779f）
