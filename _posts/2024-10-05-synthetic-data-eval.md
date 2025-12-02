---
title: "Synthetic Data for LLM Testing: When It Helps and When It Hurts"
subtitle: "A practical guide to using synthetic test sets without fooling yourself."
tags: ["synthetic-data", "evaluation", "llm"]
thumb: /assets/img/thumb-synth.svg
---

Synthetic data speeds up red-teaming and regression testing, but it can also hide failure modes. Here’s how to use it responsibly in 2025.

## 1) What synthetic data is good for

- **Pattern coverage**: rapidly generate rare edge cases (dates, currencies, multilingual snippets).  
- **Controlled perturbations**: apply negation, entity swap, and adversarial typos to known-good prompts.  
- **Volume**: build 1k–10k-item test sets in hours, not weeks.

<figure>
  <img src="{{ '/assets/img/chart-synth-mix.svg' | relative_url }}" alt="Bar chart showing mix of real vs synthetic cases across categories." />
  <figcaption>Balanced mix: keep ≥30–50% real items per category to avoid drift into synthetic-only behavior.</figcaption>
</figure>

## 2) Where it fails

- **Distribution shift**: model may overfit to templated phrasing; monitor lexical diversity (type-token ratio).  
- **Reality gaps**: factuality and world knowledge don’t improve with synthetic labels.  
- **Style mismatch**: customer tone and messy inputs are hard to mimic; keep real samples in every sprint.

## 3) A workable recipe

- Start with **30–50% real** data per category.  
- Generate synthetic variants using multiple models and prompts; measure lexical diversity.  
- Calibrate difficulty: include easy/medium/hard labels, not just adversarial cases.  
- **Validate with humans**: 100 random items per sprint; annotate realism and usefulness.

## 4) Metrics to track

- **Real/synth ratio per category**.  
- **Lexical diversity** (type-token ratio, distinct-3).  
- **Factuality** on real-only slices.  
- **Regression stability**: % of passing tests across sprints, separated by real vs. synthetic items.

## Takeaways

- Use synthetic data to *augment*, not replace, real cases.  
- Track diversity and realism; keep humans in the loop.  
- Segment reporting by real vs. synthetic to avoid “green dashboards, broken product.”
