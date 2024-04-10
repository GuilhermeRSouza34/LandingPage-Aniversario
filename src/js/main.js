AOS.init();

const eventDate = new Date("Mar 24, 2025 11:42:00");
const eventTimeStamp = eventDate.getTime();


const timeCounter = setInterval(function() {
    const now = new Date();
    const nowTimeStamp = now.getTime();

    const eventDistance = eventTimeStamp - nowTimeStamp;

    const dayInMs = 1000 * 60 * 60 * 24;
    const hourInMs = 1000 * 60 * 60;
    const minInMs = 1000 * 60;

    const daysToEvent = Math.floor(eventDistance / dayInMs);
    const hoursToEvent = Math.floor(eventDistance % dayInMs / hourInMs);
    const minutesToEvent = Math.floor(eventDistance % hourInMs / minInMs);
    const secondsToEvent = Math.floor((eventDistance % minInMs) / 1000);

    document.getElementById('counter').innerHTML = `${daysToEvent}d ${hoursToEvent}h ${minutesToEvent}m ${secondsToEvent}s`;

    if (eventDistance < 0) {
        clearInterval(timeCounter);
        document.getElementById('counter').innerHTML = 'Too late';
    }

}, 1000)