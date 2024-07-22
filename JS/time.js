document.addEventListener('DOMContentLoaded', () => {
    const currentTimeElement = document.getElementById('currentTime');

    function updateTime() {
        const now = new Date();
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const day = days[now.getDay()];
        let hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        const hoursString = hours.toString().padStart(2, '0');
        const timeString = `${day}, ${hoursString}:${minutes}:${seconds} ${ampm}`;
        currentTimeElement.textContent = timeString;
    }

    // Update the time every second
    setInterval(updateTime, 1000);

    // Initial call to display the time immediately on load
    updateTime();
});
