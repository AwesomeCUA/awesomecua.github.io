# Mind2Web-Live

WebCanvas 实时网页基准的任务文件：源自 Mind2Web 的 438 项训练任务和 104 项测试任务，使用 URL 或页面元素上的关键节点检查评估中间进度。

- 目录页面：https://awesomecua.com/zh/resources/url-03ffa3f28413bc2edb1b/
- English：https://awesomecua.com/resources/url-03ffa3f28413bc2edb1b/index.md
- 原始来源：https://huggingface.co/datasets/iMeanAI/Mind2Web-Live
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：评测、网页导航
- 证据核查日期：2026-10-18T15:45:39Z
- ID：url:03ffa3f28413bc2edb1b

## 范围记录

The files hold task instructions, reference task lengths and key-node evaluation functions (URL inclusion or exact match, element path and value matches, and semantic URL and value matches); trajectories and page snapshots are separate data types. Agents run on live websites through the WebCanvas framework, so results depend on site changes, location and time. The test file was revised on 2024-10-24; the 2024-05-28 test file stays under old_version with 104 tasks and 444 key nodes, which with the 1,995 training key nodes gives the 2,439 states the WebCanvas README reports. The card itself links only the WebCanvas repository and declares CC-BY-4.0.

- 完整记录 JSON：https://awesomecua.com/resources/url-03ffa3f28413bc2edb1b/record.json

## 结构化规格

- 格式：JSON
- 模态：task instructions, URL and page-element evaluation functions
- 数据划分：train (2024-05-28 file), test (2024-10-24 file)
- 监督信号：key-node evaluation annotations, reference task lengths

### 数量记录

- 438 个任务 — train file mind2web-live_train_20240528.json at Hub revision 160677b5（计算得出）（来源：https://huggingface.co/datasets/iMeanAI/Mind2Web-Live/resolve/160677b57f6a608e6d63b51849a33d2920b35588/mind2web-live_train_20240528.json）
- 1,995 条关键节点评测条目 — train file mind2web-live_train_20240528.json at Hub revision 160677b5（计算得出）（来源：https://huggingface.co/datasets/iMeanAI/Mind2Web-Live/resolve/160677b57f6a608e6d63b51849a33d2920b35588/mind2web-live_train_20240528.json）
- 104 个任务 — test file mind2web-live_test_20241024.json at Hub revision 160677b5（计算得出）（来源：https://huggingface.co/datasets/iMeanAI/Mind2Web-Live/resolve/160677b57f6a608e6d63b51849a33d2920b35588/mind2web-live_test_20241024.json）
- 443 条关键节点评测条目 — test file mind2web-live_test_20241024.json at Hub revision 160677b5（计算得出）（来源：https://huggingface.co/datasets/iMeanAI/Mind2Web-Live/resolve/160677b57f6a608e6d63b51849a33d2920b35588/mind2web-live_test_20241024.json）
- 542 个任务 — original Mind2Web-Live release as described in the WebCanvas README（来源报告；来源：https://raw.githubusercontent.com/iMeanAI/WebCanvas/b9f289128614cd99b97abd0bb9bfc3a45f0847e0/README.md）

Tasks and key-node evaluation entries are different units. The revised test file has one fewer key node than the original 2024-05-28 test file.

## 许可证信息

- 代码：未记录
- 数据：cc-by-4.0 — https://huggingface.co/datasets/iMeanAI/Mind2Web-Live
- 文档：未记录
- 权重：未记录

## 一手证据

- https://huggingface.co/api/datasets/iMeanAI/Mind2Web-Live（获取于 2026-10-18T15:45:39Z；SHA-256：1d1ea013b8b39f2c526dec3846bd750199c5570c0961b7495ff3d1b99924438d）
- https://huggingface.co/datasets/iMeanAI/Mind2Web-Live/raw/160677b57f6a608e6d63b51849a33d2920b35588/README.md（获取于 2026-10-18T15:45:39Z；SHA-256：8ac014447b87cd4450289e5e3b3254e0f8ad9a90d31e76b0efcb70c402aaa80e）
- https://raw.githubusercontent.com/iMeanAI/WebCanvas/b9f289128614cd99b97abd0bb9bfc3a45f0847e0/README.md（获取于 2026-10-18T15:45:39Z；SHA-256：5b2b4b4ce1241db7fd776f2ba0856ec2e0e441a56fa6461234abe0c6516f643e）
- https://huggingface.co/datasets/iMeanAI/Mind2Web-Live/resolve/160677b57f6a608e6d63b51849a33d2920b35588/mind2web-live_train_20240528.json（获取于 2026-10-18T15:45:39Z；SHA-256：026adb028cc07f72e39af0952c8770fa630d59ea8ceffb4dc4fab5e01fd57b35）
- https://huggingface.co/datasets/iMeanAI/Mind2Web-Live/resolve/160677b57f6a608e6d63b51849a33d2920b35588/mind2web-live_test_20241024.json（获取于 2026-10-18T15:45:40Z；SHA-256：abc2032302fed1ac801539ecc6003dd73ff0aafe824aaf9450e4e504a8ff83f2）
- https://huggingface.co/api/datasets/iMeanAI/Mind2Web-Live（获取于 2026-10-18T15:45:39Z；SHA-256：1d1ea013b8b39f2c526dec3846bd750199c5570c0961b7495ff3d1b99924438d）
