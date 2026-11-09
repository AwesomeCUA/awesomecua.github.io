# OpenMobile-2 extended Android AVDs

Seven preconfigured Pixel 6 emulator images for Android API 33 (arm64) with an Apple Silicon install script, listed in the OpenMobile-2 release as its extended Android AVDs.

- Catalog URL: https://awesomecua.com/resources/url-f039da43799772645c92/
- Original source: https://huggingface.co/datasets/yanhhh/AndroidAvd
- Kind: infrastructure
- Review: curated
- Scope: core
- Environments: android
- Topics: sandbox, mobile-navigation
- Evidence checked: 2026-10-18T16:11:45Z
- ID: url:f039da43799772645c92

## Limitations

The Hub dataset repository at revision 4d2be380 has no card and no license declaration. It lists 143 files, about 130 GB by listed sizes: seven AVD directories (MineAndroid plus auto, general-user, manual, senior, student and travel variants), their .ini pointers and install_avd.sh. Every config.ini targets android-33 with arm64-v8a on a Pixel 6 profile and Play Store disabled. The script requires an Apple Silicon Mac, installs the android-33 Google APIs arm64-v8a system image through sdkmanager, and warns that -wipe-data erases the installed apps. The variants' app contents remain undocumented; the images remain uninspected. The OpenMobile2-Code README links this repository as 'Extended Android AVDs' in its release list; that repository's Apache-2.0 license does not cover these images or the Android system image.

- Record JSON: https://awesomecua.com/resources/url-f039da43799772645c92/record.json

## License declarations

- code: not recorded
- data: not recorded
- document: not recorded
- weights: not recorded

- data review: The Hub repository has no card, license tag or license file. The Apache-2.0 license of the linked OpenMobile2-Code repository covers that code only, and the install script accepts the Android SDK licenses for the separately installed system image.
  Sources: https://huggingface.co/api/datasets/yanhhh/AndroidAvd/revision/4d2be38083d1a4395ab0de9749983f7091714070

## Primary evidence

- https://huggingface.co/datasets/yanhhh/AndroidAvd/raw/4d2be38083d1a4395ab0de9749983f7091714070/install_avd.sh (retrieved 2026-10-18T16:11:45Z; SHA-256 22abd21d4dfa43e7cf6eb9ae9ea63b368b754804019283f7d3f01914d8225a51)
- https://huggingface.co/api/datasets/yanhhh/AndroidAvd/revision/4d2be38083d1a4395ab0de9749983f7091714070 (retrieved 2026-10-18T16:13:14Z; SHA-256 adaf8975470b1bc32f97d0385b5f232184182047fd14885ccd2a0e867a88ec20)
- https://huggingface.co/datasets/yanhhh/AndroidAvd/raw/4d2be38083d1a4395ab0de9749983f7091714070/MineAndroid.avd/config.ini (retrieved 2026-10-18T16:11:45Z; SHA-256 dec904f33ded1925234db80035d4e3dadda318fb8a5e362da9a4afa8ab02774f)
- https://raw.githubusercontent.com/OpenMobile2/OpenMobile2-Code/11e26ddc32a98112db38d6363274588cb2387817/README.md (retrieved 2026-10-18T16:11:45Z; SHA-256 485279038266d9454df75e27a80a0a0d71c24e90700126d2dcfa0da921b1273d)
