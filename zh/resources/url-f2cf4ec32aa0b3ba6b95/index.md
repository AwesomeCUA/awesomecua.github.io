# WaveUI-25k

约 8 万条 UI 元素数据中的 24,978 条子集，将截图和指令与目标边界框、元素名称、描述、类型、OCR、用途及点击预期标注配对。

- 目录页面：https://awesomecua.com/zh/resources/url-f2cf4ec32aa0b3ba6b95/
- English：https://awesomecua.com/resources/url-f2cf4ec32aa0b3ba6b95/index.md
- 原始来源：https://huggingface.co/datasets/agentsea/wave-ui-25k
- 类型：数据集
- 审核状态：已审核
- 范围：核心
- 运行环境：网页、桌面、跨平台
- 主题：GUI 定位、界面理解
- 证据核查日期：2026-10-18T16:19:30Z
- ID：url:f2cf4ec32aa0b3ba6b95

## 范围记录

The card describes this as a subset of a collection of about 80k preprocessed examples built from WebUI, RoboFlow website screenshots and GroundUI-18K, filtered for duplicates, overlaps, low quality and many text elements, with added annotation fields. The publisher's agentsea/wave-ui dataset (Wave UI) has the same 13 fields and 79,412 rows across three splits; the component link rests on that match. Dataset-viewer statistics over 12,493 of the rows (partial) show platform values web, desktop and mobile and source labels including roboflow, webui, mind2web_test_*, omniact, motif, screenspot and agent_studio. The repository declares no license, and the source datasets' terms are not inferred.

- 完整记录 JSON：https://awesomecua.com/resources/url-f2cf4ec32aa0b3ba6b95/record.json

## 结构化规格

- 格式：Parquet
- 模态：images, text, bounding boxes, OCR metadata
- 数据划分：train
- 监督信号：instruction-to-target boxes, element annotations

### 数量记录

- 24,978 rows — train split（来源报告；来源：https://huggingface.co/datasets/agentsea/wave-ui-25k/raw/1b77b749cb4c9936f35838ed8cb0f1b69957ad08/README.md）

The row count comes from the card's dataset_info metadata; rows count labeled element examples, a separate unit from unique screens. The annotation fields are name, description, type, OCR, language, purpose and expectation.

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 数据审核：The WaveUI-25k repository has no license metadata or license file. The compilation license in the separate agentsea/wave-ui repository is not applied here, and the WebUI, RoboFlow and GroundUI-18K source terms are not inferred.
  来源：https://huggingface.co/api/datasets/agentsea/wave-ui-25k

## 一手证据

- https://huggingface.co/api/datasets/agentsea/wave-ui-25k（获取于 2026-10-18T16:19:30Z；SHA-256：b74327a4ecca6fd198ba54ff78b6820a65f6451a7e8af6bf7aaacdb51488b0ec）
- https://huggingface.co/datasets/agentsea/wave-ui-25k/raw/1b77b749cb4c9936f35838ed8cb0f1b69957ad08/README.md（获取于 2026-10-18T16:19:32Z；SHA-256：612d075ed11bba7357482d31b3d0d3dfa6d397babe36a236e6aa218ce6eb5488）
- https://datasets-server.huggingface.co/statistics?dataset=agentsea/wave-ui-25k&config=default&split=train（获取于 2026-10-18T16:19:34Z；SHA-256：7ad5c9887649c0eaaa4180816c5bd8381d5b7e394f665134cfcdc6c01ba61210）
- https://huggingface.co/datasets/agentsea/wave-ui/raw/21dc5aa1b39c038aea30f4572d80edef592b7989/README.md（获取于 2026-10-18T16:19:34Z；SHA-256：27ec13aa77dc55113e4d1a19c2269070e2d69d2fe8df8e2313721a1e3fc66bd9）
- https://huggingface.co/api/datasets/agentsea/wave-ui-25k（获取于 2026-10-18T16:19:30Z；SHA-256：b74327a4ecca6fd198ba54ff78b6820a65f6451a7e8af6bf7aaacdb51488b0ec）
