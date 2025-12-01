---
title: "Lightweight ML Observability Without a Platform Team"
subtitle: "Simple patterns to detect drift and keep models honest."
tags: ["monitoring", "mlops"]
thumb: /assets/img/thumb-2.svg
---

You do not need an MLOps platform to monitor models. You need a tight loop that catches issues early and is easy to maintain.

- **Log compact features.** Ship a small, privacy-safe vector of inputs and outputs so you can plot distributions without recreating the full pipeline.
- **Track disagreement.** When humans override the model, record it. Override rates become an early warning for concept drift.
- **Budget for labeling.** A tiny weekly labeling sprint on fresh data beats a one-off labeling push before launch.
- **Alert on shapes, not single numbers.** I alert on KL divergence of key features and on the ratio of high/low confidence predictions instead of a single accuracy figure.
- **Review together.** Pair monitoring with a weekly evaluation review so product, engineering, and DS align on what to fix.

These patterns have worked for small teams that cannot dedicate headcount to platform work but still want trustworthy ML in production.
