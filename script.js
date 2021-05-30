const h = document.querySelector('.hr');
const m = document.querySelector('.min');
const s = document.querySelector('.sec');
const ampm = document.querySelector('.ampm');

function myClock() {
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if(hour>12){
        hour -= 12;
        ampm.textContent = "PM";
    }
    if(hour<10)
        hour = `0${hour}`;
    if(minutes<10)
        minutes = `0${minutes}`;
    if(seconds<10)
        seconds = `0${seconds}`;

    h.textContent = hour;
    m.textContent = minutes;
    s.textContent = seconds;
}

setInterval(myClock , 1000);