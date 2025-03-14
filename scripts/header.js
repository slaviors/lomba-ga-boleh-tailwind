document.addEventListener("DOMContentLoaded", function () {
  const hero = document.querySelector(".hero");

  const backgroundImages = [
    'url("https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Indonesia_declaration_of_independence_17_August_1945.jpg/390px-Indonesia_declaration_of_independence_17_August_1945.jpg")',
    'url("https://www.aartreya.com/images/berita/konten_soekarno%20pra%20proklamasi.jpg")',
    'url("https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1629096841/w7khbmxweakzjonztmum.jpg")',
  ];

  const backgroundsContainer = document.createElement("div");
  backgroundsContainer.style.position = "absolute";
  backgroundsContainer.style.top = "0";
  backgroundsContainer.style.left = "0";
  backgroundsContainer.style.width = "100%";
  backgroundsContainer.style.height = "100%";
  backgroundsContainer.style.zIndex = "0";
  backgroundsContainer.style.overflow = "hidden";

  hero.insertBefore(backgroundsContainer, hero.firstChild);

  let currentImageIndex = 0;
  let isTransitioning = false;

  const initialBackground = document.createElement("div");
  initialBackground.style.position = "absolute";
  initialBackground.style.top = "0";
  initialBackground.style.left = "0";
  initialBackground.style.width = "100%";
  initialBackground.style.height = "100%";
  initialBackground.style.backgroundImage = backgroundImages[currentImageIndex];
  initialBackground.style.backgroundSize = "cover";
  initialBackground.style.backgroundPosition = "center";
  initialBackground.style.opacity = "1";
  initialBackground.style.transition = "opacity 2s ease";
  initialBackground.style.zIndex = "1";

  backgroundsContainer.appendChild(initialBackground);

  const gradientOverlay = document.createElement("div");
  gradientOverlay.style.position = "absolute";
  gradientOverlay.style.top = "0";
  gradientOverlay.style.left = "0";
  gradientOverlay.style.width = "100%";
  gradientOverlay.style.height = "100%";
  gradientOverlay.style.background =
    "linear-gradient(to bottom, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0.95) 80%)";
  gradientOverlay.style.zIndex = "1";

  hero.insertBefore(gradientOverlay, backgroundsContainer.nextSibling);

  function changeBackgroundImage() {
    if (isTransitioning) return;
    isTransitioning = true;

    const nextImageIndex = (currentImageIndex + 1) % backgroundImages.length;

    const currentBackground =
      backgroundsContainer.querySelector('div[style*="opacity: 1"]') ||
      backgroundsContainer.querySelector("div");

    const nextBackground = document.createElement("div");
    nextBackground.style.position = "absolute";
    nextBackground.style.top = "0";
    nextBackground.style.left = "0";
    nextBackground.style.width = "100%";
    nextBackground.style.height = "100%";
    nextBackground.style.backgroundImage = backgroundImages[nextImageIndex];
    nextBackground.style.backgroundSize = "cover";
    nextBackground.style.backgroundPosition = "center";
    nextBackground.style.opacity = "0";
    nextBackground.style.transition = "opacity 2s ease";
    nextBackground.style.zIndex = "2";
    backgroundsContainer.appendChild(nextBackground);

    nextBackground.offsetWidth;

    nextBackground.style.opacity = "1";

    if (currentBackground) {
      currentBackground.style.opacity = "0";
    }

    setTimeout(() => {
      currentImageIndex = nextImageIndex;

      const oldBackgrounds = backgroundsContainer.querySelectorAll(
        'div[style*="opacity: 0"]'
      );
      oldBackgrounds.forEach((el) => {
        if (el && el.parentNode === backgroundsContainer) {
          backgroundsContainer.removeChild(el);
        }
      });

      isTransitioning = false;
    }, 2100);
  }

  setInterval(changeBackgroundImage, 5000);
});
