let navBar = document.querySelector(".navbar-icon-box");
let navItems = document.querySelector(".navbar-list-hidden");
navBar.addEventListener("click", function () {
  if (navItems.classList.contains('navbar-list-hidden') ) {
    navItems.classList.add('navbar-list-visible');
    navItems.classList.remove('navbar-list-hidden');
  } else {
    navItems.classList.add('navbar-list-hidden');
    navItems.classList.remove('navbar-list-visible');
  }
});
