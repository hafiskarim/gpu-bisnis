$(document).ready(function () {
  $('#carousel-quote').owlCarousel({
    autoplay: true,
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1
      },
      1024: {
        items: 1
      }
    }
  });
  $('#carousel-newrelease').owlCarousel({
    autoplay: true,
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1024: {
        items: 3
      }
    }
  });
  $('.owl-carousel').owlCarousel({
    margin: 10,
    nav: true,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1024: {
        items: 3
      },
      1024: {
        stagePadding: 80
      }
    }
  });

  // best selling book for ipad/tablet screen
  var mediaQuery =  window.matchMedia('screen and (min-width: 768px)  and (max-width: 1024px)');
  if (mediaQuery.matches) {
    $('.col-custom-5').addClass('col-md-6')
    $('bestselling__wrapper').addClass('row')
  }

  // dropdown navbar
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

  // collapse icon sidebar
  $('.list-group-item').on('click', function() {
    $('.fas', this)
      .toggleClass('fa-angle-down')
      .toggleClass('fa-angle-up');
  });

  // Milestones component
  var activeMilestones = $('.owl-item');
  activeMilestones.click(function() {
    $(this).toggleClass('active--custom')
    activeMilestones.not(this).removeClass('active--custom');
  });

  // Button International Partnership
  $('.btn.send-message.custom--width').on('click', function() {
    if ($('.btn.send-message.custom--width').attr('aria-expanded') === "true") {
      $('.btn.send-message.custom--width').addClass('hide-btn');
    }
  })

  // Tulis review hide
  $('.btn.btn-primary.tulis-review').on('click', function() {
    if ($('.btn.btn-primary.tulis-review').attr('aria-expanded') === "true") {
      $('.btn.btn-primary.tulis-review').addClass('hide-btn');
    }
  })
})