---
layout: page
title: "Reinforcement Learning Experiments (CarRacing-v2)"
permalink: /projects/carracing-rl/
---

Learning-driven PPO/SAC experiments on CarRacing-v2 that emphasize clean pipelines, structured logging, and reproducible evaluation for control tasks.

### Highlights
- PPO and SAC baselines with consistent seeding and environment wrappers.
- Training diagnostics: reward curves, episode length tracking, and rollout stats.
- Evaluation harness with saved checkpoints and deterministic test runs.

### Approach
- **Environment setup**: Frame stacking, action smoothing, and observation normalization; wrappers for reproducibility and cleanup.
- **Training loop**: Config-driven runs, periodic evaluation episodes, and artifact saving for later comparison.
- **Analysis**: Simple notebooks for metric inspection and hyperparameter sweeps; attention to reset conditions and failure modes.

### Artifacts
- Code and runs: <a href="https://github.com/ememchijioke/carracing-rl-experiments">github.com/ememchijioke/carracing-rl-experiments</a>
- Logs/checkpoints for comparing policies across seeds and parameter sets.
