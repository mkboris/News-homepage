"use strict";

const btn = document.getElementById("menu-btn");
const menu = document.querySelector(".mobile-menu");
const hideElements = document.querySelectorAll(".hide");

// Initially remove 'open' class from button, 'hidden' class from menu, and 'hide' class from hidden elements
btn.classList.remove("open");
menu.classList.remove("hidden");
hideElements.forEach((hide) => {
  hide.classList.remove("hide");
});

btn.addEventListener("click", navToggle);

function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("hidden");

  // Update the aria-expanded attribute of the menu button based on the menu's visibility
  const isMenuHidden = menu.classList.contains("hidden");
  btn.setAttribute("aria-expanded", isMenuHidden ? "false" : "true");

  hideElements.forEach((hide) => {
    hide.classList.toggle("hide");
  });
}
