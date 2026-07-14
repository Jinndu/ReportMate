// VARIABLES
const navMenu = document.querySelector("nav .nav-menu")
const asideMenu = document.querySelector("aside")
const closeMenuButton = document.querySelector("aside span")
const main = document.querySelector("main")
const body = document.querySelector("body")

// EVENTS
navMenu.addEventListener("click",openMenu)
closeMenuButton.addEventListener("click",closeSideMenu)

// FUNCTION FOR EVENTS
function openMenu(){
    asideMenu.classList.add("side-menu-slide-In")
    main.classList.add("menu-open")
    body.style.overflow = "hidden"
}
function closeSideMenu(){
    asideMenu.classList.remove("side-menu-slide-In")
    main.classList.remove("menu-open")
    body.style.overflow="auto"
    
}