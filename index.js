"use srite";

// fucntion select
const selectElement = function (nameElement) {
  const element = document.querySelector(nameElement);
  if (element) return element;
  console.warn("this element undefined");
};
const selectElementAll = function (nameElement) {
  const element = document.querySelectorAll(nameElement);
  if (element) return element;
  console.warn("this elements undefined");
};

// variable

const links = selectElementAll(".navbar-box__link");
const navbarHover = selectElement(".navbar-hover");

// fucntion

const addClass = function (nameElement, nameClass) {
  nameElement.classList.add(nameClass);
};

const removeClass = function (nameElement, nameClass) {
  nameElement.classList.remove(nameClass);
};

const toggleClass = function (nameElement, nameClass) {
  nameElement.classList.toggle(nameClass);
};

const showNavbarHover = function () {
  removeClass(navbarHover, "hide-element");
};
const hideNavbarHover = function () {
  addClass(navbarHover, "hide-element");
};
//

// setup\
navbarHover.classList.add("hide-element");

for (const x of links) {
  x.addEventListener("mouseover", function (x) {
    showNavbarHover();
    console.log(x);
  });

  //   x.addEventListener("mouseout",
}
