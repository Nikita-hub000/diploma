import swiper from 'swiper/bundle';
export default function ActivateSwiper() {
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
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 16,
  
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 16,
      }
  
    }
  })}
