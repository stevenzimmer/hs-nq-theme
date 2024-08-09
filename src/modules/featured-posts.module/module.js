document.addEventListener("DOMContentLoaded", function() {
  $(".slick-container").slick({
    dots: false,
    infinite: false,
    speed: 200,
    slidesToShow: 2,
    adaptiveHeight: true,
    centerMode: false,
    autoplay: false,
    swipeToSlide: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  })
});