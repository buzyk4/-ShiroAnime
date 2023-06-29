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
        input.classList.add("hide-placeHolder");  // make placeholder invisible
    })
    input.addEventListener("blur", () => {
        input.classList.remove("hide-placeHolder");
        input.value = ""
    })
});

/* Anime landing */
let animeRanking = [
    {
        title: "Gintama Season 4",
        rating: 97,
        img: "Gintama-Season-4.jpg",
        views: 66685,
        genres: [
            "action", "comedy", "drama", "sci-fi"
        ],
        type: "TV Show",
        length: "51",
        premiere: "Spring 2015",
        status: "finished"
    },
    {
        title: "Fruits Basket The Final Season",
        rating: 96,
        img: "Fruits-Basket-The-Final-Season.jpg",
        views: 31385,
        genres: [
            "comedy", "drama", "psychological", "romance", 
        ],
        type: "TV Show",
        length: "13",
        premiere: "Spring 2021",
        status: "finished"
    },
    {
        title: "Fullmetal Alchemist: Brotherhood",
        rating: 95,
        img: "Fullmetal-Alchemist-Brotherhood.jpg",
        views: 6060,
        genres: [
            "action", "adventure", "drama", "fantasy"
        ],
        type: "TV Show",
        length: "64",
        premiere: "Spring 2009",
        status: "finished"
    },
    {
        title: "Kaguya-sama: Love is War",
        rating: 94,
        img: "Kaguya-sama-Love-is-War.png",
        views: 22222,
        genres: [
            "comedy", "psychological", "romance"
        ],
        type: "TV Show",
        length: "13",
        premiere: "Spring 2022",
        status: "finished"
    },
    {
        title: "Gintama: THE VERY FINAL",
        rating: 98,
        img: "Gintama-THE-VERY-FINAL.jpg",
        views: 10000,
        genres: [
            "action", "comedy", "drama", "sci-fi"
        ],
        type: "Movie",
        length: 1.44,
        premiere: "Winter 2021",
        status: "finished"
    },
    {
        title: "Attack on Titan Season 3 Part 2",
        rating: 93,
        img: "Attack-on-Titan-Season-3-Part-2.jpg",
        views: 4206,
        genres: [
            "action", "drama", "fantasy", "mystery"
        ],
        type: "TV Show",
        length: "10",
        premiere: "Winter 2019",
        status: "finished"
    },
    {
        title: "March comes in like a lion Season 2",
        rating: 92,
        img: "March-comes-in-like-a-lion-Season-2.jpg",
        views: 2137,
        genres: [
            "drama"
        ],
        type: "TV Show",
        length: "22",
        premiere: "Fall 2017",
        status: "finished"
    },
    {
        title: "Hunter x Hunter (2011)",
        rating: 91,
        img: "Hunter-x-Hunter-(2011).png",
        views: 103039,
        genres: [
            "action", "adventure", "fantasy"
        ],
        type: "TV Show",
        length: "148",
        premiere: "2011 - 2014",
        status: "finished"
    },
    {
        title: "BLEACH: Thousand-Year Blood War",
        rating: 90,
        img: "BLEACH-Thousand-Year-Blood-War.jpg",
        views: 31385,
        genres: [
            "action", "adventure", "supernatural"
        ],
        type: "TV Show",
        length: "13",
        premiere: "Fall 2022",
        status: "finished"
    },
    {
        title: "Owarimonogatari Second Season",
        rating: 89,
        img: "Owarimonogatari-Second-Season.png",
        views: 9999,
        genres: [
            "comedy", "mystery", "psychological", "romance", "supernatural"
        ],
        type: "TV Show",
        length: "7",
        premiere: "Summer 2017",
        status: "finished"
    }
    
]

// Ranking 

animeRanking.sort(function(a, b) {
    return b.rating - a.rating; // Sort in descending order
});

/* Top 10 anime */
for (let i = 0; i < animeRanking.length; i++) {
    let anime = animeRanking[i];


    /* title layout */
    const layout = document.querySelectorAll(".ellipsis");

    layout.forEach((l, index) => {
        if (index === i) {
            l.innerHTML = anime.title;  
        }
    });

    /* img layout */
    const ImageLayout = document.querySelectorAll(".image");

    ImageLayout.forEach((l, index) => {
        if (index === i) {
            l.src = "main-page-photos/top-100/" + anime.img;  
            l.alt = anime.title
        }
    });


    /* ratings layout */
    const RatingLayout = document.querySelectorAll(".percentage-score");

    RatingLayout.forEach((l, index) => {
        if (index === i) {
            l.innerHTML = anime.rating + "%";  
        }
    });

    /* views layout */
    const ViewsLayout = document.querySelectorAll(".popularity");

    ViewsLayout.forEach((l, index) => {
        if (index === i) {
            l.innerHTML = anime.views + " users";  
        }
    });

    /* Genres  */

    let genres = anime.genres
    const genresLayout = document.querySelectorAll(".genres")


    genresLayout.forEach((l, index) => {
        if (index === i) { 

            genres.forEach((genre) => {

                let anchor = document.createElement("a")
                
                anchor.classList.add("genre");
                anchor.classList.add()

                l.appendChild(anchor)
                anchor.textContent = genre
            })
        }
    })


    /* Format and Status */

    const format = document.querySelectorAll(".format-type");
    const length = document.querySelectorAll(".length");

    format.forEach((l, index) => {
        if (index === i) {
            l.innerHTML = anime.type;
        }
    });

    length.forEach((l, index) => {
        if  (index === i) {
            if (typeof anime.length === "number") {
                let lengthString = anime.length.toString();
                let lengthArray = lengthString.split(".");

                l.innerHTML = lengthArray[0] + " hour " + lengthArray[1] + " mins"

            } else {
                l.innerHTML = anime.length + " episodes";
            }
        }
    })

    const releaseDate = document.querySelectorAll(".release-date");
    const status = document.querySelectorAll(".status");

    releaseDate.forEach((l, index) => {
        if (index === i) {
            l.innerHTML = anime.premiere;
        }
    });

    status.forEach((l, index) => {
        if (index === i) {
            l.style.textTransform = "capitalize"
            l.innerHTML = anime.status
        }
    })

};





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
