function renderMovie(movie){
    document.querySelector(".info #movietitle").textContent = movie.title;
    document.querySelector(".info #description").textContent = movie.description;
    document.querySelector(".poster").setAttribute("src", movie.imgUrl);

    let actorList = "";
    for(let i=0; i<movie.actors.length; i++){
        actorList += "<li>" + movie.actors[i] + "</li>";
    }
    document.querySelector(".info #actors").innerHTML = actorList;
}

function changeStarRating(rating){
    for(let i=1; i<=5; i++){
        let star = document.getElementById("star" + i);
        if (i <= rating){
            star.classList.add("filled");
        } else {
            star.classList.remove("filled");
        }
    }
}

for(let i=1; i<=5; i++){
    let star = document.getElementById("star" + i);
    star.addEventListener("click", function(){
        changeStarRating(i);
    });
}

renderMovie(movieData);
changeStarRating();