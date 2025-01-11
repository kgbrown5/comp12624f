const menu = document.querySelector("#menu");
const menublock = document.querySelector(".nav-menu");
const items = document.querySelectorAll(".menu-item");

menu.addEventListener("click", function() {
    menublock.classList.toggle("active");
});