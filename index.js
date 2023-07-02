document.addEventListener('DOMContentLoaded', getMovie);

function getMovie() {
  fetch('http://localhost:3000/films/1')
    .then(response => response.json())
    .then(function (film) {
      console.log(film); // Log the response data for debugging

      const movie1 = document.querySelector('.details');

      const movieDetail = document.createElement('li');
      movieDetail.innerHTML = `
        <h3>${film.title}</h3>
        <img src="${film.poster}" alt="Movie Poster">
        <p>Runtime: ${film.runtime} minutes</p>
        <p>Showtime: ${film.showtime}</p>
        <p>Tickets Sold: ${film.tickets_sold}</p>
        <p>Description: ${film.description}</p>
        <button class="btn btn-primary">Buy Tickets</button>
      `;

      movie1.appendChild(movieDetail);
    })
    .catch(function (error) {
      console.log(error);
    });
}


const menuButton = document.getElementById('menu-opener')
menuButton.addEventListener('click', loadMovieMenu)


function loadMovieMenu() {
    const filmMenu = document.getElementById('movies');
  
    fetch('http://localhost:3000/films')
      .then(response => response.json())
      .then(function (data) {
        console.log(data); // Log the response data for debugging
  
        const films = data.films;
  
        // Remove the placeholder li element
        filmMenu.innerHTML = '';
  
        for(let film of data) {
          const filmItem = document.createElement('li');
          filmItem.classList.add('film-item');
          filmItem.textContent = film.title;
          filmItem.addEventListener('click', function () {
            // Call a function to display the movie details when clicked
            displayMovieDetails(film);
          });
  
          filmMenu.appendChild(filmItem);
        ;
      }
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  })
}
  
  function displayMovieDetails(film) {
    const movieList = document.querySelector('.movie-details');
  
    const moviesDetail = document.createElement('li');
    moviesDetail.innerHTML = `
      <h3>${film.title}</h3>
      <img src="${film.poster}" alt="Movie Poster" class="full-width-image">
      <p>Runtime: ${film.runtime} minutes</p>
      <p>Showtime: ${film.showtime}</p>
      <p>Tickets Sold: ${film.tickets_sold}</p>
      <p>Description: ${film.description}</p>
      <button class="btn btn-primary">Buy Tickets</button>
    `;
  
    // Clear previous movie details
    movieList.innerHTML = '';
  
    movieList.appendChild(moviesDetail);

  }