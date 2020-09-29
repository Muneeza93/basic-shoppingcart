var cart = document.querySelectorAll('.add-cart');

let products = [
    {
        name: 'sofa chair',
        tag: 'sofachair',
        price: 900000,
        inCart: 0
    },
    {
        name: 'table',
        tag: 'table',
        price: 800000,
        inCart: 0
    },
    {
        name: 'leather set',
        tag: 'leather set',
        price: 2100000,
        inCart: 0
    },
    {
        name: 'TV stand',
        tag: 'TV stand',
        price: 1000000,
        inCart: 0
    },
]

for(let i = 0; i < cart.length; i++) {
    cart[i].addEventListener('click', () => {
        // console.log('added to cart',products[i]);
        cartNumbers(products[i]);
        totalCost(products[i]);
    });
    
};

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers (products){
    // console.log('The product clicked', products);
    var productNumbers = localStorage.getItem('cartNumbers');
    
    productNumbers = parseInt(productNumbers);
    if(productNumbers) {

        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setproduct(products);
};


function setproduct(products) {
    // console.log('Inside of setItem function');
    // console.log('My product is',products);

    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null) {
        if(cartItems[products.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [products.tag]: products
            }
        }
        cartItems[products.tag].inCart +=1;
    } else {
        products.inCart = 1;
        cartItems = {
            [products.tag]: products
        };
    };
    

    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

function totalCost(product) {
    // console.log('the product price is', product.price);
    let cartCost = localStorage.getItem('totalCost');
    console.log('My cartCost is', cartCost);

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost',cartCost + product.price)
    } else {
        localStorage.setItem('totalCost', product.price)
    }
}

onLoadCartNumbers();
