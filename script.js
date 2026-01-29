// ===================================
// SMOOTH SCROLL & NAVIGATION
// ===================================

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===================================
// PROGRESS BAR
// ===================================

const progressBar = document.getElementById('progressBar');

function updateProgressBar() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;

    progressBar.style.width = scrollPercent + '%';
}

window.addEventListener('scroll', updateProgressBar);
window.addEventListener('resize', updateProgressBar);

// ===================================
// SCROLL ANIMATIONS
// ===================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all sections and project cards
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.section, .project-card, .social-card, .timeline-item');

    animatedElements.forEach(el => {
        el.classList.add('scroll-fade-in');
        observer.observe(el);
    });
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
});

// ===================================
// MOBILE NAVIGATION TOGGLE
// ===================================

const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('mainNav');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// Close mobile nav when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// ===================================
// STICKY NAVIGATION
// ===================================

let lastScroll = 0;
const navElement = document.getElementById('mainNav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add shadow when scrolled
    if (currentScroll > 50) {
        navElement.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    } else {
        navElement.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// ===================================
// PROJECT CARD HOVER EFFECTS
// ===================================

const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transition = 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transition = 'transform 0.4s ease';
    });
});

// ===================================
// SOCIAL CARD INTERACTIONS
// ===================================

const socialCards = document.querySelectorAll('.social-card');

socialCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
        const icon = this.querySelector('.social-icon');
        const iconEnd = this.querySelector('.social-icon-end');

        if (icon && iconEnd) {
            icon.style.transform = 'scale(1.2) rotate(5deg)';
            iconEnd.style.transform = 'scale(1.2) rotate(-5deg)';
        }
    });

    card.addEventListener('mouseleave', function () {
        const icon = this.querySelector('.social-icon');
        const iconEnd = this.querySelector('.social-icon-end');

        if (icon && iconEnd) {
            icon.style.transform = 'scale(1) rotate(0deg)';
            iconEnd.style.transform = 'scale(1) rotate(0deg)';
        }
    });
});

// ===================================
// PARALLAX EFFECT FOR HERO
// ===================================

const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxSpeed = 0.5;

    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        hero.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
    }
});

// ===================================
// CURSOR TRAIL EFFECT (Optional Enhancement)
// ===================================

// Uncomment this section if you want a subtle cursor trail effect
/*
const cursorDot = document.createElement('div');
cursorDot.style.cssText = `
    position: fixed;
    width: 8px;
    height: 8px;
    background: var(--color-accent);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    opacity: 0;
    transition: opacity 0.3s ease;
`;
document.body.appendChild(cursorDot);

let mouseX = 0, mouseY = 0;
let dotX = 0, dotY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.opacity = 0.6;
});

function animateCursor() {
    dotX += (mouseX - dotX) * 0.15;
    dotY += (mouseY - dotY) * 0.15;
    
    cursorDot.style.left = dotX + 'px';
    cursorDot.style.top = dotY + 'px';
    
    requestAnimationFrame(animateCursor);
}

animateCursor();
*/

// ===================================
// PERFORMANCE OPTIMIZATION
// ===================================

// Debounce function for scroll events
function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll-heavy functions
const debouncedProgressUpdate = debounce(updateProgressBar, 10);
window.removeEventListener('scroll', updateProgressBar);
window.addEventListener('scroll', debouncedProgressUpdate);

// ===================================
// ACCESSIBILITY ENHANCEMENTS
// ===================================

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    // Allow Escape key to close mobile menu
    if (e.key === 'Escape' && nav.classList.contains('active')) {
        nav.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// Add focus visible styles for keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

// ===================================
// CONSOLE EASTER EGG
// ===================================

console.log('%c👋 Hello there!', 'font-size: 20px; font-weight: bold;');
console.log('%cInterested in how this was built? Check out the source code!', 'font-size: 14px;');
console.log('%cBuilt with ❤️ using vanilla HTML, CSS, and JavaScript', 'font-size: 12px; color: #666;');

// ===================================
// REAL-TIME CLOCK - BUENOS AIRES
// ===================================

function updateBuenosAiresTime() {
    const timeElement = document.getElementById('buenosAiresTime');

    if (timeElement) {
        // Get current time in Buenos Aires (America/Argentina/Buenos_Aires timezone)
        const now = new Date();
        const options = {
            timeZone: 'America/Argentina/Buenos_Aires',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        };

        const timeString = now.toLocaleTimeString('en-US', options);
        timeElement.textContent = timeString;
    }
}

// Update time immediately on load
updateBuenosAiresTime();

// Update time every second
setInterval(updateBuenosAiresTime, 1000);

