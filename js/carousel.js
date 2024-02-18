var swiper = new Swiper('.container-banner', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
        grabCursor: true,
  });

var swiperHotel = new Swiper('.container-hoteis', {
    slidesPerView: 1,
    spaceBetween: 2,
    breakpoints:{
        640:{
            slidesPerView: 2
        },
        992:{
            slidesPerView: 3
        }

    },
    navigation:{
        nextEl: '.swiper-button-next-hotel',
        prevEl: '.swiper-button-prev-hotel' 
    }
});