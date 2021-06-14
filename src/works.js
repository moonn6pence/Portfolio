export default class Works {
  constructor() {
    this.workBtnContainer = document.querySelector(".works__categories");
    this.projectContainer = document.querySelector(".work__projects");
    this.projects = document.querySelectorAll(".project");
    this.workBtnContainer.addEventListener("click", (e) => {
      const filter =
        e.target.dataset.filter || e.target.parentNode.dataset.filter;
      if (filter == null) {
        return;
      }

      const selected = document.querySelector(".category__btn.selected");
      selected.classList.remove("selected");
      const target =
        e.target.nodeName === "BUTTON" ? e.target : e.target.parentNode;
      target.classList.add("selected");

      this.projectContainer.classList.add("anime-out");
      setTimeout(() => {
        this.projects.forEach((project) => {
          if (project.dataset.cat === filter || filter === "*") {
            project.classList.remove("invisible");
          } else {
            project.classList.add("invisible");
          }
        });
        this.projectContainer.classList.remove("anime-out");
      }, 300);
    });
  }
}
