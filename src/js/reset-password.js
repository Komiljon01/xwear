const resetForm = document.querySelector(".reset__form");

resetForm.addEventListener("submit", (e) => {
  e.preventDefault();
  window.location.href = "send-email.html";
  resetForm.reset();
});
