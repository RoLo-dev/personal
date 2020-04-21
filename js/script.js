// This is for the mobile nav
let mobileOnly = window.matchMedia('(max-width: 700px)');
const open = document.getElementById('open');
const close = document.getElementById('close');
const leftCol = document.getElementById('leftCol');
const mobileMenu =  document.getElementById('mobile-menu');

open.addEventListener('click', add);
close.addEventListener('click', exit);

function removeFade(){
  if(mobileOnly.matches){
    console.log('working');
    mobileMenu.setAttribute('data-aos', 'none');
  }
}
removeFade();

function add(){
  leftCol.classList.add('show');
}
function exit(){
  leftCol.classList.remove('show');
}

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
  $("a").on('click', function(event) {

    if (this.hash !== "b") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 300, function(){

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

// This is for the mobile menu that pops up when you scroll down
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
    mobileMenu.style.visibility = "visible";
  }
}

AOS.init({
    offset: 300,
    duration: 850
});