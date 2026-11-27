(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  var main = document.getElementById("content");
  var footer = document.querySelector(".colophon");

  function setNav(open) {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.textContent = open ? "Close" : "Menu";
    document.body.classList.toggle("nav-open", open);
    if (main) main.inert = open;
    if (footer) footer.inert = open;
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") !== "true";
      setNav(open);
      if (open) {
        var first = nav.querySelector("a");
        if (first) first.focus();
      }
    });

    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) setNav(false);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setNav(false);
        toggle.focus();
      }
    });

    window.matchMedia("(min-width: 880px)").addEventListener("change", function (event) {
      if (event.matches) setNav(false);
    });
  }

  if (!window.gsap || !window.ScrollTrigger) {
    document.documentElement.classList.remove("motion");
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  var mm = gsap.matchMedia();
  mm.add("(prefers-reduced-motion: no-preference)", function () {
    document.documentElement.classList.add("motion");

    var intro = gsap.timeline({ defaults: { ease: "power3.out" } });
    intro.to(".mast-thread", { scaleX: 1, duration: 1.05 }, 0);
    intro.to(".browser", { clipPath: "inset(0% 0% 0% 0%)", duration: 1.2 }, 0.06);

    gsap.to(".process-rail-fill", {
      scaleY: 1,
      ease: "none",
      scrollTrigger: {
        trigger: ".process-list",
        start: "top 72%",
        end: "bottom 68%",
        scrub: 0.4
      }
    });

    return function () {
      document.documentElement.classList.remove("motion");
    };
  });
})();
