// linea de home transicion
document.addEventListener("DOMContentLoaded", () => {
    const heroTitle = document.querySelector(".hero-title");
    heroTitle.classList.add("animate-line");
  });

// smooth scroll
document.addEventListener("DOMContentLoaded", () => {
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // solo animar una vez
    }
    });
}, {
    threshold: 0.1
});

sections.forEach(section => {
    observer.observe(section);
});
});
  