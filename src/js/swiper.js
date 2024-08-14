const swiper = new Swiper(".sneakers", {
  slidesPerView: 1,
  spaceBetween: 15,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    900: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
    },
    440: {
      spaceBetween: 30,
    },
    400: {
      slidesPerView: 2,
    },
  },
});
