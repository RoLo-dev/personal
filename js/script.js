// This is for the mobile nav
let mobileOnly = window.matchMedia('(max-width: 800px)');
const open = document.getElementById('open');
const close = document.getElementById('close');
const leftCol = document.getElementById('leftCol');

// mobileOnly.addListener(screenSize);
// open.addEventListener('click', openNav);
// close.addEventListener('click', closeNav);

open.addEventListener('click', add);
close.addEventListener('click', exit);

function add(){
  leftCol.classList.add('show');
}
function exit(){
  leftCol.classList.remove('show');
}

// function screenSize() {
//   if (mobileOnly.matches) {
//     openNav();
//     closeNav();
//   } else {
//     open.style.display = 'none';
//   }
// };

// function openNav() {
//   document.getElementById('open').style.display = 'none';
//   document.getElementById('nav').style.width = '100%';
// };

// function closeNav() {
//   document.getElementById('nav').style.width = '0';
//   document.getElementById('open').style.display = 'block';
// };


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



// This is for the modal
let modalBtn = document.getElementById('modalBtn');
let modal = document.getElementById('modal');
let modalCntnt = document.getElementById('modal-content');
let closeBtn = document.getElementById('closeBtn');

closeBtn.addEventListener('click', closeModal);
modalBtn.addEventListener('click', openModal);
window.addEventListener('click', outsideModal);

function openModal() {
  modalCntnt.style.top = '0';
  modal.style.opacity = '0.94';
  modal.style.visibility = 'visible';
}
function closeModal() {
  modalCntnt.style.top = '100%';
  modal.style.opacity = '0';
  modal.style.visibility = 'hidden';
  modal.style.transition = '0.5s';
}
function outsideModal(e) {
  if (e.target == modal) {
    modalCntnt.style.top = '100%';
    modal.style.opacity = '0';
    modal.style.visibility = 'hidden';
    modal.style.transition = '0.5s';
  }
}