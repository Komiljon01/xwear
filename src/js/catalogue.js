// Accordion
const accordionCatalogue = document.querySelectorAll(
  ".catalogue__sidebar-accordion_content"
);

accordionCatalogue.forEach((item) => {
  let accordionCatalogueHeader = item.querySelector(
    ".catalogue__sidebar-accordion_header"
  );

  let accordionFooter = item.querySelector(
    ".catalogue__sidebar-accordion_footer"
  );

  item.classList.add("open");
  accordionFooter.style.height = `${accordionFooter.scrollHeight}px`;
  item.querySelector("i").classList.replace("fa-angle-down", "fa-angle-up");

  accordionCatalogueHeader.addEventListener("click", () => {
    item.classList.toggle("open");

    if (item.classList.contains("open")) {
      accordionFooter.style.height = `${accordionFooter.scrollHeight}px`;
      item.querySelector("i").classList.replace("fa-angle-down", "fa-angle-up");
    } else {
      accordionFooter.style.height = "0px";
      item.querySelector("i").classList.replace("fa-angle-up", "fa-angle-down");
    }
  });
});

// Sidebar menu
const filter = document.querySelector(".catalogue__filters-md_filter");
const sideBar = document.querySelector(".catalogue__sidebar-md");
const sideBarOverlay = document.querySelector(".overlaySidebar");
const closeSidebarBtn = document.querySelector(".catalogue__sidebar-md_close");

const openSidebar = () => {
  sideBar.style = "transform: translateX(0)";
  sideBarOverlay.classList.remove("hidden");
  sideBarOverlay.classList.add("show");
  body.style.overflowY = "hidden";
};

const closeSidebar = () => {
  sideBar.style = "transform: translateX(-100%)";
  sideBarOverlay.classList.remove("show");
  sideBarOverlay.classList.add("hidden");
  body.style.overflowY = "visible";
};

filter.addEventListener("click", openSidebar);
closeSidebarBtn.addEventListener("click", closeSidebar);

sideBarOverlay.addEventListener("click", () => {
  if (!sideBarOverlay.classList.contains("hidden")) {
    closeSidebar();
  }
});
