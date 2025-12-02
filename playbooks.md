---
layout: page
title: "Playbooks"
subtitle: "Reusable checklists and templates you can adapt quickly."
permalink: /playbooks/
---

### Agentic RAG Evaluation
- Groundedness @K with source diversity and freshness checks.
- Latency budget with per-step logging; adaptive depth when SLA is hit.
- Safety guardrails: refusal quality, tool allow/deny lists, and PII leak tests.
- Artifacts: red-team prompt set, slice config, latency budget template.

### Edge LLM Readiness
- Quantization (4/8-bit) with pre/post accuracy and on-device latency.
- Battery/thermal check (5–10 minute stress); throttle rules if temp > 40°C.
- Privacy-by-design: no raw logs off-device, hashed telemetry only.
- Artifacts: edge test harness, rollout plan (hybrid routing), safety adapter baseline.

### Synthetic Data Without Self-Deception
- Maintain ≥30–50% real data per category; measure lexical diversity.
- Calibrate difficulty (easy/medium/hard) and validate 100 items with humans each sprint.
- Separate reporting for real vs synthetic to avoid “green dashboards, broken product.”
- Artifacts: perturbation scripts (negation/entity swaps), realism scoring rubric.

### Safety & Policy Gate
- Red-team suites per category (PII, jailbreaks, tool abuse).
- Refusal quality scoring (politeness, specificity, consistency).
- Automated PII probes; output sanitization hooks.
- Artifacts: YAML policy config, refusal rubric, tool allow/deny template.
