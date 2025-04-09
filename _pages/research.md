---
title: "Research"
permalink: /research/
---

## Multi-Agent 6-DOF Trajectory Optimization with Anti-collision Constraints
For large target spacecraft and structures, multiple agents can operate simultaneously to transfer components to and from the service vehicle, with each agent targeting a specific location on the target spacecraft. To ensure a safe and efficient servicing and assembly process, these agents must adhere to various operational constraints, such as anti-collision constraints. In our recent <a href="https://link.springer.com/article/10.1007/s40295-024-00470-7" target="_blank" style="color:blue">publication</a>, we developed a novel and versatile methodology that incorporates path constraints directly into the optimal control formulation without increasing the problem size (i.e., no extra state variables) while permitting the trajectory to be solved in a single arc. This leads to substantial improvements in computational efficiency compared to the current state-of-the-art. 

<br>

<figure>
  <iframe width="100%" height="400" src="YOUR_VIDEO_URL" frameborder="0" allowfullscreen></iframe>
  <figcaption style="text-align: center; font-style: italic;">Video: Simulation of multi-agent 6-DOF trajectory with anti-collision constraints</figcaption>
</figure>

<br>

<div style="display: flex; justify-content: space-between; gap: 20px;">

  <figure style="flex: 1;">
    <img src="/assets/images/your-image-1.png" alt="Figure 1" style="width: 100%;" />
    <figcaption style="text-align: center; font-style: italic;">Figure 1: Optimal trajectories for two servicing agents approaching the target.</figcaption>
  </figure>

  <figure style="flex: 1;">
    <img src="/assets/images/your-image-2.png" alt="Figure 2" style="width: 100%;" />
    <figcaption style="text-align: center; font-style: italic;">Figure 2: Enforcement of collision constraints during approach.</figcaption>
  </figure>

</div>
