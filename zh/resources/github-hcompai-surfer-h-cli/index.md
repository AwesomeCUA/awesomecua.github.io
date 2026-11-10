# Surfer-H-CLI

已弃用的 H Company Surfer-H 网页智能体运行器：策略模型读取近期 Chrome 截图，Holo 定位器给出点击坐标，Selenium 执行操作，可选验证器检查答案。

- 目录页面：https://awesomecua.com/zh/resources/github-hcompai-surfer-h-cli/
- English：https://awesomecua.com/resources/github-hcompai-surfer-h-cli/index.md
- 原始来源：https://github.com/hcompai/surfer-h-cli
- 类型：智能体
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、GUI 定位、界面理解
- 证据核查日期：2026-10-18T12:33:37Z
- ID：github:hcompai/surfer-h-cli

## 范围记录

Archived on GitHub, and the README marks it deprecated in favour of H Company's hosted Models API and Agent API and the hai-agents clients. The loop keeps the last three screenshots by default for the navigation step, which chooses click_element, write_element, scroll, go_back, refresh, wait, restart or answer; click and write targets are named elements that a localizer model (Holo1 or the structured Holo1.5 path) turns into viewport coordinates for Selenium ActionChains. Models are reached through OpenAI-compatible endpoints: H Company's hosted API, a local vLLM server, or a SageMaker deployment; one script uses GPT-4.1 as validator. A FastAPI agent_server.py and a Next.js frontend stream runs to a browser UI. Root LICENSE is the BSD 3-Clause text with an H Company copyright, covering the repository code.

- 完整记录 JSON：https://awesomecua.com/resources/github-hcompai-surfer-h-cli/record.json

## 许可证信息

- 代码：BSD-3-Clause — https://raw.githubusercontent.com/hcompai/surfer-h-cli/b054d8ebc98c70736741290a63ee77e37edf5e3e/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 代码审核：Root LICENSE reproduces the BSD 3-Clause terms under a 2025 H Company copyright; it covers the repository code, not Holo model weights or third-party services.
  来源：https://raw.githubusercontent.com/hcompai/surfer-h-cli/b054d8ebc98c70736741290a63ee77e37edf5e3e/LICENSE

## 一手证据

- https://raw.githubusercontent.com/hcompai/surfer-h-cli/HEAD/README.md（获取于 2026-10-18T12:33:37Z；SHA-256：1f330f8304b99c38d4abd476b25506b42b153702e6a45f831fd7ee08462e117f）
- https://api.github.com/repos/hcompai/surfer-h-cli/git/commits/b054d8ebc98c70736741290a63ee77e37edf5e3e（获取于 2026-10-18T12:32:49Z；SHA-256：732adaffdf829b9a028d514ee03440e48f6349d7c32dfa129f3dd3711127d835）
- https://raw.githubusercontent.com/hcompai/surfer-h-cli/b054d8ebc98c70736741290a63ee77e37edf5e3e/src/surfer_h_cli/surferh.py（获取于 2026-10-18T12:32:50Z；SHA-256：e986d55278404e3e54e4dad81eee0c17928b9006f094bbc11720c5e3150741be）
- https://raw.githubusercontent.com/hcompai/surfer-h-cli/b054d8ebc98c70736741290a63ee77e37edf5e3e/src/surfer_h_cli/simple_browser.py（获取于 2026-10-18T12:32:50Z；SHA-256：2adb4e214cbd9c21f7a30cdc279eebe2f9d6888103408dfe74d85a950213d08c）
- https://raw.githubusercontent.com/hcompai/surfer-h-cli/b054d8ebc98c70736741290a63ee77e37edf5e3e/src/surfer_h_cli/skills/localization.py（获取于 2026-10-18T12:32:50Z；SHA-256：60619d897fa497a2732b43690aa6b65588dad52be895fb296c0b127ef4a9c059）
- https://raw.githubusercontent.com/hcompai/surfer-h-cli/b054d8ebc98c70736741290a63ee77e37edf5e3e/LICENSE（获取于 2026-10-18T12:32:50Z；SHA-256：176b3dc7bced16601e6b413fd3c58247dfdb072d910db41df453e38526a1f3ea）
