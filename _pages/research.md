---
title: "Research"
permalink: /research/
---

## Multi-Agent 6-DOF Trajectory Optimization with Anti-collision Constraints
For large target spacecraft and structures, multiple agents can operate simultaneously to transfer components to and from the service vehicle, with each agent targeting a specific location on the target spacecraft. To ensure a safe and efficient servicing and assembly process, these agents must adhere to various operational constraints, such as anti-collision constraints. In our recent <a href="https://link.springer.com/article/10.1007/s40295-024-00470-7" target="_blank" style="color:blue">publication</a>, we developed a novel and versatile methodology that incorporates path constraints directly into the optimal control formulation without increasing the problem size (i.e., no extra state variables) while permitting the trajectory to be solved in a single arc. This leads to substantial improvements in computational efficiency compared to the current state-of-the-art. 

<br>

<figure>
  <iframe width="100%" height="400" src="/assets/videos/CRTBP_4S_Animation.mp4" frameborder="0" allowfullscreen></iframe>
  <figcaption style="text-align: center; font-style: italic;">Animation 1: Optimal trajectories of four servicing agents transporting modular components between the service vehicle and the target spacecraft in a Halo orbit around SEL-2, while satisfying anti-collision constraints![image](https://github.com/user-attachments/assets/5f108ef6-8460-4f6f-90e5-24c6a0e784a1)
</figcaption>
</figure>

<br>

<div style="display: flex; justify-content: space-between; gap: 20px;">

  <figure style="flex: 1;">
    <img src="/assets/images/Distance4S.png" alt="Figure 1" style="width: 100%;" />
    <figcaption style="text-align: center; font-style: italic;">Figure 1: Inter-agent distance.</figcaption>
  </figure>

  <figure style="flex: 1;">
    <img src="/assets/images/TPSF4S.png" alt="Figure 2" style="width: 100%;" />
    <figcaption style="text-align: center; font-style: italic;">Figure 2: Thrust profiles and switch functions.</figcaption>
  </figure>

</div>
