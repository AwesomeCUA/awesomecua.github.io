# PhoneCLI

Mobile-agent harness that crawls an app into a YAML map of screens, replays compiled navigation commands through WebDriverAgent on iOS or ADB on Android, and falls back to a VLM for unseen screens.

- Catalog URL: https://awesomecua.com/resources/github-hkuds-phonecli/
- Original source: https://github.com/HKUDS/PhoneCLI
- Kind: framework
- Review: curated
- Scope: core
- Environments: ios, android
- Topics: mobile-navigation, efficiency, workflow
- Evidence checked: 2026-10-18T11:56:14Z
- ID: github:hkuds/phonecli

## Limitations

Formerly published as HKUDS/OpenPhone; that address now resolves to this repository. phonecli/ is the iOS harness (WebDriverAgent) with prebuilt app maps, and phonecli_android/ runs the AndroidLab suite with compiled maps and a pure-VLM baseline. The repository also holds OpenPhone-3B training and synthetic-data pipelines and vLLM serving scripts; the weights and dataset are separate Hugging Face releases outside this repository record. Its evaluation replaces AndroidLab's rule-based checks with an LLM judge. The LICENSE names AndroidLab's author as a copyright holder.

- Record JSON: https://awesomecua.com/resources/github-hkuds-phonecli/record.json

## License declarations

- code: MIT — https://raw.githubusercontent.com/HKUDS/PhoneCLI/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/HKUDS/PhoneCLI/HEAD/README.md (retrieved 2026-10-18T11:56:14Z; SHA-256 58366c59652c9f03af0b31b094672b10992a82cd0cc63cd2e5884a41f3d8be3c)
- https://raw.githubusercontent.com/HKUDS/PhoneCLI/5adabd19fb56a4849f018f1d516d44d2ce39f3d7/phonecli/README.md (retrieved 2026-10-18T11:55:50Z; SHA-256 921f8d53f52ce87cfc18f26391f4265cfe6ffc57cba8ecbd57702d7eb5a50737)
- https://raw.githubusercontent.com/HKUDS/PhoneCLI/5adabd19fb56a4849f018f1d516d44d2ce39f3d7/phonecli_android/README.md (retrieved 2026-10-18T11:55:50Z; SHA-256 e6e30de3c3011fff356386bcfda3dd17c4de65d959a5ed5c3d30223e11e2fdcc)
- https://raw.githubusercontent.com/HKUDS/PhoneCLI/5adabd19fb56a4849f018f1d516d44d2ce39f3d7/LICENSE (retrieved 2026-10-18T11:55:51Z; SHA-256 b8874bd1ffe72567d69a3f9fd5c8490694e2904cc3e7a9b07673bd58730be278)
- https://raw.githubusercontent.com/HKUDS/PhoneCLI/HEAD/LICENSE (retrieved 2026-10-18T11:56:35Z; SHA-256 b8874bd1ffe72567d69a3f9fd5c8490694e2904cc3e7a9b07673bd58730be278)
- https://api.github.com/repos/HKUDS/OpenPhone (retrieved 2026-10-18T11:55:36Z; SHA-256 7a27d023f3576d7c12cdbe428f920469539fde6419cfcbe52a0cb1e9ba8e89a7)
- https://api.github.com/repos/HKUDS/PhoneCLI (retrieved 2026-10-18T11:55:37Z; SHA-256 7a27d023f3576d7c12cdbe428f920469539fde6419cfcbe52a0cb1e9ba8e89a7)
