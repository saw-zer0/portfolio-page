
const hamburger = document.getElementById("hamburger");
const navBar = document.querySelector(".header__primary-nav > ul");

console.log(navBar.offsetHeight)

hamburger.addEventListener("click", () => {
    if (navBar.offsetHeight === 0) {
        navBar.style.width = "100%";
        navBar.style.height = "250px";
    }
    else {
        navBar.style.width = "0px";
        navBar.style.height = "0px";
    }
})

window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024) {
        navBar.style.width = "100%";
        navBar.style.height = "100%"
    }else{
        navBar.style.width = "0px";
        navBar.style.height = "0px";
    }
})