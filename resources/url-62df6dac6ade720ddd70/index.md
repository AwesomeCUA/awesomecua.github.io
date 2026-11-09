# AutoBrowser

Chrome side-panel extension that runs a browser-use-style web agent: it indexes a tab's interactive elements and has a user-configured OpenAI-compatible model open tabs, click, type and press keys.

- Catalog URL: https://awesomecua.com/resources/url-62df6dac6ade720ddd70/
- Original source: https://chromewebstore.google.com/detail/autobrowser/lebgieachadpombahcacicmebckokcjl
- Kind: product
- Review: curated
- Scope: core
- Environments: web
- Topics: web-navigation, automation
- Evidence checked: 2026-10-19T06:15:58Z
- ID: url:62df6dac6ade720ddd70

## Limitations

The Chrome Web Store listing names browser-use as its inspiration, shows version 1.1.1 updated February 27, 2025, 38 users and no ratings, and says the developer has not identified as a trader; it links no website or source repository. The inspected version 1.1.1 package has a side panel where the user enters a Base URL, API key and model ID for an OpenAI-compatible chat API. The agent numbers the page's interactive DOM elements and calls four actions (open a new tab, click an element by index, type into an element by index, press a key), which bundled Puppeteer executes through the chrome.debugger protocol. No image input to the model was found in the package. The awesome-web-agents list describes the extension as using Claude Computer Use; the inspected version leaves that claim unsupported.

- Record JSON: https://awesomecua.com/resources/url-62df6dac6ade720ddd70/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://chromewebstore.google.com/detail/autobrowser/lebgieachadpombahcacicmebckokcjl (retrieved 2026-10-19T06:15:58Z; SHA-256 7b37717ce632428036d782bb96c06f3600ee31bf3d2a2fb7bbb749ddafe99f9e)
- https://clients2.google.com/service/update2/crx?response=redirect&prodversion=128.0&acceptformat=crx2,crx3&x=id%3Dlebgieachadpombahcacicmebckokcjl%26uc (retrieved 2026-10-19T06:12:08Z; SHA-256 ea2c0498b2b7b87b619a4cf8737127e8cbbb239ac4a7148695ddb0ac51ffd733)
