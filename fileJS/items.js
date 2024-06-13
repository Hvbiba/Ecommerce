// adding items auto in html file , Save data

const allItems_js = [
	{
		id: 1,
		img: "img/athletic-cotton-socks-6-pairs.jpg",
		name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
		rate: 3,
		priceCent: 14.55 * 100,
	},
	{
		id: 2,
		img: "img/adults-plain-cotton-tshirt-2-pack-teal.jpg",
		name: "Adults Plain Cotton T-Shirt - 2 Pack",
		rate: 5,
		priceCent: 14.55 * 100,
	},
	{
		id: 3,
		img: "img/images-1661783079519.jpg",
		name: "Mini Rodini Penguin-print backpack",
		rate: 4,
		priceCent: 34.55 * 100,
	},
	{
		id: 4,
		img: "img/images-1661735021645.jpg",
		name: "Cool Formal Pants for Women ",
		rate: 3,
		priceCent: 150.99 * 100,
	},
	{
		id: 5,
		img: "img/images-1661734130933.jpg",
		name: "Balenciaga Twisted-jeans jacket",
		rate: 5,
		priceCent: 60.99 * 100,
	},
	{
		id: 6,
		img: "img/images-1661735640671.jpg",
		name: "Cotton dress Jacquemus Robe Hielo dress",
		rate: 5,
		priceCent: 50.99 * 100,
	},
	{
		id: 7,
		img: "img/images-1661736457211.jpg",
		name: "Molo Teen denim jeans skirt",
		rate: 5,
		priceCent: 40.99 * 100,
	},
	{
		id: 8,
		name: "Amina Muadi Sita leather sandals",
		img: "img/images-1661734268135.jpg",
		rate: 5,
		priceCent: 35.99 * 100,
	},
	{
		id: 9,
		img: "img/images-1661721639781.jpg",
		name: "Zegna Shirt blazer ",
		rate: 3,
		priceCent: 40.99 * 100,
	},
	{
		id: 10,
		img: "img/images-1661737353733.jpg",
		name: "Stella Kids cotton block coat",
		rate: 5,
		priceCent: 23.99 * 100,
	},
	{
		id: 11,
		img: "img/images-1661723063348.jpg",
		name: "Hoddy Cotton Shirt ",
		rate: 4,
		priceCent: 25.99 * 100,
	},
	{
		id: 12,
		img: "img/images-1661736021736.jpg",
		name: "Black Cotton pants",
		rate: 4,
		priceCent: 25.99 * 100,
	},
	{
		id: 13,
		img: "img/images-1661721954566.jpg",
		name: "Pure Cotton Shirt ",
		rate: 4,
		priceCent: 20.99 * 100,
	},
	{
		id: 14,
		img: "img/images-1661782291990.jpg",
		name: "Bobo Choses cotton hodddy sweatshirt",
		rate: 3,
		priceCent: 25.99 * 100,
	},

	{
		id: 15,
		img: "img/images-1661734565145.jpg",
		name: "Odissea chunky leather trainers",
		rate: 4,
		priceCent: 20.99 * 100,
	},
	{
		id: 16,
		img: "img/images-1661782735746.jpg",
		name: "Odissea chunky leather trainers",
		rate: 4,
		priceCent: 20.99 * 100,
	},
];

// adding items auto in html file , generate js file index html

function generateHtml() {
	var itemText = "";

	allItems_js.forEach(function (item) {
		itemText += `
        <div class="card-item">
            <img src="${item.img}" class="item-image" width="170px">
            <div class='itemInfo'>
                <h6>${item.name}</h6>
                <input type="number" placeholder="Q" id="q">
                <img src="https://supersimple.dev/projects/amazon/images/ratings/rating-${
									item.rate
								}.png" class="rate" width="90px">
                <p class="price">$${(item.priceCent / 100).toFixed(2)}</p>
                <h5 id="added"></h5>
                <button type="button" class="btn btn-warning" id='cartBtn'>Add To Cart</button>
            </div>
        </div>
    `;
	});

	var gridCards = document.getElementById("container-items");
	if (gridCards) {
		gridCards.innerHTML = itemText;
	}
}

generateHtml();

const cartBtn = document.querySelectorAll("#cartBtn");

