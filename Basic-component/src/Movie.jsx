function Movie(title,url)
{
    console.log(title,url)
    return(
        <div className="movie">
            <img src={url} alt="Movies"/><br/>
            <span>{title}</span>
        </div>
    )
}
export default Movie;