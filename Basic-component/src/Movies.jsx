import Movie from "./Movie";
import movieData from "./MovieData" 
function Movies()
{
    return(
    <div className="movies">
        {
        movieData.map((m)=>(
            <Movie url={m.image} title={m.title}/>
        ))}
    </div>
    )}
export default Movies;