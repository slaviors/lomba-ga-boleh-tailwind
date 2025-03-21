(() => {
  const triviaData = [
    {
      id: 1,
      image: "https://images.bisnis.com/posts/2017/08/16/681550/hattasah.jpg",
      title: "Mesin Ketik Proklamasi",
      preview:
        "Sebuah mesin ketik bersejarah yang digunakan untuk mengetik naskah Proklamasi",
      content:
        "Teks Proklamasi Kemerdekaan Indonesia diketik oleh Sayuti Melik menggunakan mesin ketik yang sekarang disimpan di Museum Perumusan Naskah Proklamasi. Mesin ketik ini menjadi saksi bisu momen bersejarah pengetikan naskah proklamasi pada tanggal 17 Agustus 1945.",
      source: "Museum Perumusan Naskah Proklamasi",
      tags: ["Proklamasi", "Sejarah", "Kemerdekaan"],
    },
    {
      id: 2,
      image:
        "https://cdn.rri.co.id/berita/Kendari/o/1723382272569-313732_3905362331881_2005065586_n/aj3zwkrxqbvfjv5.jpeg",
      title: "Bendera Pusaka",
      preview: "Kisah di balik pembuatan Bendera Merah Putih pertama",
      content:
        "Bendera Merah Putih yang dikibarkan pada 17 Agustus 1945 dijahit oleh Fatmawati menggunakan mesin jahit Singer yang kini disimpan di Museum Sumpah Pemuda. Bendera ini dibuat menggunakan bahan yang sederhana namun penuh makna perjuangan.",
      source: "Museum Sumpah Pemuda",
      tags: ["Bendera", "Kemerdekaan", "Perjuangan"],
    },
    {
      id: 3,
      image:
        "https://asset-2.tstatic.net/aceh/foto/bank/images/bm-diah-dan-naskah-teks-proklamasi.jpg",
      title: "Naskah Asli Proklamasi",
      preview: "Rahasia di balik naskah proklamasi yang ditulis tangan",
      content:
        "Naskah Proklamasi yang asli ditulis tangan oleh Soekarno dan disempurnakan dengan masukan dari tokoh-tokoh kemerdekaan lainnya. Naskah ini ditulis pada dini hari tanggal 17 Agustus 1945 di rumah Laksamana Maeda.",
      source: "Arsip Nasional Republik Indonesia",
      tags: ["Dokumen", "Proklamasi", "Sejarah"],
    },
    {
      id: 4,
      image:
        "https://mmc.tirto.id/image/2020/01/25/presiden-soekarno-di-rengasdengklok.jpg",
      title: "Peristiwa Rengasdengklok",
      preview:
        "Kisah di balik penculikan Soekarno-Hatta sebelum deklarasi kemerdekaan",
      content:
        "Sebelum proklamasi kemerdekaan Indonesia yang bersejarah, para pemuda yang penuh semangat nasionalisme membawa Soekarno dan Hatta ke Rengasdengklok pada tanggal 16 Agustus 1945. Tujuannya adalah menjauhkan keduanya dari pengaruh kuat pemerintah Jepang dan meyakinkan mereka untuk segera memproklamasikan kemerdekaan Indonesia tanpa penundaan lagi. Peristiwa penting ini dikenal sebagai 'Peristiwa Rengasdengklok' yang menjadi salah satu momen kritis dan menentukan menjelang kemerdekaan Indonesia.",
      source: "Museum Sejarah Nasional Indonesia",
      tags: ["Proklamasi", "Rengasdengklok"],
    },
    {
      id: 5,
      image: "https://kpi.go.id/images/2022/Agustus/RRI-1.jpg",
      title: "Radio Proklamasi",
      preview: "Penyiaran proklamasi kemerdekaan melalui gelombang radio",
      content:
        "Proklamasi kemerdekaan Indonesia disebarluaskan melalui siaran radio oleh teknisi radio bernama Soeprapto dan Waidan B. Palenewen. Mereka mengorbankan nyawa dengan menyiarkan proklamasi melalui kantor berita Domei yang kemudian diambil alih dan diberi nama Kantor Berita Antara. Penyiaran ini sangat penting karena memungkinkan berita kemerdekaan menyebar ke seluruh Indonesia dan dunia internasional.",
      source: "Museum RRI",
      tags: ["Media", "Komunikasi", "Proklamasi"],
    },
    {
      id: 6,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRBGhv08GY_VapFYa6I5sMeyPTVTwjgCcI0Q&s",
      title: "Pencipta Lagu Indonesia Raya",
      preview:
        "Kisah perjuangan WR Soepratman dalam menciptakan lagu kebangsaan",
      content:
        "Wage Rudolf Soepratman menciptakan lagu Indonesia Raya pada tahun 1924 dan pertama kali diperkenalkan pada Kongres Pemuda II tahun 1928. Dia menghadapi banyak tekanan dari pemerintah kolonial Belanda dan hanya bisa memainkannya dengan biola tanpa lirik untuk menghindari penangkapan. Meskipun meninggal sebelum kemerdekaan Indonesia, karya Soepratman tetap hidup sebagai lagu kebangsaan yang mempersatukan Indonesia hingga kini.",
      source: "Museum Sumpah Pemuda",
      tags: ["Musik", "Kebangsaan", "Perjuangan"],
    },
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
      const container = document.querySelector(".trivia-grid");
      if (!container) {
        console.error("Trivia grid container not found!");
        return;
      }

      container.innerHTML = "";

      triviaData.forEach((trivia) => {
        const card = this.createTriviaCard(trivia);
        container.appendChild(card);
      });
    }

    createTriviaCard(trivia) {
      const card = document.createElement("div");
      card.className = "trivia-card";
      card.setAttribute("data-trivia-id", trivia.id);
      card.innerHTML = `
                <div class="trivia-card-front">
                    <div class="trivia-card-image-container">
                        <img src="${trivia.image}" alt="${
        trivia.title
      }" class="trivia-card-image">
                        <div class="trivia-card-overlay"></div>
                    </div>
                    <h3 class="trivia-card-title">${trivia.title}</h3>
                    <p class="trivia-card-preview">${trivia.preview}</p>
                </div>
                <div class="trivia-card-back">
                    <div class="trivia-card-back-header">
                        <h3 class="trivia-card-back-title">${trivia.title}</h3>
                    </div>
                    <div class="trivia-card-content">
                        <p>${trivia.content}</p>
                    </div>
                    <div class="trivia-card-tags">
                        ${trivia.tags
                          .map(
                            (tag) => `
                            <span class="trivia-card-tag">#${tag}</span>
                        `
                          )
                          .join("")}
                    </div>
                    <div class="trivia-card-footer">
                        <div class="trivia-card-source">Sumber: ${
                          trivia.source
                        }</div>
                        <div class="trivia-share-buttons">
                            <button class="trivia-share-button trivia-share-twitter" 
                                    data-text="${trivia.content}"
                                    aria-label="Bagikan di Twitter">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15"/>
                                </svg>
                            </button>
                            <button class="trivia-share-button trivia-share-whatsapp"
                                    data-text="${trivia.content}"
                                    aria-label="Bagikan di WhatsApp">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            `;
      return card;
    }

    setupEventListeners() {
      document.addEventListener("click", (e) => {
        const shareButton = e.target.closest(".trivia-share-button");
        if (!shareButton) return;

        const text = shareButton.dataset.text;
        if (shareButton.classList.contains("trivia-share-twitter")) {
          this.shareOnTwitter(text);
        } else if (shareButton.classList.contains("trivia-share-whatsapp")) {
          this.shareOnWhatsApp(text);
        }
      });

      document.querySelectorAll(".trivia-card").forEach((card) => {
        card.addEventListener("touchstart", () => {
          card.classList.add("trivia-card-touch");
        });

        card.addEventListener("touchend", () => {
          setTimeout(() => {
            card.classList.remove("trivia-card-touch");
          }, 300);
        });
      });
    }

    setupIntersectionObserver() {
      const options = {
        threshold: 0.2,
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("trivia-card-visible");
          }
        });
      }, options);

      document.querySelectorAll(".trivia-card").forEach((card) => {
        observer.observe(card);
      });
    }

    shareOnTwitter(text) {
      const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        text
      )}`;
      window.open(url, "_blank");
    }

    shareOnWhatsApp(text) {
      const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
      window.open(url, "_blank");
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    new TriviaManager();
  });
})();
