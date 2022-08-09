const value = document.getElementById("value");
const value2 = document.getElementById("value2");
const btns = document.querySelectorAll(".btn");

const btn_desc = document.querySelector(".btn-one")
btn_desc.addEventListener("click", () => {
    let current_value = value.textContent;
    value.textContent = --current_value;
    setColor();
})
const btn_reset = document.querySelector(".btn-two")
btn_reset.addEventListener("click", () => {
    value.textContent = 0;
    setColor();
})
const btn_inc = document.querySelector(".btn-three")
btn_inc.addEventListener("click", () => {
    let current_value = value.textContent;
    value.textContent = ++current_value;
    setColor();
})

const btn_desc2 = document.querySelector(".btn-one2")
btn_desc2.addEventListener("click", () => {
    let current_value = value2.textContent;
    value2.textContent = --current_value;
    setColor();
})
const btn_reset2 = document.querySelector(".btn-two2")
btn_reset2.addEventListener("click", () => {
    value2.textContent = 0;
    setColor();
})
const btn_inc2 = document.querySelector(".btn-three2")
btn_inc2.addEventListener("click", () => {
    let current_value = value2.textContent;
    value2.textContent = ++current_value;
    setColor();
})

const setColor = () => {
    if(value.textContent>0){
        value.style.color= "green"
    }else if(value.textContent<0){
        value.style.color= "red";
    }else{
        value.style.color = "black";
    }
}