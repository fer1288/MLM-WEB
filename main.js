new Swiper('.card-wrapper', {
 
  loop: true,
  // Space between slides
  spaceBetween: 10,

  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
      
    },
    768: {
      slidesPerView: 2,
      
    },

    1024: {
      slidesPerView: 3,
      
    },


  },

  // Pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets:true

  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
      
    },
    768: {
      slidesPerView: 2,
    
    },

    1024: {
      slidesPerView: 3,
    
    },


  },

});