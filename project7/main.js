const clickicon1 =document.querySelector(".icon1");
const clickicon2 =document.querySelector(".icon2");
const clickicon3 =document.querySelector(".icon3");
const contenttext1 =document.querySelector(".content-text1");
const contenttext2 =document.querySelector(".content-text2");
const contenttext3 =document.querySelector(".content-text3");


clickicon1.addEventListener("click", function(){
    contenttext1.classList.toggle("open");
    contenttext2.classList.remove("open");
    contenttext3.classList.remove("open");
 });
 clickicon2.addEventListener("click", function(){
    contenttext2.classList.toggle("open");
    contenttext1.classList.remove("open");
    contenttext3.classList.remove("open");

 });
 clickicon3.addEventListener("click", function(){
    contenttext3.classList.toggle("open");
    contenttext2.classList.remove("open");
    contenttext1.classList.remove("open");

 });