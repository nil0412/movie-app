// {
//     type: 'ADD_MOVIES',
//     movies: [m1, m2, m3],

// }
// {
//     type: 'DECREASE_COUNT'
// }

//action types
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const SET_SHOW_FAVOURITES = "SET_SHOW_FAVOURITES";
export const ADD_MOVIE_TO_LIST = "ADD_MOVIE_TO_LIST";
export const HANDLE_MOVIE_SEARCH = "HANDLE_MOVIE_SEARCH";
export const ADD_MOVIE_SEARCH_RESULT = "ADD_MOVIE_SEARCH_RESULT";
export const CLOSE_SEARCH_BOX = 'CLOSE_SEARCH_BOX';

//action creaters
export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies,
  };
}

export function addToFavourite(movie) {
  return {
    type: ADD_TO_FAVOURITE,
    movie,
  };
}

export function removeFromFavourite(movie) {
  return {
    type: REMOVE_FROM_FAVOURITE,
    movie,
  };
}

export function setShowFavourites(value) {
  return {
    type: SET_SHOW_FAVOURITES,
    value,
  };
}

export function addMovieToList(movie) {
  return {
    type: ADD_MOVIE_TO_LIST,
    movie,
  };
}

export function handleMovieSearch(movie) {
  const url = `https://www.omdbapi.com/?apikey=2cbfc565&t=${movie}`;
  return function (dispatch) {
    fetch(url)
      .then((response) => response.json())
      .then((movie) => {
        console.log("movie: ", movie);

        // dispatch an action
        dispatch({ type: "ADD_MOVIE_SEARCH_RESULT", movie });
      });
  };
}

export function addMovieSearchResult(movie) {
  return {
    type: ADD_MOVIE_SEARCH_RESULT,
    movie,
  };
}

export function closeSearchBox() {
  return {
    type: CLOSE_SEARCH_BOX,
  };
}
