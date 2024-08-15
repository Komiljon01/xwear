const navList = document.querySelector(".nav__lists-sm"),
  navOpen = document.querySelector(".nav-open"),
  navClose = document.querySelector(".nav-close"),
  overlay = document.querySelector(".overlay"),
  body = document.body;

const openMenu = () => {
  navList.style = "transform: translateX(0)";
  overlay.classList.remove("hidden");
  overlay.classList.add("show");
  body.style.overflowY = "hidden";
};

const closeMenu = () => {
  navList.style = "transform: translateX(-100%)";
  overlay.classList.remove("show");
  overlay.classList.add("hidden");
  body.style.overflowY = "visible";
};

navOpen.addEventListener("click", openMenu);

navClose.addEventListener("click", closeMenu);

overlay.addEventListener("click", () => {
  if (!overlay.classList.contains("hidden")) {
    closeMenu();
  }
});
