let cart = [];

function showForm(form) {
    document.getElementById('loginForm').style.display = form === 'login' ? 'block' : 'none';
    document.getElementById('registerForm').style.display = form === 'register' ? 'block' : 'none';
}

function addToCart(item, price) {
    cart.push({ item, price });
    alert('${item} added to cart.');
    updateCart();
}

function updateCart() {
    const cartContent = document.getElementById('cartContent');
    cartContent.innerHTML = '';
    cart.forEach(({ item, price }) => {
        const cartItem = document.createElement('p');
        cartItem.textContent = '${item}: Rs. ${price}';
        cartContent.appendChild(cartItem);
    });
}