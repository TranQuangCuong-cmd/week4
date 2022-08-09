const number = document.querySelectorAll(".number");
let interval = 0;

number .forEach(function(valuenumber) {
    let star = 0;
    let end = parseInt(valuenumber.getAttribute("data-value"));
    let duration =Math.floor(interval/end);
    let count = setInterval(function() {
        star += 1;
        valuenumber.textContent=star;
        if(star==end){
            clearInterval(count);
        }
    },duration);
});