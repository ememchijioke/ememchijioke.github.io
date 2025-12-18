---
layout: page
title: "UAV Multi-Agent Reinforcement Learning (Formation Control)"
permalink: /projects/uav-mappo/
---

Decentralized formation control for quadrotors using a shared-policy MAPPO setup, implemented in PyBullet with a focus on stability, reward design, and repeatable experimentation.

### Highlights
- Shared-policy MAPPO for cooperative flight with collision-avoidance shaping.
- Formation stability benchmarks (spacing tolerance, drift, oscillation checks).
- Structured logging and seed-controlled runs for reproducibility.

### Approach
- **Environment**: PyBullet swarm scenario with configurable spawn spacing and noise; curriculum to increase difficulty across episodes.
- **Reward shaping**: Distance-to-formation center, heading alignment, and penalties for collisions or excessive thrust.
- **Training**: MAPPO with attention-based critic experiments; batch normalization for sensor inputs; entropy tuning for safer exploration.
- **Evaluation**: Success thresholds on formation error, collision counts, and episode stability windows; saved rollouts for visual review.

### Artifacts
- Code and experiments: <a href="https://github.com/ememchijioke/uav-multi-agent-mappo">github.com/ememchijioke/uav-multi-agent-mappo</a>
- Logs and configs: reproducible run scripts with seed and hyperparameter tracking.
