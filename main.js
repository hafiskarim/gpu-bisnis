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

  const $dropdown = $(".dropdown");
  const $dropdownToggle = $(".dropdown-toggle");
  const $dropdownMenu = $(".dropdown-menu");
  const showClass = "show";
  $(window).on("load resize", function () {
    if (this.matchMedia("(min-width: 768px)").matches) {
      $dropdown.hover(
        function () {
          const $this = $(this);
          $this.addClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "true");
          $this.find($dropdownMenu).addClass(showClass);
        },
        function () {
          const $this = $(this);
          $this.removeClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "false");
          $this.find($dropdownMenu).removeClass(showClass);
        }
      );
    } else {
      $dropdown.off("mouseenter mouseleave");
    }
  });

  // button read more di detail buku
  $("#toggle").click(function() {
    var elem = $('#toggle').find('.fas.fa-angle-double-down')
    if (elem.length == 1) {
      $(".updown").removeClass("fa-angle-double-down")
      $(".updown").addClass("fa-angle-double-up")
      $(".text--transparent").addClass("non")
      $("#more").slideDown();
    } else {
      $(".updown").addClass("fa-angle-double-down")
      $(".updown").removeClass("fa-angle-double-up")
      $(".text--transparent").removeClass("non")
      $("#more").slideUp();
    }
  });
})