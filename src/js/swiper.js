const swiperProducts = new Swiper(".sneakers", {
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

const swiperBlogs = new Swiper(".swiper__blogs", {
  slidesPerView: 1,
  spaceBetween: 31,
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
      slidesPerView: 3,
    },
    460: {
      slidesPerView: 2,
    },
  },
});
