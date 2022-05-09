const eventCountDownTimer = document.querySelector(".event-countdown-timer");
const zero = 00;
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-list");
const navBar = document.querySelector(".nav-bar");
const navLink = document.querySelectorAll(".nav-link");

let countDownDate = new Date("May 14, 2022 10:00:00").getTime();
let x = setInterval(() => {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    eventCountDownTimer.textContent = `${days} Days : ${hours} Hours : ${minutes} Minutes : ${seconds} Seconds`;

    if (distance < 0) {
        eventCountDownTimer.textContent = `${zero} Days: ${zero} Hours: ${zero} Minutes: ${zero} Seconds`;
    }
}, 1000);

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    navBar.classList.toggle("active");
}

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    navBar.classList.remove("active");
}