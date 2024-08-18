// Catalog Tabs

const catalogTabsParent = document.querySelector(".catalog__tabs"),
  catalogTabs = catalogTabsParent.querySelectorAll(".catalog__tabs-item"),
  catalogTabsContent = document.querySelectorAll(".catalog__tabs-content");

function hideCatalogTabsContent() {
  catalogTabs.forEach((item) => {
    item.classList.remove("catalog__tabs-item_active");
  });

  catalogTabsContent.forEach((item) => {
    item.classList.add("hidden");
    item.classList.remove("show");
  });
}

function showCatalogTabsContent(i = 0) {
  catalogTabs[i].classList.add("catalog__tabs-item_active");
  catalogTabsContent[i].classList.add("show");
}

hideCatalogTabsContent();
showCatalogTabsContent();

catalogTabsParent.addEventListener("click", (e) => {
  const target = e.target;
  if (target && target.classList.contains("catalog__tabs-item")) {
    catalogTabs.forEach((tab, i) => {
      if (target == tab) {
        hideCatalogTabsContent();
        showCatalogTabsContent(i);
      }
    });
  }
});

// Catalog Accordion
const catalogAccordionContent = document.querySelectorAll(
  ".catalog__accordion-content"
);

catalogAccordionContent.forEach((item, index) => {
  let catalogAccordionHeader = item.querySelector(".catalog__accordion-content_header");

  catalogAccordionHeader.addEventListener("click", () => {
    item.classList.toggle("open");

    console.log("Working");

    let catalogAccordionFooter = item.querySelector(
      ".catalog__accordion-content-footer"
    );

    if (catalogAccordionFooter) {
      if (item.classList.contains("open")) {
        catalogAccordionFooter.style = "display: block";
        item.querySelector("i").classList.replace("fa-plus", "fa-minus");
      } else {
        catalogAccordionFooter.style = "display: none";
        item.querySelector("i").classList.replace("fa-minus", "fa-plus");
      }
      removeOpen(index);
    }
  });
});

function removeOpen(index1) {
  catalogAccordionContent.forEach((item2, index2) => {
    if (index1 != index2) {
      item2.classList.remove("open");
      let footer = item2.querySelector("catalog__accordion-content-footer");
      if (footer) {
        footer.style = "display: none";
      }
      item2.querySelector("i").classList.replace("fa-minus", "fa-plus");
    }
  });
}
