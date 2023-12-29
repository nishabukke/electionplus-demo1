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
      var elementVisible = 50;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);


  // loader js

document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
      document.querySelector(
          "body").style.visibility = "hidden";
      document.querySelector(
          ".preloader").style.visibility = "visible";
  } else {
      document.querySelector(
          ".preloader").style.display = "none";
      document.querySelector(
          "body").style.visibility = "visible";
  }
  };



// mobile menu

$( document ).ready(function() {

  $( ".cross" ).hide();
  $( ".menu" ).hide();
  $( ".canva_expander" ).click(function() {
  $( ".menu" ).slideToggle( "slow", function() {
  $( ".canva_expander" ).hide();
  $( ".cross" ).show();
  });
  });
  
  $( ".cross" ).click(function() {
  $( ".menu" ).slideToggle( "slow", function() {
  $( ".cross" ).hide();
  $( ".canva_expander" ).show();
  });
  });
  
  });

 // Close out sub menu
 $('.sub__close').click(function(e) {
  e.preventDefault();
  
  $(this).parent().parent().removeClass('is-active');
});

// Trigger sub menu
$('.menu ul .nav__submenu').click(function(e) {
  e.preventDefault();
  
  $(this).siblings().addClass('is-active');
});

