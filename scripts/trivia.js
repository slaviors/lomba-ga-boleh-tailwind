(() => {
    // Data trivia dalam module scope
    const triviaData = [
        {
            id: 1,
            icon: "💡",
            title: "Mesin Ketik Proklamasi",
            preview: "Sebuah mesin ketik bersejarah yang digunakan untuk mengetik naskah Proklamasi",
            content: "Teks Proklamasi Kemerdekaan Indonesia diketik oleh Sayuti Melik menggunakan mesin ketik yang sekarang disimpan di Museum Perumusan Naskah Proklamasi. Mesin ketik ini menjadi saksi bisu momen bersejarah pengetikan naskah proklamasi pada tanggal 17 Agustus 1945.",
            source: "Museum Perumusan Naskah Proklamasi",
            tags: ["Proklamasi", "Sejarah", "Kemerdekaan"]
        },
        {
            id: 2,
            icon: "🎌",
            title: "Bendera Pusaka",
            preview: "Kisah di balik pembuatan Bendera Merah Putih pertama",
            content: "Bendera Merah Putih yang dikibarkan pada 17 Agustus 1945 dijahit oleh Fatmawati menggunakan mesin jahit Singer yang kini disimpan di Museum Sumpah Pemuda. Bendera ini dibuat menggunakan bahan yang sederhana namun penuh makna perjuangan.",
            source: "Museum Sumpah Pemuda",
            tags: ["Bendera", "Kemerdekaan", "Perjuangan"]
        },
        {
            id: 3,
            icon: "📜",
            title: "Naskah Asli Proklamasi",
            preview: "Rahasia di balik naskah proklamasi yang ditulis tangan",
            content: "Naskah Proklamasi yang asli ditulis tangan oleh Soekarno dan disempurnakan dengan masukan dari tokoh-tokoh kemerdekaan lainnya. Naskah ini ditulis pada dini hari tanggal 17 Agustus 1945 di rumah Laksamana Maeda.",
            source: "Arsip Nasional Republik Indonesia",
            tags: ["Dokumen", "Proklamasi", "Sejarah"]
        }
    ];

    class TriviaManager {
        constructor() {
            this.init();
        }

        init() {
            this.renderTrivia();
            this.setupEventListeners();
            this.setupIntersectionObserver();
        }

        renderTrivia() {
            const container = document.querySelector('.trivia-grid');
            if (!container) {
                console.error('Trivia grid container not found!');
                return;
            }
            
            // Clear existing content
            container.innerHTML = '';
            
            // Add new cards
            triviaData.forEach(trivia => {
                const card = this.createTriviaCard(trivia);
                container.appendChild(card);
            });
        }

        createTriviaCard(trivia) {
            const card = document.createElement('div');
            card.className = 'trivia-card';
            card.setAttribute('data-trivia-id', trivia.id);
            card.innerHTML = `
                <div class="trivia-card-front">
                    <div class="trivia-card-icon">${trivia.icon}</div>
                    <h3 class="trivia-card-title">${trivia.title}</h3>
                    <p class="trivia-card-preview">${trivia.preview}</p>
                </div>
                <div class="trivia-card-back">
                    <div class="trivia-card-content">
                        <p>${trivia.content}</p>
                    </div>
                    <div class="trivia-card-tags">
                        ${trivia.tags.map(tag => `
                            <span class="trivia-card-tag">#${tag}</span>
                        `).join('')}
                    </div>
                    <div class="trivia-card-footer">
                        <div class="trivia-card-source">Sumber: ${trivia.source}</div>
                        <div class="trivia-share-buttons">
                            <button class="trivia-share-button trivia-share-twitter" 
                                    data-text="${trivia.content}"
                                    aria-label="Bagikan di Twitter">
                                <i class="fab fa-twitter"></i>
                            </button>
                            <button class="trivia-share-button trivia-share-whatsapp"
                                    data-text="${trivia.content}"
                                    aria-label="Bagikan di WhatsApp">
                                <i class="fab fa-whatsapp"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `;
            return card;
        }

        setupEventListeners() {
            document.addEventListener('click', (e) => {
                const shareButton = e.target.closest('.trivia-share-button');
                if (!shareButton) return;

                const text = shareButton.dataset.text;
                if (shareButton.classList.contains('trivia-share-twitter')) {
                    this.shareOnTwitter(text);
                } else if (shareButton.classList.contains('trivia-share-whatsapp')) {
                    this.shareOnWhatsApp(text);
                }
            });

            // Add touch events for mobile
            document.querySelectorAll('.trivia-card').forEach(card => {
                card.addEventListener('touchstart', () => {
                    card.classList.add('trivia-card-touch');
                });
                
                card.addEventListener('touchend', () => {
                    setTimeout(() => {
                        card.classList.remove('trivia-card-touch');
                    }, 300);
                });
            });
        }

        setupIntersectionObserver() {
            const options = {
                threshold: 0.2
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('trivia-card-visible');
                    }
                });
            }, options);

            document.querySelectorAll('.trivia-card').forEach(card => {
                observer.observe(card);
            });
        }

        shareOnTwitter(text) {
            const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
            window.open(url, '_blank');
        }

        shareOnWhatsApp(text) {
            const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
            window.open(url, '_blank');
        }
    }

    // Initialize when DOM is ready
    document.addEventListener('DOMContentLoaded', () => {
        new TriviaManager();
    });
})();