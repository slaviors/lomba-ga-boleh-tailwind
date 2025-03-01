document.addEventListener('DOMContentLoaded', () => {
    // Enhanced Timeline data with more details
    const events = [
        {
            id: 1,
            date: '20 Mei 1908',
            title: 'Budi Utomo',
            image: '/path/to/budi-utomo.jpg',
            caption: 'Kongres pertama Budi Utomo di Yogyakarta',
            description: 'Organisasi pergerakan nasional pertama',
            details: `Budi Utomo didirikan oleh Dr. Sutomo pada 20 Mei 1908. Organisasi ini menjadi tonggak awal pergerakan nasional Indonesia yang terorganisir. Meskipun awalnya berfokus pada pendidikan dan kebudayaan, Budi Utomo membuka jalan bagi organisasi-organisasi nasionalis lainnya untuk berkembang dan memperjuangkan kemerdekaan Indonesia dari penjajahan Belanda.`,
            infoTable: [
                {label: 'Pendiri', value: 'Dr. Sutomo'},
                {label: 'Tanggal Pendirian', value: '20 Mei 1908'},
                {label: 'Lokasi', value: 'Yogyakarta'},
                {label: 'Tujuan Awal', value: 'Kemajuan pendidikan dan kebudayaan'},
                {label: 'Signifikansi', value: 'Cikal bakal gerakan nasionalis modern Indonesia'}
            ],
            additionalText: `Meskipun Budi Utomo tidak secara langsung menyerukan kemerdekaan Indonesia, organisasi ini memainkan peran penting dalam membangkitkan kesadaran nasional di kalangan elit terpelajar pribumi. Kehadiran Budi Utomo menandai awal munculnya gerakan nasionalis modern di Indonesia dan diperingati sebagai hari Kebangkitan Nasional.`
        },
        {
            id: 2,
            date: '28 Oktober 1928',
            title: 'Sumpah Pemuda',
            image: '/path/to/sumpah-pemuda.jpg',
            caption: 'Peserta Kongres Pemuda II mengikrarkan Sumpah Pemuda',
            description: 'Pernyataan tekad pemuda Indonesia untuk bersatu',
            details: `Kongres Pemuda II yang diselenggarakan di Batavia (Jakarta) menghasilkan Sumpah Pemuda, yang menegaskan satu tanah air, satu bangsa, dan satu bahasa: Indonesia. Moment bersejarah ini menjadi titik balik penting dalam pergerakan nasional, menyatukan berbagai kelompok etnis dalam perjuangan kemerdekaan.`,
            infoTable: [
                {label: 'Tanggal', value: '28 Oktober 1928'},
                {label: 'Lokasi', value: 'Batavia (Jakarta)'},
                {label: 'Tokoh Penting', value: 'Muhammad Yamin, Amir Sjarifuddin, Johan Mohammad Tjaja'},
                {label: 'Hasil', value: 'Ikrar Satu Nusa, Satu Bangsa, Satu Bahasa'},
                {label: 'Dampak', value: 'Bersatunya kelompok etnis dalam identitas Indonesia'}
            ],
            additionalText: `Sumpah Pemuda menjadi momentum bersejarah yang mengubah persepsi identitas di Hindia Belanda. Nilai persatuan yang diusung oleh Sumpah Pemuda menjadi fondasi penting bagi perjuangan kemerdekaan dan pembentukan identitas nasional Indonesia. Pernyataan "satu bahasa, bahasa Indonesia" dalam Sumpah Pemuda juga berperan dalam menjadikan bahasa Melayu yang kemudian dikenal sebagai bahasa Indonesia menjadi bahasa persatuan.`
        },
        {
            id: 3,
            date: '1 Juni 1945',
            title: 'Pancasila',
            image: '/path/to/pancasila.jpg',
            caption: 'Soekarno sedang menyampaikan pidato tentang dasar negara',
            description: 'Kelahiran dasar negara Indonesia',
            details: `Pada pidatonya di sidang BPUPKI, Soekarno mengusulkan Pancasila sebagai dasar negara Indonesia. Kelima sila yang terdiri dari Ketuhanan Yang Maha Esa, Kemanusiaan yang Adil dan Beradab, Persatuan Indonesia, Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan dalam Permusyawaratan/Perwakilan, dan Keadilan Sosial bagi Seluruh Rakyat Indonesia menjadi fondasi ideologis bangsa Indonesia hingga saat ini.`,
            infoTable: [
                {label: 'Tanggal', value: '1 Juni 1945'},
                {label: 'Pencetus', value: 'Ir. Soekarno'},
                {label: 'Forum', value: 'Sidang BPUPKI'},
                {label: 'Jumlah Sila', value: '5 Sila'},
                {label: 'Status', value: 'Dasar negara dan ideologi nasional Indonesia'}
            ],
            additionalText: `Pancasila tidak hanya menjadi dasar negara, tetapi juga pandangan hidup bangsa Indonesia yang mencerminkan nilai-nilai dan cita-cita nasional. Dalam pidatonya, Soekarno mengusulkan nama "Pancasila" yang berarti lima prinsip atau dasar. Lahirnya Pancasila menjadi salah satu tonggak penting dalam proses persiapan kemerdekaan Indonesia.`
        },
        {
            id: 4,
            date: '17 Agustus 1945',
            title: 'Proklamasi Kemerdekaan',
            image: '/path/to/proklamasi.jpg',
            caption: 'Soekarno membacakan teks Proklamasi Kemerdekaan',
            description: 'Indonesia merdeka dari penjajahan',
            details: `Soekarno dan Mohammad Hatta memproklamasikan kemerdekaan Indonesia pada pukul 10.00 pagi di Jalan Pegangsaan Timur 56, Jakarta. Teks proklamasi yang singkat namun bersejarah dibacakan oleh Soekarno dengan disaksikan ratusan orang Indonesia.`,
            infoTable: [
                {label: 'Tanggal', value: '17 Agustus 1945'},
                {label: 'Waktu', value: '10.00 WIB'},
                {label: 'Lokasi', value: 'Jl. Pegangsaan Timur 56, Jakarta'},
                {label: 'Proklamator', value: 'Ir. Soekarno dan Drs. Mohammad Hatta'},
                {label: 'Penyusun Teks', value: 'Ir. Soekarno, Drs. Mohammad Hatta, Ahmad Soebardjo'}
            ],
            additionalText: `Teks proklamasi kemerdekaan Indonesia yang singkat berbunyi: "Kami bangsa Indonesia dengan ini menyatakan kemerdekaan Indonesia. Hal-hal yang mengenai pemindahan kekuasaan dan lain-lain diselenggarakan dengan cara seksama dan dalam tempo yang sesingkat-singkatnya." Peristiwa ini menandai lahirnya negara Indonesia merdeka secara resmi setelah berabad-abad berada di bawah penjajahan.`
        },
        {
            id: 5,
            date: '10 November 1945',
            title: 'Pertempuran Surabaya',
            image: '/path/to/pertempuran-surabaya.jpg',
            caption: 'Pejuang Indonesia dalam Pertempuran Surabaya',
            description: 'Perlawanan heroik rakyat Surabaya',
            details: `Pertempuran besar antara pejuang Indonesia dan pasukan Inggris di Surabaya. Dipicu oleh tewasnya Brigadir Jenderal A.W.S. Mallaby, pertempuran ini menunjukkan tekad rakyat Indonesia untuk mempertahankan kemerdekaan.`,
            infoTable: [
                {label: 'Tanggal', value: '10 November 1945'},
                {label: 'Lokasi', value: 'Surabaya, Jawa Timur'},
                {label: 'Penyebab', value: 'Tewasnya Brigadir Jenderal A.W.S. Mallaby'},
                {label: 'Tokoh Penting', value: 'Bung Tomo, Gubernur Suryo'},
                {label: 'Peringatan', value: 'Hari Pahlawan'}
            ],
            additionalText: `Pertempuran Surabaya diawali oleh ultimatum dari Inggris yang meminta rakyat Indonesia menyerahkan senjata. Bung Tomo melalui pidatonya yang berapi-api mengobarkan semangat perlawanan. Meskipun banyak korban berjatuhan dan Surabaya akhirnya jatuh, semangat perlawanan dalam pertempuran ini menginspirasi perjuangan di seluruh Indonesia dan diperingati sebagai Hari Pahlawan.`
        },
        {
            id: 6,
            date: '27 Desember 1949',
            title: 'Pengakuan Kedaulatan',
            image: '/path/to/kedaulatan.jpg',
            caption: 'Penandatanganan pengakuan kedaulatan di Den Haag',
            description: 'Belanda mengakui kedaulatan Indonesia',
            details: `Setelah Konferensi Meja Bundar di Den Haag, Belanda akhirnya mengakui kedaulatan Indonesia secara formal. Penyerahan kedaulatan dilakukan di dua tempat secara bersamaan: di Amsterdam, Belanda dan di Jakarta, Indonesia.`,
            infoTable: [
                {label: 'Tanggal', value: '27 Desember 1949'},
                {label: 'Lokasi', value: 'Amsterdam (Belanda) dan Jakarta (Indonesia)'},
                {label: 'Proses', value: 'Hasil Konferensi Meja Bundar'},
                {label: 'Delegasi Indonesia', value: 'Dipimpin oleh Mohammad Hatta'},
                {label: 'Status', value: 'Pengakuan internasional atas kedaulatan Indonesia'}
            ],
            additionalText: `Pengakuan kedaulatan ini menandai berakhirnya perjuangan diplomatik Indonesia untuk mendapatkan pengakuan internasional atas kemerdekaannya. Meskipun Indonesia telah memproklamasikan kemerdekaan pada 17 Agustus 1945, pengakuan dari Belanda baru datang setelah empat tahun perjuangan fisik dan diplomasi yang panjang. Peristiwa ini menjadi tonggak penting dalam sejarah diplomasi Indonesia.`
        }
    ];

    const timelineScroll = document.querySelector('.timeline-scroll');
    const modalContainer = document.getElementById('modal-container');
    
    // Create timeline events with enhanced hover effect
    events.forEach((event, index) => {
        const eventElement = document.createElement('div');
        eventElement.classList.add('timeline-event');
        eventElement.dataset.id = event.id;
        
        // Alternate position of brief info (top/bottom) for visual interest
        const briefPosition = 'timeline-brief-bottom';
        
        eventElement.innerHTML = `
            <div class="timeline-dot" title="${event.title}"></div>
            <div class="timeline-date">${event.date}</div>
            <div class="timeline-brief ${briefPosition}">
                <h4>${event.title}</h4>
                <p>${event.description}</p>
            </div>
        `;
        
        timelineScroll.appendChild(eventElement);
        
        // Add click event to show modal
        const dot = eventElement.querySelector('.timeline-dot');
        dot.addEventListener('click', () => showModal(event));
    });
    
    // Enhanced modal function with additional details
    function showModal(event) {
        document.body.style.overflow = 'hidden';
        // Generate table rows from info table data
        let tableRows = '';
        if (event.infoTable && event.infoTable.length) {
            event.infoTable.forEach(item => {
                tableRows += `
                    <tr>
                        <th>${item.label}</th>
                        <td>${item.value}</td>
                    </tr>
                `;
            });
        }

        function closeModal() {
            const modal = modalContainer.querySelector('.modal');
            modal.classList.remove('show');
            
            // Delay removing the container's show class for animation
            setTimeout(() => {
                modalContainer.classList.remove('show');
                // Unlock body scroll
                document.body.style.overflow = '';
            }, 300);
            
            // Remove keyboard event listener
            document.removeEventListener('keydown', handleEscKey);
        }

        // Create enhanced modal HTML
        const modalHTML = `
            <div class="modal" id="modal-${event.id}">
                <div class="modal-header">
                    <h2 class="modal-title">${event.title}</h2>
                    <p class="modal-subtitle">${event.date}</p>
                    <button class="modal-close" aria-label="Tutup">&times;</button>
                </div>
                <div class="modal-content">
                    <div class="modal-image-container">
                        <img src="${event.image}" alt="${event.title}" class="modal-image">
                        <div class="modal-image-caption">${event.caption || event.title}</div>
                    </div>
                    
                    <div class="modal-info-section">
                        <h3>Informasi Penting</h3>
                        <table class="modal-info-table">
                            ${tableRows}
                        </table>
                    </div>
                    
                    <div class="modal-details">
                        <p>${event.details}</p>
                        ${event.additionalText ? `<p>${event.additionalText}</p>` : ''}
                    </div>
                </div>
            </div>
        `;
        
        // Add modal to container
        modalContainer.innerHTML = modalHTML;
        
        // Show modal with animation
        setTimeout(() => {
            modalContainer.classList.add('show');
            const modal = modalContainer.querySelector('.modal');
            modal.classList.add('show');
        }, 50);
        
        // Add event listener to close button
        const closeButton = modalContainer.querySelector('.modal-close');
        closeButton.addEventListener('click', closeModal);
        
        // Close modal when clicking outside
        modalContainer.addEventListener('click', (e) => {
            if (e.target === modalContainer) {
                closeModal();
            }
        });
        
        // Add keyboard support for closing (ESC key)
        document.addEventListener('keydown', handleEscKey);
    }
    
    function closeModal() {
        const modal = modalContainer.querySelector('.modal');
        modal.classList.remove('show');
        
        // Delay removing the container's show class for animation
        setTimeout(() => {
            modalContainer.classList.remove('show');
        }, 300);
        
        // Remove keyboard event listener
        document.removeEventListener('keydown', handleEscKey);
    }
    
    function handleEscKey(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    }
    
    // Add navigation arrows for timeline
    const timelineContainer = document.querySelector('.timeline-container');
    
    const prevButton = document.createElement('button');
    prevButton.classList.add('timeline-nav', 'timeline-prev');
    prevButton.innerHTML = '&larr;';
    prevButton.setAttribute('aria-label', 'Peristiwa sebelumnya');
    
    const nextButton = document.createElement('button');
    nextButton.classList.add('timeline-nav', 'timeline-next');
    nextButton.innerHTML = '&rarr;';
    nextButton.setAttribute('aria-label', 'Peristiwa selanjutnya');
    
    timelineContainer.appendChild(prevButton);
    timelineContainer.appendChild(nextButton);
    
    // Navigation functionality
    prevButton.addEventListener('click', () => {
        timelineScroll.scrollBy({
            left: -300,
            behavior: 'smooth'
        });
    });
    
    nextButton.addEventListener('click', () => {
        timelineScroll.scrollBy({
            left: 300,
            behavior: 'smooth'
        });
    });
    
    // Add keyboard navigation for timeline
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            timelineScroll.scrollBy({
                left: -100,
                behavior: 'smooth'
            });
        } else if (e.key === 'ArrowRight') {
            timelineScroll.scrollBy({
                left: 100,
                behavior: 'smooth'
            });
        }
    });
    
    // Add these styles dynamically for the navigation buttons
    const style = document.createElement('style');
    style.textContent = `
        .timeline-container {
            position: relative;
        }
        
        .timeline-nav {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background-color: var(--color-red);
            color: white;
            border: none;
            width: 45px;
            height: 45px;
            border-radius: 50%;
            font-size: 1.3rem;
            cursor: pointer;
            z-index: 10;
            box-shadow: 0 3px 12px rgba(0, 0, 0, 0.25);
            transition: all 0.3s ease;
        }
        
        .timeline-nav:hover {
            background-color: var(--color-navy);
            transform: translateY(-50%) scale(1.1);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        }
        
        .timeline-prev {
            left: 15px;
        }
        
        .timeline-next {
            right: 15px;
        }
        
        @media (max-width: 768px) {
            .timeline-nav {
                width: 38px;
                height: 38px;
                font-size: 1.1rem;
            }
        }
    `;
    document.head.appendChild(style);

    // Add indicator to show scrollability
    const scrollIndicator = document.createElement('div');
    scrollIndicator.classList.add('scroll-indicator');
    scrollIndicator.innerHTML = `
        <div class="scroll-text">Geser untuk melihat lebih banyak</div>
        <div class="scroll-arrow">→</div>
    `;
    timelineContainer.appendChild(scrollIndicator);

    // Add style for scroll indicator
    const scrollIndicatorStyle = document.createElement('style');
    scrollIndicatorStyle.textContent = `
        .scroll-indicator {
            position: absolute;
            bottom: 10px;
            right: 20px;
            background-color: rgba(255, 255, 255, 0.8);
            padding: 8px 15px;
            border-radius: 20px;
            display: flex;
            align-items: center;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            animation: pulse 2s infinite;
            z-index: 5;
        }
        
        .scroll-text {
            font-size: 0.85rem;
            color: var(--color-navy);
            margin-right: 8px;
        }
        
        .scroll-arrow {
            animation: bounce 1.5s infinite;
            color: var(--color-red);
            font-weight: bold;
        }
        
        @keyframes pulse {
            0% {
                opacity: 0.7;
            }
            50% {
                opacity: 1;
            }
            100% {
                opacity: 0.7;
            }
        }
        
        @keyframes bounce {
            0%, 100% {
                transform: translateX(0);
            }
            50% {
                transform: translateX(5px);
            }
        }
        
        @media (max-width: 768px) {
            .scroll-text {
                display: none;
            }
            
            .scroll-indicator {
                padding: 8px;
            }
        }
    `;
    document.head.appendChild(scrollIndicatorStyle);

    // Hide scroll indicator when user has scrolled
    timelineScroll.addEventListener('scroll', () => {
        scrollIndicator.style.opacity = '0';
        setTimeout(() => {
            scrollIndicator.style.display = 'none';
        }, 500);
    });
});