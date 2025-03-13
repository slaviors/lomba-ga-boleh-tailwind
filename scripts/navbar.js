class NavbarManager {
  constructor() {
    this.navbar = document.querySelector(".navbar");
    this.toggle = document.querySelector(".navbar-toggle");
    this.menu = document.querySelector(".navbar-menu");
    this.links = document.querySelectorAll(".navbar-link");
    this.isMenuOpen = false;

    this.init();
  }

  init() {
    this.setupEventListeners();
    this.handleScroll();
  }

  setupEventListeners() {
    this.toggle.addEventListener("click", () => this.toggleMenu());

    document.addEventListener("click", (e) => {
      if (!e.target.closest(".navbar") && this.isMenuOpen) {
        this.closeMenu();
      }
    });

    this.links.forEach((link) => {
      link.addEventListener("click", (e) => {
        this.handleLinkClick(e);
      });
    });

    window.addEventListener("scroll", () => this.handleScroll());

    window.addEventListener("resize", () => {
      if (window.innerWidth > 768 && this.isMenuOpen) {
        this.closeMenu();
      }
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.toggle.classList.toggle("active");
    this.menu.classList.toggle("active");
    document.body.style.overflow = this.isMenuOpen ? "hidden" : "";
  }

  closeMenu() {
    this.isMenuOpen = false;
    this.toggle.classList.remove("active");
    this.menu.classList.remove("active");
    document.body.style.overflow = "";
  }

  handleLinkClick(e) {
    this.links.forEach((link) => link.classList.remove("active"));

    e.target.classList.add("active");

    if (this.isMenuOpen) {
      this.closeMenu();
    }
  }

  handleScroll() {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 50) {
      this.navbar.classList.add("navbar-scrolled");
    } else {
      this.navbar.classList.remove("navbar-scrolled");
    }

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        const currentId = section.getAttribute("id");
        this.links.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${currentId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new NavbarManager();
});
