document.addEventListener('DOMContentLoaded', function (event){
    event.preventDefault();

    getMovie();
    });

    // function to load and display the first movie
    function getMovie() {
        fetch('http://localhost:3000/films/1')
          .then(response => response.json())
          .then(function (film) {
            console.log(film); // Log the response data
      
            const movie1 = document.querySelector('.details');
            const availableTickets = film.capacity -film.tickets_sold
      
            const movieDetail = document.createElement('li');
            // display the data of the movie on the HTML
            movieDetail.innerHTML = `
              <h3>${film.title}</h3>
              <img src="${film.poster}" alt="Movie Poster">
              <p>Runtime: ${film.runtime} minutes</p>
              <p>Showtime: ${film.showtime}</p>
              <p>Tickets Sold: ${film.tickets_sold}</p>
              <p>Available Tickets: ${availableTickets}</p>
              <p>Description: ${film.description}</p>
              <button class="btn">Buy Tickets</button>
            `;
      
            movie1.appendChild(movieDetail);
      
          // grabbing the button buy tickets created in innerHTML
            const buyTicketButton = document.querySelector('.btn');
            buyTicketButton.addEventListener('click', function (event) {
              event.preventDefault();
      
              purchaseTicket(event, film.id);
            });
          })
      }
      
    // grabbing the button to open the movie menu
    const menuButton = document.getElementById('menu-opener')
    menuButton.addEventListener('click', function (event){
    event.preventDefault();

        loadMovieMenu();
   });


        // function to load the movies from the json database
    function loadMovieMenu() {
        const filmMenu = document.getElementById('movies');
      
        fetch('http://localhost:3000/films')
          .then(response => response.json())
          .then(function (data) {
            console.log(data); // Log the response data for debugging
      
            const films = data.films;
      
            // Remove the placeholder li element
            filmMenu.innerHTML = '';
      
            // loop through the data received 
            for(let film of data) {
              const filmItem = document.createElement('li');
              filmItem.classList.add('film-item');
              filmItem.textContent = film.title;
              filmItem.addEventListener('click', function () {
                // Call a function to display the movie details when clicked
                displayMovieDetails(film);
              });
      
              filmMenu.appendChild(filmItem);
          }
      })
    }
      
    // function to display the movies
      function displayMovieDetails(film) {
        const movieList = document.querySelector('.movie-details');
      
        const moviesDetail = document.createElement('li');
        const availableTickets = film.capacity - film.tickets_sold
        moviesDetail.innerHTML = `
          <h3>${film.title}</h3>
          <img src="${film.poster}" alt="Movie Poster" class="full-width-image">
          <p>Runtime: ${film.runtime} minutes</p>
          <p>Showtime: ${film.showtime}</p>
          <p>Tickets Sold: ${film.tickets_sold}</p>
          <p>Available Tickets: ${availableTickets}</p>
          <p>Description: ${film.description}</p>
          <button class="btn">Buy Tickets</button>
        `;
        // grabbing the button buy tickets created using innerHTML
        let buyTicketButton = moviesDetail.querySelector('.btn');
        buyTicketButton.addEventListener('click', function (event){
            event.preventDefault();

            purchaseTicket(event, film.id)
        });
      
        // Clear previous movie details
        movieList.innerHTML = '';
      
        movieList.appendChild(moviesDetail);

      }

      // function to handle buying of ticket
      function purchaseTicket(event, filmId) {
        event.preventDefault();
      // fetching the movie data according to its id
        fetch(`http://localhost:3000/films/${filmId}`)
          .then(response => response.json())
          .then(function (film) {
            const capacity = film.capacity;
            const ticketsSold = film.tickets_sold;
      
            if (ticketsSold >= capacity) {
              console.log('Sorry, the showing is sold out.');
              return 'Sorry, the showing is sold out.';
            }
      
            const updatedTicketsSold = ticketsSold + 1;
      
            // updating the movie data on the server
            fetch(`http://localhost:3000/films/${filmId}`, {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                tickets_sold: updatedTicketsSold
              })
            })
              .then(response => response.json())
              .then(function (updatedFilm) {
                event.preventDefault();
                console.log('Ticket purchased successfully!');
                console.log('Remaining capacity:', updatedFilm.capacity - updatedFilm.tickets_sold);
                return 'Ticket purchased successfully!';
              })
  })
}
      