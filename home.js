// VARIABLES
const navMenu = document.querySelector("nav .nav-menu")
const asideMenu = document.querySelector("aside")
const closeMenuButton = document.querySelector("aside span")

// EVENTS
navMenu.addEventListener("click",openMenu)
closeMenuButton.addEventListener("click",closeSideMenu)

// FUNCTION FOR EVENTS
function openMenu(){
    asideMenu.classList.add("side-menu-slide-In")
}
function closeSideMenu(){
    asideMenu.classList.remove("side-menu-slide-In")
}