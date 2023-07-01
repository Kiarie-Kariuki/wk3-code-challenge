document.addEventListener('DOMContentLoaded', getMovie);

function getMovie() {
  fetch('http://localhost:3000/films/1')
    .then(response => response.json())
    .then(function (film) {
      console.log(film); // Log the response data for debugging

      const movieList = document.querySelector('.details');

      const movieDetail = document.createElement('li');
      movieDetail.innerHTML = `
        <h3>${film.title}</h3>
        <img src="${film.poster}" alt="Movie Poster">
        <p>Runtime: ${film.runtime} minutes</p>
        <p>Showtime: ${film.showtime}</p>
        <p>Tickets Sold: ${film.tickets_sold}</p>
        <p>Description: ${film.description}</p>
        <button class="btn btn-primary">Buy Tickets</button>
        <br/><hr/>
      `;

      movieList.appendChild(movieDetail);
    })
    .catch(function (error) {
      console.log(error);
    });
}
