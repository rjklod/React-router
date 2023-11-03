import React from 'react'
import MovieCard from './MovieCard'
import {Routes,Route,Link} from 'react-router-dom'

function MovieList ({props}) {
  console.log(props)

    return (
        <div className='items-movie'>
            { props&&props.map((el)=>  <MovieCard props={el}   />)   }

        </div>
      )
}    
 

export default MovieList