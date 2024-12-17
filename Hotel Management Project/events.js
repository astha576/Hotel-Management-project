document.addEventListener("DOMContentLoaded", function() {
    // Select all "Reserve Now" buttons
    const reserveButtons = document.querySelectorAll(".event-card button");

    // Add a click event listener to each button
    reserveButtons.forEach(button => {
        button.addEventListener("click", function() {
            // Show the booking confirmation alert
            alert("Kindly visit the hotel before the available date to book the event");
        });
    });
});