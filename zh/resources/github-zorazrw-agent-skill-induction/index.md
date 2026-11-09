# Agent Skill Induction (ASI)

WebArena 智能体技能归纳的官方代码：LLM 评判每条轨迹，将成功任务转为 Python 技能函数，生成的测试通过后才将技能加入动作空间。

- 目录页面：https://awesomecua.com/zh/resources/github-zorazrw-agent-skill-induction/
- English：https://awesomecua.com/resources/github-zorazrw-agent-skill-induction/index.md
- 原始来源：https://github.com/zorazrw/agent-skill-induction
- 类型：框架
- 审核状态：已审核
- 范围：核心
- 运行环境：网页
- 主题：网页导航、工作流、记忆
- 证据核查日期：2026-10-19T07:15:07Z
- ID：github:zorazrw/agent-skill-induction

## 范围记录

Research code by Zora Zhiruo Wang and coauthors. The agent (asi/agent.py) observes BrowserGym pages through the flattened accessibility tree by default, with HTML and screenshot inputs as options, and acts through BrowserGym's action set. run_online.py alternates solving WebArena tasks, judging the trajectory with the autoeval LLM evaluator, inducing website-specific skill functions (asi/induce/induce_actions.py) and testing them before they are added; the README also runs AWM and vanilla baselines from the same script. The repository vendors a copy of BrowserGym packages (browsergym/, Apache-2.0 per their pyproject files) and expects self-hosted WebArena sites. The root LICENSE is CC BY-SA 4.0. No code was run and no result was reproduced.

- 完整记录 JSON：https://awesomecua.com/resources/github-zorazrw-agent-skill-induction/record.json

## 许可证信息

- 代码：CC-BY-SA-4.0 — https://raw.githubusercontent.com/zorazrw/agent-skill-induction/HEAD/LICENSE
- 数据：未记录
- 文档：未记录
- 权重：未记录

## 一手证据

- https://raw.githubusercontent.com/zorazrw/agent-skill-induction/HEAD/README.md（获取于 2026-10-19T07:15:07Z；SHA-256：0fb99c9a06749bb8c1c85eff57308fc77c0e06193aaa3f19d5e65c093947b3f0）
- https://api.github.com/repos/zorazrw/agent-skill-induction/git/trees/377abe0623a37eaf7f03bdd26cb97bb5331acf47（获取于 2026-10-19T07:15:07Z；SHA-256：f8751b33563cab8d178c5cad95b9d151cca907e4474a4eb84a06bd3ed1d2bc99）
- https://raw.githubusercontent.com/zorazrw/agent-skill-induction/377abe0623a37eaf7f03bdd26cb97bb5331acf47/asi/agent.py（获取于 2026-10-18T16:19:59Z；SHA-256：5433022b6e1d11c51f06c3465de737f46c3f92bc918863ead70e0ffb61322320）
- https://raw.githubusercontent.com/zorazrw/agent-skill-induction/377abe0623a37eaf7f03bdd26cb97bb5331acf47/asi/run_online.py（获取于 2026-10-18T16:20:00Z；SHA-256：b5d85eed3c3c5d1601b9a7613ba8adf2ecd65bee1612811ecadf6d78e45e32cb）
- https://raw.githubusercontent.com/zorazrw/agent-skill-induction/377abe0623a37eaf7f03bdd26cb97bb5331acf47/asi/induce/induce_actions.py（获取于 2026-10-18T16:20:00Z；SHA-256：de0d630c27178b651115cba52466b9f7155de03eb7535afc5ec053cfe4c01f64）
- https://raw.githubusercontent.com/zorazrw/agent-skill-induction/377abe0623a37eaf7f03bdd26cb97bb5331acf47/asi/autoeval/evaluate_trajectory.py（获取于 2026-10-18T16:20:00Z；SHA-256：a68f4b730a140058782e75ff8eeb3001601d94f20ae3fd9d9e4ccb5a797374a7）
- https://raw.githubusercontent.com/zorazrw/agent-skill-induction/377abe0623a37eaf7f03bdd26cb97bb5331acf47/browsergym/core/pyproject.toml（获取于 2026-10-18T16:20:01Z；SHA-256：e7b0947791ad9e64aeef81111f89a3934b01afeae98dae307f422d418362211b）
- https://raw.githubusercontent.com/zorazrw/agent-skill-induction/377abe0623a37eaf7f03bdd26cb97bb5331acf47/LICENSE（获取于 2026-10-18T16:20:01Z；SHA-256：da89f9867822be4b8adb1e601d9e9226c195016c6508015eb7593e68ead0c98a）
- https://raw.githubusercontent.com/zorazrw/agent-skill-induction/HEAD/LICENSE（获取于 2026-10-19T07:15:16Z；SHA-256：da89f9867822be4b8adb1e601d9e9226c195016c6508015eb7593e68ead0c98a）
