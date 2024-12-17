function saveService(button) {
    const card = button.parentElement;
    const title = card.querySelector(".title").value;
    const description = card.querySelector(".description").value;

    // Display confirmation
    alert("Spa Service updated successfully!");

    // Example of saving functionality (for actual use, this could involve sending data to a server)
    // console.log(Service Saved: ${title} - ${description});
}

const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
    easing: "ease-in-out",
    reset: true,
};

ScrollReveal().reveal('.hero h1', { ...scrollRevealOption, delay: 200 });
ScrollReveal().reveal('.hero p', { ...scrollRevealOption, delay: 400 });