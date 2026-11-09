# DoomArena

A security-testing framework whose attack gateways wrap BrowserGym, OSWorld, tau-bench and mail-agent environments to inject pop-ups, banners and other adversarial content under configurable threat models.

- Catalog URL: https://awesomecua.com/resources/github-servicenow-doomarena/
- Original source: https://github.com/ServiceNow/DoomArena
- Kind: framework
- Review: curated
- Scope: core
- Environments: web, desktop
- Topics: safety-security, evaluation, robustness
- Evidence checked: 2026-10-18T11:02:25Z
- ID: github:servicenow/doomarena

## Limitations

The inspected tree contains separately installable packages for the core attack library and for BrowserGym, OSWorld, tau-bench, MCP, mail-agent and promptceptor integrations, with web attacks (banner, pop-up, injected div and user-generated content) and an OSWorld pop-up inpainting attack. Running the BrowserGym and OSWorld integrations requires those environments and model API keys. Apache-2.0 covers this repository's code; wrapped benchmarks keep their own terms. Project page: https://servicenow.github.io/DoomArena/.

- Record JSON: https://awesomecua.com/resources/github-servicenow-doomarena/record.json

## License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/ServiceNow/DoomArena/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/ServiceNow/DoomArena/HEAD/README.md (retrieved 2026-10-18T11:02:25Z; SHA-256 f9413fac36822485801e4159423c77e0c090968a7bef4a8b0a0e1d1369be439b)
- https://api.github.com/repos/ServiceNow/DoomArena (retrieved 2026-10-18T11:02:32Z; SHA-256 8f9e575fffd303558aa65232fdd47223effb8229600bbacc7cbd9ea7ce28787e)
- https://api.github.com/repos/ServiceNow/DoomArena/git/trees/main?recursive=1 (retrieved 2026-10-18T11:02:33Z; SHA-256 73de9d44b5823e6d1798bc744641cfbda64c097b29e0dc8613527a5a586d9939)
- https://raw.githubusercontent.com/ServiceNow/DoomArena/HEAD/LICENSE (retrieved 2026-10-18T11:02:34Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)
- https://raw.githubusercontent.com/ServiceNow/DoomArena/HEAD/LICENSE (retrieved 2026-10-18T11:02:34Z; SHA-256 c71d239df91726fc519c6eb72d318ec65820627232b2f796219e87dcf35d0ab4)
