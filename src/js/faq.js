const faqAccordionContent = document.querySelectorAll(
  ".faq__accordion-content"
);

faqAccordionContent.forEach((item, index) => {
  let faqAccordionHeader = item.querySelector(".faq__accordion-content_header");

  faqAccordionHeader.addEventListener("click", () => {
    item.classList.toggle("open");

    console.log("Working");

    let faqAccordionFooter = item.querySelector(
      ".faq__accordion-content-footer"
    );

    if (faqAccordionFooter) {
      if (item.classList.contains("open")) {
        faqAccordionFooter.style = "display: block";
        item.querySelector("i").classList.replace("fa-plus", "fa-minus");
      } else {
        faqAccordionFooter.style = "display: none";
        item.querySelector("i").classList.replace("fa-minus", "fa-plus");
      }
      removeOpen(index);
    }
  });
});

function removeOpen(index1) {
  faqAccordionContent.forEach((item2, index2) => {
    if (index1 != index2) {
      item2.classList.remove("open");
      let footer = item2.querySelector("faq__accordion-content-footer");
      if (footer) {
        footer.style = "display: none";
      }
      item2.querySelector("i").classList.replace("fa-minus", "fa-plus");
    }
  });
}
