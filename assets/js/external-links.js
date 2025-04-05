window.onload = function() {
  console.log("External links script loaded");
  var anchors = document.getElementsByTagName("a");
  for (var i = 0; i < anchors.length; i++) {
    var a = anchors[i];
    // Check if the link is external (compare hostnames)
    if (a.href && a.hostname !== window.location.hostname && a.href.indexOf("http") === 0) {
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    }
  }
};
