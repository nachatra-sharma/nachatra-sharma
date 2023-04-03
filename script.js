$(".nav-tabs-dropdown")
  .on("click", ".nav-link:not('.active')", function (event) {
    $(this).closest("ul").removeClass("open");
  })
  .on("click", ".nav-link.active", function (event) {
    $(this).closest("ul").toggleClass("open");
  });

// let selectItem = document.querySelectorAll(".SliderItem");
// selectItem.addEventListener("click", function (event) {
//   event.DefaultPropagation();
// });
