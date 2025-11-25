function updateClock() {
    const clocktext = document.getElementById('clockText');
    if (!clocktext) return;
    const now = new Date();
    const datePart = now.toLocaleDateString(undefined, {
        weekday: 'short',
        month: 'short',
        day: 'numeric'
    });
    const timePart = now.toLocaleTimeString(undefined, {
        hour: '2-digit',
        minute: '2-digit'
    });
    clocktext.textContent = datePart + ' · ' + timePart;
}

updateClock();
setInterval(updateClock, 1000);
