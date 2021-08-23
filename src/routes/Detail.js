import React from "react";
import "./Detail.css";

class Detail extends React.Component{
    componentDidMount(){
        const {location, history} = this.props;
        if(location.state===undefined)
        {
            history.push("/");
        }
    }
    render(){
        const{location}=this.props;
        if(location.state){
            return(
            <div className="movies_detail"> 
            <img src={location.state.poster} alt={location.state.title} title={location.state.title}></img>
            <div className="movies_detail_data">
            <h3 className="movies_detail_title">{location.state.title}</h3>
            <h5 className="movies_detail_year">{location.state.year}</h5>
            <ul className="genres">
                {location.state.genres.map((genres, index)=> 
                <li className="genres_gener" key={index}>
                    {genres}
                </li>)}
            </ul>
            <p className="summary">{location.state.summary}...</p>
        </div>
                
                </div>
                );
            
        }
        else{
            return null;
        }
    }
}

export default Detail;