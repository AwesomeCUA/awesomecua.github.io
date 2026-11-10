# MobileSafetyBench

MobileSafetyBench 是 Android 模拟器测试环境，借助 ADB 和 Appium 获取观察、执行操作并检查任务是否成功，同时评估移动设备控制智能体的安全性与有用性。

- 目录页面：https://awesomecua.com/zh/resources/github-jylee425-mobilesafetybench/
- English：https://awesomecua.com/resources/github-jylee425-mobilesafetybench/index.md
- 原始来源：https://github.com/jylee425/mobilesafetybench
- 类型：评测基准
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：安全与防护、评测
- 证据核查日期：2026-10-16T06:35:58Z
- ID：github:jylee425/mobilesafetybench

- 完整记录 JSON：https://awesomecua.com/resources/github-jylee425-mobilesafetybench/record.json

## 结构化规格

- 动作 / 输出：tap/long-tap/swipe, navigation buttons and text editing, refuse, ask-consent and complete, task-specific shortcut actions
- 评测方式：Appium-backed task evaluators track goal achievement and harm prevention as separate booleans, plus risk-detection step and completion progress. The base evaluator defaults to max_step=15; task-specific overrides must be retained. Results include separate goal-achievement, harm-prevention, risk-detection and completion-progress measures.
- 侧重：mobile task helpfulness, harm prevention during Android interaction
- 观测：screenshot pixels, parsed UI hierarchy text, task instruction and interaction history
- 任务设置：交互式

### 数量记录

未记录数量。

Inspected release/ver.3 branch exposes task definitions, Android environment and per-task evaluators. It requires Android API 34, Appium/ADB and documented third-party app versions. The action parser includes semantic shortcuts in addition to screen gestures. No corpus task total is inferred from evaluator-module or file counts. Apache-2.0 applies to repository code, not automatically app/data assets.

## 许可证信息

- 代码：Apache-2.0 — https://raw.githubusercontent.com/jylee425/mobilesafetybench/HEAD/LICENSE.txt
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/jylee425/mobilesafetybench/HEAD/README.md（获取于 2026-10-16T06:35:58Z；SHA-256：e733115d9b2fbe910cb3891162f04a89af8cbda25255c8f0bf60f78101e4309a）
- https://api.github.com/repos/jylee425/mobilesafetybench/git/trees/release/ver.3?recursive=1（获取于 2026-10-17T14:14:05Z；SHA-256：8dc66f6c5087a32c5c9fb7b3104ea6f9e0082255e2ba3cf9ba8244ce5a24da6f）
- https://raw.githubusercontent.com/jylee425/mobilesafetybench/HEAD/mobile_safety/environment.py（获取于 2026-10-17T14:21:09Z；SHA-256：f56d6345546a9c67a2113cfba5b7148f5bd6b48fac5c34f1a5f4080e2d81ae2f）
- https://raw.githubusercontent.com/jylee425/mobilesafetybench/HEAD/mobile_safety/component/parser.py（获取于 2026-10-17T14:21:10Z；SHA-256：120487c3a6492371321dd3eebcd65dc59de6a82454d622d7fed3a7d86b8fa6c5）
- https://raw.githubusercontent.com/jylee425/mobilesafetybench/HEAD/mobile_safety/evaluator/_base_evaluator.py（获取于 2026-10-17T14:23:14Z；SHA-256：918e3aa64ab3f578fb54580da123c1ff4508022b64ce74f88ce28c7a612756a4）
- https://raw.githubusercontent.com/jylee425/mobilesafetybench/HEAD/LICENSE.txt（获取于 2026-10-16T06:41:58Z；SHA-256：cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30）
