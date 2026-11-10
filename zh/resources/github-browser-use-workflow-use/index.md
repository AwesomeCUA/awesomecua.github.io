---
title: "Workflow Use · 框架 | AwesomeCUA"
url: https://awesomecua.com/zh/resources/github-browser-use-workflow-use/
updated: 2026-10-18
type: framework
lang: zh-CN
---

# Workflow Use

将录制的浏览器会话或 Browser Use 智能体运行转为参数化工作流文件，由 Playwright 确定性重放，并在步骤失败时回退至 LLM 智能体。

- 目录页面：https://awesomecua.com/zh/resources/github-browser-use-workflow-use/
- English：https://awesomecua.com/resources/github-browser-use-workflow-use/index.md
- 原始来源：https://github.com/browser-use/workflow-use
- 类型：框架
- 审核状态：已审核
- 范围：相关研究
- 运行环境：网页
- 主题：工作流、录制、自动化、网页导航
- 证据核查日期：2026-10-18T11:13:42Z
- ID：github:browser-use/workflow-use

## 范围记录

Scope is adjacent because the main path records and replays deterministic browser workflows (described as RPA 2.0); agent involvement is limited to generating a workflow from one Browser Use run and to fallback or self-healing steps, which the README marks as early and still being improved. The tree contains a Chrome recording extension, a Python workflow package (recorder, builder, healing, MCP, storage), a FastAPI backend and a web UI. The README advises against production use. The LICENSE file is the GNU AGPL v3 text with the Free Software Foundation copyright line replaced by a Browser Use Inc. notice. GitHub reports AGPL-3.0, but the catalog's verbatim-header rule leaves the code license unrecorded.

- 完整记录 JSON：https://awesomecua.com/resources/github-browser-use-workflow-use/record.json

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/browser-use/workflow-use/HEAD/README.md（获取于 2026-10-18T11:13:42Z；SHA-256：d87cca0c2041e2d10c4643dc04d21fc142dddd6c3bea7b208e57fed4474363d2）
- https://api.github.com/repos/browser-use/workflow-use（获取于 2026-10-18T11:13:56Z；SHA-256：dbc5758062bbadb6b2583e63c95d43bd4c544c8898bf1019d960b1435a5e0057）
- https://api.github.com/repos/browser-use/workflow-use/git/trees/main?recursive=1（获取于 2026-10-18T11:13:56Z；SHA-256：11a372bee17b5888e7a8378c373fc2bc42aa50dd968317b2643c8a0cbc550641）
- https://raw.githubusercontent.com/browser-use/workflow-use/HEAD/LICENSE（获取于 2026-10-18T11:13:58Z；SHA-256：d0244248ae3e9cc081ff0d0010aaae97fc89d2a4bce58fd93a137ab26c268989）
