const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dateElement = document.getElementById('date-picker');
const countdownElement = document.getElementById('countdown');
const countdownElementTitle = document.getElementById('countdown-title');
const countdownElementButton = document.getElementById('countdown-button');
const timeElements = document.querySelectorAll('span');

let countdownTitle = '';
let countdownDate = '';
let countdownValue = Date;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const today = new Date().toISOString().split('T')[0];
dateElement.setAttribute('min', today);

function updateDOM() {
    const now = new Date().getTime();
    const distanceToSelectedDate = countdownValue - now;
    const days = Math.floor(distanceToSelectedDate / day);
    const hours = Math.floor((distanceToSelectedDate % day) / hour);
    const minutes = Math.floor((distanceToSelectedDate % hour) / minute);
    const seconds = Math.floor((distanceToSelectedDate % minute) / second);

    countdownElementTitle.textContent = `${countdownTitle}`;
    timeElements[0].textContent = `${days}`; 
    timeElements[1].textContent = `${hours}`; 
    timeElements[2].textContent = `${minutes}`; 
    timeElements[3].textContent = `${seconds}`; 

    inputContainer.hidden = true;
    countdownElement.hidden = false;
}

function updateCountdown(event) {
    event.preventDefault();
    countdownTitle = event.srcElement[0].value;
    countdownDate = event.srcElement[1].value;
    console.log(countdownTitle, countdownDate);
    countdownValue = new Date(countdownDate).getTime();
    console.log(countdownValue);
    updateDOM();
}

countdownForm.addEventListener('submit', updateCountdown);