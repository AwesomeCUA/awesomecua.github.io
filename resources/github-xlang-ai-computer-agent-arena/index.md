# Computer Agent Arena

Crowdsourced arena where users pit two computer-use agents against each other on Ubuntu or Windows VMs; the repository holds the voting frontend, setup presets and 2,010 verified battle sessions.

- Catalog URL: https://awesomecua.com/resources/github-xlang-ai-computer-agent-arena/
- Original source: https://github.com/xlang-ai/computer-agent-arena
- Kind: benchmark
- Review: curated
- Scope: core
- Environments: desktop, linux, windows
- Topics: evaluation, human-in-the-loop
- Evidence checked: 2026-10-20T07:42:02Z
- ID: github:xlang-ai/computer-agent-arena

## Limitations

Platform code from the xlang-ai organization; the repository description and README name ICLR 2026. At the reviewed commit (the second of two) the tree holds the React/TypeScript frontend (dual-agent chat and evaluation panels, a bundled noVNC desktop viewer, trajectory player, ranking and Prolific pages), quick-setup presets for Chrome, LibreOffice and other apps, setup notes for OSWorld's in-VM server and for AWS, VMware and VirtualBox providers, backend/requirements.txt and backend/scripts/sessions_clean_filtered.csv. Although the README describes the full stack, the tree has no Python source: there is no backend/main.py, the server notes refer to main.py and pyxcursor.py files that are absent, and backend/agents is a git submodule pointing to xlang-ai/computer-agent-arena-hub, which the GitHub API did not return at review (404). The CSV has 2,010 verified two-agent sessions started between 2025-02-13 and 2025-05-15 (1,070 Windows, 940 Ubuntu; 653 distinct user IDs) with user-written task instructions, each agent's model and method, per-step feedback and the battle result (751 and 644 wins for the first and second agent, 615 ties). Agents in it are Claude 3.5 and 3.7 Sonnet computer use, OpenAI computer-use-preview, UI-TARS-1.5, a Qwen2.5-VL-72B agent, and GPT-4.1, GPT-4o, o3, o4-mini and Gemini models through a base agent. The frontend evaluation form asks for each agent's correctness (correct, partially correct, wrong) and a pairwise preference (A better, tie, B better, tie with both bad). The README shows an MIT badge and links a LICENSE file, but the tree has no root license file; its only license texts are those of the bundled noVNC viewer. Not a fork, not archived; no release.

- Record JSON: https://awesomecua.com/resources/github-xlang-ai-computer-agent-arena/record.json

## Structured profile

- actions: agent-defined desktop actions
- evaluation: After two agents attempt the same user task on separate virtual machines, the user rates each agent's correctness (correct, partially correct, wrong) and states a pairwise preference (A better, tie, B better, or tie with both bad); per-step feedback is also recorded. The README says the votes feed an ELO leaderboard; the aggregation backend remains outside this repository.
- focus: human pairwise preference between computer-use agents, open-ended user-written tasks
- observations: live Ubuntu or Windows virtual machine desktop shown to the user through VNC, agent-defined observations of that desktop
- setting: interactive

### Count observations

- 2,010 verified two-agent battle sessions — backend/scripts/sessions_clean_filtered.csv (started 2025-02-13 to 2025-05-15) (computed) (computed; source: https://raw.githubusercontent.com/xlang-ai/computer-agent-arena/4536036e8d0a3de9a0de9829c09f4a5916f73013/backend/scripts/sessions_clean_filtered.csv)
- 1,070 verified two-agent battle sessions — Windows sessions in the CSV (computed) (computed; source: https://raw.githubusercontent.com/xlang-ai/computer-agent-arena/4536036e8d0a3de9a0de9829c09f4a5916f73013/backend/scripts/sessions_clean_filtered.csv)
- 940 verified two-agent battle sessions — Ubuntu sessions in the CSV (computed) (computed; source: https://raw.githubusercontent.com/xlang-ai/computer-agent-arena/4536036e8d0a3de9a0de9829c09f4a5916f73013/backend/scripts/sessions_clean_filtered.csv)
- 615 verified two-agent battle sessions — sessions whose battle_result is tie (computed) (computed; source: https://raw.githubusercontent.com/xlang-ai/computer-agent-arena/4536036e8d0a3de9a0de9829c09f4a5916f73013/backend/scripts/sessions_clean_filtered.csv)

Counts are rows of the released CSV, computed with Python's csv module; each row is one session with two agents and a distinct session ID. Agent observations and actions are defined by the agent implementations in the unreleased hub.

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- code review: The README shows an MIT badge and links a LICENSE file, but the complete tree at the reviewed commit has no root license file; its only license texts belong to the bundled noVNC viewer under frontend/public/noVNC, so no grant is established for the repository's own code.
  Sources: https://api.github.com/repos/xlang-ai/computer-agent-arena/git/trees/4536036e8d0a3de9a0de9829c09f4a5916f73013?recursive=1

## Primary evidence

- https://raw.githubusercontent.com/xlang-ai/computer-agent-arena/HEAD/README.md (retrieved 2026-10-20T07:42:02Z; SHA-256 00d3174a9b3e8e3a330dc6cec3b054310f64ec469b6b34d41f1f46b4279a72a2)
- https://api.github.com/repos/xlang-ai/computer-agent-arena/git/trees/4536036e8d0a3de9a0de9829c09f4a5916f73013?recursive=1 (retrieved 2026-10-20T04:30:07Z; SHA-256 1ee818ef657248aca717db0d900e681b9aa17fc4ec2ca8b3b7effe2da9dc2aca)
- https://raw.githubusercontent.com/xlang-ai/computer-agent-arena/4536036e8d0a3de9a0de9829c09f4a5916f73013/README.md (retrieved 2026-10-20T04:30:09Z; SHA-256 00d3174a9b3e8e3a330dc6cec3b054310f64ec469b6b34d41f1f46b4279a72a2)
- https://raw.githubusercontent.com/xlang-ai/computer-agent-arena/4536036e8d0a3de9a0de9829c09f4a5916f73013/.gitmodules (retrieved 2026-10-20T04:30:10Z; SHA-256 a972e48328679c1c89c08490e27b39c25ef7f138fc26122ad0d7f64283d1fb9a)
- https://raw.githubusercontent.com/xlang-ai/computer-agent-arena/4536036e8d0a3de9a0de9829c09f4a5916f73013/backend/desktop_env/server/README.md (retrieved 2026-10-20T04:30:10Z; SHA-256 af2b411ab7c09f148577223a71fb91dc82746b1928a82c6b6f91871b079b15b5)
- https://raw.githubusercontent.com/xlang-ai/computer-agent-arena/4536036e8d0a3de9a0de9829c09f4a5916f73013/backend/scripts/sessions_clean_filtered.csv (retrieved 2026-10-20T04:30:10Z; SHA-256 f1c6dd44d44d45e31671174edb37aa0d02b28f84b2c494ae73caafdd64965dec)
- https://raw.githubusercontent.com/xlang-ai/computer-agent-arena/4536036e8d0a3de9a0de9829c09f4a5916f73013/frontend/src/components/Arena/eval.tsx (retrieved 2026-10-20T04:30:11Z; SHA-256 6d4e406d0ff1d573480bd2bd864ef9b1326b11c6d671ee3690468b925201b8f1)
