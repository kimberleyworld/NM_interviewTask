var swiper = new Swiper(".mySwiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true, // Allow pagination clicks
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  //   autoplay: {
  //     delay: 3000, // Time between slides
  //     disableOnInteraction: true,
  //   },
});
