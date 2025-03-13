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
      ringkasan:
        "Proklamator kemerdekaan dan presiden pertama Republik Indonesia yang memimpin perjuangan bangsa menuju kemerdekaan.",
      biografi: `Soekarno adalah tokoh penting dalam perjuangan kemerdekaan Indonesia. Beliau merupakan proklamator kemerdekaan dan presiden pertama Republik Indonesia. 
            Bung Karno dikenal sebagai pemikir ulung dengan konsep Pancasila dan Marhaenisme. Kepemimpinannya dalam masa revolusi dan peran pentingnya dalam Konferensi Asia Afrika menjadikannya tokoh yang sangat dihormati.`,
      pencapaian: [
        "Merumuskan Pancasila",
        "Memproklamasikan Kemerdekaan Indonesia",
        "Pemimpin Konferensi Asia Afrika 1955",
        "Mendirikan Gerakan Non-Blok",
      ],
      quotes:
        "INDONESIA TIDAK AKAN PERNAH BERDIRI DI ATAS KAKI SENDIRI SELAMA MASIH ADA IMPERIALISME DAN KOLONIALISME DI MUKA BUMI INI!",
      faktaMenarik: [
        "Menguasai berbagai bahasa asing",
        "Arsitek dan insinyur berpendidikan Belanda",
        "Pernah diasingkan ke Ende, Flores",
        "Pencetus konsep Marhaenisme",
      ],
    },
    {
      id: 2,
      nama: "Mohammad Hatta",
      julukan: "Bung Hatta",
      lahir: "12 Agustus 1902",
      wafat: "14 Maret 1980",
      tempatLahir: "Bukittinggi, Sumatera Barat",
      photo:
        "https://i0.wp.com/pustaka.bunghatta.ac.id/wp-content/uploads/2024/08/bung-hatta.jpg?fit=975%2C600&ssl=1",
      peran: "Proklamator & Wakil Presiden Pertama RI",
      ringkasan:
        "Wakil presiden pertama Indonesia yang dikenal sebagai Bapak Koperasi Indonesia dan tokoh penting dalam perumusan dasar negara.",
      biografi: `Mohammad Hatta adalah salah satu proklamator kemerdekaan Indonesia dan wakil presiden pertama RI. 
            Beliau dikenal sebagai tokoh yang sangat menjunjung tinggi demokrasi dan ekonomi kerakyatan melalui koperasi. 
            Pemikirannya tentang ekonomi kerakyatan dan demokrasi memberikan dampak besar bagi Indonesia.`,
      pencapaian: [
        "Bapak Koperasi Indonesia",
        "Pelopor Ekonomi Kerakyatan",
        "Peletak Dasar Demokrasi Indonesia",
        "Perancang Sistem Ekonomi Indonesia",
      ],
      quotes:
        "INDONESIA MERDEKA BUKAN TUJUAN AKHIR KITA. INDONESIA MERDEKA HANYA SYARAT UNTUK MENCAPAI KEBAHAGIAAN RAKYAT.",
      faktaMenarik: [
        "Lulusan Universitas Rotterdam",
        "Aktif dalam pergerakan mahasiswa di Belanda",
        "Mendirikan berbagai koperasi",
        "Tokoh yang sangat sederhana",
      ],
    },
    {
      id: 3,
      nama: "R.A. Kartini",
      julukan: "Ibu Emansipasi",
      lahir: "21 April 1879",
      wafat: "17 September 1904",
      tempatLahir: "Jepara, Jawa Tengah",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi5GwddbyOEZ701H_9BJL-9q9SwAUAAnl7oGqKeIisg3ztB6Bi1HLHD1__-11PLgRI4QuPJqSPjEwEIvOqvbZOEw",
      peran: "Pahlawan Emansipasi Wanita",
      ringkasan:
        "Pelopor kebangkitan perempuan Indonesia yang memperjuangkan kesetaraan hak pendidikan bagi perempuan di era kolonial.",
      biografi: `Raden Ajeng Kartini adalah pahlawan nasional Indonesia dan pelopor kebangkitan perempuan Indonesia. Lahir di keluarga bangsawan Jawa, Kartini melihat secara langsung ketimpangan gender dalam masyarakat kolonial. Melalui surat-suratnya kepada sahabat penanya di Belanda, ia mengungkapkan pemikirannya tentang emansipasi wanita dan pendidikan. Meski hidup singkat, pengaruhnya sangat besar dalam memperjuangkan kesetaraan hak bagi perempuan Indonesia, terutama di bidang pendidikan.`,
      pencapaian: [
        "Mendirikan sekolah untuk perempuan",
        "Menerbitkan kumpulan surat 'Habis Gelap Terbitlah Terang'",
        "Pelopor emansipasi wanita Indonesia",
        "Menginspirasi gerakan feminisme Indonesia",
      ],
      quotes:
        "JANGAN PERNAH MENYERAH JIKA KAMU MASIH INGIN MENCOBA. JANGAN BIARKAN PENYESALAN DATANG KARENA KAMU SELANGKAH LAGI UNTUK MENANG.",
      faktaMenarik: [
        "Menguasai bahasa Belanda dengan sangat baik",
        "Meninggal pada usia muda, 25 tahun",
        "Bercita-cita menempuh pendidikan di Eropa",
        "Tanggal kelahirannya diperingati sebagai Hari Kartini",
      ],
    },
    {
      id: 4,
      nama: "Cut Nyak Dien",
      julukan: "Srikandi Aceh",
      lahir: "1848",
      wafat: "6 November 1908",
      tempatLahir: "Aceh Besar, Aceh",
      photo:
        "https://upload.wikimedia.org/wikipedia/commons/2/2b/Tjoet_Nya%27_Dhien.jpg",
      peran: "Pahlawan Nasional & Pejuang Aceh",
      ringkasan:
        "Pejuang perempuan dari Aceh yang memimpin perlawanan terhadap kolonialisme Belanda selama Perang Aceh.",
      biografi: `Cut Nyak Dien adalah pahlawan nasional Indonesia yang terkenal karena perjuangannya melawan penjajahan Belanda dalam Perang Aceh. Setelah suaminya, Teuku Umar, gugur dalam peperangan, Cut Nyak Dien mengambil alih kepemimpinan pasukan gerilya dan terus berjuang meski dalam kondisi sakit dan berusia lanjut. Kegigihannya menjadi inspirasi bagi perjuangan bangsa Indonesia, khususnya bagi perempuan dalam membela tanah air dan agama.`,
      pencapaian: [
        "Memimpin pasukan gerilya Aceh selama bertahun-tahun",
        "Melakukan perlawanan meski dalam kondisi buta di usia tua",
        "Simbol perjuangan perempuan dalam bela negara",
        "Mendukung strategi perang suaminya, Teuku Umar",
      ],
      quotes: "LEBIH BAIK MATI BERKALANG TANAH DARIPADA HIDUP DIJAJAH BELANDA.",
      faktaMenarik: [
        "Terus bergerilya meski mengalami kebutaan di usia tua",
        "Diasingkan ke Sumedang hingga akhir hayatnya",
        "Menolak menyerah meski ditawari amnesti",
        "Kehilangan dua suami dalam peperangan",
      ],
    },
    {
      id: 5,
      nama: "Sultan Hasanuddin",
      julukan: "Ayam Jantan dari Timur",
      lahir: "12 Januari 1631",
      wafat: "12 Juni 1670",
      tempatLahir: "Gowa, Sulawesi Selatan",
      photo:
        "https://static.promediateknologi.id/crop/0x60:800x557/750x500/webp/photo/2021/12/22/291607110.jpg",
      peran: "Raja Gowa XVI & Pahlawan Nasional",
      ringkasan:
        "Raja Kerajaan Gowa yang gigih melawan VOC dan dikenal sebagai 'Ayam Jantan dari Timur' karena keberaniannya.",
      biografi: `Sultan Hasanuddin adalah Raja Gowa ke-16 yang dikenal karena perlawanannya yang gigih terhadap Belanda (VOC). Ia mendapat julukan "Ayam Jantan dari Timur" atau "De Haantjes van het Oosten" dari Belanda karena keberaniannya. Di bawah kepemimpinannya, Kerajaan Gowa-Tallo menjadi kekuatan maritim yang disegani di kawasan timur Indonesia. Sultan Hasanuddin berhasil memperluas pengaruh kerajaannya dan melindungi kedaulatan wilayahnya dari imperialisme Belanda, hingga akhirnya terpaksa menandatangani Perjanjian Bongaya.`,
      pencapaian: [
        "Membangun Benteng Somba Opu",
        "Memperluas pengaruh Kerajaan Gowa-Tallo di Nusantara Timur",
        "Melawan VOC dalam perang Makassar",
        "Menjaga kedaulatan maritim Nusantara",
      ],
      quotes:
        "LEBIH BAIK HIDUP SEHARI SEBAGAI SINGA DARIPADA SERATUS TAHUN SEBAGAI DOMBA.",
      faktaMenarik: [
        "Admiraal Speelman menjulukinya 'Ayam Jantan dari Timur'",
        "Benteng Somba Opu yang dibangunnya sangat tangguh",
        "Terpaksa menandatangani Perjanjian Bongaya yang merugikan kerajaan",
        "Merupakan ahli strategi perang dan diplomasi",
      ],
    },
    {
      id: 6,
      nama: "Jenderal Soedirman",
      julukan: "Panglima Besar",
      lahir: "24 Januari 1916",
      wafat: "29 Januari 1950",
      tempatLahir: "Purbalingga, Jawa Tengah",
      photo: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Sudirman.jpg",
      peran: "Panglima Besar TNI Pertama",
      ringkasan:
        "Panglima Besar TNI pertama yang memimpin perang gerilya melawan Belanda meski dalam kondisi sakit.",
      biografi: `Jenderal Soedirman adalah tokoh militer dan pahlawan nasional Indonesia yang menjadi Panglima Besar pertama TNI. Ketokohannya menonjol saat memimpin perang gerilya melawan Belanda selama Agresi Militer Belanda II, di mana ia dipikul dalam tandu karena kondisi kesehatannya yang buruk akibat tuberkulosis. Selama tujuh bulan, ia memimpin pergerakan gerilya menempuh perjalanan lebih dari 1.000 kilometer untuk menghindari penangkapan Belanda dan terus memimpin perlawanan. Jiwa kepemimpinan, strategi militer, dan pengorbanannya menjadi teladan bagi angkatan bersenjata dan bangsa Indonesia.`,
      pencapaian: [
        "Memimpin Serangan Umum 1 Maret 1949 di Yogyakarta",
        "Melakukan perang gerilya selama tujuh bulan dalam kondisi sakit",
        "Mendirikan TKR (cikal bakal TNI)",
        "Mempertahankan kedaulatan RI dari agresi militer Belanda",
      ],
      quotes:
        "KITA BERJUANG TIDAK UNTUK DIRI KITA SENDIRI, TETAPI UNTUK BANGSA DAN NEGARA.",
      faktaMenarik: [
        "Memimpin perang gerilya dengan ditandu karena sakit",
        "Menolak tawaran Belanda untuk berobat ke Swiss",
        "Mengangkat senjata sejak usia 16 tahun",
        "Mendapatkan gelar Jenderal di usia 30 tahun",
      ],
    },
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
      const container = document.querySelector(".pahlawan-grid");
      if (!container) return;

      pahlawanData.forEach((pahlawan) => {
        const card = this.createPahlawanCard(pahlawan);
        container.appendChild(card);
      });
    }

    createPahlawanCard(pahlawan) {
      const card = document.createElement("div");
      card.className = "pahlawan-card";
      card.setAttribute("data-id", pahlawan.id);

      card.innerHTML = `
                <div class="pahlawan-card-inner">
                    <div class="pahlawan-card-front">
                        <div class="pahlawan-image-wrapper">
                            <img src="${pahlawan.photo}" alt="${
        pahlawan.nama
      }" class="pahlawan-image">
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
                            <p class="pahlawan-biografi">${
                              pahlawan.biografi
                            }</p>
                            <div class="pahlawan-pencapaian">
                                <h4>Pencapaian Utama:</h4>
                                <ul>
                                    ${pahlawan.pencapaian
                                      .map((p) => `<li>${p}</li>`)
                                      .join("")}
                                </ul>
                            </div>
                            <div class="pahlawan-quote">
                                <blockquote>"${pahlawan.quotes}"</blockquote>
                            </div>
                        </div>
                        <a href="https://id.wikipedia.org/wiki/${encodeURIComponent(
                          pahlawan.nama.replace(/ /g, "_")
                        )}" 
                           class="pahlawan-detail-button" 
                           target="_blank" 
                           rel="noopener noreferrer">
                            Referensi
                        </a>
                    </div>
                </div>
            `;

      return card;
    }

    setupEventListeners() {
      document.addEventListener("click", (e) => {
        if (e.target.classList.contains("pahlawan-detail-button")) {
          const id = parseInt(e.target.dataset.id);
          const pahlawan = pahlawanData.find((p) => p.id === id);
          if (pahlawan) {
            this.showModal(pahlawan);
          }
        }

        if (e.target.classList.contains("pahlawan-modal-close")) {
          this.closeModal(e.target.closest(".pahlawan-modal"));
        }
      });

      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          const modal = document.querySelector(".pahlawan-modal");
          if (modal) {
            this.closeModal(modal);
          }
        }
      });
    }

    setupIntersectionObserver() {
      const options = {
        threshold: 0.2,
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("pahlawan-card-visible");
          }
        });
      }, options);

      document.querySelectorAll(".pahlawan-card").forEach((card) => {
        observer.observe(card);
      });
    }

    showModal(pahlawan) {
      const modal = this.createDetailModal(pahlawan);
      document.body.appendChild(modal);
      document.body.style.overflow = "hidden";

      setTimeout(() => {
        modal.classList.add("pahlawan-modal-active");
      }, 10);
    }

    closeModal(modal) {
      modal.classList.remove("pahlawan-modal-active");
      setTimeout(() => {
        modal.remove();
        document.body.style.overflow = "";
      }, 300);
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    new PahlawanManager();
  });
})();
