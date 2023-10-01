// DECLARE updateClock()
function updateClock() {
    // INITIALIZE currentTIme
    const currentTime = new Date();
    // initialize hours and convert to 12 hour system with remainder operator, if remainder from division by 12 equals 0 then assign 12
    let hours = currentTime.getHours();
    // initialize amOrPm, if military current time is greater or equal to 12 then it is PM, else AM
    const amOrPm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;
    // initialize minutes
    const minutes = String(currentTime.getMinutes()).padStart(2,"0");
    // initialize seconds
    const seconds = String(currentTime.getSeconds()).padStart(2,"0");

    // show formatted currentTime data in div id clock
    document.getElementById("clock").textContent = `Time: ${hours}:${minutes}:${seconds} ${amOrPm}`;
}

function setAlarm() {
    document.getElementById("alarmMessage").textContent = "Alarm set!";
    // initialize alarmHour and convert id alarmHour input to int
    let alarmHour = parseInt(document.getElementById("alarmHours").value);
    // initialize alarmMinute and convert id alarmMinute input to int
    const alarmMinute = parseInt(document.getElementById("alarmMinutes").value);
    // initialize amPm with am or pm from dropdown id amPm
    const amPm = document.querySelector('input[name="ampm"]:checked').value;
    
    let alarmHour24 = alarmHour;
    if (amPm === "PM" && alarmHour!== 12) {
        alarmHour += 12;
    } else if (amPm === "AM" && alarmHour === 12) {
        alarmHour24  = 0;
    }

    const currentTime = new Date();
    const currentHour24 = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();

    let timeUntilAlarm = (alarmHour24 * 60 + alarmMinute) - (currentHour24 * 60 + currentMinute);

    if (timeUntilAlarm <= 0) {
        timeUntilAlarm += 24 * 60;
    }

   

    setTimeout(() => {
        alert("IT'S MORBIN TIME!!!!!!!!!!!")
    }, timeUntilAlarm * 60000);

    document.getElementById("alarmMessage").textContent = "Alarm set!";

}

document.querySelector('.set-alarm').addEventListener('click',setAlarm);


updateClock();
    // call function to update clock every 1000 ms
    setInterval(updateClock, 1000);