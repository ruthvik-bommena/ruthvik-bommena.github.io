"use strict";
document.addEventListener("DOMContentLoaded", function() {
  // Select all relevant links that are external.
  const externalLinks = document.querySelectorAll('.header a, .sidebar a, .footer a');

  externalLinks.forEach(link => {
    // Optional: check if the URL is external (starts with "http")
    if (link.href && link.href.startsWith("http")) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    }
  });
});

