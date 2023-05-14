import React from "react";

const MovieCard =({movie}) => {
    return (
        <div>
            <img id="img" src={movie.image} alt="img"/>
            <h2>{movie.name}</h2>
            <h2>{movie.rating}</h2>
            <h2>{movie.date}</h2>
        </div>
    )
}

export default MovieCard