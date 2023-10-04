const body = document.querySelector("body");
const toggleButton = document.querySelector(".toggle-mode");
const burger = document.querySelector(".burger");
const close = document.querySelector(".close");
const nav = document.querySelector("nav ul");
const logo = document.querySelector(".logo img");

// functions
const toggleMode = () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    logo.src = "./alarado-icon-homepage-dark-mode.svg";
  } else {
    logo.src = "./alarado-icon-homepage.svg";
  }
};
const showNav = () => {
  nav.style.transform = "translateX(0px)";
};
const closeNav = () => {
  nav.style.transform = "translateX(300px)";
};

// listeners and invoke
toggleButton.addEventListener("click", toggleMode);
burger.addEventListener("click", showNav);
close.addEventListener("click", closeNav);
