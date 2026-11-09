# FIVE-UI-Evol

Microsoft 单体代码库，涵盖 InfiniteWeb 网站与任务评估器合成、UI-E2I-Synth 元素定位评估脚本、UI-I2E-Bench 排行榜及 UI-Evol 基于轨迹的知识改进。

- 目录页面：https://awesomecua.com/zh/resources/github-microsoft-five-ui-evol/
- English：https://awesomecua.com/resources/github-microsoft-five-ui-evol/index.md
- 原始来源：https://github.com/microsoft/FIVE-UI-Evol
- 类型：框架
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、桌面、跨平台
- 主题：数据生成、GUI 定位、沙箱、记忆
- 证据核查日期：2026-10-19T07:08:30Z
- ID：github:microsoft/five-ui-evol

## 范围记录

The repository was renamed from microsoft/E2I-Synth; both API names return repository 919941789, and the UI-Evol README still clones the old address. InfiniteWeb/ synthesizes multi-page websites with data, APIs, user tasks and dense reward evaluators from a website seed, validates them with generated tests, and includes an OSWorld integration; its README links arXiv 2601.04126 and a Hub dataset. UI-E2I-Synth/ holds only i2e-bench-eval.py, which scores point predictions from an OpenAI-compatible model against UI-I2E-Bench boxes, and the leaderboard site; the instruction-synthesis pipeline itself is not in this tree. UI-Evol/ re-traces actions from screenshot sequences and has an LLM critic refine task knowledge, configured for Azure OpenAI. The root LICENSE is MIT; InfiniteWeb/ and the leaderboard folder carry their own license files. Code was read.

- 完整记录 JSON：https://awesomecua.com/resources/github-microsoft-five-ui-evol/record.json

## 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/microsoft/FIVE-UI-Evol/a07e8ecfad9203c202ba04557f8c5ad9f58d61f1/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 代码审核：The root LICENSE is the MIT permission text under a 'The MIT License (MIT)' title; recorded for the repository's code. InfiniteWeb/ and the leaderboard folder carry their own license files, and no data or weights license is inferred.
  来源：https://raw.githubusercontent.com/microsoft/FIVE-UI-Evol/a07e8ecfad9203c202ba04557f8c5ad9f58d61f1/LICENSE

## 一手证据

- https://raw.githubusercontent.com/microsoft/FIVE-UI-Evol/a07e8ecfad9203c202ba04557f8c5ad9f58d61f1/README.md（获取于 2026-10-19T07:08:30Z；SHA-256：39e3df2f62f2c49750a52696e02228bafcc1c3cf02709e0a91cdc3f916c5ed97）
- https://api.github.com/repos/microsoft/FIVE-UI-Evol/git/trees/a07e8ecfad9203c202ba04557f8c5ad9f58d61f1?recursive=1（获取于 2026-10-19T07:08:31Z；SHA-256：007edd511d3c42740788911931a51bcd3b2b07bd14e7c50032229454bd84eae5）
- https://raw.githubusercontent.com/microsoft/FIVE-UI-Evol/a07e8ecfad9203c202ba04557f8c5ad9f58d61f1/InfiniteWeb/README.md（获取于 2026-10-19T07:08:31Z；SHA-256：3395ff8d8158cd4e8956ab22af4b7d39e51a18f7959e80cd556d8f6a327fdc23）
- https://raw.githubusercontent.com/microsoft/FIVE-UI-Evol/a07e8ecfad9203c202ba04557f8c5ad9f58d61f1/UI-Evol/README.md（获取于 2026-10-19T07:08:31Z；SHA-256：78e818f9bc5f109d478f66a9d530d2dc6ce8f031e753f1bf438a76b587c32948）
- https://raw.githubusercontent.com/microsoft/FIVE-UI-Evol/a07e8ecfad9203c202ba04557f8c5ad9f58d61f1/UI-E2I-Synth/leaderboard/index.html（获取于 2026-10-19T07:08:31Z；SHA-256：9ddfcc1e1898d61fa01197cdb0fafee7990cc92e3671c229ae83634330c66814）
- https://raw.githubusercontent.com/microsoft/FIVE-UI-Evol/a07e8ecfad9203c202ba04557f8c5ad9f58d61f1/UI-E2I-Synth/i2e-bench-eval.py（获取于 2026-10-19T07:08:31Z；SHA-256：504f491e65b1d242644857d5c1ed2cdf86a6c214f252332d4b84a4f31adc6dbc）
- https://raw.githubusercontent.com/microsoft/FIVE-UI-Evol/a07e8ecfad9203c202ba04557f8c5ad9f58d61f1/LICENSE（获取于 2026-10-19T07:08:31Z；SHA-256：b5cb7ff7859e7d282d98fc43ab081b0dda5dc659dc3385cf65740c759a7e6a6c）
- https://api.github.com/repos/microsoft/E2I-Synth（获取于 2026-10-19T07:01:35Z；SHA-256：9432335b90bc431d85803ab4a6789b4a0bf350ac94ccc306bbcf49748e48af9f）
- https://api.github.com/repos/microsoft/FIVE-UI-Evol（获取于 2026-10-19T07:01:36Z；SHA-256：9432335b90bc431d85803ab4a6789b4a0bf350ac94ccc306bbcf49748e48af9f）
