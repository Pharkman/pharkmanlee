let toggleBtn =  document.querySelector('.mode-change');
const body = document.querySelector('body')
var logoImg = document.querySelector(".logo-img");



// Function to toggle dark mode class
function toggleDarkMode() {
    body.classList.toggle('dark-mode');
    if (body.classList.contains("dark-mode")) {
        toggleBtn.innerHTML = "<i class='bx bx-sun'></i>";
        logoImg.src = "/images/logo-light.png";
        localStorage.setItem('darkMode', 'enabled');
    } else {
        toggleBtn.innerHTML = "<i class='bx bx-moon'></i>";
        logoImg.src = "/images/logo-dark.png";
        localStorage.setItem('darkMode', null);
    }
}

// Check local storage for dark mode preference
const darkMode = localStorage.getItem('darkMode');
if (darkMode === 'enabled') {
    body.classList.add('dark-mode');
    toggleBtn.innerHTML = "<i class='bx bx-sun'></i>";
    logoImg.src = "/images/logo-light.png";
}

// Event listener for toggle button
toggleBtn.addEventListener('click', toggleDarkMode);


 
 
 menu = document.querySelector('#menu-btn');
 let navlist = document.querySelector('nav ul');

menu.addEventListener('click', () =>{
    navlist.classList.toggle("display");

});

const sr = ScrollReveal ({
    distance: '100px',
    duration: 2600,
    delay: 450,
    reset: true
});
sr.reveal('.heading-cont-img', {delay:600, origin: 'bottom'});
sr.reveal('.work-exp', {delay:600, origin: 'bottom'});

sr.reveal('.wht-ppl-sy-abt-me', {delay:600, origin: 'bottom'});
sr.reveal('.projects works-pro', {delay:600, origin: 'bottom'});

sr.reveal('.let-work', {delay:500, origin: 'bottom'});
sr.reveal('.social-platforms', {delay:600, origin: 'bottom'});

sr.reveal('.img1', {delay:400, origin: 'left'});
sr.reveal('.img3', {delay:400, origin: 'right'});
sr.reveal('.half-img1', {delay:400, origin: 'top'});
sr.reveal('.half-img2', {delay:400, origin: 'bottom'});








