import{checkOutcart as obj} from './items.js';

// PayPal JS
var payBtn_ = document.getElementById('payBtn');
var payInput_ = document.querySelector('#payPal input');

payInput_.addEventListener('click', function() {
    // Change HTML content
    payBtn_.innerHTML = 'PayPal';
    payBtn_.classList.add('paypal_js'); // Add style

    if (payInput_.checked) {
        // Create img element after button
        var payPalimg = document.createElement('img');
        payPalimg.src = 'pay-removebg-preview.png';
        // Set attribute to style it in CSS
        payPalimg.setAttribute('class', 'payImg');
        payBtn_.parentNode.insertBefore(payPalimg, payBtn_.nextSibling);
    }
});



// calc total price

var itemsNum = document.querySelector('#Items h6');
var Shipping =document.querySelector('#Shipping p');
var TotalBefore =document.querySelector('#TotalBefore p');
var TotalAfter= document.querySelector('#TotalAfter p');
var orderTotal = document.querySelector('#order p');
var calcPriceBtn = document.getElementById('payBtn')


//function to calc total price 
function calcTtakPrice(){
    let shippingCost = 6.99;
    let price = 0;
    let before; let after;
    for(let i=0; i<obj.length; i++){

        price+= (obj[i].priceCent /100 ); // pure items cost 
        before = Math.round( (+price) + (+shippingCost) )// before adding tax
        after = Math.round( (+before) + (+price * 0.1))  // after adding tax
    }

    itemsNum.innerHTML=`Items : ${obj.length}`;
    Shipping.innerHTML=`$ ${shippingCost}`;
    TotalBefore.innerHTML=`$ ${before}`;
    TotalAfter.innerHTML=`$ ${after}`;
    orderTotal.innerHTML=`$ ${after}`

}

calcPriceBtn.addEventListener('click' , calcTtakPrice);


