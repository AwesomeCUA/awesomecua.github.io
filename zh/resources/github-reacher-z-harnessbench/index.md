# HarnessBench

基准测试框架固定基础模型，在各自容器中运行六种浏览器智能体框架，执行 ClawBench 的日常在线任务，并复用其录制与评判流程。

- 目录页面：https://awesomecua.com/zh/resources/github-reacher-z-harnessbench/
- English：https://awesomecua.com/resources/github-reacher-z-harnessbench/index.md
- 原始来源：https://github.com/reacher-z/HarnessBench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航
- 证据核查日期：2026-10-18T16:03:11Z
- ID：github:reacher-z/harnessbench

## 范围记录

Sister project of ClawBench. The repository holds the harness-bench CLI (harness x model x task matrix expansion with credential gating, run, batch and a leaderboard renderer over ClawBench result summaries), six harness adapters (openclaw, hermes, claw-code, browser-use, stagehand, coze-studio), each a Dockerfile, setup script and run script built on the clawbench-base image, and a one-task smoke fixture. The tasks, the five-layer recording and the judge belong to ClawBench; this repository holds the harness, whose run and batch commands call clawbench.run_case and require clawbench-eval 0.2.0 or later. At the inspected commit the README's fixtures/lite.txt 20-task subset is absent from the tree, the browser-use run script calls a run-browser-use.py that neither the tree nor its Dockerfile supplies, and the leaderboard and demo videos are placeholders. stagehand and coze-studio need BrowserBase or Coze credentials.

- 完整记录 JSON：https://awesomecua.com/resources/github-reacher-z-harnessbench/record.json

## 结构化规格

- 动作 / 输出：harness-specific browser actions
- 评测方式：Inherited from ClawBench per the README: five-layer session recordings judged by DOM matching and an LLM judge against human reference runs; the leaderboard partitions pass rates by harness, model and category.
- 侧重：comparison of agent harnesses with the base model held fixed, everyday online tasks in a real browser
- 观测：harness-specific (each adapter drives Chrome its own way, for example over CDP or Playwright)
- 任务设置：interactive

### 数量记录

- 153 tasks — ClawBench shared task pool, held in the separate ClawBench repository（来源报告；来源：https://raw.githubusercontent.com/reacher-z/HarnessBench/HEAD/README.md）
- 6 harness adapters — clawbench.harnesses entry points registered in pyproject.toml（计算得出；来源：https://raw.githubusercontent.com/reacher-z/HarnessBench/d7ff1255d623177b10b59f858a95f48b7bd070e5/pyproject.toml）

Task definitions and judge prompts live in ClawBench. Cloud harnesses without credentials are reported as skipped, not scored as zero. No results were published at the inspected commit.

## 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/reacher-z/HarnessBench/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/reacher-z/HarnessBench/HEAD/README.md（获取于 2026-10-18T16:03:11Z；SHA-256：1c334914871f8ac362cf7e21033e0699e36e9da0fd4fe82b1a747ce9b223cf31）
- https://raw.githubusercontent.com/reacher-z/HarnessBench/d7ff1255d623177b10b59f858a95f48b7bd070e5/pyproject.toml（获取于 2026-10-18T16:02:39Z；SHA-256：fd80d793c455e5c13e8cd455e5a686c036af60ec5c56731b411aa68a60b783f1）
- https://raw.githubusercontent.com/reacher-z/HarnessBench/d7ff1255d623177b10b59f858a95f48b7bd070e5/src/harnessbench/matrix.py（获取于 2026-10-18T16:02:43Z；SHA-256：5c5dc2cb4e363ca2fe1de37982f353b11034f1d65131233047d2a63f0629e4fe）
- https://raw.githubusercontent.com/reacher-z/HarnessBench/d7ff1255d623177b10b59f858a95f48b7bd070e5/src/harnessbench/cli.py（获取于 2026-10-18T16:02:44Z；SHA-256：2b2b3340d03783ba77adc06dbe97df441f58230aeff68ef73f05bd631c658a1c）
- https://raw.githubusercontent.com/reacher-z/HarnessBench/d7ff1255d623177b10b59f858a95f48b7bd070e5/src/harnessbench/harnesses/browser_use/run.sh（获取于 2026-10-18T16:02:45Z；SHA-256：781e8b621ad7ef5e214ae9ea2db825a5168c1c3ce42c0ffa45cef481379d0989）
- https://raw.githubusercontent.com/reacher-z/HarnessBench/d7ff1255d623177b10b59f858a95f48b7bd070e5/src/harnessbench/harnesses/browser_use/Dockerfile（获取于 2026-10-18T16:02:45Z；SHA-256：9520987e628abd8544c45e3a6444893fe7b690daf676dedd247e731cc85f7b00）
- https://raw.githubusercontent.com/reacher-z/HarnessBench/d7ff1255d623177b10b59f858a95f48b7bd070e5/docs/harness-comparison.md（获取于 2026-10-18T16:02:46Z；SHA-256：679b94aab37bd6b0a0daff0a999bd4431b06773a2c1942ab4c34372c3013059a）
- https://raw.githubusercontent.com/reacher-z/HarnessBench/HEAD/LICENSE（获取于 2026-10-18T16:03:20Z；SHA-256：cb861e529412e9eec01498bdf4b74c5ee4f29139737a1193e39b24004019e606）
