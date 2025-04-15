// Experience Section Animation
window.addEventListener('scroll', () => {
    document.querySelectorAll('.experience-card').forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            card.classList.add('show');
        }
    });
});

// Skills Section Animation
window.addEventListener('scroll', () => {
    document.querySelectorAll('.skill-fill').forEach(bar => {
        const rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            bar.classList.add('show');
        }
    });
});

// Contact Section Animation + Button Animation
window.addEventListener('scroll', () => {
    const form = document.querySelector('.contact-form');
    if (!form) return;
    const rect = form.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
        form.classList.add('show');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.submit-btn');
    if (button) {
        button.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent actual submission
            button.classList.add('clicked');
            setTimeout(() => {
                button.innerHTML = 'Sent!';
            }, 1000);
        });
    }

    // Footer Animation on Scroll
    const footer = document.querySelector('.footer-section');
    window.addEventListener('scroll', () => {
        if (!footer) return;
        const rect = footer.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            footer.classList.add('show');
        }
    });

    // Hamburger Menu Toggle
    const toggleMenu = () => {
        document.querySelector('.nav-links').classList.toggle('active');
    };

    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
    }
});