// show added message to add to cart btn
function addedAlert() {
	let added = document.querySelectorAll("#added");
	for (let i = 0; i < cartBtn.length; i++) {
		cartBtn[i].addEventListener("click", function () {
			added[i].innerHTML = "Product Added";
			added[i].style.color = "#2e8b57";
			console.log("added");
		});
	}
}

addedAlert();

// filter function for search input

var search = document.getElementById("search");
search.addEventListener("keyup", function () {
	filterItems(search.value);
});

function filterItems(value) {
	let filteredItems = "";
	for (let i = 0; i < allItems_js.length; i++) {
		if (allItems_js[i].name.toLowerCase().includes(value.toLowerCase())) {
			filteredItems += `
                <div class="card-item">
                    <img src="${allItems_js[i].img}" alt="${
				allItems_js[i].name
			}" width="200px">
                    <h6>${allItems_js[i].name}</h6>
                    <img src="https://supersimple.dev/projects/amazon/images/ratings/rating-${
											allItems_js[i].rate
										}.png" width="90px">
                    <p class="price">$${(
											allItems_js[i].priceCent / 100
										).toFixed(2)}</p>
                </div>
            `;
		}
	}
	document.getElementById("container-items").innerHTML = filteredItems;
}

// cart check out object
//getting data from local storage or empty arry

export var checkOutcart = JSON.parse(localStorage.getItem("cartItems")) || [];

let itemHTML = "";
var cartItemsCheckOut = document.getElementById("cartItems-checkOut");

for (let i = 0; i < cartBtn.length; i++) {
	cartBtn[i].addEventListener("click", function () {
		//pushing or adding item to cart
		checkOutcart.push({
			id: allItems_js[i].id,
			quantity: 1,
			priceCent: allItems_js[i].priceCent,
			img: allItems_js[i].img,
		});
		console.log(checkOutcart);

		// adding cart product to local storage
		localStorage.setItem("cartItems", JSON.stringify(checkOutcart));
		// Update the cart view
		cartCheck();
	});
}

function cartCheck() {
	console.log("cart", checkOutcart);

	//if it is empty []
	if (checkOutcart.length == 0) {
		console.log("empty");
		itemHTML = `
        <div class='ifempty'>
            <h5>Your Cart Is Empty</h5>
            <a href='./index.html'><button type="button" class="btn btn-warning" id='shopping'>Shop Now</button></a>
        </div>
    `;
		// update ui for html
		cartItemsCheckOut.innerHTML = itemHTML;
	}

	//if we add items saved in local storage
	else if (cartItemsCheckOut.length !== 0) {
		// itemHTML = ``;
		// for (let i = 0; i < checkOutcart.length; i++) {
		// 	itemHTML += `
		//         <div id="itemCart-container">
		//             <img src="${checkOutcart[i].img}" width="100px">
		//             <p class="Quantity">Quantity: 1</p>
		//             <p class="price">$${(checkOutcart[i].priceCent / 100).toFixed(
		// 							2
		// 						)}</p>
		//             <button type="button" class="btn btn-warning" id='removeBtn'>Remove From Cart</button>
		//         </div>
		// `;
		// }
		// if (cartItemsCheckOut) {
		// 	cartItemsCheckOut.innerHTML = itemHTML;
		// 	removeItem();
		// }

		// Map over the items and generate the HTML for each item
		const itemHTML = checkOutcart
			.map(
				(item) => `
		    <div id="itemCart-container">
		        <img src="${item.img}" width="100px">
		        <p class="Quantity">Quantity: ${item.quantity}</p>
		        <p class="price">$${(item.priceCent / 100).toFixed(2)}</p>
		        <button type="button" class="btn btn-warning" id="removeBtn">Remove From Cart</button>
		    </div>
		`
			)
			.join("");
		cartItemsCheckOut.innerHTML = itemHTML;
		removeItem();
	}
}

cartCheck();

function removeItem() {
	var removeBtns = document.querySelectorAll("#removeBtn");
	for (let i = 0; i < removeBtns.length; i++) {
		removeBtns[i].addEventListener("click", function () {
			console.log(checkOutcart[i].id);
			console.log("removed");
			//  checkOutcart.splice(i, 1);

			// Ya Habiba, filter items return a new array without the item that i need to delete.
			checkOutcart = checkOutcart.filter(
				(item) => item.id !== checkOutcart[i].id
			);

			localStorage.setItem("cartItems", JSON.stringify(checkOutcart));
			// Update the cart view
			cartCheck();
		});
	}
}
