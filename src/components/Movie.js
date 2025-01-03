import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import { Link } from 'react-router-dom';

function Movie({id, title, year, summary, imageUrl, genres }) {
    return (
        <div className="movie">
            <Link 
                to={{
                    pathname: '/movie-detail',
                    state: {id, year, title, summary, imageUrl, genres},
                    search:`movie_id=${id}`
                }}
            >                      
            <img src={imageUrl} alt={title} title={title} />
            <div className="movie-data">
                <h3 className="movie-title">{title}</h3>
                <h5 className="movie-year">{year}</h5>
                <ul className="movie-genres">
                    {genres.map((genre, index) => {
                        return <li key={index} className="movie-genre">{genre}</li>
                    })}
                </ul>
                <p className="movie-summary">{summary.slice(0,180)}...</p>
            </div>
            </Link>
        </div>
    );
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;

