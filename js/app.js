
let search = document.querySelector('#src');
const btn = document.querySelector('button');

btn.addEventListener('click', searchMovie);


function searchMovie (){
    movieName = search.value;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://www.omdbapi.com/?i=tt3896198&apikey=876bf58e&t='+movieName);
    xhr.onreadystatechange = function () {
    if(xhr.readyState === 4) {
        let movie = JSON.parse(xhr.responseText); //successfully
        if (movie.Response === "True"){
            document.querySelector('#startText').innerHTML = "";
            document.querySelector('h2').innerHTML = movie.Title;
            document.querySelector('#director').innerHTML = "Director: " + movie.Director;
            document.querySelector('#rating').innerHTML = "Imdb: " + movie.imdbRating;
            document.querySelector('#poster').innerHTML = "<img src=\"" + movie.Poster + "\">";
        }
        else {
            alert("There's no movie with that name! Try again.");
        }

        } 
    }
    xhr.send();
 }




