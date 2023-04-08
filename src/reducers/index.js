import {
  ADD_TO_FAVOURITE,
  ADD_MOVIES,
  REMOVE_FROM_FAVOURITE,
  SET_SHOW_FAVOURITES,
  ADD_MOVIE_TO_LIST,
  ADD_MOVIE_SEARCH_RESULT,
  CLOSE_SEARCH_BOX,
} from "../actions";

const initialMoviesState = {
  list: [],
  favourites: [],
  showFavourites: false,
};

export function movies(state = initialMoviesState, action) {
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };
    case ADD_TO_FAVOURITE:
      return {
        ...state,
        favourites: [action.movie, ...state.favourites],
      };
    case REMOVE_FROM_FAVOURITE:
      return {
        ...state,
        favourites: state.favourites.filter(
          (movie) => movie.imdbID !== action.movie.imdbID
        ),
      };
    case SET_SHOW_FAVOURITES:
      return {
        ...state,
        showFavourites: action.value,
      };
    case ADD_MOVIE_TO_LIST:
      return {
        ...state,
        list: [action.movie, ...state.list],
      };
    default:
      return state;
  }
}

const initialSearchState = { result: {}, showSearchResults: false };

export function search(state = initialSearchState, action) {
  switch (action.type) {
    case ADD_MOVIE_SEARCH_RESULT:
      return {
        ...state,
        result: action.movie,
        showSearchResults: true,
      };
    case ADD_MOVIE_TO_LIST:
      return {
        ...state,
        showSearchResults: false,
      };
    case CLOSE_SEARCH_BOX:
      return {
        ...state,
        showSearchResults: false,
      };
    default:
      return state;
  }
}
