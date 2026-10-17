# Android in the Wild

Human demonstrations of Android tasks with screenshots and touch actions.

- Catalog URL: https://awesomecua.github.io/resources/component-google-research-android-in-the-wild/
- Original source: https://github.com/google-research/google-research/tree/master/android_in_the_wild
- Kind: dataset
- Review: curated
- Scope: core
- Environments: android
- Topics: data-generation, mobile-navigation
- Evidence checked: 2026-10-16T06:38:29Z
- ID: component:google-research/android_in_the_wild

## Limitations

Inclusion does not establish reproducibility or endorsement.

- Record JSON: https://awesomecua.github.io/resources/component-google-research-android-in-the-wild/record.json

## Structured profile

- formats: GZIP-compressed TFRecord
- modalities: screenshots, instructions, actions
- splits: not recorded
- supervision: interaction trajectories, action prediction

### Count observations

- 715,142 episodes — sum of the five published AitW subsets (reported; source: https://raw.githubusercontent.com/google-research/google-research/master/android_in_the_wild/README.md)
- 5,689,993 action examples — sum of the five published AitW subsets (reported; source: https://raw.githubusercontent.com/google-research/google-research/master/android_in_the_wild/README.md)

Episodes and action examples are different units. The collection combines multi-step subsets and hindsight-labeled single-step tasks; preserve subset and split choices.

## License declarations

- code: Apache-2.0 — https://raw.githubusercontent.com/google-research/google-research/HEAD/LICENSE
- data: not recorded
- document: not recorded
- weights: not recorded

## Primary evidence

- https://raw.githubusercontent.com/google-research/google-research/master/android_in_the_wild/README.md (retrieved 2026-10-16T06:38:29Z; SHA-256 6d8964c95db41dada1d5867e50a5ec61f6cb90595965d0e72e010b8e4a12dcb2)
- https://raw.githubusercontent.com/google-research/google-research/HEAD/LICENSE (retrieved 2026-10-16T06:42:06Z; SHA-256 cfc7749b96f63bd31c3c42b5c471bf756814053e847c10f3eb003417bc523d30)
