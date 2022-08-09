const menu = [
    `Dad died because he couldn't remember his blood type. I will never forget his last words. Be positive.`,
    `Atheism is a non-prophet organisation.`,
    `What do you call a cow on a trampoline? A milk shake!`,
    `Camping is intense.`,
    `Why did the worker get fired from the orange juice factory? Lack of concentration`
];
const btn = document.querySelector('.btn');
const result =document.querySelector('.text');

btn.addEventListener('click', () => {
    const random = Math.floor(Math.random() * menu.length);
    result.innerHTML = `<p class="text">${menu[random]}</p>`;
    console.log(random);
});