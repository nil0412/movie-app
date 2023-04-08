import {
  ADD_TO_FAVOURITE,
  ADD_MOVIES,
  REMOVE_FROM_FAVOURITE,
  SET_SHOW_FAVOURITES,
} from "../actions";

const initialMoviesState = {
  list: [],
  favourites: [],
  showFavourites: false,
};

export function movies(state = initialMoviesState, action) {
  // if(action.type === ADD_MOVIES){
  //     return {
  //         ...state,
  //         list: action.movies
  //     }
  // }
  // return state;

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
    default:
      return state;
  }
}

const initialSearchState = { result: {} };

export function search(state = initialSearchState, action) {
  return state;
}
