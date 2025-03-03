// Data timeline events
const timelineEvents = [
    {
        id: 1,
        date: '20 Mei 1908',
        title: 'Budi Utomo',
        shortDescription: 'Organisasi pergerakan nasional pertama yang menandai kebangkitan nasional Indonesia.',
        fullDescription: `
            <p>Budi Utomo didirikan oleh Dr. Sutomo dan para mahasiswa STOVIA di Batavia. 
            Organisasi ini menjadi tonggak awal pergerakan nasional Indonesia yang terorganisir.</p>
            <p>Meskipun awalnya berfokus pada pendidikan dan kebudayaan Jawa, Budi Utomo berkembang menjadi organisasi yang 
            memperjuangkan kemajuan masyarakat pribumi secara luas.</p>
        `,
        image: 'https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/65/2024/05/20/17-2709242067.jpg',
        imageCaption: 'Kongres pertama Budi Utomo di Yogyakarta',
        keyInfo: {
            'Tanggal Pendirian': '20 Mei 1908',
            'Pendiri': 'Dr. Sutomo',
            'Lokasi': 'Batavia (Jakarta)',
            'Tujuan': 'Memajukan pendidikan dan kebudayaan',
            'Signifikansi': 'Organisasi modern pertama di Indonesia'
        },
        relatedHeroes: [
            {
                name: 'Dr. Sutomo',
                role: 'Pendiri Budi Utomo',
                image: 'https://thephrase.s3.ap-southeast-1.amazonaws.com/2022/05/dr-Soetomo-dr-Sutomo.jpg'
            }
        ]
    },

    {
        id: 2,
        date: '25 Desember 1912',
        title: 'Sarekat Islam',
        shortDescription: 'Organisasi massa pertama yang memperjuangkan hak-hak rakyat Indonesia.',
        fullDescription: `
            <p>Sarekat Islam (SI) awalnya didirikan oleh Haji Samanhudi sebagai organisasi pedagang pribumi untuk melawan monopoli pedagang Tionghoa.</p>
            <p>Di bawah kepemimpinan HOS Tjokroaminoto, SI berkembang menjadi gerakan politik yang memperjuangkan kepentingan rakyat.</p>
        `,
        image: 'https://img.inews.co.id/media/620/files/inews_new/2023/07/08/tokoh_sarekat_islam.jpg',
        imageCaption: 'Sarekat Islam',
        keyInfo: {
            'Tanggal Pendirian': '25 Desember 1912',
            'Pendiri': 'Haji Samanhudi',
            'Lokasi': 'Surakarta',
            'Tujuan': 'Melindungi kepentingan pedagang pribumi',
            'Signifikansi': 'Organisasi massa pertama yang berbasis Islam'
        },
        relatedHeroes: [
            {
                name: 'HOS Tjokroaminoto',
                role: 'Pemimpin Sarekat Islam',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW4eT2PHllw5D8gWxpBGk59HRziOkM-RWsEg&s'
            }
        ]
    },
    {
        id: 3,
        date: '28 Oktober 1928',
        title: 'Sumpah Pemuda',
        shortDescription: 'Ikrar pemuda Indonesia yang menyatukan bahasa, bangsa, dan tanah air.',
        fullDescription: `
            <p>Kongres Pemuda II yang diadakan di Batavia menghasilkan Sumpah Pemuda, yang menyatakan persatuan 
            Indonesia dalam satu bangsa, satu tanah air, dan satu bahasa.</p>
            <p>Ikrar ini menjadi tonggak penting dalam perjuangan kemerdekaan dengan memperkuat rasa nasionalisme di kalangan pemuda.</p>
        `,
        image: 'https://edoo.id/wp-content/uploads/2023/10/Fakta-Menarik-Sumpah-Pemuda-1.jpg',
        imageCaption: 'Kongres Sumpah Pemuda II',
        keyInfo: {
            'Tanggal': '28 Oktober 1928',
            'Lokasi': 'Batavia (Jakarta)',
            'Tujuan': 'Menegaskan persatuan Indonesia',
            'Signifikansi': 'Menyatukan pemuda Indonesia dalam satu identitas nasional'
        },
        relatedHeroes: [
            {
                name: 'Muhammad Yamin',
                role: 'Tokoh perumus Sumpah Pemuda',
                image: 'https://campusnet.news/wp-content/uploads/2024/10/Prof-Moh-Yamin.jpg'
            }
        ]
    },
    {
        id: 4,
        date: '17 Agustus 1945',
        title: 'Proklamasi Kemerdekaan',
        shortDescription: 'Pembacaan teks Proklamasi yang menandai kemerdekaan Indonesia.',
        fullDescription: `
            <p>Soekarno dan Mohammad Hatta membacakan teks Proklamasi di Jalan Pegangsaan Timur No. 56, Jakarta.</p>
            <p>Peristiwa ini menjadi deklarasi resmi kemerdekaan Indonesia dari penjajahan.</p>
        `,
        image: 'https://akcdn.detik.net.id/community/media/visual/2020/08/18/proklamasi-kemerdekaan.jpeg?w=700&q=90',
        imageCaption: 'Pembacaan teks Proklamasi Kemerdekaan',
        keyInfo: {
            'Tanggal': '17 Agustus 1945',
            'Lokasi': 'Jakarta',
            'Tokoh Utama': 'Soekarno, Mohammad Hatta',
            'Signifikansi': 'Deklarasi kemerdekaan Indonesia'
        },
        relatedHeroes: [
            {
                name: 'Soekarno',
                role: 'Proklamator Kemerdekaan',
                image: 'https://lh3.googleusercontent.com/bLmgPZ4gDJxS4LKirKeMHgiBlBS2j_u1oSyGtnhorHhLqR93S2prtYjWZzGTJ1Pg4X4tB8NrHKFsiCmR2xut7imfzrXBHEg4_n5I6aXxZW4sTp2oc8CnvM1FQV33VXgAR7tmf3kVqg=w2400'
            },
            {
                name: 'Mohammad Hatta',
                role: 'Proklamator Kemerdekaan',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgWZsodCvRvz6MfNN29pCHvJGRwqR9l-Ke9g&s'
            }
        ]
    }
];

