const showbtn = document.querySelector(".btn-menu");
const closebtn = document.querySelector(".set-icon");
const body = document.querySelector(".content-center");


showbtn.addEventListener("click", function (content) {
    body.classList.toggle("show")
});
closebtn.addEventListener("click", function () {
    body.classList.remove("show")
});