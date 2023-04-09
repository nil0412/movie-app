import React from "react";
import { addMovieToList, closeSearchBox, handleMovieSearch } from "../actions";
// import { connect } from "../index";
import { connect } from "react-redux";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
    };
  }
  handleSearch = () => {
    const { searchText } = this.state;
    this.props.dispatch(handleMovieSearch(searchText));
  };
  handleAddToMovies = (movie) => {
    const inputField = document.getElementById("search-input-field");
    inputField.value = "";
    this.setState({
      searchText: "",
    });
    this.props.dispatch(addMovieToList(movie));
  };
  handleChange = (e) => {
    this.setState({
      searchText: e.target.value,
    });
  };
  handleCloseSearchBox = (e) => {
    const inputField = document.getElementById("search-input-field");
    inputField.value = "";
    this.setState({
      searchText: "",
    });
    this.props.dispatch(closeSearchBox());
  };
  render() {
    const { result: movie, showSearchResults } = this.props.search;
    return (
      <div className="nav">
        <div className="search-container">
          <input id="search-input-field" onChange={this.handleChange} />
          <button id="search-btn" onClick={this.handleSearch}>
            Search
          </button>

          {showSearchResults && (
            <div className="search-results">
              <div className="search-result">
                <img src={movie.Poster} alt="search-pic"></img>
                <div className="movie-info">
                  <div className="search-result-box-cancel">
                    <span>{movie.Title}</span>
                    <button
                      className="close-search-box"
                      onClick={this.handleCloseSearchBox}
                    >
                      X
                    </button>
                  </div>
                  <button onClick={() => this.handleAddToMovies(movie)}>
                    Add to Movies
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

// class NavbarWrapper extends React.Component {
//   render() {
//     return (
//       <StoreContext.Consumer>
//         {(store) => (
//           <Navbar dispatch={store.dispatch} search={this.props.search} />
//         )}
//       </StoreContext.Consumer>
//     );
//   }
// }

function mapStateToProps(state) {
  return ({
    search: state.search
  });
}

const connecteNavbarComponent = connect(mapStateToProps)(Navbar);

export default connecteNavbarComponent;
