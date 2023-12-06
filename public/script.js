const nav = document.querySelector(".nav");
window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
}
$(".images img").click(function () {
  $(this).addClass("zoom");
});

$(".images img").mouseleave(function () {
  $(this).removeClass("zoom");
});
