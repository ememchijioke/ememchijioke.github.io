---
title: "Evaluating Agentic RAG Systems: Safety, Latency, and Retrieval Quality"
subtitle: "A 2025 playbook for shipping retrieval-augmented agents that behave and respond fast."
tags: ["rag", "evaluation", "agents"]
thumb: /assets/img/thumb-rag.svg
---

Retrieval-augmented generation has evolved into *agentic* workflows: tools, planning, and iterative lookups. The evaluation surface is now wider—latency, hallucination, safety, and retrieval quality all interplay. Here is a compact, field-tested rubric you can run before launch.

## 1) Retrieval quality and grounding

- **Groundedness @K**: sample 200 queries, compute overlap between answer spans and retrieved passages; report % with ≥70% grounded content.  
- **Diversity**: ensure ≥2 sources per answer; measure entropy of source domains to avoid single-source bias.  
- **Freshness checks**: inject queries on recent events and compare to dated corpora; log stale-hit rates.

<figure>
  <img src="{{ '/assets/img/diag-rag-eval.svg' | relative_url }}" alt="Pipeline diagram showing query → retriever → reranker → agent → policy checks → response." />
  <figcaption>Agentic RAG evaluation flow: retrieval quality feeds policy checks before response.</figcaption>
</figure>

## 2) Policy and safety

- **Tool guardrails**: denylist/allowlist for tools; simulate 50 red-team prompts with tool use enabled; target ≤2% unsafe tool calls.  
- **Refusal quality**: measure polite refusals across sensitive categories; track tone via sentiment classifier.  
- **PII handling**: scripted prompts to extract PII from synthetic profiles; measure leak rate and redactability.

## 3) Latency budget

- **P50/P95 targets**: set a hard SLA (e.g., 1.5s P50, 3.0s P95).  
- **Step accounting**: log per-hop latencies (retriever, reranker, model, tool).  
- **Adaptive depth**: add a “budget-aware” policy—skip second retrieval pass if P50 already exceeded.

## 4) Human feedback and live tests

- **Expert checklists**: 30-sample weekly review with domain experts; score clarity, correctness, citations.  
- **Counterfactuals**: perturb top queries (negations, entity swaps) and ensure retrieval/answers adapt.  
- **Rollout**: start with % traffic shadowing and compare against baseline chatbot via win-rate.

## Quick checklist (copy/paste)

- [ ] Groundedness @K >= 80%  
- [ ] ≥2 sources per answer; domain entropy logged  
- [ ] Red-team unsafe tool use ≤ 2%  
- [ ] P50 ≤ 1.5s, P95 ≤ 3.0s with per-step logs  
- [ ] Weekly expert review (30 samples)  
- [ ] Counterfactual prompts in regression suite  
- [ ] Shadow rollout with win-rate vs. baseline

If you want a ready-to-run notebook with these probes (plus logging hooks), reach out and I’ll share the evaluation harness. 
