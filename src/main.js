import Home from "./home.js";
import Navbar from "./navbar.js";
import Works from "./works.js";

const NavbarSection = new Navbar();
const WorksSection = new Works();
const HomeSection = new Home();
const arrowBtn = document.querySelector(".arrowBtn");

document.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    arrowBtn.style.visibility = "visible";
  } else {
    arrowBtn.style.visibility = "hidden";
  }
});

arrowBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
