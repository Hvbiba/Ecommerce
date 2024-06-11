// All items data
const allItems_js = [
    {
        img: 'img/athletic-cotton-socks-6-pairs.jpg',
        name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
        rate: 3,
        priceCent: 14.55 * 100
    },
    {
        img: 'img/adults-plain-cotton-tshirt-2-pack-teal.jpg',
        name: 'Adults Plain Cotton T-Shirt - 2 Pack',
        rate: 5,
        priceCent: 14.55 * 100
    },
    {
        img: 'img/images-1661783079519.jpg',
        name: 'Mini Rodini Penguin-print backpack',
        rate: 4,
        priceCent: 34.55 * 100
    },
    {
        img: 'img/images-1661735021645.jpg',
        name: 'Cool Formal Pants for Women',
        rate: 3,
        priceCent: 150.99 * 100
    },
    {
        img: 'img/images-1661734130933.jpg',
        name: 'Balenciaga Twisted-jeans jacket',
        rate: 5,
        priceCent: 60.99 * 100
    },
    {
        img: 'img/images-1661735640671.jpg',
        name: 'Cotton dress Jacquemus Robe Hielo dress',
        rate: 5,
        priceCent: 50.99 * 100
    },
    {
        img: 'img/images-1661736457211.jpg',
        name: 'Molo Teen denim jeans skirt',
        rate: 5,
        priceCent: 40.99 * 100
    },
    {
        name: 'Amina Muadi Sita leather sandals',
        img: 'img/images-1661734268135.jpg',
        rate: 5,
        priceCent: 35.99 * 100
    },
    {
        img: 'img/images-1661721639781.jpg',
        name: 'Zegna Shirt blazer',
        rate: 3,
        priceCent: 40.99 * 100
    },
    {
        img: 'img/images-1661737353733.jpg',
        name: 'Stella Kids cotton block coat',
        rate: 5,
        priceCent: 23.99 * 100
    },
    {
        img: 'img/images-1661723063348.jpg',
        name: 'Hoddy Cotton Shirt',
        rate: 4,
        priceCent: 25.99 * 100
    },
    {
        img: 'img/images-1661736021736.jpg',
        name: 'Black Cotton pants',
        rate: 4,
        priceCent: 25.99 * 100
    },
    {
        img: 'img/images-1661721954566.jpg',
        name: 'Pure Cotton Shirt',
        rate: 4,
        priceCent: 20.99 * 100
    },
    {
        img: 'img/images-1661782291990.jpg',
        name: 'Bobo Choses cotton hodddy sweatshirt',
        rate: 3,
        priceCent: 25.99 * 100
    },
    {
        img: 'img/images-1661734565145.jpg',
        name: 'Odissea chunky leather trainers',
        rate: 4,
        priceCent: 20.99 * 100
    },
    {
        img: 'img/images-1661782735746.jpg',
        name: 'Odissea chunky leather trainers',
        rate: 4,
        priceCent: 20.99 * 100
    }
];

let itemText = '';

allItems_js.forEach(function (item) {
    itemText += `
        <div class="card-item">
            <img src="${item.img}" class="item-image" width="170px">
            <div class='itemInfo'>
                <h6>${item.name}</h6>
                <input type="number" placeholder="Q" class="quantity" min="1" value="1">
                <img src="https://supersimple.dev/projects/amazon/images/ratings/rating-${item.rate}.png" class="rate" width="90px">
                <p class="price">$${(item.priceCent / 100).toFixed(2)}</p>
                <h5 class="added"></h5>
                <button type="button" class="btn btn-warning cartBtn">Add To Cart</button>
            </div>
        </div>
    `;
});

var gridCards = document.getElementById('container-items');
gridCards.innerHTML = itemText;

