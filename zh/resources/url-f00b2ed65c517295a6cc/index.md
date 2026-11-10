# Computer Use Large (markov-ai)

从互联网收集的 48,478 段经裁剪且无音频的屏幕录制视频，约 12,300 小时，展示 AutoCAD、Blender、Excel、Photoshop、Salesforce 和 VS Code 的使用；附时长元数据，无操作标签。

- 目录页面：https://awesomecua.com/zh/resources/url-f00b2ed65c517295a6cc/
- English：https://awesomecua.com/resources/url-f00b2ed65c517295a6cc/index.md
- 原始来源：https://huggingface.co/datasets/markov-ai/computer-use-large
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面
- 主题：视频、数据生成
- 证据核查日期：2026-10-18T15:51:07Z
- ID：url:f00b2ed65c517295a6cc

## 范围记录

The card says the videos were sourced from the internet, trimmed to screen-recording segments and stripped of audio, and are meant for training and evaluating computer-use agents. Per-folder metadata.jsonl files give file name, category, trimmed duration and segment count only; there are no actions, cursor events or instructions. At Hub revision b50aecce the manifest lists 48,477 MP4 files, one fewer than the card (Excel has 8,110 against 8,111). The repository also holds descriptions.parquet and 48,473 per-video JSON files under descriptions/, beyond the card's documented files; the one inspected file gives the source video's title and channel, transcript text in 10-second windows and a short step description or NO_TASK per window. CC-BY-4.0 is the card's declaration for the videos.

- 完整记录 JSON：https://awesomecua.com/resources/url-f00b2ed65c517295a6cc/record.json

## 结构化规格

- 格式：MP4, JSONL, JSON, Parquet
- 模态：screen-recording video, per-video duration metadata
- 数据划分：train
- 监督信号：unlabeled screen recordings

### 数量记录

- 48,478 videos — all six software categories（来源报告；来源：https://huggingface.co/datasets/markov-ai/computer-use-large/raw/b50aeccec6d24a56ed4f8fbb9f5b2a16846b46a9/README.md）
- ≈ 12,300 hours of video — all six software categories after trimming（来源报告；来源：https://huggingface.co/datasets/markov-ai/computer-use-large/raw/b50aeccec6d24a56ed4f8fbb9f5b2a16846b46a9/README.md）
- 6 software categories — AutoCAD, Blender, Excel, Photoshop, Salesforce, VS Code（来源报告；来源：https://huggingface.co/datasets/markov-ai/computer-use-large/raw/b50aeccec6d24a56ed4f8fbb9f5b2a16846b46a9/README.md）
- 48,477 MP4 files — data/ at Hub revision b50aecce（计算得出；来源：https://huggingface.co/api/datasets/markov-ai/computer-use-large/revision/b50aeccec6d24a56ed4f8fbb9f5b2a16846b46a9）
- 48,473 per-video description JSON files — descriptions/ at Hub revision b50aecce（计算得出；来源：https://huggingface.co/api/datasets/markov-ai/computer-use-large/revision/b50aeccec6d24a56ed4f8fbb9f5b2a16846b46a9）

File counts come from a script over the pinned Hub manifest; the card's per-category table gives Excel 8,111 videos where the manifest has 8,110 MP4 files. The card leaves the description files undocumented; their content was checked in one file only. Videos, hours, categories and files are different units; these counts are reported separately. Each category is one configuration with a single train split.

## 许可证信息

- 代码：未记录
- 数据：CC-BY-4.0 — https://huggingface.co/datasets/markov-ai/computer-use-large/raw/b50aeccec6d24a56ed4f8fbb9f5b2a16846b46a9/README.md
- 文档：未记录
- 权重：未记录

- 数据审核：Dataset-card metadata and License section declare CC-BY-4.0 for this release; the card says the videos were sourced from the internet.
  来源：https://huggingface.co/datasets/markov-ai/computer-use-large/raw/b50aeccec6d24a56ed4f8fbb9f5b2a16846b46a9/README.md

## 一手证据

- https://huggingface.co/datasets/markov-ai/computer-use-large/raw/b50aeccec6d24a56ed4f8fbb9f5b2a16846b46a9/README.md（获取于 2026-10-18T15:51:07Z；SHA-256：4e7feff2c4ea2420856a406dd3d74881928c4b86091412825001cf4610050f78）
- https://huggingface.co/api/datasets/markov-ai/computer-use-large/revision/b50aeccec6d24a56ed4f8fbb9f5b2a16846b46a9（获取于 2026-10-18T15:50:47Z；SHA-256：3b3f16168be7ff108abb2a9e55d716b1336601d33cb7c6b8b8b3729994f2d791）
- https://huggingface.co/datasets/markov-ai/computer-use-large/raw/b50aeccec6d24a56ed4f8fbb9f5b2a16846b46a9/descriptions/vscode/-2x-5DN-caM_descriptions.json（获取于 2026-10-18T15:50:47Z；SHA-256：50f55d2be263484950dc59bceb4b116a8daaeeb8fb38ee7ab6496a8723c29411）
- https://huggingface.co/datasets/markov-ai/computer-use-large/raw/b50aeccec6d24a56ed4f8fbb9f5b2a16846b46a9/README.md（获取于 2026-10-18T15:51:07Z；SHA-256：4e7feff2c4ea2420856a406dd3d74881928c4b86091412825001cf4610050f78）
