// Dashboard Tabs

const profileTabsParent = document.querySelector(".dashboard__tabs"),
  profileTabs = profileTabsParent.querySelectorAll(".dashboard__tabs-item"),
  profileTabsContents = document.querySelectorAll(".dashboard__tab-content");

function hideProfileTabsContent() {
  profileTabsContents.forEach((item) => {
    item.classList.add("hidden");
    item.classList.remove("show");
  });

  profileTabs.forEach((item) => {
    item.classList.remove("dashboard__tabs-item_active");
  });
}

function showProfileTabsContent(i = 0) {
  profileTabsContents[i].classList.add("show");
  profileTabsContents[i].classList.remove("hidden");

  profileTabs[i].classList.add("dashboard__tabs-item_active");
}

hideProfileTabsContent();
showProfileTabsContent();

profileTabsParent.addEventListener("click", (e) => {
  let target = e.target;

  // If the clicked element is an icon or text, we find the parent tab item
  if (!target.classList.contains("dashboard__tabs-item")) {
    target = target.closest(".dashboard__tabs-item");
  }

  if (target) {
    profileTabs.forEach((tab, i) => {
      if (target == tab) {
        hideProfileTabsContent();
        showProfileTabsContent(i);
      }
    });
  }
});

// Password show/hide

const togglePasswordIcons = document.querySelectorAll(".togglePassword");

togglePasswordIcons.forEach((toggleIcon) => {
  toggleIcon.addEventListener("click", () => {
    const inputPassword = toggleIcon.previousElementSibling;

    if (inputPassword.type === "password") {
      inputPassword.type = "text";
      toggleIcon.classList.replace("fa-eye-slash", "fa-eye");
    } else {
      inputPassword.type = "password";
      toggleIcon.classList.replace("fa-eye", "fa-eye-slash");
    }
  });
});
