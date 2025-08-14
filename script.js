// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a =>
    a.onclick = e => {
        e.preventDefault();
        document.querySelector(a.getAttribute("href")).scrollIntoView({behavior:"smooth"});
    }
);

// Navbar scroll color change
window.addEventListener("scroll", function() {
    document.querySelector(".navbar").classList.toggle("scrolled", window.scrollY > 50);
});

// Mobile menu toggle
document.querySelector(".menu-toggle").addEventListener("click", function() {
    document.querySelector(".nav-links").classList.toggle("active");
});
