$(document).ready(function () {
  $('.owl-carousel.autoplay').owlCarousel({
    autoplay: true,
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
    }
  })
  $('.owl-carousel').owlCarousel({
    margin: 10,
    nav: true,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        stagePadding: 80
      }
    }
  })
})