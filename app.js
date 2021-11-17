const mobileMenu = document.querySelector(".mobile-menu")
const navList = document.querySelector(".nav-list")

mobileMenu.addEventListener("click", () => {
    navList.classList.toggle("active");
    mobileMenu.classList.toggle("is-active");


})

window.addEventListener("resize", () => {
    if(window.innerWidth > 768){
        navList.classList.remove("active");
        mobileMenu.classList.remove("is-active");
    }
})