import React from 'react'

const Movies = ({moviesList}) => 
{
  return (
    <div style={{display:'grid', gridTemplateColumns:"repeat(4,1fr)",rowGap:"40px", columnGap:"40px"}}>
        {moviesList && moviesList.map((movie)=>(
            <span class='border border-waring'><div className='insideBox'>
            <img 
            src={movie.Poster} 
            alt={movie.Title}
            height="250"
            width="250"
            alignitem="center"
            />
           <a href='https://www.imdb.com/'><h3>{movie.Title}</h3></a>
           <p>Released: {movie.Year}</p>
            </div></span>
        ))}
    </div>
  )
}
export default Movies