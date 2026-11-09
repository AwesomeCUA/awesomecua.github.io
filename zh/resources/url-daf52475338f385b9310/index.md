# WildGUI

Video2GUI 发布的 WildGUI 数据：从互联网教程视频提取逐任务 JSONL 轨迹，含网页、桌面和移动端的指令、计划与定位操作，另提供第 1 至 15 部分的截图分片。

- 目录页面：https://awesomecua.com/zh/resources/url-daf52475338f385b9310/
- English：https://awesomecua.com/resources/url-daf52475338f385b9310/index.md
- 原始来源：https://huggingface.co/datasets/xwm/WildGUI
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：跨平台、网页、桌面
- 主题：数据生成、视频、GUI 定位、动作预测
- 证据核查日期：2026-10-18T12:28:47Z
- ID：url:daf52475338f385b9310

## 范围记录

The card describes this as a personally reprocessed annotation release: records were regenerated and cleaned following the annotation workflow, then split so that each JSONL line holds one task with its ordered action trajectory; action parameters are omitted when grounding is unreliable (use_grounding false). The Video2GUI project README links this repository as the WildGUI dataset and names the joker-112/WildGUI_Screenshots repository as the host of the part16-part19 frames. Its figures of about 12M trajectories over more than 1,500 applications and websites describe WildGUI in the paper; the 19 JSONL shards (about 78 GB) were not downloaded, so the Hub record count is not established. The project README says trajectories and grounding boxes were produced by Gemini-3-Pro, so labels are model-generated. The data license is the card's CC-BY-NC-4.0 declaration; the source videos and screenshots keep their own rights, and the Apache-2.0 license of the project repository is not transferred to the data.

- 完整记录 JSON：https://awesomecua.com/resources/url-daf52475338f385b9310/record.json

## 结构化规格

- 格式：JSONL, tar archives of JPEG frames
- 模态：screenshots, instructions, plans, actions, action rationales
- 数据划分：未记录
- 监督信号：video-derived task instructions and plans, model-generated action grounding

### 数量记录

- 19 annotation JSONL shards — Hub repository at revision 75287698 (parts 1-19)（计算得出；来源：https://huggingface.co/api/datasets/xwm/WildGUI/revision/75287698d5876692d4b998be30a724723906e769）
- 4,137 screenshot tar shards — Hub repository at revision 75287698 (parts 1-15)（计算得出；来源：https://huggingface.co/api/datasets/xwm/WildGUI/revision/75287698d5876692d4b998be30a724723906e769）
- ≈ 12,000,000 interaction trajectories — WildGUI as described in the Video2GUI project README; not recounted in this Hub release（来源报告；来源：https://raw.githubusercontent.com/WeiminXiong/Video2GUI/02f61de0c329f6763ce1b130596a650e4a9291f1/README.md）

Shard counts were computed by script from the pinned Hub API file list; they count files. Each JSONL line is one task with its ordered action trajectory; the number of lines was not counted. The reported trajectory figure comes from the project README and may differ from the reprocessed Hub release. Frames for parts 16-19 are in a separate repository.

## 许可证信息

- 代码：未记录
- 数据：cc-by-nc-4.0 — https://huggingface.co/datasets/xwm/WildGUI/raw/75287698d5876692d4b998be30a724723906e769/README.md
- 文档：未记录
- 权重：未记录

## 一手证据

- https://huggingface.co/datasets/xwm/WildGUI/raw/75287698d5876692d4b998be30a724723906e769/README.md（获取于 2026-10-18T12:28:47Z；SHA-256：5bfb27b61da056f73d3d0040098b694b17785bbb56b59ecbc9c10e6a58c82f0a）
- https://huggingface.co/api/datasets/xwm/WildGUI/revision/75287698d5876692d4b998be30a724723906e769（获取于 2026-10-18T12:27:40Z；SHA-256：0f2184af45c554954dcdfaf27d74e3a4907e637b7297ca7b5d34372a3f264c8f）
- https://raw.githubusercontent.com/WeiminXiong/Video2GUI/02f61de0c329f6763ce1b130596a650e4a9291f1/README.md（获取于 2026-10-18T12:27:41Z；SHA-256：5e3e6a0baa737232700c39449d4cbe48dc7e4640fe0de12f521e03b6e7d64f92）
- https://huggingface.co/datasets/xwm/WildGUI/raw/75287698d5876692d4b998be30a724723906e769/README.md（获取于 2026-10-18T12:28:47Z；SHA-256：5bfb27b61da056f73d3d0040098b694b17785bbb56b59ecbc9c10e6a58c82f0a）
