//Инициализируем Swiper
new Swiper ('.image-slider',{
//Стрелки
navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  //Буллеты, текущее положение, прогрессбар
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
    type: 'fraction',
  },
});
