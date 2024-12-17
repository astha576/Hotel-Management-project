function saveEvent(button) {
    const card = button.parentElement;
    const title = card.querySelector(".title").value;
    const description = card.querySelector(".description").value;

    // Display confirmation
    alert("Event updated successfully!");

    // Example of saving functionality (for actual use, this could involve sending data to a server)
    // console.log('Event Saved: ${title} - ${description}');
}