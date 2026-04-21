//toggle class active
const NavbarNav = document.querySelector(".Navbar-nav");
//ketika hamburger-menu di click
document.querySelector("#hamburger-menu").onclick = () => {
  NavbarNav.classList.toggle("active");
};
// click di luar sidebar untuk menghilanghkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !NavbarNav.contains(e.target)) {
    NavbarNav.classList.remove("active");
  }
});
