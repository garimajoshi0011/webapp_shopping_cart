let shop = document.getElementById("shop");

let shopeItemData = [
];

let basket = [];


let ShopItemsData =   [
    {
        id: "item1",
        name: "Casual Shirt",
        price: "3400 Rs",
        desc: "We are committed to making a positive impact on our customers",
        img: "OnlineShoping-cart-js-product-images/images/img-1.jpg"
    },
    {
        id: "item2",
        name: "Formal Shirt",
        price: "4400 Rs",
        desc: "We are committed to making a positive impact on our customers",
        img: "OnlineShoping-cart-js-product-images/images/img-2.jpg"
    },
    {
        id: "item3",
        name: "T-Shirt",
        price: "2400 Rs",
        desc: "We are committed to making a positive impact on our customers",
        img: "OnlineShoping-cart-js-product-images/images/img-3.jpg"
    },
    {
        id: "item4",
        name: "Mens Suit ",
        price: "8400 Rs",
        desc: "We are committed to making a positive impact on our customers",
        img: "OnlineShoping-cart-js-product-images/images/img-4.jpg"
    }
]

let generateShop = () => {
    return (shop.innerHTML = ShopItemsData.map((Items) => {
        return `      
        <div id=product-id-${Items.id} class="item">
        <img width= "222" src=${Items.img} alt="">
       <div class="details">
        <h3>${Items.name}</h3>
        <p>${Items.desc}</p>
        <div class="price-quantity">
            <h2>${Items.price}</h2>
            <div class="button">
                <i onclick="decrement(${Items.id})"class="bi bi-dash-lg"></i>
                <div id='${Items.id}'class="quantity">0</div>
                <i onclick="increment(${Items.id})" class="bi bi-plus"></i>
                
            </div>
        </div>
       </div>
    </div>`
    }).join(" "));
};

generateShop();

let increment = (id) => {
    let selectedItem = id;
    let search= basket.find((itemm) => itemm.id===selectedItem.id);
    

    if(search===undefined){
    basket.push({
        id:selectedItem.id,
        item:1,
    });
}
else{
    search.item+= 1;
}

    //localStorage.setItem("data", JSON.stringify(basket));
    update(selectedItem.id);
    
};
let decrement = (id) => {
    let selectedItem = id;
    let search= basket.find((itemm) => itemm.id===selectedItem.id);
    

    if(search.item===0)
      return;

else{
    search.item-= 1;
}

    update(selectedItem.id);
};

let update = (id) => {
    let search=basket.find((itemm)=>itemm.id===id);
    console.log(search.item);
    document.getElementById(id).innerHTML=search.item;
    calculator();
};

calculator = ()=>{
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML=basket.map((x) => x.item).reduce((x,y)=>x+y,0);
}; 