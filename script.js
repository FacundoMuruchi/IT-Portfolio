// Tailwind CSS configuration
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#1a1a1a", // Soft black for strong contrast
                "background-light": "#F5F2ED", // Warm beige from Anthropic reference
                "background-dark": "#0f0f0f", // Deep dark grey for dark mode
                "card-light": "#EAE7DF", // Slightly darker beige for cards
                "card-dark": "#1a1a1a", // Lighter black for cards
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
                display: ['Playfair Display', 'serif'],
            },
            borderRadius: {
                DEFAULT: "4px",
            },
        },
    },
};

// Buenos Aires Clock
function updateBuenosAiresTime() {
    const timeElement = document.getElementById('buenos-aires-time');
    if (timeElement) {
        const now = new Date();
        const buenosAiresTime = now.toLocaleTimeString('es-AR', {
            timeZone: 'America/Argentina/Buenos_Aires',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });
        timeElement.textContent = buenosAiresTime;
    }
}

// Update time immediately and then every second
document.addEventListener('DOMContentLoaded', function () {
    updateBuenosAiresTime();
    setInterval(updateBuenosAiresTime, 1000);

    // Gradual scroll-based expansion animation for featured section
    const featuredContainer = document.getElementById('featured-container');
    if (featuredContainer) {
        let ticking = false;

        function updateExpansion() {
            const rect = featuredContainer.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Calculate scroll progress (0 to 1)
            // Start earlier: when element is at 150% of viewport height (still below screen)
            // Complete when element top reaches 30% from top of viewport
            const elementTop = rect.top;
            const startPoint = windowHeight * 1.5; // Start when element is 1.5x viewport height away
            const endPoint = windowHeight * 0.3;   // Complete at 30% from top

            const progress = Math.max(0, Math.min(1, (startPoint - elementTop) / (startPoint - endPoint)));

            // Interpolate max-width - responsive to viewport size
            const viewportWidth = window.innerWidth;
            // Start at 70% of viewport width (works for both mobile and desktop)
            const startWidthPercentage = 70;
            const endWidthPercentage = 100;
            const currentWidthPercentage = startWidthPercentage + (endWidthPercentage - startWidthPercentage) * progress;

            // Interpolate border-radius from 2rem (32px) to 0
            const startRadius = 32;
            const currentRadius = startRadius * (1 - progress);

            // Apply styles
            featuredContainer.style.maxWidth = `${currentWidthPercentage}%`;
            featuredContainer.style.borderRadius = `${currentRadius}px`;

            ticking = false;
        }

        function requestTick() {
            if (!ticking) {
                requestAnimationFrame(updateExpansion);
                ticking = true;
            }
        }

        // Update on scroll and resize with requestAnimationFrame for smooth performance
        window.addEventListener('scroll', requestTick, { passive: true });
        window.addEventListener('resize', requestTick, { passive: true });

        // Initial update
        updateExpansion();
    }

    // Trigger underline animation when footer is visible
    const animatedUnderline = document.querySelector('.animated-underline');
    if (animatedUnderline) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animatedUnderline.classList.add('visible');
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, {
            threshold: 1 // Trigger when 50% visible
        });

        observer.observe(animatedUnderline);
    }
});

