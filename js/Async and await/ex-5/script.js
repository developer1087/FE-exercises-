class Movie {
  constructor(title, releaseDate, picture, rating) {
    this._title = title;
    this._releaseDate = releaseDate;
    this._picture = picture;
    this._rating = rating;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
  }

  get releaseDate() {
    return this._releaseDate;
  }

  set releaseDate(value) {
    this._releaseDate = value;
  }

  get picture() {
    return this._picture;
  }

  set picture(value) {
    this._picture = value;
  }

  get rating() {
    return this._rating;
  }

  set rating(value) {
    this._rating = value;
  }
}

const getHttpOptions = () => ({
  method: 'GET',
  headers: {
  accept: 'application/json',
  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzUyMDQ5NzRjNTdhOWE2NTEzYmVhMjM1OWI5OGI4MSIsInN1YiI6IjY2NGM0NmJjYTk4M2UzN2YwMjdkMTcyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-4MaSrVRt1782KiygZzfsw662pIt-EIzsVVag3jjt7s'
  }
 });
 
 const API_BASE_URL =
 'https://api.themoviedb.org/3/';

 const getImage = (imgPath) => {
  return `https://image.tmdb.org/t/p/original/${imgPath}`
 }


async function fetchMovies() {
  try {
    let response = await fetch(`${API_BASE_URL}movie/popular?language=en-US&page=1`,
    getHttpOptions())
    response = await response.json()
    response.results.forEach(item => {
      const movie = new Movie(
        item.title, 
        item.release_date,
        getImage(item.poster_path),
        item.vote_average
      )
      createMovieCard(movie)
    })
    updateItemCount()
  }
  catch(err) {
    console.error(err)
  }
 }

 function updateItemCount() {
  const itemCountEl = document.querySelector('.sort-bar');
  const movieElements = document.querySelectorAll('.movie');
  const numOfMovies = movieElements.length;
  itemCountEl.textContent = `There are ${numOfMovies} items`;
 }

 function createMovieCard(movie) {
  let target = document.querySelector('.movies-list');
  target.innerHTML += `
    <div class="movie">
      <img class="vector-img" src="./images/Vector.svg">
      <a href="#">
        <img class="poster-img" src="./images/tabler-icon-plus.svg">
      </a>
      <img class="poster" src="${movie.picture}">
      <div class="flex-container movie-info">
        <a href="#" class="title normal-link">${movie.title}</a>
        <p class="release-date"><strong>Release Date:</strong> ${movie.releaseDate}</p>
        <div class="flex-container rate-trailer">
          <div class="flex-container trailer">
            <img src="./images/play.svg">
            <a href="#">Trailer</a>
          </div>
          <div class="flex-container rating">
            <img src="./images/star.svg">
            <p>${movie.rating}</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

 fetchMovies();
 