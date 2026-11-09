# OSWorld VirtualBox Ubuntu image

Hub host of the Ubuntu virtual machine archive that OSWorld's VirtualBox provider downloads on x86 hosts and imports with VBoxManage; the repository has no card or license declaration.

- Catalog URL: https://awesomecua.com/resources/url-ce775111626bae220596/
- Original source: https://huggingface.co/datasets/xlangai/ubuntu_x86_virtualbox
- Kind: infrastructure
- Review: curated
- Scope: adjacent
- Environments: desktop, linux
- Topics: sandbox, evaluation
- Evidence checked: 2026-10-18T15:37:25Z
- ID: url:ce775111626bae220596

## Limitations

Adjacent: an environment image that the curated OSWorld benchmark boots when run with VirtualBox, not a benchmark or training set by itself. At revision c4e80049 the repository holds only Ubuntu.zip (12,395,902,743 bytes) and .gitattributes; there is no dataset card, so it names no paper and declares no license, and every license slot stays unknown. At OSWorld commit b138d348 the VirtualBox provider downloads this archive on x86 hosts, extracts it and imports Ubuntu/Ubuntu.ovf from the extracted files with VBoxManage, supports only Ubuntu tasks, and refuses macOS hosts. The name is editorial, taken from that provider. The image was not downloaded or booted.

- Record JSON: https://awesomecua.com/resources/url-ce775111626bae220596/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/xlang-ai/OSWorld/b138d348256078fa634fc3b73567a7337c793e6b/desktop_env/providers/virtualbox/manager.py (retrieved 2026-10-18T15:37:25Z; SHA-256 2c355dd1192f616492db66606235ad85c289d4803ecde02bcff5fafad553724c)
- https://huggingface.co/api/datasets/xlangai/ubuntu_x86_virtualbox (retrieved 2026-10-18T15:37:25Z; SHA-256 644415a48604c773f9c8609b3aadca548d249a9ff125abb28f89da5fd0a5efad)
- https://huggingface.co/api/datasets/xlangai/ubuntu_x86_virtualbox/tree/c4e8004908e84c58e2d7e9d799121486803ca2ac (retrieved 2026-10-18T15:37:25Z; SHA-256 34e5ac9fcc430391b8550f22bcb9185b6fd8febbb6c573351c6310d25ee7386c)
