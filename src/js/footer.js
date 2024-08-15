const accordionContent = document.querySelectorAll(
  ".footer-sm__accordion-content"
);

accordionContent.forEach((item, index) => {
  let accordionHeader = item.querySelector(
    ".footer-sm__accordion-content_header"
  );

  accordionHeader.addEventListener("click", () => {
    item.classList.toggle("open");

    let accordionFooter = item.querySelector(
      ".footer-sm__accordion-content-footer"
    );

    if (accordionFooter) {
      if (item.classList.contains("open")) {
        accordionFooter.style.height = `${accordionFooter.scrollHeight}px`;
        item
          .querySelector("i")
          .classList.replace("fa-angle-down", "fa-angle-up");
      } else {
        accordionFooter.style.height = "0px";
        item
          .querySelector("i")
          .classList.replace("fa-angle-up", "fa-angle-down");
      }
      removeOpen(index);
    }
  });
});

function removeOpen(index1) {
  accordionContent.forEach((item2, index2) => {
    if (index1 != index2) {
      item2.classList.remove("open");
      let footer = item2.querySelector(".footer-sm__accordion-content-footer");
      if (footer) {
        footer.style.height = "0px";
      }
      item2
        .querySelector("i")
        .classList.replace("fa-angle-up", "fa-angle-down");
    }
  });
}
