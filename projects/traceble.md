---
layout: page
title: "TraceBLE — Indoor Localization with BLE"
permalink: /projects/traceble/
---

Indoor-positioning system that ingests BLE scans, smooths RSSI values, estimates positions, and exposes a lightweight Flask dashboard for monitoring tracked devices.

### Highlights
- BLE scanning with smoothing, filtering, and calibration routines for reliable RSSI.
- Data collection pipeline for repeatable indoor tests and quick parameter tweaks.
- Flask dashboard for real-time location estimates and device status.

### Approach
- **Signal handling**: Rolling average and outlier rejection on RSSI to reduce noise; configurable window sizes per device class.
- **Localization**: Basic triangulation heuristics with room-aware constraints; optional particle-style smoothing for stability.
- **Backend**: Python services with logging and health checks; CSV/JSON exports for offline analysis.
- **Interface**: Minimal dashboard for live device view and quick tuning of smoothing factors.

### Artifacts
- Code and scripts: <a href="https://github.com/ememchijioke/traceble-indoor-localization">github.com/ememchijioke/traceble-indoor-localization</a>
- Sample datasets and notebooks for replay and validation.
