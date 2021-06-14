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

    this.menu.addEventListener("click", (event) => {
      const curTarget = event.target;
      const curNode = curTarget.nodeName;
      const curText = curTarget.textContent;
      if (curNode === "LI") {
        switch (curText) {
          case "Home":
            this.sectionHome.scrollIntoView({
              block: "start",
              behavior: "smooth",
            });
            break;
          case "Profile":
            this.sectionProfile.scrollIntoView({
              block: "center",
              behavior: "smooth",
            });
            break;
          case "Skills":
            this.sectionSkills.scrollIntoView({
              block: "center",
              behavior: "smooth",
            });
            break;
          case "Works":
            this.sectionWorks.scrollIntoView({
              block: "center",
              behavior: "smooth",
            });
            break;
          case "Contact":
            this.sectionContact.scrollIntoView({
              block: "end",
              behavior: "smooth",
            });
            break;
        }
      }
    });
  }

  setBackgroundColor = () => {
    if (this.menu.matches(".active") || window.scrollY > this.navbarHeight) {
      this.navbar.classList.add("navbar--dark");
    } else {
      this.navbar.classList.remove("navbar--dark");
    }
  };
}
