// DECLARE updateClock()
function updateClock() {
    // INITIALIZE currentTIme
    const currentTime = new Date();
    // initialize hours and convert to 12 hour system with remainder operator, if remainder from division by 12 equals 0 then assign 12
    const hours = String(currentTime.getHours()).padStart(2,"0");
    // initialize minutes
    const minutes = String(currentTime.getMinutes()).padStart(2,"0");
    // initialize seconds
    const seconds = String(currentTime.getSeconds()).padStart(2,"0");
    // initialize amOrPm, if military current time is greater or equal to 12 then it is PM, else AM
    const amOrPm = currentTime.getHours() >= 12 ? "PM" : "AM";
    // show formatted currentTime data in div id clock
    document.getElementById("clock").textContent = `Time: ${hours}:${minutes}:${seconds} ${amOrPm}`;
}

function setAlarm() {
    // initialize alarmHour and convert id alarmHour input to int
    const alarmHour = parseInt(document.getElementById("alarmHours").value);
    // initialize alarmMinute and convert id alarmMinute input to int
    const alarmMinute = parseInt(document.getElementById("alarmMinutes").value);
    // initialize amPm with am or pm from dropdown id amPm
    const amPm = document.querySelector('input[name="amPm"]:checked').value;
    
    let alarmHour24 = alarmHour;
    if (amPm === "PM" && alarmHour!== 12) {
        alarmHour += 12;
    } else if (amPm === "AM" && alarmHour === 12) {
        alarmHour24  = 0;
    }

    const currentTime = new Date();
    const currentHour24 = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();

    if (
        alarmHour24 < currentHour24 ||
        (alarmHour24 === currentHour24 && alarmMinute <= currentMinute)
    ) {
        document.getElementById("alarmMessage").textContent = "Alarm time has already passed for today";
        return;
    }

    const timeUntilAlarm = (alarmHour24 - currentHour24) * 60 + (alarmMinutes - currentMinute);

    setTimeout(() => {
        document.getElementById("alarmMessage").textContent = "Alarm! It's time!";
    }, timeUntilAlarm * 60000);

    document.getElementById("alarmMessage").textContent = "Alarm set!";

}

document.querySelector('.set-alarm').addEventListener('click',setAlarm);


updateClock();
    // call function to update clock every 1000 ms
    setInterval(updateClock, 1000);