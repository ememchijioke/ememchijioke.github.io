---
title: "A Pragmatic Checklist for Evaluating ML Systems"
subtitle: "From baselines to guardrails: how I keep projects honest."
tags: ["evaluation", "ml", "practices"]
thumb: /assets/img/thumb-1.svg
---

Every ML project I ship starts with a written evaluation plan. It forces alignment on why the model exists, what good looks like, and how we will measure trade-offs once it is live.

**1) Establish a strong baseline.** I default to simple heuristic or rules-based baselines that match the deployment constraints. If a model cannot beat this convincingly, we stop.

**2) Separate offline metrics from decision quality.** I track AUC/accuracy for diagnostics, but I frame success in terms of product outcomes: reduced manual review time, better matches, or fewer bad cases reaching users.

**3) Design for slices, not averages.** I pre-define critical slices (new users, rare categories, low-light images) and budget evaluation time to stress them. Surprises almost always hide in the tails.

**4) Measure risk and trust.** For user-facing models I add human-in-the-loop checks, fallbacks, or holdouts that reduce downside risk while we learn.

**5) Monitor like we mean it.** Post-launch, I track input drift, output distributions, and human override rates. Alerts tie back to the same metrics we used to green-light the model.

If you want a template for your next project, grab the model card and experiment log samples on the Projects page.
