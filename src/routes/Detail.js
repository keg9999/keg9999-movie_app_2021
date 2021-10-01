import React from 'react';
import './Details.css';
import axios from 'axios';

class Detail extends React.Component{

state = {
}

getMovies = async() => {
    const { location, history } = this.props;
    this.state= {
        movieData: {

        }
    }
        
    if( location.state === undefined ){
        const queryParam = new URLSearchParams(this.props.location.search).get("movie_id");
        console.log('querypram movie id: ', queryParam);
     await axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${queryParam}`).then((response)=>{
        console.log(response);
        const responseDataMovie = response.data.data.movie;
        this.setState({
            movieData: {
            title: responseDataMovie.title,
            year: responseDataMovie.year,
            summary: responseDataMovie.summary,
            imageUrl: responseDataMovie.medium_cover_image,
            genres: responseDataMovie.genres
         }});
     });
    } else {
        const locationState  = location.state;
        this.setState(
            {
            movieData: {
                title: locationState.title,
                year: locationState.year,
                summary: locationState.summary,
                imageUrl: locationState.imageUrl,
                genres: locationState.genres
            }
        }
        );
    }
}

    async componentDidMount(){
       this.getMovies();
    }

    render(){
        console.log(this.state);
        if( this.state.movieData ){
            const { title, year, summary, imageUrl, genres } = this.state.movieData;
            return (
              <React.Fragment>
                <div className="details-container">
                <span className="details-title"> {title} </span>
                <div className="details-year"> {year} </div>
                <div className="details-summary"> {summary} </div>
                <img className="details-image" src={imageUrl} alt={title} title={title} />
                <div className="details-genres"> {genres} </div>
                </div>
             </React.Fragment>
            )
        }else{
            return(
                <div>
                  Loading....
                </div>
            );
        }
        
    }
}

export default Detail;