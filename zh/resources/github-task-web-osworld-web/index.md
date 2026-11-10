# OSWorld Web

一套以 Docker Compose 编排的自托管 Web 应用，涵盖银行、邮件、CRM、日历、Overleaf 和 AWS 控制台等，经 Caddy 反向代理提供服务，作为 OSWorld-V2 任务所用的网站。

- 目录页面：https://awesomecua.com/zh/resources/github-task-web-osworld-web/
- English：https://awesomecua.com/resources/github-task-web-osworld-web/index.md
- 原始来源：https://github.com/Task-Web/OSWorld-web
- 类型：基础设施
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：沙箱、评测、网页导航
- 证据核查日期：2026-11-10T03:00:59Z
- ID：github:task-web/osworld-web

## 范围记录

Each app is a git submodule with its own web-compose.yml, cloned over SSH, and runs on port 3000 under a configurable HOST_SUFFIX domain. The OSWorld-V2 README pins tags of this repository, such as osworld-v2.1 and v2026.08.08, for its benchmark releases.

- 完整记录 JSON：https://awesomecua.com/resources/github-task-web-osworld-web/record.json

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/Task-Web/OSWorld-web/60c89fe6a8ed934668619d8d26132848239eb8ee/README.md（获取于 2026-11-10T03:00:59Z；SHA-256：9d5b4c9bd1c2b46dace3f7d9b666d8b906d8b19f5ac6d86ce1440570703e6642）
