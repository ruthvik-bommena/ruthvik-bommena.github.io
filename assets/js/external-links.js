document.addEventListener("DOMContentLoaded", function() {
  var anchors = document.getElementsByTagName("a");
  for (var i = 0; i < anchors.length; i++) {
    var a = anchors[i];
    // If the link is external, add target="_blank" and rel attributes
    if (a.href && a.hostname !== window.location.hostname && a.href.indexOf("http") === 0) {
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    }
  }
});

