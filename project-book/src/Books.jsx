import Book from "./Book";
import bookData from "./BookData";
function Books()
{
    return(
        <div>
            {
                bookData.map((b)=>(
                <Book url={b.image} title={title} price={b.price}/>))}
        </div>
    )
}
export default Books;