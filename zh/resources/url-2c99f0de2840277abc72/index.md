# OSWorld-Verified trajectories

收录多种计算机使用智能体在 Ubuntu 上以不同步数预算运行 OSWorld-Verified 的评估轨迹；每个归档含截图、操作、模型推理和逐任务结果，供分析使用。

- 目录页面：https://awesomecua.com/zh/resources/url-2c99f0de2840277abc72/
- English：https://awesomecua.com/resources/url-2c99f0de2840277abc72/index.md
- 原始来源：https://huggingface.co/datasets/xlangai/ubuntu_osworld_verified_trajs
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：桌面、Linux
- 主题：评测
- 证据核查日期：2026-10-18T12:10:51Z
- ID：url:2c99f0de2840277abc72

## 范围记录

The OSWorld project page says all verified trajectories are published in this dataset. Hub API at revision 5473c39e: open access, 100 run archives (99 zip, one tar.gz) plus a README and root all_result.json and args.json files that belong to a single run. Archive names identify the agent or model and often the step budget. The card's totals (15+ model variants, 1000+ episodes, last updated August 2025) predate later uploads, and it calls training on these runs not recommended. The card declares MIT for the data; outputs of third-party models keep their own terms.

- 完整记录 JSON：https://awesomecua.com/resources/url-2c99f0de2840277abc72/record.json

## 结构化规格

- 格式：zip archives, tar.gz archive, JSON
- 模态：screenshots, actions, model reasoning, task results
- 数据划分：未记录
- 监督信号：agent evaluation trajectories

### 数量记录

- 100 run archives — zip and tar.gz files at revision 5473c39e（计算得出；来源：https://huggingface.co/api/datasets/xlangai/ubuntu_osworld_verified_trajs/revision/5473c39e42a538a187a9b2c2b499db59d560fd8c）

A run archive is one agent configuration evaluated on OSWorld-Verified; task and episode counts use different units. Step budgets in archive names range over 15, 50, 100 and more steps, and several agents have one archive per budget.

## 许可证信息

- 代码：未记录
- 数据：mit — https://huggingface.co/datasets/xlangai/ubuntu_osworld_verified_trajs/raw/5473c39e42a538a187a9b2c2b499db59d560fd8c/README.md
- 文档：未记录
- 权重：未记录

## 一手证据

- https://huggingface.co/datasets/xlangai/ubuntu_osworld_verified_trajs/raw/5473c39e42a538a187a9b2c2b499db59d560fd8c/README.md（获取于 2026-10-18T12:10:51Z；SHA-256：3e115bb35b01a9be2c797effd4cac3e9ee2ff10036c0c7df648126db0a5a11fc）
- https://huggingface.co/api/datasets/xlangai/ubuntu_osworld_verified_trajs/revision/5473c39e42a538a187a9b2c2b499db59d560fd8c（获取于 2026-10-18T12:10:51Z；SHA-256：eec08ba92c8032dd5b978c2a488a27d9193c82be741790da7541fe5c19b96928）
- https://raw.githubusercontent.com/OS-World/OS-World.github.io/62f8466dbe8b4d67c104b5ead3f8271da01aa09d/index.html（获取于 2026-10-18T12:10:52Z；SHA-256：bf37e00ce23e8c5472d485a6eb3b291ffa2de220b44040402516e41cbc48c516）
- https://huggingface.co/datasets/xlangai/ubuntu_osworld_verified_trajs/raw/5473c39e42a538a187a9b2c2b499db59d560fd8c/README.md（获取于 2026-10-18T12:10:51Z；SHA-256：3e115bb35b01a9be2c797effd4cac3e9ee2ff10036c0c7df648126db0a5a11fc）
