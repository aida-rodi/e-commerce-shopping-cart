// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
const products = [
   {
        id: 1,
        name: 'Cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
let cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
let cart = [];

let total = 0;

let productCount = document.querySelector(".badge");

// Exercise 1
function buy(id) {
    for (let i = 0; i < products.length; i++) {
        const product = products[i]
        if (id === product.id) {
            cartList.push(product)
            console.log('cartList:')
            console.log(cartList)
            break
        }
    }
    productCount.innerText = cartList.length
}

// Exercise 2
function cleanCart() {
    cartList = []
    cart = []
    total = 0
    productCount.innerText = 0
    printCart()
    console.log('empty cartList:')
    console.log(cartList)
    console.log('empty cart:')
    console.log(cart)
}

// Exercise 3
function calculateTotal() {
    for (let i = 0; i < cart.length; i++) {
        const cartProduct = cart[i]
        total = total + cartProduct.subtotalWithDiscount
    };
    console.log(total)
}

// Exercise 4
function generateCart() {
    cartListLoop:
    for (let i = 0; i < cartList.length; i++) {
        const product = cartList[i]

        
        for (let j = 0; j < cart.length; j++) {
            const cartProduct = cart[j]

            if (product.id === cartProduct.id) {
                cartProduct.quantity = cartProduct.quantity +1
                cartProduct.subtotal = cartProduct.price * cartProduct.quantity
                cartProduct.subtotalWithDiscount = cartProduct.price * cartProduct.quantity
                continue cartListLoop
            }
        }
        product.quantity = 1
        product.subtotal = product.price * product.quantity
        product.subtotalWithDiscount = product.price * product.quantity
        cart.push({...product})
    }

    console.log('cart:')
    console.log(cart)
}

// Exercise 5
function applyPromotionsCart() {
    const OIL_PROMO_PRICE = 10
    const CUPCAKE_PROMO_PRICE = 2/3

    cartLoop:
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i]
        if (product.id === 1 && product.quantity >= 3) {
            product.subtotalWithDiscount = product.quantity * OIL_PROMO_PRICE
            continue cartLoop
        }
        if (product.id === 3 && product.quantity >= 10) {
            product.subtotalWithDiscount = product.quantity * product.price * CUPCAKE_PROMO_PRICE
            continue cartLoop
        }
        
    }

    console.log('Cart with discount:')
    console.log(cart)
}

// Exercise 6
function printCart() {
    cart = []
    generateCart()
    applyPromotionsCart()
    total = 0
    calculateTotal()

    const formattedCart = cart.map((product) => {
        return `
        <tr>
            <th scope="row">${product.name}</th>
            <td>$${product.price}</td>
            <td>${product.quantity}</td>
            <td>$${product.subtotalWithDiscount.toFixed(2)}</td>
        </tr>`;
    });

    document.getElementById("cart_list").innerHTML = formattedCart.join('')
    document.getElementById("total_price").innerHTML = total.toFixed(2)
}

// Exercise 7


// ** Nivell II **

// Exercise 8
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 9
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

function open_modal(){
	console.log("Open Modal");
	printCart();
}