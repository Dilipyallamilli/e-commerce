document.addEventListener('DOMContentLoaded', () => {
// Select all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItems = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');

let total = 0; // Keep track of the total price

// Add event listeners to all "Add to Cart" buttons
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productName = button.getAttribute('data-product');
    const productPrice = parseFloat(button.getAttribute('data-price'));

    // Add item to cart
    const listItem = document.createElement('li');
    listItem.textContent = `${productName} ₹${productPrice.toFixed(2)}`;
    cartItems.appendChild(listItem);

    // Update total price
    total += productPrice;
    totalPriceElement.textContent =`Total: ₹${total.toFixed(2)}`;
  });
});
});



const bar = document.getElementById('bar');
const nav = document.getElementById('navbar')
const close = document.getElementById('close');

if(bar) 
{
    bar.addEventListener('click', ()=>{
        nav.classList.add('active');
    })
}

close.addEventListener('click', ()=>{
    nav.classList.remove('active');
})