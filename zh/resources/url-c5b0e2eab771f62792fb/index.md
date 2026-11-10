---
title: "laya-browser · 模型 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/url-c5b0e2eab771f62792fb/
updated: 2026-10-18
type: model
lang: zh-CN
---

# laya-browser

基于 322M 参数 laya 编码器微调的非生成式浏览器智能体策略；单次前向计算读取页面文本和可交互元素列表，选出下一步操作及目标元素。

- 目录页面：https://awesomecua.com/zh/resources/url-c5b0e2eab771f62792fb/
- English：https://awesomecua.com/resources/url-c5b0e2eab771f62792fb/index.md
- 原始来源：https://huggingface.co/cklxx/laya-browser
- 类型：模型
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、动作预测、效率
- 证据核查日期：2026-10-18T12:13:54Z
- ID：url:c5b0e2eab771f62792fb

## 范围记录

Built as the per-step decision head of the jev-ultrafast browser agent. The remote code builds each request from the page URL, title, up to 1,200 characters of page text, the interactive elements with their roles and the last ten actions; it takes no screenshot, and a separate local LLM writes the text that TYPE_TEXT enters. The repository also ships a jev-ultrafast-compatible server, evaluation suites, training pipeline code, a harness patch and result logs. The card reports 11 to 14 of 54 multi-step tasks on held-out real sites for version v19s and 22 to 27 ms per decision on one RTX 4070 Ti SUPER; these are publisher measurements. The card metadata declares Apache-2.0 and says the training datasets keep their own licenses.

- 完整记录 JSON：https://awesomecua.com/resources/url-c5b0e2eab771f62792fb/record.json

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：apache-2.0 — https://huggingface.co/cklxx/laya-browser/raw/645cf366a2ae35f1086e8c20eff48f909bb49206/README.md

## 一手证据

- https://huggingface.co/cklxx/laya-browser/raw/645cf366a2ae35f1086e8c20eff48f909bb49206/README.md（获取于 2026-10-18T12:13:54Z；SHA-256：09dd7dc3675472a53ee8ab2996ae28ba7831e384503d889947b9811959f540e2）
- https://huggingface.co/api/models/cklxx/laya-browser/revision/645cf366a2ae35f1086e8c20eff48f909bb49206（获取于 2026-10-18T12:13:55Z；SHA-256：cf1089fa62e9a7f942c4bf071708d47d72b712ab9a99b5ba930341df5169e2ac）
- https://huggingface.co/cklxx/laya-browser/raw/645cf366a2ae35f1086e8c20eff48f909bb49206/modeling_laya_browser.py（获取于 2026-10-18T12:13:55Z；SHA-256：d084f8720ee4a738efc3cee6e0cef78ab983af8cf17939957af2c2265fdd99d1）
- https://huggingface.co/cklxx/laya-browser/raw/645cf366a2ae35f1086e8c20eff48f909bb49206/README.md（获取于 2026-10-18T12:13:54Z；SHA-256：09dd7dc3675472a53ee8ab2996ae28ba7831e384503d889947b9811959f540e2）
