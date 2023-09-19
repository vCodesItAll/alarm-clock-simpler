// DECLARE updateClock()
function updateClock() {
    // INITIALIZE currentTIme
    const currentTime = new Date();
    // initialize hours and convert to 12 hour system with remainder operator, if remainder from division by 12 equals 0 then assign 12
    const hours = currentTime.getHours() % 12  || 12;
    // initialize minutes
    const minutes = currentTime.getMinutes();
    // initialize seconds
    const seconds = currentTime.getSeconds();
    // initialize amOrPm, if military current time is greater or equal to 12 then it is PM, else AM
    const amOrPm = currentTime.getHours() >= 12 ? "PM" : "AM";
    // show formatted currentTime data in div id clock
    document.getElementById("clock").textContent = `(Time: ${hours}:${minutes}:${seconds} ${amOrPm})`;
}

function setAlarm() {
    // initialize alarmHour and convert id alarmHour input to int
    const alarmHour = parseInt(document.getElementById("alarmHour").value);
    // initialize alarmMinute and convert id alarmMinute input to int
    const alarmMinute = parseInt(document.getElementById("alarmMinute").value);
    // initialize amPm with am or pm from dropdown id amPm
    const amPm = document.getElementById("amPm").value;
    
}

updateClock();
    // call function to update clock every 1000 ms
    setInterval(updateClock, 1000);