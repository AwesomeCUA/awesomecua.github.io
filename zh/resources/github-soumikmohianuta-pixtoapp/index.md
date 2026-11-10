# Pix to App

一个 Python 流程，可将移动应用截图转换为 Android 项目：用 Canny 边缘轮廓构建视图层级，用 Tesseract OCR 识别文本，并生成布局、样式、颜色和字符串 XML。

- 目录页面：https://awesomecua.com/zh/resources/github-soumikmohianuta-pixtoapp/
- English：https://awesomecua.com/resources/github-soumikmohianuta-pixtoapp/index.md
- 原始来源：https://github.com/soumikmohianuta/pixtoapp
- 类型：工具
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：界面理解、界面设计
- 证据核查日期：2026-11-10T03:01:00Z
- ID：github:soumikmohianuta/pixtoapp

## 范围记录

Dependencies are Tesseract OCR, OpenCV, stringtemplate3 and ANTLR, plus a JDK and the Android SDK for the template project; the setup instructions target Windows. The input image path is set in screenshotProcessor.py, which writes activity_main.xml and resource files into the generated project.

- 完整记录 JSON：https://awesomecua.com/resources/github-soumikmohianuta-pixtoapp/record.json

## 许可证信息

- 代码：BSD-3-Clause — https://raw.githubusercontent.com/soumikmohianuta/pixtoapp/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/soumikmohianuta/pixtoapp/f103a580e015ef7779998f14c9533a238a4bf1d1/README.md（获取于 2026-11-10T03:01:00Z；SHA-256：41f05c7fb074c4c6f0a1782bdcc82b1517992457cbc326a7476bae8cfde20253）
- https://raw.githubusercontent.com/soumikmohianuta/pixtoapp/HEAD/LICENSE（获取于 2026-11-10T02:08:20Z；SHA-256：5151d031acfca7100a2cd4108525507093c15c0d52a542e03dd2783ab06d533a）
