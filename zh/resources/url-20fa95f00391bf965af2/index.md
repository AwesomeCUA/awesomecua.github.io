# DynamicGUIBench

含 500 项 OSWorld 风格桌面任务的基准，界面会在观察间因脚本化弹窗、定时编辑和列表变化而改变；提供中英双语指令及最终状态评估器。

- 目录页面：https://awesomecua.com/zh/resources/url-20fa95f00391bf965af2/
- English：https://awesomecua.com/resources/url-20fa95f00391bf965af2/index.md
- 原始来源：https://huggingface.co/datasets/L1007555652/osworld_env
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Linux
- 主题：评测、状态追踪、鲁棒性
- 证据核查日期：2026-10-18T15:40:40Z
- ID：url:20fa95f00391bf965af2

## 范围记录

The Hub repository is named osworld_env; its card titles the release DynamicGUIBench. The manifest at revision 44adf69d holds 500 task JSON files under dynamic/ plus per-application asset folders and three stray .nfs files; it contains no agent code. The card states that its Qwen3-VL and UI-TARS results come from the original 150-task release and do not carry over to the 500-task expansion. Tasks run in a separately configured OSWorld environment. No data license is declared.

- 完整记录 JSON：https://awesomecua.com/resources/url-20fa95f00391bf965af2/record.json

## 结构化规格

- 动作 / 输出：desktop GUI actions through a separately configured agent
- 评测方式：Each task JSON names an OSWorld evaluator function with its expected result for an executable end-state check; a config_myself block launches applications and scripts the dynamic events during the run.
- 侧重：desktop task completion when interface state changes between observations
- 观测：English and Chinese task instructions, live desktop application state
- 任务设置：交互式

### 数量记录

- 500 个任务 JSON 文件 — dynamic/ directory at Hub revision 44adf69d（计算得出）（来源：https://huggingface.co/api/datasets/L1007555652/osworld_env）
- 150 个任务 — original verified release before the 20 August 2026 expansion（来源报告；来源：https://huggingface.co/datasets/L1007555652/osworld_env/raw/44adf69d36a9bd27fbf2173fa619eb0ee92da095/README.md）

Computed per-folder task files: Chrome 75, GIMP 45, LibreOffice Calc 50, Impress 42, Writer 50, multi-app 66, OS 42, Thunderbird 44, VLC 38 and VS Code 48. The card groups tasks into interruptive UI states, ephemeral references, dynamic list selection and content-triggered interaction.

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 数据审核：Neither the dataset card nor the Hub metadata declares a license for the task files or assets.
  来源：https://huggingface.co/datasets/L1007555652/osworld_env/raw/44adf69d36a9bd27fbf2173fa619eb0ee92da095/README.md

## 一手证据

- https://huggingface.co/datasets/L1007555652/osworld_env/raw/44adf69d36a9bd27fbf2173fa619eb0ee92da095/README.md（获取于 2026-10-18T15:40:40Z；SHA-256：8492eacf5283bbb02e54c8f4f340bbfebee6539f49f8933743ac310abdf418e0）
- https://huggingface.co/api/datasets/L1007555652/osworld_env（获取于 2026-10-18T15:40:40Z；SHA-256：2f568cf0a9b4a7691097809c10f8455372841d6f09421287e4380b1b3de8e3e0）
- https://huggingface.co/datasets/L1007555652/osworld_env/raw/44adf69d36a9bd27fbf2173fa619eb0ee92da095/dynamic/chrome/chrome_addcart.json（获取于 2026-10-18T15:40:41Z；SHA-256：64334a72b6d5a9e2cf3a04650db9cd4a73fd36919648853ae266fcc88d60bd0b）
