---
title: "Research"
permalink: /research/
---

My research focuses on developing six-degrees-of-freedom (6-DOF) spacecraft trajectory optimization algorithms with path inequality constraints. My work is centered around applications in in-space servicing and assembly (ISAM) missions, where the trajectories of servicing agents are simulated between a target spacecraft and a cargo vehicle. The developed methodologies are designed to be general and applicable to any dynamical model or orbital regime, provided the reference frame is centered on the target spacecraft. My current research specifically explores ISAM scenarios in Earth orbits, as well as in the orbits around the Sun–Earth and Earth–Moon Lagrange Points. 

## 6-DOF Trajectory Optimization



## Multi-Agent 6-DOF Trajectory Optimization with Anti-collision Constraints
For large target spacecraft and structures, multiple agents can operate simultaneously to transfer components to and from the service vehicle, with each agent targeting a specific location on the target spacecraft. To ensure a safe and efficient servicing and assembly process, these agents must adhere to various operational constraints, such as anti-collision constraints. In our recent <a href="https://link.springer.com/article/10.1007/s40295-024-00470-7" target="_blank" style="color:blue">publication</a>, we developed a novel and versatile methodology that incorporates path constraints directly into the optimal control formulation without increasing the problem size (i.e., no extra state variables) while permitting the trajectory to be solved in a single arc. This leads to substantial improvements in computational efficiency compared to the current state-of-the-art. 

<!-- Video Section -->
<figure>
  <video width="100%" controls>
    <source src="/assets/videos/CRTBP_4S_Animation.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <figcaption style="text-align: center; font-style: italic;">
    Animation 1: Optimal trajectories of four servicing agents transporting modular components between the service vehicle and the target spacecraft in a Halo orbit around Sun-Earth Lagrange Point 2, while satisfying anti-collision constraints.
  </figcaption>
</figure>

<!-- Side-by-Side Figures -->
<div style="display: flex; justify-content: center; gap: 40px; flex-wrap: wrap; margin-top: 0;">
  <figure style="flex: 1; max-width: 500px; display: flex; flex-direction: column; align-items: center; margin: 0;">
    <img src="/assets/images/Distance4S.png" alt="Figure 1" style="width: 100%;" />
    <figcaption style="text-align: center; font-style: italic; margin-top: 0.2em;">Figure 1: Inter-agent distance.</figcaption>
  </figure>

  <figure style="flex: 1; max-width: 500px; display: flex; flex-direction: column; align-items: center; margin: 0;">
    <img src="/assets/images/TPSF4S.png" alt="Figure 2" style="width: 100%;" />
    <figcaption style="text-align: center; font-style: italic; margin-top: 0.2em;">Figure 2: Thrust profiles and switch functions.</figcaption>
  </figure>
</div>
