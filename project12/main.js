const countdownElement = document.getElementById('countdown');
var countDownDate = new Date(countdownElement.innerText).getTime();

const secondsElement = document.getElementById('seconds');
const minutesElement = document.getElementById('minutes');
const hoursElement = document.getElementById('hours');
const daysElement = document.getElementById('days');

var calcDistance = () => {
    let now = new Date().getTime();
    var distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    secondsElement.innerText = seconds;
    minutesElement.innerText = minutes;
    hoursElement.innerText = hours;
    daysElement.innerText = days;
}

calcDistance();

var timer = setInterval(() => {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    console.log(distance)
    calcDistance();
    if (distance < 0) {
        clearInterval(x);
    }
}, 1000)