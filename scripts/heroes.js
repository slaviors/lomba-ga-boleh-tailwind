(() => {
    const pahlawanData = [
        {
            id: 1,
            nama: "Ir. Soekarno",
            julukan: "Bung Karno",
            lahir: "6 Juni 1901",
            wafat: "21 Juni 1970",
            tempatLahir: "Surabaya, Jawa Timur",
            photo: "https://portal.riau24.com/news/20220606/riau24_1654484842.jpg",
            peran: "Proklamator & Presiden Pertama RI",
            ringkasan: "Proklamator kemerdekaan dan presiden pertama Republik Indonesia yang memimpin perjuangan bangsa menuju kemerdekaan.",
            biografi: `Soekarno adalah tokoh penting dalam perjuangan kemerdekaan Indonesia. Beliau merupakan proklamator kemerdekaan dan presiden pertama Republik Indonesia. 
            Bung Karno dikenal sebagai pemikir ulung dengan konsep Pancasila dan Marhaenisme. Kepemimpinannya dalam masa revolusi dan peran pentingnya dalam Konferensi Asia Afrika menjadikannya tokoh yang sangat dihormati.`,
            pencapaian: [
                "Merumuskan Pancasila",
                "Memproklamasikan Kemerdekaan Indonesia",
                "Pemimpin Konferensi Asia Afrika 1955",
                "Mendirikan Gerakan Non-Blok"
            ],
            quotes: "INDONESIA TIDAK AKAN PERNAH BERDIRI DI ATAS KAKI SENDIRI SELAMA MASIH ADA IMPERIALISME DAN KOLONIALISME DI MUKA BUMI INI!",
            faktaMenarik: [
                "Menguasai berbagai bahasa asing",
                "Arsitek dan insinyur berpendidikan Belanda",
                "Pernah diasingkan ke Ende, Flores",
                "Pencetus konsep Marhaenisme"
            ]
        },
        {
            id: 2,
            nama: "Mohammad Hatta",
            julukan: "Bung Hatta",
            lahir: "12 Agustus 1902",
            wafat: "14 Maret 1980",
            tempatLahir: "Bukittinggi, Sumatera Barat",
            photo: "https://i0.wp.com/pustaka.bunghatta.ac.id/wp-content/uploads/2024/08/bung-hatta.jpg?fit=975%2C600&ssl=1",
            peran: "Proklamator & Wakil Presiden Pertama RI",
            ringkasan: "Wakil presiden pertama Indonesia yang dikenal sebagai Bapak Koperasi Indonesia dan tokoh penting dalam perumusan dasar negara.",
            biografi: `Mohammad Hatta adalah salah satu proklamator kemerdekaan Indonesia dan wakil presiden pertama RI. 
            Beliau dikenal sebagai tokoh yang sangat menjunjung tinggi demokrasi dan ekonomi kerakyatan melalui koperasi. 
            Pemikirannya tentang ekonomi kerakyatan dan demokrasi memberikan dampak besar bagi Indonesia.`,
            pencapaian: [
                "Bapak Koperasi Indonesia",
                "Pelopor Ekonomi Kerakyatan",
                "Peletak Dasar Demokrasi Indonesia",
                "Perancang Sistem Ekonomi Indonesia"
            ],
            quotes: "INDONESIA MERDEKA BUKAN TUJUAN AKHIR KITA. INDONESIA MERDEKA HANYA SYARAT UNTUK MENCAPAI KEBAHAGIAAN RAKYAT.",
            faktaMenarik: [
                "Lulusan Universitas Rotterdam",
                "Aktif dalam pergerakan mahasiswa di Belanda",
                "Mendirikan berbagai koperasi",
                "Tokoh yang sangat sederhana"
            ]
        }
        // Tambahkan data pahlawan lainnya
    ];

    class PahlawanManager {
        constructor() {
            this.init();
        }

        init() {
            this.renderPahlawan();
            this.setupEventListeners();
            this.setupIntersectionObserver();
        }

        renderPahlawan() {
            const container = document.querySelector('.pahlawan-grid');
            if (!container) return;

            pahlawanData.forEach(pahlawan => {
                const card = this.createPahlawanCard(pahlawan);
                container.appendChild(card);
            });
        }

        createPahlawanCard(pahlawan) {
            const card = document.createElement('div');
            card.className = 'pahlawan-card';
            card.setAttribute('data-id', pahlawan.id);
            
            card.innerHTML = `
                <div class="pahlawan-card-inner">
                    <div class="pahlawan-card-front">
                        <div class="pahlawan-image-wrapper">
                            <img src="${pahlawan.photo}" alt="${pahlawan.nama}" class="pahlawan-image">
                            <div class="pahlawan-overlay"></div>
                        </div>
                        <div class="pahlawan-info">
                            <h3 class="pahlawan-nama">${pahlawan.nama}</h3>
                            <p class="pahlawan-julukan">${pahlawan.julukan}</p>
                            <p class="pahlawan-peran">${pahlawan.peran}</p>
                        </div>
                    </div>
                    <div class="pahlawan-card-back">
                        <div class="pahlawan-detail-header">
                            <h3>${pahlawan.nama}</h3>
                            <p class="pahlawan-lahir-wafat">
                                ${pahlawan.lahir} - ${pahlawan.wafat}
                            </p>
                        </div>
                        <div class="pahlawan-detail-content">
                            <p class="pahlawan-biografi">${pahlawan.biografi}</p>
                            <div class="pahlawan-pencapaian">
                                <h4>Pencapaian Utama:</h4>
                                <ul>
                                    ${pahlawan.pencapaian.map(p => `<li>${p}</li>`).join('')}
                                </ul>
                            </div>
                            <div class="pahlawan-quote">
                                <blockquote>"${pahlawan.quotes}"</blockquote>
                            </div>
                        </div>
                        <button class="pahlawan-detail-button" data-id="${pahlawan.id}">
                            Baca Lebih Lanjut
                        </button>
                    </div>
                </div>
            `;

            return card;
        }

        createDetailModal(pahlawan) {
            const modal = document.createElement('div');
            modal.className = 'pahlawan-modal';
            modal.innerHTML = `
                <div class="pahlawan-modal-content">
                    <button class="pahlawan-modal-close">&times;</button>
                    <div class="pahlawan-modal-header">
                        <img src="${pahlawan.photo}" alt="${pahlawan.nama}" class="pahlawan-modal-image">
                        <div class="pahlawan-modal-title">
                            <h3>${pahlawan.nama}</h3>
                            <p>${pahlawan.julukan}</p>
                            <p class="pahlawan-modal-peran">${pahlawan.peran}</p>
                        </div>
                    </div>
                    <div class="pahlawan-modal-body">
                        <div class="pahlawan-modal-info">
                            <h4>Biografi</h4>
                            <p>${pahlawan.biografi}</p>
                        </div>
                        <div class="pahlawan-modal-achievements">
                            <h4>Pencapaian Utama</h4>
                            <ul>
                                ${pahlawan.pencapaian.map(p => `<li>${p}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="pahlawan-modal-facts">
                            <h4>Fakta Menarik</h4>
                            <ul>
                                ${pahlawan.faktaMenarik.map(f => `<li>${f}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="pahlawan-modal-quote">
                            <blockquote>${pahlawan.quotes}</blockquote>
                        </div>
                    </div>
                </div>
            `;

            return modal;
        }

        setupEventListeners() {
            document.addEventListener('click', (e) => {
                if (e.target.classList.contains('pahlawan-detail-button')) {
                    const id = parseInt(e.target.dataset.id);
                    const pahlawan = pahlawanData.find(p => p.id === id);
                    if (pahlawan) {
                        this.showModal(pahlawan);
                    }
                }

                if (e.target.classList.contains('pahlawan-modal-close')) {
                    this.closeModal(e.target.closest('.pahlawan-modal'));
                }
            });

            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    const modal = document.querySelector('.pahlawan-modal');
                    if (modal) {
                        this.closeModal(modal);
                    }
                }
            });
        }

        setupIntersectionObserver() {
            const options = {
                threshold: 0.2
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('pahlawan-card-visible');
                    }
                });
            }, options);

            document.querySelectorAll('.pahlawan-card').forEach(card => {
                observer.observe(card);
            });
        }

        showModal(pahlawan) {
            const modal = this.createDetailModal(pahlawan);
            document.body.appendChild(modal);
            document.body.style.overflow = 'hidden';
            
            setTimeout(() => {
                modal.classList.add('pahlawan-modal-active');
            }, 10);
        }

        closeModal(modal) {
            modal.classList.remove('pahlawan-modal-active');
            setTimeout(() => {
                modal.remove();
                document.body.style.overflow = '';
            }, 300);
        }
    }

    // Initialize when DOM is ready
    document.addEventListener('DOMContentLoaded', () => {
        new PahlawanManager();
    });
})();