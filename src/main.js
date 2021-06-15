import Home from "./home.js";
import Navbar from "./navbar.js";
import Works from "./works.js";

const NavbarSection = new Navbar();
const WorksSection = new Works();
const HomeSection = new Home();

const sectionIds = ["#home", "#profile", "#skills", "#works", "#contact"];
const sections = sectionIds.map((id) => document.querySelector(id));
const menuItems = sectionIds.map((id) =>
  document.querySelector(`[data-link="${id}"]`)
);
let targetMenu = menuItems[0];
let targetMenuIndex = 0;

const menu = document.querySelector(".navbar__menu");

menu.addEventListener("click", (event) => {
  const curTarget = event.target;
  const link = curTarget.dataset.link;
  if (link == null) {
    return;
  }

  clickToScroll(link);
});

function clickToScroll(selector) {
  const item = document.querySelector(selector);
  item.scrollIntoView({ block: "center", behavior: "smooth" });
  targetingMenuItem(menuItems[sectionIds.indexOf(selector)]);
}

function targetingMenuItem(target) {
  targetMenu.classList.remove("onDisplay");
  targetMenu = target;
  targetMenu.classList.add("onDisplay");
}

HomeSection.setScrollListener(clickToScroll);

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.3,
};

const observerCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting && entry.intersectionRatio > 0) {
      const index = sectionIds.indexOf(`#${entry.target.id}`);
      if (entry.boundingClientRect.y < 0) {
        targetMenuIndex = index + 1;
      } else {
        targetMenuIndex = index - 1;
      }
    }
  });
};
const observer = new IntersectionObserver(observerCallback, observerOptions);
sections.forEach((section) => observer.observe(section));

window.addEventListener("wheel", () => {
  if (window.scrollY === 0) {
    targetMenuIndex = 0;
  } else if (
    Math.floor(window.scrollY + window.innerHeight) >=
    document.body.clientHeight
  ) {
    targetMenuIndex = menuItems.length - 1;
  }
  targetingMenuItem(menuItems[targetMenuIndex]);
});
