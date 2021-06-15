export default class Navbar {
  constructor() {
    this.navbar = document.querySelector("#navbar");
    this.navbarHeight = this.navbar.getBoundingClientRect().height;

    this.menu = document.querySelector(".navbar__menu");
    this.sectionHome = document.querySelector("#home");
    this.sectionProfile = document.querySelector("#profile");
    this.sectionSkills = document.querySelector("#skills");
    this.sectionWorks = document.querySelector("#works");
    this.sectionContact = document.querySelector("#contact");

    this.toggleBtn = document.querySelector(".navbar__toggleBtn");
    this.toggleBtn.addEventListener("click", () => {
      this.menu.classList.toggle("active");
      this.setBackgroundColor();
    });
    document.addEventListener("scroll", this.setBackgroundColor);
  }

  setBackgroundColor = () => {
    if (this.menu.matches(".active") || window.scrollY > this.navbarHeight) {
      this.navbar.classList.add("navbar--dark");
    } else {
      this.navbar.classList.remove("navbar--dark");
    }
  };
}
