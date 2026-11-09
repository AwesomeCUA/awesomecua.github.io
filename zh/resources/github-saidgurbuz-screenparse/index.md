# ScreenParse Webshot toolkit

ScreenParse 官方代码：Webshot 工具集使用 Playwright 渲染网站，将可见 DOM 元素记录为带边界框的嵌套标注，再用 Qwen3-VL 重新标注、导出 YOLO 数据并评估解析器。

- 目录页面：https://awesomecua.com/zh/resources/github-saidgurbuz-screenparse/
- English：https://awesomecua.com/resources/github-saidgurbuz-screenparse/index.md
- 原始来源：https://github.com/Saidgurbuz/screenparse
- 类型：框架
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：界面理解、数据生成、评测
- 证据核查日期：2026-10-18T15:41:48Z
- ID：github:saidgurbuz/screenparse

## 范围记录

The README calls this the official code release for the ICML 2026 paper and links the ScreenParse dataset and the ScreenVLM and ScreenParser checkpoints on Hugging Face; none of them is stored in this repository, and the only training script, scripts/train.py, trains Ultralytics YOLO detectors. At commit b294659b, webshot/src/webshot/worker.py drives Chromium through Playwright, dismisses cookie banners and overlays, and records each visible DOM element's tag, role, attributes, text, bounding rectangle and parent and child indices with a screenshot; vlm_refine.py and vlm_quality_score.py relabel elements and score annotation quality with Qwen3-VL-8B-Instruct by default through vLLM. The evaluation CLI runs YOLO, RT-DETR, OmniParser weights, Qwen3-VL, InternVL3, Gemini, PaddleOCR-VL and ScreenVLM on YOLO-format, GroundCUA or ScreenSpot data and reports PageIoU, label PageIoU, mAP, recall and NED. The Webshot README reports 771K screenshots and 21M elements for the dataset. MIT covers this code only; dataset and checkpoint terms are declared on their own Hub pages.

- 完整记录 JSON：https://awesomecua.com/resources/github-saidgurbuz-screenparse/record.json

## 许可证信息

- 代码：MIT — https://raw.githubusercontent.com/Saidgurbuz/screenparse/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/Saidgurbuz/screenparse/b294659b87fb75f3fd4964310fd2039d385749b3/README.md（获取于 2026-10-18T15:41:48Z；SHA-256：50b7a84830bcbbbe8ace25b163f42df2ede1accd6fccd3b84de807c4cea022c5）
- https://api.github.com/repos/Saidgurbuz/screenparse/git/trees/b294659b87fb75f3fd4964310fd2039d385749b3?recursive=1（获取于 2026-10-18T15:41:49Z；SHA-256：4fc52981fb4436b08410dc6804fc402abf7e2846aa0a497a25a2bb30247304d3）
- https://api.github.com/repos/Saidgurbuz/screenparse/git/commits/b294659b87fb75f3fd4964310fd2039d385749b3（获取于 2026-10-18T15:41:50Z；SHA-256：05221bb76e826548ffe50c72de35d14dfcf84cac210332e8b1d61bd7d1a408e2）
- https://raw.githubusercontent.com/Saidgurbuz/screenparse/b294659b87fb75f3fd4964310fd2039d385749b3/webshot/README.md（获取于 2026-10-18T15:41:48Z；SHA-256：8230a72807ba5a42426b0c37bc9f622535757217639e563052d5376a9457387b）
- https://raw.githubusercontent.com/Saidgurbuz/screenparse/b294659b87fb75f3fd4964310fd2039d385749b3/webshot/src/webshot/worker.py（获取于 2026-10-18T15:41:51Z；SHA-256：4b946c642e62e51ca74223882486f8ea14d60615a3b0c864f81ccead16b6c4cb）
- https://raw.githubusercontent.com/Saidgurbuz/screenparse/b294659b87fb75f3fd4964310fd2039d385749b3/webshot/src/webshot/vlm_refine.py（获取于 2026-10-18T15:41:51Z；SHA-256：bbe1e8d6480be763a960acf26233371436a8c7d56fa1e9453941ddc8e7397125）
- https://raw.githubusercontent.com/Saidgurbuz/screenparse/b294659b87fb75f3fd4964310fd2039d385749b3/webshot/src/webshot/cli.py（获取于 2026-10-18T15:41:51Z；SHA-256：46668f27c02bfb2e72e5e46d367da7edae0a92bc96e6d11eb3ac3e162d03ae6f）
- https://raw.githubusercontent.com/Saidgurbuz/screenparse/b294659b87fb75f3fd4964310fd2039d385749b3/webshot/src/evaluation/cli.py（获取于 2026-10-18T15:41:51Z；SHA-256：3926f452b0ab3d851f4bfb51dd19a9cb9f69a27884af627955a8bf6ebf44ae08）
- https://raw.githubusercontent.com/Saidgurbuz/screenparse/HEAD/LICENSE（获取于 2026-10-18T15:42:37Z；SHA-256：218ebc9b68eff8966a9254026d63d88c67c8e8aa3127de3dda7a66cae7d666a1）
