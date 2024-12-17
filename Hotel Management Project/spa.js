document.addEventListener("DOMContentLoaded", function() {
    // Select all "Book Now" buttons
    const bookButtons = document.querySelectorAll(".service-card button");

    // Add a click event listener to each button
    bookButtons.forEach(button => {
        button.addEventListener("click", function() {
            // Show the booking confirmation alert
            alert("Booking Confirmed! Thank you for booking our spa service.");
        });
    });
});