class TimelineManager {
    constructor() {
        this.container = document.querySelector('.timeline-wrapper');
        this.activeCard = null;
        this.touchStartTime = 0;
        this.touchStartX = 0;
        this.lastClickTime = 0;
        this.modalOpen = false;
        this.init();
    }

    init() {
        this.renderTimeline();
        this.setupNavigation();
        this.setupEventListeners();
        this.initScrollAnimation();
    }

    renderTimeline() {
        timelineEvents.forEach(event => {
            const timelinePoint = this.createTimelinePoint(event);
            this.container.appendChild(timelinePoint);
        });
    }

    createTimelinePoint(event) {
        const point = document.createElement('div');
        point.className = 'timeline-point';
        point.innerHTML = `
            <div class="timeline-date">${event.date}</div>
            <div class="timeline-dot" data-event-id="${event.id}"></div>
            <div class="timeline-preview">
                <div class="preview-title">${event.title}</div>
            </div>
        `;
        return point;
    }

    setupNavigation() {
        const nav = `
            <button class="timeline-nav timeline-prev" aria-label="Sebelumnya">←</button>
            <button class="timeline-nav timeline-next" aria-label="Selanjutnya">→</button>
        `;
        document.querySelector('.timeline-container').insertAdjacentHTML('beforeend', nav);

        const prevBtn = document.querySelector('.timeline-prev');
        const nextBtn = document.querySelector('.timeline-next');

        prevBtn.addEventListener('click', () => this.scroll(-300));
        nextBtn.addEventListener('click', () => this.scroll(300));

        // Update button visibility on scroll
        this.container.addEventListener('scroll', () => {
            this.updateNavigationButtons(prevBtn, nextBtn);
        });
    }

    updateNavigationButtons(prevBtn, nextBtn) {
        const scrollLeft = this.container.scrollLeft;
        const maxScroll = this.container.scrollWidth - this.container.clientWidth;

        prevBtn.style.opacity = scrollLeft <= 0 ? '0.5' : '1';
        nextBtn.style.opacity = scrollLeft >= maxScroll ? '0.5' : '1';
    }

