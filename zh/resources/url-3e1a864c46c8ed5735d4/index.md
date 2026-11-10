# Agent Humanization Benchmark (AHB) recordings

记录人类与移动端 GUI 智能体完成相同中文 Android 应用任务时的触摸手势和运动传感器数据，附任务列表和元数据，用于训练区分智能体与人类的检测器。

- 目录页面：https://awesomecua.com/zh/resources/url-3e1a864c46c8ed5735d4/
- English：https://awesomecua.com/resources/url-3e1a864c46c8ed5735d4/index.md
- 原始来源：https://huggingface.co/datasets/lyyang2766/Passing-the-Turing-Test-on-Screen-Agent-Humanization-Benchmark
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：安全与防护、手机操作、评测
- 证据核查日期：2026-10-18T15:51:35Z
- ID：url:3e1a864c46c8ed5735d4

## 范围记录

The Hub repository has no dataset card or license file; the arXiv paper and its code repository link it as the released data. The paper reports that all sessions ran on one Xiaomi Mi Max 2 phone with MIUI 11.0.2.0. Per-archive contents remain unverified because the recording archives were outside the reviewed evidence. Event totals are the paper's figures.

- 完整记录 JSON：https://awesomecua.com/resources/url-3e1a864c46c8ed5735d4/record.json

## 结构化规格

- 格式：ZIP archives, plain-text gesture logs, CSV, XLSX, Python pickle
- 模态：touch input events, motion-sensor readings, task instructions
- 数据划分：未记录
- 监督信号：source labels for human users and named agent configurations, task success scoring in the metadata workbook

### 数量记录

- 116 条任务描述 — metadata/tasks.csv at Hub revision 379fd3ef（计算得出）（来源：https://huggingface.co/datasets/lyyang2766/Passing-the-Turing-Test-on-Screen-Agent-Humanization-Benchmark/raw/379fd3ef8b7103757f160ea80ac80998165404fe/metadata/tasks.csv）
- 20 个不重复的应用名称 — metadata/tasks.csv at Hub revision 379fd3ef（计算得出）（来源：https://huggingface.co/datasets/lyyang2766/Passing-the-Turing-Test-on-Screen-Agent-Humanization-Benchmark/raw/379fd3ef8b7103757f160ea80ac80998165404fe/metadata/tasks.csv）
- 21 个应用 — dataset described in the paper, grouped into five clusters（来源报告；来源：https://arxiv.org/html/2604.09574v1）
- 72 个手势录制日志文件 — three agent folders under gesture_recordings/ at Hub revision 379fd3ef（计算得出）（来源：https://huggingface.co/api/datasets/lyyang2766/Passing-the-Turing-Test-on-Screen-Agent-Humanization-Benchmark/revision/379fd3ef8b7103757f160ea80ac80998165404fe）
- 7 个手势录制 ZIP 归档 — gesture_recordings/ at Hub revision 379fd3ef（计算得出）（来源：https://huggingface.co/api/datasets/lyyang2766/Passing-the-Turing-Test-on-Screen-Agent-Humanization-Benchmark/revision/379fd3ef8b7103757f160ea80ac80998165404fe）
- 8 个传感器录制 ZIP 归档 — sensor_recordings/ at Hub revision 379fd3ef（计算得出）（来源：https://huggingface.co/api/datasets/lyyang2766/Passing-the-Turing-Test-on-Screen-Agent-Humanization-Benchmark/revision/379fd3ef8b7103757f160ea80ac80998165404fe）
- 37,768,698 个运动与传感器事件 — four human sub-populations (paper Table 4)（来源报告；来源：https://arxiv.org/html/2604.09574v1）
- 243,090,929 个运动与传感器事件 — five raw agent configurations (paper Table 4)（来源报告；来源：https://arxiv.org/html/2604.09574v1）
- 280,320,486 个运动与传感器事件 — humanized agents without fake actions (paper Table 5)（来源报告；来源：https://arxiv.org/html/2604.09574v1）
- 154,704,094 个运动与传感器事件 — humanized agents with fake actions (paper Table 5)（来源报告；来源：https://arxiv.org/html/2604.09574v1）

Computed counts come from a script over the pinned Hub file list and tasks.csv. tasks.csv names 20 apps while the paper reports 21. The task texts are in Chinese. The code repository says the metadata workbook holds agent, task, timestamp and success-scoring fields. Event counts are per sensor or touch event, and the four totals are separate populations; these counts are reported separately.

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 数据审核：The Hub repository has no dataset card, license metadata or license file at this revision, and the linked code repository declares no license, so no data grant is established.
  来源：https://huggingface.co/api/datasets/lyyang2766/Passing-the-Turing-Test-on-Screen-Agent-Humanization-Benchmark/revision/379fd3ef8b7103757f160ea80ac80998165404fe

## 一手证据

- https://huggingface.co/api/datasets/lyyang2766/Passing-the-Turing-Test-on-Screen-Agent-Humanization-Benchmark/revision/379fd3ef8b7103757f160ea80ac80998165404fe（获取于 2026-10-18T15:51:35Z；SHA-256：76ac24bccdf4d78e87f86f20ceadf0b3cf25e2d008b017c340908d520743ed3b）
- https://huggingface.co/datasets/lyyang2766/Passing-the-Turing-Test-on-Screen-Agent-Humanization-Benchmark/raw/379fd3ef8b7103757f160ea80ac80998165404fe/metadata/tasks.csv（获取于 2026-10-18T15:51:35Z；SHA-256：5b906fbc0df5f8677516c1a2c1e47c7c3a191df320574c5c3a100e99616a5f24）
- https://arxiv.org/html/2604.09574v1（获取于 2026-10-18T15:51:35Z；SHA-256：21c0f429eede313b7e3d302750bb5d77515af84b21c303c5fc5cc39138eb18c3）
- https://raw.githubusercontent.com/Gebro13/Passing-the-Turing-Test-on-Screen-Agent-Humanization-Benchmark/8924fa3e687af6f264d3b91a2d2f48faf8adfd8c/README.md（获取于 2026-10-18T15:51:36Z；SHA-256：20ddeb13fedd6e07ff06104b65a2bd09ff7422b28064d7442196301c5172b062）
- https://huggingface.co/api/datasets/lyyang2766/Passing-the-Turing-Test-on-Screen-Agent-Humanization-Benchmark/revision/379fd3ef8b7103757f160ea80ac80998165404fe（获取于 2026-10-18T15:51:35Z；SHA-256：76ac24bccdf4d78e87f86f20ceadf0b3cf25e2d008b017c340908d520743ed3b）
