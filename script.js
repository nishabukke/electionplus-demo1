// sticky header

$(window).on("scroll touchmove", function() {

    if ($(document).scrollTop() > $(".header-area").position().top) {
      $('.header-area').css('background', '#000');
  
    }
    else{
    $('.header-area').removeAttr('style');
  
    }
  });

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 100;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);