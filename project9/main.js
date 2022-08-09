const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const video = document.getElementById("video");

play.addEventListener("click", function() {
    video.play();
});
pause.addEventListener("click", function() {
    video.pause();
});