document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.querySelector('.mode-change');
    const body = document.querySelector('body');
    const modeIcon = document.querySelector('.mode-icon');
    const logo = document.querySelector('.logo-img');

    // Function to toggle dark mode class
    function toggleDarkMode() {
        modeIcon.classList.add('animate');

        setTimeout(() => {
            modeIcon.classList.remove('animate');
        }, 300);

        body.classList.toggle('light-mode');

        if (body.classList.contains('light-mode')) {
            modeIcon.className = 'bx bx-moon nav-icon mode-icon'; // Update the className of the icon
            logo.src = 'images/Dark-Logo.png'; // Update logo for light mode
            localStorage.setItem('darkMode', 'enabled');
        } else {
            modeIcon.className = 'bx bx-sun nav-icon mode-icon'; // Update the className of the icon
            logo.src = 'images/Light-Logo.png'; // Update logo for dark mode
            localStorage.setItem('darkMode', 'disabled');
        }
    }

    // Check local storage for dark mode preference
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
        body.classList.add('light-mode');
        modeIcon.className = 'bx bx-moon nav-icon mode-icon';
        logo.src = 'images/Dark-Logo.png'; // Set logo for light mode based on stored preference
    } else {
        modeIcon.className = 'bx bx-sun nav-icon mode-icon';
        logo.src = 'images/Light-Logo.png'; // Set logo for dark mode by default
    }

    // Event listener for toggle button
    toggleBtn.addEventListener('click', toggleDarkMode);
});

// Scroll Reveal
const sr = ScrollReveal({
    distance: '100px',
    duration: 2600,
    delay: 450,
    reset: true
});
sr.reveal('.heading-cont-img', { delay: 600, origin: 'bottom' });
sr.reveal('.work-exp', { delay: 600, origin: 'bottom' });
sr.reveal('.wht-ppl-sy-abt-me', { delay: 600, origin: 'bottom' });
sr.reveal('.projects.works-pro', { delay: 600, origin: 'bottom' });
sr.reveal('.let-work', { delay: 500, origin: 'bottom' });
sr.reveal('.social-platforms', { delay: 600, origin: 'bottom' });
sr.reveal('.img1', { delay: 400, origin: 'left' });
sr.reveal('.img3', { delay: 400, origin: 'right' });
sr.reveal('.half-img1', { delay: 400, origin: 'top' });
sr.reveal('.half-img2', { delay: 400, origin: 'bottom' });
