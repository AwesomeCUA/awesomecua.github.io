---
title: "WebArena-Infinity browser agent… · 数据集 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/url-ccac8d260d6d1d330bf5/
updated: 2026-10-18
type: dataset
lang: zh-CN
---

# WebArena-Infinity browser agent trajectories

收录三个浏览器智能体在 13 个由产品文档生成的 WebArena-Infinity 网页应用上的成功运行，含逐步推理、操作、截图及程序化验证结果。

- 目录页面：https://awesomecua.com/zh/resources/url-ccac8d260d6d1d330bf5/
- English：https://awesomecua.com/resources/url-ccac8d260d6d1d330bf5/index.md
- 原始来源：https://huggingface.co/datasets/webarena-x/webarena-infinity-trajectories
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、数据生成、模仿学习
- 证据核查日期：2026-10-18T12:33:11Z
- ID：url:ccac8d260d6d1d330bf5

## 范围记录

Released by the web-arena-x organization. The card cites a project page (webarena.dev/webarena-infinity); the environment-generation pipeline is the separate repository github.com/web-arena-x/webarena-infinity. Only trajectories that passed the programmatic state checks in a three-repetition final run are included; the sample contains successful trajectories. In the sampled history files, Gemini 2.5 Flash (Browser Use harness) acts on indexed DOM elements, while Kimi K2.5 and Qwen 2.5 VL Plus trajectories store clicks as absolute pixel coordinates next to the model's raw output. MIT is the card's data declaration.

- 完整记录 JSON：https://awesomecua.com/resources/url-ccac8d260d6d1d330bf5/record.json

## 结构化规格

- 格式：JSON, PNG
- 模态：browser screenshots, task instructions, agent reasoning, actions
- 数据划分：未记录
- 监督信号：agent-generated successful trajectories, programmatic state-verifier outcomes

### 数量记录

- 2,329 条轨迹 — manifest.json at revision 73cf7f57: Gemini 2.5 Flash 978, Kimi K2.5 643, Qwen 2.5 VL Plus 708（计算得出）（来源：https://huggingface.co/datasets/webarena-x/webarena-infinity-trajectories/resolve/73cf7f57a6ff61c95722a23bffdd9c1de4069bfe/data/manifest.json）
- 1,124 个不重复的任务（环境与 task_id 组合） — manifest.json at revision 73cf7f57（计算得出）（来源：https://huggingface.co/datasets/webarena-x/webarena-infinity-trajectories/resolve/73cf7f57a6ff61c95722a23bffdd9c1de4069bfe/data/manifest.json）
- 13 个 Web 应用环境 — manifest.json at revision 73cf7f57（计算得出）（来源：https://huggingface.co/datasets/webarena-x/webarena-infinity-trajectories/resolve/73cf7f57a6ff61c95722a23bffdd9c1de4069bfe/data/manifest.json）
- 25,503 个智能体步骤（manifest 中 steps 字段之和） — manifest.json at revision 73cf7f57（计算得出）（来源：https://huggingface.co/datasets/webarena-x/webarena-infinity-trajectories/resolve/73cf7f57a6ff61c95722a23bffdd9c1de4069bfe/data/manifest.json）
- 2,195 个含 history.json 的轨迹文件夹 — Hub file tree at revision 73cf7f57（计算得出）（来源：https://huggingface.co/api/datasets/webarena-x/webarena-infinity-trajectories/revision/73cf7f57a6ff61c95722a23bffdd9c1de4069bfe）

Trajectories, tasks, environments, steps and folders are different units and are counted separately. Each agent has at most one trajectory per task. Manifest difficulty labels: 604 easy, 508 medium, 1,217 hard. The manifest lists 134 Gemini trajectories (89 gitlab-plan-and-track, 45 gmail) whose folders are absent from the file tree at this revision, so 2,195 trajectories have files. Two history files were sampled.

## 许可证信息

- 代码：未记录
- 数据：mit — https://huggingface.co/datasets/webarena-x/webarena-infinity-trajectories/raw/73cf7f57a6ff61c95722a23bffdd9c1de4069bfe/README.md
- 文档：未记录
- 权重：未记录

## 一手证据

- https://huggingface.co/datasets/webarena-x/webarena-infinity-trajectories/raw/73cf7f57a6ff61c95722a23bffdd9c1de4069bfe/README.md（获取于 2026-10-18T12:33:11Z；SHA-256：02e1fc0c65b0314dffb0c141d07048f11a29789938902d617408fc680b3b1031）
- https://huggingface.co/api/datasets/webarena-x/webarena-infinity-trajectories/revision/73cf7f57a6ff61c95722a23bffdd9c1de4069bfe（获取于 2026-10-18T12:32:01Z；SHA-256：b764c9a4e6c27838c898d433b386a0b08a864ba53a0edfa896391db28d939e15）
- https://huggingface.co/datasets/webarena-x/webarena-infinity-trajectories/resolve/73cf7f57a6ff61c95722a23bffdd9c1de4069bfe/data/manifest.json（获取于 2026-10-18T12:32:01Z；SHA-256：d0c98be46cfc16e8eb408c62c774924edd8b7bd9f958fe65d983d55072a38c4d）
- https://huggingface.co/datasets/webarena-x/webarena-infinity-trajectories/resolve/73cf7f57a6ff61c95722a23bffdd9c1de4069bfe/data/gemini/paypal-my-wallet/task_e1/history.json（获取于 2026-10-18T12:33:30Z；SHA-256：3e990071c45afa463fe8372fd613ca78852fc42a35877373336d7a742fee256a）
- https://huggingface.co/datasets/webarena-x/webarena-infinity-trajectories/resolve/73cf7f57a6ff61c95722a23bffdd9c1de4069bfe/data/kimi/gmail/task_e10/history.json（获取于 2026-10-18T12:33:30Z；SHA-256：cfa5f0eda4c0817879c957c70aad7881013a5b4590e0270a4ae86b8e26a0e596）
- https://huggingface.co/datasets/webarena-x/webarena-infinity-trajectories/raw/73cf7f57a6ff61c95722a23bffdd9c1de4069bfe/README.md（获取于 2026-10-18T12:33:11Z；SHA-256：02e1fc0c65b0314dffb0c141d07048f11a29789938902d617408fc680b3b1031）
