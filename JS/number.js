
document.addEventListener("DOMContentLoaded", function() {
    const proNumbers = document.querySelectorAll(".pro-number");
    const duration = 4000; // Duration for the counting animation in milliseconds

    proNumbers.forEach(number => {
        const target = parseInt(number.dataset.value);
        const increment = target / duration * 10; // Adjust the increment value as needed for smoother animation

        let current = 0;
        const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
                clearInterval(interval);
                current = target;
            }
            if (current < 100) {
                number.textContent = Math.floor(current);
                number.innerHTML += '<span class="pro-plus">+</span>';
            } else {
                number.textContent = 100;
                number.innerHTML += '<span class="pro-plus">%</span>';
            }
        }, 10); 
    });
});