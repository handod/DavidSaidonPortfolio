$(window).on("load", function() {
  $(".loader .inner").fadeOut(1000, function() {
    $(".loader").fadeOut(1100);
  });

  $(".items").isotope({
    filter: '*',
    animationOptions: {
      duration: 1500,
      easing: 'linear',
      queue: false
    }
  });

});

$(document).ready(function() {
  $('#slides').superslides({
    animation: 'fade',
    play: 5000,
    pagination: false
  });
  var typed = new Typed(".typed", {
    strings: ["Software Engineer.", "Web Developer.", "Computers Person."],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    showCursor: false
  });

  $('.owl-carousel').owlCarousel({
    loop: false,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 3
      },
      968: {
        items: 4
      }
    }
  });

  var skillsTopOffSet = $(".skillsSection").offset().top;
  $(window).scroll(function() {
    if (window.pageYOffset > skillsTopOffSet - $(window).height() + 200) {
      $(function() {
        $('.chart').easyPieChart({
          easing: 'easeInOut',
          barColor: 'white',
          trackColor: false,
          scaleColor: false,
          lineWidth: 4,
          size: 152
        });
      });
    }
  });

  var textWrapper = document.querySelector('.ml6 .letters');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  anime.timeline({
      loop: true
    })
    .add({
      targets: '.ml6 .letter',
      translateY: ["1.1em", 0],
      translateZ: 0,
      duration: 750,
      delay: (el, i) => 50 * i
    }).add({
      targets: '.ml6',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 2000
    });

  $("[data-fancybox]").fancybox();


  $("#filters a").click(function() {
    $("#filters .current").removeClass("current");
    $(this).addClass("current");

    var selector = $(this).attr("data-filter");

    $(".items").isotope({
      filter: selector,
      animationOptions: {
        duration: 1500,
        easing: 'linear',
        queue: false
      }
    });
    return false;
  });

  $("#navigation li a").click(function(e) {
    e.preventDefault();

    var targetElement = $(this).attr("href");
    var targetPosition = $(targetElement).offset().top;
    $("html, body").animate({
      scrollTop: targetPosition - 50
    }, "slow");
  });

  const nav = $("#navigation");
  const navTop = nav.offset().top;

  $(window).on("scroll", stickyNavigation);

  function stickyNavigation() {
    var body = $("body");

    if ($(window).scrollTop() >= navTop) {
      body.css("padding-top", nav.outerHeight() + "px");
      body.addClass("fixedNav");
    } else {
      body.css("padding-top", 0);
      body.removeClass("fixedNav");
    }
  }

});
