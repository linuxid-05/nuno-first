const navIcon = document.getElementById('nav-icon');
const navMenu = document.getElementById('nav-menu');
navIcon.addEventListener('click', (e) => {
  navIcon.classList.toggle('close'); 
  navMenu.classList.toggle('open-menu');
});

