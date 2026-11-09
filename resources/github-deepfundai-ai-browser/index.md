# AI Browser (DeepFundAI)

Electron desktop browser whose built-in agents, imported from Eko-based npm packages, plan editable multi-step workflows and operate web pages in its own tabs, alongside chat, scheduled tasks and memory.

- Catalog URL: https://awesomecua.com/resources/github-deepfundai-ai-browser/
- Original source: https://github.com/DeepFundAI/ai-browser
- Kind: agent
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, workflow, human-in-the-loop
- Evidence checked: 2026-10-18T15:41:31Z
- ID: github:deepfundai/ai-browser

## Limitations

The repository holds the Next.js and Electron app: tabs as Electron WebContentsView instances (electron/main/services/tab-manager.ts), scheduling, memory, settings, and the agent wiring in electron/main/services/eko-service.ts. The BrowserAgent and FileAgent themselves are imported from the npm packages @jarvis-agent/core and @jarvis-agent/electron (0.3.x), which the README describes as based on Eko; their npm metadata names FellouAI as author and a placeholder repository URL, and their source is not in this tree. In Deep Explore mode the user confirms or edits the generated workflow, and the agent can ask questions during a run. The README calls it a learning project developed and tested mainly with DeepSeek models. Releases ship macOS and Windows installers. Code was read, not run.

- Record JSON: https://awesomecua.com/resources/github-deepfundai-ai-browser/record.json

## License declarations

- code: MIT — https://raw.githubusercontent.com/DeepFundAI/ai-browser/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/DeepFundAI/ai-browser/HEAD/README.md (retrieved 2026-10-18T15:41:31Z; SHA-256 227fc4df2761a0fe4abc714e0f50f55290a351d769a05032f749824b99e02993)
- https://raw.githubusercontent.com/DeepFundAI/ai-browser/1af9ba678f8ab46275baaecacfd1b576cd07d60b/electron/main/services/eko-service.ts (retrieved 2026-10-18T15:41:28Z; SHA-256 c6dafa9e7c30e6b589acaa96b51a3a552b34f55ed76f270c26d28618417acaf1)
- https://raw.githubusercontent.com/DeepFundAI/ai-browser/1af9ba678f8ab46275baaecacfd1b576cd07d60b/electron/main/services/tab-manager.ts (retrieved 2026-10-18T15:41:28Z; SHA-256 4683c4a14967335bbb3aa5b91d010bdeb9ec4783a57f73213918df8935e753c7)
- https://raw.githubusercontent.com/DeepFundAI/ai-browser/1af9ba678f8ab46275baaecacfd1b576cd07d60b/package.json (retrieved 2026-10-18T15:41:29Z; SHA-256 19418f0be5ea19b3c775d4a56fae5dbd08d5de665dadbf58440e47906dea3445)
- https://raw.githubusercontent.com/DeepFundAI/ai-browser/1af9ba678f8ab46275baaecacfd1b576cd07d60b/LICENSE (retrieved 2026-10-18T15:41:29Z; SHA-256 dcf14747aed27f24321ce837c0006d1637c92a818481def3ff5793e2f9aef889)
- https://raw.githubusercontent.com/DeepFundAI/ai-browser/HEAD/LICENSE (retrieved 2026-10-18T15:41:39Z; SHA-256 dcf14747aed27f24321ce837c0006d1637c92a818481def3ff5793e2f9aef889)
