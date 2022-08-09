const btnhistory = document.querySelector(".btn-history");
const btnvision = document.querySelector(".btn-vision");
const btngoals = document.querySelector(".btn-goals");
const history = document.querySelector(".history");
const vision = document.querySelector(".vision");
const goals = document.querySelector(".goals");


btnhistory.addEventListener("click", function(){
    history.classList.add("open");
    vision.classList.remove("open");
    goals.classList.remove("open");
    btnhistory.style.backgroundColor ="#fff";
    btnvision.style.backgroundColor ="#9b9992";
    btngoals.style.backgroundColor ="#9b9992";
});
btnvision.addEventListener("click", function(){
    history.classList.remove("open");
    vision.classList.add("open");
    goals.classList.remove("open");
    btnvision.style.backgroundColor ="#fff";
    btnhistory.style.backgroundColor ="#9b9992";
    btngoals.style.backgroundColor ="#9b9992";
});
btngoals.addEventListener("click", function(){
    history.classList.remove("open");
    vision.classList.remove("open");
    goals.classList.add("open");
    btngoals.style.backgroundColor ="#fff";
    btnvision.style.backgroundColor ="#9b9992";
    btnhistory.style.backgroundColor ="#9b9992";
});
