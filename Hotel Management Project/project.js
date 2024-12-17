// Add smooth scrolling to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
function contact() {
    alert("Contact us at 123-456-7890 or check it on the about section ");
 }
// Toggle Menu
const navLinks = document.querySelector('nav ul');
const menuToggle = document.createElement('div');
menuToggle.innerHTML = '<i class="ri-menu-line"></i>';
menuToggle.id = 'menu-btn';
document.querySelector('header').prepend(menuToggle);

const menuBtnIcon = menuToggle.querySelector("i");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// Close menu on link click
navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// Scroll Reveal Configuration
const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
  easing: "ease-in-out",
  reset: true, // Repeat the animation every time the element comes into view
};

ScrollReveal().reveal('.hero h1', { ...scrollRevealOption, delay: 200 });
ScrollReveal().reveal('.hero p', { ...scrollRevealOption, delay: 400 });
ScrollReveal().reveal('.hero .btn-15', { ...scrollRevealOption, delay: 600 });

ScrollReveal().reveal('.services h2', { ...scrollRevealOption });
ScrollReveal().reveal('.service-items .service-item', { ...scrollRevealOption, interval: 200 });

ScrollReveal().reveal('.about h2', { ...scrollRevealOption, delay: 200 });
ScrollReveal().reveal('.about p', { ...scrollRevealOption, delay: 400 });

