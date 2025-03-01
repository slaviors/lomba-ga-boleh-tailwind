// Scroll Animations
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.reveal-effect');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(element => observer.observe(element));
}

// Mobile Menu Toggle
function setupMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle?.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}

// Heroes Data
const heroes = [
    {
        name: "Ir. Soekarno",
        role: "Proklamator & Presiden Pertama RI",
        image: "path/to/soekarno.jpg",
        description: "Tokoh utama dalam proklamasi kemerdekaan Indonesia..."
    },
    {
        name: "Mohammad Hatta",
        role: "Proklamator & Wakil Presiden Pertama RI",
        image: "path/to/hatta.jpg",
        description: "Wakil Presiden pertama Indonesia dan tokoh proklamasi..."
    }
    // Add more heroes
];

// Trivia Data
const triviaData = [
    {
        question: "Tahukah Kamu?",
        fact: "Naskah Proklamasi diketik oleh Sayuti Melik di rumah Laksamana Maeda..."
    },
    {
        question: "Fakta Menarik",
        fact: "Bendera Pusaka dijahit oleh Fatmawati menggunakan mesin jahit..."
    }
    // Add more trivia
];

// Render Heroes Section
function renderHeroes() {
    const heroesGrid = document.querySelector('.heroes-grid');
    if (!heroesGrid) return;

    heroes.forEach(hero => {
        const heroCard = document.createElement('div');
        heroCard.className = 'hero-card reveal-effect';
        heroCard.innerHTML = `
            <img src="${hero.image}" alt="${hero.name}" class="hero-card-image">
            <div class="hero-card-content">
                <h3 class="hero-card-title">${hero.name}</h3>
                <p class="hero-card-subtitle">${hero.role}</p>
                <p>${hero.description}</p>
            </div>
        `;
        heroesGrid.appendChild(heroCard);
    });
}

// Render Trivia Section
function renderTrivia() {
    const triviaCarousel = document.querySelector('.trivia-carousel');
    if (!triviaCarousel) return;

    triviaData.forEach(trivia => {
        const triviaCard = document.createElement('div');
        triviaCard.className = 'trivia-card reveal-effect';
        triviaCard.innerHTML = `
            <h3>${trivia.question}</h3>
            <p>${trivia.fact}</p>
        `;
        triviaCarousel.appendChild(triviaCard);
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    handleScrollAnimations();
    setupMobileMenu();
    renderHeroes();
    renderTrivia();
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.parallax-hero');
    if (hero) {
        const scroll = window.pageYOffset;
        hero.style.backgroundPositionY = `${scroll * 0.5}px`;
    }
});