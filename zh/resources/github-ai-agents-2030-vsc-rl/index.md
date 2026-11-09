# VSC-RL code

面向 Android in the Wild 任务的 VSC-RL 训练代码：Gemini 生成的子目标引导 Auto-UI 策略在模拟器中结合学习得到的评判器与 Gemini 终态评估器进行在线训练，基于 DigiRL 构建。

- 目录页面：https://awesomecua.com/zh/resources/github-ai-agents-2030-vsc-rl/
- English：https://awesomecua.com/resources/github-ai-agents-2030-vsc-rl/index.md
- 原始来源：https://github.com/ai-agents-2030/VSC_RL
- 类型：框架
- 审核状态：已审核
- 范围：核心
- 运行环境：Android
- 主题：强化学习、规划、手机操作
- 证据核查日期：2026-10-19T06:58:12Z
- ID：github:ai-agents-2030/vsc_rl

## 范围记录

The README presents the repository as the implementation for reproducing VSC-RL on the AitW benchmarks, built on DigiRL, and names vscrl/algorithms/vscrl/trainer.py and subgoal_generator.py as the core files, with example generated subgoals for the general task set. The project page links this repository and arXiv 2502.07949. subgoal_generator.py prompts Gemini with a downscaled screenshot and a one-shot example to split a task into subtasks. The Android environment (vscrl/environment/android/env.py) drives emulators through Appium and returns screenshots; evaluate.py judges task completion with Gemini 1.5 Pro from the final screenshots. The default config selects the AitW general or web-shopping task set, Auto-UI-Base as the policy and roberta-base as the critic; emulator setup follows DigiRL's instructions. No license file is present.

- 完整记录 JSON：https://awesomecua.com/resources/github-ai-agents-2030-vsc-rl/record.json

## 许可证信息

- 代码：未记录
- 数据：未记录
- 文档：未记录
- 权重：未记录

- 代码审核：The repository tree has no license file and the README states no license.
  来源：https://api.github.com/repos/ai-agents-2030/VSC_RL/git/trees/401d793efa6ab54aa6ff3634590e03c2f13fe487?recursive=1

## 一手证据

- https://raw.githubusercontent.com/ai-agents-2030/VSC_RL/401d793efa6ab54aa6ff3634590e03c2f13fe487/README.md（获取于 2026-10-19T06:58:12Z；SHA-256：36f2f34b8a09839a4b221107d2946cc49c1c4a3a5fc9339182d5ad1779ecc373）
- https://api.github.com/repos/ai-agents-2030/VSC_RL/git/trees/401d793efa6ab54aa6ff3634590e03c2f13fe487?recursive=1（获取于 2026-10-19T06:58:14Z；SHA-256：4642117bc56e5ede1f0c0a3cf98ec4c61d90332534278f364af0eda4583f934b）
- https://raw.githubusercontent.com/ai-agents-2030/VSC_RL/401d793efa6ab54aa6ff3634590e03c2f13fe487/subgoal_generator.py（获取于 2026-10-19T06:58:16Z；SHA-256：1024260b7eeb3c8d6b83c3ba171f84f9eb04743640e09ef40cec2ac045839b88）
- https://raw.githubusercontent.com/ai-agents-2030/VSC_RL/401d793efa6ab54aa6ff3634590e03c2f13fe487/vscrl/environment/android/evaluate.py（获取于 2026-10-19T06:58:16Z；SHA-256：3b6c145f5bbc054ba66fb813c6ffd02c027d81f1ffaaa6766742b803fdddeb7d）
- https://raw.githubusercontent.com/ai-agents-2030/VSC_RL/401d793efa6ab54aa6ff3634590e03c2f13fe487/vscrl/environment/android/env.py（获取于 2026-10-19T06:58:18Z；SHA-256：d17c4727f0a0afa95cdae09d490aaf573917345e3c3b39f2b7c136b8dd4d4646）
- https://raw.githubusercontent.com/ai-agents-2030/VSC_RL/401d793efa6ab54aa6ff3634590e03c2f13fe487/scripts/config/main/default.yaml（获取于 2026-10-19T06:58:18Z；SHA-256：0613f266683adc2c59d7511ee2923d94b68359aabce41945e8469b06cb54c883）
- https://ai-agents-2030.github.io/VSC-RL/（获取于 2026-10-19T06:58:18Z；SHA-256：051df85a1ed6c481d84022855ea4bfc28db35e5668d8812e032ee83fc81f8792）
