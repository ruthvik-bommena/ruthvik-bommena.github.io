document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("a[href^='http']");
  const currentHost = window.location.hostname;

  links.forEach(link => {
    const url = new URL(link.href);
    if (url.hostname !== currentHost) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    }
  });
});
