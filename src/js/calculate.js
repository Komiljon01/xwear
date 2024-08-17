const calcBtnsParent = document.querySelector(".calculate__content-buttons");
const calcBtns = calcBtnsParent.querySelectorAll("button");
const tabsCalcContent = document.querySelectorAll(
  ".calculate__content-form_item"
);

function hideCalcTabsContent() {
  tabsCalcContent.forEach((item) => {
    item.classList.add("hidden");
    item.classList.remove("show");
  });

  calcBtns.forEach((item) => {
    item.classList.remove("calcBtnactive");
  });
}

function showCalcTabsContent(i = 0) {
  tabsCalcContent[i].classList.add("show");
  tabsCalcContent[i].classList.remove("hidden");

  calcBtns[i].classList.add("calcBtnactive");
}

hideCalcTabsContent();
showCalcTabsContent();

calcBtnsParent.addEventListener("click", (e) => {
  const target = e.target;
  if (target && target.classList.contains("calculate__content-btn")) {
    calcBtns.forEach((tab, i) => {
      if (target == tab) {
        hideCalcTabsContent();
        showCalcTabsContent(i);
      }
    });
  }
});
