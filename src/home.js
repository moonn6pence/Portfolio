export default class Home {
  constructor() {
    this.home = document.querySelector("#home");
    this.homeHeight = this.home.getBoundingClientRect().height;
    this.homeTitle = document.querySelector(".home__title");
    this.homeDesc = document.querySelector(".home__desc");
    this.contactMeBtn = document.querySelector(".home__contact");
    this.sectionContact = document.querySelector("#contact");
    this.contactMeBtn.addEventListener("click", () => {
      this.sectionContact.scrollIntoView({ behavior: "smooth", block: "end" });
    });
    document.addEventListener("scroll", () => {
      if (window.scrollY > 300 && window.scrollY < 715) {
        this.homeTitle.style.opacity = `${
          (this.homeHeight - window.scrollY) / this.homeHeight
        }`;
        this.homeDesc.style.opacity = `${
          (this.homeHeight - window.scrollY) / this.homeHeight
        }`;
        this.contactMeBtn.style.opacity = `${
          (this.homeHeight - window.scrollY) / this.homeHeight
        }`;
      } else {
        this.homeTitle.style.opacity = "1";
        this.homeDesc.style.opacity = "1";
        this.contactMeBtn.style.opacity = "1";
      }
    });
  }
}
