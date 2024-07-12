"use strict";

const btn = document.getElementById("menu-btn");
const menu = document.querySelector(".mobile-menu");
const overlay = document.querySelector(".overlay");

btn.classList.remove("open");
menu.classList.remove("hidden");
overlay.classList.add("hide");

btn.addEventListener("click", navToggle);

function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("hidden");
  overlay.classList.toggle("hide");
  removeOverlay();

  // Update the aria-expanded attribute of the menu button based on the menu's visibility
  const isMenuHidden = menu.classList.contains("hidden");
  btn.setAttribute("aria-expanded", isMenuHidden ? "false" : "true");
}

overlay.addEventListener("click", navToggle);

const removeOverlay = () => {
  const overlay = document.querySelector(".overlay");
  if (window.innerWidth > 500) {
    overlay.classList.add("hide");
  }
};

window.addEventListener("resize", removeOverlay);
