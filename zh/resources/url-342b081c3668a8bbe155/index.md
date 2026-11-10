# Mobile-Eval-E task definitions

用于 Mobile-Agent-E 长时程、跨应用 Android 评估的任务定义，以含 25 条记录的测试集形式提供，并附有评分标准和人工参考操作字符串。

- 目录页面：https://awesomecua.com/zh/resources/url-342b081c3668a8bbe155/
- English：https://awesomecua.com/resources/url-342b081c3668a8bbe155/index.md
- 原始来源：https://huggingface.co/datasets/mikewang/mobile_eval_e
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：评测、长任务、跨应用
- 证据核查日期：2026-10-18T04:27:15Z
- ID：url:342b081c3668a8bbe155

## 范围记录

The public Hub manifest contains one test Parquet file. This resource is the benchmark’s task-definition package. Card metadata supplies rubrics/reference-operation fields but no data-license declaration or verified automated scorer; the code repository’s MIT license is not transferred to these records.

- 完整记录 JSON：https://awesomecua.com/resources/url-342b081c3668a8bbe155/record.json

## 结构化规格

- 动作 / 输出：未记录
- 评测方式：The published task schema contains rubrics and human_reference_operations. No automated scoring protocol or single numeric agent metric is established by the inspected card; execution uses separately configured Android tooling.
- 侧重：long-horizon multi-app Android task execution
- 观测：task instructions, app/scenario metadata
- 任务设置：interactive

### 数量记录

- 25 task-definition records — Hub test split at revision b8eca829（来源报告；来源：https://huggingface.co/datasets/mikewang/mobile_eval_e/raw/b8eca82988ed8d4f9dec01eaa9d51abf4b35aa83/README.md）

Features are task_id, instruction, type, apps, scenario, rubrics and human-reference operation strings. A task record contains task-definition fields and human-reference operation strings; the counted unit is tasks. Public Parquet inventory was checked but no sample rows were downloaded; companion README limits the tested agent platform to Android.

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 数据审核：A data-license declaration is unrecorded in the inspected task card.
  来源：https://huggingface.co/datasets/mikewang/mobile_eval_e/raw/b8eca82988ed8d4f9dec01eaa9d51abf4b35aa83/README.md

## 一手证据

- https://raw.githubusercontent.com/X-PLUG/MobileAgent/HEAD/Mobile-Agent-E/README.md（获取于 2026-10-18T04:27:15Z；SHA-256：f8515fbce73ea0ef3d1d558d4567bb949244e6384e61c956ba3ddbc27294f0ae）
- https://huggingface.co/api/datasets/mikewang/mobile_eval_e（获取于 2026-10-18T04:33:29Z；SHA-256：f9b10eada9e0a64e26f1a7d477768f218b807103199855d893b3ab07feddc755）
- https://huggingface.co/datasets/mikewang/mobile_eval_e/raw/b8eca82988ed8d4f9dec01eaa9d51abf4b35aa83/README.md（获取于 2026-10-18T04:35:15Z；SHA-256：9fdf43753fbfac9868d8bec57fa5601db3e03ed5c30fb981f9da88f6b75ffcc5）
- https://export.arxiv.org/api/query?id_list=2412.04454%2C2412.04626%2C2412.05467%2C2412.09362%2C2412.09605%2C2412.10342%2C2412.10742%2C2412.10840%2C2412.13103%2C2412.13194%2C2412.13501%2C2412.14161%2C2412.14470%2C2412.16256%2C2412.17589%2C2412.18116%2C2412.18426%2C2412.19723%2C2501.01149%2C2501.04575%2C2501.07572%2C2501.11733%2C2501.12326%2C2501.13896%2C2501.16150%2C2502.01600%2C2502.01977%2C2502.02982%2C2502.06395%2C2502.07949%2C2502.08047%2C2502.08226%2C2502.11357%2C2502.13053%2C2502.13923%2C2502.14282%2C2502.18906%2C2503.00401%2C2503.02268%2C2503.03196%2C2503.04730%2C2503.05143%2C2503.06470%2C2503.09263%2C2503.11069%2C2503.11170%2C2503.12687%2C2503.15661%2C2503.15937%2C2503.16465&max_results=50（获取于 2026-10-16T06:31:38Z；SHA-256：e96b86015c763c780e0430a8d0867b96cae947f50e888b3441c85abcaa42de78）
