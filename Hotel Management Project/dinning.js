function bookDining() {
    alert("Redirecting to dining hall booking page...");
    // Add redirect or booking logic here
}
// Function to open the room service modal
// Function to open the room service modal
function openRoomServiceModal() {
    document.getElementById('roomServiceModal').style.display = 'block';
}

// Function to close the room service modal
function closeRoomServiceModal() {
    document.getElementById('roomServiceModal').style.display = 'none';
}

// Function to confirm the user's choice for room service
function confirmRoomService(isRequired) {
    if (isRequired) {
        alert("You have selected room service for food delivery.");
    } else {
        alert("You have opted out of room service.");
    }
    closeRoomServiceModal(); // Close the modal after selection
}


let cart = []; // Array to store selected items

function addToCart(itemName, itemPrice) {
    // Check if the item is already in the cart
    let itemIndex = cart.findIndex(item => item.name === itemName);
    
    if (itemIndex > -1) {
        // If the item already exists, increment its quantity
        cart[itemIndex].quantity++;
    } else {
        // If the item does not exist, add it to the cart with quantity 1
        cart.push({ name: itemName, price: itemPrice, quantity: 1 });
    }

    // Update the cart display
    updateCart();
}

function updateCart() {
    let cartItemsList = document.getElementById('cart-items');
    let totalAmount = 0;
    cartItemsList.innerHTML = ""; // Clear the existing cart items
    
    cart.forEach(item => {
        // Create list item for each cart entry
        let li = document.createElement('li');
        li.textContent = `${item.name} x${item.quantity} - ₹${item.price * item.quantity}`;
        cartItemsList.appendChild(li);

        
        
        // Update the total amount
        totalAmount += item.price * item.quantity;
    });

    // Update the total amount in the summary
    document.getElementById('total-amount').textContent = totalAmount;
}

