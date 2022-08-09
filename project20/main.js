const menu = [
    {
        id: 1,
        title: "High-Back Bench",
        category: "ikea",
        price: 9.99,
        img: "https://dl.airtable.com/.attachments/14ac9e946e1a02eb9ce7d632c83f742f/4fd98e64/product-1.jpeg",
    },
    {
        id: 2,
        title: "Albany Table",
        category: "marcos",
        price: 79.99,
        img: "https://dl.airtable.com/.attachments/f3450755e165557344f7d6433242431e/93533098/product-1.jpeg",
    },
    {
        id: 3,
        title: "Accent Chair",
        category: "caressa",
        price: 25.99,
        img: "https://dl.airtable.com/.attachments/f292eaec4fea8a791b037c759ae559c9/2d5e34d5/product-4.jpeg",
    },
    {
        id: 4,
        title: "Wooden Table",
        category: "caressa",
        price: 45.99,
        img: "https://dl.airtable.com/.attachments/5b3ad76dfd6ca5e31810cb99141c7ede/69829b2f/pexels-dominika-roseclay-1139785.jpg",
    },
    {
        id: 5,
        title: "Dining Table",
        category: "caressa",
        price: 6.99,
        img: "https://dl.airtable.com/.attachments/06bbede65bd09196b4a81a8e7b59e683/8af0aeb5/product-8.jpg",
    },
    {
        id: 6,
        title: "Sofa Set",
        category: "liddy",
        price: 69.99,
        img: "https://dl.airtable.com/.attachments/443aa7884207dae7c3cc127262a2f993/d4f33110/product-1.jpeg",
    },
    {
        id: 7,
        title: "Modern Bookshelf",
        category: "marcos",
        price: 8.99,
        img: "https://dl.airtable.com/.attachments/a889b1928b134c2ca0b5bbca32ea9abf/65c8a9a6/product-7.jpg",
    },
    {
        id: 8,
        title: "Emperor Bed",
        category: "liddy",
        price: 21.99,
        img: "https://dl.airtable.com/.attachments/10fdf29ae17f2d1f98770ae42584d021/82b9403f/product-6.jpg",
    },
    {
        id: 9,
        title: "Utopia Sofa",
        category: "marcos",
        price: 39.95,
        img: "https://dl.airtable.com/.attachments/6ac7f7b55d505057317534722e5a9f03/9183491e/product-3.jpg",
    },
    {
        id: 10,
        title: "Entertainment Center",
        category: "liddy",
        price: 29.98,
        img: "https://dl.airtable.com/.attachments/da5e17fd71f50578d525dd5f596e407e/d5e88ac8/product-2.jpg",
    },
    {
        id: 11,
        title: "Albany Sectional",
        category: "ikea",
        price: 10.99,
        img: "https://dl.airtable.com/.attachments/05ecddf7ac8d581ecc3f7922415e7907/a4242abc/product-1.jpeg",
    },
    {
        id: 12,
        title: "Leather Sofa",
        category: "liddy",
        price: 9.99,
        img: "https://dl.airtable.com/.attachments/3245c726ee77d73702ba8c3310639727/f000842b/product-5.jpg",
    },
];

const btnAll = document.getElementById('all')
const btnikea = document.getElementById('ikea')
const btnmarcos = document.getElementById('marcos')
const btncaressa = document.getElementById('caressa')
const btnliddy = document.getElementById('liddy')
const contentElement= document.getElementById('content')
const input = document.querySelector('.header input')
const render = (items) => {
    let html="";
    items.forEach((item) => {
        html += ` 
        <div class="product" >
        <img src="${item.img}" alt="">
        <footer>
          <h5 class="product-name">${item.title}</h5>
          <span class="product-price">${item.price}</span>
        </footer>
      </div>`
    }) 
    contentElement.innerHTML = html;
}

 render(menu)

btnAll.addEventListener('click', () => {
    render(menu)
})

btnikea.addEventListener('click', () => {
    var items = menu.filter(element => element.category == "ikea")
    render(items)
})

btnmarcos.addEventListener('click', () => {
    var items = menu.filter(element => element.category == "marcos")
    render(items)
})

btncaressa.addEventListener('click', () => {
    var items = menu.filter(element => element.category == "caressa")
    render(items)
})

btnliddy.addEventListener('click', () => {
    var items = menu.filter(element => element.category == "liddy")
    render(items)

})
input.addEventListener('input',function(e) {
    let txtinput = e.target.value.trim().toLowerCase();
    let productInput = document.querySelector('html .product');
    console.log(productInput);
    productInput.forEach(item=> {
        if (item.innerText.toLowerCase.includes(txtinput)){
            item.classList.remove('none');
        }else{
            item.classList.add('none');
        }
    })
});


