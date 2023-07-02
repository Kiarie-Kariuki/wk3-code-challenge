#Movie Ticket Booking System

This is an HTML, CSS and JavaScript code that implements a movie ticket booking system. The system allows users to view available movies, their details, and purchase tickets.

#Features

Display the details of the first movie on page load.

Load and display a list of movies from a JSON database.

View movie details by clicking on a movie from the movie list.

Purchase a ticket for a selected movie.

Update the ticket count and display remaining capacity after a successful ticket purchase.


#Prerequisites

Before running this code, ensure that you have the following:

A JSON database containing movie data accessible via http://localhost:3000/films.

An HTML file with appropriate elements (e.g., placeholders for movie list and movie details) and necessary event listeners.


#Getting Started

Add the provided code to your respective files or script tag.

Make sure you have an HTML file with the required elements, including placeholders for movie list and movie details.

Update the URLs in the fetch requests (http://localhost:3000/films) to match your server's endpoint.

Set up event listeners and hooks to execute the appropriate functions.


#Usage

The code is designed to be used in a web page with appropriate HTML elements and event listeners. Here's a breakdown of the key functions and their purpose:

getMovie(): Loads and displays the details of the first movie on page load. It fetches data from the server using the /films/1 endpoint.

loadMovieMenu(): Loads the list of movies from the server and displays them in a movie menu. It fetches data from the server using the /films endpoint.

displayMovieDetails(film): Displays the details of a selected movie. It takes a film object as a parameter and updates the movie details in the designated HTML element.

purchaseTicket(event, filmId): Handles the process of purchasing a ticket for a selected movie. It fetches the movie data from the server, checks ticket availability, updates the ticket count, and displays the 

remaining capacity.

Make sure to include appropriate HTML elements, such as placeholders for movie list and movie details, and set up event listeners to trigger the respective functions.


#Limitations

The code assumes the existence of a JSON database with movie data accessible via specific endpoints. Make sure to update the URLs in the fetch requests to match your server's configuration.

The code may require additional styling and error handling to provide a seamless user experience.

Ensure that the necessary libraries and dependencies are included in the project.


#License

This code is free to use. Feel free to modify and use it according to your needs.