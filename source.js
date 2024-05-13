const product = [
    {
        id: 0,
        image: 'monthly.png',
        title: 'Monthly Blessing',
        price: 81000,
    },
    {
        id: 1,
        image: 'genesis.jpg',
        title: '60 Genesis Crystal',
        price: 16500,
    },
    {
        id: 2,
        image: 'genesis.jpg',
        title: '300 Genesis Crystal',
        price: 81000,
    },
    {
        id: 3,
        image: 'genesis.jpg',
        title: '980 Genesis Crystal',
        price: 255000,
    },
    {
        id: 0,
        image: 'genesis.jpg',
        title: '1980 Genesis Crystal',
        price: 489000,
    },
    {
        id: 0,
        image: 'genesis.jpg',
        title: '3280 Genesis Crystal',
        price: 815000,
    },
    {
        id: 0,
        image: 'genesis.jpg',
        title: '6480 Genesis Crystal',
        price: 1629000,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>Rp ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "RP "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}