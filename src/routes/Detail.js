import React from 'react';
import './Details.css';
import axios from 'axios';

class Detail extends React.Component {

    state = {
    }

    getMovies = async () => {
        const { location } = this.props;
        this.state = {
            movieData: {

            }
        }

        const queryParam = new URLSearchParams(location.search).get("movie_id");
        console.log('querypram movie id: ', queryParam);
        await axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${queryParam}`).then((response) => {
            const responseDataMovie = response.data.data.movie;
            console.log(responseDataMovie);
            this.setState({
                movieData: {
                    title: responseDataMovie.title_long,
                    summary: responseDataMovie.description_full,
                    imageUrl: responseDataMovie.medium_cover_image,
                    genres: responseDataMovie.genres,
                    rating: responseDataMovie.rating,
                    runtime: responseDataMovie.runtime
                }
            });
        });

    }

    componentDidMount() {
        console.log('componentDidMount실행', this.state);
        this.getMovies();
    }

    render() {
        if (this.state.movieData) {
            console.log('render-if', this.state);
            const { title, summary, imageUrl, genres, rating, runtime } = this.state.movieData;
            return (
                <React.Fragment>
                    <div className="details-container">
                        <h2 className="details-title"> {title} </h2>
                        <div className="details-contents">
                            <img className="details-image" src={imageUrl} alt={title} title={title} />
                            <div className="details-right">
                            <h5 className="details-rating-runtime"> rating: {rating} / runtime: {runtime} m </h5>
                            <ul className="details-genres">
                                {genres.map((genre, index) => {
                                    return <li key={index} className="movie-genre">{genre}</li>
                                })}
                            </ul>
                            <span className="details-summary"> {summary} </span>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )
        } else {
            console.log('render-else', this.state);
            return (
                <div>
                    Loading....
                </div>
            );
        }

    }
}

export default Detail;