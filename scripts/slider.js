const swiper = new Swiper(".testimonial-slider", {
  loop: true, // Циклическая прокрутка
  slidesPerView: 1, // Показывать один слайд за раз
  spaceBetween: 20, // Расстояние между слайдами
  autoplay: {
    delay: 4000, // Задержка переключения между слайдами
    disableOnInteraction: false, // Продолжать авто-прокрутку после взаимодействия
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true, // Точки кликабельны
  },
  speed: 1200, // Увеличенная скорость переключения (1.2 сек)
});
