$(".nav-tabs-dropdown")
  .on("click", ".nav-link:not('.active')", function (event) {
    $(this).closest("ul").removeClass("open");
  })
  .on("click", ".nav-link.active", function (event) {
    $(this).closest("ul").toggleClass("open");
  });

let navBar = document.querySelector(".navbar-icon-box");
let navItems = document.querySelector(".navbar-list-hidden");
// console.log((navItems.style.display = "none"));
navBar.addEventListener("click", function () {
  if (navItems.style.display === "none") {
    navItems.style.display = "flex";
  } else {
    navItems.style.display = "none";
  }
});
