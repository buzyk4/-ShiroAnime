/* Top navigation scrolling animation */

const nav = document.querySelector(".top-nav");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    if(lastScrollY < window.scrollY) {
        nav.classList.add("nav--hidden")
    } else {
        nav.classList.remove("nav--hidden")
    }
    lastScrollY = window.scrollY;
});

/* Mechanisms for searching filters */

const inputList = document.querySelectorAll(".filter-input");

inputList.forEach((input) => {
    input.addEventListener("focus", () => {
        input.classList.add("hide-placeHolder");
    })
    input.addEventListener("blur", () => {
        input.classList.remove("hide-placeHolder"); // make placeholder invisible
    })
});

/* Anime landing */


/* Footer */

const siteTheme = document.querySelector(".theme-button");
const body = document.querySelector("body")

siteTheme.addEventListener("click", () => {

    if (body.classList != "body-dark-theme") {
        body.classList.add("body-dark-theme")
    } else {
        body.classList.remove("body-dark-theme")
    }
})

