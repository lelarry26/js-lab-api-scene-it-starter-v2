document.addEventListener('DOMContentLoaded', function(){
   function renderMovies(movieArray){
      let movieHTML = movieArray.map(function (currentMovie){
         return `<div class="card" style="width:24rem;">
         <img src="${currentMovie.Poster}">
         <div class="card-body">
         <h2 class="card-title">${currentMovie.Title}</h2>
         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         <a href="#" class="btn btn-primary">Add to Favorites</a>
         </div>
         </div>`
      });
      return movieHTML.join('');
   };
   document.getElementById("search-form").addEventListener("submit", function(e){
      e.preventDefault()
      let container = document.getElementById("movie-container")
      container.innerHTML = renderMovies(movieData);
   })
});