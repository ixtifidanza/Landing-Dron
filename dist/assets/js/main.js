var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  var swiper2 = new Swiper('.swiper-container2', {
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.review-arrows__arrow--right',
      prevEl: '.review-arrows__arrow--left',
    },
  });

