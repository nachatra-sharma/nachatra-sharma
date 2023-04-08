let navBar = document.querySelector(".navbar-icon-box");
let navItems1 = document.querySelector(".navbar-list-hidden");
let navItems2 = document.querySelector(".navbar-list");
navBar.addEventListener("click", function () {
  if (navItems1.style.display === "none") {
    navItems1.style.display = "flex";
  } else {
    navItems1.style.display = "none";
  }
});
