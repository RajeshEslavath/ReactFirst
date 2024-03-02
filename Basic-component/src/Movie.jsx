function Movie(props)
{
    console.log(props)
    return(
        <div className="movie">
            <img src={props.url} alt="Movies"/><br/>
            <span>{props.title}</span>
        </div>
    )
}
export default Movie;