// This is for the mobile nav
let mobileOnly = window.matchMedia('(max-width: 700px)');
const openIcon = document.querySelector('.openIcon');
const openNavBtn = document.getElementById('mobile-openBtn');
const leftCol = document.getElementById('leftCol');
const specialties = document.getElementById('mySpecialties');

openNavBtn.addEventListener('click', openNavMenu);
leftCol.addEventListener('click', outsideClick);

function removeFade(){
  if(mobileOnly.matches){
    specialties.setAttribute("data-aos", "");
  }
}
removeFade();

function openNavMenu(){
  openIcon.classList.toggle('animate');
  leftCol.classList.toggle('show');
}
function outsideClick(e) {
  if(e.target === leftCol) {
    console.log('clicked');
    leftCol.classList.toggle('show');
    openIcon.classList.toggle('animate');
  }
}

// This is for the scrollbar
$(window).scroll(function() {
  var wintop = $(window).scrollTop(), docheight = 

  $(document).height(), winheight = $(window).height();
  var scrolled = (wintop/(docheight - winheight))*100;

  $('.scroll-line').css('width', (scrolled + '%'));
});

// This is for the smooth scroll
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 200
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
  modal.style.opacity = '1';
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
const mobileMenu =  document.getElementById('mobile-menu');

function scrollFunction() {
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
    mobileMenu.style.visibility = "visible";
  }
}

AOS.init({
    offset: 300,
    duration: 850
});