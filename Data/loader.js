window.addEventListener('load', function() {
    // Simulate a loading delay of 2 seconds before hiding the preloader and displaying the content
    setTimeout(function() {
        // Slide up the entire loading page
        var loadingPage = document.querySelector('.preloader');
        loadingPage.style.transform = 'translateY(-100%)';

        // Show the content after the sliding animation completes
        setTimeout(function() {
            loadingPage.style.display = 'none'; // Hide the loading page
            document.querySelector('.load-content').style.display = 'block'; // Show the content
        }, 1000); // Wait for the sliding animation to complete (0.5 seconds)
    }, 3500); // 2000 milliseconds = 2 seconds
});