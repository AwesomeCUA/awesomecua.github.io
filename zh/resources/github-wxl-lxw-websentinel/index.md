---
title: "WebSentinel detection demo · 工具 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/github-wxl-lxw-websentinel/
updated: 2026-10-18
type: tool
lang: zh-CN
---

# WebSentinel detection demo

WebSentinel 上下文检查演示：GPT-4o 结合页面上下文判断 144 个已提取的注入网页样本中的弹窗、邮件和消息 HTML 片段，并报告漏检数量。

- 目录页面：https://awesomecua.com/zh/resources/github-wxl-lxw-websentinel/
- English：https://awesomecua.com/resources/github-wxl-lxw-websentinel/index.md
- 原始来源：https://github.com/wxl-lxw/WebSentinel
- 类型：工具
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：安全与防护、网页导航
- 证据核查日期：2026-10-18T15:39:22Z
- ID：github:wxl-lxw/websentinel

## 范围记录

The repository holds only README, a figure, demo/detection.py and demo/VPI_data.json; the README's section on running WebSentinel says TBD. The script formats one analyzer prompt per sample (114 pop-up, 20 email and 10 message segments, counted with a script), calls the OpenAI Responses API with gpt-4o, and prints the share labelled clean as the false-negative rate. Segment extraction from raw pages is not included, and no clean pages are in the demo data. No license file was found; neither a code nor a data license is inferred.

- 完整记录 JSON：https://awesomecua.com/resources/github-wxl-lxw-websentinel/record.json

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 代码审核：The inspected tree has no license file and GitHub reports no license.
  来源：https://api.github.com/repos/wxl-lxw/WebSentinel/git/trees/2576819df5d1ca90005ca231ac7ce9a555b4c143?recursive=1

## 一手证据

- https://raw.githubusercontent.com/wxl-lxw/WebSentinel/HEAD/README.md（获取于 2026-10-18T15:39:22Z；SHA-256：d3ebab871167be3344f3e8fff3bbff10e0b8f60a1953a1896c8ea86566ed6a41）
- https://api.github.com/repos/wxl-lxw/WebSentinel（获取于 2026-10-18T15:39:01Z；SHA-256：bc8ab177d88e62d54e90e8138a488044b473ddb9460fdbbf11d48e2f99708fce）
- https://api.github.com/repos/wxl-lxw/WebSentinel/git/trees/2576819df5d1ca90005ca231ac7ce9a555b4c143?recursive=1（获取于 2026-10-18T15:39:01Z；SHA-256：3a3e1d98bcb2402cb159f53ba89ee4d0416c7f59386f0382178beae8309088b6）
- https://raw.githubusercontent.com/wxl-lxw/WebSentinel/2576819df5d1ca90005ca231ac7ce9a555b4c143/demo/detection.py（获取于 2026-10-18T15:39:03Z；SHA-256：1265598a3bd94ede6ac255856904fa72d51d5e4968e2d55cf2fe4bd691d75ce2）
- https://raw.githubusercontent.com/wxl-lxw/WebSentinel/2576819df5d1ca90005ca231ac7ce9a555b4c143/demo/VPI_data.json（获取于 2026-10-18T15:39:03Z；SHA-256：b1268e0fb59f98e0b402ead8ec243370923c43a2af6e36343eddc9e98124adbf）
