// Search Rooms Functionality
function searchRooms() {
    const roomType = document.getElementById("room-type").value;
    const checkinDate = document.getElementById("checkin-date").value;
    const checkoutDate = document.getElementById("checkout-date").value;

    if (roomType && checkinDate && checkoutDate) {
        alert(`Searching for ${roomType} rooms from ${checkinDate} to ${checkoutDate}.`);
    } else {
        alert("Please fill in all search fields.");
    }
}

// Customer ID Authentication Functionality
function authenticateCustomer() {
    const customerId = document.getElementById("customer-id").value;
    if (customerId) {
        alert(`Authenticating Customer ID: ${customerId}`);
    } else {
        alert("Please enter a valid Customer ID.");
    }
}

// Check-In/Check-Out Functionality
function manageCheckInOut() {
    const roomNumber = document.getElementById("room-number").value;
    const checkInOut = document.getElementById("checkin").value;

    if (roomNumber) {
        alert(`Proceeding with ${checkInOut} for Room Number: ${roomNumber}`);
    } else {
        alert("Please enter a valid Room Number.");
    }
}

// ScrollReveal Configurations for Section Animations
const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
    easing: "ease-in-out",
    reset: true,
};

// Applying ScrollReveal Animations
ScrollReveal().reveal('.welcome h1', { ...scrollRevealOption, delay: 200 });
ScrollReveal().reveal('.welcome p', { ...scrollRevealOption, delay: 400 });
ScrollReveal().reveal('#search-rooms h2, #authentication h2, #billing h2, #checkin-checkout h2', { ...scrollRevealOption, delay: 200 });
ScrollReveal().reveal('#search-rooms form, #authentication form, #checkin-checkout form', { ...scrollRevealOption, interval: 200 });
