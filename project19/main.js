const toggle = document.querySelector("button");
const container = document.querySelector(".container");
const post = document.querySelector(".post h2");
const header = document.querySelector(".header h2");
const p = document.querySelector(".post p");


toggle.addEventListener("click", function() {
    container.classList.toggle("show");
    header.classList.toggle("showp");
    toggle.classList.toggle("showbtn");
});