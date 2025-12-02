---
layout: page
title: "Case Studies"
subtitle: "Concise narratives: problem → approach → outcome → lessons."
permalink: /case-studies/
---

### Agentic RAG for Support Triage
- **Problem:** High-volume support tickets with inconsistent triage and hallucinated answers from a base chatbot.
- **Approach:** Added retrieval with source diversity, tool-based form filling, and a policy layer for refusals. Evaluated groundedness @K, source entropy, and latency (P50/P95).
- **Outcome:** 27% reduction in escalation volume; P95 latency held at 2.8s with adaptive depth.
- **Lessons:** Source diversity mattered as much as K; policy checks caught most unsafe tool calls.

### Edge LLM for Private Analytics
- **Problem:** Privacy-sensitive field data (limited connectivity) required on-device insights.
- **Approach:** Deployed an 8B quantized model with a safety adapter on gateways; hybrid routing to cloud for long-form tasks; power/thermal testing.
- **Outcome:** Sub-200ms local responses; zero raw logs leaving devices; clear rollback path for models.
- **Lessons:** Quantization tests per hardware target avoided regressions; hashed telemetry was enough for monitoring.

### Synthetic Regression for LLM Safety
- **Problem:** Slow human-heavy regression before weekly model updates.
- **Approach:** Built a mixed real/synthetic test suite with adversarial perturbations and category slices; tracked refusal quality and PII leak rate.
- **Outcome:** Regression time dropped from days to hours; caught tool-abuse regressions before rollout.
- **Lessons:** Kept ≥40% real data to avoid drift; realism scoring prevented overfitting to templates.
