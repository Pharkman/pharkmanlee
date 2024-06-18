document.addEventListener("DOMContentLoaded", function() {
    const cursor = document.querySelector(".custom-cursor");

    // Update cursor position on mouse move
    window.addEventListener("mousemove", function(e) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

    // Add hover effect on elements with .hover-effect class
    const hoverElements = document.querySelectorAll(".hover-effect");
    hoverElements.forEach(element => {
        element.addEventListener("mouseenter", function() {
            cursor.classList.add("hover");
        });
        element.addEventListener("mouseleave", function() {
            cursor.classList.remove("hover");
        });
    });

    // Add click effect on elements with .click-effect class
    const clickElements = document.querySelectorAll(".click-effect");
    clickElements.forEach(element => {
        element.addEventListener("mousedown", function() {
            cursor.classList.add("click");
        });
        element.addEventListener("mouseup", function() {
            cursor.classList.remove("click");
        });
    });
});
