# Rico

Mobile app screenshots, view hierarchies, and interaction traces for UI research.

- Catalog URL: https://awesomecua.com/resources/url-0b134b082a7bd507fc6a/
- Original source: https://www.interactionmining.org/archive/rico
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: screen-understanding
- Evidence checked: 2026-10-16T06:38:29Z
- ID: url:0b134b082a7bd507fc6a

## Limitations

The official project page cites the 2017 Rico paper. The project page reports more than 66,000 screens, while the original publication reports more than 72,000. The retained paper and project page report separate screen and app counts; the reason for their difference remains unresolved. App counts also differ: the official project page reports more than 9.3k Android apps and the retained published abstract more than 9.7k. Profile counts use the project-page scope; no reconciliation is inferred.

- Record JSON: https://awesomecua.com/resources/url-0b134b082a7bd507fc6a/record.json

## Structured profile

- Formats: PNG, JSON, CSV, NumPy NPY, GIF
- Modalities: screenshots, Android view hierarchies, gesture traces, transition animations, app/UI metadata
- Splits: not recorded
- Supervision: UI structure and element properties, recorded human interactions, learned UI layout embeddings

### Count observations

- > 66,000 unique UI screens — original Rico downloads described on the project page (reported; source: https://www.interactionmining.org/archive/rico)
- > 9,300 Android apps — original Rico collection described on the project page (reported; source: https://www.interactionmining.org/archive/rico)
- 10,811 human interaction traces — crowd-worker collection before automated exploration (reported; source: https://www.interactionmining.org/archive/rico)

Project-page scope: screenshots paired with augmented view hierarchies, gesture coordinates, layout vectors and metadata. These observations describe screens paired with metadata; action and task totals use different units. The later semantic-annotation download augments the same screen corpus. The retained original paper reports more than 72k screens from more than 9.7k apps while this project page says more than 66k screens and more than 9.3k apps; the difference is unresolved. Profile counts follow the project page; the paper reports a separate screen and app population. No train/validation/test partition or data license is established here; archives were not downloaded.

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://www.interactionmining.org/archive/rico (retrieved 2026-10-16T06:38:29Z; SHA-256 daa370b9aae5bce9f5171ea81fa4574c6155e04177af1db138529efd76377f89)
- https://danafergan.com/publications/deka2017rico.pdf (retrieved 2026-10-17T10:01:32Z; SHA-256 a1ec58c526b152c052c5c72f9a62725f1026b5f0e4f45c8fe85fce284295da84)
