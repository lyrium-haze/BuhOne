function WhenLoaded() {
const burger = document.querySelector(".menu-burger");
const menu = document.querySelector(".menu__inner");
function showMenu() {
    burger.classList.toggle("menu-burger_active");
    menu.classList.toggle("menu__inner");
    menu.classList.toggle("menu__inner-burger");
}
burger.addEventListener('click', showMenu);

const swiperIntro = new Swiper('.intro__swiper-container', {
    loop: true,
    cssMode: true,
/*     autoplay: {
      delay: 7000,
    }, */
    navigation: {
        nextEl: '.intro-next',
        prevEl: '.intro-prev',
      },
      pagination: {
        el: '.intro-bullets',
        modifierClass: 'slider-ctrl__bullets',
        type: 'bullets',
        clickable: 'true',
        bulletClass: 'slider-ctrl__bullet',
        bulletActiveClass: 'slider-ctrl__bullet_active',
      },
});

const swiperReview = new Swiper('.review__swiper-container', {
  loop: true,
  cssMode: true,
  navigation: {
      nextEl: '.review-next',
      prevEl: '.review-prev',
    },
    pagination: {
      el: '.review-bullets',
      modifierClass: 'slider-ctrl__bullets',
      type: 'bullets',
      clickable: 'true',
      bulletClass: 'slider-ctrl__bullet slider-ctrl__bullet_blue',
      bulletActiveClass: 'slider-ctrl__bullet_active slider-ctrl__bullet_blue_active',
    },
});
const swiperClients = new Swiper('.clients__swiper-container', {
  loop: true,
  cssMode: true,
 /*  autoplay: {
    delay: 5000,
  }, */
  spaceBetween: 10,
  navigation: {
      nextEl: '.clients-next',
      prevEl: '.clients-prev',
    },
    pagination: {
      el: '.clients-bullets',
      modifierClass: 'slider-ctrl__bullets',
      type: 'bullets',
      clickable: 'true',
      bulletClass: 'slider-ctrl__bullet slider-ctrl__bullet_blue',
      bulletActiveClass: 'slider-ctrl__bullet_active slider-ctrl__bullet_blue_active',
    },
});
}

document.addEventListener("DOMContentLoaded", WhenLoaded);