---
layout: page
title: "Reading & Tools"
subtitle: "Curated links I actually use; update this as my stack evolves."
permalink: /reading-tools/
---

### Papers & Posts
- **Agentic RAG**: “Tool-Integrated Retrieval” (benchmarks on grounding + tools), “Freshness-aware retrieval” for recent events.  
- **MoE & Routing**: Recent MoE routing stability papers; distillation of sparse → dense students.  
- **Edge LLMs**: Quantization benchmarks on mobile/Jetson-class devices; safety adapters on-device.  
- **Evaluation & Safety**: Refusal quality scoring, red-team prompt suites, PII detection techniques.

### Tools & Frameworks
- **LLM Ops**: lite inference servers, tracing/logging hooks, guardrail libraries (allow/deny, PII filters).  
- **RAG**: retrievers with hybrid dense/sparse, rerankers, freshness plugins; evaluation harnesses for groundedness @K and source diversity.  
- **Agents/Tools**: lightweight tool-calling wrappers, form-filling agents, rate-limit and policy middleware.  
- **Edge**: quantization toolkits, on-device latency profilers, model bundle signing/rollback scripts.

### Starters & Templates
- Evaluation plan template (groundedness, safety, latency, cost).  
- Red-team prompt set by category (PII, jailbreak, tool abuse).  
- Edge rollout checklist (battery/thermal, privacy, hybrid routing).  
- Adapter training config (LoRA/IA3) with reproducible settings.

### Recently Found Useful
- **Routing dashboards** for MoE load balance.  
- **Counterfactual probe scripts** (negation/entity swaps) for regression.  
- **Hashed telemetry patterns** for privacy-preserving logging.
