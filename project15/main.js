const data = [
    {
        id: "1",
        image: 'https://vannilla-js-basic-project-15-slider.netlify.app/img-1.jpeg',
        name: "1",
    },
    {
        id: "2",
        image: "https://vannilla-js-basic-project-15-slider.netlify.app/img-2.jpeg",
        name: "2",
    },
    {
        id: "3",
        image: "https://vannilla-js-basic-project-15-slider.netlify.app/person-1.jpeg",
        name: "3",
    }
]
const content_element = document.querySelector("#content")
const btn_back = document.querySelector(".btn-prev")
const btn_next = document.querySelector(".btn-next")
const image = document.getElementById("image")


btn_back.addEventListener("click", function () {
    current_key = document.getElementById("key").innerText;
    prev_key = (current_key == 1) ? data.length : --current_key;
    prev_item = data.find(element => element.id == prev_key);
    render(prev_item)
});
btn_next.addEventListener("click", function () {
    current_key = document.getElementById("key").innerText;
    prev_key = (current_key == data.length) ? 1 : ++current_key;
    prev_item = data.find(element => element.id == prev_key);
    render(prev_item)
});

const render = (item) => {
    image.src= item.image
    document.getElementById("key").innerText = item.id;
}

