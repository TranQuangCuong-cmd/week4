const menu = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-2.jpeg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-3.jpeg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-4.jpeg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 22.99,
        img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-5.jpeg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 18.99,
        img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-6.jpeg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-7.jpeg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 12.99,
        img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-8.jpeg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: 16.99,
        img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "steak dinner",
        category: "dinner",
        price: 39.99,
        img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-10.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
];

const btnAll = document.getElementById('all')
const btnBreakfast = document.getElementById('breakfast')
const btnLunch = document.getElementById('lunch')
const btnShakes = document.getElementById('shakes')
const btnDinner = document.getElementById('dinner')
const contentElement= document.getElementById('content')
const render = (items) => {
    let html="";
    items.forEach((item) => {
        html += `
        <div class="menu-item">
            <div class="image">
                <img src="${item.img}" alt="">
            </div>
            <div class ="item-content">
                <div class="heading-item">
                    <h4>${item.title}</h4>
                    <h4 class="monney">$${item.price}</h4>
                </div>
                <p class="p-content">${item.desc}</p>
            </div>
        </div>
        `
    }) 
    contentElement.innerHTML = html;
}

render(menu)

btnAll.addEventListener('click', () => {
    render(menu)
})

btnBreakfast.addEventListener('click', () => {
    console.log('Breakfast')
    var items = menu.filter(element => element.category == "breakfast")
    render(items)
})

btnLunch.addEventListener('click', () => {
    var items = menu.filter(element => element.category == "lunch")
    render(items)
})

btnShakes.addEventListener('click', () => {
    var items = menu.filter(element => element.category == "shakes")
    render(items)
})

btnDinner.addEventListener('click', () => {
    var items = menu.filter(element => element.category == "dinner")
    render(items)

})


