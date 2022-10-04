const navbar_btn = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");


navbar_btn.addEventListener('click', () => {
    nav_header.classList.toggle("actived")
})