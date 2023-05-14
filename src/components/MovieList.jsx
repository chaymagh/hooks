import React from 'react'
import MovieCard from './MovieCard'

const MovieList =({data}) => {
    return(
        <div>
            {React.Children.toArray( data.map((movie)=><MovieCard movie={movie}/>))}
        </div>
    )
}

export default MovieList