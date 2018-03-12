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
renderMovie(movieData);