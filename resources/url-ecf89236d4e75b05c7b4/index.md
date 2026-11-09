# Amazon Bedrock AgentCore

AWS managed agent platform whose Browser tool runs isolated cloud browser sessions with automation and live-view streams and optional recording, alongside runtime, memory, gateway and code-execution services.

- Catalog URL: https://awesomecua.com/resources/url-ecf89236d4e75b05c7b4/
- Original source: https://docs.aws.amazon.com/bedrock-agentcore
- Kind: product
- Review: curated
- Scope: adjacent
- Environments: web
- Topics: sandbox, observability
- Evidence checked: 2026-10-19T06:26:59Z
- ID: url:ecf89236d4e75b05c7b4

## Limitations

A general agent hosting platform, so the scope is adjacent. Its computer-interaction component is AgentCore Browser: a containerized browser reached through a WebSocket automation endpoint (usable from Strands, Nova Act or Playwright) and a live-view endpoint where a person can watch the session and interact with it directly. Sessions default to 15 minutes and last at most 8 hours. Session recording, available for custom browsers, stores DOM changes, user actions, console logs and network events in the customer's S3 bucket. Amazon Nova Act (url:dec156cbf0cb1181f7b6) is cataloged separately. The landing URL redirects to its trailing-slash form over plain HTTP, so evidence is read from the HTTPS trailing-slash address. Availability and pricing were not independently tested.

- Record JSON: https://awesomecua.com/resources/url-ecf89236d4e75b05c7b4/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://docs.aws.amazon.com/bedrock-agentcore/ (retrieved 2026-10-19T06:26:59Z; SHA-256 c7c033e95908ee62575257c53b04e48471ae153b54fecebe0e0a18dcf17f6ac1)
- https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/browser-tool.html (retrieved 2026-10-19T06:26:29Z; SHA-256 b45199d057ddc309c83051dcf4379b71aeefcd44e03ba3f8afae585ded759e38)
