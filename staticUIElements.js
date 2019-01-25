load("sidebar.html", document.getElementById("nav-placeholder"));
load("header.html", document.getElementById("header-placeholder"));
load("footer.html", document.getElementById("footer-placeholder"));

function load(url, element) {
  console.log(element);
  req = new XMLHttpRequest();
  req.open("GET", url, false);
  req.send(null);

  element.innerHTML = req.responseText;
}
