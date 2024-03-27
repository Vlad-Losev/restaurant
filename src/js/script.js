const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    // Буллеты
    clickable: true,

    // Динамические буллеты
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Активный слайд по центру
  centeredSlides: true,

  autoHeight: true,

  // Эффекты переключения слайдов
  // Эффект потока
  // effect: 'coverflow',

  // // Дополнение к coverflow
  // coverflowEffect: {
  //   // Угол
  //   // rotate: 20,
  //   // Наложение
  //   // stretch: 50,
  //   // Тень
  //   // slideShadows: true,
  // },
});


const swiper2 = new Swiper('#swiper-2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    // Буллеты
    clickable: true,

    // Динамические буллеты
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Активный слайд по центру
  centeredSlides: true,

  autoHeight: true,

  slidesPerView: 3,

  // Эффекты переключения слайдов
  // Эффект потока
  // effect: 'coverflow',

  // // Дополнение к coverflow
  // coverflowEffect: {
  //   // Угол
  //   // rotate: 20,
  //   // Наложение
  //   // stretch: 50,
  //   // Тень
  //   // slideShadows: true,
  // },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1180: {
      slidesPerView: 3,
    },
  },
});

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("burger").addEventListener("click", function() {
      document.querySelector("header").classList.toggle("open")
  });
})