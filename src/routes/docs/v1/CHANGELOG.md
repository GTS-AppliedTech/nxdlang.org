# NXD Changelog

## v1.4.4

### Documentation Navigation Refactor

- Replaced fixed-depth documentation renderer with recursive dropdown navigation.
- Added expandable section hierarchy.
- Improved scalability of documentation index for future growth.
- Exposed previously unreachable Golden Example documentation.
- Restored document link navigation within the documentation index.
- Fixed favicon asset references and removed stale favicon imports.

### Known Issues

- Some document titles do not match their navigation labels.
  - Example: "NXD to Nim Mapping" displaying as "math.nim".

### Planned Improvements

- Add purple title styling to documentation index links.
- Normalize document page titles.
- Clean up unused CSS from the previous index implementation.
- Add metadata tags to all docs