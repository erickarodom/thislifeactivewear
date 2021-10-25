$(document).ready(function(){
  $('.shoe-slider-ctnr').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplayspeed: 2000,
    rtl: true,
    centerMode: true,
    
    responsive: [
      
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
          
        }
      }
    ]
  });
});