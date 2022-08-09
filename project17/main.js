var images1 = document.querySelectorAll(".container .image img");
var images = document.querySelectorAll(".container2 .image img");
var next = document.querySelector(".next");
var prev = document.querySelector(".prev");
var close = document.querySelector(".close");
var navcontainer = document.querySelector(".nav-container");
var navimage = document.querySelector(".nav-image");


var indexx=0;
images.forEach((item, index)=>{
    item.addEventListener("click", function(){
        indexx= index;
        navimage.src =images[indexx].src;
        navcontainer.classList.add("show");
    });
});
images1.forEach((item, index)=>{
    item.addEventListener("click", function(){
        indexx = index;
        navimage.src =images1[indexx].src
        navcontainer.classList.add("show");
    });
});
close.addEventListener("click", function(){
    navcontainer.classList.remove("show");
});
prev.addEventListener("click", function(){
    indexx--;
    console.log(1);
    navimage.src = images1[indexx].src
    navcontainer.classList.add("show");
});
next.addEventListener("click", function(){
    indexx++;
    console.log(2);
    navimage.src = images1[indexx].src
    navcontainer.classList.add("show");
});


