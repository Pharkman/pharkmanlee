

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

// Initialize GSAP timeline
const tl = gsap.timeline({ defaults: { duration: 1, ease: "power2.out" } });

// Define animations for each element
tl.from('.heading-cont-img', { yPercent: 100, opacity: 0, delay: 0.6 })
  .from('.work-exp', { yPercent: 100, opacity: 0 }, '<0.3')
  .from('.wht-ppl-sy-abt-me', { yPercent: 100, opacity: 0 }, '<0.3')
  .from('.projects.works-pro', { yPercent: 100, opacity: 0 }, '<0.3')
  .from('.let-work', { yPercent: 100, opacity: 0, delay: 0.5 })
  .from('.social-platforms', { yPercent: 100, opacity: 0 }, '<0.3');

// Trigger the timeline when the DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  tl.play(); // Start the animation
});

