// This is for the mobile nav
let mobileOnly = window.matchMedia('(max-width: 680px)');
let open = document.getElementById('open');
let close = document.getElementById('close');

mobileOnly.addListener(screenSize);
open.addEventListener('click', openNav);
close.addEventListener('click', closeNav);

function screenSize() {
  if (mobileOnly.matches) {
    openNav();
    closeNav();
  } else {
    open.style.display = 'none';
  }
};

function openNav() {
  document.getElementById('open').style.display = 'none';
  document.getElementById('nav').style.width = '100%';
};

function closeNav() {
  document.getElementById('nav').style.width = '0';
  document.getElementById('open').style.display = 'block';
};


// This is for the scrollbar
    $(window).scroll(function() {
      var wintop = $(window).scrollTop(), docheight = 

      $(document).height(), winheight = $(window).height();
      var scrolled = (wintop/(docheight - winheight))*100;

      $('.scroll-line').css('width', (scrolled + '%'));
    });



    // This code is for smooth scrolling effect
    $(document).ready(function(){
      // Add smooth scrolling to all links
      $(".navLink").on('click', function(event) {

        if (this.hash !== "b") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){

            window.location.hash = hash;
          });
        } // End if
      });
    });