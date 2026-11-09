# WebBench

Halluminate 与 Skyvern 的实时网页基准，涵盖 452 个高流量网站上的读取、创建、更新、删除和文件下载任务，包括登录与表单填写，并发布各智能体的运行结果。

- 目录页面：https://awesomecua.com/zh/resources/github-halluminate-webbench/
- English：https://awesomecua.com/resources/github-halluminate-webbench/index.md
- 原始来源：https://github.com/Halluminate/WebBench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航
- 证据核查日期：2026-10-18T11:13:06Z
- ID：github:halluminate/webbench

## 范围记录

The README and dataset card describe 2,454 tasks on 452 websites (category counts summing to 2,454) and an expanded pool of 5,750 tasks. The released webbenchfinal.csv has 2,647 rows with unique IDs and 453 distinct starting URLs, so the released file and the documented total differ. Tasks run on live third-party websites, so content, logins and anti-bot measures change over time. The repository holds the task CSVs and per-agent result files but no evaluation harness; the README points to the leaderboard and technical report for methodology. The Hugging Face dataset card declares MIT for the task data; the repository LICENSE is MIT for the repository. Website content and account requirements belong to the target sites.

- 完整记录 JSON：https://awesomecua.com/resources/github-halluminate-webbench/record.json

## 结构化规格

- 动作 / 输出：browser interactions on live websites
- 评测方式：The repository releases per-agent result files; the scoring procedure is described in the publisher's technical report rather than an executable evaluator in the repository.
- 侧重：live-web task completion, write operations such as account creation, updates and deletions, file downloads
- 观测：未记录
- 任务设置：interactive

### 数量记录

- 2,454 tasks — documented WebBench task set（来源报告；来源：https://raw.githubusercontent.com/Halluminate/WebBench/HEAD/README.md）
- 452 websites — documented site coverage（来源报告；来源：https://raw.githubusercontent.com/Halluminate/WebBench/HEAD/README.md）
- 2,647 task rows — webbenchfinal.csv as released（计算得出；来源：https://raw.githubusercontent.com/Halluminate/WebBench/HEAD/webbenchfinal.csv）

The released CSV has columns ID, Starting URL, Category and Task, with 1,637 READ, 594 CREATE, 206 UPDATE, 166 DELETE and 44 FILE_MANIPULATION rows; the README's category table sums to 2,454. A separate webbench_hitl_final.csv covers human-in-the-loop runs. Record the task file revision with a score.

## 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/Halluminate/WebBench/HEAD/LICENSE
- 数据：MIT — https://huggingface.co/datasets/Halluminate/WebBench/raw/main/README.md
- 文档：未记录
- 权重：未记录

- 数据审核：The dataset card for the Hub copy of the task CSV declares license: mit; this is a data declaration from the dataset card, not inferred from the repository code license.
  来源：https://huggingface.co/datasets/Halluminate/WebBench/raw/main/README.md

## 一手证据

- https://raw.githubusercontent.com/Halluminate/WebBench/HEAD/README.md（获取于 2026-10-18T11:13:06Z；SHA-256：9898c4ea9c7d08c08566893dd6adb6a6ca3d2e3ef85a2dbcbc350b2bd22736b8）
- https://raw.githubusercontent.com/Halluminate/WebBench/HEAD/webbenchfinal.csv（获取于 2026-10-18T11:13:07Z；SHA-256：fd5311a38bdb6f941e8f544150735656c114d76fbfb17193da973d5de0165217）
- https://huggingface.co/datasets/Halluminate/WebBench/raw/main/README.md（获取于 2026-10-18T11:13:09Z；SHA-256：017626f88e56eacdb45d7f8b90540ba4a65fa67b78ea745c026b8c28181dff29）
- https://huggingface.co/api/datasets/Halluminate/WebBench（获取于 2026-10-18T11:13:09Z；SHA-256：fd85246105d23d09511b920505391f1937bbd0ca3037963498edb9744554d593）
- https://raw.githubusercontent.com/Halluminate/WebBench/HEAD/LICENSE（获取于 2026-10-18T11:13:09Z；SHA-256：96804aa272fe40cdfb8b5c8f4d1d94757bcfaf1bf5596fb829214843d2371e58）
- https://raw.githubusercontent.com/Halluminate/WebBench/HEAD/LICENSE（获取于 2026-10-18T11:13:09Z；SHA-256：96804aa272fe40cdfb8b5c8f4d1d94757bcfaf1bf5596fb829214843d2371e58）
