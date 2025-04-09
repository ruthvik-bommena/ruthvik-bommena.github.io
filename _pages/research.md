---
title: "Research"
permalink: /research/
---

## Multi-Agent 6-DOF Trajectory Optimization with Anti-collision Constraints
For large target spacecraft and structures, multiple agents can operate simultaneously to transfer components to and from the service vehicle, with each agent targeting a specific location on the target spacecraft. To ensure a safe and efficient servicing and assembly process, these agents must adhere to various operational constraints, such as anti-collision constraints. In our recent <a href="https://link.springer.com/article/10.1007/s40295-024-00470-7" target="_blank" style="color:blue">publication</a>, we developed a novel and versatile methodology that incorporates path constraints directly into the optimal control formulation without increasing the problem size (i.e., no extra state variables) while permitting the trajectory to be solved in a single arc. This leads to substantial improvements in computational efficiency compared to the current state-of-the-art. 

<!-- Video Section -->
<div style="text-align: center; margin-bottom: 1em;">
  <video width="100%" controls>
    <source src="/assets/videos/CRTBP_4S_Animation.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <div style="font-style: italic; font-size: 0.95em; margin-top: 0.5em;">
    Animation 1: Optimal trajectories of four servicing agents transporting modular components between the service vehicle and the target spacecraft in a Halo orbit around SEL-2, while satisfying anti-collision constraints.
  </div>
</div>

<!-- Side-by-Side Figures -->
<div style="display: flex; justify-content: center; gap: 40px; flex-wrap: wrap; margin-top: 0;">
  <figure style="flex: 1; max-width: 500px; display: flex; flex-direction: column; align-items: center; margin: 0;">
    <img src="/assets/images/Distance4S.png" alt="Figure 1" style="width: 100%;" />
    <figcaption style="text-align: center; font-style: italic; margin-top: 0.5em;">Figure 1: Inter-agent distance.</figcaption>
  </figure>

  <figure style="flex: 1; max-width: 500px; display: flex; flex-direction: column; align-items: center; margin: 0;">
    <img src="/assets/images/TPSF4S.png" alt="Figure 2" style="width: 100%;" />
    <figcaption style="text-align: center; font-style: italic; margin-top: 0.5em;">Figure 2: Thrust profiles and switch functions.</figcaption>
  </figure>
</div>
