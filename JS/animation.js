document.addEventListener('DOMContentLoaded', () => {
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '50px',
        duration: 1000,
        delay: 200,
        reset: true
    });

    sr.reveal('.hero-text', { delay: 300 });
    sr.reveal('.sub-heading', { delay: 500 });
    sr.reveal('.completed-pro', { interval: 200 });
    sr.reveal('.work-label', { origin: 'left', distance: '100px' });
    sr.reveal('.filter-btn', { scale: 0.85, interval: 200 });
    sr.reveal('.lets-work h1', { delay: 300 });
    sr.reveal('.project-container', { scale: 0.85, delay: 300 });
    sr.reveal('.hello-btn', { delay: 300 });
    sr.reveal('.about-me-cont p', { delay: 500 });
    sr.reveal('.work-cont', { delay: 500 });
    sr.reveal('.img1', { scale: 0.85, delay: 300 });
    sr.reveal('.comapany-experiences', { interval: 200 });
    sr.reveal('.schools-details', { interval: 200 });
    sr.reveal('.js-ppl-wrds', { interval: 200 });
    sr.reveal('.js-favquotes', { interval: 200 });
    sr.reveal('.contact-hd h1', { delay: 300, origin: 'left', distance: '50px' });
    sr.reveal('.contact-hd span', { delay: 500, origin: 'right', distance: '50px' });
    sr.reveal('.profile-name', { delay: 400, origin: 'bottom', distance: '50px' });
    sr.reveal('.hrs-available', { delay: 600, origin: 'top', distance: '50px' });
    sr.reveal('.myWorkingHr', { delay: 800, origin: 'left', distance: '50px' });
    sr.reveal('.social-contact .wep-contact', { interval: 200, origin: 'right', distance: '50px' });
    sr.reveal('.contact-form', { delay: 1000, origin: 'bottom', distance: '50px' });
});
