function Book(url,title,price)
{
    return(
        <div>
            <img src={url} alt="Books"/>
            <h2>{title}</h2>
            <h3>{price}</h3>
        </div>
    )
}
export default Book;