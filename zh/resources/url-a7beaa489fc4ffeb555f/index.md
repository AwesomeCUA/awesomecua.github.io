# LearnGUI

面向示范学习的移动端 GUI 基准，包含 2,252 项离线任务和 101 项在线任务及人工逐步轨迹，每项查询配有一至三条相似的辅助示范。

- 目录页面：https://awesomecua.com/zh/resources/url-a7beaa489fc4ffeb555f/
- English：https://awesomecua.com/resources/url-a7beaa489fc4ffeb555f/index.md
- 原始来源：https://huggingface.co/datasets/lgy0404/LearnGUI
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：unspecified
- 主题：评测、手机操作、模仿学习
- 证据核查日期：2026-10-18T16:00:11Z
- ID：url:a7beaa489fc4ffeb555f

## 范围记录

The Hub repository holds data only: multi-part offline screenshot archives, element and instruction annotations, k-shot pairings in task_split.json (the card's tree spells it task_spilit.json), and 101 online task folders with screenshots, UI XML files, operation logs and one screen recording each. Offline-Train (2,001 tasks) doubles as a training split. The card names no mobile operating system. Inference and evaluation code is in the separately cataloged LearnAct repository (github:lgy0404/learnact). The card declares Apache-2.0 for the dataset.

- 完整记录 JSON：https://awesomecua.com/resources/url-a7beaa489fc4ffeb555f/record.json

## 结构化规格

- 动作 / 输出：mobile GUI actions such as CLICK[x,y] and SWIPE[direction]
- 评测方式：The card describes offline evaluation against ground-truth step actions and online evaluation on 101 interactive tasks; no evaluator ships in this dataset repository, and none was run.
- 侧重：demonstration-conditioned mobile GUI task execution, k-shot (k = 1, 2, 3) support demonstrations with instruction, UI and action similarity scores
- 观测：step screenshots, high-level and low-level instructions, UI element annotations, support demonstrations
- 任务设置：mixed

### 数量记录

- 2,353 tasks — LearnGUI offline and online tasks combined（来源报告；来源：https://huggingface.co/datasets/lgy0404/LearnGUI/raw/972aec743f23076855964e867bd93d7aacbac72e/README.md）
- 2,252 tasks — LearnGUI-Offline（来源报告；来源：https://huggingface.co/datasets/lgy0404/LearnGUI/raw/972aec743f23076855964e867bd93d7aacbac72e/README.md）
- 101 tasks — LearnGUI-Online（来源报告；来源：https://huggingface.co/datasets/lgy0404/LearnGUI/raw/972aec743f23076855964e867bd93d7aacbac72e/README.md）
- 2,001 tasks — Offline-Train split（来源报告；来源：https://huggingface.co/datasets/lgy0404/LearnGUI/raw/972aec743f23076855964e867bd93d7aacbac72e/README.md）
- 251 tasks — Offline-Test split（来源报告；来源：https://huggingface.co/datasets/lgy0404/LearnGUI/raw/972aec743f23076855964e867bd93d7aacbac72e/README.md）
- 26,184 step actions — Offline-Train split（来源报告；来源：https://huggingface.co/datasets/lgy0404/LearnGUI/raw/972aec743f23076855964e867bd93d7aacbac72e/README.md）
- 3,469 step actions — Offline-Test split（来源报告；来源：https://huggingface.co/datasets/lgy0404/LearnGUI/raw/972aec743f23076855964e867bd93d7aacbac72e/README.md）
- 1,423 step actions — Online-Test split（来源报告；来源：https://huggingface.co/datasets/lgy0404/LearnGUI/raw/972aec743f23076855964e867bd93d7aacbac72e/README.md）
- 73 applications — LearnGUI offline and online tasks combined（来源报告；来源：https://huggingface.co/datasets/lgy0404/LearnGUI/raw/972aec743f23076855964e867bd93d7aacbac72e/README.md）
- 101 task instruction files — online/low_level_instructions at the inspected revision（计算得出；来源：https://huggingface.co/api/datasets/lgy0404/LearnGUI）
- 101 screen recordings — online/raw_data at the inspected revision（计算得出；来源：https://huggingface.co/api/datasets/lgy0404/LearnGUI）

Task, step-action, application and file counts are different units; these counts are reported separately. Each k-shot table row reuses the same split tasks with a different number of support demonstrations; the 1-, 2- and 3-shot rows describe those same tasks.

## 许可证信息

- 代码：未记录
- 数据：Apache-2.0 — https://huggingface.co/datasets/lgy0404/LearnGUI/raw/972aec743f23076855964e867bd93d7aacbac72e/README.md
- 文档：未记录
- 权重：未记录

- 数据审核：Publisher dataset-card declaration for the LearnGUI release; the LearnAct code repository and app content shown in screenshots are not covered by this evidence.
  来源：https://huggingface.co/datasets/lgy0404/LearnGUI/raw/972aec743f23076855964e867bd93d7aacbac72e/README.md

## 一手证据

- https://huggingface.co/datasets/lgy0404/LearnGUI/raw/972aec743f23076855964e867bd93d7aacbac72e/README.md（获取于 2026-10-18T16:00:11Z；SHA-256：a7c0fae7a067f7b4704170c73589dae43e4df541a80c5f00d0a98f79bb1e7e7c）
- https://huggingface.co/api/datasets/lgy0404/LearnGUI（获取于 2026-10-18T16:00:11Z；SHA-256：19300276c328762286e677eed624bc169c189cafa48571244e791008bf576c50）
- https://huggingface.co/datasets/lgy0404/LearnGUI/raw/972aec743f23076855964e867bd93d7aacbac72e/online/low_level_instructions/AudioRecorderRecordAudio.json（获取于 2026-10-18T16:00:11Z；SHA-256：d5b3c31b62e08bce07270e0f99d0c8608b68f64848251329e725384825b68b5d）
- https://huggingface.co/datasets/lgy0404/LearnGUI/raw/972aec743f23076855964e867bd93d7aacbac72e/README.md（获取于 2026-10-18T16:00:11Z；SHA-256：a7c0fae7a067f7b4704170c73589dae43e4df541a80c5f00d0a98f79bb1e7e7c）
