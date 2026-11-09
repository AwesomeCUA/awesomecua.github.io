# Sai on OSWorld v2.1 reference-VM runs

收录 Simular 的 Sai 智能体在 Ubuntu 参考虚拟机中完成 108 项 OSWorld v2.1 任务的 134 次有效运行，含 OSWorld 轨迹、智能体记录、运行框架与评分器日志、记分卡及截图和视频 tar 包。

- 目录页面：https://awesomecua.com/zh/resources/url-a19a076a4808a80f6ac8/
- English：https://awesomecua.com/resources/url-a19a076a4808a80f6ac8/index.md
- 原始来源：https://huggingface.co/datasets/simular-ai/sai-osworld-v21-reference-runs
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Linux
- 主题：评测、可观测性
- 证据核查日期：2026-10-18T12:34:54Z
- ID：url:a19a076a4808a80f6ac8

## 范围记录

The card reports agent model anthropic/claude-opus-5 at max thinking effort on a cocoon microVM built from the official OSWorld v2.1 reference image (Ubuntu 22.04.3), and five guest image builds (ref4, ref5, ref7, ref8, ref9) that differ only in environment fixes. A run is clean under the card's own rule: a numeric score, infra ok or proxy_missing, and no disk-full, driver-timeout or forced-zero replay-render failure. Headline scores are the publisher's. Text files are redacted copies (proxy, credentials, per-run GitLab passwords, host names); images and video are unchanged and show masked GitLab login fields and an internal GitLab address in two tasks. The Hub owner simular-ai is the account named Simular, whose site presents Sai as its agent. No license is declared.

- 完整记录 JSON：https://awesomecua.com/resources/url-a19a076a4808a80f6ac8/record.json

## 结构化规格

- 格式：JSONL, JSON, plain-text logs, TAR media archives
- 模态：screenshots, screen recordings, action trajectories, agent messages and events, harness and grader logs, scores
- 数据划分：未记录
- 监督信号：grader task scores, agent-generated trajectories

### 数量记录

- 134 clean task runs — osworld-v2.1 release as described by the card（来源报告；来源：https://huggingface.co/datasets/simular-ai/sai-osworld-v21-reference-runs/raw/abfb5852189f49e81255c38d98287df29ae53658/README.md）
- 134 run/task directories with traj.jsonl — runs/ at Hub revision abfb5852（计算得出；来源：https://huggingface.co/api/datasets/simular-ai/sai-osworld-v21-reference-runs/revision/abfb5852189f49e81255c38d98287df29ae53658）
- 108 distinct OSWorld v2.1 tasks — runs/ at Hub revision abfb5852（计算得出；来源：https://huggingface.co/api/datasets/simular-ai/sai-osworld-v21-reference-runs/revision/abfb5852189f49e81255c38d98287df29ae53658）
- 18 batch directories — runs/ at Hub revision abfb5852（计算得出；来源：https://huggingface.co/api/datasets/simular-ai/sai-osworld-v21-reference-runs/revision/abfb5852189f49e81255c38d98287df29ae53658）
- 134 per-run media TAR archives — media/ at Hub revision abfb5852（计算得出；来源：https://huggingface.co/api/datasets/simular-ai/sai-osworld-v21-reference-runs/revision/abfb5852189f49e81255c38d98287df29ae53658）

Computed counts come from a script over the pinned Hub file list. A run is one task execution; some tasks ran more than once, so 134 run directories cover 108 tasks, grouped under 18 batch directories. Card headline: 0.7731 mean over tasks of each task's mean clean score (first clean run 0.7674, best 0.7938), from the benchmark grader. No task file or media archive was downloaded.

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 数据审核：The card declares no license in its metadata or text, and the file list at this revision has no license file, so no data grant is established; agent outputs and captured third-party content keep their own terms.
  来源：https://huggingface.co/datasets/simular-ai/sai-osworld-v21-reference-runs/raw/abfb5852189f49e81255c38d98287df29ae53658/README.md

## 一手证据

- https://huggingface.co/datasets/simular-ai/sai-osworld-v21-reference-runs/raw/abfb5852189f49e81255c38d98287df29ae53658/README.md（获取于 2026-10-18T12:34:54Z；SHA-256：d11edc15df8bb33c7ef2a49772985166f6fb37107e5e36334653c95108246a12）
- https://huggingface.co/api/datasets/simular-ai/sai-osworld-v21-reference-runs/revision/abfb5852189f49e81255c38d98287df29ae53658（获取于 2026-10-18T12:33:58Z；SHA-256：de6231347f32cc04143d47778d616ef03fc6a6d49ebb69b7992a1f95fc7e92ec）
