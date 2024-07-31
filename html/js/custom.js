jQuery(document).ready(function () {
  Splitting();

  $('.menuicon,.nav-close,.nav-button').click(function () {
    $('.navigation-bar').toggleClass('active');
  });

  //logo slider
  $('.logo-items').slick({
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    buttons: false
  });

  //reward slider


  $('.rewards-slider').slick({
    speed: 1200,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnFocus: false,
    pauseOnHover: false,
    arrows: true,
    prevArrow: false,
    adaptiveHeight: true,
    nextArrow: $('.rewards-sec .rewards-next')
  });


  $('.rewards-slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    if (nextSlide == slick.$slides.length - 1) {
      var nextSlideNumber = 0;
    } else {
      var nextSlideNumber = nextSlide + 1;
    }

    var currentSlideTitle = $(slick.$slides[nextSlide]).find(".rewards-slide-title").clone();
    var nextSlideTitle = $(slick.$slides[nextSlideNumber]).find(".rewards-slide-title").clone();
    $('.rewards-sec .rewards-prev').empty().append(currentSlideTitle);
    $('.rewards-sec .rewards-next').empty().append(nextSlideTitle);
  });

  // $('.product-slider').slick({
  //   speed: 500,
  //   autoplay: true,
  //   autoplaySpeed: 4000,
  //   infinite: true,
  //   centerMode: true,
  //   centerPadding: '35%',
  //   pauseOnFocus: false,
  //   pauseOnHover: false,
  //   arrows: true,
  //   prevArrow: false,
  //   nextArrow: $('.product-sec .rewards-next'),
  //   focusOnSelect: true
  // });

  // $('.product-slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
  //   if (nextSlide == slick.$slides.length - 1) {
  //     var nextSlideNumber = 0;
  //   } else {
  //     var nextSlideNumber = nextSlide + 1;
  //   }

  //   $('.product-slider .rewards-prev').empty().html('<div class="rewards-slide-title"><span class="slider-num">'+nextSlide+'</span></div>');

  // });




  $('.about-sec-row .sec-title').height($('.about-bx-1').outerHeight());


  $('.panel').each(function (e) {
    var $this = $(this);
    console.log(e);
    $(window).scroll(function () {
      if ($(window).scrollTop() >= $this.offset().top - $(window).height() / 2) {
        $('.panel').removeClass('active'); // Remove active class from all panels
        ; // Add active class to the current panel
        // var move = 50*e;
        $('.navigation-bar__flow-container').css('transform', 'translateX(' + $this.data('position') + ')');
        $('.nav-button').removeClass('active');
        $('.nav-button[data-index=' + $this.attr("id") + ']').addClass('active');

      }
    });
  });




  $(window).scroll(function () {
    var x = $(document).scrollTop();
    if (x > 100) {
      $(".back-to-top").addClass("active");
    } else {
      $(".back-to-top").removeClass("active");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });


}); //end document ready



function fixed_top_menu() {
  var windows = $(window);
  windows.on("scroll", function () {
    var header_height = $(".header-main").height();
    var scrollTop = windows.scrollTop();
    if (scrollTop > header_height) {
      $(".header-main").addClass("sticky");
    } else {
      $(".header-main").removeClass("sticky");
    }
  });
}
fixed_top_menu();

function scrollToHash() {
  var hash = window.location.hash;
  if (hash) {
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 150,
      },
      800
    );
  }
}
scrollToHash();
$(window).on("hashchange", function () {
  scrollToHash();
});


//countdown
function updateCountdown() {
  const targetDate = new Date("2024-04-14T23:59:59");
  const currentDate = new Date();
  const timeDiff = Math.max(0, Math.floor((targetDate - currentDate) / 1000));

  const days = Math.floor(timeDiff / (24 * 3600));
  const hours = Math.floor((timeDiff % (24 * 3600)) / 3600);
  const minutes = Math.floor((timeDiff % 3600) / 60);
  const seconds = timeDiff % 60;

  document.getElementById("days").textContent = formatTime(days);
  document.getElementById("hours").textContent = formatTime(hours);
  document.getElementById("minutes").textContent = formatTime(minutes);
  document.getElementById("seconds").textContent = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

updateCountdown();
setInterval(updateCountdown, 1000);




function isInViewport(elem) {
  const bounding = elem.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

// Add click event listener to navigation items to scroll to corresponding section
$('.nav-button').on('click', function () {
  const index = $(this).data('index');
  const targetSection = $('#' + (index));
  $('.nav-button').removeClass('active');
  $(this).addClass('active');
  $('html, body').animate({
    scrollTop: targetSection.offset().top
  }, 500);
});



// $(document).ready(function () {
//   $('.product-sec .prod-prev').on('click', function () {
//     clearInterval(autoplayslider);
//     var i = $(".product-item.active").index();
//     i--;
//     $(".product-item").removeClass('active');
//     $('.product-item').eq(i).addClass('active');

//     $(".product-text-item").hide();;
//     $('.product-text-item').eq(i).fadeIn();
//   });

//   $('.product-sec .prod-next').on('click', function () {
//     autoplayslider();
//   });

//   $('.product-item').click(function(){
//     clearInterval(autoplayslider);
//     var i = $(this).data('number')  ;
//     console.log(i);
//     $(".product-item").removeClass('active');
//     $('.product-item').eq(i).addClass('active');

//     $(".product-text-item").hide();;
//     $('.product-text-item').eq(i).fadeIn();
//   })

//   if ($(window).width() > 767) {
//     setInterval(function () {
//       autoplayslider();
//     }, 4000);
//   } else {
//     $('.product-text-slider').slick({
//       arrows:false,
//       dots:true,
//       autoplay:true,
//       autoplaySpeed:3500,
//     });
//   }
// });


// function autoplayslider() {
//   var i = $(".product-item.active").index();
//   i = i >= $('.product-item').length - 1 ? 0 : i + 1;
//   $(".product-item").removeClass('active');
//   $('.product-item').eq(i).addClass('active');
//   $(".product-text-item").hide();;
//   $('.product-text-item').eq(i).fadeIn();
//   //navigation();
// }







if (screen.width > 767) {
  var slideIndex = 1;
  var playPause = true;
  var timerVar;
  var scrubberVar;
  var intervalDuration = 4000;
  var i = 0;
  const presentationSize = document.getElementsByClassName("product-item").length;

  showSlides(slideIndex);


  function pSlider(elem) {
    clearTimeout(timerVar);
    clearInterval(scrubberVar);
    slideIndex = elem;
    showSlides(slideIndex);
  }


  // Next/previous controls
  function plusSlides(n) {
    clearTimeout(timerVar);
    clearInterval(scrubberVar);
    showSlides((slideIndex += n));
  }

  function autoplay() {
    showSlides((slideIndex += 1));
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("product-item");
    var slidesTxt = document.getElementsByClassName("product-text-item");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
      slidesTxt[i].style.display = "none";
    }

    slides[slideIndex - 1].classList.add('active')
    slidesTxt[slideIndex - 1].style.display = "block";

    if (playPause) {
      timerVar = setTimeout(autoplay, intervalDuration);
    }
  }
} else {
  $('.product-text-slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3500,
  });
}


