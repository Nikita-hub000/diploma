import "../src/pages/index.css";

// import Swiper bundle with all modules installed
import swiper from 'swiper/bundle';

// init Swiper:
var swipere = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    // slidesPerGroup: 3,
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });