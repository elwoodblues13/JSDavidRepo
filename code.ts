import { Review } from "./interfaces";
import {movieData} from "./data";
import * as $ from "jquery";

// function renderMovie(movie){
//     document.querySelector(".info #movietitle").textContent = movie.title;
//     document.querySelector(".info #description").textContent = movie.description;
//     document.querySelector(".poster").setAttribute("src", movie.imgUrl);

//     let actorList = "";
//     for(let i=0; i<movie.actors.length; i++){
//         actorList += "<li>" + movie.actors[i] + "</li>";
//     }
//     document.querySelector(".info #actors").innerHTML = actorList;
// }

function renderMovie(movie: Review) {
    $(".info #movietitle").text(movie.title);
    $(".info #description").text(movie.description);
    $(".poster").attr("src", movie.imgUrl);

    $(".info #actors").empty();
    for (let i = 0; i < movie.actors.length; i++) {
        $(".info #actors").append("<li>" + movie.actors[i] + "</li>");
    }
}

// function changeStarRating(rating){
//     for(let i=1; i<=5; i++){
//         let star = document.getElementById("star" + i);
//         if (i <= rating){
//             star.classList.add("filled");
//         } else {
//             star.classList.remove("filled");
//         }
//     }
// }

function changeStarRating(rating) {
    $(".filled").removeClass("filled");

    for (let i = 1; i <= rating; i++) {
        $("[id=" + i + "]").addClass("filled");
    }
}

// for(let i=1; i<=5; i++){
//     let star = document.getElementById("star" + i);
//     star.addEventListener("click", function(){
//         changeStarRating(i);
//     });
// }

$(".stars").on("click", "span", (e) => {
    let star = $(e.target);
    let rating = parseInt(star.attr("id"));
    changeStarRating(rating);
});

renderMovie(movieData);