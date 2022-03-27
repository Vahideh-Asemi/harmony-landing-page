$(document).ready(function () {
  $("#discountItem").click(function () {
    $(this).hide();
    $(".discountItem").fadeIn("slow");
  });
  $("#closX").click(function () {
    $(".discountItem").fadeOut();
    $("#discountItem").fadeIn("slow");
  });
});
$(window).scroll(function () {
  if ($(this).scrollTop() > 250) {
    $("#discountItem").show(100);
  } else {
    $("#discountItem").hide(100);
  }
});

var swiper = new Swiper(".myplatform", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

AOS.init();
