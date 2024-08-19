// Calculate Tabs
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

// Calculate Modal

const calcOverlay = document.querySelector(".overlay__calculate"),
  calcModal = document.querySelector(".calculate__modal"),
  calcModalClose = document.querySelector(".calculate__modal-close"),
  calcModalExit = document.querySelector(".calculate__modal-btn");

const calcForm = document.querySelector(".manager-form");

function openCalcModal() {
  calcModal.classList.remove("hidden");
  calcOverlay.classList.remove("hidden");
  body.style.overflowY = "hidden";

  if (!calcModal.classList.contains("hidden")) {
    setTimeout(() => closeCalcModal(), 3000);
  }
}

function closeCalcModal() {
  calcModal.classList.add("hidden");
  calcOverlay.classList.add("hidden");
  body.style.overflowY = "visible";
}

calcForm.addEventListener("submit", (e) => {
  e.preventDefault();

  openCalcModal();
  calcForm.reset();
});

calcModalClose.addEventListener("click", closeCalcModal);
calcModalExit.addEventListener("click", closeCalcModal);
calcOverlay.addEventListener("click", closeCalcModal);
