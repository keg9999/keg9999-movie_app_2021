//App.js: 리액트 앱을 실행하면 가장 먼저 나타날 화면을 구성해주는 파일.

import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get('https://yts.mx/api/v2/list_movies.json');
    this.setState({ movies, isLoading: false });
  };

  mapResponseToMovieDataObject(movie) {
    return {
      key:movie.id,
      id: movie.id,
      year: movie.year,
      title: movie.title,
      summary: movie.summary,
      imageUrl: movie.medium_cover_image,
      genres: movie.genres
    }
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader-text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  imageUrl={movie.medium_cover_image}
                  genres={movie.genres}
                />
              )
            })}
          </div>
        )}
      </section>
    );
  }
}

export default Home;