// Add item to cart function
const cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(item, quantity) {
    const existingItem = cart.find(cartItem => cartItem.name === item.name);
    if (existingItem) {
        existingItem.quantity += parseInt(quantity, 10);
    } else {
        item.quantity = parseInt(quantity, 10);
        cart.push(item);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

// Render cart items
function renderCart() {
    const cartContainer = document.getElementById('cartItems');
    cartContainer.innerHTML = ''; // Clear existing content
    cart.forEach(item => {
        cartContainer.innerHTML += `
            <div class="cart-item">
                <img src="${item.img}" class="item-image" width="70px">
                <div class='cartItemInfo'>
                    <h6>${item.name}</h6>
                    <p class="quantity">Quantity: ${item.quantity}</p>
                    <p class="price">$${(item.priceCent / 100).toFixed(2)}</p>
                </div>
            </div>
        `;
    });
}

// Initial load
document.addEventListener('DOMContentLoaded', renderCart);

// Delegate event listener to the parent container
gridCards.addEventListener('click', function (e) {
    if (e.target.classList.contains('cartBtn')) {
        let itemElement = e.target.closest('.card-item');
        let itemName = itemElement.querySelector('h6').textContent;
        let item = allItems_js.find(i => i.name === itemName);
        let quantity = itemElement.querySelector('.quantity').value;
        
        addToCart(item, quantity);
        
        let addedMessage = itemElement.querySelector('.added');
        addedMessage.innerHTML = 'Product Added';
        addedMessage.style.color = '#2e8b57';
    }
});

// PayPal functionality
var payBtn = document.getElementById('payBtn');
var payInput = document.querySelector('#payPal input');

payInput.addEventListener('click', function () {
    payBtn.innerHTML = 'PayPal';
    payBtn.classList.add('paypal_js');

    if (!document.querySelector('.payImg')) {
        var payPalimg = document.createElement('img');
        payPalimg.src = 'pay-removebg-preview.png';
        payPalimg.setAttribute('class', 'payImg');
        payBtn.parentNode.insertBefore(payPalimg, payBtn.nextSibling);
    }
});

// filter function for search input
var search = document.getElementById('search');

search.addEventListener('keyup', function () {
    filterItems(search.value);
});

function filterItems(value) {
    let filteredItems = '';
    for (let i = 0; i < allItems_js.length; i++) {
        if (allItems_js[i].name.toLowerCase().includes(value.toLowerCase())) {
            filteredItems += `
                <div class="card-item">
                    <img src="${allItems_js[i].img}" alt="${allItems_js[i].name}" width="200px">
                    <h6>${allItems_js[i].name}</h6>
                    <img src="https://supersimple.dev/projects/amazon/images/ratings/rating-${allItems_js[i].rate}.png" width="90px">
                    <p class="price">$${(allItems_js[i].priceCent / 100).toFixed(2)}</p>
                </div>
            `;
        }
    }
    document.getElementById('container-items').innerHTML = filteredItems;
}






// cart shopping
//const cart = JSON.parse(localStorage.getItem('cart')) || [];
var cartItems = document.getElementById('cartItems');
let cartAdd = '';

function addToCart(index) {
    const item = allItems_js[index];
    const quantityInput = document.getElementById(`q-${index}`);
    const quantity = quantityInput ? parseInt(quantityInput.value) : 1;

    if (quantity < 1) {
        alert("Quantity must be at least 1");
        return;
    }

    const existingItem = cart.find(cartItem => cartItem.name === item.name);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        const cartItem = {
            ...item,
            quantity: quantity
        };
        cart.push(cartItem);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
}

function updateCartUI() {
    cartAdd = '';
    cart.forEach(item => {
        cartAdd += `
            <div class="card-item">
                <img src="${item.img}" class="item-image" width="170px">
                <div class='itemInfo'>
                    <h6>${item.name}</h6>
                    <p>Quantity: ${item.quantity}</p>
                    <img src="https://supersimple.dev/projects/amazon/images/ratings/rating-${item.rate}.png" class="rate" width="90px">
                    <p class="price">$${(item.priceCent / 100).toFixed(2)}</p>
                </div>
            </div>`;
    });

    if (cartItems) {
        cartItems.innerHTML = cartAdd;
    }
}

function checkCart() {
    if (cart.length === 0) {
        if (cartItems) {
            cartItems.innerHTML = `
                <div class='ifempty'>
                    <h5>Your Cart Is Empty</h5>
                    <a href='./index.html'><button type="button" class="btn btn-warning" id='shopping'>Shop Now</button></a>
                </div>
            `;
        }
    } else {
        updateCartUI();
    }
}

checkCart();
