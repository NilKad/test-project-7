async function fetchTrendingMovies(p = 1) {
  const searchParams = new URLSearchParams({
    api_key: '0214e4f6556edfc65f2eadfc23b43510',
    language: 'en-US',
    page: p ?? 1,
    include_adult: false,
  });

  const data = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?${searchParams}`
  );
  const results = await data.json();
  return results;
}

async function fetchMovieById(id) {
  const searchParams = new URLSearchParams({
    api_key: '0214e4f6556edfc65f2eadfc23b43510',
    language: 'en-US',
  });
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?${searchParams}`
  );
  const results = await data.json();
  return results;
}

async function fetchMoviesByName(movieName, p = 1) {
  const searchParams = new URLSearchParams({
    api_key: '0214e4f6556edfc65f2eadfc23b43510',
    language: 'en-US',
    page: p ?? 1,
    include_adult: false,
    query: movieName,
  });

  try {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?${searchParams}`
    );
    const results = await data.json();

    return results;
  } catch (error) {
    console.log(error.statusText);
  }
}

async function fetchGenresList() {
  try {
    const data = await fetch(
      'https://api.themoviedb.org/3/genre/movie/list?api_key=0214e4f6556edfc65f2eadfc23b43510&language=en-US'
    );
    const genresList = await data.json();
    localStorage.setItem('genresList', JSON.stringify(genresList.genres));
  } catch (error) {
    console.log(error.message);
  }
}

if (!localStorage.getItem('genresList')) {
  fetchGenresList();
}

export {
  fetchTrendingMovies,
  fetchMovieById,
  fetchMoviesByName,
  fetchGenresList,
};
