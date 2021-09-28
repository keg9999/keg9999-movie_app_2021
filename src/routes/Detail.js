import React from 'react';
import './Details.css';

class Detail extends React.Component{

    componentDidMount(){
        const { location, history } = this.props;
        
        if( location.state === undefined ){
            history.push('/');
        }
    }

    render(){
        const { location } = this.props;
        const { title, year, summary, poster, genres } = location.state;
        if( location.state ){
            return (
              <React.Fragment>
                <div className="details-container">
                <span className="details-title"> {title} </span>
                <div className="details-year"> {year} </div>
                <div className="details-summary"> {summary} </div>
                <img className="details-image" src={poster} alt={title} title={title} />
                <div className="details-genres"> {genres} </div>
                </div>
             </React.Fragment>
            )
        }else{
            return null;
        }
        
    }
}

export default Detail;