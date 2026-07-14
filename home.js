// VARIABLES
const navMenu = document.querySelector("nav .nav-menu")
const asideMenu = document.querySelector("aside")
const closeMenuButton = document.querySelector("aside span")
const main = document.querySelector("main")
const body = document.querySelector("body")
const loadingAnimation = document.querySelectorAll(".loader")

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

var observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.add("loading-animation")
        }
        if(!entry.isIntersecting){
            entry.target.classList.remove("loading-animation")
        }
    })
})
loadingAnimation.forEach(loaded=>{
    observer.observe(loaded)
})