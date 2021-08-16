import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({year,title,summary,poster,genres}){
    return (
    <div className="movies_moive">
        <img src={poster} alt={title} title={title}></img>
        <div className="movies_data">
            <h3 className="movie_title">{title}</h3>
            <h5 className="movie_year">{year}</h5>
            <ul className="genres">
                {genres.map((genres, index)=> 
                <li className="genres_gener" key={index}>
                    {genres}
                </li>)}
            </ul>
            <p className="summary">{summary}</p>
        </div>
    </div>
    );
}
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}
export default Movie;