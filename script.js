// ================================
// MOBILE NAVIGATION
// ================================

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


// Close menu after clicking a link

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


// ================================
// CONTACT FORM
// ================================

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Thank you for your message! The contact form will be connected to email later.");

    contactForm.reset();

});
// ========================================
// SCROLL REVEAL ANIMATION
// ========================================

const animatedElements = document.querySelectorAll(
    ".section-title, .info-card, .skill-card, .project-card, .research-card, .activity, .timeline-item, .contact-container"
);

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


animatedElements.forEach((element) => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});