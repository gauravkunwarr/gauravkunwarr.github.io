// Theme toggle (remembers choice per browser) and abstract show/hide.
(function () {
  var root = document.documentElement;
  try {
    var saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") root.setAttribute("data-theme", saved);
  } catch (e) {}

  function currentTheme() {
    var t = root.getAttribute("data-theme");
    if (t) return t;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.querySelector(".theme-toggle");
    function paint() { if (btn) btn.textContent = currentTheme() === "dark" ? "☀" : "☾"; }
    paint();
    if (btn) btn.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      paint();
    });

    document.querySelectorAll("[data-abs]").forEach(function (b) {
      b.addEventListener("click", function () {
        var el = document.getElementById(b.getAttribute("data-abs"));
        if (el) el.classList.toggle("open");
      });
    });

    // Profile photo fallback: show placeholder until prof_pic.jpg is added.
    var pic = document.querySelector(".profile img");
    if (pic) pic.addEventListener("error", function () { pic.src = "assets/img/prof_pic.svg"; }, { once: true });
  });
})();
