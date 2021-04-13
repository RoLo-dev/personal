// This is for the mobile nav
let mobileOnly = window.matchMedia('(max-width: 700px)');
const openIcon = document.querySelectorAll('.openIcon');
const openNavBtn = document.getElementById('mobile-openBtn');
const leftCol = document.getElementById('leftCol');
const floatingMenu = document.getElementById('floating-menu');
const specialties = document.getElementById('mySpecialties');

openNavBtn.addEventListener('click', openNavMenu);
floatingMenu.addEventListener('click', openNavMenu);
leftCol.addEventListener('click', outsideClick);

function removeFade(){
  if(mobileOnly.matches){
    specialties.setAttribute("data-aos", "");
  }
}
removeFade();

function openNavMenu(){
  openIcon.forEach((menu) => {
    menu.classList.toggle('animate');
  })
  leftCol.classList.toggle('show');
}
function outsideClick(e) {
  if(e.target === leftCol) {
    leftCol.classList.toggle('show');
    openIcon.forEach((menu) => {
      menu.classList.toggle('animate');
    })
  }
}

// This is for the gallery
let galleryImgs = document.querySelectorAll('.graphicsGallery');
let previousImg;
let windowWidth = window.innerWidth;

galleryImgs.forEach((image, index) => {
  image.addEventListener('click', function() {
    let getElementCSS = window.getComputedStyle(image);
    let getFullImgURL = getElementCSS.getPropertyValue('background-image');
    let getImgURL = getFullImgURL.split('/imgs/');
    let setNewImgURL = getImgURL[1].replace('")', '');
  
    previousImg = index + 1;
    let container = document.body;
    let newImgWindow = document.createElement('div');
    container.appendChild(newImgWindow);
    newImgWindow.setAttribute('class', 'img-window');
    newImgWindow.setAttribute('onclick', 'closeImg()');
  
    let newImg = document.createElement('img');
    newImgWindow.appendChild(newImg);
    newImg.setAttribute('src', `imgs/${setNewImgURL}`);
  });
})

function closeImg() {
  document.querySelector('.img-window').remove();
}

// This is for the smooth scroll
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 200
});

// This is for the modal for the resume
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
const mobileMenu =  document.getElementById('floating-menu');

function scrollFunction() {
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
    mobileMenu.style.visibility = "visible";
  }
}

// Updating the year on the footer
let today = new Date();
let year = today.getFullYear();
let footerYear = document.getElementById('footer-year');

function updateYear() {
  footerYear.innerText = year;
  console.log(year);
}

updateYear();

AOS.init({
    offset: 300,
    duration: 850
});