# OSWorld Web

Docker Compose stack of self-hosted web applications, such as banking, email, CRM, calendar, Overleaf and an AWS console, served behind a Caddy reverse proxy as the websites for OSWorld-V2 tasks.

- Catalog URL: https://awesomecua.com/resources/github-task-web-osworld-web/
- Original source: https://github.com/Task-Web/OSWorld-web
- Kind: infrastructure
- Review: curated
- Scope: core
- Environments: web
- Topics: sandbox, evaluation, web-navigation
- Evidence checked: 2026-11-10T03:00:59Z
- ID: github:task-web/osworld-web

## Limitations

Each app is a git submodule with its own web-compose.yml, cloned over SSH, and runs on port 3000 under a configurable HOST_SUFFIX domain. The OSWorld-V2 README pins tags of this repository, such as osworld-v2.1 and v2026.08.08, for its benchmark releases.

- Record JSON: https://awesomecua.com/resources/github-task-web-osworld-web/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/Task-Web/OSWorld-web/60c89fe6a8ed934668619d8d26132848239eb8ee/README.md (retrieved 2026-11-10T03:00:59Z; SHA-256 9d5b4c9bd1c2b46dace3f7d9b666d8b906d8b19f5ac6d86ce1440570703e6642)