    scroll(distance) {
        this.container.scrollBy({
            left: distance,
            behavior: 'smooth'
        });
    }

    setupEventListeners() {
        // Click events
        this.container.addEventListener('click', (e) => {
            const dot = e.target.closest('.timeline-dot');
            if (dot) {
                const eventId = parseInt(dot.dataset.eventId);
                const event = timelineEvents.find(ev => ev.id === eventId);
                
                const currentTime = Date.now();
                const timeDiff = currentTime - this.lastClickTime;
                this.lastClickTime = currentTime;

                if (timeDiff < 300) { // Double click
                    this.showModal(event);
                } else { // Single click
                    this.toggleCard(event, dot);
                }
            }
        });

        // Touch events
        this.container.addEventListener('touchstart', (e) => {
            this.touchStartTime = Date.now();
            this.touchStartX = e.touches[0].clientX;
        });

        this.container.addEventListener('touchend', (e) => {
            const touchEndX = e.changedTouches[0].clientX;
            const touchDuration = Date.now() - this.touchStartTime;
            const touchDistance = Math.abs(touchEndX - this.touchStartX);

            if (touchDuration < 200 && touchDistance < 10) {
                const dot = e.target.closest('.timeline-dot');
                if (dot) {
                    const eventId = parseInt(dot.dataset.eventId);
                    const event = timelineEvents.find(ev => ev.id === eventId);
                    this.showModal(event);
                }
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (this.modalOpen && e.key === 'Escape') {
                this.closeModal();
            } else if (!this.modalOpen) {
                if (e.key === 'ArrowLeft') {
                    this.scroll(-100);
                } else if (e.key === 'ArrowRight') {
                    this.scroll(100);
                }
            }
        });
    }

    createCard(event) {
        const card = document.createElement('div');
        card.className = 'timeline-card';
        card.innerHTML = `
            <div class="card-header">
                <div class="card-header-content">
                    <h3 class="card-title">${event.title}</h3>
                    <span class="card-date">${event.date}</span>
                </div>
                <button class="card-close" aria-label="Tutup"></button>
            </div>
            <div class="card-image-container">
                <img src="${event.image}" alt="${event.title}" class="card-image">
            </div>
            <div class="card-body">
                <p class="card-description">${event.shortDescription}</p>
                <button class="more-info-btn" data-event-id="${event.id}">
                    <span>Selengkapnya</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                    </svg>
                </button>
            </div>
        `;
    
        card.querySelector('.card-close').addEventListener('click', () => {
            this.closeCard(card);
        });
    
        return card;
    }

    toggleCard(event, dot) {
    if (this.activeCard && this.activeCard.querySelector('.more-info-btn').dataset.eventId === dot.dataset.eventId) {
        this.closeCard(this.activeCard);
        return;
    }

    if (this.activeCard) {
        this.closeCard(this.activeCard);
    }

    const card = this.createCard(event);
    const container = document.querySelector('.timeline-container');
    container.appendChild(card);

    // Position card appropriately
    if (window.innerWidth <= 480) {
        // On mobile, center the card in the viewport
        card.style.left = '50%';
        card.style.position = 'absolute';
        card.style.top = '50%';
        card.style.transform = 'translate(-50%, -50%) scale(0.9)';
    } else {
        // On desktop, position relative to the timeline dot, but ensure it's fully visible
        const dotRect = dot.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const leftPosition = dotRect.left - containerRect.left;
        
        // Make sure card doesn't get cut off at edges
        const minLeft = 160; // Half of card width
        const maxLeft = containerRect.width - 160;
        const boundedLeft = Math.max(minLeft, Math.min(maxLeft, leftPosition));
        
        card.style.left = `${boundedLeft}px`;
        
        // Position card below the timeline
        card.style.top = '80px'; // Position below the timeline
        card.style.bottom = 'auto';
        
        // If card would be too tall, adjust its max-height
        const viewportHeight = window.innerHeight;
        const timelineBottom = containerRect.top + 80; // Approximate timeline bottom position
        const availableHeight = viewportHeight - timelineBottom - 40; // 40px bottom margin
        
        if (availableHeight < 500) { // If there isn't enough space
            card.style.maxHeight = `${availableHeight}px`;
        }
    }
    
    requestAnimationFrame(() => {
        card.classList.add('active');
        
        // For mobile devices, adjust the active transform
        if (window.innerWidth <= 480) {
            card.style.transform = 'translate(-50%, -50%) scale(1)';
        }
    });

    this.activeCard = card;

    card.querySelector('.more-info-btn').addEventListener('click', () => {
        this.showModal(event);
    });
    
        // Add event listener to handle window resize
        const resizeHandler = () => {
            if (window.innerWidth <= 480) {
                card.style.left = '50%';
                card.style.position = 'absolute';
                card.style.top = '50%';
                card.style.transform = 'translate(-50%, -50%) scale(1)';
            } else {
                // Reposition for desktop view when window resizes
                const dotRect = dot.getBoundingClientRect();
                const containerRect = container.getBoundingClientRect();
                const leftPosition = dotRect.left - containerRect.left;
                
                const minLeft = 160;
                const maxLeft = containerRect.width - 160;
                const boundedLeft = Math.max(minLeft, Math.min(maxLeft, leftPosition));
                
                card.style.left = `${boundedLeft}px`;
                card.style.position = 'absolute';
                card.style.top = '40px';
                card.style.transform = 'translateX(-50%) translateY(0)';
            }
        };
        
        window.addEventListener('resize', resizeHandler);
        
        // Clean up event listener when card is closed
        this.cardResizeHandler = resizeHandler; // Store for removal later
    }
    
    closeCard(card) {
        card.classList.remove('active');
        
        // Remove resize event listener
        if (this.cardResizeHandler) {
            window.removeEventListener('resize', this.cardResizeHandler);
            this.cardResizeHandler = null;
        }
        
        setTimeout(() => {
            if (card && card.parentNode) {
                card.parentNode.removeChild(card);
            }
            this.activeCard = null;
        }, 300);
    }

    showModal(event) {
        const modal = document.createElement('div');
        modal.className = 'timeline-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <button class="modal-close" aria-label="Tutup">&times;</button>
                <div class="modal-header">
                    <h2>${event.title}</h2>
                    <div class="modal-date">${event.date}</div>
                </div>
                <div class="modal-body">
                    <div class="modal-image">
                        <img src="${event.image}" alt="${event.title}">
                        <div class="image-caption">${event.imageCaption}</div>
                    </div>
                    <div class="event-description">
                        ${event.fullDescription}
                    </div>
                    <div class="info-table">
                        <h3>Informasi Penting</h3>
                        <table>
                            ${this.generateInfoTable(event.keyInfo)}
                        </table>
                    </div>
                    <div class="heroes-section">
                        <h3>Tokoh Penting</h3>
                        <div class="heroes-grid">
                            ${this.generateHeroesGrid(event.relatedHeroes)}
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        this.modalOpen = true;
        document.body.style.overflow = 'hidden';

        requestAnimationFrame(() => {
            modal.classList.add('active');
        });

        modal.querySelector('.modal-close').addEventListener('click', () => {
            this.closeModal(modal);
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closeModal(modal);
            }
        });
    }

    closeModal(modal = null) {
        if (!modal) {
            modal = document.querySelector('.timeline-modal');
        }
        if (modal) {
            modal.classList.remove('active');
            this.modalOpen = false;
            document.body.style.overflow = '';
            
            setTimeout(() => {
                modal.remove();
            }, 300);
        }
    }

    generateInfoTable(info) {
        return Object.entries(info)
            .map(([key, value]) => `
                <tr>
                    <th>${key}</th>
                    <td>${value}</td>
                </tr>
            `).join('');
    }

    generateHeroesGrid(heroes) {
        return heroes.map(hero => `
            <div class="hero-card">
                <img src="${hero.image}" alt="${hero.name}">
                <h4>${hero.name}</h4>
                <p>${hero.role}</p>
            </div>
        `).join('');
    }

    initScrollAnimation() {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.3
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, options);

        document.querySelectorAll('.timeline-point').forEach(point => {
            point.style.opacity = '0';
            point.style.transform = 'translateY(20px)';
            observer.observe(point);
        });
    }
}

// Initialize Timeline
document.addEventListener('DOMContentLoaded', () => {
    new TimelineManager();
});