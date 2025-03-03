class AboutManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupCardAnimations();
        this.setupSocialLinks();
        this.setupIntersectionObserver();
    }

    setupCardAnimations() {
        const cards = document.querySelectorAll('.team-card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.classList.add('team-card-hover');
            });

            card.addEventListener('mouseleave', () => {
                card.classList.remove('team-card-hover');
            });
        });
    }

    setupSocialLinks() {
        const socialLinks = document.querySelectorAll('.social-link');
        
        socialLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        });
    }

    setupIntersectionObserver() {
        const options = {
            threshold: 0.2,
            rootMargin: '0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('team-card-visible');
                }
            });
        }, options);

        document.querySelectorAll('.team-card').forEach(card => {
            observer.observe(card);
        });
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new AboutManager();
});