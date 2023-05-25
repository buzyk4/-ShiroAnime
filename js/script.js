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
let animeRanking = [
    {
        title: "Gintama Season 4",
        rating: 97,
        img: "Gintama-Season-4.jpg",
        views: 31385,
    },
    {
        title: "Fruits Basket The Final Season",
        rating: 96,
        img: "Fruits-Basket-The-Final-Season.jpg",
        views: 31385
    },
    {
        title: "Fullmetal Alchemist: Brotherhood",
        rating: 95,
        img: "Fullmetal-Alchemist-Brotherhood.jpg",
        views: 31385
    },
    {
        title: "Kaguya-sama: Love is War",
        rating: 94,
        img: "Kaguya-sama-Love-is-War.png",
        views: 31385
    },
    {
        title: "Gintama: THE VERY FINAL",
        rating: 98,
        img: "Gintama-THE-VERY-FINAL.jpg",
        views: 31385
    },
    {
        title: "Attack on Titan Season 3 Part 2",
        rating: 93,
        img: "Attack-on-Titan-Season-3-Part-2.jpg",
        views: 31385
    },
    {
        title: "March comes in like a lion Season 2",
        rating: 92,
        img: "March-comes-in-like-a-lion-Season-2.jpg",
        views: 31385
    },
    {
        title: "Hunter x Hunter (2011)",
        rating: 91,
        img: "Hunter-x-Hunter-(2011).png",
        views: 103039
    },
    {
        title: "BLEACH: Thousand-Year Blood War",
        rating: 90,
        img: "BLEACH-Thousand-Year-Blood-War.jpg",
        views: 31385
    },
    {
        title: "Owarimonogatari Second Season",
        rating: 89,
        img: "Owarimonogatari-Second-Season.png",
        views: 31385
    }
    
]

// Ranking 

animeRanking.sort(function(a, b) {
    return b.rating - a.rating; // Sort in descending order
});

/* Top 10 anime title layout*/
for (let i = 0; i < animeRanking.length; i++) {
    let anime = animeRanking[i];

    const layout = document.querySelectorAll(".ellipsis");

    layout.forEach((l, index) => {
        if (index === i) {
            l.innerHTML = anime.title;  
        }
    })
}

/* Top 10 anime img layout*/
for (let i = 0; i < animeRanking.length; i++) {
    let anime = animeRanking[i];

    const ImageLayout = document.querySelectorAll(".image");

    ImageLayout.forEach((l, index) => {
        if (index === i) {
            l.src = "main-page-photos/top-100/" + anime.img;  
        }
    })
}

/* Top 10 anime ratings layout */
for (let i = 0; i < animeRanking.length; i++) {
    let anime = animeRanking[i];

    const RatingLayout = document.querySelectorAll(".percentage-score");

    RatingLayout.forEach((l, index) => {
        if (index === i) {
            l.innerHTML = anime.rating + "%";  
        }
    })
}


/* Top 10 anime views layout*/
for (let i = 0; i < animeRanking.length; i++) {
    let anime = animeRanking[i];

    const ViewsLayout = document.querySelectorAll(".popularity");

    ViewsLayout.forEach((l, index) => {
        if (index === i) {
            l.innerHTML = anime.views;  
        }
    })
}





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
